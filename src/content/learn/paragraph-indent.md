---
title: "Indent or space between paragraphs"
description: "parindent, parskip, noindent for a single line."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Indent or space between paragraphs

Typography has two standard ways to show where one paragraph ends and the next begins: indent the first line of each new paragraph, or leave vertical space between paragraphs with no indent. Books and journals almost always use the first. Web pages and business documents use the second. LaTeX defaults to the book convention, indenting every paragraph except the first one after a section heading, with no extra space between paragraphs. If you want the other style, you change two lengths.

## The two lengths that control everything

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` is the width of the first-line indent. Setting it to `0pt` with `\setlength` removes indentation everywhere. `\parskip` is the vertical space inserted between paragraphs, normally zero (plus a little stretch); setting it to `0.8em` gives a visible gap, a bit less than a full blank line. The `em` unit scales with the font size, which keeps the spacing proportional if you later change the [font size](/learn/font-size/). Put both lines in the preamble and the whole document follows the block style.

If you go this route, be aware that a bare `\parskip` change also stretches the space around section headings, list items, and the table of contents, because those are built from paragraphs too. For anything longer than a short note, loading the `parskip` package instead (`\usepackage{parskip}`) applies the same style while patching those side effects for you.

## Suppressing a single indent

Single paragraph: put `\noindent` at the very start of it, before the first word. This suppresses the indent for that one paragraph only and is handy after a displayed equation, a code listing, or a table when the following text is a continuation of the same thought rather than a new paragraph. The reverse situation, forcing an indent where LaTeX omits one (such as the first paragraph after a heading), is handled by the small `indentfirst` package rather than a manual fix.

While we are here: a new paragraph in LaTeX is created by a blank line in the source, not by `\\`. The `\\` command is a line break inside the same paragraph, and using it to fake paragraph spacing produces underfull warnings and uneven gaps. The [paragraphs and newlines lesson](/learn/paragraphs-newlines/) covers this distinction in full.

## Pick one style and hold it

Pick indent **or** parskip style and stay consistent. The two conventions are alternatives, not layers: indented paragraphs with big gaps between them look like a draft, and zero indent with zero space leaves the reader unable to see where paragraphs start at all. If you are writing for a journal or conference, do not change either length; the class file already implements the publisher's choice, and your override will be the first thing the layout editor reverts.
