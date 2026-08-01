---

title: "Tout ce qui précède commence{document}"
description: "Packages, métadonnées et ordre de chargement : ce qui appartient au préambule et ce qui ne l'est pas."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Tout ce qui précède commence{document}

Tout entre `\documentclass{...}` et `\begin{document}` est le **préambule**. Il ne produit aucun texte visible. Il configure l'exécution. Les polices, les marges, les packages, les commandes personnalisées et les métadonnées des documents se trouvent tous ici, c'est pourquoi le préambule d'un article mature est souvent plus long que son introduction. Une fois que vous savez ce que fait chaque ligne, un modèle copié cesse d’être magique et devient une liste de contrôle.

## Anatomie

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

Les options de `\documentclass` définissent les valeurs par défaut globales : `11pt` est la taille de police de base à partir de laquelle tout le reste est mis à l'échelle, et `a4paper` déclare la taille du papier. Les deux lignes d'encodage sont des compagnons historiques : `inputenc` indique au moteur que votre fichier source est UTF-8, et `fontenc` sélectionne l'encodage de la police afin que les caractères accentués soient de vrais glyphes plutôt que des composites. LaTeX actuel suppose déjà l'entrée UTF-8, vous verrez donc ces lignes omises dans les nouveaux documents, mais elles sont inoffensives et les modèles les conservent pour des raisons de compatibilité.

Le bloc du milieu charge les packages de fonctionnalités. [geometry](/learn/margins-geometry/) définit les marges dans une seule option, `amsmath` et `amssymb` fournissent les environnements mathématiques et les symboles dont presque tous les documents techniques ont besoin, `graphicx` active `\includegraphics` pour les figures et `booktabs` fournit les règles qui donnent aux tableaux un aspect professionnel. Enfin, [hyperref](/learn/hyperlinks/) rend les références et les citations cliquables et est délibérément chargé en dernier, car il redéfinit les composants internes de nombreux autres packages.

Les lignes `\title`, `\author` et `\date` stockent uniquement les métadonnées. Rien ne s'imprime jusqu'à ce que `\maketitle` soit exécuté dans le corps, c'est pourquoi ceux-ci peuvent figurer dans le préambule.

## Règles empiriques

Quelques habitudes maintiennent les préambules sains. Chargez un package par tâche et évitez d'empiler des packages qui se disputent le même territoire, comme deux manières de définir les marges. Gardez hyperref à la fin, avec la poignée d'exceptions documentées comme intelligentef qui doivent venir après. Placez les choix à l'échelle du document dans les options de classe plutôt que de les disperser, de sorte que « 11pt » ou « twocolumn » soit déclaré une fois, là où tout le monde peut le voir. Et une fois que vos [macros personnalisées](/learn/custom-commands/) dépassent quelques lignes, déplacez-les vers un fichier « .sty » afin que plusieurs documents puissent partager un ensemble de définitions.

La discipline la plus utile est négative : si vous ne savez pas pourquoi une ligne de préambule est là, renseignez-vous avant que votre document n'en dépende. Les préambules copiés accumulent des délais, et les délais sont l'endroit où se cachent les conflits de packages. Voir également [le squelette du document](/learn/document-skeleton/) et [les moteurs comparés](/learn/engines-compared/).