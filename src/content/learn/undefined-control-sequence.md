---
title: "Undefined control sequence"
description: "Unknown command names: typos, missing packages, wrong engine."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Undefined control sequence

## The symptom

Compilation stops with `! Undefined control sequence.` The log then shows the line where it happened, broken in two: everything TeX had read up to and including the offending command on one line, and the rest of the source line below it. The last token on that upper line is the command TeX did not recognize, which makes this one of the easier errors to locate precisely.

## Why it happens

A control sequence is anything that starts with a backslash. TeX has no fixed vocabulary: commands exist only because the kernel, the document class, a package, or your own `\newcommand` defined them. When TeX reads a backslash followed by a name that nothing has defined, it cannot guess what you meant and stops. The error is therefore never about the command being "wrong" in general; it is about that name being unknown in this document, at this point, under this engine.

## Fix it in three checks

Check the spelling first. `\texbf` instead of `\textbf`, `\lable` instead of `\label`, or a stray space breaking a name in two accounts for most cases. The log's line number takes you straight to the typo.

If the spelling is right, the defining package is probably missing. `\includegraphics` does nothing without `\usepackage{graphicx}`, `\toprule` needs `booktabs`, and `\SI` needs `siunitx`. This bites hardest when you copy a snippet from another document or from a model's answer: the body text came along, the preamble line did not. Find which package defines a command in [Every command explained](/learn/every-command-explained/), add the `\usepackage` line, and recompile. If the package itself is not installed, see [Install a missing package](/learn/install-missing-package/).

If the package is loaded and the error persists, suspect the engine. Some commands only exist under a particular engine: `\fontspec` and its relatives require XeLaTeX or LuaLaTeX and will die under pdfLaTeX with exactly this error. Templates that specify an engine in their documentation usually do so for this reason; [Which engine for this project](/learn/engines-compared/) explains the differences.

## Two quirks worth knowing

Order matters: a command used before the `\usepackage` line that defines it is still undefined at that point, so keep package loading in the preamble, above `\begin{document}`. And one error often hides another, because after TeX recovers it may misread everything that follows. Fix the first undefined control sequence in the log, recompile, and only then look at what remains.
