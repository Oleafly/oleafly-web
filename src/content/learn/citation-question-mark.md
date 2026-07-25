---
title: "Clearing mystery citation marks"
description: "Typos, missing passes, wrong path, BibTeX vs Biber mismatch."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-24
---

# Clearing mystery citation marks

1. Key typo: `\cite{knuth84}` vs `@article{knuth1984}`.
2. Not enough compile passes (pdfLaTeX → bibtex → pdfLaTeX ×2).
3. Wrong `\bibliography{...}` path.
4. A biblatex project still running BibTeX instead of Biber.

Grep your `.bib` for the key, run a full cycle, and read the log for missing database entries. The first missing-key warning is the one that matters.
