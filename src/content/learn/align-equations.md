---
title: "Multi-line equations that line up"
description: "align, gather, split, multline, and notag."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-24
---

# Multi-line equations that line up

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

Align at `&`; end lines with `\\`.

| Env | Purpose |
| --- | --- |
| `align` | Several lines, aligned |
| `align*` | Same, unnumbered |
| `gather` | Several lines, centered |
| `split` | Multi-line single equation number |
| `multline` | Long equation broken without alignment |

Suppress a number on one line with `\notag`.
