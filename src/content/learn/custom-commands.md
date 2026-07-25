---
title: "Macros that keep notation honest"
description: "newcommand, NewDocumentCommand, a shared macros file."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-24
---

# Macros that keep notation honest

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

Modern LaTeX:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

Keep a `macros.sty` shared across chapters.
