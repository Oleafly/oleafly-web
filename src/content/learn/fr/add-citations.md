---

title: "De la clé .bib à la citation dans le texte"
description: "La boucle BibTeX habituelle avec les commandes cite et bibliographie."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# De la clé .bib à la citation dans le texte

Citer une source dans LaTeX implique deux éléments : une base de données en texte brut qui décrit chaque œuvre une fois et une commande `\cite` dans votre document qui pointe vers une entrée par sa clé. LaTeX numérote la citation, formate la liste de références et maintient la cohérence lorsque vous réorganisez les sections ou ajoutez des sources. Vous ne tapez jamais "[12]" à la main et vous ne renumérotez jamais quoi que ce soit vous-même.

## Les commandes dans le document

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` insère le marqueur dans le texte là où appartient la citation. Les deux commandes en bas font le reste : `\bibliographystyle{plain}` choisit le format des citations et des références, et `\bibliography{refs}` nomme le fichier de base de données (sans son extension `.bib`) et marque l'endroit où la liste de références doit être imprimée, généralement juste avant `\end{document}`. Seules les sources que vous citez réellement apparaissent dans la liste.

## L'entrée dans la base de données

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Celui-ci se trouve dans `refs.bib`, un fichier séparé à côté de votre `main.tex`. Le mot après « @ » est le type d'entrée, « knuth84 » est la clé de citation et le reste sont des champs que le style utilise pour créer la référence formatée. La clé est le seul lien entre les deux fichiers, elle doit donc correspondre exactement à l'argument de `\cite`, y compris les majuscules. Vous pouvez vérifier toute une base de données pour les champs manquants et les entrées mal formées avec le [validateur BibTeX](/tools/bibtex-validator/).

## Pourquoi une seule compilation ne suffit pas

La bibliographie est construite par un programme distinct. Lors du premier passage LaTeX, le document écrit la liste des clés citées dans un fichier auxiliaire. Le programme `bibtex` lit ensuite cette liste, extrait les entrées correspondantes de `refs.bib` et les formate. Deux autres passes LaTeX replient le résultat et résolvent les marqueurs dans le texte. Oleafly exécute ce cycle complet pour vous à chaque compilation. Si vous construisez à la main et sautez l’étape intermédiaire, les citations apparaissent sous forme de points d’interrogation en gras ; voir [Effacer les guillemets mystères](/learn/citation-question-mark/) lorsque cela se produit.

## Où aller à partir d'ici

Un seul fichier « .bib » peut servir pour chaque article que vous rédigez, il est donc utile de le construire avec soin. [Créez un .bib qui dure](/learn/create-bibliography/) couvre les types d'entrées, les champs obligatoires et les clés qui survivent une décennie. Lorsqu'un lieu souhaite un look différent, vous modifiez une ligne plutôt que n'importe quelle entrée, comme expliqué dans [Styles numériques, auteur-année, journal](/learn/change-citation-style/).