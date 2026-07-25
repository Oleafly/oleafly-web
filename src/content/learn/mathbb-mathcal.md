---
title: "Blackboard, script, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm and when each alphabet shows up."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Blackboard, script, Fraktur

Mathematics uses more than one alphabet. The real numbers get a blackboard-bold R, a Lagrangian gets a calligraphic L, a Lie algebra gets a Fraktur g, and each of these is a distinct command in LaTeX rather than a font you switch on. Used consistently, the alphabets tell the reader what kind of object a letter names before the surrounding sentence does.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## The four alphabets

| Command | Look | Typical use |
| --- | --- | --- |
| `\mathbb{R}` | Blackboard | Number sets |
| `\mathcal{L}` | Calligraphic | Lagrangians, loss |
| `\mathfrak{g}` | Fraktur | Lie algebras |
| `\mathrm{d}` | Upright | Differentials, operator names |

`\mathbb` produces blackboard bold, the double-struck letters used almost exclusively for number sets: `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. It comes from the `amssymb` package and covers capitals only; the font has no lowercase alphabet, so a lowercase argument prints wrong glyphs or nothing useful.

`\mathcal` gives calligraphic capitals, the usual choice for Lagrangians, loss functions, and families of sets. It also covers capitals only, and it works in core LaTeX with no extra package.

`\mathfrak`, also from `amssymb`, is Fraktur, with both cases available. Lowercase Fraktur names Lie algebras, and the capitals appear in algebra and set theory, for ideals and cardinals among other things.

`\mathrm` is not a decorative alphabet but a switch to upright roman inside math. It is the right tool for anything that is notation rather than a variable: the differential in `\mathrm{d}x`, units, or textual sub-labels like `x_{\mathrm{max}}`. For named operators such as tr and rank there is a better mechanism, covered in [operators you invent once](/learn/argmin-argmax/).

## Practical notes

If `\mathcal` looks too plain for your purpose, the `mathrsfs` package adds `\mathscr`, a more ornate script often used for sheaves and sigma-algebras; the two can coexist and denote different objects in the same paper.

The common mistake is treating these alphabets as decoration. Each carries a conventional meaning in most fields, and a reader who sees `\mathbb{A}` will expect something set-like and number-flavored. Check the conventions of your field before assigning letters, and once assigned, keep one alphabet per object for the whole document. All four render side by side in seconds in the [live playground](/live/).
