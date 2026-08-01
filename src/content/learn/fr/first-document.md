---

title: "Compilez votre premier PDF"
description: "Un petit article, une compilation et les trois idées qui vous permettent de tirer le meilleur parti de LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Compilez votre premier PDF

Si vous n'avez jamais écrit qu'avec Word ou Google Docs, LaTeX vous demande d'inverser une habitude. Au lieu de formater le texte au fur et à mesure que vous tapez, vous décrivez votre document en texte brut et laissez un programme le composer pour vous. Ce texte brut se trouve dans un fichier `.tex` : un fichier texte ordinaire que vous pouvez ouvrir dans n'importe quel éditeur, avec vos mots plus des commandes comme `\section{...}` qui disent ce que *est* chaque morceau. La compilation transforme cette source en un PDF fini. Un moteur LaTeX lit votre fichier de haut en bas, interprète chaque commande, dispose les pages et écrit le PDF. Vous ne formatez jamais directement la sortie. Vous modifiez la source et compilez à nouveau.

## Le plus petit document réel

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Lisez-le de haut en bas. `\documentclass{article}` indique au moteur de quel type de document il s'agit, qui définit des valeurs par défaut raisonnables pour les polices, les marges et les styles de titre. Les lignes `\title`, `\author` et `\date` stockent uniquement les métadonnées ; rien n'est encore imprimé, et `\today` signifie simplement la date du jour où vous compilez. `\begin{document}` marque l'endroit où commence le contenu réel. `\maketitle` est le moment où le cartouche stocké apparaît sur la page. `\section{Introduction}` imprime un en-tête numéroté et l'enregistre discrètement afin qu'une table des matières puisse le retrouver plus tard. Les dernières lignes montrent les deux faces des mathématiques : `$...$` compose une formule à l'intérieur d'une phrase, tandis que `\[ ... \]` lui donne sa propre ligne d'affichage centrée.

## Trois idées qui portent le langage

1. Les commandes commencent par une barre oblique inverse et prennent généralement un argument entre accolades, donc `\textbf{hello}` signifie « composer bonjour en gras ».
2. Les environnements enveloppent une région entre `\begin{...}` et `\end{...}`, et le corps de votre fichier est lui-même un grand environnement `document`.
3. Le préambule est tout ce qui précède `\begin{document}` ; il configure le document mais ne produit jamais de texte visible.

Presque tout le reste dans LaTeX est une variation de ces trois éléments.

## Compilez-le

Dans [Oleafly](/docs/getting-started/), créez un projet, collez la source ci-dessus et compilez. Le PDF apparaît à côté de votre source et SyncTeX relie les deux côtés : cliquez à un endroit du PDF pour accéder à la ligne source correspondante, ou inversement. La toute première compilation d'un projet peut prendre un peu plus de temps le temps que le moteur récupère ce dont il a besoin ; les courses ultérieures sont plus rapides.

Une chose à laquelle il faut s'attendre : tôt ou tard, une compilation échouera avec un message d'erreur et un numéro de ligne. Ceci est tout à fait normal et signifie généralement une faute de frappe dans le nom d'une commande ou une accolade fermante manquante. Corrigez la ligne sur laquelle il pointe et compilez à nouveau.

## Suivant

Continuez avec [le préambule, expliqué](/learn/preamble-explained/) pour voir ce que font réellement les lignes de configuration, puis [math mode](/learn/math-mode/) pour les formules. Gardez la [aide-mémoire](/learn/cheatsheet/) ouverte pendant que vous écrivez votre première vraie page.