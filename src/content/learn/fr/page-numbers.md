---

title: "Numéros de page activés ou désactivés"
description: "clair, vide, romain contre arabe, supprimant les chiffres sur la page de titre."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Numéros de page activés ou désactivés

Les numéros de page apparaissent par défaut dans `article` : les classes standards utilisent le style de page `plain`, qui centre le numéro en bas de chaque page. Habituellement, c'est bien et on n'y pense jamais. Les trois situations dans lesquelles vous y pensez sont de masquer le numéro sur une page de titre, de désactiver complètement la numérotation et de basculer entre les chiffres romains et arabes dans un document plus long.

## Masquer le numéro sur la page de titre

Une page de titre avec un « 1 » solitaire en bas semble inachevée. Le correctif est une ligne placée juste après la définition du titre :

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` modifie le style de page pour la page actuelle uniquement, et `empty` est le style intégré qui n'imprime rien dans l'en-tête ou le pied de page. L'ordre est important : il doit venir après `\maketitle` sur la même page, car `\maketitle` réinitialise lui-même le style de la page. Notez que la page compte toujours ; la page suivante sera numérotée 2. Si vous utilisez `\begin{titlepage}...\end{titlepage}` au lieu de `\maketitle`, le numéro est supprimé pour vous et la page suivante commence à 1.

## Styles et systèmes de numérotation

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Ces deux paires de commandes contrôlent des choses différentes, et les mélanger est le trébuchement classique. `\pagestyle{...}` contrôle où le numéro apparaît et ce qui l'entoure : `plain` donne le numéro de pied de page centré, `empty` supprime les en-têtes et les pieds de page de chaque page à partir de ce point. Cela ne dit rien sur ce à quoi ressemble le numéro.

`\pagenumbering{...}` contrôle la façon dont le nombre est écrit : `roman` produit i, ii, iii, tandis que `arabic` produit 1, 2, 3. Il existe également `Roman` pour I, II, III et `alph` pour a, b, c, bien que vous en ayez rarement besoin. `\pagenumbering` réinitialise également le compteur de pages à 1. Cette réinitialisation est une fonctionnalité, pas un bug : c'est ce qui permet à une thèse de numéroter sa préface de i à vi, puis de commencer le premier chapitre à la page 1.

Si vous souhaitez un contrôle total sur le placement, comme le numéro dans un coin ou associé à un titre courant, c'est le travail du package fancyhdr plutôt que de ces éléments intégrés. Voir [têtes et pieds courants](/learn/headers-footers/).

## L'erreur courante

Écrire `\pagestyle{empty}` alors que vous vouliez dire `\thispagestyle{empty}` supprime silencieusement les numéros de l'ensemble du document, et vous ne le remarquerez peut-être pas jusqu'à ce qu'un réviseur vous demande pourquoi vos pages ne sont pas numérotées. N'oubliez pas la règle : `\thispagestyle` est une exception d'une page, `\pagestyle` est un commutateur à l'échelle du document.

Sujet de thèse : [Guide roman/arabe](/learn/front-matter-page-numbers/).