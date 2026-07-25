---
title: "Links inside the PDF"
description: "hyperref, url, href, colors, and PDF metadata."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Links inside the PDF

A PDF is not just paper on a screen. It can carry live links: clickable URLs, cross-references that jump to the right figure, citations that jump to the bibliography, and a sidebar outline built from your section headings. In LaTeX, one package provides all of this: `hyperref`. Load it and every `\ref`, `\cite`, and table-of-contents entry in your document quietly becomes clickable, with no changes to the rest of your source.

## Loading and configuring hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

The options in square brackets control how links look. By default, hyperref draws a colored rectangle around each link, which most people find ugly. Setting `colorlinks=true` replaces the boxes with colored text instead, and the three color options split that by link type: `linkcolor` covers internal jumps such as section and figure references, `citecolor` covers citations, and `urlcolor` covers web addresses. Splitting them matters because a paper dense with citations can otherwise turn into a wall of blue.

## url versus href

The two linking commands do different jobs. `\url{...}` prints the address itself in a typewriter font and makes it clickable, which is what you want in a bibliography or footnote where the reader should see where the link goes. `\href{address}{text}` hides the address behind whatever text you supply, like a link on a web page. Prefer `\url` in documents that might be printed, since an `\href` label gives a paper reader no way to type the address in.

A practical bonus: `\url` knows how to break long addresses across lines without inserting a hyphen that would corrupt the address, something a plain typewriter-font URL cannot do.

## PDF metadata

`\hypersetup` lets you change any hyperref option after loading, and it is also where you set document metadata. The `pdftitle` and `pdfauthor` fields fill in the title and author your PDF reader shows in its window bar and file properties. Without them, readers often display the filename or the first heading, which looks unfinished in a document you are submitting or sharing. You can call `\hypersetup` in the preamble any time after `\usepackage{hyperref}`.

## Print-friendly documents

For print-friendly docs, use `hidelinks`. Passing it as an option, `\usepackage[hidelinks]{hyperref}`, keeps every link clickable on screen but removes both the colored boxes and the colored text, so the printed page looks completely normal. Many journal classes require exactly this.

One common mistake to avoid: hyperref redefines many internal commands, so it should be loaded as one of the last packages in your preamble. If your links point to the wrong pages or you get strange errors from another package, the load order is the first thing to check. See [cross-references](/learn/cross-references/) for the `\label` and `\ref` mechanics that hyperref makes clickable.
