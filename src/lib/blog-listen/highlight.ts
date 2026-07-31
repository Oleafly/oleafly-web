/**
 * Sentence + word highlighting against blog prose DOM.
 * Prefer CSS Custom Highlight API; fall back to temporary <mark> wraps.
 */

import type { SpeakIndex, TextSpan } from "./extract-text";

const SENTENCE_HL = "blog-listen-sentence";
const WORD_HL = "blog-listen-word";
const MARK_SENTENCE = "blog-listen-hl";
const MARK_WORD = "blog-listen-word-mark";

export type Highlighter = {
  highlightSentence: (start: number, end: number) => void;
  highlightWord: (start: number, end: number) => void;
  /** Highlight by original sentence text (forward search from last position). */
  highlightSentenceText: (sentence: string) => void;
  clear: () => void;
  destroy: () => void;
};

function supportsCssHighlight(): boolean {
  try {
    return typeof CSS !== "undefined" && "highlights" in CSS && typeof Highlight === "function";
  } catch {
    return false;
  }
}

function rangeFromOffsets(
  spans: TextSpan[],
  start: number,
  end: number,
): Range | null {
  if (end <= start || !spans.length) return null;

  let startNode: Text | null = null;
  let startOffset = 0;
  let endNode: Text | null = null;
  let endOffset = 0;

  for (const span of spans) {
    if (!startNode && start < span.end && start >= span.start) {
      startNode = span.node;
      startOffset = Math.max(0, start - span.start);
      // Clamp to node length
      startOffset = Math.min(startOffset, span.node.length);
    }
    if (start < span.end && startNode && !endNode && end <= span.end && end > span.start) {
      endNode = span.node;
      endOffset = Math.min(span.node.length, Math.max(0, end - span.start));
      break;
    }
    if (startNode && !endNode && end > span.start && end <= span.end) {
      endNode = span.node;
      endOffset = Math.min(span.node.length, end - span.start);
      break;
    }
    // Range spans multiple nodes: end falls in this span
    if (startNode && end > span.start && end <= span.end) {
      endNode = span.node;
      endOffset = Math.min(span.node.length, end - span.start);
      break;
    }
  }

  // Multi-node: end past last overlapping span
  if (startNode && !endNode) {
    for (let i = spans.length - 1; i >= 0; i--) {
      const span = spans[i]!;
      if (end > span.start) {
        endNode = span.node;
        endOffset = Math.min(span.node.length, Math.max(0, end - span.start));
        break;
      }
    }
  }

  if (!startNode || !endNode) return null;

  try {
    const range = document.createRange();
    range.setStart(startNode, Math.min(startOffset, startNode.length));
    range.setEnd(endNode, Math.min(endOffset, endNode.length));
    return range;
  } catch {
    return null;
  }
}

function scrollRange(range: Range) {
  try {
    const node = range.startContainer;
    const el =
      node.nodeType === Node.ELEMENT_NODE
        ? (node as Element)
        : node.parentElement;
    el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  } catch {
    /* ignore */
  }
}

/** Fallback when CSS Custom Highlight is unavailable: class parent blocks only. */
function paintFallback(root: HTMLElement, range: Range, kind: "sentence" | "word") {
  root.querySelectorAll(`.${MARK_SENTENCE}, .${MARK_WORD}`).forEach((el) => {
    el.classList.remove(MARK_SENTENCE, MARK_WORD);
  });
  const nodes: Node[] = [];
  try {
    if (range.commonAncestorContainer.nodeType === Node.TEXT_NODE) {
      nodes.push(range.commonAncestorContainer);
    } else {
      const it = document.createNodeIterator(
        range.commonAncestorContainer,
        NodeFilter.SHOW_TEXT,
      );
      let node: Node | null;
      while ((node = it.nextNode())) {
        if (range.intersectsNode(node)) nodes.push(node);
      }
    }
  } catch {
    /* ignore */
  }
  const cls = kind === "word" ? MARK_WORD : MARK_SENTENCE;
  const seen = new Set<Element>();
  for (const node of nodes) {
    const el = node.parentElement;
    if (!el || el.closest("pre, code")) continue;
    if (seen.has(el)) continue;
    seen.add(el);
    el.classList.add(cls);
  }
  // Also tag common ancestor block for sentence-level visibility
  if (kind === "sentence") {
    try {
      let block: Element | null =
        range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
          ? (range.commonAncestorContainer as Element)
          : range.commonAncestorContainer.parentElement;
      while (block && block !== root) {
        if (/^(P|LI|H1|H2|H3|H4|BLOCKQUOTE|DIV)$/i.test(block.tagName)) {
          block.classList.add(MARK_SENTENCE);
          break;
        }
        block = block.parentElement;
      }
    } catch {
      /* ignore */
    }
  }
}

