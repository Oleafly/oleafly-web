---
title: "Vectors and bold symbols"
description: "mathbf, boldsymbol, and a consistent vector macro."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vectors and bold symbols

Many fields set vectors and matrices in bold: **x** for a vector, **A** for a matrix, bold beta for a coefficient vector. In LaTeX there are two different bold commands for math, and they are not interchangeable. Knowing which one to reach for, and wrapping the choice in a macro, keeps notation consistent through a whole thesis.

## The two commands

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` switches its argument to an upright bold roman font. It works well for Latin letters, so `\mathbf{A}` gives you a solid upright bold A, which many texts use for matrices. Its limitation is that it only covers letters and digits: `\mathbf{\beta}` does nothing useful, because the bold roman font simply has no Greek glyphs, and the beta prints unchanged.

`\boldsymbol`, provided by `amsmath` (technically by the `bm`-like machinery in `amsbsy`, which `amsmath` loads), emboldens whatever symbol you hand it while keeping its shape. `\boldsymbol{\beta}` produces a bold italic beta, and `\boldsymbol{x}` produces a bold italic x, matching the slanted style of ordinary math variables. If your convention is that vectors are bold italic, this is the command you want.

So the practical split is: upright bold Latin letters, use `\mathbf`; anything Greek, or bold that should stay italic, use `\boldsymbol`.

## Define macros once

Rather than typing these commands throughout the document, define semantic macros in the preamble:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Now you write `\vect{x}` for a vector and `\mat{A}` for a matrix. The `[1]` says each macro takes one argument, and `#1` is where that argument lands. The payoff comes later: if a journal requires vectors to be upright bold instead of bold italic, you edit one line so `\vect` wraps `\mathbf`, and every vector in the paper updates on the next compile. That beats search-and-replace across two hundred equations.

Macros also make intent readable in the source. Six months from now, `\vect{w}` tells you the w is a vector; a bare `\boldsymbol{w}` only tells you it is bold.

## A common mistake

Do not fake bold Greek with `\textbf` inside math, and do not use `\mathbf` for it and assume it worked. Compile and look closely: an unbolded beta next to bold neighbors is easy to miss on screen and obvious in print. If you want to eyeball candidates quickly, paste a line like `\boldsymbol{\beta} \mathbf{\beta} \beta` into the [live playground](/live/) and compare the three side by side. For bolding entire equations, including symbols like `\sum`, look at the `bm` package's `\bm` command, which handles more symbol classes than `\boldsymbol`.

Bold in running text is a different topic with different commands; see [emphasis in text](/learn/bold-italic/).
