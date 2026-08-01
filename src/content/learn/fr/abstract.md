---

title: "Le bloc abstrait"
description: "placement dans un environnement abstrait pour les cours d'articles et de revues."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Le bloc abstrait

Le résumé est le court résumé qui se situe entre votre titre et votre première section. Presque tous les lieux en ont besoin. LaTeX lui donne un environnement dédié plutôt que de vous laisser le simuler avec un titre en gras. La classe a besoin de savoir quel texte est le résumé afin que les classes de revues puissent le composer dans un style distinct (souvent plus petit et en retrait) et que les systèmes de soumission puissent l'extraire automatiquement.

## L'environnement

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Tout entre `\begin{abstract}` et `\end{abstract}` devient le bloc abstrait. Dans la classe standard « article », il apparaît sous la forme d'un paragraphe rétréci et centré sous le titre. Écrivez de la prose simple à l’intérieur. Les mathématiques en ligne, c'est bien, mais évitez tout ce qui est lourd : pas de citations si le lieu les interdit, pas de notes de bas de page, pas d'acronymes non définis. Les résumés apparaissent souvent seuls dans les bases de données et les résultats de recherche, à l'écart du reste de l'article.

## Où ça va

Placer après `\maketitle` (ou comme requis par la classe journal). L'ordre habituel en haut d'un article est `\maketitle`, puis le résumé, puis `\section{Introduction}`. L'environnement doit venir après `\begin{document}`, car il produit une sortie ; le mettre dans le préambule est une erreur de compilation.

Les cours de revues et de conférences modifient souvent ce contrat et leurs modèles l'emportent sur ceux par défaut. Certaines classes, y compris plusieurs variantes ACM et IEEE, souhaitent que le résumé soit déclaré avant `\maketitle` afin de pouvoir le placer dans leur propre mise en page de titre. D'autres remplacent entièrement l'environnement par une commande comme `\abstract{...}`. Règle générale : si vous utilisez le modèle d'un lieu, placez le résumé là où le fichier d'exemple du modèle le place et ne combattez pas la classe. La [leçon sur les blocs de titre](/learn/title-page/) couvre la machinerie `\maketitle` qui bloque.

## Cours sans résumé

La classe `book` ne définit aucun environnement abstrait, sur la base de la théorie selon laquelle les livres ont plutôt des préfaces. Si vous en avez besoin dans une thèse de style rapport, la classe `report` le prend en charge, ou vous pouvez composer un titre centré non numéroté suivi d'un paragraphe normal, ce qui est tout ce que fait réellement l'environnement.

Une erreur courante : laisser une ligne vide entre `\maketitle` et le résumé est une bonne chose, mais laisser le résumé vide n'est pas une erreur de compilation, donc un espace réservé oublié comme "TODO" est envoyé aux réviseurs plus souvent que quiconque ne l'admet. Compilez, regardez la première page du PDF et lisez le résumé au moins une fois avant de le soumettre. Pour obtenir des conseils sur ce que le résumé devrait réellement dire, par opposition à l'endroit où il va, voir [comment rédiger un résumé](/learn/write-an-abstract/).