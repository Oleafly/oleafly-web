import { chunkSentences } from "./extract-text";
import { pickEnglishVoice } from "./capabilities";

export type ListenEngine = "kokoro" | "webspeech";

export type SpeakHandlers = {
  /** Fired when a sentence/chunk begins (0-based index). */
  onChunkStart?: (chunk: string, index: number, total: number) => void;
  /**
   * Word boundary within the current chunk.
   * charIndex/charLength are relative to the current chunk string.
   */
  onBoundary?: (charIndex: number, charLength: number, chunkIndex: number) => void;
  onProgress?: (ratio: number, label?: string) => void;
  onEnd?: () => void;
  onError?: (err: unknown) => void;
};

let kokoroSingleton: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tts: any;
  device: string;
} | null = null;

let kokoroLoading: Promise<typeof kokoroSingleton> | null = null;

export async function loadKokoro(
  onProgress?: (ratio: number, label?: string) => void,
): Promise<NonNullable<typeof kokoroSingleton>> {
  if (kokoroSingleton) return kokoroSingleton;
  if (kokoroLoading) return kokoroLoading as Promise<NonNullable<typeof kokoroSingleton>>;

  kokoroLoading = (async () => {
    onProgress?.(0.05, "Loading voice engine…");
    const { KokoroTTS } = await import("kokoro-js");

    let device: "webgpu" | "wasm" = "wasm";
    try {
      // @ts-expect-error experimental
      if (navigator.gpu && (await navigator.gpu.requestAdapter())) {
        device = "webgpu";
      }
    } catch {
      device = "wasm";
    }

    const dtype = device === "webgpu" ? "fp32" : "q8";
    const model_id = "onnx-community/Kokoro-82M-v1.0-ONNX";

    const tts = await KokoroTTS.from_pretrained(model_id, {
      dtype,
      device,
      progress_callback: (info: { status?: string; progress?: number; file?: string }) => {
        if (typeof info?.progress === "number" && Number.isFinite(info.progress)) {
          const p = info.progress > 1 ? info.progress / 100 : info.progress;
          onProgress?.(Math.min(0.92, 0.08 + p * 0.8), "Downloading English voice…");
        } else if (info?.status === "done") {
          onProgress?.(0.95, "Preparing voice…");
        }
      },
    });

    kokoroSingleton = { tts, device };
    onProgress?.(1, "Ready");
    return kokoroSingleton;
  })().catch((err) => {
    kokoroLoading = null;
    throw err;
  });

  return kokoroLoading as Promise<NonNullable<typeof kokoroSingleton>>;
}

function playFloat32(
  samples: Float32Array,
  sampleRate: number,
): { stop: () => void; ended: Promise<void>; ctx: AudioContext; durationMs: number } {
  const ctx = new AudioContext({ sampleRate });
  const buffer = ctx.createBuffer(1, samples.length, sampleRate);
  buffer.copyToChannel(samples, 0);
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.connect(ctx.destination);
  const durationMs = (samples.length / sampleRate) * 1000;
  const ended = new Promise<void>((resolve) => {
    src.onended = () => resolve();
  });
  src.start();
  return {
    ctx,
    ended,
    durationMs,
    stop: () => {
      try {
        src.stop();
      } catch {
        /* already stopped */
      }
      void ctx.close();
    },
  };
}

export type ActivePlayback = {
  engine: ListenEngine;
  stop: () => void;
};

