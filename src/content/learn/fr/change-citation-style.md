---

title: "Styles de revues numériques, auteur-année"
description: "Échangez les styles sans réécrire la base de données."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Styles numériques, auteur-année, revue

Un style de citation contrôle deux choses : à quoi ressemble le marqueur dans le texte, comme « [12] » par rapport à « (Knuth, 1984) », et comment chaque entrée de la liste de références est formatée. La bonne nouvelle est que le style est complètement distinct de votre base de données `.bib`. Vous pouvez faire passer un article de numérique à année-auteur, ou le reformater pour une autre revue, en modifiant une ligne dans le préambule. Vos entrées restent telles quelles.

## Changer de style avec BibTeX classique

Avec BibTeX, le style réside dans la commande `\bibliographystyle{...}`, qui nomme un fichier `.bst`. Échangez l'argument et recompilez :

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Les revues et les conférences expédient généralement leur propre fichier « .bst », par exemple « IEEEtran.bst » ou « ACM-Reference-Format.bst ». Placez ce fichier à côté de votre « main.tex » et nommez-le dans « \bibliographystyle ». Notez qu'un `.bst` est cuit en un seul regard ; si le lieu souhaite des citations d'auteur et d'année, vous avez également besoin du package `natbib` pour obtenir des commandes telles que `\citep` et `\citet`.

## Changer de style avec biblatex

Avec biblatex, le style est une option sur le package lui-même :

```latex
\usepackage[style=authoryear]{biblatex}
```

D'autres valeurs courantes sont `style=numeric`, `style=numeric-comp` pour les plages compressées comme `[3-6]`, `style=alphabetic` et `style=apa` ou `style=ieee` des packages complémentaires. Étant donné que les styles biblatex sont écrits en LaTeX plutôt qu'en ancien langage « .bst », ils sont beaucoup plus faciles à modifier, par exemple pour changer la ponctuation ou supprimer des URL.

## Recompiler correctement après le changement

Après tout changement de style, les anciens fichiers auxiliaires contiennent toujours des données formatées par le style précédent, donc exécutez un cycle complet : compilez une fois, exécutez le backend (`bibtex` pour BibTeX classique, `biber` pour biblatex), puis compilez deux fois de plus pour que les références croisées s'installent. Oleafly exécute ce cycle pour vous, mais si les citations semblent obsolètes après un changement manuel, la suppression des fichiers « .aux » et « .bbl » et la reconstruction à partir de zéro l'effacent.

## Quelle famille devriez-vous utiliser ?

Si le lieu cible fournit un fichier « .bst » ou une classe qui attend BibTeX, utilisez BibTeX classique ; c'est toujours le cas dans la plupart des revues. Si vous contrôlez vous-même le format, comme dans une thèse ou une prépublication, biblatex est le choix le plus performant. Les compromis sont traités dans [Classic BibTeX ou biblatex](/learn/bibtex-vs-biblatex/), et les différences de commandes dans [habitudes natbib vs commandes biblatex](/learn/natbib-vs-biblatex/).