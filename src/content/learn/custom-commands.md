---
title: "Macros that keep notation honest"
description: "newcommand, NewDocumentCommand, a shared macros file."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Macros that keep notation honest

Every paper has notation that repeats: the real numbers, an expectation operator, an absolute value with properly sized bars. If you type `\mathbb{R}` in forty places and your advisor later prefers `\mathbf{R}`, you have forty edits to make and you will miss one. A macro turns that notation into a single named command, defined once. Change the definition and the whole document follows. That is how you keep notation honest: the source cannot drift out of sync with itself.

## Defining commands with newcommand

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

The first definition is the simplest kind: `\R` is now pure shorthand, and typing `\R` anywhere produces `\mathbb{R}`.

The second form takes an argument. The `[1]` after the name declares that `\E` accepts one argument, and `#1` marks where that argument lands in the expansion. So `\E{X}` becomes `\mathbb{E}\left[X\right]`. The definition buys more than brevity: the `\left[` and `\right]` pair makes the brackets grow to fit whatever is inside, so `\E{\frac{X}{n}}` gets tall brackets automatically. The `\abs` macro does the same with `\lvert` and `\rvert`, the correct pair of vertical bars for absolute value. You can declare up to nine arguments and refer to them as `#1` through `#9`.

If a command already exists, `\newcommand` refuses to redefine it and stops with an error, which protects you from silently breaking something. To deliberately replace an existing command, use `\renewcommand` instead.

## The modern interface

Current LaTeX also ships a richer definition command:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` uses an argument specification string instead of a count. Here `mm` means two mandatory arguments, so `\citepair{knuth84}{lamport94}` cites both keys. The specification language goes further than `\newcommand` can: `o` declares an optional argument in square brackets, `s` detects a star variant, and `O{default}` gives an optional argument a default value. For anything beyond simple substitution, reach for this interface.

## Share the definitions

Keep a `macros.sty` shared across chapters. Put your definitions in that one file, load it with `\usepackage{macros}` from each document, and every chapter of a thesis, plus the slides and the paper version, all agree on notation. When a collaborator joins, they read one short file to learn your conventions instead of reverse-engineering them from the text. This pairs naturally with a [multi-file setup](/learn/split-chapter-files/).

A tip on naming: give macros meaningful names like `\abs` or `\norm` rather than appearance-based names like `\bigbars`. The name should say what the notation means, so the definition is free to change how it looks. And resist defining a macro for something you use twice; the payoff starts around the third use.
