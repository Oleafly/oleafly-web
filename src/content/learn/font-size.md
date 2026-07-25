---
title: "Bigger and smaller type"
description: "Class options like 11pt, and local size switches that do not wreck line spacing."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Bigger and smaller type

Type size in LaTeX is set at two levels: a document-wide base size chosen once in the class options, and local switches for spans that need to differ. The base size drives everything else, because headings, footnotes, and the local sizes are all defined relative to it.

## Document-wide

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

The class option sets the size of body text. `10pt` is the default, and `11pt` and `12pt` are the common alternatives; the standard classes support only these three. Changing the option rescales the whole document in proportion, since heading sizes, footnote sizes, and line spacing all derive from the base. If you need a base size beyond 12pt, classes such as `extarticle` or the KOMA-Script classes accept a wider range of options.

## Local switches

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

These are declarations rather than commands with arguments: `\large` changes the size from that point until the current group ends, and the braces around `{\large larger}` are what limit its reach. The full ladder, smallest to largest, is `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Each step maps to a concrete size that depends on the class option, so `\large` under `12pt` is bigger than `\large` under `10pt`. Think of the switches as steps away from the body text, not as fixed sizes.

Line spacing has one subtlety. A size switch adjusts the baseline distance only for paragraphs that end while it is active. For a multi-paragraph span at a larger size, keep the paragraph break inside the group by ending with `\par` before the closing brace, as in `{\large ... \par}`. Otherwise the final paragraph keeps normal-size line spacing under oversized letters and the lines collide.

## Sizes versus structure

Resist using size switches to fake headings. `\section` and its relatives set the size for you, and they also number the heading, add it to the table of contents, and create PDF bookmarks; a hand-built `{\Large \textbf{...}}` line gives none of that. The same reasoning applies to emphasis, covered in [emphasis without fighting the font](/learn/bold-italic/). Reserve manual size switches for genuinely local needs, such as a footnote-sized remark under a table or a line on a title page. If every heading in a document needs restyling, change the class or use a package like `titlesec` rather than sizing each heading by hand.
