---

title: "Diagrammes commutatifs"
description: "Flèches et étiquettes tikz-cd sans soupe coordonnée."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Diagrammes commutatifs

Un diagramme commutatif est une grille d'objets reliés par des flèches étiquetées, l'image standard en théorie des catégories, en algèbre et en topologie. Raw TikZ peut en dessiner un, mais placer chaque nœud par coordonnées est lent et fragile. Le package `tikz-cd` enveloppe TikZ dans une syntaxe de type matricielle : vous disposez les objets comme un tableau et décrivez chaque flèche par sa direction.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## Lecture de la syntaxe

La grille fonctionne comme une matrice : `&` sépare les colonnes et `\\` sépare les lignes, donc ce diagramme a A et B sur la ligne du haut et C et D en bas. Chaque `\arrow[...]` appartient à la cellule dans laquelle il est écrit et pointe vers elle. La première option est la direction, orthographiée avec les lettres `r`, `l`, `u` et `d` : `\arrow[r]` va d'une cellule vers la droite, `\arrow[d]` une cellule vers le bas. Les lettres se combinent et se répètent pour les diagonales et les portées plus longues, donc « rd » est un pas en bas à droite et « rr » s'étend sur deux colonnes.

Une étiquette entre guillemets chevauche la flèche. Par défaut, il se trouve d'un côté ; un prime après le guillemet fermant, comme dans `"g"'`, le retourne de l'autre côté. Dans l'exemple, les nombres premiers conservent les quatre étiquettes à l'extérieur du carré, ce qui est l'arrangement propre habituel.

## Plus d'options de flèches

D'autres options s'empilent après la direction et l'étiquette pour modifier le style de la flèche. « crochet » plie la queue en une flèche d'inclusion, « deux têtes » double la tête pour une surjection, « pointillé » marque une carte que vous affirmez plutôt que de supposer, et « Rightarrow » produit la flèche à double tige utilisée pour les transformations naturelles. Une flèche de propriété universelle typique indique `\arrow[rd, pointillé, "\exists u"']`. Lorsqu'un diagramme semble à l'étroit, les options d'espacement de l'environnement sont utiles, par exemple `\begin{tikzcd}[column sep=large]`.

## Notes pratiques

`tikz-cd` charge TikZ lui-même, donc aucune ligne `\usepackage{tikz}` distincte n'est nécessaire, et les diagrammes sont compilés avec un moteur standard et aucun outil de dessin externe. L'erreur structurelle la plus courante est une grille inégale : des lignes avec un nombre différent de séparateurs « & » déplacent les objets dans les mauvaises colonnes, et les flèches atterrissent alors à des endroits impairs. Commencez à partir d'un carré de travail comme celui ci-dessus, agrandissez-le d'une ligne ou d'une colonne à la fois et recompilez au fur et à mesure. Les diagrammes sont beaucoup plus faciles à déboguer à l'œil nu qu'à partir de la source, et le [terrain de jeu en direct](/live/) vous donne ce retour au fur et à mesure que vous tapez.