---

title: "Bomen en eenvoudige grafieken"
description: "kindersyntaxis en spatiëringknoppen."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Bomen en eenvoudige grafieken

Hiërarchieën komen voortdurend naar voren: ontleedbomen, beslissingsbomen, bestandsindelingen, taxonomieën. Eén vakje per keer tekenen met 'positionering' werkt, maar het is vervelend om broers en zussen gelijkmatig verdeeld te houden en de niveaus gelijkmatig verdeeld te houden. Met de TikZ `trees`-bibliotheek kun je in plaats daarvan de hiërarchie zelf beschrijven, met behulp van geneste `kind`-bewerkingen, en de lay-out voor je berekenen:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## De onderliggende syntaxis lezen

De afbeelding bevat een enkele verklaring. Het begint met de root, `\node{A}`, en elk `child{...}` dat daaraan gekoppeld is, declareert één subboom. Een kind bevat gewoonlijk een `node{...}` voor zijn eigen label, en kan verdere `kind`-bewerkingen bevatten, en zo krijgt `C` de kinderen `D` en `E`. De nesting van accolades weerspiegelt de nesting van de boom, zodat u de structuur direct vanaf de inkeping kunt lezen. TikZ plaatst elk niveau onder het vorige en tekent automatisch de verbindingsranden. De ene verklaring eindigt met een enkele puntkomma na de laatste accolade. Een ontbrekende of extra puntkomma in de structuur is hier de gebruikelijke oorzaak van fouten.

## De drie lay-outknoppen

De opties bovenaan bepalen het uiterlijk en de afstand. `every node/.style={draw, circle, minimum size=7mm}` past een stijl toe op alle knooppunten tegelijk: elk krijgt een getekende rand, een cirkelvorm en een minimale diameter van 7 mm, zodat afzonderlijke letters uniforme cirkels opleveren. `level distance=12mm` stelt de verticale afstand in tussen een ouder en zijn kinderen. `broer/zus afstand=18 mm` stelt de horizontale afstand in tussen aangrenzende kinderen van dezelfde ouder.

De afstand tussen broers en zussen is de knop die u het meest zult aanpassen. De `trees` bibliotheek reserveert dezelfde breedte voor elke subboom op een bepaald niveau, dus brede subbomen kunnen botsen als de waarde te klein is. De standaardoplossing is om de afstand aan de bovenkant te vergroten, waar de subbomen het breedst zijn, met instellingen per niveau, zoals `level 1/.style={sibling distance=36mm}` en `level 2/.style={sibling distance=18mm}`. Als uw labels erg in breedte verschillen, schakel dan over van cirkels naar rechthoeken door 'cirkel' uit de gedeelde stijl te verwijderen.

## Voorbij kleine bomen

Randen nemen de stijl over via `edge from parent/.style`, bijvoorbeeld om pijlpunten of dikkere lijnen toe te voegen. Voor bomen voorbij grofweg een dozijn knooppunten, of voor algemene grafieken met cycli, wordt de 'bomen'-bibliotheek beperkend. Het 'bos'-pakket verwerkt grote bomen met automatisch verpakken. De `graphs`-bibliotheek met de `graphdrawing`-algoritmen omvat willekeurige grafieken, hoewel dat pad LuaLaTeX vereist. TikZ wordt niet weergegeven in deze voorvertoningen op de pagina, dus compileer het voorbeeld om de lay-out te zien. Begin met de basis in [je eerste TikZ-foto](/learn/tikz-intro/) als deze syntaxis nieuw is.