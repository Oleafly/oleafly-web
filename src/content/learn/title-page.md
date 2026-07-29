---
title: "Title blocks and title pages"
description: "maketitle for papers, titlepage for theses and reports."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Title blocks and title pages

A paper opens with a title block: title, authors, date, set at the top of the first page. A thesis opens with a full title page laid out to a university's specification. LaTeX treats these as two different problems. The first is automated by `\maketitle`, and the second is a blank canvas called the `titlepage` environment.

## The title block

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

The first three commands only store metadata. Nothing appears in the PDF when they run, which is why they can sit in the preamble. `\maketitle`, placed after `\begin{document}`, is the moment the stored block is typeset. Inside `\author`, the `\\` breaks a line (the usual way to put an affiliation under a name), and `\and` separates multiple authors so they are set side by side. `\date{\today}` prints the date of whichever day you compile. Write `\date{}` with empty braces to omit the date line entirely. Leaving `\date` out altogether still prints today's date.

In the `article` class the block sits at the top of page one with the text following below. In `report` and `book` it gets a page of its own. Journal and conference classes replace this machinery with their own commands for affiliations, emails, and ORCIDs, so inside a venue template you should follow its sample file rather than the standard commands.

## A hand-built title page

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

The `titlepage` environment gives you one unnumbered page and full manual control, which is what thesis regulations usually demand. Each piece of the example earns its place. `\centering` centers everything that follows within the environment. `\vspace*{2cm}` pushes the title down from the top edge. The starred form matters because an unstarred `\vspace` at the top of a page is discarded. The braces around `{\Large ...}` scope the font size change so it ends where the group ends, and `\\[1em]` breaks the line with an extra em of space below it. `\vfill` inserts stretchable space that absorbs whatever height remains, so the degree statement and date land at the bottom of the page no matter how long the title is.

Use one mechanism or the other. Combining `\maketitle` with a `titlepage` environment produces two title pages, and the classic beginner miss is the quiet one: defining `\title` and `\author` but forgetting `\maketitle`, so the document compiles cleanly with no title at all. The [document skeleton lesson](/learn/document-skeleton/) shows where the block fits in the file as a whole.
