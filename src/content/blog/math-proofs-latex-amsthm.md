---
title: "Mathematics students: theorems, proofs, and notation that stays consistent"
description: "amsthm styles, lemma numbering, and macro hygiene for pure and applied math writeups."
date: 2026-07-12
tags: [mathematics, proofs, math]
---

Math papers are notation plus proof structure. LaTeX is the default because
both are painful in Word once the argument exceeds a page.

## amsthm early

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
```

Numbering by section keeps references stable when you insert a lemma.
Lesson: [theorem and proof blocks](/learn/theorems-proofs/).

## Proofs that end cleanly

Use the `proof` environment so the QED mark lands correctly. For proofs that
end inside an equation, `\qedhere` avoids a orphaned box on the next line.

## Macro hygiene

Define `\R`, `\N`, `\eps`, operator names, and category names once. If two
notions share a letter, disambiguate with macros (`\VectSpace` vs `\RandomVar`)
instead of reusing `V` with different fonts.

## Align for long derivations

`align` and `split` keep steps readable. Number only lines you cite. A wall
of numbered equations is harder to follow than a short narrative with two
tagged lines.

## When the PDF is the hand-in

Coursework still needs a clean PDF: margins per the syllabus, page numbers,
and a title. The [quick reference](/learn/cheatsheet/) covers the boring
parts so you can spend attention on the proof.
