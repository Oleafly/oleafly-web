const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Translate via MyMemory free API (quota ~1000 words/day per IP without key). */
export async function translateMyMemory(text, to, { retries = 5 } = {}) {
  if (!text?.trim()) return text;
  // map locale codes
  const lang = {
    "pt-br": "pt",
    "zh-cn": "zh-CN",
    "zh-tw": "zh-TW",
  }[to] || to;

  const q = text.length > 450 ? text.slice(0, 450) : text;
  for (let i = 0; i < retries; i++) {
    try {
      const url = new URL("https://api.mymemory.translated.net/get");
      url.searchParams.set("q", q);
      url.searchParams.set("langpair", `en|${lang}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.responseStatus !== 200) {
        throw new Error(data.responseDetails || `status ${data.responseStatus}`);
      }
      let out = data.responseData?.translatedText || text;
      // MyMemory sometimes returns the QUERY WITH ERROR prefix
      if (/MYMEMORY WARNING/i.test(out)) throw new Error(out.slice(0, 80));
      // If we truncated, append note for long text - caller should chunk
      if (text.length > 450) {
        // translate remaining chunks
        let rest = text.slice(450);
        let full = out;
        while (rest.length) {
          await sleep(300);
          const chunk = rest.slice(0, 450);
          rest = rest.slice(450);
          url.searchParams.set("q", chunk);
          const r2 = await fetch(url);
          const d2 = await r2.json();
          if (d2.responseStatus === 200 && d2.responseData?.translatedText) {
            full += d2.responseData.translatedText;
          } else {
            full += chunk;
          }
        }
        return full;
      }
      return out;
    } catch (e) {
      await sleep(500 * (i + 1));
      if (i === retries - 1) throw e;
    }
  }
  return text;
}
