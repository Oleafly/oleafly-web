---
title: "Piecewise definitions"
description: "The cases environment for conditions under a single function."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Piecewise definitions

A piecewise function gives different formulas on different parts of its domain: the absolute value, the ReLU activation, a tax bracket schedule. The typeset convention is a single tall left brace with one row per case, each row showing the formula and the condition under which it applies. The `amsmath` package provides the `cases` environment, which produces exactly this layout without any manual brace sizing.

## The cases environment

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Reading this line by line: the whole thing sits inside `\[ ... \]`, so it is display math on its own line. `f(x) =` is ordinary math, and then `\begin{cases}` opens the piecewise block. Inside, each row has two columns separated by `&`: the formula on the left, the condition on the right. Rows end with `\\`, except that the final row does not need one. When it compiles, LaTeX draws one left brace tall enough to span both rows and aligns the formulas in one column and the conditions in another.

The `&` is doing real work here. Without it, each row would be a single blob and the conditions would not line up vertically. With it, `x^2` and `-x` share a left edge, and `x \ge 0` and `x < 0` share their own left edge, which is what makes the definition scannable.

Two things must be in place for this to compile. First, `\usepackage{amsmath}` in the preamble, since `cases` is not part of core LaTeX. Second, the environment has to be inside math mode. `cases` builds math content but does not open math mode by itself. If either is missing you will get an "Environment cases undefined" or a "Missing $ inserted" error. The latter is explained in [Missing dollar inserted](/learn/missing-dollar/).

## Adding the words

Most published piecewise definitions include the word "if", and often a final "otherwise". Since the condition column is math mode, plain words need `\text{...}` to come out in the document font with proper spacing:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Note the space inside `\text{if }`. Math mode ignores spaces you type, but inside `\text` spaces are real, so putting one before the closing brace separates "if" from the condition that follows.

## Variants and a common mistake

If the formulas are tall fractions and look cramped, the `mathtools` package offers `dcases`, a drop-in replacement that sets each formula in display style. There is also `rcases` for the mirror-image situation where the brace belongs on the right.

The most frequent mistake is forgetting `\\` between rows, which silently merges two cases into one long line. If your compiled output shows conditions running into formulas, count your row breaks first. You can experiment with the environment live in the [playground](/live/).
