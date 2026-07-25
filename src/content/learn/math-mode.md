---
title: "Math that sits in a sentence (or alone)"
description: "Inline math, display math, equation environments, and when numbering is worth it."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-24
---

# Math that sits in a sentence (or alone)

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

Reference with `Equation~\ref{eq:energy}` or `\eqref{eq:energy}` (amsmath).

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Live preview: [equation tool](/tools/equation-preview/).
