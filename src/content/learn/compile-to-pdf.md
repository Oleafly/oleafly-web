---
title: "Why you compile more than once"
description: "Aux files, bibliography passes, and why references print ?? on the first run."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-24
---

# Why you compile more than once

A LaTeX **engine** reads your `.tex`, resolves macros, writes a PDF, and often writes helper files (`.aux`, `.toc`, `.bbl`) for the next pass.

## Why multiple passes?

1. **Pass 1:** typeset text; write labels and citation requests to `.aux`.
2. **Bibliography tool** (bibtex/biber), build `.bbl` from `.bib`.
3. **Pass 2-3:** resolve references, TOC page numbers, and citation labels.

That is why figures sometimes show `??` after the first compile.

## Engines in one line

- **pdfLaTeX:** classic, widest journal support.
- **XeLaTeX:** Unicode + system fonts.
- **LuaLaTeX:** Unicode + Lua scripting.
- **Tectonic:** modern engine that fetches packages on demand (what Oleafly bundles).

Read the **first** error in the log; later errors are often cascading noise.
