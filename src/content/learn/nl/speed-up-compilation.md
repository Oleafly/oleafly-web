---

title: "Kortere wachttijd voor de PDF"
description: "Conceptcijfers, alleen inclusief, TikZ externaliseren, lokale CPU."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Kortere wachttijd voor de PDF

Een scriptie die negentig seconden in beslag neemt, verandert de manier waarop je schrijft. Je stopt met hercompileren na kleine bewerkingen, fouten stapelen zich onopgemerkt op en de feedbackloop die LaTeX aangenaam maakt, verdwijnt. Voordat u gaat optimaliseren, moet u weten waar de tijd naartoe gaat. In de meeste lange documenten is het niet het aantal pakketten, maar een handvol zware assets, vooral grote afbeeldingen en complexe TikZ-afbeeldingen, die de build domineren. De onderstaande technieken vallen deze rechtstreeks aan.

## Sla de cijfers over tijdens het opstellen

De `draft`-optie zorgt ervoor dat LaTeX elke afbeelding vervangt door een leeg vak van dezelfde grootte, waardoor de lay-out en pagina-einden behouden blijven terwijl de beeldverwerking wordt overgeslagen:

```latex
\documentclass[draft]{article}
```

'Drop' op klasseniveau markeert ook te volle lijnen met zwarte balken, wat sommige mensen nuttig vinden en anderen luidruchtig. Om het effect te beperken tot afbeeldingen, geeft u de optie in plaats daarvan door aan het pakket, als `\usepackage[draft]{graphicx}`, of aan een enkele boosdoener met `\includegraphics[draft]{...}`. Vergeet niet om het te verwijderen voordat u een PDF deelt, aangezien een conceptversie er niet goed uitziet voor iedereen die de optie niet kent. Onafhankelijk van de conceptmodus kunt u grote foto's één keer verkleinen, zoals beschreven in [plaats een cijfer in](/learn/insert-images/), omdat een afbeelding van 40 megabyte u bij elke compilatie voor altijd kost.

## Compileer alleen het huidige hoofdstuk

Als uw hoofdstukken in afzonderlijke bestanden staan ​​die zijn binnengehaald met `\include`, beperkt het `\includeonly` commando een build tot de bestanden die u een naam geeft:

```latex
\includeonly{chapters/04-results}
```

Zet het in de preambule en LaTeX compileert precies dat hoofdstuk terwijl de `.aux`-bestanden van de andere worden gelezen, zodat paginanummers en kruisverwijzingen uit de rest van het document ongeveer kloppen. Dit is de grootste besparing voor een proefschrift, waarbij een build van een minuut routinematig in seconden wordt omgezet. Het werkt alleen met `\include`, niet met `\input`, wat een van de redenen is om lange documenten te structureren zoals beschreven in [een document in bestanden splitsen](/learn/split-chapter-files/).

## Cache dure foto's

TikZ-afbeeldingen worden bij elke compilatie opnieuw getekend. De `external` bibliotheek, geladen met `\usetikzlibrary{external}` plus `\tikzexternalize`, compileert elke afbeelding één keer naar zijn eigen PDF en gebruikt deze totdat de code verandert. De opzet heeft scherpe randen en het handmatige alternatief om grote afbeeldingen naar zelfstandige bestanden te verplaatsen werkt net zo goed; beide worden behandeld in [standalone TikZ naar PDF of PNG](/learn/tikz-export/).

## Minder passes, sneller ijzer

Voor het oplossen van bibliografieën en kruisverwijzingen zijn meerdere passages nodig, maar tijdens het opstellen van proza ​​heb je ze zelden nodig, dus een enkele snelle passage is voldoende en de volledige reeks kan wachten totdat je de referenties hebt gecontroleerd. Hardware en locatie zijn ook van belang: een lokale engine compileert op je eigen CPU zonder upload of wachtrij, en dat is hoe Oleafly builds uitvoert.

Pas '\includeonly' en conceptcijfers samen toe en zelfs een grote scriptie komt meestal binnen een paar seconden terug, wat het punt is waarop je na elke paragraaf opnieuw begint met het opnieuw compileren.