---
title: "Panels labeled a, b, c"
description: "subcaption for multi-panel figures under one caption."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Panels labeled a, b, c

Papers constantly need multi-panel figures: the architecture in panel (a), the training curve in (b), an ablation in (c), all sharing one figure number and one overall caption. The clean way to build this is the `subcaption` package, which gives you a `subfigure` environment that handles the (a), (b) lettering, per-panel captions, and referencing automatically.

## The pattern

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Here is what each piece does. The outer `figure` environment is a normal float, and `[htbp]` lists the placements LaTeX may try, in order: here in the text, top of a page, bottom of a page, or a dedicated float page. Each `subfigure` is a box of a stated width, here `0.48\textwidth` (48 percent of the text width). Two panels at 0.48 leave a small gap, and the `\hfill` between them stretches so the panels sit flush against the left and right margins. Inside each panel, `width=\linewidth` scales the image to the panel's width, not the whole page. That last detail is the one people get wrong most often.

The `\caption` inside a `subfigure` produces the small "(a) First" style label under that panel. The `\caption` at the end, inside `figure` but outside any `subfigure`, is the main caption that carries the figure number. Keep each `\label` immediately after its `\caption`, because a label records whatever number was most recently issued, as explained in [captions and labels](/learn/captions-labels/).

## Referencing panels

With the labels above, `\ref{fig:p}` prints the figure number, say 2, while `\ref{fig:p-a}` prints 2a. If you want just the letter, `\subref{fig:p-a}` prints only "a", handy for sentences like "panels (a) and (b)". That is the real payoff of `subcaption` over manually typing "(a)" under images. The letters renumber themselves when you add or reorder panels, and every reference stays correct.

## Rows, spacing, and a common mistake

For a third panel, either shrink the widths to about `0.31\textwidth` and add another `subfigure` with `\hfill` between each pair, or start a new row by leaving a blank line between rows of subfigures. A blank line inside a row, however, is the classic mistake: any empty line between two `subfigure` environments starts a new paragraph, which stacks the panels vertically instead of side by side. If your panels refuse to sit in one row, look for a stray blank line first, and remember that `%` at the end of a line comments out the invisible end-of-line space that can also push a panel too wide to fit.
