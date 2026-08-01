---

title: "habitudes natbib vs commandes biblatex"
description: "Citations entre parenthèses et textuelles, et les noms qui les remplacent."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# habitudes natbib vs commandes biblatex

La citation auteur-année nécessite deux types de commande cite. Parfois, les auteurs font partie de votre phrase, comme dans « Knuth (1984) a introduit la programmation alphabétisée ». Parfois, la citation est une parenthèse, comme dans « La programmation littéraire mélange code et prose (Knuth, 1984). » Le simple `\cite` ne peut pas faire cette distinction, c'est pourquoi le package `natbib` existe et pourquoi biblatex fournit son propre ensemble de noms pour les mêmes idées. Si vous avez appris l'un et recevez un modèle utilisant l'autre, cette page est la table de traduction.

## Les commandes natbib

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

Le mnémonique est que `\citet` est une citation *textuelle* qui se lit comme une partie de la phrase, tandis que `\citep` est une citation *parenthèse* entourée de parenthèses. Les variantes étoilées impriment la liste complète des auteurs au lieu de « et al. », ce qui est parfois requis la première fois que vous citez une œuvre. natbib propose également `\citeauthor` pour uniquement les noms, `\citeyear` pour uniquement l'année et un argument facultatif pour les numéros de page, comme dans `\citep[p.~42]{knuth84}`. natbib est un package de l'ère des préprocesseurs : il fonctionne avec BibTeX classique et un style `.bst` compatible tel que `plainnat` ou `apalike`.

## Les équivalents biblatex

biblatex couvre le même terrain avec des noms différents. `\textcite{knuth84}` produit la forme textuelle "Knuth (1984)", `\parencite{knuth84}` produit la parenthèse "(Knuth, 1984)", et simple `\cite{knuth84}` produit une simple citation dont l'apparence exacte dépend du style chargé. Il existe également des analogues directs pour le reste : `\citeauthor`, `\citeyear`, et des prénotes et postnotes pour des choses comme les numéros de page, écrits `\parencite[see][p.~42]{knuth84}`. Si la mémoire musculaire est le problème, biblatex a même une option de package `natbib=true` qui définit `\citet` et `\citep` comme alias, ce qui rend la migration presque indolore.

## Migration d'un document de natbib vers biblatex

Votre fichier `.bib` ne nécessite aucune modification. Les deux systèmes lisent la même base de données. La migration ne touche que le préambule et le build. Supprimez `\usepackage{natbib}` et la ligne `\bibliographystyle`, puis chargez `\usepackage[backend=biber,style=authoryear]{biblatex}` et pointez-le vers votre base de données avec `\addbibresource{refs.bib}`. Remplacez `\bibliography{refs}` à la fin du document par `\printbibliography`. Enfin, assurez-vous que la construction exécute « biber » au lieu de « bibtex », car biblatex stocke ses données dans un format différent et l'ancien backend ne produira rien en silence. Si vous préférez ne pas toucher au corps du texte, conservez les noms des commandes natbib via l'option de compatibilité et seul le préambule change.

## Lequel choisir

Si le modèle de journal charge déjà natbib, restez avec lui. Combattre un fichier de classe en vaut rarement la peine. Pour les nouveaux documents de votre choix, biblatex est plus flexible et gère mieux Unicode. La comparaison plus large se trouve dans [Classic BibTeX ou biblatex](/learn/bibtex-vs-biblatex/), et le changement de style par la suite est couvert dans [Styles numériques, auteur-année, journal](/learn/change-citation-style/).