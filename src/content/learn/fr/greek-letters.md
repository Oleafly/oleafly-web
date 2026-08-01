---

title: "Symboles grecs et quotidiens"
description: "alpha via Omega, ainsi que les opérateurs et relations que vous saisissez quotidiennement."
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

# Symboles grecs et quotidiens

La plupart des symboles que vous tapez quotidiennement sont des lettres grecques ainsi qu'une poignée d'opérateurs et de relations. Ils fonctionnent tous de la même manière : une barre oblique inverse plus le nom du symbole, uniquement en mode mathématique. Cette page est l'ensemble quotidien. La [aide-mémoire des symboles mathématiques](/learn/math-symbols-cheatsheet/) est la référence la plus complète.

## Grec (mode mathématique)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Une commande minuscule donne la lettre minuscule : `\alpha`, `\beta`, `\gamma`. Mettez en majuscule la première lettre de la commande pour la majuscule : `\Gamma`, `\Delta`, `\Omega`. Toutes les majuscules n'existent pas en tant que commande, car certaines majuscules grecques sont identiques aux lettres latines. L'alpha majuscule est juste A, donc il n'y a pas de « \Alpha ». Il en va de même pour la version bêta, epsilon et plusieurs autres. Tapez plutôt la lettre latine.

Quelques lettres ont des variantes avec un préfixe « var ». `\epsilon` est la forme lunaire et `\varepsilon` la forme bouclée. `\theta` et `\vartheta`, `\phi` et `\varphi`, `\rho` et `\varrho` diffèrent de la même manière. Aucune des deux formes n’est plus correcte. Choisissez celui que votre domaine privilégie et utilisez-le de manière cohérente tout au long du document.

Toutes ces commandes sont en mode mathématique, donc une lettre grecque dans le texte courant s'écrit « $\alpha$ ». Un simple `\alpha` dans le texte arrête la compilation avec l'erreur couverte dans [Dollar manquant inséré](/learn/missing-dollar/).

## Opérateurs et relations au quotidien

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

La première ligne est l'arithmétique et la comparaison : `\pm` pour plus-moins, `\cdot` pour un point de multiplication, `\times` pour une croix, `\div` pour la division, puis `\leq`, `\geq` et `\neq` pour les comparaisons, `\approx` pour l'égalité approximative et `\equiv` pour l'identité ou la congruence. La deuxième ligne est le langage défini : `\in` pour l'appartenance, `\subset` et `\subseteq` pour le confinement, `\cup` et `\cap` pour l'union et l'intersection, et `\emptyset` pour l'ensemble vide. Le troisième couvre les flèches et l'analyse : `\to` pour une flèche simple dans les limites et les types de fonctions, `\mapsto` pour l'endroit où va un élément, `\Rightarrow` pour l'implication, `\infty` pour l'infini, et `\partial` et `\nabla` pour les dérivées partielles et les gradients, qui font l'objet d'un traitement complet dans [dérivées et intégrales](/learn/derivatives-integrals/).

L'espacement autour de tous ces éléments est automatique. LaTeX sait que `\leq` est une relation et `\cup` est une opération binaire, et il espace chacun en conséquence, ce qui est une bonne raison d'utiliser les commandes plutôt que de coller des symboles Unicode. Les noms pénètrent le plus rapidement en tapant quelques formules dans le [terrain de jeu en direct](/live/) et en les regardant s'afficher.