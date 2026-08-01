---

title: "Boîtes d'organigramme alignées"
description: "bibliothèque de positionnement afin que les colonnes partagent un bord."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Boîtes d'organigramme alignées

Un organigramme semble amateur pour exactement une raison : des cases qui s’alignent presque. TikZ évite le problème structurellement, car chaque case est placée par rapport à une autre, de sorte qu'une colonne de cases partage un axe par construction plutôt que par observation. Le deuxième ingrédient est un style nommé, donc toutes les boîtes s'accordent sur leur forme et leur taille minimale. Voici un flux vertical en trois étapes :

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Définir un style une fois

La ligne `box/.style={...}` crée un style réutilisable nommé `box`. Son contenu est constitué d'options de nœud ordinaires : "draw" donne une bordure au nœud, "coins arrondis" l'adoucit, "align=center" centre le texte multiligne à l'intérieur du nœud et "largeur minimale = 2,8 cm" force chaque boîte à au moins cette largeur afin que les étiquettes courtes ne se rétrécissent pas en de minuscules boîtes. A partir de là, `\node[box]` applique l'ensemble. Lorsque vous souhaitez une couleur de remplissage ou une largeur plus grande, modifiez une ligne et l'ensemble du graphique est mis à jour. C’est un diagramme que vous conservez, pas un diagramme que vous redessinez.

## Espacement dans deux directions

`node distance=10mm and 14mm` définit les écarts par défaut utilisés par la bibliothèque `positioning` : la première valeur est la distance verticale, la seconde l'horizontale. Une fois cela en place, `below=of i` place la zone de processus 10 mm en dessous de la zone de saisie, bord à bord et parfaitement centrée sur celle-ci. Une deuxième colonne utiliserait « right=of p » et atterrirait à 14 mm sur le côté. Étant donné que chaque placement enchaîne un nœud existant, insérer une étape signifie ajouter un nœud et mettre à jour une référence « ci-dessous = de ». Tout ce qui se passe en aval évolue avec lui. Vous pouvez également remplacer la distance par nœud, comme dans « ci-dessous = 15 mm de i ».

## Connecter les étapes

Chaque `\draw[-Latex] (i) -- (p);` dessine une flèche d'un nœud nommé au suivant, avec `-Latex` sélectionnant une pointe de flèche solide dans la bibliothèque `arrows.meta` à l'extrémité de destination. Les flèches se connectent automatiquement aux bordures des nœuds. Pour une branche de décision, dessinez à partir d'ancres spécifiques, par exemple `(p.east)` pour partir du côté droit, et tracez un itinéraire avec des virages tels que `-- ++(2,0) |-` une fois que le graphique a besoin de coins.

La sortie TikZ ne s'affiche pas dans ces aperçus sur la page, alors compilez l'extrait pour le voir. L'erreur classique dans les organigrammes est de placer quelques cases avec des coordonnées absolues "juste cette fois" : ces cases sont celles qui finissent par être mal alignées après la prochaine modification. Conservez chaque placement relatif et consultez [nœuds et flèches](/learn/tikz-nodes-arrows/) pour les options de placement sous-jacentes.