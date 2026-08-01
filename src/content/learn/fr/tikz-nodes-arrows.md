---

title: "Nœuds et flèches"
description: "Nœuds nommés, placement relatif, pointes de flèches."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Nœuds et flèches

Presque tous les diagrammes TikZ se résument à deux ingrédients. Un nœud est un élément de contenu positionné, généralement une boîte ou un cercle étiqueté. Une arête est une ligne ou une flèche reliant deux nœuds. Une fois que vous pouvez placer des nœuds et les joindre, les organigrammes, les pipelines et les diagrammes fonctionnels constituent tous le même exercice à différentes tailles. L'exemple ci-dessous place deux boîtes nommées et dessine une flèche étiquetée entre elles :

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Nommer et placer les nœuds

Dans `\node[draw] (src) {Source};`, les options de crochet stylisent le nœud, et `draw` signifie dessiner sa bordure, sans laquelle vous obtenez du texte flottant. Le `(src)` est le nom du nœud et `{Source}` est son contenu. Le nom est la partie importante : il permet aux autres commandes de faire référence à ce nœud sans connaître ses coordonnées.

Le deuxième nœud montre pourquoi c'est important. `right=2cm of src` vient de la bibliothèque `positioning` et place `dst` à deux centimètres à droite de `src`, mesurés entre leurs bordures. La bibliothèque fournit également `left=of`, `above=of`, `below=of` et des combinaisons diagonales comme `above right=of`. Construisez un diagramme de cette façon (chaque nœud par rapport à un nœud existant) et la mise en page reste intacte lorsque le texte change de taille. Les coordonnées absolues comme `\node at (4,2)` ont toujours des utilités, mais un diagramme construit sur elles nécessite une renumérotation manuelle à chaque fois qu'une case s'agrandit.

## Dessiner la flèche

`\draw (src) -- (dst);` trace une ligne droite entre les deux nœuds nommés, et TikZ commence et termine automatiquement la ligne aux bordures des nœuds plutôt qu'à leurs centres. L'option `[-{Latex}]` spécifie les pointes des flèches : rien avant le trait d'union signifie pas de pointe de queue, et `Latex` après sélectionne une pointe de flèche solide dans la bibliothèque `arrows.meta` à la destination. Écrire `{Latex}-{Latex}` donnerait une flèche à deux pointes.

Le `node[above] {edge}` à mi-chemin est une étiquette attachée à la ligne elle-même. Un nœud écrit à l'intérieur d'un chemin est placé à ce point du chemin, à mi-chemin par défaut, et « au-dessus » le déplace juste au-dessus de la ligne afin que le texte ne repose pas sur le trait. Il s'agit de la manière standard d'annoter les transitions et les flux de données.

## Des habitudes qui rapportent

Nommez chaque nœud, même dans de petits diagrammes. Les nœuds sans nom ne peuvent pas être connectés et les petits diagrammes restent rarement petits. Préférez le placement relatif du « positionnement » aux coordonnées absolues pour la même raison. Chaque instruction TikZ se termine par un point-virgule. En omettre une est l’erreur TikZ la plus courante, et les messages sont souvent très éloignés du véritable problème. Pour organiser de nombreuses boîtes en lignes et colonnes bien rangées, continuez avec [boîtes d'organigramme alignées] (/learn/tikz-flowchart/).