---
title: "Economics and social science: regression tables that journals accept"
description: "booktabs, threeparttable, notes under estimates, and biblatex habits for econ, poli-sci, and sociology students."
date: 2026-06-26
tags: [economics, social-science, tables]
---

Empirical social science lives and dies by tables. A wrong decimal alignment
or a missing significance star wastes a revise-and-resubmit cycle that had
nothing to do with the identification strategy.

## booktabs is not optional

Vertical rules and double horizontal lines read as 1990s Word. Use:

```latex
\usepackage{booktabs}
\toprule ... \midrule ... \bottomrule
```

See [three-rule tables](/learn/booktabs-beautiful/). Export from R (`modelsummary`,
`stargazer`) or Stata to LaTeX fragments, then clean the header row by hand.

## Notes under the table

`threeparttable` keeps the caption, tabular, and tablenotes the same width.
Put sample size, fixed effects, and clustered standard-error notes there, not
in a footnote attached to a random cell.

## Numeric columns

`siunitx` column types (`S`) align on the decimal point. That alone makes a
results table look intentional. Watch for stars: significance markers often
need a custom column or a text wrap so `0.012^{***}` still aligns.

## Citations: author-year is the default dialect

Most econ and poli-sci venues expect author-year. `biblatex` with
`style=authoryear` or a journal style is easier long-term than fighting
`.bst` files. If the lab still uses `natbib`, that is fine: just do not mix
both stacks in one preamble. Overview:
[BibTeX or biblatex](/learn/bibtex-vs-biblatex/).

## Working papers and SSRN

Working-paper versions change monthly. Keep the title page date in a macro
(`\def\paperdate{June 2026}`) and bump it when you re-export the PDF. Local
Git history is more honest than "final_final_v7.pdf" on a shared drive.
