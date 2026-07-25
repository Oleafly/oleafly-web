---
title: "Cells that span rows or columns"
description: "multicolumn, multirow, cmidrule under grouped headers."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Cells that span rows or columns

Real tables often need merged cells. A header like "Scores" that sits above two metric columns spans columns, and a model name that applies to two result rows spans rows. LaTeX handles the two directions with different tools: `\multicolumn` is built in, while `\multirow` comes from the package of the same name. Here is a compact table that uses both, plus a partial rule from `booktabs`:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Spanning columns

`\multicolumn{2}{c}{Scores}` replaces two ordinary cells with one. The first argument is how many columns to absorb, the second is a column specification for just this cell, here `c` for centered, and the third is the content. Note the lone `&` before it: the first column of that row is deliberately empty, so "Scores" starts in column 2 and covers columns 2 and 3. Because the second argument overrides the column type locally, `\multicolumn{1}{c}{...}` is also the standard trick for centering a single header cell above a left-aligned column.

## The partial rule

`\cmidrule(lr){2-3}` draws a horizontal rule under columns 2 through 3 only, which visually ties the grouped header to its columns. The `(lr)` option trims the rule slightly on its left and right ends, so adjacent `\cmidrule`s do not touch and read as separate group markers. This is a `booktabs` command, and the trimming is one of the details that makes these tables look typeset rather than drawn. The full three-rule style is covered in [three-rule tables](/learn/booktabs-beautiful/).

## Spanning rows

`\multirow{2}{*}{Ours}` prints "Ours" vertically centered across 2 rows. The first argument is the row count, the second is the cell width, where `*` means the natural width of the content, and the third is the content itself. The command only reserves visual space, so the second row must still supply an empty first cell, which is why the following line starts with a bare `&`. Forgetting that empty cell shifts every value in the row one column to the left, and the misalignment error message points at the wrong line, so check the row after a `\multirow` first.

## A practical limit

Merged cells are best kept to headers and short row groups. A table where data cells span in both directions is hard to read and harder to maintain, because every added row forces you to recount the spans. If you find yourself nesting `\multirow` inside `\multicolumn`, consider restructuring the table instead.
