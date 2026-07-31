---
title: "Chemistry papers in LaTeX: formulas, schemes, and SI units"
description: "Reactions with mhchem, structures, experimental tables, SI units, bibliographies, and private drafts for chemistry and chemical-engineering students."
date: 2026-06-22
tags: [chemistry, research]
---

Chemists usually show up in LaTeX for one of two reasons: the journal insists,
or a collaborator already works that way. Either way the pain points look
familiar: reaction schemes, isotope labels, condition tables, and a
bibliography stuffed with journals and patents.

This guide covers undergrad reports through first journal submissions. It will
not replace ChemDraw for complex natural products. It will keep the manuscript
and the experimental section from fighting the compiler.

## Reactions with mhchem

`mhchem` is the usual answer for formulas and reactions:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Pin version 4 so syntax does not drift between coauthors, or between Overleaf
and a local TeX install. Longer walkthrough:
[chemical formulas](/learn/chemistry-notation/).

Multi-step schemes with reagents above and below the arrow need more than
inline `\ce`. mhchem handles the formulas; layout often wants a journal scheme
environment or an external figure. Do not cram a twenty-step total synthesis
into a run of inline chemistry lines.

## Structures: chemfig or external drawings

`chemfig` draws simple structures in pure TeX and keeps everything
vector-local. Complex natural products are almost always better as ChemDraw,
Marvin, or similar, exported to PDF, then `\includegraphics`. Prefer vector PDF
over a screenshot PNG so bond lines stay sharp in print and in two-column
layout.

Name files by compound ID (`cmpd-12.pdf`). Keep the editable ChemDraw source
in the lab archive even if git only holds the PDF that goes in the paper.

## Experimental sections and long tables

Condition tables (temperature, solvent, yield, catalyst loading) work well
with `booktabs` and often `siunitx` for numeric columns:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

If a table runs longer than a page, switch to `longtable` before deadline
week, not after the journal complains about 7pt fonts. The caption should say
what "yield" means (isolated, NMR, GC) so readers are not guessing.

## Units and spectroscopy snippets

Pick a unit style and stick to it: `siunitx`, or manual `\mathrm` if the group
already agreed on that. NMR and HRMS snippets in experimental sections are
often plain text with careful spacing. Do not invent a fragile macro language
mid-paper unless the lab already shares one.

Report significant figures the way the notebook does. LaTeX will happily print
false precision if you type it in.

## Schemes vs figures

Many chemistry journals distinguish schemes (reactions) from figures (plots,
ORTEP, spectra). Use the environments the journal class ships (`scheme`,
`figure`) so numbering matches production. Cross-ref with `\ref` and stable
labels (`sch:reduction`, `fig:ortep-1`).

## Safety of the draft

Unpublished routes and industrial partners turn cloud-only editors into a
policy question, not only a convenience question. Keeping `.tex` and figures
as ordinary files on disk with Git is boring in a useful way.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) is a local
research editor: bundled compilers, project-wide ref and cite checks, offline
spell and grammar on prose only (so `\ce` and cite keys are not flagged as
"typos"), real Git checkpoints, optional AI that only edits through approval
diffs. No account. The draft does not need a third-party editor to exist.
Network is for packages, citation lookup, or AI if you turn those on.

## Cite the right primary literature

Chemistry bibliographies lean hard on journals and patents. Export from Zotero
or EndNote into a `.bib` with stable keys, then validate missing fields before
submission: [BibTeX validator](/tools/bibtex-validator/). Empty bibliographies
are almost always a path or backend mistake, not missing citations.

Journal styles differ (ACS, RSC, Springer). Use the bibliography style the
template ships with. Do not glue numeric and author-year together in one
preamble.

## Collaboration

Own sections by person when you can. One person owns the `.bib`. Agree on
mhchem version and structure-export format up front. When several experimental
sections grow in parallel, compile the full PDF every week so integration
surprises show up early.

## Pre-submission checklist

Worth a final pass:

- mhchem version pinned; formulas compile without warnings you have been
  ignoring.
- Structures are vector where possible; compound IDs match across text, schemes,
  and SI.
- Tables use three-rule style; units consistent; yields defined in the caption
  or notes.
- Scheme/figure numbering matches the journal class.
- `.bib` validated; style matches the template.
- Sensitive routes stay in a local folder with access control that matches lab
  policy.

## SI and journal checklists

Many chemistry journals publish author checklists (graphics resolution, TOC
graphic size, compound characterization). Skim that PDF before you draw
schemes. A wrong TOC graphic aspect ratio is a dumb reason for an admin
rejection.

## Supporting information

SI often has its own template or heading rules. Keep SI sources in the same
repo as the main paper with clear filenames. When the journal requires full
characterization, check that every compound number in the main text actually
shows up in the SI.

Chemistry formatting is fussy because the objects are dense. Get the reactions
and tables right and the experimental section reads like careful work, not a
paste from a notebook PDF.
