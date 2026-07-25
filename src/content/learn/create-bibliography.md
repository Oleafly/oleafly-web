---
title: "Build a .bib that lasts"
description: "Entry types, required fields, stable keys."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Build a .bib that lasts

A `.bib` file is a small plain-text database of everything you might cite. Each entry has a type, a key, and a set of fields, and the same file can serve every paper you write for years. A little discipline now, in how you choose types, fill fields, and name keys, saves real pain later when a journal style suddenly demands a field you never recorded.

## Anatomy of an entry

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

The word after `@` is the entry type, which tells the style what kind of work this is and therefore which fields to expect. `knuth84` is the citation key, the handle you type inside `\cite{...}`. Everything else is a field. The `author` field uses the `Last, First` form so the style can reliably abbreviate and sort names, and `pages` uses a double hyphen, which LaTeX typesets as a page-range dash.

## The entry types you actually need

Six types cover almost all academic writing. Use `@article` for journal papers, `@inproceedings` for conference and workshop papers, `@book` for books, `@phdthesis` for dissertations, `@techreport` for institutional reports and many preprints, and `@misc` for anything else, including software and websites. Choosing the right type matters because styles format each one differently: an `@inproceedings` entry wants a `booktitle` (the conference name), while an `@article` wants a `journal`.

## Required fields, and why validators complain

Each type has required fields, and a missing one is the most common reason a bibliography entry comes out mangled or triggers a backend warning. For `@article` the essentials are `author`, `title`, `journal`, and `year`; for `@inproceedings`, `author`, `title`, `booktitle`, and `year`. Missing `year` or `author` is the classic failure, because author-year styles literally cannot construct a citation label without them. Optional fields like `volume`, `pages`, `doi`, and `publisher` make entries more useful, so record them while the source is in front of you. You can check a whole file at once with the [BibTeX validator](/tools/bibtex-validator/).

## Keys that survive a decade

Citation keys are forever: every `\cite{knuth84}` in every draft, note, and slide deck refers to that exact string, so renaming a key means hunting down every use. Pick a convention such as `authorYEAR` or `authorYEARkeyword`, apply it from day one, and never "clean up" keys in an established database. If you manage references in Zotero, the Better BibTeX plugin can generate and pin stable keys for you; see [Zotero into a .bib file](/learn/zotero-latex/). For wiring the file into a document, start with [From .bib key to in-text cite](/learn/add-citations/).
