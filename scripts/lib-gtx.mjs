const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Free Google Translate "gtx" endpoint (no API key). */
export async function translateGtx(text, to, { retries = 5 } = {}) {
  if (!text?.trim()) return text;
  const lang = { "pt-br": "pt", "zh-cn": "zh-CN", "zh-tw": "zh-TW" }[to] || to;

  // Chunk long text
  if (text.length > 1800) {
    const chunks = [];
    let rest = text;
    while (rest.length) {
      let cut = Math.min(1800, rest.length);
      if (cut < rest.length) {
        const nl = rest.lastIndexOf("\n\n", cut);
        if (nl > 400) cut = nl;
        else {
          const sp = rest.lastIndexOf(" ", cut);
          if (sp > 400) cut = sp;
        }
      }
      chunks.push(rest.slice(0, cut));
      rest = rest.slice(cut);
    }
    const out = [];
    for (const c of chunks) {
      out.push(await translateGtx(c, to, { retries }));
      await sleep(200);
    }
    return out.join("");
  }

  for (let i = 0; i < retries; i++) {
    try {
      const url = new URL("https://translate.googleapis.com/translate_a/single");
      url.searchParams.set("client", "gtx");
      url.searchParams.set("sl", "en");
      url.searchParams.set("tl", lang);
      url.searchParams.set("dt", "t");
      url.searchParams.set("q", text);
      const res = await fetch(url.href);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data?.[0])) throw new Error("bad response shape");
      return data[0].map((x) => x[0]).filter(Boolean).join("");
    } catch (e) {
      await sleep(400 * (i + 1));
      if (i === retries - 1) throw e;
    }
  }
  return text;
}
