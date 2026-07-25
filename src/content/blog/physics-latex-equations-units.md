---
title: "Physics theses: equations, units, and multi-file sanity"
description: "Practical LaTeX habits for physics and astronomy students: notation, siunitx, multi-chapter projects, and journals that still want two columns."
date: 2026-06-20
tags: [physics, thesis, math]
---

Physics manuscripts carry more math per page than most fields. That is a
feature until a half-finished chapter breaks the whole compile because one
label moved.

## Multi-file from the start

Even a short MSc thesis benefits from a root file and chapter includes:

```latex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Use `\includeonly{chapters/methods}` while you draft so you are not
rebuilding three chapters to fix one equation. Details:
[one root file, many chapters](/learn/split-chapter-files/).

## Units are not text

Write `$v = 3.0\,\mathrm{m\,s^{-1}}$` by hand if you must, or load `siunitx`
and use `\qty{3.0}{m.s^{-1}}`. Journals differ on spacing; pick one package
path and stick to it. Mixed styles look like two authors who never met.

## Dirac, vectors, and bold conventions

Quantum and condensed-matter groups often need `\braket` for Dirac notation.
Classical mechanics groups argue about bold vs arrow vectors. Document the
convention in the preamble and refuse ad-hoc exceptions mid-chapter. See
[Dirac notation](/learn/physics-braket/) and
[bold math](/learn/bold-math/).

## Two-column journal traps

APS, IOP, and similar classes change float behavior. A figure that looked fine
in `article` may refuse to sit beside the paragraph that cites it. Compile
against the real class early, not the weekend before submission. Keep a
minimal figure width (`0.45\textwidth` in two-column) as the default.

## Keep the source offline when the lab network dies

Beamlines and cleanrooms are not known for stable Wi‑Fi. A local compile with
a bundled engine (as in [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest))
means the PDF still builds when the browser editor does not load. Store the
project under Git so a bad equation edit is one checkout away from undo.
