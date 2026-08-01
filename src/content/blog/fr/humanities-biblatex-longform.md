---

title: "Sciences humaines et version longue : biblatex, notes de bas de page et livres de chapitres"
description: "Notes de bas de page, citations flexibles, sources d'archives, structure en plusieurs chapitres et propriété pluriannuelle pour l'histoire, la littérature, la philosophie et les classiques."
date: 2026-07-05
tags: [humanities, biblatex, thesis]
---

Les manuscrits en sciences humaines se soucient autant de la forme des citations que de l’argumentation. Un numérique
Le style IEEE est faux ici ; les notes de bas de page, le titre de l'auteur et les sources d'archives sont les
norme. LaTeX vaut la peine d'être appris une fois que vous avez plus qu'un document de séminaire et un
poignée de livres dans la bibliographie.

Ce guide s'adresse aux étudiants qui empilent des chapitres de thèse ou rédigent un long article
avec de vraies notes de bas de page. Si vous n’avez besoin que de trois entrées MLA, vous pouvez vous arrêter plus tôt.

## Préférez biblatex pour la flexibilité

`biblatex` gère mieux les notes de bas de page, les styles verbeux et les raccourcis que le classique
BibTeX pour la plupart des flux de travail en sciences humaines :

```latex
\usepackage[backend=biber,style=verbose-ibid]{biblatex}
\addbibresource{sources.bib}
```

Les alternatives courantes incluent `authortitle`, `verbose`, les styles spécifiques à la revue,
ou quels que soient les mandats de votre département. Faites d'abord correspondre le manuel, puis choisissez le
style biblatex le plus proche. Contexte :
[BibTeX ou biblatex](/learn/bibtex-vs-biblatex/).

Exécutez **biber** (ou le backend dont votre style a besoin), pas seulement pdflatex. Vide
les bibliographies sont presque toujours une erreur de backend ou de chemin. Valider les entrées
avant la soumission : [BibTeX validateur](/tools/bibtex-validator/).

## Sources d'archives et Web

Les lettres, manuscrits et sites Web ont besoin de champs qui consignent les entrées « @article »
ne vous souciez pas de:

- `@unpublished` ou biblatex `@online` pour les sources web avec `urldate`
- emplacement des archives, collection, folio pour manuscrits
- des clés stables que vous comprendrez encore dans deux ans

Les entrées incomplètes échouent tranquillement jusqu'à ce que la bibliographie paraisse clairsemée. Préférez-en un
`.bib` (ou un petit ensemble par projet) sur un texte de note de bas de page copié-collé qui dérive
en décalage avec les ouvrages cités.

## Notes de bas de page et notes de fin

De nombreux styles de sciences humaines nécessitent des notes de bas de page. styles verbeux `biblatex` et
`\footcite` / les citations automatiques de notes de bas de page couvrent beaucoup de terrain. Si le
le département veut des notes de fin, configurez-les tôt. Conversion de trois chapitres de
citations de notes de bas de page, la semaine de soumission est misérable.

Gardez les apartés de fond brefs. Si une note de bas de page est un paragraphe complet, demandez si
il appartient au texte principal. Les lecteurs parcourent.

## Chapitres et éditions critiques

Les projets de type livre nécessitent un « livre », un « mémoire » ou un cours de thèse universitaire avec
`\include` par chapitre :

```latex
\include{chapters/ch1-intro}
\include{chapters/ch2-archive}
```

Les références croisées vers d'autres chapitres doivent utiliser `\ref` / `\cref`, et non codés en dur
Des cordes "voir chapitre 4" qui pourrissent lorsque vous commandez à nouveau. Vues de structure qui répertorient
les titres des fichiers aident sur un brouillon de 200 pages. Il en va de même pour la compilation avec
`\includeonly` pendant que vous révisez un chapitre.

Les éditions critiques et les textes parallèles disposent de packages spécialisés. N'inventez pas un
mise en page avec des minipages brutes jusqu'à ce que vous ayez vérifié si une classe maintenue
existe déjà pour votre langue.

## Citation et langue

Utilisez des guillemets appropriés pour la langue du document (`csquotes` aide à
guillemets imbriqués et marques sensibles à la langue). Bloquer les citations de plus de quelques lignes
doit utiliser un environnement de cotation, et non une indentation manuelle qui s'interrompt
mises en page à deux colonnes ou lorsque les marges changent.

Pour les projets multilingues, XeLaTeX ou LuaLaTeX avec `fontspec` et un langage
est moins pénible que d'empiler les hacks « inputenc » des années 1990. Choisissez des polices qui
couvrez les scripts dont vous avez besoin avant d'écrire le chapitre trois dans une police qui ne peut pas
les rendre.

## Images, cartes et notes d'utilisation équitable

Les cartes et les photos manuscrites sont généralement des fichiers PDF/PNG externes, et non TikZ.
Légende avec source et statut d'autorisation. Gardez les masters haute résolution à l’extérieur
l'historique git s'ils sont énormes ; commettre les chiffres compressés le papier
utilise réellement, et mettez une note dans le README sur l'endroit où vivent les maîtres.

## Propriété locale des années de notes

Une thèse est une arborescence de fichiers pluriannuelle. Le conserver uniquement dans un projet de navigateur
lié à un seul compte représente un risque lorsque les étudiants changent d’établissement ou perdent l’accès
après l'obtention du diplôme.

Les dossiers simples plus Git, compilés localement, vieillissent mieux.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) vise à cela
une sorte de long document. Vous obtenez des vues de structure à travers les chapitres, à l’échelle du projet
références et citations, sort hors ligne et grammaire sur la prose (il ignore les clés de citation), et
de vrais points de contrôle Git sans compte. Vous pouvez toujours ouvrir les mêmes fichiers dans
tout autre éditeur. La propriété est le point.

## Workflow qui survit à un comité

Geler le style de citation par rapport au manuel la première année et en conserver un
base de données bibliographique avec clés stables. Mettre les fichiers de chapitre sous contrôle de version
avec une télécommande privée. Les éléments préliminaires (résumé, remerciements, table des matières) doivent
suivez les règles des cours universitaires pour les pages roman/arabe. Compilez le PDF complet
mensuellement même si vous rédigez avec `\includeonly`, donc les références inter-chapitres ne le font pas
vous surprendra à la fin.

## Pré-soumission

- Biber/bibtex fonctionne proprement ; non `[?]` cite.
- Le style de note de bas de page correspond au département.
- Références croisées de chapitre mises à jour après réorganisation.
- Polices intégrées ; les marges correspondent à la liste de contrôle du bureau de thèse.
- Source et PDF tous deux archivés, pas seulement le reçu du portail de téléchargement.

## Indexation et back-issue

Les projets de classe livre ont parfois besoin d'un index (`imakeidx` et amis). Budget
le temps d’une véritable passe d’indexation ; le marquage automatique de chaque mot en majuscule produit
des ordures. Les annexes des transcriptions doivent utiliser une numérotation claire qui indique
les chapitres peuvent `\ref`.

## Brouillons de comité vs dépôt PDF

Les brouillons de lignes numérotées ou les marges larges peuvent faciliter le balisage, mais le PDF de dépôt doit
correspondre au spécimen du bureau de thèse. Conserver une option de classe ou un indicateur « brouillon » distinct
vous ne modifiez donc pas manuellement les marges le matin du dépôt.

Obtenez le moteur de citation dès le début. L'argument mérite davantage l'attention
qu'une bataille bibliographique de la semaine dernière.