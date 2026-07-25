---
title: "Everything above begin{document}"
description: "Packages, metadata, and load order: what belongs in the preamble and what does not."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-24
---

# Everything above begin{document}

Everything between `\documentclass{...}` and `\begin{document}` is the **preamble**. It does not produce visible text; it configures the run.

## Anatomy

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

## Rules of thumb

1. **One job per package:** do not load five geometry packages.
2. **hyperref last** (almost), it redefines many commands.
3. **Options on the class** set global defaults (`11pt`, `twocolumn`).
4. **Custom macros** belong in the preamble or a `.sty` file.

See also: [document skeleton](/learn/document-skeleton/), [engines compared](/learn/engines-compared/).
