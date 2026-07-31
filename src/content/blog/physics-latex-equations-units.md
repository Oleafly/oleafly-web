---
title: "Physics theses: equations, units, and multi-file sanity"
description: "Notation, siunitx, multi-chapter projects, two-column journal traps, and offline compile habits for physics and astronomy students."
date: 2026-06-20
tags: [physics, thesis, math]
---

Physics manuscripts carry more math per page than most fields. That is fine
until a half-finished chapter breaks the whole compile because one label moved,
or until every coauthor invents a different bold-vector convention.

This is a practical setup for MSc/PhD chapters, collaboration notes, and journal
submissions that still want two columns.

## Multi-file from the start

Even a short thesis benefits from a root file and chapter includes:

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Use `\includeonly{chapters/methods}` while you draft so you are not rebuilding
three chapters to fix one equation. Details:
[one root file, many chapters](/learn/split-chapter-files/).

Keep figures under `figures/ch2/` and name equations with chapter-aware labels
(`eq:ch2-hamiltonian`) so merges do not collide.

## Units are not text

Write `$v = 3.0\,\mathrm{m\,s^{-1}}$` by hand if you must, or load `siunitx`
and use `\qty{3.0}{m.s^{-1}}`. Journals differ on spacing and thin spaces; pick
one package path and stick to it. Mixed styles look like two authors who never
met.

For tables of values, `siunitx` column types align decimals and keep unit
headers consistent. Do not mix `m/s` and `ms^{-1}` in the same paper without a
reason stated in methods.

## Dirac, vectors, and bold conventions

Quantum and condensed-matter groups often need Dirac notation. Packages like
`physics` or dedicated macros for `\ket`, `\bra`, `\braket` beat ad-hoc
combinations of angles. Classical mechanics groups argue about bold vs arrow
vectors. Document the convention in the preamble and refuse ad-hoc exceptions
mid-chapter.

See [Dirac notation](/learn/physics-braket/) and [bold math](/learn/bold-math/).

Define operators once (`\DeclareMathOperator`) so differential operators and
named functions do not drift in font.

## Numbering and cross-references

Number equations you will cite; leave the rest unnumbered. A page of
`(1)(2)(3)...` is harder to read than a short narrative with two tagged lines.
Use `\eqref` for equations and stable labels. Project-wide reference checking
catches a deleted label before the advisor does.

Theorems and lemmas (if you use them) should share a clear numbering scheme with
the rest of the department template. See also
[theorems and proofs](/learn/theorems-proofs/).

## Two-column journal traps

APS, IOP, and similar classes change float behavior. A figure that looked fine
in `article` may refuse to sit beside the paragraph that cites it. Compile
against the real class early, not the weekend before submission.

Defaults that help:

- figure width about `0.45\textwidth` or `\columnwidth` in two-column
- wide figures as `figure*` (often top-of-page only)
- long derivations in `multline` / `split`, or moved to an appendix

Do not shrink equation font until it is unreadable. Reviewers notice.

## Figures: plots and schematics

Export plots as PDF from matplotlib/gnuplot/Root when you can. Raster PNGs are
for photographs and detector images, at enough dpi. Schematics can be TikZ or
external vector art; keep source in the repo. Crop whitespace before
`\includegraphics`.

## Offline when the lab network dies

Beamlines and cleanrooms are not known for stable Wi‑Fi.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) ships the
compilers and keeps SyncTeX, the PDF workspace, and math preview local. Every
project is real Git with automatic checkpoints, so a bad equation edit is one
restore away. The PDF still builds when a browser editor does not load.

You can assemble a similar offline stack with TeX Live, a PDF viewer, and Git by
hand. Either way, the thesis should not depend on a captive portal to recompile
chapter three.

## Collaboration

Own chapters by author when possible. Share a notation sheet. Run full-document
compiles weekly so cross-chapter references fail early. Private Git remote for
unpublished results; public only when the collaboration policy allows.

## Appendices and supplemental material

Long derivations and extra plots belong in an appendix or a separate supplement
PDF when the journal is two-column and page-limited. Cross-reference explicitly
("see Appendix B") with real labels. Do not assume the referee will open a zip
of loose figures with no captions.

## When the advisor edits on paper

Apply markup to the TeX source the same day if you can. Paper stacks go stale.
If two advisors mark conflicting notation, update the preamble sheet and send a
one-page notation PDF so the argument is not re-litigated every draft.

## Pre-submission

Notation sheet complete, vectors and bras/kets consistent, units via one system
(`siunitx` or an agreed manual style). Chapters should include cleanly with
`\ref`/`\eqref` resolving. Compile the real journal or thesis class without font
surprises. Figures meet dpi and color rules; captions stand alone. Archive
source and PDF with a commit hash for the submitted version.

Physics writing is hard enough. The toolchain should stay boring.
