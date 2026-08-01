---

title: "Vergelijkingen die niet passen"
description: "meerlijnig en gesplitst als de maat te smal is."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vergelijkingen die niet passen

Vroeg of laat levert een afleiding een vergelijking op die breder is dan het tekstblok, en LaTeX zal deze in de marge laten lopen in plaats van te raden waar deze moet worden afgebroken. In twee `amsmath`-omgevingen kunt u de break zelf plaatsen: `multline` voor een enkele lange uitdrukking, en `split` voor een break die op één lijn moet blijven.

## meerlijns

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

`multiline` past bij één lange formule zonder natuurlijk uitlijningspunt. Je kiest de breuk met `\\`, en de omgeving regelt de lay-out: de eerste regel wordt gelijk links geplaatst, de laatste gelijk rechts, en eventuele middelste lijnen worden gecentreerd. De hele uitdrukking krijgt één vergelijkingsnummer, geplaatst op de laatste regel. De conventie is om te breken vóór een binaire operator, dus de '+' opent de vervolgregel en de lezer ziet in één oogopslag dat de uitdrukking doorgaat.

## gesplitst

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

`split` produceert ook een enkel getal, maar lijnt de lijnen uit zoals `align` dat doet, waarbij `&` het uitlijningspunt markeert. Het is geen op zichzelf staande omgeving; het leeft in 'vergelijking' of een andere weergaveomgeving, die het getal levert. Hier staat de `&` vóór het gelijkteken op de eerste regel, en begint het vervolg met `&\quad`, een leeg uitlijningspunt gevolgd door een viertal spatie, zodat de tweede regel net voorbij het gelijkteken inspringt. Dat streepje vertelt de lezer dat dit nog steeds de rechterkant is, en geen nieuwe vergelijking.

## Kiezen tussen hen

Gebruik 'multiline' als de vergelijking één lange som is zonder structuur die het waard is om uit te lijnen. Gebruik `split` als er een gelijkteken is waar de voortzetting onder moet blijven hangen. Als je meerdere werkelijk afzonderlijke vergelijkingen hebt, is geen van beide juist; dat is een taak voor `uitlijnen`, behandeld in [meerregelige vergelijkingen die op één lijn staan](/learn/align-equations/).

Voordat u naar een van beide grijpt, kunt u overwegen de wiskunde te herschrijven. Door een subexpressie in de voorgaande zin te benoemen, in factoren te ontbinden of in twee vergelijkingen te splitsen, wordt de breedte vaak onder controle en leest het ook beter. Geef daar de voorkeur aan boven het verkleinen van het type. Een scherm dat zo is geperst dat het past, leest bijna altijd slechter dan een duidelijke breuk.

Eén fout om te weten: `split` op zichzelf gebruikt, zonder een omsluitende `vergelijking`, stopt met een "Package amsmath Error". Eerst inpakken en dan compileren. Met beide omgevingen kun je snel experimenteren in de [live speeltuin](/live/).