---

title: "Type de plus en plus petit"
description: "Options de classe telles que 11 pts et commutateurs de taille locale qui ne détruisent pas l'espacement des lignes."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Type de plus en plus petit

La taille des caractères dans LaTeX est définie à deux niveaux : une taille de base à l'échelle du document choisie une fois dans les options de classe et des commutateurs locaux pour les étendues qui doivent différer. La taille de base détermine tout le reste. Les titres, les notes de bas de page et les tailles locales sont tous définis par rapport à celui-ci.

## À l'échelle du document

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

L'option class définit la taille du corps du texte. « 10pt » est la valeur par défaut, et « 11pt » et « 12pt » sont les alternatives courantes ; les classes standard ne prennent en charge que ces trois-là. La modification de l'option redimensionne l'ensemble du document proportionnellement, puisque la taille des titres, la taille des notes de bas de page et l'espacement des lignes dérivent tous de la base. Si vous avez besoin d'une taille de base supérieure à 12 points, des classes telles que « extarticle » ou les classes KOMA-Script acceptent un plus large éventail d'options.

## Commutateurs locaux

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Ce sont des déclarations plutôt que des commandes avec des arguments : `\large` change la taille à partir de ce point jusqu'à la fin du groupe actuel, et les accolades autour de `{\large plus grand}` limitent sa portée. L'échelle complète, du plus petit au plus grand, est `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Chaque étape correspond à une taille concrète qui dépend de l'option de classe, donc `\large` sous `12pt` est plus grand que `\large` sous `10pt`. Considérez les commutateurs comme des étapes éloignées du corps du texte, et non comme des tailles fixes.

L'espacement des lignes a une subtilité. Un commutateur de taille ajuste la distance de base uniquement pour les paragraphes qui se terminent lorsqu'il est actif. Pour une étendue de plusieurs paragraphes d'une taille plus grande, conservez le saut de paragraphe à l'intérieur du groupe en se terminant par `\par` avant l'accolade fermante, comme dans `{\large ... \par}`. Sinon, le dernier paragraphe conserve un interligne de taille normale sous les lettres surdimensionnées et les lignes entrent en collision.

## Tailles par rapport à la structure

Résistez à l’utilisation de commutateurs de taille pour de faux titres. `\section` et ses proches définissent la taille pour vous, numérotent également le titre, l'ajoutent à la table des matières et créent des signets PDF. Une ligne `{\Large \textbf{...}}` construite à la main ne donne rien de tout cela. La même idée s'applique à l'accentuation, abordée dans [emphase sans combattre la police](/learn/bold-italic/). Réservez les changements de taille manuels aux besoins véritablement locaux, comme une remarque de la taille d'une note de bas de page sous un tableau ou une ligne sur une page de titre. Si chaque titre d'un document a besoin d'être relooké, changez de classe ou utilisez un package comme `titlesec` plutôt que de redimensionner chaque titre à la main.