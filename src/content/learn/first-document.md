---
title: "Compile your first PDF"
description: "A tiny article, one compile, and the three ideas that unlock most of LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
---

# Compile your first PDF

If you have only ever written in Word or Google Docs, LaTeX asks you to flip one habit. Instead of formatting text as you type, you describe your document in plain text and let a program typeset it for you. That plain text lives in a `.tex` file: an ordinary text file you could open in any editor, containing your words plus commands like `\section{...}` that say what each piece *is*. Compiling is the step that turns this source into a finished PDF. A program called a LaTeX engine reads your file from top to bottom, interprets every command, lays out the pages, and writes the PDF. You never format the output directly; you edit the source and compile again.

## The smallest real document

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Read it top to bottom. `\documentclass{article}` tells the engine what kind of document this is, which sets sensible defaults for fonts, margins, and heading styles. The `\title`, `\author`, and `\date` lines only store metadata; nothing is printed yet, and `\today` simply means the date of whichever day you compile. `\begin{document}` marks where actual content starts. `\maketitle` is the moment the stored title block appears on the page. `\section{Introduction}` prints a numbered heading and quietly records it so a table of contents could find it later. The last lines show the two faces of math: `$...$` typesets a formula inside a sentence, while `\[ ... \]` gives it a centered display line of its own.

## Three ideas that carry the language

1. Commands start with a backslash and usually take an argument in braces, so `\textbf{hello}` means "typeset hello in bold".
2. Environments wrap a region between `\begin{...}` and `\end{...}`, and the body of your file is itself one big `document` environment.
3. The preamble is everything before `\begin{document}`; it configures the document but never produces visible text.

Almost everything else in LaTeX is a variation on these three.

## Compile it

In [Oleafly](/docs/getting-started/), create a project, paste the source above, and compile. The PDF appears beside your source, and SyncTeX links the two sides: click a spot in the PDF to jump to the matching source line, or the reverse. The very first compile of a project can take a little longer while the engine fetches what it needs; later runs are quicker.

One thing to expect: sooner or later a compile will fail with an error message and a line number. This is completely normal, and usually means a typo in a command name or a missing closing brace. Fix the line it points at and compile again.

## Next

Continue with [the preamble, explained](/learn/preamble-explained/) to see what the setup lines really do, then [math mode](/learn/math-mode/) for formulas. Keep the [cheatsheet](/learn/cheatsheet/) open while you write your first real page.
