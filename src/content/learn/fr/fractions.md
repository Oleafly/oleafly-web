---

title: "Des ratios empilés qui restent lisibles"
description: "frac, dfrac, tfrac et fractions continues avec amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# Des ratios empilés qui restent lisibles

Les fractions sont le premier endroit où la sortie LaTeX surclasse visiblement un traitement de texte : un véritable numérateur et dénominateur empilés avec une règle entre eux, dimensionnés pour s'adapter aux mathématiques environnantes. La commande principale est `\frac`. Ce qui compte, c'est la manière dont sa taille change en fonction du contexte et comment la remplacer lorsque le choix automatique nuit à la lisibilité.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` prend deux arguments entre accolades, le numérateur en premier, le dénominateur en second, et les compose empilés sur une règle horizontale. Sa taille est sensible au contexte. Dans les mathématiques d'affichage (à l'intérieur de `\[ ... \]` ou d'un environnement `équation`), la fraction est définie en taille réelle. En mathématiques en ligne (à l'intérieur de `$ ... $`), il est plus petit et plus compact, il ne force donc pas les lignes du paragraphe à être séparées.

Parfois, vous voulez ignorer cela. `\dfrac`, de `amsmath`, force le style d'affichage : une fraction empilée en taille réelle même au milieu d'une phrase. Utilisez-le avec parcimonie, car une grande fraction en ligne étire l'espacement des lignes autour d'elle. `\tfrac` est à l'opposé : il force le style de texte petit même dans les mathématiques d'affichage, ce qui est pratique pour des coefficients simples comme la moitié devant une grande expression, où une pile en taille réelle attirerait trop d'attention.

Les deux arguments peuvent contenir des mathématiques arbitraires, y compris d'autres fractions : `\frac{1}{1 + \frac{1}{x}}` s'imbrique, et LaTeX réduit automatiquement la fraction interne. Cependant, lorsque la nidification devient profonde, il existe un meilleur outil.

## Fractions continues

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Les `\frac` imbriqués rétrécissent à chaque niveau, de sorte qu'au troisième étage d'une fraction continue, les chiffres sont à peine lisibles. `\cfrac`, également de `amsmath`, conserve chaque niveau à sa taille d'affichage maximale et aligne les numérateurs, ce qui est la manière acceptée de composer des fractions continues. Vous pouvez passer une position facultative, `\cfrac[l]{1}{...}`, pour pousser un numérateur vers la gauche au lieu de le centrer.

## Jugement pratique

Tous les `\dfrac`, `\tfrac` et `\cfrac` nécessitent `\usepackage{amsmath}` dans le préambule ; plain `\frac` fonctionne sans cela. Si vous obtenez « Séquence de contrôle non définie » sur `\dfrac`, la ligne du package est manquante.

Pour le texte en ligne, parfois une forme barrée est simplement plus lisible qu'une fraction empilée : écrire « (a/b) » ou « a/b » maintient la hauteur de ligne uniforme et se lit bien pour des ratios simples. Une bonne règle de base consiste à empiler les fractions dans les mathématiques d'affichage, là où il y a de l'espace vertical, et à préférer la barre oblique en ligne, à moins que la fraction ne soit le point de la phrase. Tapez un paragraphe dans les deux sens dans le [terrain de jeu en direct](/live/) et comparez ; la différence d'espacement des lignes est immédiatement visible. Si les délimiteurs mathématiques comme `$` et `\[` ne vous sont toujours pas familiers, commencez par [les bases du mode mathématique](/learn/math-mode/).