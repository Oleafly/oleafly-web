---
title: "Your first lab report in LaTeX as an undergrad"
description: "A short path from zero to a compiling report: template, equations, figures, references, without installing a full TeX distribution by hand."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

You do not need to master LaTeX to finish a lab report. You need a template,
four commands, and a compile button that works on day one.

## Skip the multi-gigabyte install if you can

A desktop app with a bundled engine (for example
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) gets you to a
PDF without administering TeX Live. If your course requires a specific
distribution, follow the course notes; otherwise optimize for starting.

## Steal a skeleton, then delete half of it

Start from a simple `article` template:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: ...}\author{You}\maketitle
\section{Method}
\section{Results}
\section{Discussion}
\end{document}
```

More detail: [compile your first PDF](/learn/first-document/) and the
[quick reference](/learn/cheatsheet/).

## Equations for the lab, not for a textbook

Inline: `$F = ma$`. Display: `\[ ... \]`. Number only what you cite later.
If the TA asked for uncertainty, put it in the prose or a small table, not a
ten-line align environment.

## One figure, done well

Export a plot as PDF or PNG. Include with:

```latex
\includegraphics[width=0.85\textwidth]{plot.pdf}
```

Caption below, label after caption, refer to it as Figure~\ref{...} in text.

## References without a PhD bibliography workflow

For three citations, a `thebibliography` environment is enough. For more,
ask a classmate for a shared `.bib` or export from Google Scholar and clean
keys. Broken cites print as `[?]`:
[clearing mystery citation marks](/learn/citation-question-mark/).

## Hand in the PDF, keep the source

Submit what the LMS asks for (usually PDF). Keep the `.tex` and figures in a
folder you still have after the course ends. Future you will reuse the
skeleton.
