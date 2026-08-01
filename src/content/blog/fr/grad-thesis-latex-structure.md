---

title: "Structurer une thèse d'études supérieures en LaTeX avant que la panique ne s'installe"
description: "Le chapitre comprend les acronymes, les fichiers de cours universitaires, la vitesse de compilation et l'historique Git pour les étudiants à la maîtrise et au doctorat."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

La thèse est un long document auquel s’ajoutent de la bureaucratie. LaTeX gère le long
papier bien. La bureaucratie est généralement un dossier de cours universitaire rédigé en 2009
et testé pour la dernière fois sur un autre TeX Live.

Commencez la structure tôt, même si les chapitres sont encore vides. Déplacer du contenu entre
fichiers au cours du dernier mois est la façon dont les références croisées et les chemins de figures se séparent.

## Acceptez le fichier de classe, clôturez le reste

Mettez l'université `.cls` (et les fichiers `.bst`/logo requis) dans le projet.
Ne réécrivez pas la classe. Mettez vos macros, packages et contenu de chapitre dans
fichiers que vous contrôlez :

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Si la classe échoue sur un moteur moderne, faites un tri avec
[fichiers de cours universitaires qui ne seront pas compilés](/learn/fix-broken-template/).
Documentez le moteur accepté par le bureau de thèse (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) avant d'investir dans `fontspec`.

## Sujet de prétention attendu par les commissions

Numéros de page romains pour le résumé, la dédicace, les remerciements, la table des matières, les listes de
figures/tableaux ; arabe pour les chapitres principaux. Les cours de livre/rapport exposent
`\frontmatter` / `\mainmatter`; les modèles basés sur des articles nécessitent un manuel
`\numérotation des pages`. Guide :
[romain puis arabe](/learn/front-matter-page-numbers/).

Le contenu de la page de titre doit souvent correspondre à un spécimen Word de l'école supérieure.
Recopiez exactement le texte. La créativité ici fait rejeter le PDF par un
liste de contrôle.

## Chapitres sous forme de fichiers

Une racine, plusieurs comprennent :

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Possédez vous-même des chapitres, même lorsque les coauteurs aident sur les articles qui alimentent la thèse.
Conservez les chiffres sous « figures/chapter3/ » afin que les chemins restent stables lorsque vous réorganisez.
Utilisez `\includeonly{chapters/methods}` lors de la rédaction pour que la thèse complète soit compilée
ne sont pas le coût de chaque modification d'équation :
[fichiers de chapitre divisé](/learn/split-chapter-files/).

Les étiquettes doivent être uniques dans tout le projet (`eq:ch3-main`, et non `eq:main` dans
chaque fichier). Vues de structure à l'échelle du projet et aide à la vérification des références en direct sur un
Arbre de 200 pages.

## Acronymes et symboles

Les packages de glossaires sont puissants et difficiles. Pour de nombreuses thèses, un
une liste de symboles dans le texte préliminaire suffit. Si vous avez besoin d'une extension automatique
acronymes, prévoyez une journée pour apprendre les « glossaires-extra » avant la semaine de
soumission, pas pendant celle-ci.

Définissez des macros mathématiques dans « macros.tex » et traitez ce fichier comme une loi partagée. Notation
qui dérive entre le chapitre 2 et le chapitre 5 est un cadeau pour un examinateur pédant.

## Bibliographie

Un `.bib` pour toute la thèse, ou un petit ensemble soigneusement fusionné. Clés stables.
Validez avant la reliure souple :
[Validateur BibTeX](/tools/bibtex-validator/). Correspond au style du département
veut (styles de sciences humaines numériques, auteur-année, notes de bas de page). Ne pas mélanger
biblatex et BibTeX classique s'empilent dans un seul préambule.

## Vitesse

La compilation des thèses complètes devient lente. Mode brouillon pour les figures, `\includeonly` et
TikZ externalise le rachat d'heures. Remarques :
[attente plus courte pour le PDF](/learn/speed-up-compilation/).

Gardez un rituel de « compilation complète » chaque semaine afin de toujours voir des échecs entre chapitres
tôt.

## La sauvegarde n'est pas la même chose que l'historique

Une copie Dropbox est une sauvegarde. Git raconte comment l'argument a changé.
Validez lorsqu'un chapitre est compilé. Transférez-le vers une télécommande GitHub ou GitLab privée.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) initialise un
dépôt réel par projet, points de contrôle après des compilations réussies et des modifications inactives,
et restaure en un clic, à côté des vues de structure à l'échelle du projet et de SyncTeX
qui fonctionnent toujours dans les fichiers de chapitre. Cela rend cette habitude plus difficile à ignorer.
Vous pouvez obtenir la même discipline avec n’importe quel éditeur et avec Git prudent ; la thèse
ne devrait pas dépendre du rappel de « git init » au dix-huitième mois.

## Boucles de rétroaction du comité

Exportez le PDF pour les lecteurs qui n’ouvriront pas la source. Suivez les commentaires dans les numéros ou
un document partagé, mais appliquez les modifications dans TeX. Lorsqu'un membre du comité renvoie un
PDF de balisage numérisé, nommez le fichier avec la date et la version afin de savoir lequel
source commit à laquelle il fait référence.

## Liste de contrôle à reliure souple et cartonnée

Avant d'imprimer ou de déposer :

- Le fichier de classe et le moteur correspondent aux règles du bureau de thèse.
- La numérotation des pages préliminaires est correcte ; page de signatures présente si nécessaire.
- Tous les `\ref`/`\cite` sont résolus ; non `[?]`.
- Chiffres et tableaux répertoriés si nécessaire ; légendes cohérentes.
- Les marges et la taille de la police satisfont à la liste de contrôle PDF (imprimer une page de test).
- Source + PDF + hash de commit archivé après dépôt.

## Figures, tableaux et pages "liste de"

De nombreux bureaux de thèse exigent une liste de figures et de tableaux. Les légendes doivent être
cohérent et ne pas vider toute la section des méthodes dans une légende de 20 lignes. Utiliser
des titres courts pour les listes et des légendes explicatives plus longues dans le corps si le
la classe prend en charge les sous-titres courts facultatifs.

## Plagiat et publications antérieures

Si les chapitres remixent des articles publiés, suivez les règles de l'université en matière d'inclusion
et autorisation du co-auteur. Conservez le PDF accepté de chaque article antérieur et la thèse
chapitre dans le contrôle de version avec une note sur ce qui a changé (notation, étendue
expériences, introduction unifiée).

## Commencez ce mois-ci, pas le mois où vous écrivez

Créez le squelette lorsque vous proposez le contour. Chapitres vides qui compilent
compter comme un progrès. La panique la plus tardive est liée à la structure de la dette et à une attitude tenace.
fichier de classe, pas une lacune dans la science. Payez cette dette plus tôt.