---

title: "Proefschriftopmaak versus papieropmaak"
description: "Universitaire lessen, voorwerk, hoofdstukken, inbindmarges en hergebruik van papiermateriaal."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Proefschriftopmaak versus papieropmaak

Een paper is opgemaakt voor een uitgever. Een scriptie wordt opgemaakt voor een graduate school, een heel ander beestje met heel andere regels. Als je alleen maar papers hebt geschreven, zal het scriptiesjabloon je op bepaalde manieren verrassen.

## Wie bepaalt de regels

Papers: de locatie geeft je een les ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) en iedereen wereldwijd gebruikt dezelfde. Stellingen: uw universiteit schrijft een eigen klas of een pagina met typografische regels voor (marges, regelafstand, formulering op de titelpagina), en geen twee universiteiten zijn het daarmee eens. Ontvang eerst de officiële les van uw afdeling of graduate school. Als het oud is en weigert te compileren, is dat gebruikelijk genoeg om [zijn eigen les] (/learn/fix-broken-template/) te hebben.

## De structurele verschillen

| Aspect | Papier | Scriptie |
|---|---|---|
| Topunit | `\sectie` | `\hoofdstuk` |
| Klassenbasis | locatieklasse | Afgeleide `boek`/`rapport` |
| Voorzaak | titel + samenvatting | titelpagina, verklaring, samenvatting, inhoudsopgave, lijsten met figuren en tabellen |
| Lengte | 8 tot 30 pagina's | 80 tot 300 pagina's |
| Indeling | vaak tweekoloms | enkele kolom, royale tussenruimte |
| Zijkanten | eenzijdige PDF | vaak dubbelzijdig voor bedrukking |

Hoofdstukken veranderen alles stroomafwaarts: de nummering wordt '3.2', cijfers worden 'Figuur 3.1', en elk hoofdstuk opent gewoonlijk op een nieuwe (soms rechter) pagina.

## Voorzaak is het halve werk

Een voorwerkreeks van een proefschrift bestaat doorgaans uit: titelpagina, originaliteitsverklaring, samenvatting, dankwoord, inhoudsopgave, lijst met figuren, lijst met tabellen en vervolgens hoofdstuk 1. Het meeste is geautomatiseerd:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

De Romeins-toen-Arabische paginanummeringsdans laat iedereen één keer struikelen, [voorblad en paginanummers](/learn/front-matter-page-numbers/) dekt het goed af.

## Dubbelzijdig afdrukken en inbindmarges

Gedrukte proefschriften zijn meestal dubbelzijdig ('twoside'-klasseoptie), waardoor de marges asymmetrisch zijn: de binnenmarge is breder om inbinden te overleven. De regels van uw universiteit zeggen zoiets als "linkermarge 35 mm, andere 25 mm", wat in een dubbelzijdig document *binnen* betekent, niet links. Vecht hier niet tegen met handmatige `\hspace`; de klasseoptie plus `geometrie`-instellingen handelen dit af:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

Met 'openright' worden hoofdstukken op rechterpagina's geforceerd, standaard voor ingebonden exemplaren.

## Je papieren hergebruiken als hoofdstukken

De meeste scripties nemen gepubliceerde artikelen over, en de meeste universiteiten staan ​​dit expliciet toe. Het mechanisme: ontdoe elk artikel van de preambule van het artikel, verlaag de secties indien nodig, verenig de notatie en macro's over de hoofdstukken heen, en voeg de bibliografieën samen tot één. Door elk hoofdstuk in een eigen bestand te bewaren, wordt dit beheersbaar. [Hoofdstukken in bestanden splitsen](/learn/split-chapter-files/) toont de `\input`/`\include` setup die een build van 200 pagina's gezond houdt.

Eén eerlijke waarschuwing: universitaire scriptielessen hebben de neiging om veel pakketten te bevatten, dus de eerste compilatie op een nieuwe machine kan een reeks pakketten ophalen voordat deze slaagt. Laat het een keer afmaken en de volgende builds zijn snel.