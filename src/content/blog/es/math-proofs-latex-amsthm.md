---
title: "Estudiantes de matemáticas: teoremas, demostraciones y notación que se mantiene consistente"
description: "estilos amsthm, numeración de lemas, higiene de macros, derivaciones largas y hábitos de archivos múltiples para redacciones de matemáticas puras y aplicadas."
date: 2026-07-12
tags: [mathematics, proofs, math]
---

Math papers are notation plus proof structure. LaTeX is the default because both
get painful in Word once the argument runs longer than a page. The compiler is
not the hard part. Consistency is: theorem numbers that jump when you insert a
lemma, a letter `V` that means three different things, and proofs that leave the
QED mark floating on the next line.

This is a practical setup for coursework, arXiv notes, and thesis chapters.
Steal what you need; ignore the rest until it hurts.

## amsthm early, before the first lemma

Load `amsthm` before you invent ad-hoc bold "Theorem." headings:

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

Numbering by section keeps references stable when you insert material above a
result. Sharing a counter (`[theorem]`) for lemmas and propositions is common
in pure math; applied papers sometimes number everything independently. Pick one
and stick to it for the whole document.

Lesson: [theorem and proof blocks](/learn/theorems-proofs/).

## Proofs that end cleanly

Use the `proof` environment so the end-of-proof mark lands in the right place:

```latex
\begin{proof}
  ...
\end{proof}
```

If the last line is a displayed equation, end with `\qedhere` so the box does
not orphan on the following line. Nested proofs (claim inside a proof) work
better as `claim` environments with their own short proofs than as indented
prose that never closes.

For homework where the instructor wants hand-marked steps, still use LaTeX for
the clean submission PDF, but keep rough work in a separate note file so you do
not delete the only correct line while rewriting.

## Macro hygiene

Define symbols once:

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

If two notions share a letter, disambiguate with macros (`\VectSpace` vs
`\RandomVar`) instead of reusing `V` with different fonts. Coauthors will not
guess which font means which object. When a notation sheet grows past a screen,
put it in `notation.tex` and `\input` it so everyone edits one file.

AI tools love inventing new symbols. If you use one, paste your macro block into
the prompt and demand it only use defined names. The same discipline applies
without AI: new symbol → add to sheet → then type.

## Align for long derivations

`align` and `split` keep multi-line calculations readable. Number only lines you
will cite with `\eqref`. A wall of numbered equations is harder to follow than a
short narrative with two tagged lines.

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

For a single multi-line equation that should carry one number, use `split`
inside `equation`. For cases, `cases` or `aligned` beats a home-made array of
pipes.

## Cross-references that survive reordering

Never write "by Theorem 2.3" as bare text. Use `\ref` or, with `cleveref`,
`\cref{thm:main}`. Labels go after the caption or theorem title line, not
before. If two chapters share labels like `thm:main`, prefix by chapter
(`ch3-thm:main`) or you will get silent wrong targets when you merge files.

Project-wide go-to-definition and live broken-ref checks help on multi-file
theses. That is normal research-editor territory now, not a luxury.

## Multi-file notes and theses

Even a long homework set is easier with a root file and section inputs. Theses
almost always want `\include` per chapter and `\includeonly` while you draft one
chapter at a time. Keep figures under `figures/ch3/` so reordering chapters does
not break paths.

Full thesis compiles get slow. Draft figure mode, externalize heavy TikZ, and
compile only the chapter you are editing when you can. See
[split chapter files](/learn/split-chapter-files/) and
[speed up compilation](/learn/speed-up-compilation/).

## When the PDF is the hand-in

Coursework still needs the boring shell: margins per the syllabus, page numbers,
title, and sometimes a statement of academic integrity. The
[quick reference](/learn/cheatsheet/) covers that so you can spend attention on
the proof.

Keep the source. A marked PDF without `.tex` is a dead end when the next problem
set reuses the same preamble. A local folder with Git history (or a research
editor that checkpoints compiles for you) beats `final_v3_really.pdf` on the
desktop.

## Before you submit

Make sure theorems and lemmas share a coherent numbering scheme, every symbol in
the body is defined in the macro sheet, and proofs use `proof` / `\qedhere`
where needed. Number only the equations you cite. All cross-refs should be
`\ref`/`\cref`, not hard-coded numbers. Open the PDF once: fonts embed, margins
match the brief.

## Homework vs paper

For homework, clarity beats package cleverness. For a paper or thesis chapter,
invest in the theorem setup and macro sheet once, then reuse. Do not rebuild
numbering mid-project because a blog post suggested a different style.

## Sharing with coauthors

Send a PDF for reading and a repo (or zip of sources) for editing. If a
coauthor only returns scanned markup, apply it the same day and commit. Stale
paper stacks are how two people "fix" the same lemma differently.

After that setup work, LaTeX mostly disappears and you can think about the math.
