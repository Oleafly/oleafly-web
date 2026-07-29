---
title: "Roman then arabic pages"
description: "Front matter numbering that committees still expect."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Roman then arabic pages

Open almost any thesis or textbook and you will see the same convention: the title page, abstract, table of contents, and acknowledgements are numbered i, ii, iii in lowercase roman numerals, and then the first real chapter starts over at page 1 in ordinary arabic numbers. The front matter is treated as a separate, preliminary sequence, and graduate schools check for this convention explicitly. In LaTeX it takes exactly two commands.

## The pattern

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` does two things at once: it switches the numeral style to lowercase roman and resets the page counter to 1, so the title page becomes page i. Everything you place after it, typically `\maketitle`, the abstract, the [table of contents](/learn/table-of-contents/), and any lists of figures or tables, gets numbered ii, iii, iv, and so on.

Then, immediately before the first chapter, `\pagenumbering{arabic}` switches the style back and resets the counter again, so `\chapter{Introduction}` opens on a fresh page 1. The reset is the whole point: without it your introduction would start on something like page 7, which is not what committees or citation conventions expect.

Because `\chapter` in the `book` and `report` classes always starts a new page, you do not need an explicit `\newpage` before the switch. In a class without chapters you would add `\clearpage` first so the numbering change does not land mid-page.

## Classes that do it for you

Some thesis classes provide `\frontmatter` / `\mainmatter` / `\backmatter`. These come from the `book` class and are the higher-level way to say the same thing. `\frontmatter` switches to roman numbering and makes chapters unnumbered (so a Preface gets no "Chapter 1" label). `\mainmatter` switches to arabic and restores numbered chapters. `\backmatter` turns chapter numbering off again for appendix-like material at the end. If your university's template is built on `book` or `memoir`, prefer these commands over raw `\pagenumbering`, because the template may hook extra behavior onto them, such as different headers for front matter. The two approaches do not conflict, but there is no reason to use both.

## One thing to check

The roman-numbered pages should agree with your table of contents. If your abstract shows as page "iv" in the ToC but prints as "2", the usual cause is a `\pagenumbering` call placed after the content it was supposed to cover, or a missing second compile: page numbers in the ToC come from the `.aux` file, so you need to [compile twice](/learn/compile-to-pdf/) before judging whether the numbering is right. Compile, compile again, then compare the ToC against the actual pages.
