---
title: "Engineering students: IEEE and ACM templates without the weekend of pain"
description: "How to start from the real class file, not a random Overleaf clone, and what usually breaks in two-column camera-ready."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

IEEE and ACM templates are not optional decoration. They are the submission
format. Starting from a random zip someone re-uploaded three years ago is how
you spend the night before the deadline renaming fonts.

## Start from the official class

Download the class and example from the society or the conference site. Put
the `.cls` and example `.tex` in your project root. Compile once before you
write a single original sentence so you know the environment works.

Oleafly's [template gallery](/templates/) and the free app install packs that
track common venues; still verify against the call for papers for that year.

## Two-column float rules

In two-column mode, wide figures use `figure*` and often only appear at the
top of a page. Place the float near the first reference and keep widths at
`\columnwidth` or `\textwidth` intentionally. Side-by-side subfigures need
careful widths or they overflow into the margin.

## Equations in narrow columns

Long derivations break in `\columnwidth`. Use `multline` or `split`, or move
the derivation to an appendix. Do not shrink the equation font until the
line is unreadable; reviewers notice.

## References

IEEE numeric styles and ACM styles disagree on details. Use the bibliography
style the template ships with. Do not invent a hybrid. Validate the `.bib`
with the [BibTeX validator](/tools/bibtex-validator/) for missing fields
before camera-ready.

## Version control is part of the lab report now

Senior design and conference papers both benefit from Git commits after each
successful compile. Local-first editors keep the repo next to the PDF preview
so you are not copying zip files named `submission_really_final.zip`.
