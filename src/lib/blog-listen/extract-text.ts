/**
 * Build speakable English prose from a blog article DOM.
 * Skips code, tables, and UI chrome so TTS does not read LaTeX fences.
 * Keeps a parallel DOM index so sentence/word highlights stay aligned.
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

export type TextSpan = {
  node: Text;
  /** Offset into the full original index string */
  start: number;
  end: number;
};

export type SpeakIndex = {
  /** Full original prose (DOM text, normalized spaces) used for highlighting */
  original: string;
  /** TTS string (pronunciation hints applied) */
  speak: string;
  spans: TextSpan[];
  /** Sentence ranges in original coordinates */
  sentences: Array<{ start: number; end: number; original: string; speak: string }>;
};

function pronounce(text: string): string {
  return text
    .replace(/\b(LaTeX|TeX|BibTeX|SyncTeX|Typst)\b/g, (m) => {
      if (m === "LaTeX") return "Lay-tech";
      if (m === "TeX") return "Tech";
      if (m === "BibTeX") return "Bib-tech";
      if (m === "SyncTeX") return "Sync-tech";
      return m;
    })
    .replace(/https?:\/\/\S+/g, "link");
}

function cleanPiece(raw: string): string {
  return raw
    .replace(/\s+/g, " ")
    .replace(/\s+([,.!?;:])/g, "$1")
    .trim();
}

/** Extract speakable text + DOM spans from the article prose root. */
export function buildSpeakIndex(root: HTMLElement): SpeakIndex {
  const spans: TextSpan[] = [];
  const parts: string[] = [];
  let cursor = 0;

  const pushText = (node: Text, raw: string) => {
    const t = cleanPiece(raw);
    if (!t) return;
    if (parts.length && !parts[parts.length - 1]!.endsWith("\n") && !parts[parts.length - 1]!.endsWith(" ")) {
      // space between inline runs
      parts.push(" ");
      cursor += 1;
    }
    const start = cursor;
    parts.push(t);
    cursor += t.length;
    spans.push({ node, start, end: cursor });
  };

  const pushBreak = () => {
    if (!parts.length) return;
    const last = parts[parts.length - 1]!;
    if (last.endsWith("\n")) return;
    parts.push("\n");
    cursor += 1;
  };

  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = node.textContent || "";
      if (t.trim()) pushText(node as Text, t);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as HTMLElement;
    if (SKIP.has(el.tagName)) return;
    if (
      el.closest(
        "pre, table, .blog-code-copy, .code-copy, .blog-listen, .latex-preview, .learn-quiz, [data-learn-quiz]",
      )
    )
      return;
    if (el.getAttribute("aria-hidden") === "true") return;

    const block = /^(P|H1|H2|H3|H4|H5|LI|BLOCKQUOTE|FIGCAPTION|DIV|SECTION)$/i.test(el.tagName);
    if (block) pushBreak();
    for (const child of Array.from(el.childNodes)) walk(child);
    if (block) pushBreak();
  };

  walk(root);

  const original = parts
    .join("")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .replace(/ +\n/g, "\n")
    .replace(/\n +/g, "\n")
    .trim();

  // Rebuild spans against final original if lengths drifted from join cleanup.
  // Spans were built during walk on the pre-clean join; re-map by walking again
  // against the cleaned original via sequential match when needed.
  const speak = pronounce(original);
  const sentences = splitSentences(original).map((s) => ({
    start: s.start,
    end: s.end,
    original: s.text,
    speak: pronounce(s.text),
  }));

  // Prefer spans rebuilt from a second walk that matches original offsets.
  const remapped = remapSpans(root, original);

  return {
    original,
    speak,
    spans: remapped.length ? remapped : spans,
    sentences,
  };
}

/** Legacy helper used by older call sites. */
export function extractSpeakableText(root: HTMLElement): string {
  return buildSpeakIndex(root).speak;
}

function splitSentences(text: string): Array<{ start: number; end: number; text: string }> {
  const out: Array<{ start: number; end: number; text: string }> = [];
  // Split on sentence end or paragraph break; keep offsets into `text`.
  const re = /[^.!?…\n]+(?:[.!?…]+|(?=\n)|$)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const raw = m[0];
    const leading = raw.match(/^\s*/)?.[0].length ?? 0;
    const trailing = raw.match(/\s*$/)?.[0].length ?? 0;
    const start = m.index + leading;
    const end = m.index + raw.length - trailing;
    if (end <= start) continue;
    const piece = text.slice(start, end).trim();
    if (piece.length < 2) continue;
    out.push({ start, end, text: piece });
  }
  if (!out.length && text.trim()) {
    out.push({ start: 0, end: text.length, text: text.trim() });
  }
  return out;
}

/** Re-walk DOM and assign start/end against the cleaned original string. */
function remapSpans(root: HTMLElement, original: string): TextSpan[] {
  const spans: TextSpan[] = [];
  let searchFrom = 0;

  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const cleaned = cleanPiece(node.textContent || "");
      if (!cleaned) return;
      const idx = original.indexOf(cleaned, searchFrom);
      if (idx < 0) {
        // Soft match: first 24 chars
        const soft = cleaned.slice(0, 24);
        const softIdx = soft.length >= 8 ? original.indexOf(soft, searchFrom) : -1;
        if (softIdx < 0) return;
        const end = Math.min(original.length, softIdx + cleaned.length);
        spans.push({ node: node as Text, start: softIdx, end });
        searchFrom = softIdx + 1;
        return;
      }
      spans.push({ node: node as Text, start: idx, end: idx + cleaned.length });
      searchFrom = idx + cleaned.length;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as HTMLElement;
    if (SKIP.has(el.tagName)) return;
    if (
      el.closest(
        "pre, table, .blog-code-copy, .code-copy, .blog-listen, .latex-preview, .learn-quiz, [data-learn-quiz]",
      )
    )
      return;
    if (el.getAttribute("aria-hidden") === "true") return;
    for (const child of Array.from(el.childNodes)) walk(child);
  };

  walk(root);
  return spans;
}

/**
 * Split into sentence-ish chunks for engines that choke on long input.
 * Prefers whole sentences; only merges short ones under maxLen.
 */
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

/** One sentence per chunk when possible — best for sentence tracking. */
export function chunkSentences(text: string, maxLen = 420): string[] {
  const sentences = text
    .split(/(?<=[.!?…])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  for (const s of sentences) {
    if (s.length <= maxLen) {
      chunks.push(s);
      continue;
    }
    // Hard-split overlong sentences on commas/spaces
    let rest = s;
    while (rest.length > maxLen) {
      let cut = rest.lastIndexOf(" ", maxLen);
      if (cut < maxLen * 0.5) cut = maxLen;
      chunks.push(rest.slice(0, cut).trim());
      rest = rest.slice(cut).trim();
    }
    if (rest) chunks.push(rest);
  }
  return chunks.length ? chunks : text ? [text] : [];
}
