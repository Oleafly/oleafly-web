---
title: "Why you compile more than once"
description: "Aux files, bibliography passes, and why references print ?? on the first run."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Why you compile more than once

Sooner or later you will compile a document, open the PDF, and find `??` where a figure number or citation should be. Nothing is broken. You have just met one of LaTeX's oldest design decisions: a single compile is one pass over your file, and some information genuinely cannot be known in one pass.

Here is the problem in miniature. On page 2 you write "see Figure \ref{fig:results}", but that figure lands on page 7. When the engine typesets page 2, it has not reached page 7 yet, so it has no idea what number the figure will get. The same applies to the table of contents, which needs the page number of every section before page one is even finished.

## How the engine solves it

A LaTeX engine reads your `.tex` file, resolves every macro, and writes a PDF. Alongside the PDF it also writes small helper files: `.aux` for labels and citations, `.toc` for the table of contents, `.bbl` for the formatted bibliography. These files are notes the engine leaves for its future self.

1. On the first pass, the engine typesets your text and writes every `\label` and `\cite` it encounters into the `.aux` file, printing `??` wherever it needs a number it does not yet know.
2. If you cite anything, a bibliography tool (bibtex or biber) then reads the `.aux` file, looks up each citation in your `.bib` database, and writes the formatted reference list into a `.bbl` file.
3. On the second and sometimes third pass, the engine reads those helper files back in, so cross-references, table of contents entries, and citation labels finally resolve to real numbers.

Modern setups run these passes for you automatically, so in practice you rarely type the commands yourself. But knowing the cycle explains the symptom: a fresh `??` after adding a label or citation just means the helper files have not caught up yet, and one more compile fixes it.

## Engines in one line each

Several programs can play the role of "the engine". pdfLaTeX is the classic choice with the widest journal support. XeLaTeX adds full Unicode and lets you use fonts installed on your system. LuaLaTeX also speaks Unicode and embeds a scripting language for advanced packages. Tectonic is a modern engine that downloads packages on demand the first time you need them, which is the engine Oleafly bundles so a new project compiles without installing a TeX distribution first.

For most documents the differences barely matter; pick whatever your template or venue expects and move on. See [engines compared](/learn/engines-compared/) when you need to choose deliberately.

## When something actually fails

A failed compile dumps a long log, and the natural instinct is to read it bottom-up. Resist that. Read the first error in the log and fix only that; later errors are very often cascading noise caused by the first one. If references still print `??` after two consecutive successful compiles, the usual culprit is a typo in the `\label` or `\ref` name rather than a missing pass.
