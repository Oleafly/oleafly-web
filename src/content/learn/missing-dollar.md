---
title: "Missing dollar inserted"
description: "Subscripts and math commands that leaked into text mode."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
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
