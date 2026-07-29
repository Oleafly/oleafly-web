---
title: "Greek and everyday symbols"
description: "alpha through Omega, plus the operators and relations you type daily."
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Greek letters check'
  questions:
    - prompt: 'How do you get a Greek letter like alpha in math?'
      choices:
        - 'Only Unicode works; backslash names never do.'
        - 'Write a command like $\alpha$ inside math mode.'
        - 'Use \textbf{alpha}.'
        - 'Paste HTML &alpha;.'
      answer: 'B'
      level: beginner
    - prompt: 'How do lowercase and uppercase Greek usually differ in LaTeX?'
      choices:
        - 'There is no capital Greek in math.'
        - 'They are different commands (for example \alpha vs \Gamma).'
        - 'Capitals only work in beamer.'
        - 'Uppercase always needs $$.'
      answer: 'B'
      explanation: 'Plenty of capitals have their own names (\Gamma, \Delta, \Omega). A few just look like Latin letters.'
      level: beginner
    - prompt: 'Where do Greek-letter commands belong?'
      choices:
        - 'Only in the preamble'
        - 'In math mode (inline or display)'
        - 'Only inside \caption'
        - 'Only in the .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'Why load amssymb or amsfonts when you''re writing Greek and relations?'
      choices:
        - 'For color photos'
        - 'Extra symbol fonts and common math symbols that go with the Greek set'
        - 'To replace \section'
        - 'So you only compile once'
      answer: 'B'
      level: beginner
---

# Greek and everyday symbols

Most symbols you type day to day are Greek letters plus a handful of operators and relations. They all work the same way: a backslash plus the symbol's name, only in math mode. This page is the daily set. The [math symbols cheatsheet](/learn/math-symbols-cheatsheet/) is the fuller reference.

## Greek (math mode)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

A lowercase command gives the lowercase letter: `\alpha`, `\beta`, `\gamma`. Capitalize the first letter of the command for the capital: `\Gamma`, `\Delta`, `\Omega`. Not every capital exists as a command, because some Greek capitals are identical to Latin letters. Capital alpha is just A, so there is no `\Alpha`. The same goes for beta, epsilon, and several others. Type the Latin letter instead.

A few letters have variant forms with a `var` prefix. `\epsilon` is the lunate form and `\varepsilon` the curly one. `\theta` and `\vartheta`, `\phi` and `\varphi`, `\rho` and `\varrho` differ the same way. Neither form is more correct. Pick the one your field favors and use it consistently through the document.

All of these are math-mode commands, so a Greek letter in running text is written `$\alpha$`. A bare `\alpha` in text stops the compile with the error covered in [Missing dollar inserted](/learn/missing-dollar/).

## Daily operators and relations

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

The first line is arithmetic and comparison: `\pm` for plus-minus, `\cdot` for a multiplication dot, `\times` for a cross, `\div` for division, then `\leq`, `\geq`, and `\neq` for the comparisons, `\approx` for approximate equality, and `\equiv` for identity or congruence. The second line is set language: `\in` for membership, `\subset` and `\subseteq` for containment, `\cup` and `\cap` for union and intersection, and `\emptyset` for the empty set. The third covers arrows and analysis: `\to` for a plain arrow in limits and function types, `\mapsto` for where an element goes, `\Rightarrow` for implication, `\infty` for infinity, and `\partial` and `\nabla` for partial derivatives and gradients, which get a full treatment in [derivatives and integrals](/learn/derivatives-integrals/).

Spacing around all of these is automatic. LaTeX knows `\leq` is a relation and `\cup` is a binary operation, and it spaces each accordingly, which is a good reason to use the commands rather than pasting Unicode symbols. The names sink in fastest by typing a few formulas in the [live playground](/live/) and watching them render.
