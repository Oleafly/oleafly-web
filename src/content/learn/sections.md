---
title: "Headings that number themselves"
description: "section through paragraph, starred forms, secnumdepth."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Headings that number themselves

In a word processor, you number headings by hand and renumber them by hand every time you move one. LaTeX refuses to let you do that. You declare what each heading is, a section or a subsection or a chapter, and the numbering takes care of itself. Insert a new section in the middle of your document and everything after it renumbers on the next compile, along with every cross-reference and every table of contents entry that points at it.

## The hierarchy

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

These commands form a fixed ladder. `\section` is the everyday workhorse in the `article` class, with `\subsection` and `\subsubsection` nesting beneath it. `\chapter` only exists in the `report` and `book` classes, which is why pasting thesis chapters into an article template fails with an undefined control sequence. `\part` sits above chapters and is rare outside long books. `\paragraph` is the odd one out: it produces a bold run-in heading on the same line as the following text rather than a heading on its own line, which surprises almost everyone the first time.

Each command takes the heading text in braces, prints it in the class's chosen font and size, numbers it, and records it so `\tableofcontents` can find it later. You never style headings inline. If you want different heading fonts, that is a document-wide decision made in the preamble.

## Suppressing numbers

Starred forms suppress numbers: `\section*{Acknowledgments}`. The star also keeps the heading out of the table of contents and out of the numbering sequence entirely, so the section after it continues as if the starred one were not there. This is exactly what you want for acknowledgments, a preface, or a standalone conclusion in a short paper. If a starred section should still appear in the TOC, there is a one-line fix covered in [the TOC lesson](/learn/table-of-contents/).

## Controlling numbering depth

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumdepth` decides how deep numbering goes. In `article`, sections are level 1, subsections level 2, and subsubsections level 3, so setting the counter to 2 numbers sections and subsections but leaves subsubsection headings unnumbered while keeping their formatting. `tocdepth` is the same idea for the table of contents: it controls how deep the TOC listing goes, independently of what gets numbered on the page. Both lines belong in the preamble.

A common mistake is skipping levels, for example jumping from `\section` straight to `\subsubsection` because you like the smaller heading. The numbering still works but produces odd results like "1.0.1", and readers lose track of the structure. Pick heading levels for meaning and let the class handle the appearance. If you are unsure how your document's skeleton fits together, [the document skeleton lesson](/learn/document-skeleton/) walks through it.
