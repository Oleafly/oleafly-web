---
title: "Tables longer than one page"
description: "longtable headers and footers that repeat."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Tables longer than one page

An ordinary `table` environment is a float, and a float must fit on a single page. Give it sixty rows and LaTeX either shoves it onto a float page and lets it overflow, or defers it forever. The fix is the `longtable` package, which typesets a table that breaks across pages and repeats its header on each one, the way a spreadsheet printout does.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## How the header blocks work

A `longtable` begins with up to four declaration blocks before the actual data rows. Everything above `\endfirsthead` is the header printed once, at the very start of the table. Everything between `\endfirsthead` and `\endhead` is the header repeated at the top of every subsequent page, which is why the same "Key & Value" line appears twice in the example. The block ending in `\endfoot` prints at the bottom of every page the table touches, here just a closing `\bottomrule`. There is also `\endlastfoot` for material that should appear only under the final rows, such as a totals line. If you want a continuation hint, a common pattern is `\midrule \multicolumn{2}{r}{continued on next page} \\` in the foot block and the real `\bottomrule` in the last foot.

After the declarations come the data rows, written exactly as in a normal `tabular` with `&` between cells and `\\` at the end of each row. The `booktabs` rules work unchanged. See [three-rule tables](/learn/booktabs-beautiful/) for what they replace.

## Not a float, and what that implies

The most important behavioral difference is stated in one sentence: `longtable` is not a float. It starts exactly where you place it in the source, breaks where the pages break, and takes no `[htbp]` argument. That also changes how captions work. You do not wrap a `longtable` in a `table` environment. Instead, put `\caption{...}\\` inside the table itself, as the first line of the first-head block, and it will be numbered in the same sequence as your other tables.

## Two things to know before you rely on it

First, column widths are decided globally, so LaTeX may need several compile passes before the columns stop shifting. Keep compiling until the layout settles. Second, `longtable` cannot be used inside a two-column layout, which rules it out for most conference templates. In those documents the realistic options are shrinking the table, splitting it into parts, or moving it to a one-column appendix.
