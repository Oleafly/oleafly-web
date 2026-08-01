---

title: "Dérivées et intégrales"
description: "Dérivées ordinaires et partielles, intégrales définies, espaces minces avant différentielles."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Dérivées et intégrales

La notation calcul est l'endroit où LaTeX commence à gagner sa vie. Les fractions dérivées empilées, les signes intégraux avec limites et les points sur les variables sont tous une ou deux commandes chacun. Cette leçon couvre la poignée de commandes qui produisent presque tous les dérivés et intégrales que vous écrirez, ainsi que les petites habitudes d'espacement qui séparent les papiers polis des brouillons.

## Dérivés

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Une dérivée ordinaire n'est qu'une fraction : `\frac{dy}{dx}` empile `dy` sur `dx`. Pour les dérivées partielles, remplacez le « d » par « \partial », qui imprime le symbole partiel bouclé ; `\frac{\partial f}{\partial x}` est la forme standard. Les partiels d'ordre supérieur suivent le même modèle, par exemple `\frac{\partial^2 f}{\partial x \partial y}`.

`\nabla` donne le symbole du dégradé, et comme c'est un symbole ordinaire vous pouvez l'élever comme n'importe quoi d'autre : `\nabla^2 f` pour le laplacien. Pour la notation compacte, `f'(x)` utilise directement la clé d'apostrophe, et LaTeX convertit une ou plusieurs marques `'` en nombres premiers correctement élevés. La notation par points de Newton pour les dérivées temporelles provient des commandes d'accent `\dot{x}` et `\ddot{x}`, qui placent un ou deux points sur l'argument.

Un choix de style : certaines revues veulent que le différentiel `d` soit à la verticale, écrit `\mathrm{d}`. Si c'est le cas, définissez `\newcommand{\dd}{\mathrm{d}}` une fois dans le préambule et écrivez `\frac{\dd y}{\dd x}` afin de pouvoir inverser le choix plus tard.

## Intégrales

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

`\int` est le signe intégral, et la syntaxe familière d'indice et d'exposant fixe les limites : `_a` pour la limite inférieure, `^b` pour la limite supérieure. En mathématiques en ligne, les limites se trouvent à côté du signe pour garder la ligne compacte ; en mathématiques d'affichage, ils se trouvent toujours à côté du signe des intégrales (contrairement aux sommes), ce qui est la convention standard. Les intégrales doubles et triples ont leurs propres commandes, `\iint` et `\iiint`, qui espacent correctement les signes répétés, ainsi que `\oint` pour les intégrales de contour.

Le `\,` avant `dx` est un espace fin. Sans cela, « f(x)dx » fait passer l'intégrande directement dans le différentiel et l'œil doit les démêler. L'espace mince est une convention largement suivie, alors faites-en une habitude : l'intégrande, puis `\,`, puis la différentielle.

## Essayez-le et une erreur courante

Ces extraits s'affichent au fur et à mesure que vous tapez dans le [livegroundplay](/live/), ce qui est un moyen rapide de vérifier une pile dérivée avant qu'elle ne soit insérée dans un document ; voir [bases du mode mathématique](/learn/math-mode/) si les délimiteurs `$` et `\[` sont encore nouveaux.

L'erreur la plus courante ici est de taper des dérivés de style `d/dx` avec une barre oblique dans les mathématiques d'affichage là où un `\frac` empilé était souhaité, ou d'oublier les accolades sur les limites de plusieurs caractères : `\int_a^b+1` ne met que le `b` en exposant. Écrivez `\int_a^{b+1}` pour que l'expression entière soit levée.