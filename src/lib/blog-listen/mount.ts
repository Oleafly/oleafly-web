import { track } from "../analytics";
import { canOfferListen, canTryKokoro } from "./capabilities";
import { buildSpeakIndex } from "./extract-text";
import { createHighlighter } from "./highlight";
import {
  type ActivePlayback,
  speakWithKokoro,
  speakWithWebSpeech,
} from "./engines";

type MountOpts = {
  host: HTMLElement;
  prose: HTMLElement;
  /** Content id for analytics (blog slug or learn article id). */
  postId: string;
  /** Analytics surface label. */
  surface?: "blog" | "learn";
  /** Spoken in aria labels / tooltips: "post" | "lesson". */
  kind?: "post" | "lesson";
  /** Show the · separator before the button (default true). */
  separator?: boolean;
};

type State = "idle" | "loading" | "playing" | "paused";

/**
 * Mount the listen control only when Web Speech is available (silent fallback).
 * Kokoro is attempted first when safe; failures fall through without error UI.
 * If every engine fails, the control is removed entirely.
 *
 * While playing: highlight the active sentence, and the current word when
 * boundary events are available.
 *
 * Used on blog posts and /learn topics.
 */
export function mountBlogListen({
  host,
  prose,
  postId,
  surface = "blog",
  kind = "post",
  separator = true,
}: MountOpts): void {
  if (!canOfferListen()) {
    host.remove();
    return;
  }

  const index = buildSpeakIndex(prose);
  if (index.speak.length < 40) {
    host.remove();
    return;
  }

  const highlighter = createHighlighter(prose, index);
  /** Absolute original offsets for the sentence currently being spoken. */
  let currentSentence = { start: 0, end: 0 };
  /** speak-chunk string for word offset mapping within the active sentence. */
  let currentChunk = "";

  const listenLabel = kind === "lesson" ? "Listen to this lesson" : "Listen to this post";
  const analytics = { post: postId, surface };

  host.hidden = false;
  host.classList.add("blog-listen");
  host.innerHTML = `
    ${separator ? '<span class="blog-listen-sep" aria-hidden="true">·</span>' : ""}
    <button
      type="button"
      class="blog-listen-btn"
      data-ph="blog_listen_click"
      data-ph-post="${escapeAttr(postId)}"
      data-ph-surface="${escapeAttr(surface)}"
      aria-label="${listenLabel}"
      data-tip="Listen to this"
    >
      <span class="blog-listen-icon" data-mode="headphones" aria-hidden="true"></span>
      <span class="blog-listen-tip" role="tooltip">Listen to this</span>
    </button>
  `;

  const btn = host.querySelector<HTMLButtonElement>(".blog-listen-btn")!;
  const icon = host.querySelector<HTMLElement>(".blog-listen-icon")!;
  const tip = host.querySelector<HTMLElement>(".blog-listen-tip")!;

  let state: State = "idle";
  let playback: ActivePlayback | null = null;
  let abort: AbortController | null = null;

  const setTip = (label: string) => {
    tip.textContent = label;
    btn.dataset.tip = label;
  };

  const setState = (next: State) => {
    state = next;
    host.dataset.state = next;
    btn.disabled = next === "loading";
    if (next === "idle") {
      btn.setAttribute("aria-label", listenLabel);
      setTip("Listen to this");
      icon.dataset.mode = "headphones";
    } else if (next === "loading") {
      btn.setAttribute("aria-label", "Preparing audio");
      setTip("Preparing…");
      icon.dataset.mode = "loading";
    } else if (next === "playing") {
      btn.setAttribute("aria-label", "Pause listening");
      setTip("Pause");
      icon.dataset.mode = "pause";
    }
  };

  const hardFailHide = (reason: string) => {
    try {
      playback?.stop();
    } catch {
      /* ignore */
    }
    playback = null;
    highlighter.destroy();
    track("blog_listen_unavailable", { ...analytics, reason });
    host.remove();
  };

  const onChunkStart = (chunk: string) => {
    currentChunk = chunk;
    // Prefer structured sentence list; fall back to text search
    const match = findSentence(index, chunk);
    if (match) {
      currentSentence = { start: match.start, end: match.end };
      highlighter.highlightSentence(match.start, match.end);
    } else {
      highlighter.highlightSentenceText(chunk);
    }
  };

  const onBoundary = (charIndex: number, charLength: number) => {
    if (!currentChunk) return;
    // Map chunk-local char offset → original sentence offset when possible
    if (currentSentence.end > currentSentence.start) {
      // Align by finding word text in the original sentence window
      const word = currentChunk.slice(charIndex, charIndex + (charLength || 1));
      if (word.trim()) {
        const windowText = index.original.slice(currentSentence.start, currentSentence.end);
        // Position within sentence: try charIndex scaled if lengths similar
        let local = charIndex;
        if (Math.abs(windowText.length - currentChunk.length) > 8) {
          const idx = windowText.indexOf(word, Math.max(0, charIndex - 4));
          if (idx >= 0) local = idx;
        }
        const absStart = currentSentence.start + local;
        const absEnd = absStart + word.length;
        if (absEnd <= currentSentence.end + 2) {
          highlighter.highlightWord(absStart, Math.min(absEnd, currentSentence.end));
          return;
        }
      }
      // Fallback: proportional position inside sentence
      const ratio = currentChunk.length ? charIndex / currentChunk.length : 0;
      const absStart = currentSentence.start + Math.floor(ratio * (currentSentence.end - currentSentence.start));
      const absEnd = Math.min(currentSentence.end, absStart + Math.max(charLength, 1));
      highlighter.highlightWord(absStart, absEnd);
    }
  };

  const stop = () => {
    abort?.abort();
    abort = null;
    playback?.stop();
    playback = null;
    highlighter.clear();
    currentChunk = "";
    try {
      window.speechSynthesis?.cancel();
    } catch {
      /* ignore */
    }
    setState("idle");
  };

  const startWebSpeech = () => {
    playback = speakWithWebSpeech(index.speak, {
      onChunkStart,
      onBoundary,
      onEnd: () => {
        highlighter.clear();
        setState("idle");
        track("blog_listen_complete", { ...analytics, engine: "webspeech" });
      },
      onError: () => {
        hardFailHide("webspeech_error");
      },
    });
    setState("playing");
    track("blog_listen_start", { ...analytics, engine: "webspeech" });
  };

  const start = async () => {
    if (state === "playing" || state === "loading") {
      stop();
      track("blog_listen_stop", analytics);
      return;
    }

    setState("loading");
    track("blog_listen_prepare", { ...analytics, try_kokoro: canTryKokoro() });

    abort = new AbortController();
    const signal = abort.signal;

    if (canTryKokoro()) {
      try {
        playback = await speakWithKokoro(
          index.speak,
          {
            onChunkStart,
            onBoundary,
            onEnd: () => {
              highlighter.clear();
              setState("idle");
              track("blog_listen_complete", { ...analytics, engine: "kokoro" });
            },
            onError: () => {
              if (signal.aborted) return;
              try {
                startWebSpeech();
              } catch {
                hardFailHide("fallback_failed");
              }
            },
          },
          signal,
        );
        if (signal.aborted) {
          playback.stop();
          return;
        }
        setState("playing");
        track("blog_listen_start", { ...analytics, engine: "kokoro" });
        return;
      } catch {
        track("blog_listen_kokoro_fallback", analytics);
      }
    }

    if (signal.aborted) return;
    try {
      startWebSpeech();
    } catch {
      hardFailHide("webspeech_throw");
    }
  };

  btn.addEventListener("click", () => {
    void start();
  });

  track("blog_listen_shown", analytics);
  setState("idle");
}

