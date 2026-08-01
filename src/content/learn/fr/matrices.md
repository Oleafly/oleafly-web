---

title: "Matrices et tableaux"
description: "colonnes pmatrix, bmatrix, vmatrix et tableau personnalisé."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Matrices et tableaux

Une matrice dans LaTeX est une grille de cellules : `&` sépare les colonnes, `\\` sépare les lignes et un environnement enveloppe la grille dans la bonne paire de délimiteurs. Les environnements matriciels proviennent de « amsmath », ce paquet doit donc être dans votre préambule avant toute compilation.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## Les environnements matriciels

Tous trois partagent le même corps. Seuls les délimiteurs environnants changent. `pmatrix` enveloppe la grille entre parenthèses, le style le plus courant pour les matrices et les vecteurs. « bmatrix » utilise des crochets et « vmatrix » utilise des barres verticales simples, la notation standard pour un déterminant. Il existe également une « matrice » simple sans délimiteurs, « Bmatrix » avec des accolades et « Vmatrix » avec des doubles barres pour les normes. À l'intérieur, `a & b` remplit les deux colonnes d'une ligne, `\\` commence la ligne suivante et chaque ligne doit porter le même nombre de séparateurs `&`.

Ces environnements doivent apparaître en mode mathématique. Enveloppez-les dans `\[ ... \]` ou utilisez-les dans une équation. Pour une petite matrice au milieu d'une phrase, `smallmatrix`, également de `amsmath`, définit une version compacte qui n'étire pas la ligne : `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`.

## Tableau personnalisé

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Lorsque vous avez besoin d'un contrôle par colonne, « array » est l'outil général. Son argument obligatoire est une spécification de colonne : ici `r|cc` déclare une colonne alignée à droite, une règle verticale, puis deux colonnes centrées. Les lettres d'alignement sont « l », « c » et « r », et « | » trace une règle entre les colonnes. `\hline` entre les lignes dessine une règle horizontale sur toute la largeur. `array` ne dessine aucun délimiteur externe qui lui est propre. Associez-le avec `\left(` et `\right)` si vous les souhaitez. C'est le frère en mode mathématique de l'environnement « tabulaire » utilisé pour les tableaux dans le texte.

## Erreurs courantes

L'erreur « L'onglet d'alignement supplémentaire a été remplacé par \cr » signifie qu'une ligne a plus de séparateurs `&` que le nombre de colonnes ne le permet, ce qui remonte généralement à un `\\` manquant à la fin de la ligne précédente. "Environnement pmatrix non défini" signifie que `\usepackage{amsmath}` est manquant. Une matrice collée en dehors du mode mathématique échoue avec « $ manquant inséré ». Voir [bases du mode mathématique](/learn/math-mode/) si les délimiteurs sont nouveaux. La comparaison d'un deux par deux dans chaque style de délimiteur prend quelques secondes dans le [terrain de jeu en direct](/live/).