export function createHighlighter(root: HTMLElement, index: SpeakIndex): Highlighter {
  const useCss = supportsCssHighlight();
  let lastSentenceSearch = 0;

  const clearCss = () => {
    if (!useCss) return;
    try {
      CSS.highlights.delete(SENTENCE_HL);
      CSS.highlights.delete(WORD_HL);
    } catch {
      /* ignore */
    }
  };

  const clearFallback = () => {
    root.querySelectorAll(`.${MARK_SENTENCE}, .${MARK_WORD}`).forEach((el) => {
      el.classList.remove(MARK_SENTENCE, MARK_WORD);
    });
  };

  const clear = () => {
    clearCss();
    clearFallback();
  };

  const setCssHighlight = (name: string, range: Range | null) => {
    if (!useCss) return;
    try {
      if (!range) {
        CSS.highlights.delete(name);
        return;
      }
      CSS.highlights.set(name, new Highlight(range));
    } catch {
      /* ignore */
    }
  };

  const highlightSentence = (start: number, end: number) => {
    const range = rangeFromOffsets(index.spans, start, end);
    if (!range) return;

    if (useCss) {
      setCssHighlight(SENTENCE_HL, range);
      setCssHighlight(WORD_HL, null);
      scrollRange(range);
      return;
    }

    paintFallback(root, range, "sentence");
    scrollRange(range);
  };

  const highlightWord = (start: number, end: number) => {
    const range = rangeFromOffsets(index.spans, start, end);
    if (!range) return;

    if (useCss) {
      setCssHighlight(WORD_HL, range);
      try {
        const rect = range.getBoundingClientRect();
        if (rect.top < 80 || rect.bottom > window.innerHeight - 40) {
          scrollRange(range);
        }
      } catch {
        /* ignore */
      }
      return;
    }

    // Fallback: emphasize the element containing the word
    try {
      const node = range.startContainer;
      const el = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
      root.querySelectorAll(`.${MARK_WORD}`).forEach((e) => e.classList.remove(MARK_WORD));
      el?.classList.add(MARK_WORD);
    } catch {
      /* ignore */
    }
  };

  const highlightSentenceText = (sentence: string) => {
    const needle = sentence.replace(/\s+/g, " ").trim();
    if (needle.length < 4) return;

    // Map speak text back toward original (undo light pronunciation)
    const normalized = needle
      .replace(/\bLay-tech\b/gi, "LaTeX")
      .replace(/\bBib-tech\b/gi, "BibTeX")
      .replace(/\bSync-tech\b/gi, "SyncTeX")
      .replace(/\bTech\b/g, "TeX");

    const hay = index.original;
    let idx = hay.indexOf(normalized, lastSentenceSearch);
    if (idx < 0) idx = hay.indexOf(needle, lastSentenceSearch);
    if (idx < 0) {
      // Prefix search
      const prefix = normalized.slice(0, Math.min(40, normalized.length));
      idx = hay.indexOf(prefix, lastSentenceSearch);
    }
    if (idx < 0 && lastSentenceSearch > 0) {
      // Wrap once from start
      idx = hay.indexOf(normalized, 0);
      if (idx < 0) {
        const prefix = normalized.slice(0, Math.min(40, normalized.length));
        idx = hay.indexOf(prefix, 0);
      }
    }
    if (idx < 0) return;

    const end = idx + (normalized.length || needle.length);
    lastSentenceSearch = idx + 1;
    highlightSentence(idx, Math.min(end, hay.length));
  };

  return {
    highlightSentence,
    highlightWord,
    highlightSentenceText,
    clear: () => {
      clear();
      lastSentenceSearch = 0;
    },
    destroy: () => {
      clear();
      lastSentenceSearch = 0;
    },
  };
}