function findSentence(
  index: ReturnType<typeof buildSpeakIndex>,
  chunk: string,
): { start: number; end: number } | null {
  const needle = chunk.replace(/\s+/g, " ").trim();
  if (!needle) return null;

  // Exact speak match
  const bySpeak = index.sentences.find((s) => s.speak === needle);
  if (bySpeak) return { start: bySpeak.start, end: bySpeak.end };

  // Prefix speak match
  const byPrefix = index.sentences.find(
    (s) => s.speak.startsWith(needle.slice(0, 32)) || needle.startsWith(s.speak.slice(0, 32)),
  );
  if (byPrefix) return { start: byPrefix.start, end: byPrefix.end };

  // Original text search
  const restored = needle
    .replace(/\bLay-tech\b/gi, "LaTeX")
    .replace(/\bBib-tech\b/gi, "BibTeX")
    .replace(/\bSync-tech\b/gi, "SyncTeX");
  const idx = index.original.indexOf(restored);
  if (idx >= 0) return { start: idx, end: idx + restored.length };

  const soft = index.sentences.find((s) => {
    const a = s.original.slice(0, 24).toLowerCase();
    const b = restored.slice(0, 24).toLowerCase();
    return a && b && (s.original.includes(restored.slice(0, 20)) || restored.includes(s.original.slice(0, 20)));
  });
  if (soft) return { start: soft.start, end: soft.end };

  return null;
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
