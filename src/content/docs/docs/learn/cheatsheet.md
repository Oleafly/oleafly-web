---
title: LaTeX cheatsheet
description: "The one-page reference: skeleton, formatting, math, floats, citations, and the errors everyone hits."
---

## Skeleton

```latex
\documentclass[11pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath, amssymb, graphicx, hyperref}

\title{Title} \author{You} \date{\today}

\begin{document}
\maketitle
\section{Introduction}
...
\end{document}
```

## Formatting

| You want | You type |
| --- | --- |
| Bold / italic / mono | `\textbf{} \textit{} \texttt{}` |
| Emphasis | `\emph{}` |
| Bullet / numbered list | `itemize` / `enumerate` |
| New paragraph | blank line |
| Forced line break | `\\` |
| Non-breaking space | `~` |
| Escape specials | `\% \$ \& \# \_ \{ \}` |

## Math

| You want | You type |
| --- | --- |
| Inline / display | `$...$` / `\[...\]` |
| Fraction / root | `\frac{a}{b}` / `\sqrt{x}` |
| Sub / superscript | `x_i` / `x^2` |
| Sum / integral | `\sum_{i=1}^n` / `\int_0^\infty` |
| Greek | `\alpha \beta \pi \Omega` |
| Numbered equation | `equation` environment + `\label` |

## Floats and references

| You want | You type |
| --- | --- |
| Image | `\includegraphics[width=0.8\textwidth]{f.png}` |
| Figure / table float | `figure` / `table` + `\caption` + `\label` |
| Reference | `Figure~\ref{fig:x}`, `Eq.~\ref{eq:y}` |
| Table rules | `\toprule \midrule \bottomrule` (booktabs) |

## Citations

| You want | You type |
| --- | --- |
| Cite | `\cite{key}` |
| Bibliography | `\bibliographystyle{plain}` + `\bibliography{refs}` |
| Validate a .bib | [BibTeX validator](/tools/bibtex-validator/) |

## Errors everyone hits

| Symptom | Cause |
| --- | --- |
| Text vanishes after a word | Unescaped `%` started a comment |
| `Missing $ inserted` | Math symbol (`_`, `^`) outside math mode |
| `Undefined control sequence` | Typo in a command, or missing package |
| References print `??` | Needs a second compile pass |
| `! LaTeX Error: File not found` | Wrong image path or extension |
