---

title: "Griechische und alltägliche Symbole"
description: "Alpha bis Omega sowie die Operatoren und Beziehungen, die Sie täglich eingeben."
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

# Griechische und alltägliche Symbole

Die meisten Symbole, die Sie täglich eingeben, sind griechische Buchstaben sowie eine Handvoll Operatoren und Beziehungen. Sie funktionieren alle auf die gleiche Weise: ein Backslash plus der Name des Symbols, nur im Mathematikmodus. Diese Seite ist das Tagesset. Das [Spickzettel für mathematische Symbole](/learn/math-symbols-cheatsheet/) ist die ausführlichere Referenz.

## Griechisch (Mathe-Modus)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Ein Kleinbuchstabe-Befehl gibt den Kleinbuchstaben aus: „\alpha“, „\beta“, „\gamma“. Schreiben Sie den ersten Buchstaben des Befehls groß: „\Gamma“, „\Delta“, „\Omega“. Nicht jedes Großbuchstaben existiert als Befehl, da einige griechische Großbuchstaben mit lateinischen Buchstaben identisch sind. Das große Alpha ist nur A, daher gibt es kein „\Alpha“. Das Gleiche gilt für Beta, Epsilon und einige andere. Geben Sie stattdessen den lateinischen Buchstaben ein.

Einige Buchstaben haben Variantenformen mit dem Präfix „var“. „\epsilon“ ist die Mondform und „\varepsilon“ die geschweifte Form. „\theta“ und „\vartheta“, „\phi“ und „\varphi“, „\rho“ und „\varrho“ unterscheiden sich auf die gleiche Weise. Keine der beiden Formen ist korrekter. Wählen Sie diejenige aus, die Ihrem Fachgebiet am besten gefällt, und verwenden Sie sie konsequent im gesamten Dokument.

Da es sich bei all diesen Befehlen um mathematische Befehle handelt, wird ein griechischer Buchstabe im Fließtext als „$\alpha$“ geschrieben. Ein bloßes „\alpha“ im Text stoppt die Kompilierung mit dem Fehler, der in [Fehlender Dollar eingefügt](/learn/missing-dollar/) behandelt wird.

## Tägliche Betreiber und Beziehungen

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

Die erste Zeile ist Arithmetik und Vergleich: „\pm“ für Plus-Minus, „\cdot“ für einen Multiplikationspunkt, „\times“ für ein Kreuz, „\div“ für Division, dann „\leq“, „\geq“ und „\neq“ für die Vergleiche, „\ approx“ für ungefähre Gleichheit und „\equiv“ für Identität oder Kongruenz. Die zweite Zeile ist die Mengensprache: „\in“ für die Mitgliedschaft, „\subset“ und „\subseteq“ für die Einschließung, „\cup“ und „\cap“ für Vereinigung und Schnittmenge und „\emptyset“ für die leere Menge. Der dritte behandelt Pfeile und Analyse: „\to“ für einen einfachen Pfeil in Grenzwerten und Funktionstypen, „\mapsto“ für die Position eines Elements, „\Rightarrow“ für Implikationen, „\infty“ für Unendlichkeit und „\partial“ und „\nabla“ für partielle Ableitungen und Gradienten, die in [Ableitungen und Integrale] (/learn/derivatives-integrals/) ausführlich behandelt werden.

Die Abstände um all dies herum erfolgen automatisch. LaTeX weiß, dass „\leq“ eine Relation und „\cup“ eine binäre Operation ist, und platziert jeweils entsprechende Leerzeichen. Dies ist ein guter Grund, die Befehle zu verwenden, anstatt Unicode-Symbole einzufügen. Die Namen werden am schnellsten sichtbar, wenn man ein paar Formeln im [Live-Spielplatz](/live/) eingibt und beim Rendern zusieht.