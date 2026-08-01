---

title: "Commandement ou environnement ?"
description: "Les macros acceptent des arguments ; les environnements enveloppent les régions."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Commandement ou environnement ?

Tout ce que vous tapez dans LaTeX au-delà du texte brut prend l'une des deux formes suivantes : une commande ou un environnement. La distinction semble académique jusqu'à ce que vous atteigniez votre premier message d'erreur. La moitié des plaintes de LaTeX concernent l'utilisation de l'un à la place de l'autre. Apprendre à voir quelle forme vous regardez rend à la fois la documentation et les erreurs lisibles.

## Commandes

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Une commande est une barre oblique inverse suivie d'un nom et effectue une substitution à l'endroit où elle apparaît. `\textbf{argument}` prend un argument entre accolades et le compose en gras ; l'effet commence et se termine avec les accolades. Les commandes peuvent prendre plusieurs arguments entre accolades, et beaucoup acceptent également un argument facultatif entre crochets avant elles, comme dans `\documentclass[11pt]{article}`.

Les deux premières lignes montrent que les commandes sont quelque chose que vous pouvez créer. `\newcommand{\foo}{bar}` définit une nouvelle commande nommée `\foo` dont l'expansion est le texte `bar`, et à partir de là, taper `\foo` n'importe où produit `bar`. C'est le mécanisme derrière les [macros personnalisées](/learn/custom-commands/), et c'est aussi ainsi que fonctionnent les packages : un package est en grande partie un fichier de définitions de commandes.

Une bizarrerie qui mérite d'être connue dès le début : une commande comme `\LaTeX` avale l'espace qui la suit, donc `\LaTeX is fun` imprime les mots exécutés ensemble. Écrivez `\LaTeX{} is fun` ou `\LaTeX\ is` pour conserver l'espace.

## Environnements

```latex
\begin{center}
 Centered block
\end{center}
```

Un environnement enveloppe une région du document entre une paire `\begin{...}` et `\end{...}` correspondante, et applique son comportement à tout ce qu'il contient. Ici, l'environnement « central » centre chaque ligne du bloc. Les environnements peuvent être imbriqués, à condition qu'ils se ferment dans l'ordre inverse de leur ouverture, et ils peuvent également prendre des arguments : `\begin{tabular}{ll}` ouvre une table et lui transmet une spécification de colonne.

Parce que les environnements doivent s’équilibrer, ils échouent de manière distincte. Une erreur telle que `\begin{itemize} terminé par \end{document}` signifie qu'un environnement a été ouvert et n'a jamais été fermé. Trouvez le `\end` manquant ; ne regardez pas la ligne des noms d’erreurs.

## La règle générale

S'il enveloppe une région avec un début et une fin clairs, il s'agit probablement d'un environnement. S'il s'agit d'une petite substitution ou d'un changement, c'est une commande. Les deux formes se chevauchent même : chaque environnement `foo` est implémenté sous la forme d'une paire de commandes `\foo` et `\endfoo` sous le capot. Pour une visite guidée des commandes et des environnements que vous rencontrerez le plus, consultez [chaque commande expliquée](/learn/every-command-explained/), ou essayez les deux formes dans le [terrain de jeu en direct](/live/).