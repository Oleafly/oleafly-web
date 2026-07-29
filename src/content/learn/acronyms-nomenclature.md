---
title: "Acronyms and symbol lists"
description: "glossaries-extra sketch, or a hand-built list when that is enough."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Acronyms and symbol lists

Long documents accumulate abbreviations, and the conventions around them are strict. An acronym is spelled out in full at first use, abbreviated afterward, and a thesis usually needs a list of abbreviations in the front matter. Maintaining that by hand fails in a predictable way. You reorder two chapters, the first use moves, and suddenly "ML" appears three pages before "machine learning (ML)" does. The `glossaries-extra` package tracks first use for you.

## The automated route

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

The `acronym` option enables acronym support, and `\makeglossaries` switches on the machinery that collects entries during the compile. Each `\newacronym` takes three arguments: a key you will type in the text, the short form, and the long form. Define all of them in the preamble or in a separate file you `\input`, so they live in one place.

In the body, you never type the acronym itself:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

The first `\gls{ml}` in the document prints "machine learning (ML)", and every later one prints just "ML". Because the package tracks usage rather than position in the source, the expansion follows the first use wherever your restructuring moves it. `\printglossaries` prints the collected list of abbreviations wherever you place it, typically after the table of contents. Related commands cover the grammar around this: `\glspl` for plurals, `\Gls` for a capitalized start of sentence.

The catch is the build. Between LaTeX passes, the `makeglossaries` helper must run to sort and format the entries, or `\printglossaries` silently produces nothing. Full latexmk setups handle this automatically. Simpler pipelines may not, and glossaries-extra offers a fallback for them. If your list stubbornly refuses to appear, the missing helper run is the first suspect, well ahead of a bug in your document.

## The hand-built route

For a simple list of symbols, a hand-maintained `description` environment often suffices:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Each `\item[...]` prints its bracket argument as a bold label with the explanation following, which is exactly the shape of a notation list. There is no first-use tracking, but a symbol list rarely needs any; symbols are defined where they first appear in the math regardless.

The honest advice is to match the tool to the scale. A paper with five acronyms is easier to manage by hand. A 200-page thesis with forty is not, and there the package pays for its setup cost many times over. The [lists lesson](/learn/lists/) covers the `description` environment in more detail.
