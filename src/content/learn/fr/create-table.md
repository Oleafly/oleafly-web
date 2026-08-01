---

title: "Une table qui ressemble à une table en papier"
description: "tabulaire, règles des booktabs, légende, étiquette."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Une table qui ressemble à une table en papier

Les tables dans LaTeX utilisent deux environnements imbriqués avec des tâches différentes. Le « tabulaire » intérieur construit la grille de cellules. La « table » externe fait de cette grille un flotteur, elle peut donc contenir un numéro, une légende et une étiquette, et ainsi LaTeX peut la placer là où la page a de la place. Ajoutez le package « booktabs » pour les règles horizontales et le résultat ressemble à un tableau provenant d'un article publié, pas à une capture d'écran d'une feuille de calcul.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## L'environnement extérieur

L'argument `[htbp]` indique où LaTeX peut placer le flottant : ici dans le texte, en haut d'une page, en bas ou sur une page séparée de flottants. Il les essaie dans cet ordre, et accorder les quatre empêche la table de dériver trop loin ; la mécanique est expliquée dans [où les flotteurs atterrissent réellement](/learn/position-figures/). `\centering` centre la grille horizontalement. Le `\caption` imprime la légende numérotée et, par convention, les légendes des tableaux vont au-dessus du tableau, contrairement aux légendes des figures, qui vont en dessous. `\label` doit venir après `\caption`, car une étiquette enregistre le numéro émis le plus récemment, comme indiqué dans [légendes et étiquettes](/learn/captions-labels/). Avec l'étiquette en place, `Table~\ref{tab:results}` dans votre texte imprime toujours le bon numéro.

## La grille intérieure

Le `{lcc}` après `\begin{tabular}` déclare une colonne par lettre : `l` est aligné à gauche, `c` est centré et `r` serait aligné à droite. Trois lettres signifient trois colonnes, et chaque ligne doit fournir exactement autant de cellules. Dans une ligne, `&` sépare les cellules et `\\` termine la ligne. Les colonnes de texte se lisent généralement mieux à gauche, tandis que les colonnes numériques courtes sont généralement centrées.

Les trois règles proviennent de « booktabs ». `\toprule` ouvre la table, `\midrule` sépare la ligne d'en-tête des données et `\bottomrule` la ferme. Celles-ci remplacent la simple commande `\hline` et sont livrées avec un espacement correctement réglé au-dessus et en dessous, ce qui explique en grande partie pourquoi le tableau semble défini de manière professionnelle. Pas de lignes verticales et pas de règle entre les lignes de données : le style « booktabs » laisse volontairement les deux de côté. Le raisonnement est présenté dans [tableaux à trois règles](/learn/booktabs-beautiful/).

## Notes pratiques

Les erreurs de débutant les plus fréquentes sont une inadéquation entre le nombre de séparateurs `&` et les colonnes déclarées, et un `\\` oublié à la fin d'une ligne, qui produisent tous deux des messages d'erreur confus pointant vers la ligne suivante. Si vous préférez ne pas compter manuellement les cellules, créez la grille visuellement avec le [générateur de table](/tools/table-generator/) et collez le résultat dans votre document.