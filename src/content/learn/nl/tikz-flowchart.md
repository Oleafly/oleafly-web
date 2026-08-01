---

title: "Uitgelijnde stroomdiagramvakken"
description: "positioneringsbibliotheek zodat kolommen een rand delen."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Uitgelijnde stroomdiagramvakken

Een stroomdiagram ziet er om precies één reden amateuristisch uit: vakken die bijna op één lijn staan. TikZ vermijdt het probleem structureel, omdat elke doos ten opzichte van de andere wordt geplaatst, zodat een kolom met dozen een as deelt door constructie in plaats van door te kijken. Het tweede ingrediënt is een benoemde stijl, dus alle dozen zijn het eens over hun vorm en minimale grootte. Hier is een verticale stroom in drie stappen:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Eén keer een stijl definiëren

De regel `box/.style={...}` creëert een herbruikbare stijl met de naam `box`. De inhoud ervan bestaat uit gewone knooppuntopties: `draw` geeft het knooppunt een rand, `afgeronde hoeken` verzacht het, `align=center` centreert tekst met meerdere regels binnen het knooppunt, en `minimumbreedte=2,8 cm` dwingt elk vak tot ten minste die breedte, zodat korte labels niet in kleine vakjes krimpen. Vanaf dat moment past `\node[box]` de hele set toe. Als u een opvulkleur of een grotere breedte wilt, wijzigt u één regel en wordt het hele diagram bijgewerkt. Dat is een diagram dat u onderhoudt, niet een diagram dat u opnieuw tekent.

## Afstand in twee richtingen

`knooppuntafstand=10 mm en 14 mm` stelt de standaardafstanden in die worden gebruikt door de `positionering` bibliotheek: de eerste waarde is de verticale afstand, de tweede de horizontale. Als dat op zijn plaats is geplaatst, plaatst `below=of i` de procesbox 10 mm onder de invoerbox, van rand tot rand, en perfect gecentreerd erop. Een tweede kolom zou 'right=of p' gebruiken en 14 mm opzij landen. Omdat elke plaatsing een bestaand knooppunt afschakelt, betekent het invoegen van een stap het toevoegen van één knooppunt en het bijwerken van één 'below=of'-referentie. Alles stroomafwaarts verschuift mee. Je kunt ook de afstand per knooppunt overschrijven, zoals in `onder=15 mm van i`.

## De treden verbinden

Elke `\draw[-Latex] (i) -- (p);` tekent een pijl van het ene benoemde knooppunt naar het volgende, waarbij `-Latex` een vaste pijlpunt selecteert uit de `arrows.meta` bibliotheek aan het doeleinde. De pijlen verbinden automatisch met de knooppuntgrenzen. Voor een beslissingstak gebruikt u specifieke ankers, bijvoorbeeld `(p.east)` om vanaf de rechterkant te vertrekken, en routeert u met bochten zoals `-- ++(2,0) |-` zodra de kaart hoeken nodig heeft.

De TikZ-uitvoer wordt niet weergegeven in deze voorvertoningen op de pagina, dus compileer het fragment om het te zien. De klassieke fout bij stroomdiagrammen is het "slechts voor deze ene keer" plaatsen van een paar vakken met absolute coördinaten: die vakken zijn uiteindelijk niet goed uitgelijnd na de volgende bewerking. Houd elke plaatsing relatief, en zie [nodes and arrows](/learn/tikz-nodes-arrows/) voor de onderliggende plaatsingsopties.