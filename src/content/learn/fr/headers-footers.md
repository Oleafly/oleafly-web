---

title: "Têtes et pieds qui courent"
description: "Modèles fantaisie HDR pour le titre et le numéro de page."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Courir des têtes et des pieds

Une tête courante est la bande de texte en haut de chaque page, et le pied courant est son homologue en bas. Dans un livre ou une thèse, ils portent généralement le titre du chapitre et le numéro de la page. Dans un article soumis, ils peuvent contenir une version courte du titre, des auteurs, ou rien du tout. Les styles de page intégrés de LaTeX (`plain`, `empty`, `headings`) couvrent les bases, mais dès que vous souhaitez une combinaison spécifique, comme votre titre à gauche et le numéro de page à droite, vous accédez au package `fancyhdr`.

## La recette standard

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Chaque ligne ici fait un travail. `\usepackage{fancyhdr}` charge le package dans votre préambule. `\pagestyle{fancy}` fait passer l'ensemble du document au style configurable de fancyhdr. `\fancyhf{}` efface tous les champs d'en-tête et de pied de page, ce qui est important car fancyhdr est livré avec des valeurs par défaut (numéro de page et marques de section) que vous ne voulez presque jamais mélanger avec les vôtres. Partir de zéro évite les surprises.

Les deux lignes suivantes remplissent les champs. `\fancyhead[L]{Titre court}` place le texte littéral dans l'emplacement gauche de l'en-tête, et `\fancyhead[R]{\thepage}` place le numéro de page actuel dans l'emplacement droit. `\thepage` est une commande qui se développe jusqu'au numéro de page, elle se met donc à jour automatiquement sur chaque page. Il existe un `\fancyfoot[L/C/R]{...}` correspondant si vous préférez mettre les choses en bas.

Enfin, `\headrulewidth` contrôle la fine ligne horizontale sous l'en-tête. Le régler sur « 0,4 pt » dessine une ligne de cheveux ; définissez-le sur « 0pt » pour supprimer complètement la règle. Un `\footrulewidth` existe également et sa valeur par défaut est zéro.

## Documents recto-verso

Si votre classe de document utilise « twoside » (la valeur par défaut pour « book »), les pages alternent entre paires et impaires, et les en-têtes se reflètent généralement. Fancyhdr gère cela avec des sélecteurs pairs/impairs : `\fancyhead[LE,RO]{\thepage}` place le numéro de page à gauche des pages paires et à droite des pages impaires, c'est là que le pouce du lecteur le trouve. Vous pouvez combiner cela avec `\leftmark` et `\rightmark`, qui contiennent les titres de chapitre et de section actuels, pour reproduire la mise en page classique du livre.

## Pages de chapitre et look vide

Les pages d'ouverture de chapitre ignorent votre style sophistiqué car `\chapter` appelle `\thispagestyle{plain}` dans les coulisses. C’est délibéré et la plupart des conceptions le conservent. Si vous voulez que ces pages soient nues, ajoutez `\fancypagestyle{plain}{\fancyhf{}}` pour redéfinir ce que `plain` signifie.

Un avertissement courant à prévoir : fancyhdr peut se plaindre que `\headheight` est trop petit. Le correctif est exactement ce que suggère le message, par exemple `\setlength{\headheight}{14pt}` dans le préambule, ou en passant `headheight=14pt` au [paquet geometry](/learn/margins-geometry/) si vous l'utilisez déjà. Il s'agit d'une réservation de mise en page, pas d'une erreur, mais la faire taire permet de garder votre journal propre et votre grille de base honnête.