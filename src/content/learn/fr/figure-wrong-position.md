---

title: "Le personnage qui fuit la section"
description: "Barrières flottantes, taille et placement en dernier recours."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# Le personnage qui fuit la section

Vous mettez un chiffre à la fin de la section 4 et il s'imprime au milieu de la section 5, ou s'empile avec trois autres à la fin du chapitre. Les chiffres sont des flottants : LaTeX traite leur position dans la source comme un point de départ, et non comme une destination, et les déplace pour garder les pages pleines. Les flotteurs doivent également apparaître dans l'ordre, donc une figurine qui ne peut pas être placée bloque toutes les figurines derrière elle. Le système général de placement est couvert dans [où les flotteurs atterrissent réellement](/learn/position-figures/). Cette leçon est l'échelle d'escalade à utiliser lorsqu'un flotteur aboutit dans un endroit que vous ne pouvez pas accepter.

## Première étape : vérifier les options de placement

Assurez-vous que l'environnement indique « [htbp] », et non « [h] » seul. Les lettres accordent l'autorisation de placer le flottant ici, en haut d'une page, en bas ou sur une page flottante dédiée. Accorder uniquement « h » est la cause la plus courante d'un chiffre incontrôlable, car lorsque la page actuelle n'a pas de place, LaTeX n'a ​​aucune place légale nulle part et fait avancer le flottant indéfiniment.

## Deuxième étape : déplacer le code

Un flotteur peut dériver plus tard que sa position source mais jamais plus tôt. Si la figure apparaît trop tard, déplacez l'environnement vers le haut dans la source, idéalement juste avant le paragraphe contenant son premier `\ref`. Cette modification corrige une part surprenante des plaintes de placement.

## Troisième étape : clôturer la section

Le package `placeins` fournit `\FloatBarrier`, une commande qui force tous les flottants en attente à être placés avant que le texte ne continue :

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Placez la barrière à la fin d’une section et aucune figurine de cette section ne pourra s’infiltrer dans la suivante. LaTeX peut insérer un espace vertical supplémentaire pour vider les flotteurs, ce qui est généralement un prix acceptable à proximité d'un saut de section.

## Quatrième étape : le marteau H

Le package `float` ajoute un spécificateur `H` majuscule qui supprime entièrement le flottement :

```latex
\usepackage{float}
\begin{figure}[H]
```

Un chiffre `[H]` s'imprime exactement là où se trouve son code, comme un grand paragraphe. Le coût est que LaTeX ne peut plus équilibrer la page autour d'elle, vous pouvez donc obtenir un grand espace vide lorsque la figure ne rentre pas dans l'espace restant. Considérez-le comme un dernier recours pour un ou deux flotteurs tenaces, et non comme un défaut.

## Cinquième étape : réduire la silhouette

Les très grands flottants sont différés car peu de pages ont de la place pour eux. Réduire `width=0.9\textwidth` à `0.7\textwidth`, ou supprimer les espaces du fichier image, permet souvent à LaTeX de placer une figure qu'il avait poussée jusqu'à la fin du chapitre.

Une habitude à conserver : effectuez ce réglage une fois, une fois le texte stable. Chaque paragraphe que vous ajoutez ou supprimez remanie les pages, donc la chirurgie de placement pendant la rédaction est un effort que vous refaireez.