---
title: "Force or refuse a page break"
description: "newpage, clearpage, soft pagebreak, nopagebreak."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Force or refuse a page break

LaTeX decides where pages end. Most of the time it decides well, but sometimes you need to overrule it: a section heading strands itself at the bottom of a page, a table lands one line too late, or you want each chapter of a report to start fresh. LaTeX gives you a small set of commands for this, ranging from a hard order to a polite suggestion.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## The hard breaks

`\newpage` ends the current page immediately and starts a new one. It is the bluntest tool and the one you will use most while drafting.

`\clearpage` does the same thing but first flushes all pending floats. Figures and tables in LaTeX are floats: they drift to wherever the algorithm finds room, sometimes pages after the point where you wrote them. `\clearpage` forces every float that has been queued so far onto the page before moving on, so it is the right command at the end of a chapter or before a section where you want no stragglers. If figures seem to pile up at the end of your document, a well-placed `\clearpage` is usually the cure; see [why figures move](/learn/figure-wrong-position/) for the full story.

`\cleardoublepage` goes one step further in two-sided documents: after flushing floats it ensures the next page is a right-hand (odd) page, inserting a blank left-hand page if needed. Book chapters traditionally open on the right, and the `book` class calls this for you at every `\chapter`.

## The soft requests

`\pagebreak[n]` does not command. It asks. The optional number from 0 to 4 states how strongly: `\pagebreak[1]` means "a break here would be nice", `\pagebreak[4]` means "break here, period". The middle values let LaTeX weigh your wish against its own spacing judgment, which usually produces better-looking pages than a hard `\newpage`, because `\pagebreak` stretches the content to fill the page rather than leaving a gap.

`\nopagebreak` is the opposite request: it discourages a break at that point. It is useful right after a heading or before a short list you want kept with its introduction. Like `\pagebreak` it accepts an optional strength from 0 to 4.

## When to reach for these at all

The common mistake is sprinkling `\newpage` through a draft to fix layout, then watching every fix become wrong as the text grows. Page breaks depend on everything before them, so a manual break that looks perfect today can leave a half-empty page after your next revision. The sane workflow is to write the whole document first and only add breaks during the final pass, preferring the soft `\pagebreak[3]` over hard commands wherever the exact position is negotiable.
