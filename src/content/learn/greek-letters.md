---
title: "Greek and everyday symbols"
description: "alpha through Omega, plus the operators and relations you type daily."
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
---

# Greek and everyday symbols

Greek letters and a core set of operators and relations make up most of the symbols in a typical document, and they all follow one pattern: a backslash followed by the symbol's name, valid only in math mode. This page covers the set you will type daily; the [math symbols cheatsheet](/learn/math-symbols-cheatsheet/) is the fuller reference.

## Greek (math mode)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

A lowercase command gives the lowercase letter: `\alpha`, `\beta`, `\gamma`. Capitalize the first letter of the command for the capital: `\Gamma`, `\Delta`, `\Omega`. Not every capital exists as a command, because some Greek capitals are identical to Latin letters. Capital alpha is simply A, so there is no `\Alpha`; the same goes for beta, epsilon, and several others. Type the Latin letter instead.

A few letters have variant forms with a `var` prefix. `\epsilon` is the lunate form and `\varepsilon` the curly one; `\theta` and `\vartheta`, `\phi` and `\varphi`, `\rho` and `\varrho` differ the same way. Neither form is more correct. Pick the one your field favors and use it consistently through the document.

All of these are math-mode commands, so a Greek letter in running text is written `$\alpha$`; a bare `\alpha` in text stops the compile with the error covered in [Missing dollar inserted](/learn/missing-dollar/).

## Daily operators and relations

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

The first line is arithmetic and comparison: `\pm` for plus-minus, `\cdot` for a multiplication dot, `\times` for a cross, `\div` for division, then `\leq`, `\geq`, and `\neq` for the comparisons, `\approx` for approximate equality, and `\equiv` for identity or congruence. The second line is set language: `\in` for membership, `\subset` and `\subseteq` for containment, `\cup` and `\cap` for union and intersection, and `\emptyset` for the empty set. The third covers arrows and analysis: `\to` for a plain arrow in limits and function types, `\mapsto` for where an element goes, `\Rightarrow` for implication, `\infty` for infinity, and `\partial` and `\nabla` for partial derivatives and gradients, which get a full treatment in [derivatives and integrals](/learn/derivatives-integrals/).

Spacing around all of these is automatic. LaTeX knows `\leq` is a relation and `\cup` is a binary operation, and it spaces each accordingly, which is a good reason to use the commands rather than pasting Unicode symbols. The names sink in fastest by typing a few formulas in the [live playground](/live/) and watching them render.
