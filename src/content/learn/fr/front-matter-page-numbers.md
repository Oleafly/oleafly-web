---

title: "Pages romaines puis arabes"
description: "Une numérotation préliminaire à laquelle les comités s’attendent toujours."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Pages romaines puis arabes

Ouvrez presque n'importe quelle thèse ou manuel et vous verrez la même convention : la page de titre, le résumé, la table des matières et les remerciements sont numérotés i, ii, iii en chiffres romains minuscules, puis le premier vrai chapitre recommence à la page 1 en chiffres arabes ordinaires. Le sujet initial est traité comme une séquence préliminaire distincte, et les écoles supérieures vérifient explicitement cette convention. Dans LaTeX, cela prend exactement deux commandes.

## Le modèle

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` fait deux choses à la fois : il change le style numérique en minuscule romain et réinitialise le compteur de pages à 1, de sorte que la page de titre devient la page i. Tout ce que vous placez après, généralement `\maketitle`, le résumé, la [table des matières](/learn/table-of-contents/) et toutes les listes de figures ou de tableaux, sont numérotés ii, iii, iv, et ainsi de suite.

Ensuite, immédiatement avant le premier chapitre, `\pagenumbering{arabic}` change le style et réinitialise à nouveau le compteur, donc `\chapter{Introduction}` s'ouvre sur une nouvelle page 1. La réinitialisation est tout l'intérêt : sans elle, votre introduction commencerait sur quelque chose comme la page 7, ce qui n'est pas ce à quoi s'attendent les comités ou les conventions de citation.

Étant donné que `\chapter` dans les classes `book` et `report` démarre toujours une nouvelle page, vous n'avez pas besoin d'un `\newpage` explicite avant le changement. Dans une classe sans chapitres, vous ajouteriez d'abord « \clearpage » afin que le changement de numérotation n'arrive pas au milieu de la page.

## Des cours qui le font pour vous

Certains cours de thèse fournissent `\frontmatter` / `\mainmatter` / `\backmatter`. Ceux-ci proviennent de la classe « livre » et constituent une manière de niveau supérieur de dire la même chose. `\frontmatter` passe à la numérotation romaine et rend les chapitres non numérotés (une préface n'obtient donc pas d'étiquette "Chapitre 1"). `\mainmatter` passe en arabe et restaure les chapitres numérotés. `\backmatter` désactive à nouveau la numérotation des chapitres pour les éléments de type annexe à la fin. Si le modèle de votre université est construit sur `book` ou `memoir`, préférez ces commandes au `\pagenumbering` brut, car le modèle peut y associer des comportements supplémentaires, comme des en-têtes différents pour les premières lignes. Les deux approches ne s’opposent pas, mais il n’y a aucune raison de les utiliser toutes les deux.

## Une chose à vérifier

Les pages numérotées en romain doivent correspondre à votre table des matières. Si votre résumé apparaît comme page « iv » dans la ToC mais s'imprime comme « 2 », la cause habituelle est un appel `\pagenumbering` placé après le contenu qu'il était censé couvrir, ou une deuxième compilation manquante : les numéros de page dans la ToC proviennent du fichier `.aux`, vous devez donc [compiler deux fois](/learn/compile-to-pdf/) avant de juger si la numérotation est correcte. Compilez, compilez à nouveau, puis comparez la ToC aux pages réelles.