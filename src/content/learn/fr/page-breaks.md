---

title: "Forcer ou refuser un saut de page"
description: "newpage, clearpage, saut de page souple, nopagebreak."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Forcer ou refuser un saut de page

LaTeX décide où se terminent les pages. La plupart du temps, la décision est bonne, mais il faut parfois l'ignorer : un titre de section se bloque en bas de page, un tableau arrive une ligne trop tard, ou vous souhaitez que chaque chapitre d'un rapport reparte à zéro. LaTeX vous propose un petit ensemble de commandes pour cela, allant d'un ordre ferme à une suggestion polie.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## Les pauses difficiles

`\newpage` termine immédiatement la page actuelle et en démarre une nouvelle. C’est l’outil le plus brutal et celui que vous utiliserez le plus lors de la rédaction.

`\clearpage` fait la même chose mais vide d'abord tous les flottants en attente. Les figures et les tableaux dans LaTeX sont des flottants : ils dérivent là où l'algorithme trouve de la place, parfois des pages après le point où vous les avez écrits. `\clearpage` force chaque flotteur qui a été mis en file d'attente jusqu'à présent sur la page avant de continuer, c'est donc la bonne commande à la fin d'un chapitre ou avant une section où vous ne voulez pas de retardataires. Si les chiffres semblent s'accumuler à la fin de votre document, un « \clearpage » bien placé est généralement le remède ; voir [pourquoi les chiffres bougent](/learn/figure-wrong-position/) pour l'histoire complète.

`\cleardoublepage` va encore plus loin dans les documents recto verso : après avoir vidé les flottants, il garantit que la page suivante est une page de droite (impaire), en insérant une page de gauche vierge si nécessaire. Les chapitres de livres s'ouvrent traditionnellement à droite, et la classe `book` l'appelle pour vous à chaque `\chapter`.

## Les requêtes soft

`\pagebreak[n]` ne commande pas. Il demande. Le nombre facultatif de 0 à 4 indique la force : `\pagebreak[1]` signifie "une pause ici serait bien", `\pagebreak[4]` signifie "une pause ici, point final". Les valeurs moyennes permettent à LaTeX de peser votre souhait par rapport à son propre jugement d'espacement, qui produit généralement des pages plus belles qu'une `\newpage` dure, car `\pagebreak` étend le contenu pour remplir la page plutôt que de laisser un vide.

`\nopagebreak` est la requête inverse : elle décourage une pause à ce stade. C'est utile juste après un titre ou avant une courte liste que vous souhaitez conserver avec son introduction. Comme `\pagebreak`, il accepte une force facultative de 0 à 4.

## Quand faut-il les atteindre ?

L'erreur courante consiste à saupoudrer `\newpage` dans un brouillon pour corriger la mise en page, puis à regarder chaque correctif devenir erroné à mesure que le texte s'agrandit. Les sauts de page dépendent de tout ce qui les précède, donc un saut manuel qui semble parfait aujourd'hui peut laisser une page à moitié vide après votre prochaine révision. Le flux de travail sensé consiste à écrire d'abord l'intégralité du document et à ajouter uniquement des sauts lors de la passe finale, en préférant le logiciel `\pagebreak[3]` aux commandes matérielles partout où la position exacte est négociable.