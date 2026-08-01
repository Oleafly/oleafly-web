---

title: "Griekse en alledaagse symbolen"
description: "alpha via Omega, plus de operators en relaties die u dagelijks typt."
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

# Griekse en alledaagse symbolen

De meeste symbolen die u dagelijks typt, zijn Griekse letters plus een handvol operatoren en relaties. Ze werken allemaal op dezelfde manier: een backslash plus de naam van het symbool, alleen in de wiskundige modus. Deze pagina is de dagelijkse set. De [wiskundige symbolen cheatsheet](/learn/math-symbols-cheatsheet/) is de volledigere referentie.

## Grieks (wiskundemodus)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Een opdracht in kleine letters geeft de kleine letter: `\alpha`, `\beta`, `\gamma`. Geef de eerste letter van het commando als hoofdletter een hoofdletter: `\Gamma`, `\Delta`, `\Omega`. Niet elk hoofdletter bestaat als commando, omdat sommige Griekse hoofdletters identiek zijn aan Latijnse letters. Hoofdletter alpha is gewoon A, dus er is geen `\Alpha`. Hetzelfde geldt voor bèta, epsilon en verschillende andere. Typ in plaats daarvan de Latijnse letter.

Een paar letters hebben afwijkende vormen met een voorvoegsel `var`. `\epsilon` is de maanvormige vorm en `\varepsilon` de gekrulde vorm. `\theta` en `\vartheta`, `\phi` en `\varphi`, `\rho` en `\varrho` verschillen op dezelfde manier. Geen van beide vormen is correcter. Kies degene die uw voorkeur heeft en gebruik deze consequent in het hele document.

Dit zijn allemaal commando's in de wiskundige modus, dus een Griekse letter in de lopende tekst luidt `$\alpha$`. Een kale `\alpha` in de tekst stopt het compileren met de fout die wordt behandeld in [Missing dollar ingevoegd](/learn/missing-dollar/).

## Dagelijkse operators en relaties

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

De eerste regel is rekenkundig en vergelijkend: `\pm` voor plus-minus, `\cdot` voor een vermenigvuldigingspunt, `\times` voor een kruis, `\div` voor deling, dan `\leq`, `\geq` en `\neq` voor de vergelijkingen, `\ approx` voor geschatte gelijkheid, en `\equiv` voor identiteit of congruentie. De tweede regel is de ingestelde taal: `\in` voor lidmaatschap, `\subset` en `\subseteq` voor containment, `\cup` en `\cap` voor vereniging en intersectie, en `\emptyset` voor de lege set. De derde behandelt pijlen en analyse: `\to` voor een gewone pijl in limieten en functietypen, `\mapsto` voor waar een element naartoe gaat, `\Rightarrow` voor implicatie, `\infty` voor oneindigheid, en `\partial` en `\nabla` voor gedeeltelijke afgeleiden en gradiënten, die een volledige behandeling krijgen in [afgeleiden en integralen](/learn/derivatives-integrals/).

De afstand rondom al deze is automatisch. LaTeX weet dat `\leq` een relatie is en `\cup` een binaire bewerking is, en elke bewerking wordt overeenkomstig gespatieerd, wat een goede reden is om de commando's te gebruiken in plaats van Unicode-symbolen te plakken. De namen zinken het snelst door een paar formules in de [live speeltuin](/live/) te typen en ze te zien renderen.