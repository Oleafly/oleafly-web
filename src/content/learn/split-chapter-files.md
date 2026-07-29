---
title: "One root file, many chapters"
description: "include vs input, includeonly, and drafting one chapter at a time."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# One root file, many chapters

A thesis in a single `.tex` file becomes miserable to work in somewhere around the second chapter: scrolling replaces thinking, and every compile processes everything. The standard cure is one root file that holds the class and preamble, with each chapter in its own file. The root file stitches them together.

## The root file

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` is the only file you ever compile. Each `\include` names another file without its `.tex` extension, using forward slashes on every platform, and pulls its contents in at that point. The chapter files themselves contain only content, typically starting with `\chapter{...}`. They have no `\documentclass` and no `document` environment of their own, because they are fragments of this document, not documents.

## include versus input

The two inclusion commands behave differently, and the differences decide which to use where. `\include` starts a new page before the material, which suits chapters, and writes a separate `.aux` file for each included file, which is what makes selective compilation possible. `\input` is a plain textual paste: no page break, no separate `.aux`, and it can be nested inside another input. That makes `\input` the right tool for fragments smaller than a chapter, such as a large table kept in its own file or a shared [macros file](/learn/custom-commands/). One structural rule to remember is that `\include` cannot be nested inside an included file, while `\input` can be used anywhere.

## Drafting one chapter at a time

```latex
\includeonly{chapters/methods}
```

Placed in the preamble, `\includeonly` tells LaTeX to process only the listed files while still reading the saved `.aux` data of all the others. The compile gets dramatically faster, and because the other chapters' labels and page counts are replayed from their `.aux` files, cross-references and numbering in the chapter you are drafting stay correct. That second half is the reason to prefer this over commenting out `\include` lines, which forgets the other chapters entirely and turns every `\ref` into them into `??`.

Comment the `\includeonly` line out for full builds, and always run a complete compile before sharing a PDF, since stale `.aux` data can lag behind edits made in excluded chapters. For which files in the resulting folder are yours and which are generated, see [the files in a real project](/learn/latex-file-types/).
