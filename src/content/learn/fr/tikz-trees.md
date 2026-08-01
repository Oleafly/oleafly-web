---

title: "Arbres et graphiques simples"
description: "syntaxe enfant et boutons d'espacement."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Arbres et graphiques simples

Des hiérarchies apparaissent constamment : arbres d'analyse, arbres de décision, présentations de fichiers, taxonomies. Dessiner une boîte à la fois avec le « positionnement » fonctionne, mais garder les frères et sœurs uniformément répartis et les niveaux uniformément espacés à la main est fastidieux. La bibliothèque « arbres » de TikZ vous permet à la place de décrire la hiérarchie elle-même, à l'aide d'opérations « enfants » imbriquées, et calcule la disposition pour vous :

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## Lecture de la syntaxe enfant

L'image contient une seule déclaration. Il commence par la racine, `\node{A}`, et chaque `enfant{...}` qui y est attaché déclare un sous-arbre. Un enfant contient généralement un « nœud{...} » pour sa propre étiquette, et peut contenir d'autres opérations « enfants », c'est ainsi que « C » obtient les enfants « D » et « E ». L'imbrication des accolades reflète l'imbrication de l'arbre, vous pouvez donc lire la structure directement à partir de l'indentation. TikZ place chaque niveau en dessous du précédent et dessine automatiquement les bords de connexion. La seule instruction se termine par un seul point-virgule après l’accolade finale. Un point-virgule manquant ou supplémentaire à l'intérieur de la structure est la cause habituelle des erreurs ici.

## Les trois boutons de disposition

Les options en haut contrôlent l’apparence et l’espacement. `every node/.style={draw, circle, minimum size=7mm}` applique un style à tous les nœuds à la fois : chacun obtient une bordure dessinée, une forme circulaire et un diamètre minimum de 7 mm afin que les lettres simples produisent des cercles uniformes. `level distance=12mm` définit l'écart vertical entre un parent et ses enfants. « distance entre frères et sœurs = 18 mm » définit l'écart horizontal entre les enfants adjacents du même parent.

La distance entre frères et sœurs est le bouton que vous réglerez le plus. La bibliothèque `trees` réserve la même largeur pour chaque sous-arbre à un niveau donné, donc des sous-arbres larges peuvent entrer en collision si la valeur est trop petite. Le remède standard consiste à élargir l'espacement près du sommet, là où les sous-arbres sont les plus larges, avec des paramètres par niveau tels que `level 1/.style={sibling distance=36mm}` et `level 2/.style={sibling distance=18mm}`. Si vos étiquettes diffèrent beaucoup en largeur, passez des cercles aux rectangles en supprimant « cercle » du style partagé.

## Au-delà des petits arbres

Les bords reprennent le style via `edge from parent/.style`, par exemple pour ajouter des pointes de flèches ou des lignes plus épaisses. Pour les arbres au-delà d'une douzaine de nœuds, ou pour les graphes généraux avec des cycles, la bibliothèque « arbres » devient limitante. Le package « forest » gère les grands arbres avec un emballage automatique. La bibliothèque `graphs` avec les algorithmes `graphdrawing` couvre les graphiques arbitraires, bien que ce chemin nécessite LuaLaTeX. TikZ ne s'affiche pas dans ces aperçus sur la page, alors compilez l'exemple pour voir la mise en page. Commencez par les bases de [votre première image TikZ](/learn/tikz-intro/) si cette syntaxe est nouvelle.