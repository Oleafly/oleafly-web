---
title: "Your first lab report in LaTeX as an undergrad"
description: "From zero to a compiling report: template, equations, figures, references, and a compile path that does not require administering TeX Live by hand."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

You do not need to master LaTeX to finish a lab report. You need a template, a
few commands, and a compile button that works on day one. Everything else can
wait until a later course asks for a thesis-class document.

This is a short path that prioritizes a clean PDF over perfect typesetting.

## Skip the multi-gigabyte install if you can

A desktop research editor with a bundled engine (for example
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) gets you to a PDF
without administering TeX Live. You get templates, error cards on the line that
broke, PDF beside the source with click-to-jump, and file history without a
separate Git course. If your instructor requires a specific distribution or
Overleaf, follow the course notes. Otherwise optimize for starting.

Cloud editors are fine too when the course already uses them. The goal is a PDF
on time, not a toolchain identity.

## Steal a skeleton, then delete half of it

Start from a simple `article` template:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

More detail: [compile your first PDF](/learn/first-document/) and the
[quick reference](/learn/cheatsheet/).

Delete sections your rubric does not ask for. Do not copy a 40-package thesis
preamble "just in case." Extra packages are how beginners get errors they cannot
read.

## Equations for the lab, not for a textbook

Inline: `$F = ma$`. Display:

```latex
\[
  v = v_0 + at
\]
```

Number only what you cite later with `\eqref`. If the TA asked for uncertainty,
put it in a sentence or a small table, not a ten-line `align` you do not
understand yet. Fractions: `\frac{a}{b}`. Square roots: `\sqrt{x}`.

When the compile log says something scary, fix the first error only, then
recompile. Later errors are often noise from the first one.

## One figure, done well

Export a plot as PDF or PNG from your analysis tool. Include it with:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

In the text: `Figure~\ref{fig:vr} shows...`. Caption below the figure. Label
after the caption. If the figure floats to the wrong page, shrink width slightly
before you fight placement options for an hour:
[float placement](/learn/figure-wrong-position/).

## Tables without suffering

For a few rows, a simple `tabular` is enough. Put a caption above with `table`
+ `\caption`. Align numbers so the TA can scan them. You do not need
publication-grade `booktabs` on lab 1, but avoid vertical line soup if you can.

## References without a PhD bibliography workflow

For three citations, a manual list works:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

For more, export a `.bib` from Google Scholar or Zotero and clean the keys so
they are short and readable. Broken cites print as `[?]`:
[clearing mystery citation marks](/learn/citation-question-mark/).

Cite the lab manual and the textbook the way the course asks (IEEE, APA-ish, or
a simple numbered list). Matching the rubric beats matching a journal.

## Common beginner errors

- Forgetting `\usepackage{graphicx}` before `\includegraphics`
- Special characters like `%` and `_` in text without escaping
- Mismatched `$` math delimiters
- Filenames with spaces (`my plot.pdf`) that break includes
- Editing a different folder than the one you compile

Slow down, fix the first log line, recompile.

## Hand in the PDF, keep the source

Submit what the LMS asks for (usually PDF). Keep the `.tex` and figures in a
folder you still have after the course ends. Future you will reuse the skeleton
for the next report. If your editor keeps Git history automatically, even
better: you can recover a version from before you deleted the correct equation.

## A 90-minute first session

If you are starting tonight:

1. Open a template or paste the skeleton above.
2. Fill title, name, section headings from the rubric.
3. Add one equation you already know is correct.
4. Export one plot; include it; caption it; cite it in Results.
5. Add two references the way the course asks.
6. Compile until the PDF looks like a report, not a blank article.

Stop when the rubric is covered. Do not spend the night on package options.

## When something breaks

Read only the first error. Common fixes: missing `$`, missing package for
graphics, wrong filename, extra `}`. Save a copy of a compiling version before
big edits so you can walk back. If a classmate's preamble works for the course,
borrow the minimum packages they used, not the whole thesis stack.

## What success looks like

The PDF opens, margins look reasonable, figures have captions, equations are
readable, and the rubric items are clearly headed. That is enough for a first
LaTeX lab report. Typography perfection can wait for a paper that actually needs
it.
