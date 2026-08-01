---

title: "Vecteurs et symboles gras"
description: "mathbf, boldsymbol et une macro vectorielle cohérente."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vecteurs et symboles gras

De nombreux champs définissent les vecteurs et les matrices en gras : **x** pour un vecteur, **A** pour une matrice, bêta gras pour un vecteur de coefficients. Dans LaTeX, il existe deux commandes en gras différentes pour les mathématiques, et elles ne sont pas interchangeables. Savoir lequel choisir et envelopper le choix dans une macro permet de maintenir la notation cohérente tout au long d'une thèse.

## Les deux commandes

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` change son argument en une police romaine grasse verticale. Cela fonctionne bien pour les lettres latines, donc `\mathbf{A}` vous donne un A gras et droit, que de nombreux textes utilisent pour les matrices. Sa limitation est qu'elle ne couvre que les lettres et les chiffres : `\mathbf{\beta}` ne fait rien d'utile, car la police romaine grasse n'a tout simplement pas de glyphes grecs et la version bêta s'imprime inchangée.

`\boldsymbol`, fourni par `amsmath` (techniquement par la machinerie de type `bm` dans `amsbsy`, que `amsmath` charge), enhardit le symbole que vous lui donnez tout en gardant sa forme. `\boldsymbol{\beta}` produit une version bêta italique grasse, et `\boldsymbol{x}` produit un x italique gras, correspondant au style incliné des variables mathématiques ordinaires. Si votre convention est que les vecteurs sont en gras et en italique, c'est la commande souhaitée.

La répartition pratique est donc la suivante : lettres latines droites et grasses, utilisez `\mathbf` ; tout ce qui est grec ou gras qui doit rester en italique, utilisez `\boldsymbol`.

## Définir les macros une fois

Plutôt que de taper ces commandes tout au long du document, définissez des macros sémantiques dans le préambule :

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Maintenant, vous écrivez `\vect{x}` pour un vecteur et `\mat{A}` pour une matrice. Le « [1] » indique que chaque macro prend un argument, et « #1 » est l'endroit où atterrit cet argument. La récompense vient plus tard : si un journal exige que les vecteurs soient en gras au lieu d'en gras italique, vous éditez une ligne pour que `\vect` enveloppe `\mathbf`, et chaque vecteur du papier est mis à jour lors de la compilation suivante. Cela surpasse la recherche et le remplacement sur deux cents équations.

Les macros rendent également l'intention lisible dans la source. Dans six mois, `\vect{w}` vous indique que w est un vecteur ; un simple `\boldsymbol{w}` vous indique seulement qu'il est en gras.

## Une erreur courante

Ne simulez pas le grec gras avec `\textbf` dans les mathématiques, et n'utilisez pas `\mathbf` pour cela et supposez que cela a fonctionné. Compilez et regardez attentivement : une version bêta non en gras à côté de voisins en gras est facile à manquer à l'écran et évidente sur papier. Si vous souhaitez observer rapidement les candidats, collez une ligne comme `\boldsymbol{\beta} \mathbf{\beta} \beta` dans le [terrain de jeu en direct](/live/) et comparez les trois côte à côte. Pour mettre en gras des équations entières, y compris des symboles comme `\sum`, consultez la commande `\bm` du package `bm`, qui gère plus de classes de symboles que `\boldsymbol`.

Le gras dans le texte courant est un sujet différent avec des commandes différentes ; voir [souligné dans le texte](/learn/bold-italic/).