---
title: "A skeleton you can reuse"
description: "Class, preamble, maketitle, sections, bibliography: the shape of almost every paper."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
---

# A skeleton you can reuse

Strip away the content and almost every LaTeX document has the same skeleton: a class declaration, a preamble of setup, and a body between `\begin{document}` and `\end{document}`. Once this shape is familiar, a new project is never a blank page; you paste the skeleton, change the title, and start writing.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Reading top to bottom: `\documentclass[11pt]{article}` picks the document type and sets the base font size as an option; everything else in the design flows from this choice. The region between the class line and `\begin{document}` is the [preamble](/learn/preamble-explained/), where packages are loaded and metadata like `\title` and `\author` is stored. `\begin{document}` marks where visible content starts, `\maketitle` typesets the stored title block, and the body follows as sections, figures, and eventually a bibliography. `\end{document}` closes the document; anything after it is silently ignored, which occasionally hides a chunk of text someone pasted in the wrong place.

## Class choices

| Class | Use |
| --- | --- |
| `article` | Papers, homework, notes |
| `report` | Longer reports with chapters |
| `book` | Books and many theses |
| `beamer` | Slides |

The class is not cosmetic; it changes which commands exist. `article` has no `\chapter`, so pasting thesis chapters into it fails immediately. `report` adds chapters and gives the title its own page. `book` assumes two-sided printing and opens chapters on right-hand pages. `beamer` restructures everything around frames for slides. Journals and conferences ship their own classes, and when you write for a venue, its class replaces this decision entirely.

Two mistakes account for most broken skeletons. Text placed before `\begin{document}` triggers the error "Missing \begin{document}", because the preamble may only configure, never print. And a missing `\end{document}` leaves the compiler waiting at the end of the file with an unhelpful message about the end of input. When either appears, check the frame of the document before suspecting the content.

The skeleton scales. A four-page note keeps the body inline; a thesis moves each chapter to its own file and pulls them in from the root, as shown in [split chapter files](/learn/split-chapter-files/). The frame around them does not change.
