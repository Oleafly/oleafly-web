---

title: "Paragraphes, sauts et espaces vides"
description: "Lignes vides, sauts forcés, vspace et commandes d'espacement qui valent la peine d'être connues."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Paragraphes, sauts et espaces vides

Dans un traitement de texte, vous façonnez les paragraphes en appuyant sur Entrée et en observant les espaces. LaTeX fonctionne différemment : le texte source décrit la structure et le compilateur décide de l'espacement. Une fois que vous savez comment LaTeX commence un paragraphe et comment le remplacer lorsque vous en avez besoin, vous évitez les combats de formatage que les débutants ont habituellement avec lui.

## Comment fonctionnent les paragraphes

Une ligne vide dans votre source commence un nouveau paragraphe. C'est toute la règle. Une ligne vide ou cinq, cela ne fait aucune différence ; LaTeX les réduit en un seul saut de paragraphe. De même, un seul saut de ligne à l'intérieur de votre source est traité comme un espace ordinaire, vous pouvez donc envelopper votre texte source à la largeur de votre choix et le redistribuer librement sans modifier du tout la sortie.

La commande `\par` signifie exactement la même chose qu'une ligne vide. Vous le saisirez rarement vous-même, mais vous le verrez dans les macros et les fichiers de classe, où une ligne vide littérale est difficile à écrire.

`\\` est tout autre chose : il force un saut de ligne à l'intérieur du paragraphe actuel, sans en commencer un nouveau. La nouvelle ligne ne reçoit aucun retrait de paragraphe ni aucun espace vertical supplémentaire. Il existe pour les endroits où les sauts de ligne constituent du contenu, tels que les adresses, la poésie et les lignes d'un tableau. L'utiliser pour terminer des paragraphes ordinaires est l'erreur classique du débutant, car cela produit un paragraphe qui ne se termine jamais vraiment, et LaTeX peut se plaindre avec "Il n'y a pas de ligne ici pour terminer" lorsque deux d'entre eux s'empilent.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Ajout d'un espace vertical

Parfois, vous souhaitez un espace délibéré, par exemple avant un bloc de signature ou entre des parties logiques d'une page de titre.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` insère exactement l'espace vertical que vous demandez, dans n'importe quelle unité connue de LaTeX (`em`, `pt`, `cm`, etc.). Les trois commandes de saut sont des quantités prédéfinies : `\smallskip`, `\medskip` et `\bigskip` insèrent des espaces petits, moyens et grands dont les tailles sont définies par votre classe de document, ce qui les maintient cohérents dans tout le document. Préférez les sauts aux valeurs `\vspace` réglées manuellement, car elles s'adaptent si vous modifiez la classe ou la taille de la police.

Un détail utile : un `\vspace` en haut d'une page est supprimé silencieusement, car LaTeX suppose que l'espace extensible aux limites de la page n'est pas intentionnel. Si vous avez vraiment besoin de le conserver, utilisez `\vspace*{1em}` avec l'étoile.

## Espace entre tous les paragraphes

Ne spammez pas `\\` pour faire de l'espace entre les paragraphes. Si vous voulez que chaque paragraphe soit séparé par un espace au lieu d'être marqué par un retrait, c'est une décision de conception à l'échelle du document : définissez-le une fois dans le préambule avec le package `parskip`, ou reconsidérez si les titres et la structure communiqueraient mieux la séparation. Voir [paragraphe indentation](/learn/paragraph-indent/) pour l'autre moitié de ce compromis.