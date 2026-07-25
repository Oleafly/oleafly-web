---
title: "Bullets, numbers, and definition lists"
description: "itemize, enumerate, description, nesting, and custom item labels."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Bullets, numbers, and definition lists

Lists in LaTeX are environments: you open one with `\begin{...}`, close it with `\end{...}`, and mark each entry with `\item`. LaTeX then handles the numbering, the bullets, the indentation, and the spacing for you. That last part is the point. You never renumber anything by hand, and if you delete the third entry of a numbered list, entries four through ten silently become three through nine.

## The three list environments

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

`itemize` produces an unordered bullet list and is the right choice when the entries have no sequence, such as a list of assumptions. `enumerate` numbers each entry automatically, which is what you want for steps that happen in order or for items you plan to refer back to. You can even put a `\label` after an `\item` in an enumerate and reference its number later with `\ref`, just as you would a section.

`description` is the least known of the three but very useful. Each `\item` takes an optional argument in square brackets, and that argument is printed in bold as a label with the definition text following it. It is the natural environment for glossaries, lists of notation, or any "term: explanation" structure.

## Nesting

Nest environments for multi-level lists. Put a complete `\begin{itemize} ... \end{itemize}` block inside an `\item` of an outer list and LaTeX indents it and switches the bullet symbol automatically. The same works for `enumerate`, where nesting changes the numbering style at each level: arabic numbers first, then letters, then roman numerals. LaTeX supports four levels of nesting, which is more than any readable document needs; if you find yourself three levels deep, the material probably wants to be prose or a table instead.

## Custom labels

Any single item can override its own marker with the optional argument: `\item[(a)]` prints "(a)" instead of the bullet or number. This is handy for one-off cases, but if you want a whole list restyled, changing every item by hand defeats the automation. For that, load the `enumitem` package, which lets you write things like `\begin{enumerate}[label=(\alph*)]` to relabel the entire list in one place, and also gives you options to tighten the vertical spacing.

A common beginner mistake is leaving a blank line between `\item` entries hoping to space them out. The blank line is harmless inside a list, but it does nothing visually; spacing is controlled by the list environment itself or by `enumitem` options. Another one: every list environment must contain at least one `\item` before any text, or you get the confusing error "Something's wrong--perhaps a missing \item". You can experiment with all three environments in the [live playground](/live/).
