---
title: "Footnotes, references, and appendices: who does what"
description: "Where asides, evidence, and overflow material each belong, and who actually reads them."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Footnotes, references, and appendices: who does what

A paper has three places to put material that does not belong in the main flow, and each has a distinct job. Put the right content in the right place and readers stay oriented. Mix them up and your paper reads like a junk drawer.

## Footnotes: the polite aside

A footnote is for something worth saying but not worth interrupting the sentence for: a URL, a clarification, a caveat, a "we thank a reviewer for this observation."

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Use them sparingly. A paper with a footnote per paragraph is a paper arguing with itself. If the content is essential, promote it to the text. If it is citable prior work, it belongs in the references instead. And some venues ban footnotes for URLs in favor of proper citations, so check the template.

## References: the evidence trail

When you "cite" a work, you are pointing at the evidence behind a claim: this fact was established there, this method was introduced by them, this dataset comes from here. The reference list is the complete map of whose shoulders you are standing on, and reviewers absolutely check it, both for missing entries and for claims pinned to citations that do not actually support them.

In LaTeX the mechanics are pleasantly automatic: `\cite{key}` in the text, an entry in your `.bib` file, and the list renders itself.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

The full workflow is in [adding citations](/learn/add-citations/) and [creating a bibliography](/learn/create-bibliography/). Oleafly can fill a `.bib` entry from a DOI lookup, which beats hand-typing author lists.

## Appendix: the overflow room

The appendix holds material that supports the paper but would break its flow: full proofs, extra result tables, hyperparameter grids, prompt templates, dataset documentation. The rule is that the main paper must stand alone. A reader who never opens the appendix should still be convinced; a reader who does open it should find every detail they were promised.

```latex
\appendix
\section{Full proofs}
```

After `\appendix`, sections letter themselves A, B, C automatically.

## Supplementary material: outside the PDF

Supplementary material is everything that cannot live in a PDF at all: code, data, videos, interactive demos. Many venues collect it as a separate upload with its own size limits. Treat it as part of your reproducibility story, and reference it explicitly from the method section so readers know it exists.

## Who actually reads what

| Part | Reviewer behavior |
|---|---|
| Footnotes | Read in passing, forgotten quickly |
| References | Scanned for missing work, especially their own |
| Appendix | Opened when a claim in the paper needs checking |
| Supplementary | Opened by the one reviewer who runs your code |

The practical consequence: never hide anything load-bearing in a footnote or appendix. Reviewers judge the main text, and "the answer was in Appendix F" has never once softened a review. Put your best material where the skim will find it, and let the back matter do what it does best: quietly holding the receipts.
