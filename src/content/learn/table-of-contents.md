---
title: "TOC, lists of figures, lists of tables"
description: "tableofcontents and why the second pass matters."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# TOC, lists of figures, lists of tables

A table of contents in LaTeX is not something you build or maintain. You drop a single command where you want it, and LaTeX assembles the entries from the headings you have already written. The same goes for the list of figures and the list of tables, which collect captions instead of headings. This is one of the places where declaring structure pays off directly: rename a section or move a figure and the front matter fixes itself.

## The three commands

```latex
\tableofcontents
\listoffigures
\listoftables
```

`\tableofcontents` prints the TOC at the point where it appears, typically right after the title page or abstract. Every numbered `\chapter`, `\section`, and `\subsection` shows up with its number, title, and page, down to the depth set by the `tocdepth` counter described in [the headings lesson](/learn/sections/). `\listoffigures` and `\listoftables` do the same for figure and table captions, pulling the text from each `\caption{...}`. In articles they are unusual, but theses commonly require both, placed on their own pages after the TOC.

## Why the second pass matters

Compile **twice** after structural changes. This is not superstition; it is how the mechanism works. During a compile, LaTeX cannot know on page 2 what will end up on page 47, so it writes every heading and its final page number to an auxiliary file (`.toc`, `.lof`, `.lot`) as it goes. `\tableofcontents` reads the file left over from the previous run. On a fresh project that file does not exist yet, so the first compile produces an empty TOC, and after you add or move sections the TOC shows stale titles or wrong page numbers until the next run. The second compile reads the freshly written file and everything lines up. Editors that run latexmk or an equivalent wrapper handle the reruns for you, which is why you may never have noticed; if your TOC ever looks wrong, compile once more before debugging anything else.

## Starred sections and the TOC

Starred sections need `\addcontentsline{toc}{section}{Title}` if they should appear in the TOC. A starred heading like `\section*{Acknowledgments}` deliberately skips both numbering and the contents file, so if you want it listed you add the entry yourself. The command's three arguments are the file to write to (`toc`), the entry's level (`section`), and the text to display. Put the line immediately after the starred heading so the recorded page number is right.

One habit worth forming: before you share a PDF, glance at the TOC for the telltale signs of a stale build, such as question marks, missing entries, or a last entry that stops short of your final chapter. It is almost always cured by one more compile, and catching it yourself is cheaper than a reviewer catching it. The same auxiliary-file dance powers `\ref` and friends, covered in [cross-references](/learn/cross-references/).
