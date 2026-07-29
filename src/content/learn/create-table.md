---
title: "A table that looks like a paper table"
description: "tabular, booktabs rules, caption, label."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# A table that looks like a paper table

Tables in LaTeX use two nested environments with different jobs. The inner `tabular` builds the grid of cells. The outer `table` makes that grid a float, so it can carry a number, a caption, and a label, and so LaTeX can place it where the page has room. Add the `booktabs` package for the horizontal rules and the result looks like a table from a published paper, not a spreadsheet screenshot.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## The outer environment

The `[htbp]` argument lists where LaTeX may place the float: here in the text, at the top of a page, at the bottom, or on a separate page of floats. It tries them in that order, and granting all four keeps the table from drifting far; the mechanics are explained in [where floats actually land](/learn/position-figures/). `\centering` centers the grid horizontally. The `\caption` prints the numbered caption, and by convention table captions go above the table, unlike figure captions, which go below. `\label` must come after `\caption`, because a label records the most recently issued number, as covered in [captions and labels](/learn/captions-labels/). With the label in place, `Table~\ref{tab:results}` in your text always prints the right number.

## The inner grid

The `{lcc}` after `\begin{tabular}` declares one column per letter: `l` is left-aligned, `c` is centered, and `r` would be right-aligned. Three letters means three columns, and every row must supply exactly that many cells. Within a row, `&` separates cells and `\\` ends the row. Text columns usually read best left-aligned, while short numeric columns are commonly centered.

The three rules come from `booktabs`. `\toprule` opens the table, `\midrule` separates the header row from the data, and `\bottomrule` closes it. These replace the plain `\hline` command and come with correctly tuned spacing above and below, which is most of why the table looks professionally set. No vertical lines, and no rule between data rows: the `booktabs` style leaves both out on purpose. The reasoning is laid out in [three-rule tables](/learn/booktabs-beautiful/).

## Practical notes

The most frequent beginner errors are a mismatch between the number of `&` separators and the declared columns, and a forgotten `\\` at the end of a row, both of which produce confusing error messages pointing at the next line. If you would rather not hand-count cells, build the grid visually with the [table generator](/tools/table-generator/) and paste the result into your document.
