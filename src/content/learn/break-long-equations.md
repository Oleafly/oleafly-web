---
title: "Equations that will not fit"
description: "multline and split when the measure is too narrow."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Equations that will not fit

Sooner or later a derivation produces an equation wider than the text block, and LaTeX will let it run into the margin rather than guess where to break it. Two `amsmath` environments let you place the break yourself: `multline` for a single long expression, and `split` for a break that should stay aligned.

## multline

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

`multline` suits one long formula with no natural alignment point. You choose the break with `\\`, and the environment handles the layout: the first line is set flush left, the last flush right, and any middle lines are centered. The whole expression gets one equation number, placed on the last line. Convention is to break before a binary operator, so the `+` opens the continuation line and the reader sees at a glance that the expression carries on.

## split

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

`split` also produces a single number, but aligns its lines the way `align` does, with `&` marking the alignment point. It is not a standalone environment; it lives inside `equation` or another display environment, which supplies the number. Here the `&` sits before the equals sign on the first line, and the continuation starts with `&\quad`, an empty alignment point followed by a quad of space, so the second line indents just past the equals sign. That indent tells the reader this is still the right-hand side, not a new equation.

## Choosing between them

Use `multline` when the equation is one long sum with no structure worth aligning. Use `split` when there is an equals sign the continuation should hang under. If you have several genuinely separate equations, neither is right; that is a job for `align`, covered in [multi-line equations that line up](/learn/align-equations/).

Before reaching for either, consider rewriting the math. Naming a subexpression in the preceding sentence, factoring, or splitting into two equations often gets the width under control and reads better too. Prefer that over shrinking the type. A display squeezed to fit almost always reads worse than a clean break.

One error to know: `split` used on its own, without an enclosing `equation`, stops with a "Package amsmath Error". Wrap it first, then compile. Both environments are quick to experiment with in the [live playground](/live/).
