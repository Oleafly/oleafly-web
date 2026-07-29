---
title: "Emergency stop and runaway argument"
description: "Fatal aborts from missing ends, braces, or bad includes."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Emergency stop and runaway argument

## The symptom

The compile dies outright. The log ends with `! Emergency stop.` or shows `Runaway argument?` followed by a long stretch of your own text, often with a companion line such as `File ended while scanning use of \textbf` or `Paragraph ended before \foo was complete`. Unlike most LaTeX errors, there is no PDF at all, and the reported line number frequently points at the end of the file rather than at the real mistake.

## Why it happens

Both messages come from the same problem: TeX started reading something that must be closed and reached the end of the input before the closing token arrived. When you write `\textbf{`, TeX collects everything up to the matching `}` as the argument. If that brace never comes, TeX keeps swallowing text, through paragraphs and sections, until the file runs out. "Runaway argument" is TeX showing you what it swallowed. "Emergency stop" is TeX giving up because it cannot continue without the missing piece. A missing `\end{document}`, an unclosed environment, or an `\input` of a file that does not exist produces the same terminal state.

## How to find the real location

Do not trust the line number; it marks where TeX ran out of input, not where the imbalance began. Instead, read the `Runaway argument?` block in the log. The first few words of the swallowed text tell you where in the document the runaway started, and the `File ended while scanning use of ...` line names the command whose argument was never closed. Search for that command near the quoted text and count its braces.

If the log is unhelpful, binary-search the document. Comment out the second half of the body (or wrap it in `\iffalse ... \fi`) and recompile. If the error disappears, the problem is in the half you removed; keep halving until the faulty paragraph is isolated. This sounds crude, but on a large document it finds a lone missing brace in a handful of compiles.

## The usual suspects

Check for a `{` without its `}` in the vicinity of bold, italics, footnotes, and captions, since those commands take argument braces you type by hand. Check that every `\begin{...}` has a matching `\end{...}` with the same environment name. Confirm the file ends with `\end{document}` and that every `\input` and `\include` names a file that exists at that path. Editors help here: Oleafly highlights matching braces and environment pairs as you type, which catches most of these before the compiler ever sees them.
