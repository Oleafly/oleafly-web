---
title: "Humanities and long-form: biblatex, footnotes, and chapter books"
description: "For history, literature, philosophy, and classics students who need footnotes, flexible citations, and multi-chapter projects."
date: 2026-07-05
tags: [humanities, biblatex, thesis]
---

Humanities manuscripts care about citation shape as much as argument. A
numeric IEEE style is wrong here. Footnotes, author-title, and archival
sources are the norm.

## Prefer biblatex for flexibility

`biblatex` handles footnotes, verbose styles, and shorthand better than
classic BibTeX for most humanities workflows:

```latex
\usepackage[backend=biber,style=verbose-ibid]{biblatex}
\addbibresource{sources.bib}
```

Styles vary by field and publisher; match the department handbook first.
Background: [BibTeX or biblatex](/learn/bibtex-vs-biblatex/).

## Archival and web sources

Letters, manuscripts, and websites need fields that journal `@article`
entries do not care about. Use `@unpublished`, `@misc`, or biblatex's
`@online` with access dates. Incomplete entries fail quietly until the
bibliography looks sparse.

## Chapters and critical editions

Book-length projects want `book` or a university thesis class with
`\include` per chapter. Cross-references to other chapters should use
`\ref` / `\cref`, not hard-coded "see Chapter 4" strings that rot when you
reorder.

## Quotation and language

Use proper quotation marks for the language of the paper (`csquotes` helps).
For multi-language projects, XeLaTeX or LuaLaTeX with `fontspec` and a
language package is less painful than stacking 1990s inputenc hacks.

## Local ownership of years of notes

A dissertation is a multi-year file tree. Keeping it only in a browser
project tied to one account is a risk when students change institutions.
Plain folders plus Git, compiled locally, age better. That is the problem
local-first tools are built for.
