// Shared client-side LaTeX → KaTeX rendering pipeline, used by the /learn
// lesson previews and the /live playground. Three modes:
//   1. pure display environment (align, cases, matrix, equation, ...)
//   2. mixed prose + delimited math ($...$, \[...\], $$...$$), via auto-render
//   3. bare command lines (the "menu of commands" lesson pattern), one row each
// Document-level LaTeX (preamble, floats, bibliographies) is not renderable in
// a browser and is detected via SKIP so callers can opt out gracefully.
import katex from "katex";
import renderMathInElement from "katex/dist/contrib/auto-render.mjs";

export const SKIP =
  /\\documentclass|\\begin\{document\}|\\usepackage|\\(?:sub)*section\{|\\chapter|\\begin\{(?:figure|table|tabular|itemize|enumerate|description|frame|tikzpicture|abstract|thebibliography|minipage|lstlisting|verbatim|algorithm)\b|\\includegraphics|\\cite|\\bibliograph|\\addbibresource|\\printbibliography|\\maketitle|\\tableofcontents|\\newcommand|\\renewcommand|\\NewDocumentCommand|\\def\\|\\input\{|\\include\{|\\pagestyle|\\geometry|\\setlength|\\item\b|\\titleformat|\\fancyhead|\\hypersetup|\\newtheorem|\\caption|\\centering|@(?:article|book|misc|online|inproceedings)/;

export const MATH_ENV =
  /\\begin\{(align\*?|aligned|gather\*?|gathered|cases|dcases|rcases|split|equation\*?|array|(?:p|b|B|v|V|small)?matrix|alignat\*?|CD)\}/;

/** Strip % comments (respecting \%) line by line. */
export function stripComments(s: string): string {
  return s
    .split("\n")
    .map((line) => {
      let out = "";
      for (let i = 0; i < line.length; i++) {
        if (line[i] === "%" && line[i - 1] !== "\\") return out;
        out += line[i];
      }
      return out;
    })
    .join("\n")
    .trim();
}

/**
 * Make a math source KaTeX-friendly: drop \label{}, show \ref/\eqref targets
 * as literal placeholders, map equation→gather (KaTeX has no equation env).
 */
export function prepMath(s: string): string {
  // \ref targets become literal placeholders; plain text is safe both in
  // prose (mixed mode) and inside math, where it renders as an identifier.
  return s
    .replace(/\\label\{[^}]*\}/g, "")
    .replace(/\\eqref\{([^}]*)\}/g, "($1)")
    .replace(/\\(?:page|c|C)?ref\{([^}]*)\}/g, "$1")
    .replace(/\\begin\{equation(\*?)\}/g, "\\begin{gather$1}")
    .replace(/\\end\{equation(\*?)\}/g, "\\end{gather$1}");
}

export function tryKatex(src: string): string | null {
  try {
    return katex.renderToString(src, { displayMode: true, throwOnError: true, strict: false });
  } catch {
    return null;
  }
}

const AUTO_RENDER_OPTS = {
  delimiters: [
    { left: "$$", right: "$$", display: true },
    { left: "\\[", right: "\\]", display: true },
    { left: "$", right: "$", display: false },
    { left: "\\(", right: "\\)", display: false },
  ],
  throwOnError: false,
  strict: false,
};

/**
 * Render a cleaned LaTeX snippet into a detached element, or return null if
 * nothing in it is renderable. `raw` should already be comment-stripped.
 */
export function renderLatexSnippet(raw: string): HTMLElement | null {
  const cleaned = raw.trim();
  if (!cleaned) return null;
  const hasDelims = /(?<!\\)\$|\\\[|\\\(/.test(cleaned);

  // Pure display environment: the block is exactly one \begin...\end.
  const pureEnv = /^\\begin\{([a-zA-Z*]+)\}[\s\S]*\\end\{\1\}$/.exec(cleaned);
  if (!hasDelims && pureEnv && MATH_ENV.test(cleaned)) {
    const html = tryKatex(prepMath(cleaned));
    if (!html) return null;
    const body = document.createElement("div");
    body.innerHTML = html;
    return body;
  }

  // Mixed prose + math. Wrap any loose display environments in $$ so
  // auto-render picks them up alongside $...$ and \[...\].
  if (hasDelims || MATH_ENV.test(cleaned)) {
    const wrapped = prepMath(cleaned).replace(
      /(^|\n)(\\begin\{(align\*?|gather\*?|cases|dcases|alignat\*?|CD|(?:p|b|B|v|V|small)?matrix)\}[\s\S]*?\\end\{\3\})/g,
      "$1$$$$$2$$$$",
    );
    const body = document.createElement("div");
    body.classList.add("latex-preview-prose");
    body.textContent = wrapped;
    try {
      renderMathInElement(body, AUTO_RENDER_OPTS);
    } catch {
      return null;
    }
    if (!body.querySelector(".katex")) return null;
    return body;
  }

  // Bare command lines: render each as its own display row.
  const lines = cleaned
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (!lines.length || lines.length > 14) return null;
  const rows = lines.map((l) => tryKatex(prepMath(l))).filter((h): h is string => h !== null);
  if (!rows.length) return null;
  const body = document.createElement("div");
  body.innerHTML = rows.map((h) => `<div class="latex-preview-row">${h}</div>`).join("");
  return body;
}
