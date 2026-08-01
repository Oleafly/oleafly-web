---

title: "Matrices en arrays"
description: "pmatrix-, bmatrix-, vmatrix- en aangepaste arraykolommen."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Matrices en arrays

Een matrix in LaTeX is een raster van cellen: `&` scheidt de kolommen, `\\` scheidt de rijen, en een omgeving omhult het raster met het juiste paar scheidingstekens. De matrixomgevingen komen van `amsmath`, dus dat pakket moet in uw preambule staan ​​voordat dit wordt gecompileerd.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## De matrixomgevingen

Alle drie delen hetzelfde lichaam. Alleen de omringende scheidingstekens veranderen. `pmatrix` plaatst het raster tussen haakjes, de meest gebruikelijke stijl voor matrices en vectoren. `bmatrix` gebruikt vierkante haakjes, en `vmatrix` gebruikt enkele verticale balken, de standaardnotatie voor een determinant. Er is ook een gewone 'matrix' zonder scheidingstekens, 'Bmatrix' met accolades en 'Vmatrix' met dubbele staven voor normen. Binnenin vult `a & b` de twee kolommen van een rij, `\\` begint de volgende rij, en elke rij moet hetzelfde aantal `&` scheidingstekens bevatten.

Deze omgevingen moeten in de wiskundige modus verschijnen. Verpak ze in `\[ ... \]` of gebruik ze binnen een vergelijking. Voor een kleine matrix in het midden van een zin stelt `smallmatrix`, ook van `amsmath`, een compacte versie in die de regel niet uitrekt: `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`.

## Aangepaste array

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Wanneer u controle per kolom nodig heeft, is `array` het algemene hulpmiddel. Het verplichte argument is een kolomspecificatie: hier declareert `r|cc` een rechts uitgelijnde kolom, een verticale regel en vervolgens twee gecentreerde kolommen. De uitlijningsletters zijn `l`, `c` en `r`, en `|` tekent een regel tussen de kolommen. Met `\hline` tussen rijen wordt een horizontale lijn over de volledige breedte getekend. `array` trekt zelf geen buitenste scheidingstekens. Koppel het met `\left(` en `\right)` als je dat wilt. Het is de wiskundige versie van de 'tabellarische' omgeving die wordt gebruikt voor tabellen in tekst.

## Veelgemaakte fouten

De foutmelding "Het tabblad Extra uitlijning is gewijzigd in \cr" betekent dat een rij meer `&` scheidingstekens heeft dan het aantal kolommen toestaat, wat meestal teruggaat tot een ontbrekende `\\` aan het einde van de vorige rij. "Omgeving pmatrix ongedefinieerd" betekent dat `\usepackage{amsmath}` ontbreekt. Een matrix die buiten de wiskundige modus is geplakt, mislukt met "Ontbrekende $ ingevoegd". Zie [basisbeginselen van de wiskundige modus](/learn/math-mode/) als de scheidingstekens nieuw zijn. Het vergelijken van een twee-bij-twee in elke scheidingstekenstijl duurt seconden in de [live speeltuin](/live/).