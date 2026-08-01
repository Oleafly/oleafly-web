---

title: "Vergelijkingen met meerdere regels die op één lijn liggen"
description: "uitlijnen, verzamelen, splitsen, meerlijnen en notags."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Vergelijkingen met meerdere regels die op één lijn liggen

Een afleiding van verschillende stappen ziet er het beste uit als de gelijktekens in één kolom zijn gestapeld, zodat het oog kan volgen wat er van regel tot regel is veranderd. Het `amsmath`-pakket biedt daarvoor de `align`-omgeving, plus een kleine familie van familieleden voor gevallen waarin uitlijning niet is wat je wilt.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## Hoe uitlijnen luidt

Elke regel is één vergelijking, eindigend met `\\`; de laatste regel heeft niets nodig. De `&` markeert het uitlijningspunt en de `&` van elke lijn komt in dezelfde kolom terecht. Het is de standaard gewoonte om `&` direct voor het gelijkteken te plaatsen, zodat de gelijktekens op elkaar worden gestapeld en de linkerzijden naar links afhangen. Elke regel krijgt zijn eigen vergelijkingsnummer; schrijf `align*` om geen te nummeren, of voeg `\notag` toe aan individuele regels om alleen die regels over te slaan, zoals weergegeven in [getallen en verwijzingen voor vergelijkingen](/learn/number-equations/).

De omgeving opent de wiskunde zelf, dus deze mag niet in `\[ ... \]` of `$ ... $` staan; het nesten ervan in een andere wiskundige omgeving levert verwarrende fouten op.

## Het gezin

| Env | Doel |
| --- | --- |
| `uitlijnen` | Meerdere lijnen, uitgelijnd |
| `uitlijnen*` | Zelfde, ongenummerd |
| `verzamelen` | Meerdere lijnen, gecentreerd |
| `split` | Enkelvoudig vergelijkingsnummer |
| `meerlijn` | Lange vergelijking verbroken zonder uitlijning |

`gather` verwerkt verschillende vergelijkingen zonder gedeeld uitlijningspunt; het centreert elke lijn en nummert elke lijn. `split` bouwt één meerregelige vergelijking op onder één enkel getal en moet binnen `vergelijking` zitten. Met 'multiline' wordt een te lange formule afgebroken zonder uitlijning, waarbij de eerste regel links en de laatste regel rechts wordt uitgelijnd. De laatste twee worden in detail behandeld in [vergelijkingen die niet passen](/learn/break-long-equations/).

Twee vragen beslissen welke te gebruiken: zijn de lijnen afzonderlijke vergelijkingen of één gebroken vergelijking, en is er een uitlijningspunt dat de moeite waard is om te stapelen? Afzonderlijk en uitgelijnd: `align`. Afzonderlijk en gecentreerd: `verzamelen`. Enkelvoudig en uitgelijnd: `split`. Enkelvoudig en niet-uitgelijnd: `multiline`.

## Veelgemaakte fouten

Een regel zonder `&` wordt nog steeds gecompileerd, maar wordt onafhankelijk gecentreerd en niets wordt uitgelijnd. Twee '&' op een regel beginnen een tweede kolompaar, waarbij 'align' gelezen wordt als een tweede kolom met naast elkaar geplaatste vergelijkingen; als uw uitvoer vergelijkingen naar rechts bevat, tel dan uw ampersands. Een achterliggende `\\` op de laatste regel voegt een lege rij toe, die verschijnt als een vreemde verticale ruimte onder het blok. Typ een afleiding in drie stappen in de [live speeltuin](/live/) om te zien hoe de uitlijning samenkomt.