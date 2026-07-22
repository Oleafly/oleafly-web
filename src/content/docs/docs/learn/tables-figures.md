---
title: Tables and figures
description: Floats, includegraphics, tabular with booktabs rules, captions, labels, and cross-references.
---

## Figures

```latex
\usepackage{graphicx}  % preamble

\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{plots/results.png}
  \caption{Accuracy against training steps.}
  \label{fig:results}
\end{figure}

As Figure~\ref{fig:results} shows...
```

`[htbp]` is a placement *hint* (here, top, bottom, page); LaTeX moves floats
to avoid bad page breaks. Fighting it usually makes documents worse.

## Tables

Professional tables use horizontal rules only:

```latex
\usepackage{booktabs}  % preamble

\begin{table}[htbp]
  \centering
  \caption{Main results.}
  \label{tab:results}
  \begin{tabular}{lrr}
    \toprule
    Method & Metric A & Metric B \\
    \midrule
    Baseline & 0.71 & 0.64 \\
    Ours & \textbf{0.83} & \textbf{0.79} \\
    \bottomrule
  \end{tabular}
\end{table}
```

The column spec `lrr` means one left-aligned and two right-aligned columns;
`&` separates cells and `\\` ends a row. The
[table generator](/tools/table-generator/) produces this shape from a visual
grid.

## Labels and references

`\label{...}` marks anything numbered; `\ref{...}` prints its number and
`\pageref{...}` its page. Compile twice when references show as `??` (Oleafly
handles the rerun automatically).
