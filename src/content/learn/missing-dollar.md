---
title: "Missing dollar inserted"
description: "Subscripts and math commands that leaked into text mode."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
---

# Missing dollar inserted

"Missing $ inserted" is the most common LaTeX error, and its name misleads: LaTeX is not asking you to spend money but telling you that math-only syntax appeared in text mode. It inserts the `$` itself to recover, carries on compiling, and often leaves strange italic output downstream, so the message deserves a real fix rather than a shrug.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## What triggers it

Two characters and a class of commands belong exclusively to math mode. The underscore `_` and caret `^` create subscripts and superscripts, and commands like `\alpha`, `\frac`, and `\leq` produce mathematical symbols. Any of them in plain text raises the error. The classic case is an identifier containing an underscore, such as a file name or a gene name: `DNA_seq` in a sentence trips on the `_`.

The fix depends on what you meant. If the underscore is a literal character, escape it: `DNA\_seq` prints the name with a real underscore. If you meant a subscript, then you meant math, so wrap the expression: `$x_i$` sets an x with the subscript i, in math italic with correct spacing. The full roster of characters that need escaping in text has [its own lesson](/learn/special-characters/), and the math delimiters themselves are covered in [math mode basics](/learn/math-mode/).

## When the log points somewhere strange

The reported line number is where LaTeX noticed the problem, not necessarily where you caused it. The usual culprit is an unclosed `$` earlier: you opened math mode and never closed it, so LaTeX ran on in math mode until something forced the issue, often the end of the paragraph. A blank line inside display math raises the same error, because paragraph breaks are illegal in math mode. So when the flagged line looks innocent, scan upward for an odd number of dollar signs and check that every `\[` has a matching `\]`.

Syntax highlighting is the fast way to spot the runaway: any LaTeX editor colors math regions differently, so a paragraph that suddenly renders in math color pinpoints the unclosed dollar at a glance.

One last caution: because LaTeX recovers by inserting the missing `$`, a PDF often still builds. Do not take the PDF as proof the error was harmless. The recovered output usually has stray italics or mangled spacing where your text should be, so fix the source until the log is clean.
