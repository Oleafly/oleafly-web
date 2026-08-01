---

title: "Un fichier racine, plusieurs chapitres"
description: "include vs input, includeonly et rédiger un chapitre à la fois."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Un fichier racine, plusieurs chapitres

Une thèse dans un seul fichier `.tex` devient pénible à travailler quelque part vers le deuxième chapitre : le défilement remplace la réflexion, et chaque compilation traite tout. Le remède standard est un fichier racine contenant la classe et le préambule, avec chaque chapitre dans son propre fichier. Le fichier racine les assemble.

## Le fichier racine

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` est le seul fichier que vous ayez jamais compilé. Chaque `\include` nomme un autre fichier sans son extension `.tex`, en utilisant des barres obliques sur chaque plate-forme, et extrait son contenu à ce stade. Les fichiers de chapitre eux-mêmes contiennent uniquement du contenu, commençant généralement par `\chapter{...}`. Ils n'ont pas d'environnement `\documentclass` ni `document` qui leur sont propres, car ce sont des fragments de ce document, pas des documents.

## inclure par rapport à l'entrée

Les deux commandes d'inclusion se comportent différemment et les différences déterminent laquelle utiliser et où. `\include` démarre une nouvelle page avant le matériel, qui convient aux chapitres, et écrit un fichier `.aux` distinct pour chaque fichier inclus, ce qui rend possible la compilation sélective. `\input` est un collage de texte brut : pas de saut de page, pas de `.aux` séparé, et il peut être imbriqué dans une autre entrée. Cela fait de `\input` le bon outil pour les fragments plus petits qu'un chapitre, comme une grande table conservée dans son propre fichier ou un [fichier de macros] partagé (/learn/custom-commands/). Une règle structurelle à retenir est que `\include` ne peut pas être imbriqué dans un fichier inclus, tandis que `\input` peut être utilisé n'importe où.

## Rédiger un chapitre à la fois

```latex
\includeonly{chapters/methods}
```

Placé dans le préambule, `\includeonly` indique à LaTeX de traiter uniquement les fichiers répertoriés tout en lisant les données `.aux` enregistrées de tous les autres. La compilation devient considérablement plus rapide, et comme les étiquettes et le nombre de pages des autres chapitres sont relus à partir de leurs fichiers `.aux`, les références croisées et la numérotation dans le chapitre que vous rédigez restent correctes. Cette seconde moitié est la raison de préférer cela au commentaire des lignes `\include`, qui oublie complètement les autres chapitres et transforme chaque `\ref` en `??`.

Commentez la ligne `\includeonly` pour les versions complètes et exécutez toujours une compilation complète avant de partager un PDF, car les données `.aux` obsolètes peuvent être en retard par rapport aux modifications apportées dans les chapitres exclus. Pour savoir quels fichiers du dossier résultant vous appartiennent et lesquels sont générés, voir [les fichiers d'un projet réel](/learn/latex-file-types/).