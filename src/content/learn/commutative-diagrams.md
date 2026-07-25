---
title: "Commutative diagrams"
description: "tikz-cd arrows and labels without coordinate soup."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-24
---

# Commutative diagrams

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

Arrows: `r`, `l`, `d`, `u`, and diagonals `rd`, etc.
