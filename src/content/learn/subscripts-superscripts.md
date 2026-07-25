---
title: "Indices that do not explode"
description: "Braces for multi-character scripts, primes, dots."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-24
---

# Indices that do not explode

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

Multi-character scripts **must** use braces: `x_ij` is `x_i` then `j`.

```latex
f' f'' \dot{x} \ddot{x}
```
