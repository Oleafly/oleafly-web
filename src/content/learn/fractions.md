---
title: "Stacked ratios that stay readable"
description: "frac, dfrac, tfrac, and continued fractions with amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Stacked ratios that stay readable

Fractions are the first place LaTeX output visibly outclasses a word processor: a real stacked numerator and denominator with a rule between them, sized to fit the surrounding math. The core command is `\frac`, and the interesting part is how its size changes with context, and how to override that when the automatic choice hurts readability.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` takes two braced arguments, numerator first, denominator second, and typesets them stacked over a horizontal rule. Its size is context-sensitive. In display math (inside `\[ ... \]` or an `equation` environment) the fraction is set full size. In inline math (inside `$ ... $`) it is set smaller and more compact, so it does not force the lines of the paragraph apart.

Sometimes you want to override that. `\dfrac`, from `amsmath`, forces display style: a full-size stacked fraction even in the middle of a sentence. Use it sparingly, because a tall fraction inline stretches the line spacing around it. `\tfrac` is the opposite: it forces the small text style even in display math, which is handy for simple coefficients like one half in front of a big expression, where a full-size stack would draw too much attention.

Both arguments can hold arbitrary math, including other fractions: `\frac{1}{1 + \frac{1}{x}}` nests, and LaTeX shrinks the inner fraction automatically. When nesting gets deep, though, there is a better tool.

## Continued fractions

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Nested `\frac`s shrink at every level, so by the third floor of a continued fraction the digits are barely legible. `\cfrac`, also from `amsmath`, keeps every level at full display size and aligns the numerators, which is the accepted way to typeset continued fractions. You can pass an optional position, `\cfrac[l]{1}{...}`, to push a numerator to the left instead of centering it.

## Practical judgment

All of `\dfrac`, `\tfrac`, and `\cfrac` require `\usepackage{amsmath}` in the preamble; plain `\frac` works without it. If you get "Undefined control sequence" on `\dfrac`, the package line is missing.

For inline text, sometimes a slashed form is simply more readable than a stacked fraction: writing `(a/b)` or `a/b` keeps the line height even and reads fine for simple ratios. A good rule of thumb is to stack fractions in display math, where there is vertical room, and prefer the slash inline unless the fraction is the point of the sentence. Type a paragraph both ways in the [live playground](/live/) and compare; the difference in line spacing is immediately visible. If math delimiters like `$` and `\[` are still unfamiliar, start with [math mode basics](/learn/math-mode/).
