---
title: "The abstract block"
description: "abstract environment placement for article and journal classes."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# The abstract block

The abstract is the short summary that sits between your title and your first section, and nearly every venue requires one. LaTeX gives it a dedicated environment rather than leaving you to fake it with a bold heading, because the class needs to know which text is the abstract: journal classes typeset it in a distinct style, often smaller and indented, and submission systems sometimes extract it automatically.

## The environment

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Everything between `\begin{abstract}` and `\end{abstract}` becomes the abstract block. In the standard `article` class it appears as a narrowed, centered-heading paragraph under the title. You write plain prose inside it, and you can use inline math, but avoid anything heavyweight: no citations if the venue forbids them, no footnotes, no undefined acronyms, because abstracts are frequently displayed on their own, away from the rest of the paper, in databases and search results.

## Where it goes

Place after `\maketitle` (or as required by the journal class). The usual order at the top of an article is `\maketitle`, then the abstract, then `\section{Introduction}`. The environment must come after `\begin{document}`, since it produces output; putting it in the preamble is a compile error.

Journal and conference classes often change this contract, and their templates win over the default. Some classes, including several ACM and IEEE variants, want the abstract declared before `\maketitle` so they can place it inside their own title layout. Others replace the environment entirely with a command like `\abstract{...}`. The rule of thumb is simple: if you are writing in a venue's template, put the abstract wherever the template's example file puts it and do not fight the class. The [title blocks lesson](/learn/title-page/) covers the `\maketitle` machinery this hangs off.

## Classes without an abstract

The `book` class defines no abstract environment at all, on the theory that books have prefaces instead. If you need one in a report-style thesis, the `report` class does support it, or you can typeset a centered unnumbered heading followed by a normal paragraph, which is all the environment really does.

One common mistake: leaving a blank line between `\maketitle` and the abstract is fine, but leaving the abstract empty is not a compile error, so a forgotten placeholder like "TODO" ships to reviewers more often than anyone admits. Compile, look at the first page of the PDF, and read the abstract there at least once before submitting. For advice on what the abstract should actually say, as opposed to where it goes, see [how to write an abstract](/learn/write-an-abstract/).
