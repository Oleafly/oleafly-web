---
title: "Emphasis without fighting the font"
description: "textbf, textit, emph, mono, and why emph nests better than hard-coded italics."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Emphasis without fighting the font

Emphasis in LaTeX comes from a small set of commands that each take the affected text as a braced argument. LaTeX separates two ideas most word processors merge: applying a specific typeface, and marking a span as emphasized. Knowing which command does which keeps documents consistent when styles change.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## The commands

`\textbf` sets bold, the standard treatment for strong emphasis and for headwords in definitions. `\textit` sets italic type directly. `\texttt` switches to the monospaced typewriter font, the convention for file names, commands, and code identifiers in running text. `\textsc` sets small caps, common for author names in bibliographies and for acronyms that would otherwise dominate a line of text.

`\underline` exists but earns its comment in the example. Underlining is a typewriter-era substitute for italics, and in LaTeX it has a mechanical problem too: the underlined text is placed in a box, so it cannot break across lines, and a long underlined phrase will overflow the margin. In print typography, italics do the job underlining used to do.

The commands nest, so `\textbf{\textit{bold italic}}` combines both when the font provides the face.

## Why \emph

`\emph` marks meaning rather than appearance: it says "emphasize this" and lets context decide how. In upright text it prints italics. Inside text that is already italic it flips back to upright, so emphasis within emphasis stays visible. Hard-coded `\textit` inside italic text simply stays italic and the inner emphasis vanishes. Marking intent also pays off later. A class or package can redefine what emphasis looks like in one place without edits throughout the document.

Rule of thumb: use `\emph` for emphasis in running prose, and reserve `\textit` for things that are conventionally italic regardless of context, such as book titles, foreign phrases, and species names.

## Boundaries and habits

These are all text-mode commands, and they misbehave inside formulas. Bold math symbols need `\mathbf` or `\boldsymbol`, covered in [bold math](/learn/bold-math/). Resist stacking emphasis, because when everything is bold, nothing stands out. Build headings from structural commands like `\section` rather than manual bold, since structure also feeds the table of contents and PDF bookmarks. [Bigger and smaller type](/learn/font-size/) makes the same argument for font sizes.
