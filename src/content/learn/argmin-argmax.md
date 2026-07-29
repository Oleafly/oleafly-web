---
title: "Operators you invent once"
description: "DeclareMathOperator for argmin, argmax, and similar names."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Operators you invent once

LaTeX ships with named operators like `\sin`, `\log`, and `\max` that print in upright type with correct spacing around them. It does not ship with `\argmin` or `\argmax`, even though optimization papers use them constantly. If you type `argmin` as plain letters inside math mode, LaTeX treats it as the product of six variables: the letters come out italic, squeezed together, with no operator spacing. Declare the operator yourself, once, in the preamble.

## Declaring the operator

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Here is what each piece does. `\DeclareMathOperator` comes from `amsmath` and creates a new command whose argument is typeset as operator text: upright roman letters, with the spacing rules LaTeX already applies to `\max` and `\lim`. The first argument is the command name you will type, the second is the text that actually prints. The `\,` inside `arg\,min` inserts a thin space between the two words, which reads better than running them together.

The star after `\DeclareMathOperator` matters. A starred declaration makes the operator behave like `\lim`: in display math, anything you attach with `_` sits directly underneath the operator instead of trailing to its lower right. That is exactly what you want for `\argmin_\theta`, where the variable being optimized over should appear below. Without the star, the subscript stays at the side, which is the convention for operators like `\log_2`. In inline math the subscript stays at the side either way, to avoid stretching the line height.

## Reusing the pattern

The same technique covers any operator your field uses that LaTeX does not know about. A few common ones:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Notice that `\tr`, `\rank`, and `\diag` are unstarred because their subscripts, when they have any, belong at the side. Only limit-style operators such as `\esssup` get the star.

Declaring operators in the preamble instead of writing `\mathrm{argmin}` inline pays off twice. Notation stays consistent across the whole document, and if a journal asks for a different rendering, you change one line instead of hunting through every equation. Try the declaration and the display line together in the [live playground](/live/) to see how the starred subscript placement behaves.

A common mistake: declaring an operator whose name collides with an existing command, such as `\max` or `\deg`. LaTeX will stop with an "already defined" error. Pick a fresh name, or use `\renewcommand` only if you genuinely intend to replace the original.
