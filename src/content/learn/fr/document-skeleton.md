---

title: "Un squelette que vous pouvez réutiliser"
description: "Classe, préambule, titre, sections, bibliographie : la forme de presque tous les articles."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# Un squelette que vous pouvez réutiliser

Supprimez le contenu et presque tous les documents LaTeX ont le même squelette : une déclaration de classe, un préambule de configuration et un corps entre `\begin{document}` et `\end{document}`. Une fois que vous connaissez cette forme, démarrez un nouveau projet en collant le squelette, en changeant le titre et en écrivant.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Lecture de haut en bas : `\documentclass[11pt]{article}` sélectionne le type de document et définit la taille de police de base en option. Tout le reste de la conception découle de ce choix. La région entre la ligne de classe et `\begin{document}` est le [préambule](/learn/preamble-explained/), où les packages sont chargés et les métadonnées telles que `\title` et `\author` sont stockées. `\begin{document}` marque l'endroit où commence le contenu visible, `\maketitle` compose le cartouche stocké et le corps suit sous forme de sections, de figures et éventuellement d'une bibliographie. `\end{document}` ferme le document. Tout ce qui suit est ignoré en silence, ce qui cache parfois un morceau de texte collé au mauvais endroit.

## Choix de classes

| Classe | Utiliser |
| --- | --- |
| `article` | Papiers, devoirs, notes |
| `rapport` | Rapports plus longs avec chapitres |
| `livre` | Livres et nombreuses thèses |
| `projecteur` | Diapositives |

Le cours n’est pas cosmétique ; cela change les commandes existantes. `article` n'a pas de `\chapter`, donc y coller des chapitres de thèse échoue immédiatement. `report` ajoute des chapitres et donne au titre sa propre page. `book` suppose une impression recto verso et ouvre les chapitres sur les pages de droite. `beamer` restructure tout autour des cadres pour les diapositives. Les revues et les conférences proposent leurs propres classes, et lorsque vous écrivez pour un lieu, sa classe remplace entièrement cette décision.

Deux erreurs expliquent la plupart des squelettes brisés. Le texte placé avant `\begin{document}` déclenche l'erreur "Missing \begin{document}", car le préambule ne peut que configurer, jamais imprimer. Et un `\end{document}` manquant laisse le compilateur attendre à la fin du fichier avec un message inutile sur la fin de l'entrée. Lorsque l’un ou l’autre apparaît, vérifiez le cadre du document avant de soupçonner le contenu.

Les écailles du squelette. Une note de quatre pages maintient le corps en ligne ; une thèse déplace chaque chapitre vers son propre fichier et les extrait de la racine, comme indiqué dans [fichiers de chapitre divisé] (/learn/split-chapter-files/). Le cadre qui les entoure ne change pas.