---

title: "Définitions par morceaux"
description: "L’environnement des cas pour les conditions sous une seule fonction."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Définitions par morceaux

Une fonction par morceaux donne différentes formules sur différentes parties de son domaine : la valeur absolue, l'activation ReLU, un barème de tranches d'imposition. La convention de composition est une seule grande accolade gauche avec une ligne par cas, chaque ligne montrant la formule et la condition sous laquelle elle s'applique. Le package `amsmath` fournit l'environnement `cases`, qui produit exactement cette disposition sans aucun dimensionnement manuel des accolades.

## L'environnement des dossiers

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Lecture de cette ligne par ligne : le tout se trouve à l'intérieur de `\[ ... \]`, il affiche donc les mathématiques sur sa propre ligne. `f(x) =` est un calcul mathématique ordinaire, puis `\begin{cases}` ouvre le bloc par morceaux. A l'intérieur, chaque ligne comporte deux colonnes séparées par `&` : la formule à gauche, la condition à droite. Les lignes se terminent par `\\`, sauf que la dernière ligne n'en a pas besoin. Lors de la compilation, LaTeX dessine une accolade gauche suffisamment haute pour s'étendre sur les deux lignes et aligne les formules dans une colonne et les conditions dans une autre.

Le `&` fait un vrai travail ici. Sans cela, chaque ligne serait un seul blob et les conditions ne s’aligneraient pas verticalement. Avec lui, `x^2` et `-x` partagent un bord gauche, et `x \ge 0` et `x < 0` partagent leur propre bord gauche, ce qui rend la définition numérisable.

Deux choses doivent être en place pour que cela soit compilé. Premièrement, `\usepackage{amsmath}` dans le préambule, puisque `cases` ne fait pas partie du cœur de LaTeX. Deuxièmement, l’environnement doit être en mode mathématique. `cases` crée du contenu mathématique mais n'ouvre pas le mode mathématique par lui-même. Si l'un ou l'autre est manquant, vous obtiendrez une erreur "Cas d'environnement non définis" ou une erreur "$ manquant inséré". Ce dernier est expliqué dans [Dollar manquant inséré](/learn/missing-dollar/).

## Ajout des mots

La plupart des définitions par morceaux publiées incluent le mot « si », et souvent un « sinon » final. Étant donné que la colonne de condition est en mode mathématique, les mots simples ont besoin de `\text{...}` pour apparaître dans la police du document avec un espacement approprié :

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Notez l'espace à l'intérieur de `\text{if }`. Le mode mathématique ignore les espaces que vous tapez, mais à l'intérieur de `\text` les espaces sont réels, donc en mettre un avant l'accolade fermante sépare "if" de la condition qui suit.

## Variantes et une erreur courante

Si les formules sont des fractions grandes et semblent exiguës, le package « mathtools » propose « dcases », un remplacement instantané qui définit chaque formule dans son style d'affichage. Il existe également des « cas » pour la situation d'image miroir où le corset appartient à droite.

L'erreur la plus fréquente est d'oublier `\\` entre les lignes, ce qui fusionne silencieusement deux observations en une seule longue ligne. Si votre sortie compilée affiche des conditions exécutées dans des formules, comptez d'abord vos sauts de ligne. Vous pouvez expérimenter l'environnement en direct dans le [terrain de jeu](/live/).