---
title: "Matrices and arrays"
description: "pmatrix, bmatrix, vmatrix, and custom array columns."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Matrices and arrays

A matrix in LaTeX is a grid of cells: `&` separates the columns, `\\` separates the rows, and an environment wraps the grid in the right pair of delimiters. The matrix environments come from `amsmath`, so that package needs to be in your preamble before any of this compiles.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## The matrix environments

All three share the same body. Only the surrounding delimiters change. `pmatrix` wraps the grid in parentheses, the most common style for matrices and vectors. `bmatrix` uses square brackets, and `vmatrix` uses single vertical bars, the standard notation for a determinant. There is also plain `matrix` with no delimiters, `Bmatrix` with braces, and `Vmatrix` with double bars for norms. Inside, `a & b` fills the two columns of a row, `\\` starts the next row, and every row should carry the same number of `&` separators.

These environments must appear inside math mode. Wrap them in `\[ ... \]` or use them within an equation. For a small matrix in the middle of a sentence, `smallmatrix`, also from `amsmath`, sets a compact version that does not stretch the line: `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`.

## Custom array

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

When you need per-column control, `array` is the general tool. Its mandatory argument is a column specification: here `r|cc` declares a right-aligned column, a vertical rule, then two centered columns. The alignment letters are `l`, `c`, and `r`, and `|` draws a rule between columns. `\hline` between rows draws a horizontal rule across the full width. `array` draws no outer delimiters of its own. Pair it with `\left(` and `\right)` if you want them. It is the math-mode sibling of the `tabular` environment used for tables in text.

## Common mistakes

The error "Extra alignment tab has been changed to \cr" means a row has more `&` separators than the column count allows, which usually traces back to a missing `\\` at the end of the previous row. "Environment pmatrix undefined" means `\usepackage{amsmath}` is missing. A matrix pasted outside math mode fails with "Missing $ inserted". See [math mode basics](/learn/math-mode/) if the delimiters are new. Comparing a two-by-two in each delimiter style takes seconds in the [live playground](/live/).
