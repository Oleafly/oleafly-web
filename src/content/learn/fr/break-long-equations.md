---

title: "Des équations qui ne conviennent pas"
description: "multiline et split lorsque la mesure est trop étroite."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Équations qui ne rentrent pas

Tôt ou tard, une dérivation produit une équation plus large que le bloc de texte, et LaTeX la laissera couler dans la marge plutôt que de deviner où la casser. Deux environnements `amsmath` vous permettent de placer vous-même la pause : `multline` pour une seule expression longue et `split` pour une pause qui doit rester alignée.

## multiligne

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

« multiline » convient à une formule longue sans point d'alignement naturel. Vous choisissez la rupture avec `\\`, et l'environnement gère la mise en page : la première ligne est alignée à gauche, la dernière à droite et toutes les lignes du milieu sont centrées. L'expression entière obtient un numéro d'équation, placé sur la dernière ligne. La convention est de rompre avant un opérateur binaire, donc le « + » ouvre la ligne de suite et le lecteur voit d'un coup d'œil que l'expression continue.

## diviser

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

`split` produit également un nombre unique, mais aligne ses lignes comme le fait `align`, avec `&` marquant le point d'alignement. Il ne s'agit pas d'un environnement autonome ; il vit à l'intérieur d'une « équation » ou d'un autre environnement d'affichage, qui fournit le nombre. Ici, le `&` se trouve avant le signe égal sur la première ligne, et la suite commence par `&\quad`, un point d'alignement vide suivi d'un quad d'espace, donc la deuxième ligne est en retrait juste après le signe égal. Ce tiret indique au lecteur qu'il s'agit toujours du membre de droite et non d'une nouvelle équation.

## Choisir entre eux

Utilisez « multiline » lorsque l'équation est une longue somme sans structure digne d'être alignée. Utilisez « split » lorsqu'il y a un signe égal sous lequel la suite doit être suspendue. Si vous avez plusieurs équations véritablement distinctes, aucune n’est correcte ; c'est un travail pour « aligner », couvert dans [équations multilignes qui s'alignent](/learn/align-equations/).

Avant d’opter pour l’un ou l’autre, envisagez de réécrire les mathématiques. Nommer une sous-expression dans la phrase précédente, la factoriser ou la diviser en deux équations permet souvent de contrôler la largeur et de mieux se lire également. Préférez cela plutôt que de réduire le type. Un écran serré pour s’adapter donne presque toujours une lecture pire qu’une cassure nette.

Une erreur à connaître : `split` utilisé seul, sans `équation` englobante, s'arrête avec une "Package amsmath Error". Enveloppez-le d’abord, puis compilez-le. Les deux environnements sont rapides à expérimenter dans le [terrain de jeu en direct](/live/).