/** Speak with Kokoro; throws on failure so caller can fall back. */
export async function speakWithKokoro(
  text: string,
  handlers: SpeakHandlers = {},
  signal?: AbortSignal,
): Promise<ActivePlayback> {
  const { tts } = await loadKokoro(handlers.onProgress);
  if (signal?.aborted) throw new DOMException("Aborted", "AbortError");

  // One sentence per chunk when possible — clean sentence tracking
  const chunks = chunkSentences(text, 400);
  let stopped = false;
  let currentStop: (() => void) | null = null;
  let boundaryTimer: number | null = null;

  const stop = () => {
    stopped = true;
    if (boundaryTimer != null) {
      window.clearTimeout(boundaryTimer);
      boundaryTimer = null;
    }
    currentStop?.();
  };

  void (async () => {
    try {
      for (let i = 0; i < chunks.length; i++) {
        if (stopped || signal?.aborted) break;
        const chunk = chunks[i]!;
        handlers.onChunkStart?.(chunk, i, chunks.length);
        handlers.onProgress?.(i / chunks.length, "Speaking…");

        const audio = await tts.generate(chunk, { voice: "af_heart", speed: 1 });
        if (stopped || signal?.aborted) break;

        const raw =
          audio?.audio ??
          audio?.data ??
          (ArrayBuffer.isView(audio) ? audio : null);
        if (!raw || !(raw as ArrayLike<number>).length) throw new Error("Empty audio");
        const data =
          raw instanceof Float32Array ? raw : new Float32Array(raw as ArrayLike<number>);
        const rate: number = Number(audio?.sampling_rate ?? audio?.sample_rate ?? 24000);

        const playback = playFloat32(data, rate);
        currentStop = playback.stop;

        // Pace word highlights across the audio duration
        const words = tokenizeWords(chunk);
        const ms = playback.durationMs || words.length * 320;
        const step = words.length ? ms / words.length : ms;
        let chunkDone = false;

        const runWords = async () => {
          for (let w = 0; w < words.length; w++) {
            if (stopped || chunkDone) break;
            const { index, length } = words[w]!;
            handlers.onBoundary?.(index, length, i);
            await new Promise<void>((resolve) => {
              boundaryTimer = window.setTimeout(() => {
                boundaryTimer = null;
                resolve();
              }, step);
            });
          }
        };

        await Promise.race([
          playback.ended.then(() => {
            chunkDone = true;
          }),
          runWords(),
        ]);
        // Wait for audio if words finished early
        if (!chunkDone && !stopped) await playback.ended;
        chunkDone = true;
        if (boundaryTimer != null) {
          window.clearTimeout(boundaryTimer);
          boundaryTimer = null;
        }
        currentStop = null;
      }
      if (!stopped) handlers.onEnd?.();
    } catch (err) {
      if (!stopped) handlers.onError?.(err);
    }
  })();

  return { engine: "kokoro", stop };
}

/** Speak with Web Speech API; English voice preferred. */
export function speakWithWebSpeech(
  text: string,
  handlers: SpeakHandlers = {},
): ActivePlayback {
  const chunks = chunkSentences(text, 280);
  let idx = 0;
  let stopped = false;
  let current: SpeechSynthesisUtterance | null = null;

  const keepAlive = window.setInterval(() => {
    try {
      if (window.speechSynthesis.speaking) window.speechSynthesis.resume();
    } catch {
      /* ignore */
    }
  }, 12000);

  const stop = () => {
    stopped = true;
    window.clearInterval(keepAlive);
    try {
      window.speechSynthesis.cancel();
    } catch {
      /* ignore */
    }
  };

  const speakNext = () => {
    if (stopped) return;
    if (idx >= chunks.length) {
      window.clearInterval(keepAlive);
      handlers.onEnd?.();
      return;
    }
    const chunkIndex = idx;
    const chunk = chunks[idx]!;
    handlers.onChunkStart?.(chunk, chunkIndex, chunks.length);
    const u = new SpeechSynthesisUtterance(chunk);
    u.lang = "en-US";
    u.rate = 1;
    const voice = pickEnglishVoice();
    if (voice) u.voice = voice;

    u.onboundary = (ev) => {
      if (ev.name === "word" || !ev.name) {
        const charIndex = ev.charIndex ?? 0;
        // charLength is missing in some browsers — estimate word length
        let len = ev.charLength ?? 0;
        if (!len) {
          const rest = chunk.slice(charIndex);
          const m = rest.match(/^\S+/);
          len = m?.[0]?.length ?? 0;
        }
        handlers.onBoundary?.(charIndex, len, chunkIndex);
      }
    };
    u.onend = () => {
      idx += 1;
      speakNext();
    };
    u.onerror = (ev) => {
      const err = (ev as SpeechSynthesisErrorEvent).error;
      if (stopped || err === "interrupted" || err === "canceled") return;
      window.clearInterval(keepAlive);
      handlers.onError?.(ev);
    };

    current = u;
    window.speechSynthesis.speak(u);
  };

  const start = () => speakNext();
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.addEventListener("voiceschanged", start, { once: true });
    window.setTimeout(start, 250);
  } else {
    start();
  }

  return {
    engine: "webspeech",
    stop: () => {
      stop();
      current = null;
    },
  };
}

function tokenizeWords(chunk: string): Array<{ index: number; length: number }> {
  const out: Array<{ index: number; length: number }> = [];
  const re = /\S+/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(chunk))) {
    out.push({ index: m.index, length: m[0].length });
  }
  return out;
}
