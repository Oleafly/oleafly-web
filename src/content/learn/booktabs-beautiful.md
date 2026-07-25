---
title: "Three-rule tables"
description: "toprule, midrule, bottomrule, and skipping vertical lines."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Three-rule tables

Open any well-typeset journal and look at the tables. Almost all of them follow the same design: a rule at the top, a rule under the header, a rule at the bottom, and nothing else. No vertical lines, no grid. This is the `booktabs` style, named after the package that implements it, and adopting it is the single largest visual upgrade available for LaTeX tables. The package provides three commands that map directly onto the three rules:

```latex
\toprule
...
\midrule
...
\bottomrule
```

In a complete table they look like this:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## What the rules replace

Without `booktabs`, people draw lines with `\hline` and vertical bars in the column specification, as in `{|l|c|c|}`. The result is a cage: every cell boxed in, with the text cramped against the rules because `\hline` adds no breathing room. The `booktabs` commands replace `\hline` with rules that carry built-in vertical padding, and `\toprule` and `\bottomrule` are slightly heavier than `\midrule`, so the table has a visible frame and a lighter interior division. That spacing and weight difference is the entire trick. The data has room, the header is clearly separated, and nothing competes with the numbers.

Vertical rules are simply omitted. Column alignment already shows the reader where one column ends and the next begins, and decades of typographic practice hold that vertical lines add ink without adding clarity. The `booktabs` documentation goes as far as refusing to support them.

## Partial rules for grouped headers

When a header spans several columns, for example "Scores" sitting above accuracy and F1, use `\cmidrule` to underline only those columns:

```latex
\cmidrule(lr){2-3}
```

The `{2-3}` range says which columns the rule covers, and the `(lr)` option trims a little off the left and right ends so neighboring rules do not merge into one long line. This pairs with `\multicolumn`, shown in [cells that span rows or columns](/learn/merged-cells/).

## Numbers and alignment

A table of measurements reads best when the decimal points line up. The `siunitx` package provides an `S` column type that aligns numbers on the decimal marker automatically, so `0.9` and `0.88` sit correctly under each other even with different digit counts. It is worth adopting once your tables carry real data.

The common mistake is mixing systems: an `\hline` here, a `\midrule` there, and one column spec with bars left over from a template. Pick the three-rule style and apply it to every table in the document, since consistency is most of what makes the style look deliberate. A full walkthrough of the surrounding `table` float is in [a table that looks like a paper table](/learn/create-table/).
