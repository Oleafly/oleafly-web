---
title: "Question marks instead of numbers"
description: "Labels need another pass; label placement after captions."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Question marks instead of numbers

You compile, and where a figure or equation number should be, the PDF shows `??`. That is not an error in your source. It is how LaTeX renders a reference it cannot resolve yet, and the fix is usually just compiling again.

## Why one pass is not enough

LaTeX reads your document top to bottom in a single pass. When it meets a `\label`, it writes the current number to the `.aux` file; when it meets a `\ref`, it looks the number up from the `.aux` file written by the previous run. On a fresh compile there is no previous run, so every reference prints as `??`. The second pass reads the completed `.aux` file and fills the numbers in. Oleafly's bundled compiler reruns passes automatically until the numbers settle, but if you drive `pdflatex` by hand, the second compile is your job.

## When ?? survives a second pass

If the question marks persist, work through three checks. First, compare the spelling in `\ref` against the `\label` character by character; labels are case-sensitive and a stray space counts. Second, check where the label sits. `\label` records the value of the most recently stepped counter, and in a float it is `\caption` that steps the counter, so the label must come after the caption:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

A label placed before the caption compiles without complaint but picks up the wrong counter, usually the current section, so the reference prints a plausible but wrong number rather than `??`. That variant is worse because it is easy to miss. Third, if the `.aux` file was deleted mid-run or a compile was interrupted, the recorded labels may be incomplete; recompile from a clean state.

## Reading the warnings

The log tells you which case you are in. "There were undefined references" means at least one `\ref` found nothing. "Label(s) may have changed. Rerun to get cross-references right" means another pass will fix it. "Label multiply defined" means two `\label` commands share one name, and LaTeX silently uses one of them, so rename until every label is unique. A naming convention with `eq:`, `fig:`, and `tab:` prefixes makes collisions rare and the source easier to search; the label workflow itself is covered in [numbers and pointers for equations](/learn/number-equations/).
