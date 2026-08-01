---

title: "Tables à trois règles"
description: "toprule, midrule, bottomrule et sauter des lignes verticales."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Tableaux à trois règles

Ouvrez n'importe quel journal bien rédigé et regardez les tableaux. Presque tous suivent le même design : une règle en haut, une règle sous l’en-tête, une règle en bas, et rien d’autre. Pas de lignes verticales, pas de grille. Il s'agit du style « booktabs », nommé d'après le package qui l'implémente, et y passer est généralement la plus grande mise à niveau visuelle que vous puissiez apporter aux tables LaTeX. Le package fournit trois commandes qui correspondent aux trois règles :

```latex
\toprule
...
\midrule
...
\bottomrule
```

Dans un tableau complet, ils ressemblent à ceci :

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## Ce que les règles remplacent

Sans `booktabs`, les gens tracent des lignes avec `\hline` et des barres verticales dans la spécification de colonne, comme dans `{|l|c|c|}`. Le résultat est une cage : chaque cellule est enfermée, avec le texte à l'étroit par rapport aux règles car `\hline` n'ajoute aucune marge de manœuvre. Les commandes `booktabs` remplacent `\hline` par des règles qui comportent un remplissage vertical intégré, et `\toprule` et `\bottomrule` sont légèrement plus lourdes que `\midrule`, donc la table a un cadre visible et une division intérieure plus claire. Cette différence d’espacement et de poids est tout le truc. Les données ont de la place, l’en-tête est clairement séparé et rien ne rivalise avec les chiffres.

Les règles verticales sont simplement omises. L’alignement des colonnes montre déjà au lecteur où se termine une colonne et où commence la suivante, et les lignes verticales ajoutent principalement de l’encre sans ajouter de clarté. La documentation `booktabs` va jusqu'à refuser de les prendre en charge.

## Règles partielles pour les en-têtes groupés

Lorsqu'un en-tête s'étend sur plusieurs colonnes, par exemple « Scores » situé au-dessus de la précision et de F1, utilisez `\cmidrule` pour souligner uniquement ces colonnes :

```latex
\cmidrule(lr){2-3}
```

La plage `{2-3}` indique les colonnes couvertes par la règle, et l'option `(lr)` coupe un peu les extrémités gauche et droite afin que les règles voisines ne fusionnent pas en une seule longue ligne. Cela s'associe à `\multicolumn`, affiché dans [cellules qui s'étendent sur des lignes ou des colonnes](/learn/merged-cells/).

## Numéros et alignement

Un tableau de mesures se lit mieux lorsque les points décimaux s'alignent. Le package `siunitx` fournit un type de colonne `S` qui aligne automatiquement les nombres sur le marqueur décimal, de sorte que `0.9` et `0.88` se placent correctement l'un sous l'autre même avec un nombre de chiffres différent. Cela vaut la peine de l'adopter une fois que vos tables contiennent des données réelles.

L'erreur courante est de mélanger les systèmes : un `\hline` ici, un `\midrule` là et une spécification de colonne avec des barres restantes d'un modèle. Choisissez le style à trois règles et appliquez-le à chaque tableau du document. La cohérence est l’essentiel de ce qui donne au style un aspect délibéré. Une présentation complète du flotteur `table` environnant se trouve dans [une table qui ressemble à une table papier](/learn/create-table/).