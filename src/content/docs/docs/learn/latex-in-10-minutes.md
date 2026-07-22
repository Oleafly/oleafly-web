---
title: LaTeX in 10 minutes
description: The mental model and minimum syntax you need to write your first LaTeX document, from documentclass to compiled PDF.
---

LaTeX is a markup language: you write plain text with commands in it, and a
compiler turns that into a typeset PDF. You describe *what* things are
(a section, an equation, a citation) and LaTeX decides *how* they look.

## The smallest real document

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $e = mc^2$ or on its own line:
\[ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \]

\end{document}
```

Three ideas carry the whole language:

1. **Commands** start with a backslash: `\section{...}`, `\textbf{...}`.
2. **Environments** wrap regions: `\begin{document} ... \end{document}`.
3. **The preamble** (everything before `\begin{document}`) configures the
   document: its class, packages, and metadata.

## The compile loop

In Oleafly, create a project, type, and press compile (or let auto-compile
run). The PDF preview updates beside your source, and SyncTeX lets you click
either side to jump to the other. Errors appear as plain-language
explanations, not raw TeX logs.

## Where to go next

The rest of this series covers each building block in a few minutes each:
[document skeleton](/docs/learn/document-skeleton/),
[text and formatting](/docs/learn/text-formatting/),
[math](/docs/learn/math/),
[tables and figures](/docs/learn/tables-figures/), and
[citations](/docs/learn/citations/). Keep the
[cheatsheet](/docs/learn/cheatsheet/) open while you write.
