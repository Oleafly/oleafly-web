---
title: "Engineering students: IEEE and ACM templates without the weekend of pain"
description: "Start from the real class file, survive two-column floats and equations, get references right, and version the paper before camera-ready."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

IEEE and ACM templates are not optional decoration. They are the submission
format. Starting from a random zip someone re-uploaded three years ago is how
you spend the night before the deadline renaming fonts and chasing
`undefined control sequence` in a class you never meant to edit.

This is for course projects, senior design papers, and first conference
submissions.

## Start from the official class

Download the class and example from the society or the conference site for
*this year*. Put the `.cls`, any `.bst`, and the example `.tex` in your project
root. Compile once before you write a single original sentence so you know the
environment works.

Oleafly's [template gallery](/templates/) and the free app install packs that
track common venues (IEEE, ACM, and friends), then compile with the bundled
engine and catch broken refs and cites in the project editor before
camera-ready. Still verify against the call for papers for that year: column
count, page limit, and bibliography style change.

If the conference ships a modified class, use theirs, not a generic IEEEtran
from memory.

## Two-column float rules

In two-column mode, wide figures use `figure*` and often only appear at the
top of a page. Place the float near the first reference and set widths to
`\columnwidth` or `\textwidth` on purpose. Side-by-side subfigures need careful
widths or they overflow into the margin.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

If a float flees three pages away, shrink it or split panels before you fight
`[H]` for an hour: [float placement](/learn/figure-wrong-position/).

## Equations in narrow columns

Long derivations break in `\columnwidth`. Use `multline` or `split`, or move
the derivation to an appendix. Do not shrink the equation font until the line
is unreadable; reviewers notice. Number only equations you actually cite.

Algorithms belong in `algorithm` / `algorithmic` environments sized for the
column, not screenshots of an IDE.

## References

IEEE numeric styles and ACM styles disagree on details. Use the bibliography
style the template ships with. Do not invent a hybrid of author-year and
bracket numbers.

Validate the `.bib` for missing fields before camera-ready:
[BibTeX validator](/tools/bibtex-validator/). Scholar exports are messy; clean
keys (`author:year:keyword`) and fix titles that arrived in ALL CAPS.

Cite datasets and software when the venue expects it. A missing DOI is easier
to fix now than in the portal's "update camera-ready" window.

## Page limits without crimes

Page limits are real. Do not crush margins below the template, set
`\scriptsize` for the whole results section, or hide text inside huge figures.
Cut content. Move proofs and extra plots to a supplement or extended arXiv
version if the call allows. Keep the submission readable. Longer checklist:
[page limits without crimes](/learn/page-limits-without-crimes/).

## Version control is part of the lab report now

Senior design and conference papers both benefit from commits after each
successful compile. A research editor like
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) keeps real Git
next to the PDF, SyncTeX, and live diagnostics so you are not shipping zip
files named `submission_really_final.zip`. Private remotes keep unpublished
work off public GitHub until policy allows.

Tag or message the exact commit you uploaded to the portal.

## Team workflows

Own sections by student. One person owns the `.bib` and the class file. Merge
through pull requests if the group is large enough. Compile the full PDF on a
schedule so integration is not only on the night before.

If a teammate only edits Word, export for them and keep TeX as source:
[coauthors who only speak Word](/learn/collaborator-uses-word/).

## Camera-ready week

Camera-ready instructions often differ from the review format, so re-download
them. Update the author block, funding, and IEEE/ACM copyright forms as
required. Recompile with the final class options (often different from
review). Check every figure for dpi and fonts; embed fonts in the PDF if the
portal requires it. Upload the PDF and any source zip the portal demands, then
archive both.

## Author block and affiliations

IEEE/ACM author blocks are finicky: equal contribution marks, multiple
affiliations, thanks to funding agencies. Copy the example file's author
markup and replace text carefully. Inventing your own `\thanks` stack is a
common source of underfull boxes and missing commas in the PDF.

## Blind review

If the call is double-blind, strip names, funding that identifies the lab, and
self-cites that say "in our previous work." Re-enable them for camera-ready.
Keep a `blind` class option or a small toggle file so you do not hand-edit
identity in six places.

## Bottom line

Start from the official class, respect two-column layout, and match the
bibliography style the template ships with. Version everything. The
engineering content is hard enough without a counterfeit template from 2019.
