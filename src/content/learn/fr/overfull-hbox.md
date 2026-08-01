---

title: "Boîte horizontale trop pleine"
description: "Lignes qui dépassent de la marge et quand s'en soucier."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Boîte horizontale trop pleine

## Le symptôme

Le journal rapporte quelque chose comme « \hbox trop pleine (14,2 pts trop large) dans le paragraphe aux lignes 87 à 92 », et dans le PDF, une ligne de ce paragraphe dépasse dans la marge droite. Le document est toujours compilé, car il s'agit d'un avertissement plutôt que d'une erreur, mais la ligne saillante est visible à l'impression et les réviseurs le remarquent. En mode brouillon (`\documentclass[draft]{...}`) LaTeX marque chaque délinquant avec un rectangle noir, ce qui le rend facile à repérer.

## Pourquoi ça arrive

TeX divise les paragraphes en lignes en pesant tous les points de rupture possibles et en choisissant l'arrangement avec le moins de « méchanceté » totale, où la méchanceté mesure dans quelle mesure les espaces d'une ligne ont dû s'étirer ou se rétrécir. Parfois, aucun arrangement acceptable n'existe : une URL longue ne contient aucun point d'arrêt, les mathématiques en ligne sont traitées comme presque incassables, ou un mot long n'a aucune entrée de césure. Plutôt que d'étirer les espaces au-delà de sa tolérance et de produire une ligne visiblement creuse, TeX laisse la ligne s'étendre longtemps et vous en informe. La boîte trop pleine est que TeX refuse de rendre le paragraphe laid d'une manière différente.

## Corrections, du meilleur au plus brutal

La meilleure solution est éditoriale. Reformuler la phrase, éloigner le mot long de la fin de la ligne ou diviser une phrase en deux supprime généralement le problème sans aucun code et améliore souvent la prose de toute façon.

Pour les URL, enveloppez l'adresse dans `\url{...}` à partir du package `url` ou `hyperref` afin qu'elle puisse être coupée en barres obliques et en points, et chargez le package `xurl` lorsque vous avez besoin de pauses à presque n'importe quel caractère. Pour une formule en ligne large, affichez-la ou utilisez un environnement cassable tel que « multiline » de « amsmath » lorsque l'équation elle-même est trop longue pour la ligne.

Deux améliorations au niveau du préambule sont utiles à l’échelle mondiale. Le chargement de « microtype » permet aux caractères de dépasser légèrement et d'agrandir légèrement les polices, ce qui résout de nombreux cas marginaux sans que vous vous en rendiez compte. Définir correctement la langue du document via « babel » ou « polyglossia » donne à TeX les bons modèles de césure, car un mot qu'il ne peut pas couper est un mot qu'il ne peut pas couper.

## Quand s'en soucier

Le nombre dans l'avertissement est le dépassement. Tout ce qui est inférieur à environ 2 points est invisible pour les lecteurs et peut être ignoré en toute sécurité dans un brouillon. Des dizaines de points méritent d’être corrigés avant que quiconque ne voie le PDF. Le flux de travail judicieux consiste à ignorer les cases trop pleines lors de l'écriture, puis à balayer le journal une fois avant la soumission et à corriger la poignée qui reste, la plus grande en premier. Résistez à `\sloppy` et à d'autres hacks de tolérance globale : ils échangent quelques lignes saillantes contre un espacement lâche et inégal dans l'ensemble du document.