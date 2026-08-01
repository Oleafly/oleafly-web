---

title: "Retrait ou espace entre les paragraphes"
description: "parindent, parskip, noindent pour une seule ligne."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Retrait ou espace entre les paragraphes

La typographie propose deux méthodes standard pour indiquer où se termine un paragraphe et où commence le suivant : mettre en retrait la première ligne de chaque nouveau paragraphe ou laisser un espace vertical entre les paragraphes sans retrait. Les livres et les revues utilisent presque toujours le premier. Les pages Web et les documents commerciaux utilisent le second. LaTeX utilise par défaut la convention du livre, mettant en retrait chaque paragraphe sauf le premier après un titre de section, sans espace supplémentaire entre les paragraphes. Si vous voulez l’autre style, vous changez deux longueurs.

## Les deux longueurs qui contrôlent tout

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` est la largeur du retrait de la première ligne. Le définir sur « 0pt » avec « \setlength » supprime l'indentation partout. `\parskip` est l'espace vertical inséré entre les paragraphes, normalement nul (plus un peu d'étirement) ; le régler sur « 0,8em » donne un espace visible, un peu moins qu'une ligne vierge complète. L'unité `em` s'adapte à la taille de la police, ce qui maintient l'espacement proportionnel si vous modifiez ultérieurement la [taille de la police](/learn/font-size/). Mettez les deux lignes dans le préambule et tout le document suit le style de bloc.

Si vous suivez cette voie, sachez qu'une simple modification de `\parskip` étend également l'espace autour des en-têtes de section, des éléments de liste et de la table des matières, car ceux-ci sont également construits à partir de paragraphes. Pour tout ce qui est plus long qu'une courte note, le chargement du package `parskip` à la place (`\usepackage{parskip}`) applique le même style tout en corrigeant ces effets secondaires pour vous.

## Suppression d'un seul retrait

Paragraphe unique : mettez `\noindent` au tout début, avant le premier mot. Cela supprime le retrait de ce paragraphe uniquement et est pratique après une équation affichée, une liste de codes ou un tableau lorsque le texte suivant est une continuation de la même pensée plutôt qu'un nouveau paragraphe. La situation inverse, forçant un retrait là où LaTeX en omet un (comme le premier paragraphe après un titre), est gérée par le petit paquet `indentfirst` plutôt que par une correction manuelle.

Pendant que nous y sommes : un nouveau paragraphe dans LaTeX est créé par une ligne vide dans le source, et non par `\\`. La commande `\\` est un saut de ligne à l'intérieur du même paragraphe, et son utilisation pour simuler l'espacement des paragraphes produit des avertissements sous-complets et des espaces inégaux. La [leçon sur les paragraphes et les nouvelles lignes](/learn/paragraphs-newlines/) couvre cette distinction dans son intégralité.

## Choisissez un style et maintenez-le

Choisissez le style parskip indenté **ou** et restez cohérent. Les deux conventions sont des alternatives, pas des couches : les paragraphes en retrait avec de grands espaces entre eux ressemblent à un brouillon, et un retrait nul avec un espace nul laisse le lecteur incapable de voir du tout où commencent les paragraphes. Si vous écrivez pour une revue ou une conférence, ne modifiez aucune des deux longueurs ; le fichier de classe implémente déjà le choix de l'éditeur, et votre remplacement sera la première chose que l'éditeur de mise en page annulera.