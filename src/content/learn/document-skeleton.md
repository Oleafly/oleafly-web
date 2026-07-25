---
title: "A skeleton you can reuse"
description: "Class, preamble, maketitle, sections, bibliography: the shape of almost every paper."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-24
---

# A skeleton you can reuse

Every paper is the same shape:

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

## Class choices

| Class | Use |
| --- | --- |
| `article` | Papers, homework, notes |
| `report` | Longer reports with chapters |
| `book` | Books and many theses |
| `beamer` | Slides |

For multi-file projects, see [split chapter files](/learn/split-chapter-files/).
