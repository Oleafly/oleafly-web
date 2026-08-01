---

title: "Articles sur la biologie et les sciences de la vie : figures, planches multi-panneaux et coauteurs"
description: "LaTeX pratique pour les laboratoires humides et la biologie computationnelle : figures multi-panneaux, résolution, suppléments, notation statistique et collaboration sans écrasement."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Les manuscrits des sciences de la vie sont au premier plan. Les évaluateurs parcourent l'assiette avant de
lisez votre prose, le personnage doit donc porter l'affirmation sans agiter la main
la légende. LaTeX gère cela très bien si vous traitez les chiffres comme étant de première classe
des fichiers de projet au lieu de quelque chose que vous collez à 2 heures du matin avant le supplément
date limite.

Les groupes de laboratoire humide et de calcul rencontrent les mêmes dégâts : panneaux sans partage
barres d'échelle, artefacts JPEG sur les transferts, suppléments qui ne parviennent pas à se compiler et un
une douzaine de coauteurs éditant un paragraphe. Voici ce qui fonctionne réellement.

## Chiffres multi-panneaux

Les évaluateurs s'attendent à des panneaux (a)(b)(c) sous une seule légende. Vous pouvez soit :

1. Construisez la plaque en dehors de TeX (Illustrator, Inkscape, Fiji export) et déposez-la.
   dans un seul PDF ou PNG, ou
2. Assemblez dans TeX avec `subcaption` lorsque chaque panneau est son propre fichier :

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Faites référence aux panneaux sous la forme Figure~\ref{fig:exp}a dans le texte uniquement si le style du journal
le permet. De nombreux sites préfèrent la « Figure 2A » avec un seul schéma appliqué
partout. En savoir plus sur ce modèle :
[panneaux a, b, c](/learn/subfigures-abc/).

Nommez les fichiers de manière cohérente (`fig03_western_a.pdf`) pour que personne n'invente
`final_gel_NEW.png` la semaine de soumission.

## Résolution, couleur et formats de fichiers

Conservez les archives de microscopie au format TIFF ou PDF haute résolution. Pour le PDF papier
lui-même, utilisez des graphiques vectoriels pour les schémas et PNG/PDF avec suffisamment de dpi pour
données raster. Ignorez les annotations et les gels JPEG en ligne. Artefacts de compression
lire comme une science bâclée même lorsque l'expérience se déroule bien.

Vérifiez les frais de couleur et les règles d'impression avant de concevoir une palette de six couleurs qui
ne fonctionne que sur votre moniteur calibré. Certaines revues veulent du CMJN ; d'autres se convertissent
mal sans demander. Lorsqu'ils demandent des versions de clé sécurisées en niveaux de gris
chiffres, donnez-leur ceux-là.

Placez les barres d'échelle et les unités d'intensité sur le panneau, pas seulement dans la légende. Si
les chiffres des réaménagements de production, les barres d'échelle intégrées survivent ; notes sous-titrées uniquement
ce n’est souvent pas le cas.

## Schémas vs panneaux de données

Séparez le « dessin du chemin » de la « quantification de la tache ».
Les dessins animés peuvent être TikZ ou des images vectorielles externes. Les panneaux de données doivent rester proches de
l'export des analyses afin que vous puissiez les régénérer lorsqu'un réviseur souhaite un
normalisation différente. Notez le chemin du script d'analyse dans les notes de légende ou dans un
supplément de reproductibilité lorsque la revue le permet.

## Suppléments qui compilent toujours

Des tables géantes, des gels supplémentaires et des images fixes de films font partie d'un supplément qui lui est propre
document ou une annexe claire. Quelques règles qui évitent les maux de tête :

Les étiquettes doivent être uniques si main et supplément partagent une seule compilation. S'ils sont
projets séparés, écrivez "Figure S3" en texte brut et ne vous fiez pas à `\ref`
à travers les PDF. Gardez une courte liste des revendications du texte principal pointant vers quelles
compléter les articles, donc rien ne dérive.

Un supplément qui ne compile pas la semaine de soumission reste votre
problème, même lorsque le PDF principal semble propre.

## Chaos multi-auteurs

Les articles de biologie ont souvent de nombreux co-auteurs avec différents niveaux de compétences LaTeX. Posséder
fichiers par section (`results.tex`, `methods.tex`, `figs.tex`), fusionner
Git et décidez qui gère le `.bib` (une personne ou un groupe Zotero partagé)
exportation).

Un dossier de projet local est plus facile à compresser pour un collaborateur qu'un cloud
projet auquel ils perdent l’accès après l’obtention de leur diplôme. Le véritable historique de Git bat le courrier électronique
pièces jointes nommées `manuscript_JM_edits_FINAL.docx` que quelqu'un reconvertit
à TeX à la main. Point de contrôle après une compilation réussie ; restaurer lors d'une fusion
ça va mal; garder une télécommande privée.

Si certains coauteurs n'éditent que Word, exportez-les au format DOCX ou PDF et conservez `.tex`
comme source de vérité. Voir
[coauteurs qui ne parlent que Word](/learn/collaborator-uses-word/).

## Méthodes et notation statistique

Définissez les macros statistiques une fois pour que les valeurs p n'apparaissent pas à la fois sous la forme « $p$ » et
`p=` dans le même article :

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Indiquez le test, n et la correction de comparaison multiple dans les méthodes ou le tableau
notes, pas seulement dans une légende de figure qui est recadrée en production. Dense
les articles bénéficient d’une courte liste de notations. Vérification des références/citations en direct dans un
l'éditeur de recherche détecte un `\ref` dans un panneau supprimé avant le réviseur.

## Légendes qui portent la revendication

Une bonne légende indique ce qui a été mesuré, dans quel système et ce que le lecteur
devrait le remarquer. Évitez « Voir le texte ». Ne videz pas les méthodes dans la légende qui
appartiennent à la section méthodes. Les lettres du panneau (gras ou parenthèses) doivent
correspondre au style de la maison.

## Liste de contrôle des chiffres avant la soumission

Avant de cliquer sur Soumettre, parcourez les chiffres une fois :

- Chaque chiffre principal cité dans l'ordre (ou quel que soit l'ordre autorisé par le journal).
- Panneaux étiquetés ; barres d'échelle là où elles comptent.
- Pas de gâchis JPEG sur les panneaux quantitatifs.
- Compilations de suppléments ; Les numéros S n’ont pas été remaniés.
- Politique de couleur vérifiée ; tailles de fichiers inférieures aux limites du portail.
- Images sources et scripts toujours trouvables dans les archives du projet ou du laboratoire.

## Westerns, gels et contraste

Ne traitez pas trop les transferts pour le PDF. Les journaux et les lecteurs surveillent le contraste
jeux. Conservez les fichiers bruts dans les archives du laboratoire et expédiez les panneaux qui correspondent à ce que
quantification utilisée. Si vous réorganisez les panneaux, mettez à jour chaque panneau dans le texte
lettre le même jour, pas « plus tard ».

## Films et suppléments interactifs

Lorsque le journal autorise les films, hébergez-les comme indiqué et mettez un
toujours plus la légende dans le PDF. Ne dépendez pas d'un lien cloud personnel qui
décède après l'obtention de son diplôme.

Les chiffres constituent l’épine dorsale de ces articles. LaTeX n'est que le cadre. Assurez-vous
le cadre n'est pas ce qui échoue la veille de la soumission.