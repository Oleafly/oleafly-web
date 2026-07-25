---
title: "The files in a real project"
description: ".tex, .bib, .cls, .sty, and the generated junk you should not commit."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-24
---

# The files in a real project

| Extension | Role | Edit by hand? |
| --- | --- | --- |
| `.tex` | Source documents and chapters | Yes |
| `.bib` | Bibliography database | Yes (or export from Zotero) |
| `.cls` | Document class | Rarely, vendor templates |
| `.sty` | Packages / style files | When writing your own macros |
| `.bst` | BibTeX style | Rarely |
| `.aux` | Cross-ref data | **No:** generated |
| `.log` | Compiler log | Read when debugging |
| `.pdf` | Output | View / submit |

## Project layout that scales

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Keep generated junk (`*.aux`, `*.log`) out of Git. Oleafly projects are normal folders.
