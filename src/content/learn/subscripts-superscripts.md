---
title: "Indices that do not explode"
description: "Braces for multi-character scripts, primes, dots."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Indices that do not explode

Subscripts and superscripts are the first math syntax everyone learns in LaTeX, and also the source of the first confusing output everyone produces. The underscore `_` lowers what follows, the caret `^` raises it, and both apply to exactly one character unless you say otherwise. That one-character rule is behind almost every mangled index you will ever see.

## The basic forms

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

`x_i` puts a single `i` in the subscript position and `x^2` raises a single `2`. Because `_` and `^` grab only the next token, anything longer than one character has to be wrapped in braces: `x_{ij}` subscripts both letters, and `x^{2n}` raises the whole `2n`. You can attach both a subscript and a superscript to the same symbol, in either order, and LaTeX stacks them correctly: `x_i^2`. Scripts also nest. In `x_{i_j}` the `j` is a subscript of the `i`, which is itself a subscript of `x`, and each level is set progressively smaller.

Multi-character scripts **must** use braces: `x_ij` is `x_i` then `j`. LaTeX does not report this as an error, because `x_i` followed by a variable `j` is perfectly legal math. The formula compiles, looks nearly right at a glance, and means something different. Build the braces habit early. When in doubt, brace the script.

The same trap appears in limits and bounds. `\sum_i=1^n` does not do what it looks like. The correct form is `\sum_{i=1}^{n}`, where the entire `i=1` is one braced subscript. If you use `_` or `^` outside math mode entirely, you get the classic error covered in [Missing dollar inserted](/learn/missing-dollar/).

## Primes and dots

```latex
f' f'' \dot{x} \ddot{x}
```

For derivatives you rarely want a literal superscript. The apostrophe key produces a prime: `f'` renders as f with one prime, `f''` with two, and LaTeX handles the raising and spacing itself, so there is no need for `f^{\prime}`. For time derivatives in the physics style, `\dot{x}` places a single dot over the x and `\ddot{x}` places two. These are accents, so they take their argument in braces.

One more subtlety: if you need a superscript after a prime, just chain them, as in `f'^2`. LaTeX combines them into a single superscript cluster.

## Check your output

The fastest way to internalize the braces rule is to type `x_ij` and `x_{ij}` next to each other in the [live playground](/live/) and watch the difference render. Whenever an index looks subtly wrong in a compiled document, the first thing to check is a missing pair of braces.
