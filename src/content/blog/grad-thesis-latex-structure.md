---
title: "Structure a graduate thesis in LaTeX before the panic sets in"
description: "Front matter, chapter includes, acronyms, and committee templates: a checklist for Master's and PhD students."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

The thesis is a long paper with bureaucracy attached. LaTeX handles the long
paper well. The bureaucracy is usually a university class file written in
2009 and last tested on a different TeX live.

## Accept the class file, fence the rest

Put the university `.cls` in the project. Do not rewrite it. Put your macros,
packages, and chapter content in files you control. If the class breaks on a
modern engine, triage with
[university class files that will not compile](/learn/fix-broken-template/).

## Front matter that committees expect

Roman page numbers for abstract, dedication, acknowledgments, TOC; arabic for
the main chapters. Book/report classes expose `\frontmatter` /
`\mainmatter`; article-based templates need manual `\pagenumbering`. Guide:
[roman then arabic](/learn/front-matter-page-numbers/).

## Chapters as files

One root, many includes. Own chapters by yourself even if coauthors help on
papers that feed the thesis. Keep figures under `figures/chapter3/` so paths
stay stable when you reorder chapters.

## Acronyms and symbols

Glossaries packages are powerful and fussy. For many theses, a hand-maintained
list of symbols in the front matter is enough. If you need auto-expanding
acronyms, budget a day to learn `glossaries-extra` before the week of
submission.

## Speed

Full thesis compiles get slow. Draft mode for figures, `\includeonly`, and
TikZ externalize buy hours back. Notes:
[shorter wait for the PDF](/learn/speed-up-compilation/).

## Backup is not the same as history

A Dropbox copy is a backup. Git is a story of how the argument changed.
Commit when a chapter compiles. Push to a private GitHub remote. Local tools
that auto-commit on compile (as Oleafly can) make that habit harder to skip.
