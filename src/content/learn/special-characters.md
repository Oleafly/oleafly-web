---
title: "Characters that break the source"
description: "How to type percent, dollar, ampersand, underscore, braces without breaking the line."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Characters that break the source

LaTeX reserves a handful of everyday characters as syntax, and typing one where you mean the literal character either stops the compile or silently mangles the output. Each reserved character has an escape, and the whole set fits in one small table.

| Char | Code |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\textbackslash` |

## What the characters do unescaped

`%` starts a comment, so everything from it to the end of the line is discarded. That is the usual "my sentence disappeared" bug: write 50% in a report and the rest of the line vanishes with no error at all. `$` toggles math mode, so a stray one silently italicizes text or raises errors far from the typo. `&` is the alignment tab in tables and `align` blocks; outside them it fails with "Misplaced alignment tab". `#` marks macro parameters. `_` and `^` belong to math mode, and in text they raise "Missing $ inserted", which [has its own lesson](/learn/missing-dollar/). `~` is a non-breaking space, so a tilde typed in a URL or path quietly becomes a space. `\` starts every command, which is why it cannot escape itself: `\\` is a line break, and the literal character needs `\textbackslash`.

## Escaping in practice

For the first six characters, the escape is a backslash prefix, and it works the same inside other commands:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Note that the underscore needs its escape even inside `\texttt`. The two command-style escapes, `\textasciitilde` and `\textbackslash`, should be followed by `{}` or a space when a letter comes next, so the command name does not swallow the following word.

For whole chunks of code, paths, or URLs, skip escaping entirely. `\verb|...|` and the `verbatim` environment print their contents exactly as typed, with every special character disarmed, and the `url` package's `\url{...}` handles links complete with tildes.

The characters that bite hardest are the ones that fail silently, and `%` leads that list. Pasted text is the usual source: URLs, shell commands, and financial figures all carry reserved characters. When a sentence goes missing from the PDF, search that line of the source for a bare `%` before anything else.
