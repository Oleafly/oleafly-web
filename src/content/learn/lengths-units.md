---
title: "pt, em, textwidth"
description: "Absolute and font-relative units you actually set."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-24
---

# pt, em, textwidth

| Unit | Meaning |
| --- | --- |
| `pt` | Point (base) |
| `em` | Font-relative width |
| `ex` | Font-relative height |
| `cm` / `mm` / `in` | Absolute |
| `\textwidth` | Width of text block |
| `\linewidth` | Width of current column/minipage |

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```
