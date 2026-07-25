---
title: "Classic BibTeX or biblatex"
description: "Backends, styles, and what changes day to day."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# Classic BibTeX or biblatex

LaTeX has two citation systems that read the same `.bib` files but differ in almost everything else. Classic BibTeX dates from the 1980s: a small external program formats your references using style files written in a stack-based language of its own. biblatex is the modern replacement: formatting happens in LaTeX itself, with a helper program called `biber` doing the sorting and data handling. The names are confusingly similar, so it helps to remember that "BibTeX" is both the old program and, loosely, the old system, while "biblatex" is a LaTeX package that uses `biber` as its backend.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Age | Classic | Modern |
| Styles | `.bst` | `.bbx`/`.cbx` |
| Unicode | Fragile | Strong |
| Journal support | Universal | Growing |

## What the differences mean in practice

The style row matters most. BibTeX styles are `.bst` files that almost nobody can read or modify, so you take what the journal ships. biblatex styles are ordinary LaTeX, split into bibliography (`.bbx`) and citation (`.cbx`) components, and small changes like dropping URLs or altering punctuation are one-line customizations. The Unicode row matters if your references contain accented names or non-Latin scripts: classic BibTeX mangles them unless every character is escaped as `\'{e}` and friends, while biber handles UTF-8 natively. The last row is the reason classic BibTeX survives: most journals and conferences still distribute a `.bst` file and expect the classic toolchain, and submission systems often refuse anything else.

## What a biblatex document looks like

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

Compared with the classic pattern, `\addbibresource{refs.bib}` (with the extension) moves into the preamble, `\printbibliography` replaces `\bibliography{refs}`, and there is no `\bibliographystyle` line because the style is a package option. The build must run `biber` instead of `bibtex`; running the wrong backend is a common cause of an [empty bibliography](/learn/bibliography-empty/).

## How to choose

Let the venue decide when it can. If the template ships a `.bst` file or the author instructions mention BibTeX, use classic BibTeX and do not fight it. When the format is yours to control, as with a thesis, a preprint, or lecture notes, biblatex is the better tool: cleaner customization, real Unicode support, and purpose-built entry types for web sources. Your `.bib` database works unchanged under either system, so the choice is never permanent. The citation commands differ between the two, and [natbib habits vs biblatex commands](/learn/natbib-vs-biblatex/) maps one set onto the other.
