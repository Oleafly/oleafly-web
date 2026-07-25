---
title: "Chemistry papers in LaTeX: formulas, schemes, and SI units"
description: "How chemistry and chemical-engineering students typeset reactions, structures, and experimental sections without fighting the compiler."
date: 2026-06-22
tags: [chemistry, research]
---

Chemists arrive at LaTeX for one of two reasons: a journal demands it, or a
collaborator already did. Either way, the pain points are predictable:
reaction schemes, isotope labels, and tables of conditions.

## Reactions with mhchem

The `mhchem` package is the default answer for formulas and reactions:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
```

Keep version 4 pinned so syntax does not drift between coauthors. Longer
tutorial: [chemical formulas](/learn/chemistry-notation/).

## Structures: chemfig or external drawings

`chemfig` can draw simple structures in pure TeX. Complex natural products are
usually better as ChemDraw or similar exports to PDF, then
`\includegraphics`. Prefer vector PDF over screenshot PNG so bond lines stay
sharp in print.

## Experimental sections and long tables

Condition tables (temperature, solvent, yield) want `booktabs` and often
`siunitx` for numeric columns. If a table is longer than a page, switch to
`longtable` before the deadline week, not after the journal complains about
font size.

## Safety of the draft

Unpublished routes and industrial partners make cloud-only editors a policy
question, not only a convenience question. Keeping `.tex` and figures as
ordinary files on disk (with Git) is boring in the good way. Local apps such
as [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) compile
without uploading the manuscript to a third-party editor account.

## Cite the right primary literature

Chemistry bibliographies are heavy on journals and patents. Export from Zotero
or EndNote into a `.bib` with stable keys, then validate missing fields before
submission: [BibTeX validator](/tools/bibtex-validator/). Empty bibliographies
are almost always a path or backend mistake, not a mystery of the field.
