---

title: "Supprimer les guillemets mystères"
description: "Fautes de frappe, passes manquantes, mauvais chemin, inadéquation BibTeX vs Biber."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Effacement des guillemets mystères

## Le symptôme

Le document est compilé, mais là où une citation doit apparaître, vous obtenez un point d'interrogation en gras, « [?] », et le journal contient des lignes comme « Avertissement LaTeX : Citation 'knuth84' non définie ». Parfois, chaque citation est concernée, parfois seulement une ou deux. Puisqu'il s'agit d'un avertissement plutôt que d'une erreur, le PDF continue de se construire et les marques sont faciles à manquer jusqu'à ce qu'un lecteur les signale.

## Pourquoi ça arrive

LaTeX ne résout pas directement les citations. Au premier passage, il enregistre chaque clé demandée dans un fichier auxiliaire. Un programme backend (`bibtex` ou `biber`) recherche ensuite ces clés dans votre base de données `.bib` et écrit les entrées formatées. Deux autres passes LaTeX replient les résultats. Un point d'interrogation signifie qu'au moment de la passe finale, aucune entrée formatée n'existait pour cette clé. Chaque cause de ce symptôme est une manière de briser ce pipeline.

## Examinez les causes dans l'ordre

Vérifiez d'abord la clé elle-même. `\cite{knuth84}` et `@article{knuth1984,...}` sont des chaînes différentes, et la correspondance est exacte, casse comprise. Recherchez dans votre fichier `.bib` la clé nommée dans l'avertissement ; une faute de frappe de chaque côté est la cause la plus courante, et le premier avertissement de clé manquante dans le journal est celui à rechercher.

Ensuite, assurez-vous que le cycle de compilation complet s'est exécuté. La séquence est LaTeX, puis « bibtex » ou « biber », puis LaTeX deux fois de plus. Une seule compilation ne pourra jamais résoudre les citations, car le backend n’a pas encore été exécuté. Oleafly gère automatiquement l'ensemble du cycle, mais une construction manuelle ou un éditeur mal configuré peut s'arrêter après le premier passage.

Troisièmement, vérifiez le chemin de la base de données. `\bibliography{refs}` et `\addbibresource{refs.bib}` se résolvent par rapport au fichier principal, donc une base de données dans un sous-dossier doit être écrite sous la forme `bib/refs` ou `bib/refs.bib`. Un mauvais chemin échoue discrètement et entraîne généralement avec lui toute la liste de références ; voir [Bibliographie vide](/learn/bibliography-empty/) pour cet échec plus important.

Enfin, faites correspondre le backend au système. Un document qui charge biblatex doit être traité avec `biber`. L'alimenter en « bibtex » classique ne produit aucune sortie utilisable, et chaque citation reste un point d'interrogation, quel que soit le nombre de fois que vous recompilez.

## Si tout le reste échoue

Les fichiers auxiliaires obsolètes peuvent conserver un état ancien et défectueux. Supprimez les fichiers `.aux`, `.bbl` et `.blg` à côté de votre document et reconstruisez à partir de zéro. Le fichier `.blg` vaut également la peine d'être lu avant de le supprimer : il s'agit du propre journal du backend, et il nomme explicitement les bases de données manquantes et les entrées mal formées.