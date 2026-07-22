---
title: Math mode
description: Inline and display math, common symbols, fractions, roots, sums, matrices, and numbered equations.
---

## Inline vs display

```latex
Inline: $E = mc^2$ flows with the text.
Display: \[ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \] gets its own line.
```

For numbered, referenceable equations use the `equation` environment:

```latex
\begin{equation}
  \label{eq:energy}
  E = mc^2
\end{equation}
As Eq.~\ref{eq:energy} shows...
```

## The symbols you reach for daily

| Symbols | Code |
| --- | --- |
| Greek | `\alpha \beta \gamma \delta \pi \Omega` |
| Operators | `\sum \prod \int \oint` |
| Calculus | `\partial \nabla \infty` |
| Comparison | `\le \ge \ne \approx \equiv` |
| Sets | `\in \subset \cup \cap \emptyset` |
| Arrows | `\to \mapsto \Rightarrow` |
| Accents | `\hat{x} \bar{x} \tilde{x} \vec{x}` |
| Fonts | `\mathbb{R} \mathcal{L} \mathfrak{g}` |

## Structures

```latex
\frac{a}{b}         % fraction
\sqrt[n]{x}         % nth root
x_{ij}^{2}          % sub and superscript
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % matrix
\begin{align}       % multi-line, aligned at &=
  f(x) &= x^2 \\
  g(x) &= 2x
\end{align}
```

Load `\usepackage{amsmath, amssymb}` for the full set; every Oleafly LaTeX
template already does.
