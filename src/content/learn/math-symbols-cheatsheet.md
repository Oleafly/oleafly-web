---
title: "Symbol desk card"
description: "Accents, big operators, number sets, and stretchy delimiters on one page."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Symbol desk card

This page is a reference card rather than a lesson. Accents, big operators, number sets, and delimiters that cover most day-to-day mathematics, all in one place. Every command here works in math mode only, and the number sets need `\usepackage{amssymb}` in the preamble. For the Greek alphabet and the basic relations, see [Greek and everyday symbols](/learn/greek-letters/). For how math mode itself works, start with [math mode basics](/learn/math-mode/).

## Accents

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Command | Renders as | Conventional meaning |
| --- | --- | --- |
| `\hat{x}` | x with circumflex | Estimators, unit vectors, operators |
| `\bar{x}` | x with bar | Sample means, complex conjugates |
| `\tilde{x}` | x with tilde | Approximations, transformed variables |
| `\vec{x}` | x with arrow | Vectors |
| `\dot{x}`, `\ddot{x}` | one or two dots | First and second time derivatives |
| `\widehat{xyz}`, `\overline{xyz}` | stretched accent | Accents over multi-letter expressions |

The plain accents fit a single letter; the `wide` and `over` variants stretch to span whatever is in the braces.

## Big operators

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Command | Meaning |
| --- | --- |
| `\sum_{i=1}^n` | Sum with lower and upper bounds |
| `\prod_{i=1}^n` | Product |
| `\int_a^b` | Definite integral |
| `\oint` | Contour integral |
| `\lim_{x \to 0}` | Limit |
| `\max_{x}`, `\inf_{x}` | Maximum, infimum over a variable |

Bounds attach with the ordinary subscript and superscript syntax, braced when longer than one character. In display math, sums, products, and limits place their bounds above and below the symbol. Integrals keep theirs at the side. That is the standard convention.

## Number sets

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

These are the naturals, integers, rationals, reals, and complex numbers in blackboard bold. The `\mathbb` alphabet and its relatives are covered in [Blackboard, script, Fraktur](/learn/mathbb-mathcal/).

## Delimiters

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` and `\right` grow their delimiter to the height of the enclosed material, so parentheses around a tall fraction wrap it instead of clipping it at text height. They must come in pairs. To show only one side, close with `\right.` and the invisible partner satisfies the pairing. Braces are special characters, so set braces are written `\{` and `\}`. Angle brackets for inner products are `\langle` and `\rangle`, never the keyboard's less-than and greater-than signs, which are relation symbols with the wrong shape and spacing.

Any row of this card can be pasted into the [live playground](/live/) to see the rendered form next to the source.
