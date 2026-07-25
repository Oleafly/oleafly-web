---
title: "Stacked ratios that stay readable"
description: "frac, dfrac, tfrac, and continued fractions with amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-24
---

# Stacked ratios that stay readable

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

## Continued fractions

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Requires `amsmath`. For inline text, sometimes `(a/b)` is more readable than a stacked fraction.
