---
title: "Compile your first PDF"
description: "A tiny article, one compile, and the three ideas that unlock most of LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-24
---

# Compile your first PDF

LaTeX is a markup language. You write plain text with commands, and a compiler turns that into a PDF. You say what something is; LaTeX decides how it looks.

## The smallest real document

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

## Three ideas that carry the language

1. **Commands** start with a backslash: `\section{...}`, `\textbf{...}`.
2. **Environments** wrap regions: `\begin{document} ... \end{document}`.
3. **The preamble** (everything before `\begin{document}`) configures the document.

## Compile it

In [Oleafly](/docs/getting-started/), create a project, paste the source, and compile. The PDF updates beside your source. SyncTeX lets you click either side to jump to the other.

## Next

- [The preamble, explained](/learn/preamble-explained/)
- [Math mode](/learn/math-mode/)
- [Cheatsheet](/learn/cheatsheet/)
