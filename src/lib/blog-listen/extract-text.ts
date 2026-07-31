/**
 * Build speakable English prose from a blog article DOM.
 * Skips code, tables, and UI chrome so TTS does not read LaTeX fences.
 */

const SKIP = new Set([
  "PRE",
  "CODE",
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "SVG",
  "TABLE",
  "THEAD",
  "TBODY",
  "TR",
  "TH",
  "TD",
  "BUTTON",
  "NAV",
  "ASIDE",
]);

export function extractSpeakableText(root: HTMLElement): string {
  const parts: string[] = [];

  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = (node.textContent || "").replace(/\s+/g, " ").trim();
      if (t) parts.push(t);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as HTMLElement;
    if (SKIP.has(el.tagName)) return;
    if (el.closest("pre, table, .blog-code-copy, .blog-listen")) return;
    if (el.getAttribute("aria-hidden") === "true") return;

    // Pause between block elements
    const block = /^(P|H1|H2|H3|H4|LI|BLOCKQUOTE|FIGCAPTION|DIV)$/i.test(el.tagName);
    if (block && parts.length && !parts[parts.length - 1]?.endsWith("\n")) {
      parts.push("\n");
    }
    for (const child of Array.from(el.childNodes)) walk(child);
    if (block) parts.push("\n");
  };

  walk(root);

  return parts
    .join(" ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .replace(/\s+([,.!?;:])/g, "$1")
    .replace(/\b(LaTeX|TeX|BibTeX|SyncTeX|Typst)\b/g, (m) => {
      // Gentle pronunciation hints for common tech terms
      if (m === "LaTeX") return "Lay-tech";
      if (m === "TeX") return "Tech";
      if (m === "BibTeX") return "Bib-tech";
      if (m === "SyncTeX") return "Sync-tech";
      return m;
    })
    .replace(/https?:\/\/\S+/g, "link")
    .trim();
}

/** Split into sentence-ish chunks for engines that choke on long input. */
export function chunkForSpeech(text: string, maxLen = 280): string[] {
  const sentences = text
    .split(/(?<=[.!?…])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let buf = "";
  for (const s of sentences) {
    if (!buf) {
      buf = s;
      continue;
    }
    if (buf.length + 1 + s.length <= maxLen) {
      buf = `${buf} ${s}`;
    } else {
      chunks.push(buf);
      buf = s;
    }
  }
  if (buf) chunks.push(buf);
  return chunks.length ? chunks : text ? [text] : [];
}
