---
title: "Classic BibTeX or biblatex"
description: "Backends, styles, and what changes day to day."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-24
---

# Classic BibTeX or biblatex

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Age | Classic | Modern |
| Styles | `.bst` | `.bbx`/`.cbx` |
| Unicode | Fragile | Strong |
| Journal support | Universal | Growing |

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```
