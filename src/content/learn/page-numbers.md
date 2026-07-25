---
title: "Page numbers on or off"
description: "plain, empty, roman vs arabic, suppressing numbers on the title page."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Page numbers on or off

Page numbers appear by default in `article`: the standard classes use the `plain` page style, which centers the number at the bottom of every page. Usually that is fine and you never think about it. The three situations where you do think about it are hiding the number on a title page, turning numbering off entirely, and switching between roman and arabic numerals in a longer document.

## Hiding the number on the title page

A title page with a lonely "1" at the bottom looks unfinished. The fix is one line placed right after the title is set:

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` changes the page style for the current page only, and `empty` is the built-in style that prints nothing in the header or footer. The order matters: it must come after `\maketitle` on the same page, because `\maketitle` itself resets the page style. Note that the page still counts; the next page will be numbered 2. If you use `\begin{titlepage}...\end{titlepage}` instead of `\maketitle`, the number is suppressed for you and the following page starts at 1.

## Styles and numbering systems

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

These two pairs of commands control different things, and mixing them up is the classic stumble. `\pagestyle{...}` controls where the number appears and what surrounds it: `plain` gives the centered footer number, `empty` removes headers and footers from every page from that point on. It says nothing about what the number looks like.

`\pagenumbering{...}` controls how the number is written: `roman` produces i, ii, iii, while `arabic` produces 1, 2, 3. There are also `Roman` for I, II, III and `alph` for a, b, c, though you will rarely need them. Crucially, `\pagenumbering` also resets the page counter to 1. That reset is a feature, not a bug: it is exactly what lets a thesis number its preface i through vi and then start chapter one on page 1.

If you want full control over placement, such as the number in a corner or paired with a running title, that is the job of the fancyhdr package rather than these built-ins; see [running heads and feet](/learn/headers-footers/).

## The common mistake

Writing `\pagestyle{empty}` when you meant `\thispagestyle{empty}` silently removes numbers from the entire document, and you may not notice until a reviewer asks why your pages are unnumbered. Remember the rule: `\thispagestyle` is a one-page exception, `\pagestyle` is a document-wide switch.

Thesis front matter: [Roman/Arabic guide](/learn/front-matter-page-numbers/).
