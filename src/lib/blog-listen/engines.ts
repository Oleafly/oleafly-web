import { chunkForSpeech } from "./extract-text";
import { pickEnglishVoice } from "./capabilities";

export type ListenEngine = "kokoro" | "webspeech";

export type SpeakHandlers = {
  onChunkStart?: (chunk: string, index: number, total: number) => void;
  onBoundary?: (charIndex: number, charLength: number) => void;
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
          // HF callback progress is often 0–100 or 0–1; normalize gently
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
): { stop: () => void; ended: Promise<void>; ctx: AudioContext } {
  const ctx = new AudioContext({ sampleRate });
  const buffer = ctx.createBuffer(1, samples.length, sampleRate);
  buffer.copyToChannel(samples, 0);
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.connect(ctx.destination);
  const ended = new Promise<void>((resolve) => {
    src.onended = () => resolve();
  });
  src.start();
  return {
    ctx,
    ended,
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

  const chunks = chunkForSpeech(text, 400);
  let stopped = false;
  let currentStop: (() => void) | null = null;

  const stop = () => {
    stopped = true;
    currentStop?.();
  };

  // Fire-and-forget sequential play
  void (async () => {
    try {
      for (let i = 0; i < chunks.length; i++) {
        if (stopped || signal?.aborted) break;
        const chunk = chunks[i]!;
        handlers.onChunkStart?.(chunk, i, chunks.length);
        handlers.onProgress?.(i / chunks.length, "Speaking…");

        const audio = await tts.generate(chunk, { voice: "af_heart", speed: 1 });
        if (stopped || signal?.aborted) break;

        // RawAudio from kokoro/transformers: (data, sampling_rate) or .audio
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

        // Heuristic word highlight paced over chunk duration
        const words = chunk.split(/\s+/).filter(Boolean);
        const ms = (playback.ctx.sampleRate && data.length
          ? (data.length / rate) * 1000
          : words.length * 320);
        const step = words.length ? ms / words.length : ms;
        let cursor = 0;
        for (let w = 0; w < words.length; w++) {
          if (stopped) break;
          handlers.onBoundary?.(cursor, words[w]!.length);
          cursor += words[w]!.length + 1;
          await new Promise((r) => setTimeout(r, step));
        }

        await playback.ended;
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
  const chunks = chunkForSpeech(text, 220);
  let idx = 0;
  let stopped = false;
  let current: SpeechSynthesisUtterance | null = null;

  // Chrome long-utterance workaround: keep alive
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
    const chunk = chunks[idx]!;
    handlers.onChunkStart?.(chunk, idx, chunks.length);
    const u = new SpeechSynthesisUtterance(chunk);
    u.lang = "en-US";
    u.rate = 1;
    const voice = pickEnglishVoice();
    if (voice) u.voice = voice;

    u.onboundary = (ev) => {
      if (ev.name === "word" || !ev.name) {
        handlers.onBoundary?.(ev.charIndex ?? 0, ev.charLength ?? 0);
      }
    };
    u.onend = () => {
      idx += 1;
      speakNext();
    };
    u.onerror = (ev) => {
      // "interrupted" / "canceled" from our own stop
      const err = (ev as SpeechSynthesisErrorEvent).error;
      if (stopped || err === "interrupted" || err === "canceled") return;
      window.clearInterval(keepAlive);
      handlers.onError?.(ev);
    };

    current = u;
    window.speechSynthesis.speak(u);
  };

  // Voices often load async
  const start = () => speakNext();
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.addEventListener("voiceschanged", start, { once: true });
    // Fallback if event never fires
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
