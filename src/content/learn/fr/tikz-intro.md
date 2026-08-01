---

title: "Votre première photo TikZ"
description: "Nœuds, bords, un pipeline à trois cases qui reste vectoriel."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# Votre première photo TikZ

TikZ est un langage de dessin qui réside dans votre document LaTeX. Au lieu d'importer un diagramme exporté depuis un autre outil, vous le décrivez sous forme de texte et le compilateur le dessine. Le résultat est que le résultat est constitué de graphiques vectoriels utilisant les propres polices de votre document, de sorte que les étiquettes correspondent exactement au texte environnant et restent nettes quel que soit le zoom. Le coût est que vous écrivez les coordonnées et les options au lieu de faire glisser les cases. Pour les diagrammes construits à partir de cases et de flèches, le compromis en vaut généralement la peine. Voici un pipeline à trois cases, la première image canonique :

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Nœuds

Un nœud est un élément de contenu, généralement du texte, placé à un endroit, éventuellement entouré d'une forme. Dans `\node[draw, arrondis coins] (a) {Input};` les options entre crochets disent de dessiner la bordure du nœud et d'arrondir ses coins, le `(a)` donne au nœud un nom auquel vous pourrez vous référer plus tard, et `{Input}` est le texte à l'intérieur. Le deuxième nœud utilise `right=of a`, de la bibliothèque `positioning`, qui le place à droite du nœud `a` à la distance définie par `node distance=1.5cm` dans les options de l'environnement. Placez les nœuds les uns par rapport aux autres plutôt qu'à des coordonnées absolues, et l'ensemble du diagramme s'ajuste lorsqu'une étiquette s'allonge.

## Bords

Une arête est une ligne reliant deux points. Parce que les nœuds sont nommés, vous les connectez par leur nom : `\draw (a) -- (b);` trace une ligne droite du nœud `a` au nœud `b`. TikZ commence et termine la ligne aux frontières des nœuds plutôt qu'à leurs centres. L'option `[-Latex]` définit le style de pointe de flèche de la bibliothèque `arrows.meta`, donnant à la ligne une pointe de flèche solide à sa destination. L'astuce s'applique une fois par chemin, à sa fin, c'est pourquoi l'exemple utilise deux commandes `\draw`. Un seul chemin `(a) -- (b) -- (c)` placerait une pointe de flèche uniquement en `c`.

## Où aller ensuite

Enveloppez le `tikzpicture` dans un environnement `figure` lorsqu'il a besoin d'une légende et d'un numéro, exactement comme une image. Le code TikZ ne s'affiche pas dans ces aperçus sur la page, alors compilez l'extrait dans un projet pour voir le résultat. Dans Oleafly, Diagram Composer peut également produire des TikZ modifiables comme point de départ. L'erreur de débutant la plus courante consiste à oublier le point-virgule qui termine chaque commande TikZ, ce qui produit une longue erreur déroutante. Lorsqu'un diagramme dépasse trois cases, continuez avec [nœuds et flèches](/learn/tikz-nodes-arrows/) et [boîtes d'organigramme alignées](/learn/tikz-flowchart/).