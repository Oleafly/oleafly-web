---

title: "Formatage de thèse vs formatage papier"
description: "Cours universitaires, documents préliminaires, chapitres, marges de reliure et réutilisation du matériel papier."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Formatage de la thèse vs formatage papier

Un article est formaté pour un éditeur. Une thèse est formatée pour une école doctorale, une bête très différente avec des règles très différentes. Si vous n'avez rédigé que des articles, le modèle de thèse vous surprendra de manière spécifique.

## Qui fixe les règles

Papiers : le lieu vous propose un cours ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) et tout le monde dans le monde utilise le même. Thèses : votre université impose sa propre classe ou une page de règles typographiques (marges, interligne, libellé de la page de titre), et aucune université n'est d'accord. Obtenez d'abord le cours officiel de votre département ou du site de votre école supérieure. S'il est ancien et refuse de se compiler, c'est assez courant pour avoir [sa propre leçon](/learn/fix-broken-template/).

## Les différences structurelles

| Aspects | Papier | Thèse |
|---|---|---|
| Unité de niveau supérieur | `\section` | `\chapitre` |
| Base de classe | classe de lieu | Dérivé `livre`/`rapport` |
| Sujet préliminaire | titre + résumé | page de titre, déclaration, résumé, table des matières, listes de figures et tableaux |
| Longueur | 8 à 30pages | 80 à 300pages |
| Mise en page | souvent à deux colonnes | colonne unique, espacement généreux |
| Côtés | PDF recto | souvent recto verso pour l'impression |

Les chapitres changent tout en aval : la numérotation devient « 3.2 », les figures deviennent « Figure 3.1 », et chaque chapitre s'ouvre généralement sur une nouvelle page (parfois à droite).

## La question préliminaire représente la moitié de la bataille

Une séquence de présentation de thèse comprend généralement : la page de titre, la déclaration d'originalité, le résumé, les remerciements, la table des matières, la liste des figures, la liste des tableaux, puis le chapitre 1. La majeure partie est automatisée :

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

La danse de la numérotation des pages en roman puis en arabe fait trébucher tout le monde une fois, [les numéros de page et les numéros de page](/learn/front-matter-page-numbers/) la couvrent correctement.

## Impression recto verso et marges de reliure

Les thèses imprimées sont généralement recto verso (option de classe « twoside »), ce qui rend les marges asymétriques : la marge intérieure est plus large pour survivre à la reliure. Les règles de votre université diront quelque chose comme « marge gauche 35 mm, autres 25 mm », ce qui dans un document recto-verso signifie *intérieur*, pas gauche. Ne combattez pas cela avec `\hspace` manuel, l'option de classe plus les paramètres `geometry` le gèrent :

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

`openright` force les chapitres sur les pages de droite, standard pour les copies reliées.

## Réutiliser vos papiers sous forme de chapitres

La plupart des thèses absorbent des articles publiés, et la plupart des universités l’autorisent explicitement. La mécanique : supprimer chaque article de son préambule, rétrograder ses "\sections" si nécessaire, unifier la notation et les macros entre les chapitres et fusionner les bibliographies en une seule. Garder chaque chapitre dans son propre fichier rend cela gérable. [Diviser les chapitres en fichiers](/learn/split-chapter-files/) montre la configuration `\input`/`\include` qui maintient une construction de 200 pages saine.

Un avertissement honnête : les cours de thèse universitaire ont tendance à être lourds en paquets, de sorte que la première compilation sur une nouvelle machine peut extraire un lot de paquets avant de réussir. Laissez-le se terminer une fois et les versions suivantes sont rapides.