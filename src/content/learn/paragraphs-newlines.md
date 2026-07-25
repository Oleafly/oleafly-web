---
title: "Paragraphs, breaks, and empty space"
description: "Blank lines, forced breaks, vspace, and the spacing commands that are worth knowing."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Paragraphs, breaks, and empty space

In a word processor you shape paragraphs by pressing Enter and eyeballing the gaps. LaTeX works differently: the source text describes structure, and the compiler decides the spacing. Understanding how LaTeX decides where a paragraph starts, and how to override it when you genuinely need to, saves you from the most common formatting fights beginners have with it.

## How paragraphs work

A blank line in your source starts a new paragraph. That is the whole rule. One blank line or five, it makes no difference; LaTeX collapses them into a single paragraph break. Likewise, a single line break inside your source is treated as an ordinary space, so you can wrap your source text at whatever width you like and reflow it freely without changing the output at all.

The command `\par` means exactly the same thing as a blank line. You will rarely type it yourself, but you will see it inside macros and class files, where a literal blank line is awkward to write.

`\\` is something else entirely: it forces a line break inside the current paragraph, without starting a new one. The new line gets no paragraph indent and no extra vertical space. It exists for places where line breaks are content, such as addresses, poetry, and rows of a table. Using it to end ordinary paragraphs is the classic beginner mistake, because it produces a paragraph that never really ended, and LaTeX may complain with "There's no line here to end" when two of them stack up.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Adding vertical space

Sometimes you want a deliberate gap, for example before a signature block or between logical parts of a title page.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` inserts exactly the vertical space you ask for, in any unit LaTeX knows (`em`, `pt`, `cm`, and so on). The three skip commands are preset amounts: `\smallskip`, `\medskip`, and `\bigskip` insert small, medium, and large gaps whose sizes are defined by your document class, which keeps them consistent across the document. Prefer the skips over hand-tuned `\vspace` values, because they adapt if you change the class or font size.

One useful detail: a `\vspace` at the top of a page is silently dropped, since LaTeX assumes stretchy space at page boundaries is unintentional. If you truly need it kept, use `\vspace*{1em}` with the star.

## Space between all paragraphs

Do not spam `\\` to make space between paragraphs. If you want every paragraph separated by a gap instead of marked by an indent, that is a document-wide design decision: set it once in the preamble with the `parskip` package, or reconsider whether headings and structure would communicate the separation better. See [paragraph indentation](/learn/paragraph-indent/) for the other half of this trade-off.
