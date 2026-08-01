---

title: "Liens à l'intérieur du PDF"
description: "hyperref, url, href, couleurs et métadonnées PDF."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Liens à l'intérieur du PDF

Un PDF n’est pas seulement du papier sur un écran. Il peut contenir des liens dynamiques : des URL cliquables, des références croisées qui renvoient à la bonne figure, des citations qui renvoient à la bibliographie et un plan de barre latérale construit à partir des titres de vos sections. Dans LaTeX, un seul package fournit tout cela : `hyperref`. Chargez-le et chaque entrée `\ref`, `\cite` et table des matières de votre document devient silencieusement cliquable, sans modification du reste de votre source.

## Chargement et configuration de l'hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Les options entre crochets contrôlent l’apparence des liens. Par défaut, hyperref dessine un rectangle coloré autour de chaque lien, ce que la plupart des gens trouvent moche. Le paramètre `colorlinks=true` remplace les cases par du texte coloré à la place, et les trois options de couleur le divisent par type de lien : `linkcolor` couvre les sauts internes tels que les références de section et de figure, `citecolor` couvre les citations et `urlcolor` couvre les adresses Web. Les diviser est important car un article riche en citations peut autrement se transformer en un mur de bleu.

## URL contre href

Les deux commandes de liaison effectuent des tâches différentes. `\url{...}` imprime l'adresse elle-même dans une police de machine à écrire et la rend cliquable, ce que vous voulez dans une bibliographie ou une note de bas de page où le lecteur doit voir où va le lien. `\href{address}{text}` cache l'adresse derrière le texte que vous fournissez, comme un lien sur une page Web. Préférez `\url` dans les documents susceptibles d'être imprimés, car une étiquette `\href` ne donne aucun moyen à un lecteur papier de saisir l'adresse.

Un bonus pratique : `\url` sait comment diviser les adresses longues sur plusieurs lignes sans insérer de trait d'union qui corrompt l'adresse, ce qu'une simple URL avec une police de machine à écrire ne peut pas faire.

## Métadonnées PDF

`\hypersetup` vous permet de modifier n'importe quelle option hyperref après le chargement, et c'est également là que vous définissez les métadonnées du document. Les champs `pdftitle` et `pdfauthor` remplissent le titre et l'auteur que votre lecteur PDF affiche dans sa barre de fenêtre et dans les propriétés du fichier. Sans eux, les lecteurs affichent souvent le nom du fichier ou le premier titre, qui semble inachevé dans un document que vous soumettez ou partagez. Vous pouvez appeler `\hypersetup` dans le préambule à tout moment après `\usepackage{hyperref}`.

## Documents imprimables

Pour les documents imprimables, utilisez « hidelinks ». En le passant en option, `\usepackage[hidelinks]{hyperref}`, conserve chaque lien cliquable à l'écran mais supprime à la fois les cases colorées et le texte coloré, de sorte que la page imprimée semble tout à fait normale. De nombreux cours de revues exigent exactement cela.

Une erreur courante à éviter : hyperref redéfinit de nombreuses commandes internes, elle doit donc être chargée comme l'un des derniers packages de votre préambule. Si vos liens pointent vers les mauvaises pages ou si vous obtenez des erreurs étranges provenant d'un autre package, l'ordre de chargement est la première chose à vérifier. Voir [cross-references](/learn/cross-references/) pour les mécanismes `\label` et `\ref` que l'hyperref rend cliquables.