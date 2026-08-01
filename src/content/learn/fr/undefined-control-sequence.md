---

title: "Séquence de contrôle non définie"
description: "Noms de commandes inconnus : fautes de frappe, packages manquants, mauvais moteur."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Séquence de contrôle non définie

## Le symptôme

La compilation s'arrête avec `! Séquence de contrôle non définie.` Le journal montre ensuite la ligne où cela s'est produit, divisée en deux : tout ce que TeX avait lu jusqu'à et y compris la commande incriminée sur une ligne, et le reste de la ligne source en dessous. Le dernier jeton sur cette ligne supérieure est la commande que TeX n'a ​​pas reconnue, ce qui en fait l'une des erreurs les plus faciles à localiser avec précision.

## Pourquoi ça arrive

Une séquence de contrôle est tout ce qui commence par une barre oblique inverse. TeX n'a ​​pas de vocabulaire fixe : les commandes n'existent que parce que le noyau, la classe de document, un package ou votre propre « \newcommand » les ont définies. Lorsque TeX lit une barre oblique inverse suivie d'un nom que rien n'a défini, il ne peut pas deviner ce que vous vouliez dire et s'arrête. L'erreur ne concerne jamais le fait que la commande est "mauvaise" en général. Il s'agit de ce nom qui est inconnu dans ce document, à ce stade, sous ce moteur.

## Corrigez-le en trois vérifications

Vérifiez d'abord l'orthographe. `\texbf` au lieu de `\textbf`, `\lable` au lieu de `\label`, ou un espace parasite séparant un nom dans deux comptes dans la plupart des cas. Le numéro de ligne du journal vous amène directement à la faute de frappe.

Si l'orthographe est correcte, le package de définition est probablement manquant. `\includegraphics` ne fait rien sans `\usepackage{graphicx}`, `\toprule` a besoin de `booktabs` et `\SI` a besoin de `siunitx`. Cela est plus difficile lorsque vous copiez un extrait d'un autre document ou de la réponse d'un modèle : le corps du texte est arrivé, pas la ligne du préambule. Recherchez quel package définit une commande dans [Chaque commande expliquée](/learn/every-command-explained/), ajoutez la ligne `\usepackage` et recompilez. Si le package lui-même n'est pas installé, consultez [Installer un package manquant](/learn/install-missing-package/).

Si le package est chargé et que l'erreur persiste, suspectez le moteur. Certaines commandes n'existent que sous un moteur particulier : `\fontspec` et ses proches nécessitent XeLaTeX ou LuaLaTeX et mourront sous pdfLaTeX avec exactement cette erreur. Les modèles qui spécifient un moteur dans leur documentation le font généralement pour cette raison. [Quel moteur pour ce projet](/learn/engines-compared/) explique les différences.

## Deux bizarreries à connaître

L'ordre est important : une commande utilisée avant la ligne `\usepackage` qui la définit n'est toujours pas définie à ce stade, alors gardez le chargement du package dans le préambule, au-dessus de `\begin{document}`. Et une erreur en cache souvent une autre, car après la récupération de TeX, il peut mal lire tout ce qui suit. Corrigez la première séquence de contrôle non définie dans le journal, recompilez-la et regardez ensuite ce qui reste.