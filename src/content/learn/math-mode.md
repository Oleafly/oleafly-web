---
title: "Math that sits in a sentence (or alone)"
description: "Inline math, display math, equation environments, and when numbering is worth it."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
---

# Math that sits in a sentence (or alone)

LaTeX treats mathematics as a separate mode with its own fonts and spacing rules. Every variable, formula, and symbol has to live inside math mode, whether it is a lone n in a sentence or a full equation. There are two kinds: inline math flows within a paragraph, and display math sits centered on its own line, with or without a number.

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

## Inline math

A pair of dollar signs, as in `$E=mc^2$`, sets the formula at text size inside the line. The letters come out in math italic and the spacing around the equals sign is handled for you. `\(E=mc^2\)` is the equivalent LaTeX-native form; it produces identical output, and because its opening and closing delimiters differ, an unclosed one gives a clearer error message. Use inline math even for a single variable name, so the n in your prose matches the n in your equations.

## Display math

`\[ ... \]` places a formula on its own centered line without a number. It is the right choice for one-off equations you never refer back to. Avoid the old `$$ ... $$` form; it is plain TeX rather than LaTeX and produces slightly wrong vertical spacing in some situations.

## Numbered equations

The `equation` environment displays the formula with a number at the margin. `\label{eq:energy}` attaches a name to that number, and elsewhere you write `Equation~\ref{eq:energy}` or, with `amsmath` loaded, `\eqref{eq:energy}`, which adds the parentheses itself. The `~` is a non-breaking space, so the word and the number stay on one line. References resolve on the second compile; if you see `??` in the output, see [question marks instead of numbers](/learn/equations-show-qq/).

## The packages to load

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Nearly every mathematical document loads these three. `amsmath` provides the environments and commands most of these lessons assume, including `align` and `\eqref`. `amssymb` and `amsfonts` add symbol fonts and extra alphabets such as `\mathbb`. Put the line in the preamble once and forget about it.

The classic beginner error is math syntax outside math mode: an underscore in plain text stops the compile with "Missing $ inserted", which has [its own lesson](/learn/missing-dollar/). To get a feel for the two modes, type a sentence with `$x_i$` inline and the same formula inside `\[ ... \]` in the [live playground](/live/) and compare how each sits on the page.
