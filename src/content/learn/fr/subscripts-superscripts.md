---

title: "Des indices qui n'explosent pas"
description: "Accolades pour les scripts à plusieurs caractères, les nombres premiers, les points."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Des indices qui n'explosent pas

Les indices et les exposants sont la première syntaxe mathématique que tout le monde apprend dans LaTeX, et également la source du premier résultat déroutant que tout le monde produit. Le trait de soulignement `_` abaisse ce qui suit, le caret `^` l'augmente, et les deux s'appliquent à exactement un caractère, sauf indication contraire de votre part. Cette règle d’un caractère est à l’origine de presque tous les index mutilés que vous verrez.

## Les formulaires de base

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

`x_i` met un seul `i` en position d'indice et `x^2` lève un seul `2`. Parce que `_` et `^` ne récupèrent que le jeton suivant, tout ce qui dépasse un caractère doit être placé entre accolades : `x_{ij}` insère les deux lettres, et `x^{2n}` élève le `2n` entier. Vous pouvez attacher à la fois un indice et un exposant au même symbole, dans n'importe quel ordre, et LaTeX les empile correctement : `x_i^2`. Les scripts s'imbriquent également. Dans `x_{i_j}`, le `j` est un indice du `i`, qui est lui-même un indice de `x`, et chaque niveau est progressivement plus petit.

Les scripts multi-caractères **doivent** utiliser des accolades : `x_ij` est `x_i` puis `j`. LaTeX ne signale pas cela comme une erreur, car « x_i » suivi d'une variable « j » est une mathématique parfaitement légale. La formule est compilée, semble presque exacte au premier coup d’œil et signifie quelque chose de différent. Prenez l'habitude d'un appareil dentaire dès le début. En cas de doute, préparez le script.

Le même piège apparaît dans les limites. `\sum_i=1^n` ne fait pas ce à quoi il ressemble. La forme correcte est `\sum_{i=1}^{n}`, où l'intégralité de `i=1` est un indice entre accolades. Si vous utilisez entièrement `_` ou `^` en dehors du mode mathématique, vous obtenez l'erreur classique couverte dans [Dollar manquant inséré](/learn/missing-dollar/).

## Nombres premiers et points

```latex
f' f'' \dot{x} \ddot{x}
```

Pour les produits dérivés, vous souhaitez rarement un exposant littéral. La clé d'apostrophe produit un nombre premier : `f'` s'affiche comme f avec un nombre premier, `f''` avec deux, et LaTeX gère lui-même l'élévation et l'espacement, il n'est donc pas nécessaire de `f^{\prime}`. Pour les dérivées temporelles dans le style physique, `\dot{x}` place un seul point sur x et `\ddot{x}` en place deux. Ce sont des accents, donc ils prennent leur argument entre accolades.

Encore une subtilité : si vous avez besoin d'un exposant après un nombre premier, enchaînez-les simplement, comme dans `f'^2`. LaTeX les combine en un seul cluster en exposant.

## Vérifiez votre sortie

Le moyen le plus rapide d'internaliser la règle des accolades est de taper `x_ij` et `x_{ij}` l'un à côté de l'autre dans le [terrain de jeu en direct](/live/) et d'observer la différence s'afficher. Chaque fois qu'un index semble légèrement erroné dans un document compilé, la première chose à vérifier est une paire d'accolades manquantes.