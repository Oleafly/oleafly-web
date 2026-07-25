---
title: "Headings that number themselves"
description: "section through paragraph, starred forms, secnumdepth."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-24
---

# Headings that number themselves

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Starred forms suppress numbers: `\section*{Acknowledgments}`.

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```
