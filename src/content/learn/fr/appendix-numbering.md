---

title: "Des annexes qui renumérotent proprement"
description: "annexe, chapitres A/B, compteurs qui restent cohérents."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Des annexes qui renumérotent proprement

Une annexe contient du matériel qui soutient le texte principal mais qui pourrait l'interrompre : de longues épreuves, des instruments d'enquête, des tableaux supplémentaires, des détails de mise en œuvre. Les lecteurs s'attendent à ce que les annexes portent les lettres A, B, C plutôt que de continuer les numéros de chapitre, et s'attendent à ce que le contenu qu'ils contiennent suive le mouvement, donc une figure dans l'annexe A est la figure A.1, et non la figure 47. Dans LaTeX, il s'agit d'un simple changement, pas d'un travail de restructuration.

## Le commutateur

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

`\appendix` est une déclaration, pas un environnement : il n'y a rien à fermer. À partir du point où il apparaît, les compteurs de section se réinitialisent et passent aux lettres. Dans les classes `report` et `book`, chaque `\chapter` après lui devient l'Annexe A, l'Annexe B, et ainsi de suite, et une `\section` à l'intérieur devient A.1. Vous écrivez toujours uniquement votre propre texte de titre ; l'étiquette « Annexe A » et le lettrage proviennent de la classe, exactement comme les numéros de chapitre avant le changement.

Dans `article`, qui n'a pas de chapitres, `\appendix` renomme `\section` à la place : la première section après elle devient l'Annexe A. Tout en aval reste automatiquement cohérent. La table des matières répertorie les titres lettrés, et un « \label » placé dans une annexe se résout via « \ref » en « A » ou « A.2 » sans aucune manipulation particulière.

## Ce qui renumérote et ce qui ne se renumérote pas

Dans « rapport » et « livre », les figures, tableaux et équations sont numérotés au sein des chapitres, ils récupèrent donc la lettre gratuitement : la première figure de l'annexe B est la figure B.1. Dans `article`, ces compteurs parcourent continuellement tout le document et `\appendix` ne les touche pas, donc la numérotation des équations se poursuit simplement. C'est normal pour un article court ; Combattez-le uniquement si un lieu demande explicitement des numéros avec le préfixe A.

## Quand tu en veux plus

Le package `appendice` ajoute des améliorations qui manquent au commutateur simple. Son environnement `appendices` peut imprimer le mot "Annexe" dans chaque en-tête et dans la table des matières (`\usepackage[toc,titletoc,title]{appendix}`), et il peut insérer une page de séparation annonçant les annexes. Pour une thèse dont le modèle ne gère pas déjà cela, ces options évitent les manipulations manuelles.

Une erreur courante consiste à écrire vous-même l'étiquette dans le titre, comme dans `\chapter{Annexe A : Preuves supplémentaires}`. La classe ajoute sa propre étiquette, donc la sortie indique « Annexe A Annexe A : Preuves supplémentaires ». Donnez au titre uniquement le titre et laissez la machine de numérotation faire son seul travail. Si vous avez une seule annexe, la seule « Annexe A » est une question de style ; la plupart des lieux l'acceptent, et certains préfèrent un `\chapter*{Appendix}` sans lettre.