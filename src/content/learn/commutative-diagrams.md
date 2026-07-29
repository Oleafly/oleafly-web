---
title: "Commutative diagrams"
description: "tikz-cd arrows and labels without coordinate soup."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Commutative diagrams

A commutative diagram is a grid of objects joined by labeled arrows, the standard picture in category theory, algebra, and topology. Raw TikZ can draw one, but placing every node by coordinate is slow and brittle. The `tikz-cd` package wraps TikZ in a matrix-like syntax: you lay out the objects like a table and describe each arrow by its direction.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## Reading the syntax

The grid works like a matrix: `&` separates columns and `\\` separates rows, so this diagram has A and B on the top row and C and D on the bottom. Each `\arrow[...]` belongs to the cell it is written in and points away from it. The first option is the direction, spelled with the letters `r`, `l`, `u`, and `d`: `\arrow[r]` goes one cell to the right, `\arrow[d]` one cell down. The letters combine and repeat for diagonals and longer reaches, so `rd` is one step down-right and `rr` spans two columns.

A label in quotes rides the arrow. By default it sits on one side; a prime after the closing quote, as in `"g"'`, flips it to the other side. In the example the primes keep all four labels on the outside of the square, which is the usual clean arrangement.

## More arrow options

Further options stack after the direction and label to change the arrow's style. `hook` bends the tail into an inclusion arrow, `two heads` doubles the head for a surjection, `dashed` marks a map you are asserting rather than assuming, and `Rightarrow` produces the double-shafted arrow used for natural transformations. A typical universal-property arrow reads `\arrow[rd, dashed, "\exists u"']`. When a diagram feels cramped, spacing options on the environment help, for example `\begin{tikzcd}[column sep=large]`.

## Practical notes

`tikz-cd` loads TikZ itself, so no separate `\usepackage{tikz}` line is needed, and diagrams compile with a standard engine and no external drawing tool. The most common structural mistake is an uneven grid: rows with different numbers of `&` separators shift objects into the wrong columns, and arrows then land in odd places. Start from a working square like the one above, grow it one row or column at a time, and recompile as you go. Diagrams are much easier to debug by eye than from the source, and the [live playground](/live/) gives you that feedback as you type.
