---

title: "Notation de Dirac"
description: "ensemble de supports pour soutiens-gorge, kets et éléments matriciels."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Notation Dirac

La mécanique quantique écrit les états sous forme de kets, leurs duaux sous forme de soutiens-gorge et les produits internes sous forme de paires entre parenthèses. Construire la notation à la main à partir de `\langle`, `|` et `\rangle` fonctionne, mais c'est fastidieux et les délimiteurs n'évoluent pas avec le contenu. Le package `braket` fournit des commandes qui assemblent la notation et dimensionnent tout pour qu'il s'adapte.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## Ce que fait chaque commande

`\braket{\psi|\phi}` définit le produit interne complet : des crochets angulaires à l'extérieur, une barre verticale entre les deux états, tous de même hauteur. Avec deux barres, `\braket{\psi|A|\phi}` devient l'élément matriciel de l'opérateur A entre les deux états, la forme utilisée pour les valeurs attendues et les calculs de perturbations. Le package fournit également `\bra{\psi}` et `\ket{\phi}` pour les deux moitiés séparément. Un bare ket est la manière habituelle de nommer un État en prose.

`\set{\vec{x}|x > 0}` est un bonus du même package : une notation set-builder avec des accolades et une barre centrale, utile bien au-delà de la physique.

La taille est la véritable raison d’utiliser le package. Mettez une fraction ou une somme à l'intérieur de « \braket » et les parenthèses et les barres s'étirent pour correspondre. Un `\langle ... \rangle` construit à la main a besoin de `\left` et `\right` sur chaque délimiteur et a toujours tendance à dériver de manière disproportionnée.

## Alternatives et voisins

Le package `physics` propose un ensemble similaire, comprenant `\bra`, `\ket`, `\ev` pour les valeurs attendues et `\mel` pour les éléments matriciels, ainsi que des raccourcis pour les dérivées et les commutateurs. Les deux packages définissent `\bra` et `\ket`, alors choisissez-en un par document plutôt que de charger les deux. Dans un modèle où vous ne pouvez pas ajouter de packages, `\langle \psi | \phi \rangle` avec `\left`/`\right` autour du contenu haut produit le même résultat avec plus de saisie.

Pour les diagrammes de Feynman, qui résident souvent dans les mêmes documents, des packages tels que « tikz-feynman » s'appuient sur TikZ ; il s'agit d'une compétence de dessin distincte, plus proche dans son esprit des [diagrammes commutatifs](/learn/commutative-diagrams/) que de tout ce qui se trouve sur cette page.

L'erreur courante est de taper `<\psi|\phi>` avec les caractères d'angle du clavier. Ce sont les relations inférieur à et supérieur à, donc LaTeX les espace à titre de comparaison et les dessine à la mauvaise hauteur. Les vrais crochets Dirac proviennent de `\langle` et `\rangle` ou, mieux, des commandes ci-dessus. La différence est évidente au moment où vous placez les deux formulaires l'un à côté de l'autre dans le [terrain de jeu en direct](/live/).