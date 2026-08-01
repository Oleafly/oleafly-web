---

title: "Les fichiers dans un vrai projet"
description: ".tex, .bib, .cls, .sty et les fichiers indésirables générés que vous ne devez pas commettre."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# Les fichiers dans un vrai projet

Ouvrez le dossier de n'importe quel vrai projet LaTeX après une compilation et vous trouverez bien plus de fichiers que vous n'en avez écrit. Cela surprend la plupart des débutants, et la peur de supprimer la mauvaise chose maintient les dossiers encombrés pour toujours. La distinction qui clarifie les choses : certains fichiers sont des sources que vous modifiez, d'autres sont des styles fournis par un modèle ou un package, et le reste est un espace de travail généré que le compilateur recrée à chaque exécution.

## Les fichiers que vous écrivez

Vos fichiers « .tex » contiennent le document réel : le texte, les sections, les figures et les mathématiques. Un fichier « .bib » est votre base de données bibliographique, une entrée par article ou livre que vous pourriez citer ; vous pouvez le maintenir à la main ou l'exporter depuis un gestionnaire de références comme Zotero. Ce sont les fichiers qui valent la peine d'être sauvegardés et placés dans le contrôle de version, car tout le reste peut être reconstruit à partir d'eux.

## Les fichiers qu'un modèle vous donne

Un fichier `.cls` définit une classe de document, la chose que vous nommez dans `\documentclass{...}`. Les revues et les conférences expédient les leurs, de sorte que chaque soumission semble identique et que vous n'en modifiez presque jamais une. Un fichier `.sty` est un package : des macros et des paramètres réutilisables chargés avec `\usepackage`. Vous n’en écrirez un vous-même que lorsque vous souhaiterez partager des commandes personnalisées sur plusieurs documents. Un fichier `.bst` décrit un style de citation BibTeX et est également généralement simplement déposé par un lieu.

## Les fichiers créés par le compilateur

Le fichier « .aux » stocke les données de références croisées et de citations entre les passes de compilation ; ne le modifiez jamais et n'hésitez pas à le supprimer, car la prochaine compilation le réécrit. Le fichier `.log` enregistre tout ce que le compilateur a fait et ne vaut la peine d'être ouvert qu'en cas de problème. Le « .pdf » est la sortie que vous souhaitiez réellement.

| Rallonge | Rôle | Modifier à la main ? |
| --- | --- | --- |
| `.tex` | Documents sources et chapitres | Oui |
| `.bib` | Base de données bibliographique | Oui (ou exporter depuis Zotero) |
| `.cls` | Classe de documents | Rarement, les modèles de fournisseurs |
| `.sty` | Packages / fichiers de styles | Lors de l'écriture de vos propres macros |
| `.bst` | Style BibTeX | Rarement |
| `.aux` | Données de référence croisée | **Non :** généré |
| `.log` | Journal du compilateur | Lire lors du débogage |
| `.pdf` | Sortie | Afficher / soumettre |

## Disposition du projet qui évolue

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Un `main.tex` au niveau supérieur fait office de point d'entrée, les chapitres vivent dans leur propre dossier et sont extraits avec `\input` ou `\include`, les images se trouvent dans `figures/` et la bibliographie reste dans un `refs.bib`. Cette mise en page reste gérable, que le projet soit un article de quatre pages ou une thèse. [Fichiers de chapitre divisés](/learn/split-chapter-files/) montre comment les morceaux se connectent.

Si vous utilisez Git, ajoutez `*.aux`, `*.log` et les autres fichiers générés à `.gitignore` afin que votre historique ne suive que la source réelle. Les projets Oleafly sont de simples dossiers sur le disque, ce conseil s'y applique donc sans modification. L'erreur la plus courante est l'inverse : lors de la recherche d'une erreur de compilation étrange, la suppression des fichiers `.aux` est souvent la solution, car un fichier périmé provenant d'une exécution interrompue peut empoisonner chaque compilation suivante.