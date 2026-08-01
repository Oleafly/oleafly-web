---

title: "Des rubriques qui se numérotent"
description: "section à travers le paragraphe, formes étoilées, profondeur de sec."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Rubriques qui se numérotent

Dans un traitement de texte, vous numérotez les titres à la main et les renumérotez à la main à chaque fois que vous en déplacez un. LaTeX refuse de vous laisser faire ça. Vous déclarez ce qu'est chaque titre, une section ou une sous-section ou un chapitre, et la numérotation se fait d'elle-même. Insérez une nouvelle section au milieu de votre document et tout ce qui suit est renuméroté lors de la prochaine compilation, ainsi que chaque référence croisée et chaque entrée de table des matières qui y pointe.

## La hiérarchie

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Ces commandes forment une échelle fixe. `\section` est le cheval de bataille de tous les jours dans la classe `article`, avec `\subsection` et `\subsubsection` imbriqués en dessous. `\chapter` n'existe que dans les classes `report` et `book`, c'est pourquoi le collage de chapitres de thèse dans un modèle d'article échoue avec une séquence de contrôle non définie. `\part` se trouve au-dessus des chapitres et est rare en dehors des longs livres. `\paragraph` est l'intrus : il produit un titre en gras sur la même ligne que le texte suivant plutôt qu'un titre sur sa propre ligne, ce qui surprend presque tout le monde la première fois.

Chaque commande prend le texte du titre entre accolades, l'imprime dans la police et la taille choisies par la classe, le numérote et l'enregistre afin que `\tableofcontents` puisse le retrouver plus tard. Vous ne stylisez jamais les titres en ligne. Si vous souhaitez des polices de titre différentes, c'est une décision à l'échelle du document prise dans le préambule.

## Suppression de numéros

Les formulaires étoilés suppriment les nombres : `\section*{Remerciements}`. L'étoile conserve également le titre en dehors de la table des matières et en dehors de la séquence de numérotation, de sorte que la section qui la suit continue comme si la section étoilée n'était pas là. C'est exactement ce que vous recherchez pour des remerciements, une préface ou une conclusion autonome dans un court article. Si une section suivie doit toujours apparaître dans la table des matières, il existe un correctif d'une ligne couvert dans [la leçon de la table des matières] (/learn/table-of-contents/).

## Contrôler la profondeur de la numérotation

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumdegree` décide de la profondeur de la numérotation. Dans `article`, les sections sont de niveau 1, les sous-sections de niveau 2 et les sous-sous-sections de niveau 3, ce qui règle le compteur sur 2 numéros de sections et de sous-sections mais laisse les en-têtes de sous-sous-sections non numérotés tout en conservant leur formatage. `tocdegree` est la même idée pour la table des matières : il contrôle la profondeur de la liste de la table des matières, indépendamment de ce qui est numéroté sur la page. Les deux lignes appartiennent au préambule.

Une erreur courante consiste à sauter des niveaux, par exemple en passant directement de `\section` à `\subsubsection` parce que vous aimez le titre plus petit. La numérotation fonctionne toujours mais produit des résultats étranges comme « 1.0.1 », et les lecteurs perdent la trace de la structure. Choisissez des niveaux de titre pour leur signification et laissez la classe gérer l'apparence. Si vous ne savez pas comment le squelette de votre document s'articule, [la leçon sur le squelette du document](/learn/document-skeleton/) le parcourt.