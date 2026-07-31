import { track } from "../analytics";
import { canOfferListen, canTryKokoro } from "./capabilities";
import { extractSpeakableText } from "./extract-text";
import {
  type ActivePlayback,
  speakWithKokoro,
  speakWithWebSpeech,
} from "./engines";

type MountOpts = {
  host: HTMLElement;
  prose: HTMLElement;
  postId: string;
};

type State = "idle" | "loading" | "playing" | "paused";

/**
 * Mount the listen control only when Web Speech is available (silent fallback).
 * Kokoro is attempted first when safe; failures fall through without error UI.
 * If every engine fails, the control is removed entirely.
 */
export function mountBlogListen({ host, prose, postId }: MountOpts): void {
  if (!canOfferListen()) {
    host.remove();
    return;
  }

  const text = extractSpeakableText(prose);
  if (text.length < 40) {
    host.remove();
    return;
  }

  host.hidden = false;
  host.classList.add("blog-listen");
  host.innerHTML = `
    <button type="button" class="blog-listen-btn" data-ph="blog_listen_click" data-ph-post="${escapeAttr(postId)}" aria-label="Listen to this post">
      <span class="blog-listen-icon" aria-hidden="true"></span>
      <span class="blog-listen-label">Listen</span>
    </button>
    <div class="blog-listen-status" hidden></div>
  `;

  const btn = host.querySelector<HTMLButtonElement>(".blog-listen-btn")!;
  const label = host.querySelector<HTMLElement>(".blog-listen-label")!;
  const status = host.querySelector<HTMLElement>(".blog-listen-status")!;
  const icon = host.querySelector<HTMLElement>(".blog-listen-icon")!;

  let state: State = "idle";
  let playback: ActivePlayback | null = null;
  let abort: AbortController | null = null;

  const setStatus = (msg: string | null) => {
    if (!msg) {
      status.hidden = true;
      status.textContent = "";
      return;
    }
    status.hidden = false;
    status.textContent = msg;
  };

  const setState = (next: State) => {
    state = next;
    host.dataset.state = next;
    btn.disabled = next === "loading";
    if (next === "idle") {
      label.textContent = "Listen";
      btn.setAttribute("aria-label", "Listen to this post");
      icon.dataset.mode = "play";
      setStatus(null);
    } else if (next === "loading") {
      label.textContent = "Preparing…";
      btn.setAttribute("aria-label", "Preparing audio");
      icon.dataset.mode = "loading";
    } else if (next === "playing") {
      label.textContent = "Stop";
      btn.setAttribute("aria-label", "Stop listening");
      icon.dataset.mode = "stop";
      setStatus(null);
    }
  };

  const hardFailHide = (reason: string) => {
    try {
      playback?.stop();
    } catch {
      /* ignore */
    }
    playback = null;
    track("blog_listen_unavailable", { post: postId, reason });
    host.remove();
  };

  const clearHighlight = () => {
    prose.querySelectorAll(".blog-listen-hl").forEach((el) => {
      el.classList.remove("blog-listen-hl");
    });
  };

  /** Best-effort: mark a sentence chunk in the prose while speaking. */
  const highlightChunk = (chunk: string) => {
    clearHighlight();
    const needle = chunk.slice(0, 48).replace(/\s+/g, " ").trim();
    if (needle.length < 8) return;
    const walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const t = node.textContent || "";
      const idx = t.toLowerCase().indexOf(needle.toLowerCase().slice(0, 24));
      if (idx < 0) continue;
      const parent = node.parentElement;
      if (!parent || parent.closest("pre, code")) continue;
      parent.classList.add("blog-listen-hl");
      try {
        parent.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } catch {
        /* ignore */
      }
      break;
    }
  };

  const stop = () => {
    abort?.abort();
    abort = null;
    playback?.stop();
    playback = null;
    clearHighlight();
    try {
      window.speechSynthesis?.cancel();
    } catch {
      /* ignore */
    }
    setState("idle");
  };

  const startWebSpeech = () => {
    playback = speakWithWebSpeech(text, {
      onChunkStart: (chunk) => highlightChunk(chunk),
      onEnd: () => {
        clearHighlight();
        setState("idle");
        track("blog_listen_complete", { post: postId, engine: "webspeech" });
      },
      onError: () => {
        hardFailHide("webspeech_error");
      },
    });
    setState("playing");
    track("blog_listen_start", { post: postId, engine: "webspeech" });
  };

  const start = async () => {
    if (state === "playing" || state === "loading") {
      stop();
      track("blog_listen_stop", { post: postId });
      return;
    }

    setState("loading");
    track("blog_listen_prepare", { post: postId, try_kokoro: canTryKokoro() });

    abort = new AbortController();
    const signal = abort.signal;

    if (canTryKokoro()) {
      try {
        playback = await speakWithKokoro(
          text,
          {
            onProgress: (_r, msg) => {
              if (msg) setStatus(msg);
            },
            onChunkStart: (chunk) => highlightChunk(chunk),
            onEnd: () => {
              clearHighlight();
              setState("idle");
              track("blog_listen_complete", { post: postId, engine: "kokoro" });
            },
            onError: () => {
              // Silent fallthrough to Web Speech
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
        setStatus(null);
        track("blog_listen_start", { post: postId, engine: "kokoro" });
        return;
      } catch {
        // Fall through to Web Speech — no error toast
        track("blog_listen_kokoro_fallback", { post: postId });
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

  track("blog_listen_shown", { post: postId });
  setState("idle");
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
