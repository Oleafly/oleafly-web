---
title: "Math that sits in a sentence (or alone)"
description: "Inline math, display math, equation environments, and when numbering is worth it."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# Math that sits in a sentence (or alone)

LaTeX treats mathematics as a separate mode with its own fonts and spacing rules. Every variable, formula, and symbol has to live inside math mode, whether it is a lone n in a sentence or a full equation. There are two kinds: inline math flows within a paragraph, and display math sits centered on its own line, with or without a number.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## Inline math

A pair of dollar signs, as in `$E=mc^2$`, sets the formula at text size inside the line. The letters come out in math italic and the spacing around the equals sign is handled for you. `\(E=mc^2\)` is the equivalent LaTeX-native form. It produces identical output, and because its opening and closing delimiters differ, an unclosed one gives a clearer error message. Use inline math even for a single variable name, so the n in your prose matches the n in your equations.

## Display math

`\[ ... \]` places a formula on its own centered line without a number. It is the right choice for one-off equations you never refer back to. Avoid the old `$$ ... $$` form. It is plain TeX rather than LaTeX and produces slightly wrong vertical spacing in some situations.

## Numbered equations

The `equation` environment displays the formula with a number at the margin. `\label{eq:energy}` attaches a name to that number, and elsewhere you write `Equation~\ref{eq:energy}` or, with `amsmath` loaded, `\eqref{eq:energy}`, which adds the parentheses itself. The `~` is a non-breaking space, so the word and the number stay on one line. References resolve on the second compile. If you see `??` in the output, see [question marks instead of numbers](/learn/equations-show-qq/).

## The packages to load

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Nearly every mathematical document loads these three. `amsmath` provides the environments and commands most of these lessons assume, including `align` and `\eqref`. `amssymb` and `amsfonts` add symbol fonts and extra alphabets such as `\mathbb`. Put the line in the preamble once and forget about it.

The classic beginner error is math syntax outside math mode: an underscore in plain text stops the compile with "Missing $ inserted", which has [its own lesson](/learn/missing-dollar/). To get a feel for the two modes, type a sentence with `$x_i$` inline and the same formula inside `\[ ... \]` in the [live playground](/live/) and compare how each sits on the page.
