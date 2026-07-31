---
title: "Economics and social science: regression tables that journals accept"
description: "booktabs, threeparttable, siunitx stars, notes under estimates, biblatex habits, and working-paper versioning for econ, poli-sci, and sociology."
date: 2026-06-26
tags: [economics, social-science, tables]
---

Empirical social science lives and dies by tables. A misaligned decimal or a
missing significance star can burn a revise-and-resubmit cycle that had nothing
to do with your identification strategy. Journals care about readability almost
as much as coefficients.

What follows is for students and RAs who export from Stata or R and then clean
LaTeX by hand.

## booktabs is not optional

Vertical rules and double horizontal lines look like 1990s Word. Use the three
horizontal rules from `booktabs`:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

See [three-rule tables](/learn/booktabs-beautiful/). Export from R
(`modelsummary`, `estout`-style tools, older `stargazer`) or Stata to LaTeX
fragments, then clean the header row yourself. Auto-generated headers are
usually too wide or too cryptic for the final PDF.

## Notes under the table, not random footnotes

`threeparttable` keeps the caption, tabular, and notes the same width:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Put sample size, fixed effects, clustered SE notes, and the significance-star
legend here. Do not hang a footnote off a single cell that only some readers
will notice. Panel labels (A/B) belong in the caption or in midrules with clear
text, not in a figure-style legend that never appears in the PDF.

## Numeric columns and significance stars

`siunitx` column types (`S`) align on the decimal point. That alone makes a
results table look intentional. Stars break pure numeric columns, so you
usually need a custom format or a text-ish column. Common patterns:

Report coefficients and SEs on separate rows (standard in econ), or wrap stars
so alignment still works (`0.012^{***}` with a dedicated column type).

Be consistent across tables: same star thresholds, same SE style, same number
of decimals for the same metric. Reviewers compare Table 2 to Table 3 on
purpose.

A visual first draft is fine. The browser
[table generator](/tools/table-generator/) can sketch structure; the final
table should still go through `booktabs` and your SE notes.

## From regression software to camera-ready

Typical loop looks like this. Freeze the estimation script and seed. Export a
LaTeX fragment or CSV of estimates. Drop it into a table shell with stable
labels (`tab:main`, `tab:robust`). Write the caption so a skimmer knows the
dependent variable, sample, and estimator without reading the notes twice.
Compile, then fix overfull boxes by cutting columns; rotate only as a last
resort.

If a table is longer than a page, switch to `longtable` (or split panels)
before deadline week, not after the journal complains about 7pt fonts.

## Citations: author-year is the dialect

Most econ and poli-sci venues expect author-year. `biblatex` with
`style=authoryear` (or the journal's style) is easier long-term than fighting
`.bst` files. If the lab still uses `natbib`, that is fine; just do not mix
both stacks in one preamble. Overview:
[BibTeX or biblatex](/learn/bibtex-vs-biblatex/).

Keys should be stable (`author:year:keyword`). Re-exporting from Zotero under
new keys mid-project is how `\cite` breaks the week of submission. Validate
the `.bib` for missing years and journals:
[BibTeX validator](/tools/bibtex-validator/).

## Working papers and SSRN

Working-paper versions change monthly. Keep the title-page date in a macro:

```latex
\newcommand{\paperdate}{June 2026}
```

Bump it when you re-export the PDF. Local Git history is more honest than
`final_final_v7.pdf` on a shared drive. Commit when the main table set
compiles; tag or message the submission version explicitly.

A research editor that treats the project as a real Git repo (checkpoints
after compile, restore, optional private GitHub) matches how empirical work
already versions code. The paper and the estimation scripts should not live
under different backup habits.

## Identification and table ethics (short version)

LaTeX cannot fix a weak design, but it can make a strong one readable.
State the estimator and sample in the caption. Do not hide the fact that
column (3) drops half the sample in a footnote nobody reads. If you show
robustness tables, keep the same dependent-variable order as the main table so
readers can scan.

## Pre-submission checklist

Things that bite people late:

- Three-rule tables; no vertical rules.
- Decimal alignment; consistent stars and SE notes.
- Caption states outcome, sample, estimator.
- Labels stable; text cites `\ref{tab:...}`.
- Bibliography style matches the venue; `.bib` validated.
- Working-paper date and Git commit match what you uploaded.

## Replication packages

More journals want code and data. Keep table-export scripts next to the paper
repo (or linked with a commit hash). When a coefficient changes because the
cleaning script changed, regenerate the LaTeX fragment and recommit both. A
table that cannot be reproduced is a liability even if it looks clean.

## Beamer for seminars

Reuse the same `booktabs` fragments in slides when you can, or export PDF
crops of the tables. Rebuilding numbers by hand into a slide deck is how
seminar slides disagree with the paper.

Get the tables right and the identification strategy gets a fair hearing. Get
them wrong and you spend a round arguing about formatting.
