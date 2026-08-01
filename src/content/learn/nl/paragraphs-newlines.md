---

title: "Alinea's, pauzes en lege ruimte"
description: "Lege regels, geforceerde onderbrekingen, vspace en de spatiëringsopdrachten die de moeite waard zijn om te weten."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Paragrafen, pauzes en lege ruimte

In een tekstverwerker vorm je alinea's door op Enter te drukken en naar de gaten te kijken. LaTeX werkt anders: de brontekst beschrijft de structuur en de compiler bepaalt de spatiëring. Als je eenmaal weet hoe LaTeX een alinea begint, en hoe je deze kunt overschrijven wanneer dat nodig is, voorkom je de opmaakgevechten die beginners er gewoonlijk mee hebben.

## Hoe alinea's werken

Een lege regel in uw bron begint een nieuwe alinea. Dat is de hele regel. Eén of vijf lege regels, het maakt geen verschil; LaTeX vouwt ze samen in één alinea-einde. Op dezelfde manier wordt een enkele regeleinde binnen uw bron behandeld als een gewone spatie, zodat u uw brontekst op elke gewenste breedte kunt laten doorlopen en deze vrijelijk opnieuw kunt plaatsen zonder de uitvoer te wijzigen.

Het commando `\par` betekent precies hetzelfde als een lege regel. Je zult het zelden zelf typen, maar je zult het wel tegenkomen in macro's en klassenbestanden, waar een letterlijke lege regel lastig is om te schrijven.

`\\` is iets heel anders: het forceert een regeleinde binnen de huidige paragraaf, zonder een nieuwe te beginnen. De nieuwe regel krijgt geen alinea-inspringing en geen extra verticale ruimte. Het bestaat voor plaatsen waar regeleinden inhoud bevatten, zoals adressen, poëzie en rijen van een tabel. Het gebruik ervan om gewone alinea's te beëindigen is een klassieke beginnersfout, omdat het een alinea oplevert die nooit echt is geëindigd, en LaTeX kan klagen met "Er is hier geen regel die eindigt" als er twee op elkaar stapelen.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Verticale ruimte toevoegen

Soms wil je bewust een opening, bijvoorbeeld vóór een handtekeningblok of tussen logische delen van een titelpagina.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` voegt precies de verticale ruimte in waar u om vraagt, in elke eenheid die LaTeX kent (`em`, `pt`, `cm`, enzovoort). De drie skip-opdrachten zijn vooraf ingestelde hoeveelheden: `\smallskip`, `\medskip` en `\bigskip` voegen kleine, middelgrote en grote gaten in waarvan de afmetingen worden gedefinieerd door uw documentklasse, waardoor ze consistent blijven in het hele document. Geef de voorkeur aan overslaan boven handmatig afgestemde `\vspace`-waarden, omdat deze zich aanpassen als u de klasse of lettergrootte wijzigt.

Een handig detail: een `\vspace` bovenaan een pagina wordt stilzwijgend verwijderd, omdat LaTeX ervan uitgaat dat rekbare ruimte aan de paginagrenzen onbedoeld is. Als je het echt nodig hebt, gebruik dan `\vspace*{1em}` met de ster.

## Ruimte tussen alle alinea's

Spam geen `\\` om ruimte tussen alinea's te maken. Als je wilt dat elke paragraaf wordt gescheiden door een opening in plaats van gemarkeerd door een streepje, dan is dat een ontwerpbeslissing voor het hele document: plaats deze één keer in de preambule met het `parskip`-pakket, of heroverweeg of koppen en structuur de scheiding beter zouden overbrengen. Zie [alinea-inspringing](/learn/paragraph-indent/) voor de andere helft van deze afweging.