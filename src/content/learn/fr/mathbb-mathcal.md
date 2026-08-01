---

title: "Tableau noir, script, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm et quand chaque alphabet apparaît."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Tableau noir, script, Fraktur

Les mathématiques utilisent plus d'un alphabet. Les nombres réels reçoivent un R en gras sur tableau noir, un lagrangien obtient un L calligraphique, une algèbre de Lie obtient un Fraktur g, et chacun d'eux est une commande distincte dans LaTeX plutôt qu'une police que vous activez. Utilisés de manière cohérente, les alphabets indiquent au lecteur quel type d'objet une lettre nomme avant la phrase environnante.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## Les quatre alphabets

| Commande | Regardez | Utilisation typique |
| --- | --- | --- |
| `\mathbb{R}` | Tableau noir | Ensembles de nombres |
| `\mathcal{L}` | calligraphique | Lagrangiens, perte |
| `\mathfrak{g}` | Fracture | Algèbres de Lie |
| `\mathrm{d}` | Droit | Différentiels, noms d'opérateurs |

`\mathbb` produit du gras pour tableau noir, les lettres doubles frappées utilisées presque exclusivement pour les ensembles de nombres : `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. Il provient du package `amssymb` et ne couvre que les majuscules. La police n'a pas d'alphabet minuscule, donc un argument minuscule imprime de mauvais glyphes ou rien d'utile.

`\mathcal` donne les majuscules calligraphiques, le choix habituel pour les lagrangiens, les fonctions de perte et les familles d'ensembles. Il couvre également uniquement les majuscules et fonctionne dans le noyau LaTeX sans package supplémentaire.

`\mathfrak`, également de `amssymb`, est Fraktur, avec les deux cas disponibles. Fraktur en minuscules nomme les algèbres de Lie, et les majuscules apparaissent en algèbre et en théorie des ensembles, pour les idéaux et les cardinaux entre autres.

`\mathrm` n'est pas un alphabet décoratif mais un passage au romain debout dans les mathématiques. C'est le bon outil pour tout ce qui est une notation plutôt qu'une variable : la différentielle en `\mathrm{d}x`, les unités ou les sous-étiquettes textuelles comme `x_{\mathrm{max}}`. Pour les opérateurs nommés tels que tr et Rank, il existe un meilleur mécanisme, décrit dans [les opérateurs que vous inventez une fois] (/learn/argmin-argmax/).

## Notes pratiques

Si `\mathcal` semble trop simple pour votre objectif, le package `mathrsfs` ajoute `\mathscr`, un script plus orné souvent utilisé pour les gerbes et les algèbres sigma. Les deux peuvent coexister et désigner des objets différents dans le même papier.

L’erreur courante est de traiter ces alphabets comme une décoration. Chacun a une signification conventionnelle dans la plupart des domaines, et un lecteur qui voit `\mathbb{A}` s'attendra à quelque chose de type défini et à saveur de nombre. Vérifiez les conventions de votre champ avant d'attribuer des lettres, et une fois attribuées, conservez un alphabet par objet pour l'ensemble du document. Les quatre s'affichent côte à côte en quelques secondes dans le [terrain de jeu en direct](/live/).