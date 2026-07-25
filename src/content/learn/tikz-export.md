---
title: "Standalone TikZ to PDF or PNG"
description: "standalone class and externalize caches."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-24
---

# Standalone TikZ to PDF or PNG

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

Compile to PDF, then convert if PNG/SVG is required. TikZ `external` library caches PDFs per picture.
