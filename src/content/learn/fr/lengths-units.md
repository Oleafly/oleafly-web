---

title: "pt, em, largeur du texte"
description: "Unités absolues et relatives à la police que vous définissez réellement."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, largeur du texte

Presque toutes les commandes de mise en page dans LaTeX prennent une longueur : espace vertical, largeurs d'image, marges, épaisseurs de règles. Une longueur est un nombre plus une unité, et le choix de l'unité décide si la mise en page s'adapte lorsque la taille de la police ou la géométrie de la page change, ou s'interrompt le jour même.

| Unité | Signification |
| --- | --- |
| `pt` | Pointe (base) |
| `eux` | Largeur relative à la police |
| `ex` | Hauteur relative à la police |
| `cm` / `mm` / `po` | Absolu |
| `\textwidth` | Largeur du bloc de texte |
| `\largeur de ligne` | Largeur de la colonne/minipage actuelle |

## Unités absolues et relatives

`pt` est le point de l'imprimante, l'unité de base de TeX. Les tailles de police et de nombreux paramètres internes par défaut sont indiqués en points, et un pouce équivaut à 72,27 pt selon le calcul de TeX. « cm », « mm » et « in » sont les unités absolues familières, appropriées lorsqu'une exigence est véritablement physique, comme une marge obligatoire d'un pouce.

`em` et `ex` évoluent avec la police actuelle : un em est à peu près la taille de la police exprimée en largeur, et un ex est à peu près la hauteur d'un x minuscule. Leur avantage est la proportionnalité. Un `\vspace{1em}` reste visuellement cohérent si le document passe du type 10pt à 12pt, où un `\vspace{12pt}` codé en dur devient trop serré ou trop lâche.

## Longueurs que le document vous donne

`\textwidth` est la largeur du bloc de texte de la page. `\linewidth` est la largeur du conteneur actuel, qui est égale à `\textwidth` dans un texte ordinaire mais se rétrécit à l'intérieur d'une minipage, d'une liste ou d'une colonne. Une décimale devant met à l'échelle l'un ou l'autre, et c'est la manière standard de dimensionner les chiffres :

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

La première ligne insère un em d'espace vertical. La seconde définit l'image à la moitié de la largeur du bloc de texte, donc si les marges changent, la figure se redimensionne avec elles et ne déborde jamais dans la marge. À l'intérieur d'une minipage ou d'une mise en page à deux colonnes, préférez « 0,5\linewidth », car « \textwidth » est plus large que l'espace dont vous disposez réellement.

Les longueurs sont également réglables. `\setlength{\parindent}{0pt}` supprime l'indentation des paragraphes et la même commande ajuste la plupart des longueurs de mise en page nommées.

L’erreur courante consiste à dimensionner les chiffres en centimètres. Cela fonctionne jusqu'à ce que la classe du document, le format du papier ou les marges changent, puis chaque figure doit être réajustée manuellement. Les largeurs exprimées en fractions de « \textwidth » ou « \linewidth » survivent à tous ces changements sans modification, c'est pourquoi les modèles les utilisent presque exclusivement.