---
title: "Humanities and long-form: biblatex, footnotes, and chapter books"
description: "Footnotes, flexible citations, archival sources, multi-chapter structure, and multi-year ownership for history, literature, philosophy, and classics."
date: 2026-07-05
tags: [humanities, biblatex, thesis]
---

Humanities manuscripts care about citation shape as much as argument. A numeric
IEEE style is wrong here; footnotes, author-title, and archival sources are the
norm. LaTeX is worth learning once you have more than a seminar paper and a
handful of books in the bibliography.

This guide is for students stacking thesis chapters or drafting a long article
with real footnotes. If you only need three MLA entries, you can stop early.

## Prefer biblatex for flexibility

`biblatex` handles footnotes, verbose styles, and shorthand better than classic
BibTeX for most humanities workflows:

```latex
\usepackage[backend=biber,style=verbose-ibid]{biblatex}
\addbibresource{sources.bib}
```

Common alternatives include `authortitle`, `verbose`, journal-specific styles,
or whatever your department mandates. Match the handbook first, then pick the
closest biblatex style. Background:
[BibTeX or biblatex](/learn/bibtex-vs-biblatex/).

Run **biber** (or the backend your style needs), not only pdflatex. Empty
bibliographies are almost always a backend or path mistake. Validate entries
before submission: [BibTeX validator](/tools/bibtex-validator/).

## Archival and web sources

Letters, manuscripts, and websites need fields that journal `@article` entries
do not care about:

- `@unpublished` or biblatex `@online` for web sources with `urldate`
- archive location, collection, folio for manuscripts
- stable keys you will still understand in two years

Incomplete entries fail quietly until the bibliography looks sparse. Prefer one
`.bib` (or a small set by project) over copy-pasting footnote text that drifts
out of sync with the works cited.

## Footnotes vs endnotes

Many humanities styles want footnotes. `biblatex` verbose styles and
`\footcite` / automatic footnote citations cover a lot of ground. If the
department wants endnotes, configure that early. Converting three chapters of
footnote citations the week of submission is miserable.

Keep substantive asides short. If a footnote is a full paragraph, ask whether
it belongs in the main text. Readers do skim.

## Chapters and critical editions

Book-length projects want `book`, `memoir`, or a university thesis class with
`\include` per chapter:

```latex
\include{chapters/ch1-intro}
\include{chapters/ch2-archive}
```

Cross-references to other chapters should use `\ref` / `\cref`, not hard-coded
"see Chapter 4" strings that rot when you reorder. Structure views that list
headings across files help on a 200-page draft. So does compiling with
`\includeonly` while you revise one chapter.

Critical editions and parallel text have specialized packages. Do not invent a
layout with raw minipages until you have checked whether a maintained class
already exists for your language.

## Quotation and language

Use proper quotation marks for the language of the paper (`csquotes` helps with
nested quotes and language-aware marks). Block quotes longer than a few lines
should use a quotation environment, not manual indentation that breaks in
two-column layouts or when margins change.

For multi-language projects, XeLaTeX or LuaLaTeX with `fontspec` and a language
package is less painful than stacking 1990s `inputenc` hacks. Pick fonts that
cover the scripts you need before you write chapter three in a font that cannot
render them.

## Images, maps, and fair use notes

Maps and manuscript photos are usually external PDF/PNG includes, not TikZ.
Caption with source and permission status. Keep high-resolution masters outside
the git history if they are huge; commit the compressed figures the paper
actually uses, and put a note in the README about where masters live.

## Local ownership of years of notes

A dissertation is a multi-year file tree. Keeping it only in a browser project
tied to one account is a risk when students change institutions or lose access
after graduation.

Plain folders plus Git, compiled locally, age better.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) is aimed at that
kind of long document. You get structure views across chapters, project-wide
refs and cites, offline spell and grammar on prose (it skips cite keys), and
real Git checkpoints without an account. You can still open the same files in
any other editor. Ownership is the point.

## Workflow that survives a committee

Freeze the citation style against the handbook in year one, and keep one
bibliography database with stable keys. Put chapter files under version control
with a private remote. Front matter (abstract, acknowledgments, TOC) should
follow the university class rules for roman/arabic pages. Compile the full PDF
monthly even if you draft with `\includeonly`, so cross-chapter refs do not
surprise you at the end.

## Pre-submission

- Biber/bibtex run clean; no `[?]` cites.
- Footnote style matches the department.
- Chapter cross-refs updated after reordering.
- Fonts embed; margins match the thesis office checklist.
- Source and PDF both archived, not only the upload portal receipt.

## Indexing and back matter

Book-class projects sometimes need an index (`imakeidx` and friends). Budget
time for a real indexing pass; auto-marking every capitalised word produces
garbage. Appendices for transcriptions should use clear numbering that the main
chapters can `\ref`.

## Committee drafts vs deposit PDF

Numbered line drafts or wide margins can help markup, but the deposit PDF must
match the thesis office specimen. Keep a class option or a separate "draft" flag
so you are not hand-editing margins the morning of deposit.

Get the citation engine right early. The argument deserves the attention more
than a last-week bibliography fight.
