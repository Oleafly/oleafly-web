---
title: "Dirac notation"
description: "braket package for bras, kets, and matrix elements."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Dirac notation

Quantum mechanics writes states as kets, their duals as bras, and inner products as bracketed pairs. Building the notation by hand from `\langle`, `|`, and `\rangle` works, but it is tedious and the delimiters do not grow with the contents. The `braket` package provides commands that assemble the notation and size everything to fit.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## What each command does

`\braket{\psi|\phi}` sets the full inner product: angle brackets on the outside, a vertical bar between the two states, all matched in height. With two bars, `\braket{\psi|A|\phi}` becomes the matrix element of the operator A between the two states, the form at the heart of every expectation value and perturbation calculation. The package also provides `\bra{\psi}` and `\ket{\phi}` for the two halves on their own; a bare ket is the usual way to name a state in prose.

`\set{\vec{x}|x > 0}` is a bonus from the same package: set-builder notation with braces and a middle bar, useful well beyond physics.

The sizing is the real argument for the package. Put a fraction or a sum inside `\braket` and the brackets and bars stretch to match, exactly where a hand-built `\langle ... \rangle` needs `\left` and `\right` on every delimiter and still tends to drift out of proportion.

## Alternatives and neighbors

The `physics` package offers a similar set, including `\bra`, `\ket`, `\ev` for expectation values, and `\mel` for matrix elements, alongside shorthands for derivatives and commutators. Both packages define `\bra` and `\ket`, so pick one per document rather than loading both. In a template where you cannot add packages, `\langle \psi | \phi \rangle` with `\left`/`\right` around tall contents produces the same output with more typing.

For Feynman diagrams, which often live in the same documents, packages such as `tikz-feynman` build on TikZ; that is a separate drawing skill, closer in spirit to [commutative diagrams](/learn/commutative-diagrams/) than to anything on this page.

The common mistake is typing `<\psi|\phi>` with the keyboard's angle characters. Those are the less-than and greater-than relations, so LaTeX spaces them as comparisons and draws them at the wrong height. Real Dirac brackets come from `\langle` and `\rangle` or, better, from the commands above. The difference is obvious the moment you set both forms next to each other in the [live playground](/live/).
