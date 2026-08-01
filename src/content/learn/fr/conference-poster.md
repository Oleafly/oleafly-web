---

title: "Affiches au A0"
description: "tikzposter, Beamerposter ou géométrie plus TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Affiches au A0

Une affiche de conférence est une simple page, généralement A0 ou A1, qui doit être lisible à un mètre et demi. LaTeX gère bien le format car l'affiche peut réutiliser directement les équations, les figures et la bibliographie de l'article. Cependant, une classe de document normale ne suffira pas : les polices, les marges et la disposition des colonnes nécessitent toutes des versions à l’échelle d’une affiche. Trois approches couvrent presque toutes les affiches LaTeX dans la nature.

## Les trois options

Le cours « tikzposter » est la voie la plus directe vers une affiche académique moderne. Il organise le contenu en blocs de couleur disposés en colonnes, propose plusieurs thèmes complets et gère lui-même les grands formats de papier et les polices mises à l'échelle. Un squelette ressemble à ceci :

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

Les options de cours définissent une police de base de 25 points, du papier A0 et une orientation portrait. Chaque `\column{0.5}` prend une fraction de la largeur de l'affiche, et chaque `\block{title}{content}` devient un panneau intitulé. Changer `\usetheme` restyle chaque bloc à la fois.

Le package « Beamerposter » étend Beamer aux tailles d'affiches, de sorte que le thème, les couleurs et les environnements « de bloc » d'un deck sont transférés sur un seul cadre géant. C'est le choix naturel lorsque votre groupe gère déjà les styles Beamer et que de nombreux modèles d'affiches universitaires sont basés sur ceux-ci.

La troisième option est une classe de document simple avec le package « géométrie » définissant les dimensions A0, plus TikZ pour la décoration. Cela donne un contrôle total sur chaque millimètre et c'est ainsi que sont fabriquées les affiches les plus fortement conçues, mais vous construisez vous-même l'échafaudage à colonnes, vous devez donc prévoir du temps réel pour cela.

## Conseils pratiques

Quelle que soit la voie que vous choisissez, partez d'un modèle de travail plutôt que d'un fichier vierge, par exemple celui de la [gallery](/templates/), et remplacez le contenu bloc par bloc. Définissez le format et l'orientation du papier dès le premier jour, car leur modification ultérieure interrompt chaque largeur réglée manuellement. Le corps du texte devrait finir entre 24 et 32 ​​points une fois imprimé ; tout ce qui est inférieur à 20 points ne sera pas lu. Préférez les figures vectorielles. Un tracé exporté pour une colonne de papier se transforme en bouillie lorsqu'il est mis à l'échelle à la largeur de l'affiche, donc régénérez les figures à la taille de l'affiche au lieu de les étirer.

L’échec le plus courant est de traiter l’affiche comme du papier compressé. Prévoyez environ un tiers du nombre de mots de votre premier brouillon, laissez les chiffres porter l'argument et vérifiez le résultat en imprimant un bloc du PDF au format A4 à grande échelle pour juger de la taille réelle de la police avant d'envoyer le fichier à un traceur.