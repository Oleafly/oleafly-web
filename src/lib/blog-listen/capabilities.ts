/**
 * Whether we can offer a listen control at all.
 * We require Web Speech as the silent fallback so Kokoro failure never
 * leaves the user with a broken button.
 */
export function canOfferListen(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      return false;
    }
    // Some embedded webviews stub the API without usable voices forever.
    // We still show the control; speak() path will hide on hard failure.
    return true;
  } catch {
    return false;
  }
}

export function canTryKokoro(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (typeof WebAssembly !== "object") return false;
    // iOS Safari often OOMs on large ONNX models; keep neural optional there.
    const ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) return false;
    // Very low memory signals (not always available)
    const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    if (typeof mem === "number" && mem > 0 && mem < 4) return false;
    return true;
  } catch {
    return false;
  }
}

export function pickEnglishVoice(): SpeechSynthesisVoice | null {
  try {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;
    const en = voices.filter((v) => /^en([-_]|$)/i.test(v.lang || ""));
    const pool = en.length ? en : voices;
    // Prefer local / enhanced when labeled
    return (
      pool.find((v) => /google|samantha|daniel|moira|karen|enhanced|natural/i.test(v.name)) ||
      pool.find((v) => v.localService) ||
      pool[0] ||
      null
    );
  } catch {
    return null;
  }
}
