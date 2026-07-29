---
title: "Multi-line equations that line up"
description: "align, gather, split, multline, and notag."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Multi-line equations that line up

A derivation of several steps looks best with the equals signs stacked in one column, so the eye can track what changed from line to line. The `amsmath` package provides the `align` environment for that, plus a small family of relatives for cases where alignment is not what you want.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## How align reads

Each line is one equation, ended by `\\`; the last line needs none. The `&` marks the alignment point, and every line's `&` lands in the same column. Placing `&` immediately before the equals sign is the standard habit, so the equals signs stack and the left-hand sides hang off to the left. Every line receives its own equation number; write `align*` to number none, or add `\notag` to individual lines to skip just those, as shown in [numbers and pointers for equations](/learn/number-equations/).

The environment opens display math by itself, so it must not sit inside `\[ ... \]` or `$ ... $`; nesting it in another math environment produces confusing errors.

## The family

| Env | Purpose |
| --- | --- |
| `align` | Several lines, aligned |
| `align*` | Same, unnumbered |
| `gather` | Several lines, centered |
| `split` | Multi-line single equation number |
| `multline` | Long equation broken without alignment |

`gather` handles several equations with no shared alignment point; it centers each line and numbers each one. `split` builds one multi-line equation under a single number and must sit inside `equation`. `multline` breaks one overlong formula without alignment, first line flush left and last flush right. The last two are treated in detail in [equations that will not fit](/learn/break-long-equations/).

Two questions decide which to use: are the lines separate equations or one broken equation, and is there an alignment point worth stacking? Separate and aligned: `align`. Separate and centered: `gather`. Single and aligned: `split`. Single and unaligned: `multline`.

## Common mistakes

A line without `&` still compiles, but it centers independently and nothing lines up. Two `&` on a line start a second column pair, which `align` reads as a second column of equations set side by side; if your output has equations marching to the right, count your ampersands. A trailing `\\` on the final line adds an empty row, which appears as odd vertical space below the block. Type a three-step derivation in the [live playground](/live/) to watch the alignment come together.
