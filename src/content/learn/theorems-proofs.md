---
title: "Theorem and proof blocks"
description: "amsthm styles, shared counters, end-of-proof marks."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Theorem and proof blocks

Mathematical writing runs on numbered statements: theorems, lemmas, and definitions, each set off from the text and numbered so later proofs can cite them. The `amsthm` package supplies the machinery. You declare the kinds of blocks your document needs once in the preamble, then use them as ordinary environments.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Declaring the environments

`\newtheorem{theorem}{Theorem}[section]` creates a `theorem` environment. The first argument is the environment name you will type, the second is the heading text that prints, and the trailing `[section]` ties the numbering to sections, so the third theorem of section 2 is Theorem 2.3 and the counter resets at each new section.

`\newtheorem{lemma}[theorem]{Lemma}` places the optional argument in the other position, where it means something different: `[theorem]` says lemmas share the theorem counter instead of keeping their own. A shared counter produces a single sequence, Theorem 2.1 followed by Lemma 2.2. That is easier to follow than parallel sequences where Lemma 2.1 and Theorem 2.1 both exist.

`\theoremstyle` sets the look of every declaration that follows it. The `plain` style prints the body in italics, the traditional treatment for theorems, lemmas, and propositions. The `definition` style keeps the body upright, which suits definitions and examples. A third style, `remark`, is lighter still and suits notes and observations. Group your declarations under the style each one should use.

## Using the blocks

The optional argument of the environment prints a name after the heading, so `\begin{theorem}[Optional name]` yields something like Theorem 2.4 (Fubini). The `proof` environment prints an italic Proof heading and closes with the end-of-proof mark, the small square set flush right.

`\qedhere` repositions that square when the proof does not end in ordinary text. If the last line of a proof is a displayed equation, the automatic mark would fall on an empty line below it. Writing `\qedhere` inside the display puts the square on the equation's own line. When a proof ends in plain text, as in the example, the command is harmless but unnecessary.

Theorem blocks are numbered objects like any other, so `\label{thm:main}` inside the environment and `Theorem~\ref{thm:main}` in the text work with the usual two-pass rules described in [numbers and pointers for equations](/learn/number-equations/). The common declaration mistake is putting every environment under `\theoremstyle{plain}`, which sets multi-paragraph definitions in italics. Keep definitions and examples under the `definition` style.
