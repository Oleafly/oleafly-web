---

title: "Vectoren en vetgedrukte symbolen"
description: "mathbf, boldsymbol en een consistente vectormacro."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vectoren en vetgedrukte symbolen

In veel velden worden vectoren en matrices vetgedrukt weergegeven: **x** voor een vector, **A** voor een matrix, vetgedrukt bèta voor een coëfficiëntvector. In LaTeX zijn er twee verschillende vetgedrukte opdrachten voor wiskunde, en deze zijn niet uitwisselbaar. Door te weten naar welke je moet grijpen, en de keuze in een macro te verpakken, blijft de notatie gedurende het hele proefschrift consistent.

## De twee commando's

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` verandert zijn argument in een rechtopstaand, vetgedrukt Romeins lettertype. Het werkt goed voor Latijnse letters, dus `\mathbf{A}` geeft je een stevige, rechtopstaande, vetgedrukte A, die veel teksten gebruiken voor matrices. De beperking is dat het alleen letters en cijfers omvat: `\mathbf{\beta}` doet niets nuttigs, omdat het vetgedrukte Romeinse lettertype eenvoudigweg geen Griekse glyphs heeft, en de bèta ongewijzigd wordt afgedrukt.

`\boldsymbol`, geleverd door `amsmath` (technisch gezien door de `bm`-achtige machinerie in `amsbsy`, die `amsmath` laadt), moedigt elk symbool aan dat je eraan geeft, terwijl het zijn vorm behoudt. `\boldsymbol{\beta}` produceert een vet cursieve bèta, en `\boldsymbol{x}` produceert een vet cursieve x, passend bij de schuine stijl van gewone wiskundige variabelen. Als uw conventie is dat vectoren vet en cursief zijn, is dit het gewenste commando.

De praktische verdeling is dus: rechtopstaande, vetgedrukte Latijnse letters, gebruik `\mathbf`; alles wat Grieks of vetgedrukt is en cursief moet blijven, gebruik `\boldsymbol`.

## Definieer macro's één keer

In plaats van deze opdrachten door het hele document te typen, definieert u semantische macro's in de preambule:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Nu schrijf je `\vect{x}` voor een vector en `\mat{A}` voor een matrix. De `[1]` zegt dat elke macro één argument nodig heeft, en `#1` is waar dat argument terechtkomt. Het resultaat komt later: als een tijdschrift vereist dat vectoren rechtopstaand vetgedrukt zijn in plaats van vet cursief, bewerk je één regel zodat `\vect` `\mathbf` omsluit, en elke vector in het artikel wordt bijgewerkt bij de volgende compilatie. Dat is beter dan zoeken en vervangen in tweehonderd vergelijkingen.

Macro's maken de intentie ook leesbaar in de broncode. Over zes maanden vertelt `\vect{w}` dat de w een vector is; een kaal `\boldsymbol{w}` vertelt je alleen dat het vetgedrukt is.

## Een veelgemaakte fout

Gebruik geen vetgedrukt Grieks met `\textbf` in wiskunde, en gebruik `\mathbf` er niet voor en neem aan dat het werkte. Compileer en kijk goed: een niet-vetgedrukte bèta naast opvallende buren is gemakkelijk te missen op het scherm en duidelijk zichtbaar in print. Als je snel naar kandidaten wilt kijken, plak dan een regel als `\boldsymbol{\beta} \mathbf{\beta} \beta` in de [live speeltuin](/live/) en vergelijk de drie naast elkaar. Voor het vetgedrukt maken van hele vergelijkingen, inclusief symbolen als `\sum`, kun je het `\bm`-commando van het `bm`-pakket raadplegen, dat meer symboolklassen verwerkt dan `\boldsymbol`.

Vetgedrukte tekst is een ander onderwerp met andere opdrachten; zie [nadruk in tekst](/learn/bold-italic/).