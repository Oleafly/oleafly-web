---

title: "BibTeX classique ou biblatex"
description: "Backends, styles et ce qui change au jour le jour."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# BibTeX classique ou biblatex

LaTeX dispose de deux systèmes de citation qui lisent les mêmes fichiers « .bib » mais diffèrent sur presque tout le reste. Le BibTeX classique date des années 1980 : un petit programme externe formate vos références à l'aide de fichiers de style écrits dans son propre langage basé sur une pile. biblatex est le remplacement moderne : le formatage s'effectue dans LaTeX lui-même, avec un programme d'assistance appelé « biber » effectuant le tri et la gestion des données. Les noms sont étrangement similaires. N'oubliez pas que « BibTeX » est à la fois l'ancien programme et, plus vaguement, l'ancien système, tandis que « biblatex » est un package LaTeX qui utilise « biber » comme backend.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Âge | Classique | Moderne |
| Styles | `.bst` | `.bbx`/`.cbx` |
| Unicode | Fragiles | Fort |
| Prise en charge des revues | Universel | Croissance |

## Ce que signifient les différences dans la pratique

La ligne de style compte le plus. Les styles BibTeX sont des fichiers « .bst » que presque personne ne peut lire ou modifier, vous prenez donc ce que le journal livre. Les styles biblatex sont des LaTeX ordinaires, divisés en composants de bibliographie (`.bbx`) et de citation (`.cbx`), et de petits changements comme la suppression d'URL ou la modification de la ponctuation sont des personnalisations sur une seule ligne. La ligne Unicode est importante si vos références contiennent des noms accentués ou des scripts non latins. BibTeX classique les détruit à moins que chaque caractère ne soit échappé en tant que `\'{e}` et amis, tandis que biber gère UTF-8 de manière native. La dernière ligne explique pourquoi BibTeX classique survit : la plupart des revues et conférences distribuent toujours un fichier « .bst » et attendent la chaîne d'outils classique, et les systèmes de soumission refusent souvent tout autre chose.

## À quoi ressemble un document biblatex

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

Par rapport au modèle classique, `\addbibresource{refs.bib}` (avec l'extension) se déplace dans le préambule, `\printbibliography` remplace `\bibliography{refs}`, et il n'y a pas de ligne `\bibliographystyle` car le style est une option du package. La build doit exécuter « biber » au lieu de « bibtex » ; exécuter le mauvais backend est une cause fréquente d'une [bibliographie vide](/learn/bibliography-empty/).

## Comment choisir

Laissez le lieu décider quand il le peut. Si le modèle contient un fichier `.bst` ou si les instructions de l'auteur mentionnent BibTeX, utilisez BibTeX classique et ne le combattez pas. Lorsque vous contrôlez le format, comme pour une thèse, une prépublication ou des notes de cours, biblatex est le meilleur outil : une personnalisation plus propre, une véritable prise en charge d'Unicode et des types d'entrée spécialement conçus pour les sources Web. Votre base de données `.bib` fonctionne de manière inchangée sous les deux systèmes, le choix n'est donc jamais permanent. Les commandes de citation diffèrent entre les deux, et [habitudes natbib vs commandes biblatex](/learn/natbib-vs-biblatex/) mappe un ensemble sur l'autre.