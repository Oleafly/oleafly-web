---

title: "Commutatieve diagrammen"
description: "tikz-cd pijlen en labels zonder coördinatensoep."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Commutatieve diagrammen

Een commutatief diagram is een raster van objecten die met elkaar zijn verbonden door gelabelde pijlen, het standaardbeeld in categorietheorie, algebra en topologie. Raw TikZ kan er één tekenen, maar het plaatsen van elk knooppunt op coördinaat is traag en broos. Het `tikz-cd`-pakket verpakt TikZ in een matrixachtige syntaxis: je legt de objecten neer als een tabel en beschrijft elke pijl aan de hand van zijn richting.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## De syntaxis lezen

Het raster werkt als een matrix: `&` scheidt kolommen en `\\` scheidt rijen, dus dit diagram heeft A en B op de bovenste rij en C en D op de onderste rij. Elke `\pijl[...]` hoort bij de cel waarin deze is geschreven en wijst ervan weg. De eerste optie is de richting, gespeld met de letters `r`, `l`, `u` en `d`: `\arrow[r]` gaat één cel naar rechts, `\arrow[d]` één cel naar beneden. De letters worden gecombineerd en herhaald voor diagonalen en langere afstanden, dus 'rd' is één stap naar rechts omlaag en 'rr' beslaat twee kolommen.

Een label tussen aanhalingstekens staat op de pijl. Standaard zit hij aan één kant; een priemgetal na het afsluitende citaat, zoals in `"g"'`, draait het naar de andere kant. In het voorbeeld houden de priemgetallen alle vier de labels aan de buitenkant van het vierkant, wat de gebruikelijke strakke opstelling is.

## Meer pijlopties

Andere opties worden gestapeld na de richting en het label om de stijl van de pijl te wijzigen. 'haak' buigt de staart in een insluitingspijl, 'twee koppen' verdubbelt de kop voor een surjectie, 'stippellijn' markeert een kaart die je beweert in plaats van aan te nemen, en 'Rechtspijl' produceert de pijl met dubbele as die wordt gebruikt voor natuurlijke transformaties. Een typische pijl met universele eigenschappen luidt `\arrow[rd, onderbroken, "\bestaat u"']`. Als een diagram krap aanvoelt, kunnen spatiëringsopties in de omgeving helpen, bijvoorbeeld `\begin{tikzcd}[column sep=large]`.

## Praktische opmerkingen

`tikz-cd` laadt TikZ zelf, dus er is geen aparte `\usepackage{tikz}` regel nodig, en diagrammen worden gecompileerd met een standaard engine en zonder extern tekengereedschap. De meest voorkomende structurele fout is een ongelijkmatig raster: rijen met een verschillend aantal `&`-scheidingstekens verplaatsen objecten naar de verkeerde kolommen, en pijlen komen dan op oneven plaatsen terecht. Begin met een werkvierkant zoals hierboven, laat het rij of kolom voor rij groeien en compileer het gaandeweg opnieuw. Diagrammen zijn veel gemakkelijker op het oog te debuggen dan vanuit de bron, en de [live speeltuin](/live/) geeft u die feedback terwijl u typt.