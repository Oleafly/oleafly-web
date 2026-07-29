---
title: "Derivatives and integrals"
description: "Ordinary and partial derivatives, definite integrals, thin spaces before differentials."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Derivatives and integrals

Calculus notation is where LaTeX starts earning its keep. Stacked derivative fractions, integral signs with limits, and dots over variables are all one or two commands each. This lesson covers the handful of commands that produce almost every derivative and integral you will ever write, plus the small spacing habit that separates polished papers from rough drafts.

## Derivatives

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

An ordinary derivative is just a fraction: `\frac{dy}{dx}` stacks `dy` over `dx`. For partial derivatives, swap the `d` for `\partial`, which prints the curly partial symbol; `\frac{\partial f}{\partial x}` is the standard form. Higher-order partials follow the same pattern, for example `\frac{\partial^2 f}{\partial x \partial y}`.

`\nabla` gives the gradient symbol, and since it is an ordinary symbol you can raise it like anything else: `\nabla^2 f` for the Laplacian. For compact notation, `f'(x)` uses the apostrophe key directly, and LaTeX converts one or more `'` marks into properly raised primes. Newton's dot notation for time derivatives comes from the accent commands `\dot{x}` and `\ddot{x}`, which place one or two dots over the argument.

One style choice: some journals want the differential `d` upright, written `\mathrm{d}`. If yours does, define `\newcommand{\dd}{\mathrm{d}}` once in the preamble and write `\frac{\dd y}{\dd x}` so you can flip the choice later.

## Integrals

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

`\int` is the integral sign, and the familiar subscript and superscript syntax attaches the limits: `_a` for the lower bound, `^b` for the upper. In inline math the limits sit beside the sign to keep the line compact; in display math they still sit beside the sign for integrals (unlike sums), which is the standard convention. Double and triple integrals get their own commands, `\iint` and `\iiint`, which space the repeated signs correctly, along with `\oint` for contour integrals.

The `\,` before `dx` is a thin space. Without it, `f(x)dx` runs the integrand straight into the differential and the eye has to untangle them. The thin space is a widely followed convention, so make it a habit: integrand, then `\,`, then the differential.

## Try it and a common mistake

These snippets render as you type in the [live playground](/live/), which is a fast way to check a derivative stack before it goes into a document; see [math mode basics](/learn/math-mode/) if the `$` and `\[` delimiters are still new.

The most common mistake here is typing `d/dx` style derivatives with a slash in display math where a stacked `\frac` was wanted, or forgetting braces on multi-character limits: `\int_a^b+1` puts only the `b` in the superscript. Write `\int_a^{b+1}` so the whole expression is raised.
