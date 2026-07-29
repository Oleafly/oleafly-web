---
title: "Captions that match the number"
description: "Put label after caption so the number sticks."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Captions that match the number

Cross-references are one of the things LaTeX does better than a word processor. You never type "Figure 3" by hand. Instead you attach a label to the figure and let LaTeX fill in the number everywhere it is mentioned, so the numbers stay correct no matter how much you reorder, insert, or delete. The mechanism has one rule that trips up almost everyone at least once: the order of `\caption` and `\label` matters.

## Why the order matters

The `\caption` command does two jobs. It prints the caption text under your figure or table, and it steps the counter, turning this float into Figure 3. The `\label` command does something dumber than people expect: it records whatever number was most recently assigned, whatever that happens to be. It has no idea it is "inside a figure". So the label must come after the caption:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

If you put `\label` before `\caption`, the caption has not stepped the figure counter yet, so the label captures the most recent number from somewhere else entirely, usually the current section. Your text then says "see Figure 2.4" when the figure is actually Figure 7. This is the classic symptom: references that point to section numbers instead of figure numbers almost always mean a label placed too early. The safest habit is to write `\label` on the line immediately following `\caption`, every time, in both figures and tables.

## Referencing the label

In your text, write the reference like this:

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` expands to the bare number, and you supply the word "Figure" yourself. The `~` between them is a non-breaking space, which keeps LaTeX from ever ending a line after "Figure" and starting the next one with "3". Prefixes like `fig:`, `tab:`, `sec:`, and `eq:` are pure convention, LaTeX does not interpret them, but they keep your labels readable and prevent a figure and a table from accidentally sharing a name.

Note that `\pageref{fig:neat}` gives the page number the figure landed on, useful in long documents where a float may drift far from its mention. For a full tour of the referencing commands, see [every command explained](/learn/every-command-explained/).

## Compile twice, and other pitfalls

References are resolved across compiler runs: the first pass writes label positions to the `.aux` file, and the second pass reads them back. Until that second pass, references print as bold question marks, so `??` in your PDF usually just means "compile again", not that anything is broken. Most editors, including Oleafly, rerun the passes for you automatically. If `??` survives repeated compiles, the label does not exist. Likely causes are a typo in the label name, or a `\caption` you deleted while leaving the `\label` behind.
