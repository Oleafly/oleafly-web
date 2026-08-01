---

title: "TOC, listes de figures, listes de tableaux"
description: "table des matières et pourquoi la deuxième passe est importante."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# TOC, listes de figures, listes de tableaux

Une table des matières dans LaTeX n'est pas quelque chose que vous créez ou maintenez. Vous déposez une seule commande là où vous le souhaitez et LaTeX rassemble les entrées des titres que vous avez déjà écrits. Il en va de même pour la liste des figures et la liste des tableaux, qui collectent des légendes au lieu de titres. C'est l'un des endroits où déclarer une structure s'avère directement rentable : renommez une section ou déplacez une figure et le sujet se fixe tout seul.

## Les trois commandes

```latex
\tableofcontents
\listoffigures
\listoftables
```

`\tableofcontents` imprime la table des matières à l'endroit où elle apparaît, généralement juste après la page de titre ou le résumé. Chaque `\chapter`, `\section` et `\subsection` numérotés apparaît avec son numéro, son titre et sa page, jusqu'à la profondeur définie par le compteur `tocdegree` décrit dans [la leçon sur les titres] (/learn/sections/). `\listoffigures` et `\listoftables` font de même pour les légendes des figures et des tableaux, en extrayant le texte de chaque `\caption{...}`. Dans les articles, ils sont inhabituels, mais les thèses nécessitent généralement les deux, placés sur leurs propres pages après la table des matières.

## Pourquoi le deuxième passage est important

Compilez **deux fois** après les changements structurels. Ce n'est pas de la superstition. C'est ainsi que fonctionne le mécanisme. Lors d'une compilation, LaTeX ne peut pas savoir à la page 2 ce qui finira à la page 47, il écrit donc chaque titre et son numéro de page final dans un fichier auxiliaire (`.toc`, `.lof`, `.lot`) au fur et à mesure. `\tableofcontents` lit le fichier restant de l'exécution précédente. Sur un nouveau projet, ce fichier n'existe pas encore, donc la première compilation produit une table des matières vide. Après avoir ajouté ou déplacé des sections, la table des matières affiche des titres périmés ou des numéros de page incorrects jusqu'à la prochaine exécution. La deuxième compilation lit le fichier fraîchement écrit et tout s'aligne. Les éditeurs qui exécutent latexmk ou un wrapper équivalent gèrent les rediffusions pour vous, c'est pourquoi vous ne l'avez peut-être jamais remarqué. Si jamais votre table des matières semble fausse, compilez-la une fois de plus avant de déboguer autre chose.

## Sections favorites et table des matières

Les sections suivies ont besoin de `\addcontentsline{toc}{section}{Titre}` si elles doivent apparaître dans la table des matières. Un en-tête étoilé comme `\section*{Acknowledgements}` ignore délibérément la numérotation et le fichier de contenu, donc si vous voulez qu'il soit répertorié, vous ajoutez l'entrée vous-même. Les trois arguments de la commande sont le fichier dans lequel écrire (« toc »), le niveau de l'entrée (« section ») et le texte à afficher. Placez la ligne immédiatement après le titre suivi afin que le numéro de page enregistré soit correct.

Une habitude qui mérite d'être prise : avant de partager un PDF, jetez un coup d'œil à la table des matières pour détecter les signes révélateurs d'une version obsolète, tels que des points d'interrogation, des entrées manquantes ou une dernière entrée qui s'arrête avant votre dernier chapitre. Il est presque toujours guéri par une compilation supplémentaire. L'attraper vous-même coûte moins cher qu'un évaluateur l'attraper. La même danse de fichier auxiliaire alimente `\ref` et ses amis, couverts dans [cross-references](/learn/cross-references/).