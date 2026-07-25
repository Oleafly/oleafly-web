---
title: "Running heads and feet"
description: "fancyhdr patterns for title and page number."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Running heads and feet

A running head is the strip of text at the top of each page, and the running foot is its counterpart at the bottom. In a book or thesis they usually carry the chapter title and the page number; in a submitted paper they might carry a short version of the title, the authors, or nothing at all. LaTeX's built-in page styles (`plain`, `empty`, `headings`) cover the basics, but the moment you want a specific combination, such as your title on the left and the page number on the right, you reach for the `fancyhdr` package.

## The standard recipe

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Each line here does one job. `\usepackage{fancyhdr}` loads the package in your preamble. `\pagestyle{fancy}` switches the whole document over to fancyhdr's configurable style. `\fancyhf{}` clears every header and footer field, which matters because fancyhdr ships with defaults (page number and section marks) that you almost never want mixed with your own; starting from a clean slate keeps surprises out.

The next two lines fill fields back in. `\fancyhead[L]{Short title}` puts literal text in the left slot of the header, and `\fancyhead[R]{\thepage}` puts the current page number in the right slot. `\thepage` is a command that expands to the page number, so it updates on every page automatically. There is a matching `\fancyfoot[L/C/R]{...}` if you would rather put things at the bottom.

Finally, `\headrulewidth` controls the thin horizontal line under the header. Setting it to `0.4pt` draws a hairline; set it to `0pt` to remove the rule entirely. A `\footrulewidth` exists too and defaults to zero.

## Two-sided documents

If your document class uses `twoside` (the default for `book`), pages alternate between even and odd, and headers usually mirror each other. fancyhdr handles this with even/odd selectors: `\fancyhead[LE,RO]{\thepage}` puts the page number on the left of even pages and the right of odd pages, which is where a reader's thumb finds it. You can combine this with `\leftmark` and `\rightmark`, which hold the current chapter and section titles, to reproduce the classic book layout.

## Chapter pages and the empty look

Chapter opening pages ignore your fancy style because `\chapter` calls `\thispagestyle{plain}` behind the scenes. That is deliberate, and most designs keep it. If you want those pages bare, add `\fancypagestyle{plain}{\fancyhf{}}` to redefine what `plain` means.

One common warning to expect: fancyhdr may complain that `\headheight` is too small. The fix is exactly what the message suggests, for example `\setlength{\headheight}{14pt}` in the preamble, or passing `headheight=14pt` to the [geometry package](/learn/margins-geometry/) if you already use it. It is a layout reservation, not an error, but silencing it keeps your log clean and your baseline grid honest.
