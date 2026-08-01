---

title: "Panneaux étiquetés a, b, c"
description: "sous-légende pour les figures à plusieurs panneaux sous une seule légende."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Panneaux étiquetés a, b, c

Les articles ont constamment besoin de figures à plusieurs panneaux : l'architecture dans le panneau (a), la courbe d'entraînement dans (b), une ablation dans (c), partageant toutes un numéro de figure et une légende globale. La manière simple de construire ceci est le package `subcaption`, qui vous donne un environnement `subfigure` qui gère automatiquement le lettrage (a), (b), les légendes par panneau et le référencement.

## Le modèle

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Voici ce que fait chaque pièce. L'environnement externe `figure` est un flottant normal, et `[htbp]` répertorie les emplacements que LaTeX peut essayer, dans l'ordre : ici dans le texte, en haut d'une page, en bas d'une page ou dans une page flottante dédiée. Chaque « sous-figure » est une boîte d'une largeur indiquée, ici « 0,48\textwidth » (48 pour cent de la largeur du texte). Deux panneaux à 0,48 laissent un petit espace, et le « \hfill » entre eux s'étire de sorte que les panneaux affleurent les marges gauche et droite. À l'intérieur de chaque panneau, `width=\linewidth` redimensionne l'image à la largeur du panneau, pas à la page entière. Ce dernier détail est celui que les gens se trompent le plus souvent.

Le `\caption` à l'intérieur d'une `sous-figure` produit la petite étiquette de style "(a) First" sous ce panneau. Le `\caption` à la fin, à l'intérieur de `figure` mais à l'extérieur de toute `sous-figure`, est la légende principale qui porte le numéro de la figure. Conservez chaque `\label` immédiatement après son `\caption`, car une étiquette enregistre le numéro le plus récemment émis, comme expliqué dans [légendes et étiquettes](/learn/captions-labels/).

## Panneaux de référencement

Avec les étiquettes ci-dessus, `\ref{fig:p}` imprime le numéro de la figure, disons 2, tandis que `\ref{fig:p-a}` imprime 2a. Si vous voulez juste la lettre, `\subref{fig:p-a}` imprime uniquement "a", pratique pour des phrases comme "panneaux (a) et (b)". C'est le véritable gain de la « sous-légende » par rapport à la saisie manuelle de « (a) » sous les images. Les lettres se renumérotent lorsque vous ajoutez ou réorganisez des panneaux, et chaque référence reste correcte.

## Lignes, espacement et erreur courante

Pour un troisième panneau, réduisez les largeurs à environ « 0,31\textwidth » et ajoutez une autre « sous-figure » avec « \hfill » entre chaque paire, ou commencez une nouvelle ligne en laissant une ligne vide entre les rangées de sous-figures. Cependant, une ligne vide à l'intérieur d'une ligne est l'erreur classique : toute ligne vide entre deux environnements de « sous-figure » commence un nouveau paragraphe, qui empile les panneaux verticalement au lieu de les placer côte à côte. Si vos panneaux refusent de s'asseoir sur une seule rangée, recherchez d'abord une ligne vide parasite et rappelez-vous que `%` à la fin d'une ligne commente l'espace invisible de fin de ligne qui peut également pousser un panneau trop large pour tenir.