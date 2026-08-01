---

title: "Macros qui gardent la notation honnête"
description: "newcommand, NewDocumentCommand, un fichier de macros partagé."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Macros qui gardent la notation honnête

Chaque article a une notation qui répète : les nombres réels, un opérateur d'espérance, une valeur absolue avec des barres correctement dimensionnées. Si vous tapez `\mathbb{R}` à quarante endroits et que votre conseiller préfère par la suite `\mathbf{R}`, vous avez quarante modifications à effectuer et vous en manquerez une. Une macro transforme cette notation en une seule commande nommée, définie une fois. Changez la définition et tout le document suit. C’est ainsi que vous gardez une notation honnête : la source ne peut pas se désynchroniser avec elle-même.

## Définir des commandes avec newcommand

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

La première définition est la plus simple : `\R` est désormais un pur raccourci, et taper `\R` n'importe où produit `\mathbb{R}`.

La deuxième forme prend un argument. Le « [1] » après le nom déclare que « \E » accepte un argument, et « #1 » marque l'endroit où cet argument atterrit dans l'expansion. Ainsi `\E{X}` devient `\mathbb{E}\left[X\right]`. La définition n'achète pas que de la brièveté : la paire `\left[` et `\right]` fait s'agrandir les crochets pour s'adapter à tout ce qui se trouve à l'intérieur, donc `\E{\frac{X}{n}}` obtient automatiquement des crochets hauts. La macro `\abs` fait la même chose avec `\lvert` et `\rvert`, la bonne paire de barres verticales pour la valeur absolue. Vous pouvez déclarer jusqu'à neuf arguments et les appeler de « #1 » à « #9 ».

Si une commande existe déjà, `\newcommand` refuse de la redéfinir et s'arrête avec une erreur, ce qui vous évite de casser quelque chose en silence. Pour remplacer délibérément une commande existante, utilisez plutôt `\renewcommand`.

## L'interface moderne

LaTeX actuel propose également une commande de définition plus riche :

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` utilise une chaîne de spécification d'argument au lieu d'un nombre. Ici, `mm` signifie deux arguments obligatoires, donc `\citepair{knuth84}{lamport94}` cite les deux clés. Le langage de spécification va plus loin que `\newcommand` : `o` déclare un argument facultatif entre crochets, `s` détecte une variante en étoile et `O{default}` donne à un argument facultatif une valeur par défaut. Pour tout ce qui va au-delà de la simple substitution, accédez à cette interface.

## Partagez les définitions

Gardez un « macros.sty » partagé entre les chapitres. Mettez vos définitions dans ce fichier, chargez-le avec `\usepackage{macros}` de chaque document, et chaque chapitre d'une thèse, ainsi que les diapositives et la version papier, sont tous d'accord sur la notation. Lorsqu'un collaborateur nous rejoint, il lit un court fichier pour apprendre vos conventions au lieu de les désosser à partir du texte. Cela se couple naturellement avec une [configuration multi-fichiers](/learn/split-chapter-files/).

Un conseil sur la dénomination : donnez aux macros des noms significatifs comme `\abs` ou `\norm` plutôt que des noms basés sur l'apparence comme `\bigbars`. Le nom doit indiquer ce que signifie la notation, afin que la définition soit libre de modifier son apparence. Et évitez de définir une macro pour quelque chose que vous utilisez deux fois ; le gain commence vers la troisième utilisation.