---
title: "Structure a graduate thesis in LaTeX before the panic sets in"
description: "Front matter, chapter includes, acronyms, university class files, compile speed, and Git history for Master's and PhD students."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

The thesis is a long paper with bureaucracy attached. LaTeX handles the long
paper well. The bureaucracy is usually a university class file written in 2009
and last tested on a different TeX Live.

Start structure early, even if chapters are still empty. Moving content between
files in the final month is how cross-references and figure paths break.

## Accept the class file, fence the rest

Put the university `.cls` (and required `.bst` / logo files) in the project.
Do not rewrite the class. Put your macros, packages, and chapter content in
files you control:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

If the class breaks on a modern engine, triage with
[university class files that will not compile](/learn/fix-broken-template/).
Document which engine the thesis office accepts (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) before you invest in `fontspec`.

## Front matter that committees expect

Roman page numbers for abstract, dedication, acknowledgments, TOC, lists of
figures/tables; arabic for the main chapters. Book/report classes expose
`\frontmatter` / `\mainmatter`; article-based templates need manual
`\pagenumbering`. Guide:
[roman then arabic](/learn/front-matter-page-numbers/).

Title page content often must match a Word specimen from the graduate school.
Copy the wording exactly. Creativity here gets the PDF rejected by a
checklist.

## Chapters as files

One root, many includes:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Own chapters yourself even when coauthors help on papers that feed the thesis.
Keep figures under `figures/chapter3/` so paths stay stable when you reorder.
Use `\includeonly{chapters/methods}` while drafting so full-thesis compiles
are not the cost of every equation edit:
[split chapter files](/learn/split-chapter-files/).

Labels should be unique across the project (`eq:ch3-main`, not `eq:main` in
every file). Project-wide structure views and live ref checking help on a
200-page tree.

## Acronyms and symbols

Glossaries packages are powerful and fussy. For many theses, a hand-maintained
list of symbols in the front matter is enough. If you need auto-expanding
acronyms, budget a day to learn `glossaries-extra` before the week of
submission, not during it.

Define math macros in `macros.tex` and treat that file as shared law. Notation
that drifts between chapter 2 and chapter 5 is a gift to a pedantic examiner.

## Bibliography

One `.bib` for the whole thesis, or a small set merged carefully. Stable keys.
Validate before soft-bound:
[BibTeX validator](/tools/bibtex-validator/). Match the style the department
wants (numeric, author-year, footnote-heavy humanities styles). Do not mix
biblatex and classic BibTeX stacks in one preamble.

## Speed

Full thesis compiles get slow. Draft mode for figures, `\includeonly`, and
TikZ externalize buy hours back. Notes:
[shorter wait for the PDF](/learn/speed-up-compilation/).

Keep a "full compile" ritual weekly so you still see cross-chapter failures
early.

## Backup is not the same as history

A Dropbox copy is a backup. Git is a story of how the argument changed.
Commit when a chapter compiles. Push to a private GitHub or GitLab remote.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) initializes a
real repo per project, checkpoints after successful compiles and idle edits,
and restores in one click, next to project-wide structure views and SyncTeX
that still work across chapter files. That makes the habit harder to skip.
You can get the same discipline with any editor and careful Git; the thesis
should not depend on remembering to `git init` in month eighteen.

## Committee feedback loops

Export PDF for readers who will not open source. Track comments in issues or
a shared doc, but apply edits in TeX. When a committee member returns a
scanned markup PDF, name the file with date and version so you know which
source commit it referred to.

## Soft-bound and hard-bound checklist

Before you print or deposit:

- Class file and engine match thesis office rules.
- Front matter page numbering correct; signatures page present if required.
- All `\ref`/`\cite` resolve; no `[?]`.
- Figures and tables listed if required; captions consistent.
- Margins and font size pass the checklist PDF (print a test page).
- Source + PDF + commit hash archived after deposit.

## Figures, tables, and "list of" pages

Many thesis offices require a list of figures and tables. Captions must be
consistent and not dump the whole methods section into a 20-line caption. Use
short titles for the lists and longer explanatory captions in the body if the
class supports optional short captions.

## Plagiarism and prior publications

If chapters remix published papers, follow the university rules on inclusion
and coauthor permission. Keep each prior paper's accepted PDF and the thesis
chapter in version control with a note on what changed (notation, extended
experiments, unified introduction).

## Start this month, not the month you write

Create the skeleton when you propose the outline. Empty chapters that compile
count as progress. Most late-stage panic is structure debt plus a stubborn
class file, not a gap in the science. Pay that debt early.
