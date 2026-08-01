---

title: "Acronymes et listes de symboles"
description: "glossaires-croquis supplémentaire, ou une liste construite à la main lorsque cela suffit."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Acronymes et listes de symboles

Les documents longs accumulent des abréviations et les conventions qui les entourent sont strictes. Un acronyme est épelé en entier lors de la première utilisation, abrégé par la suite, et une thèse nécessite généralement une liste d'abréviations dans le texte initial. Maintenir cela à la main échoue de manière prévisible. Vous réorganisez deux chapitres, la première utilisation bouge, et tout à coup « ML » apparaît trois pages avant « machine learning (ML) ». Le package « glossaries-extra » suit la première utilisation pour vous.

## L'itinéraire automatisé

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

L'option `acronym` active la prise en charge des acronymes, et `\makeglossaries` active la machine qui collecte les entrées pendant la compilation. Chaque `\newacronym` prend trois arguments : une clé que vous saisirez dans le texte, la forme courte et la forme longue. Définissez-les tous dans le préambule ou dans un fichier séparé que vous `\input`, afin qu'ils vivent au même endroit.

Dans le corps, vous ne tapez jamais l’acronyme lui-même :

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

Le premier `\gls{ml}` dans le document imprime "machine learning (ML)", et chacun des suivants imprime uniquement "ML". Étant donné que le package suit l'utilisation plutôt que la position dans la source, l'expansion suit la première utilisation partout où votre restructuration la déplace. `\printglossaries` imprime la liste collectée des abréviations partout où vous la placez, généralement après la table des matières. Les commandes associées couvrent la grammaire autour de ceci : `\glspl` pour les pluriels, `\Gls` pour un début de phrase en majuscule.

Le problème, c'est la construction. Entre les passes LaTeX, l'assistant `makeglossaries` doit s'exécuter pour trier et formater les entrées, sinon `\printglossaries` ne produit rien en silence. Les configurations latexmk complètes gèrent cela automatiquement. Ce n’est peut-être pas le cas des pipelines plus simples, et glossaires-extra leur propose une solution de repli. Si votre liste refuse obstinément d'apparaître, l'exécution d'un assistant manquant est le premier suspect, bien avant un bug dans votre document.

## Le parcours construit à la main

Pour une simple liste de symboles, un environnement de « description » géré à la main suffit souvent :

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Chaque `\item[...]` imprime son argument entre crochets sous forme d'étiquette en gras avec l'explication suivante, qui a exactement la forme d'une liste de notation. Il n’y a pas de suivi à la première utilisation, mais une liste de symboles en a rarement besoin ; Les symboles sont définis là où ils apparaissent pour la première fois dans les mathématiques.

Le conseil honnête est d’adapter l’outil à l’échelle. Un papier comportant cinq acronymes est plus facile à gérer à la main. Une thèse de 200 pages avec quarante ne l'est pas, et là, le package paie plusieurs fois son coût de mise en place. La [leçon sur les listes](/learn/lists/) couvre l'environnement `description` plus en détail.