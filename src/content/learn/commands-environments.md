---
title: "Command or environment?"
description: "Macros take arguments; environments wrap regions."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
---

# Command or environment?

Everything you type in LaTeX beyond plain text takes one of two shapes: a command or an environment. The distinction sounds academic until you hit your first error message, because half of LaTeX's complaints are about one being used where the other belongs. Learning to see which shape you are looking at makes both the documentation and the errors readable.

## Commands

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

A command is a backslash followed by a name, and it performs a substitution at the point where it appears. `\textbf{argument}` takes one argument in braces and typesets it in bold; the effect begins and ends with the braces. Commands can take several brace arguments, and many also accept an optional argument in square brackets before them, as in `\documentclass[11pt]{article}`.

The first two lines show that commands are something you can create. `\newcommand{\foo}{bar}` defines a new command named `\foo` whose expansion is the text `bar`, and from then on typing `\foo` anywhere produces `bar`. This is the mechanism behind [custom macros](/learn/custom-commands/), and it is also how packages work: a package is largely a file of command definitions.

One quirk worth knowing early: a command like `\LaTeX` swallows the space after it, so `\LaTeX is fun` prints the words run together. Write `\LaTeX{} is fun` or `\LaTeX\ is` to keep the space.

## Environments

```latex
\begin{center}
 Centered block
\end{center}
```

An environment wraps a region of the document between a matching `\begin{...}` and `\end{...}` pair, and applies its behavior to everything inside. Here the `center` environment centers each line of the block. Environments can be nested, provided they close in the reverse order they opened, and they can take arguments too: `\begin{tabular}{ll}` opens a table and passes it a column specification.

Because environments must balance, their failure mode is distinctive. An error such as `\begin{itemize} ended by \end{document}` means an environment was opened and never closed, and the fix is to find the missing `\end`, not to stare at the line the error names.

## The rule of thumb

If it wraps a region with a clear start and end, it is probably an environment; if it is a small substitution or a switch, it is a command. The two shapes even overlap: every environment `foo` is implemented as a command pair `\foo` and `\endfoo` under the hood. For a tour of the specific commands and environments you will meet most, see [every command explained](/learn/every-command-explained/), or try both shapes in the [live playground](/live/).
