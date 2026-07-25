/**
 * Oleafly Learn course map.
 *
 * The map covers two journeys that interleave: research literacy (what a
 * paper is, where papers live, how publishing works, how to ship one) and
 * LaTeX craft (compile loop, math, floats, citations, debugging, TikZ,
 * talks, AI). Tracks are ordered so a complete beginner can walk top to
 * bottom: decode the research world, learn the anatomy of a paper, then
 * build one for real, and finally target a venue and ship.
 */
export type LearnCategory = {
  id: string;
  label: string;
  description: string;
  badge?: "essentials" | "oleafly" | "depth" | "research";
};

export const LEARN_CATEGORIES: LearnCategory[] = [
  {
    id: "research-101",
    label: "Research, decoded",
    description:
      "Papers, journals, conferences, peer review, arXiv, ACM, IEEE, open access, et al.: every buzzword, decoded for someone starting from zero.",
    badge: "research",
  },
  {
    id: "paper-anatomy",
    label: "Anatomy of a paper",
    description:
      "Title to appendix: abstracts vs introductions, sections, figures, footnotes, references, authorship, columns, and how much math a paper needs.",
    badge: "research",
  },
  {
    id: "open-the-loop",
    label: "Open the loop",
    description: "What LaTeX is, a first PDF, the preamble, and how a compile actually works.",
    badge: "essentials",
  },
  {
    id: "local-studio",
    label: "The local studio",
    description: "Editors, installs, Oleafly, GitHub, and coauthoring when the cloud is optional.",
    badge: "oleafly",
  },
  {
    id: "type-and-shape",
    label: "Type and shape",
    description: "Emphasis, size, paragraphs, lists, page numbers, color, and special characters.",
  },
  {
    id: "equation-craft",
    label: "Equation craft",
    description: "Inline vs display, Greek, fractions, align, numbering, matrices, symbol lookup.",
    badge: "essentials",
  },
  {
    id: "notation-depth",
    label: "Notation depth",
    description: "Cases, calculus, operators, line breaks, bold math, alphabets, index notation.",
    badge: "depth",
  },
  {
    id: "paper-bones",
    label: "Paper bones",
    description: "Titles, sections, TOC, abstract, labels, and clickable PDFs.",
  },
  {
    id: "long-form",
    label: "Long form",
    description: "Chapter files, front matter, appendices, glossaries, speed, broken templates.",
    badge: "depth",
  },
  {
    id: "floats-and-ink",
    label: "Floats and ink",
    description: "Tables, images, placement, captions, side-by-side figures, first TikZ picture.",
    badge: "essentials",
  },
  {
    id: "float-surgery",
    label: "Float surgery",
    description: "Long tables, spans, booktabs craft, subfigures, stuck floats, PDF pages as art.",
  },
  {
    id: "cite-your-sources",
    label: "Cite your sources",
    description: "BibTeX, biblatex, styles, Zotero, websites, and clearing mystery [? ] marks.",
    badge: "essentials",
  },
  {
    id: "log-literacy",
    label: "Log literacy",
    description: "Undefined commands, missing $, overfull lines, empty bibliographies, emergency stop.",
  },
  {
    id: "the-page",
    label: "The page",
    description: "geometry, spacing, headers, forced breaks, paragraph indent.",
  },
  {
    id: "runtime",
    label: "Runtime",
    description: "Engines, XeLaTeX, packages, macros, load-order fights.",
  },
  {
    id: "typefaces",
    label: "Typefaces",
    description: "Common journal fonts, custom .otf files, fuzzy Type 3 output.",
  },
  {
    id: "draw-in-tex",
    label: "Draw in TeX",
    description: "Nodes, flowcharts, trees, tikz-cd, exporting figures.",
  },
  {
    id: "field-kits",
    label: "Field kits",
    description: "Chemistry, physics braket, algorithms, theorem environments.",
  },
  {
    id: "on-stage",
    label: "On stage",
    description: "Beamer decks, overlays, conference posters.",
  },
  {
    id: "venue-formats",
    label: "Venues and formats",
    description:
      "Choosing a target venue, IEEE vs ACM vs Springer classes, one column vs two, page limits, anonymization, and thesis vs paper formatting.",
    badge: "research",
  },
  {
    id: "ship-your-paper",
    label: "Ship your paper",
    description:
      "Deadlines and AoE, submission systems, posting to arXiv, rebuttals, camera-ready, and the full end-to-end first-paper roadmap.",
    badge: "research",
  },
  {
    id: "human-plus-model",
    label: "Human + Model",
    description: "Prompting for compiling code, image equations, paper help, Oleafly with your key.",
    badge: "oleafly",
  },
  {
    id: "desk-reference",
    label: "Desk reference",
    description: "Cheatsheet, commands vs environments, lengths and units.",
  },
];

export const CATEGORY_BY_ID = Object.fromEntries(
  LEARN_CATEGORIES.map((c) => [c.id, c]),
) as Record<string, LearnCategory>;

/** Map legacy category ids (if any content still carries them) to the current map. */
export const LEGACY_CATEGORY_MAP: Record<string, string> = {
  "getting-started": "open-the-loop",
  "setup-workflow": "local-studio",
  "basic-formatting": "type-and-shape",
  math: "equation-craft",
  "math-advanced": "notation-depth",
  "document-structure": "paper-bones",
  thesis: "long-form",
  "tables-figures": "floats-and-ink",
  "tables-figures-advanced": "float-surgery",
  citations: "cite-your-sources",
  errors: "log-literacy",
  layout: "the-page",
  engines: "runtime",
  fonts: "typefaces",
  tikz: "draw-in-tex",
  specialized: "field-kits",
  presentations: "on-stage",
  "ai-latex": "human-plus-model",
  reference: "desk-reference",
};
