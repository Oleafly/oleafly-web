---
title: "A PDF page as a graphic"
description: "includegraphics with page selection, and pdfpages for appendices."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-24
---

# A PDF page as a graphic

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Whole pages in an appendix:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```
