---

title: "Knooppunten en pijlen"
description: "Benoemde knooppunten, relatieve plaatsing, pijlpunten."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Knooppunten en pijlen

Bijna elk TikZ-diagram bestaat uit twee ingrediënten. Een knooppunt is een gepositioneerd stukje inhoud, meestal een gelabeld vak of cirkel. Een rand is een lijn of pijl die twee knooppunten verbindt. Zodra u knooppunten kunt plaatsen en met elkaar kunt verbinden, zijn stroomdiagrammen, pijplijnen en blokdiagrammen allemaal dezelfde oefening in verschillende groottes. In het onderstaande voorbeeld worden twee benoemde vakken geplaatst en wordt er een gelabelde pijl tussen geplaatst:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Knooppunten benoemen en plaatsen

In `\node[draw] (src) {Source};` stylen de haakjesopties het knooppunt, en `draw` betekent dat je de rand tekent, zonder welke je zwevende tekst krijgt. De `(src)` is de naam van het knooppunt en `{Bron}` is de inhoud ervan. De naam is het belangrijkste onderdeel: het laat andere commando's naar dit knooppunt verwijzen zonder de coördinaten ervan te kennen.

Het tweede knooppunt laat zien waarom dat ertoe doet. `right=2cm van src` komt uit de `positioning` bibliotheek en plaatst `dst` twee centimeter rechts van `src`, gemeten tussen hun randen. De bibliotheek biedt ook `links=van`, `boven=van`, `onder=van` en diagonale combinaties zoals `boven rechts=van`. Bouw op deze manier een diagram (elk knooppunt relatief aan een bestaand knooppunt) en de lay-out blijft intact wanneer de tekst van grootte verandert. Absolute coördinaten zoals `\node at (4,2)` kunnen nog steeds worden gebruikt, maar een daarop gebouwd diagram moet elke keer dat er één vakje groeit handmatig opnieuw worden genummerd.

## De pijl tekenen

`\draw (src) -- (dst);` tekent een rechte lijn tussen de twee benoemde knooppunten, en TikZ begint en eindigt de lijn automatisch bij de knooppuntgrenzen in plaats van bij hun middelpunten. De optie `[-{Latex}]` specificeert de pijlpunten: niets vóór het koppelteken betekent geen staartpunt, en `Latex` nadat het een vaste pijlpunt selecteert uit de `arrows.meta` bibliotheek op de bestemming. Het schrijven van `{Latex}-{Latex}` zou een dubbele pijl opleveren.

Het middenpad `node[above] {edge}` is een label dat aan de lijn zelf is bevestigd. Een knooppunt dat binnen een pad is geschreven, wordt standaard op dat punt van het pad geplaatst, en met 'above' wordt het net boven de lijn verschoven, zodat de tekst niet op de lijn komt te staan. Dit is de standaardmanier om overgangen en gegevensstromen te annoteren.

## Gewoonten die vruchten afwerpen

Geef elk knooppunt een naam, zelfs in kleine diagrammen. Er kan geen verbinding worden gemaakt met naamloze knooppunten, en kleine diagrammen blijven zelden klein. Geef om dezelfde reden de voorkeur aan relatieve plaatsing boven 'positionering' boven absolute coördinaten. Elke TikZ-verklaring eindigt met een puntkomma. Het weglaten van een fout is de meest voorkomende TikZ-fout, en de berichten wijzen vaak ver weg van het echte probleem. Om veel vakken in nette rijen en kolommen te ordenen, ga je verder met [uitgelijnde stroomdiagramvakken](/learn/tikz-flowchart/).