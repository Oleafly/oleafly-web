---

title: "Forceer of weiger een pagina-einde"
description: "nieuwe pagina, duidelijke pagina, zachte pagina-einde, geen pagina-einde."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Forceer of weiger een pagina-einde

LaTeX bepaalt waar pagina's eindigen. Meestal komt het goed uit, maar soms moet je het terzijde schuiven: een sectiekop blijft onderaan een pagina staan, een tabel komt een regel te laat terecht, of je wilt dat elk hoofdstuk van een rapport opnieuw begint. LaTeX geeft je hiervoor een kleine set commando's, variërend van een harde opdracht tot een beleefde suggestie.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## De harde pauzes

`\nieuwepagina` beëindigt de huidige pagina onmiddellijk en begint een nieuwe. Het is het meest botste gereedschap en het gereedschap dat je het meest zult gebruiken tijdens het opstellen.

`\clearpage` doet hetzelfde, maar spoelt eerst alle hangende floats weg. Figuren en tabellen in LaTeX zijn floats: ze drijven naar waar het algoritme ruimte vindt, soms pagina's na het punt waar je ze hebt geschreven. `\clearpage` dwingt elke float die tot nu toe in de wachtrij staat naar de pagina voordat hij verder gaat, dus het is het juiste commando aan het einde van een hoofdstuk of vóór een sectie waar je geen achterblijvers wilt hebben. Als de cijfers zich aan het einde van uw document lijken op te stapelen, is een goed geplaatste `\clearpage` meestal de oplossing; zie [waarom figuren bewegen](/learn/figur-wrong-position/) voor het volledige verhaal.

`\cleardoublepage` gaat nog een stap verder in dubbelzijdige documenten: na het doorspoelen van zwevende pagina's zorgt het ervoor dat de volgende pagina een rechter (oneven) pagina is, waarbij indien nodig een blanco linkerpagina wordt ingevoegd. Boekhoofdstukken openen traditioneel aan de rechterkant, en de `book`-klasse noemt dit voor u bij elk `\hoofdstuk`.

## De zachte verzoeken

`\pagebreak[n]` geeft geen opdracht. Het vraagt. Het optionele getal van 0 tot 4 geeft aan hoe sterk: `\pagebreak[1]` betekent "een pauze hier zou leuk zijn", `\pagebreak[4]` betekent "hier een pauze, punt". Met de middelste waarden kan LaTeX uw wens afwegen tegen zijn eigen spatiëringsoordeel, wat meestal mooiere pagina's oplevert dan een harde `\nieuwepagina`, omdat `\pagebreak` de inhoud uitrekt om de pagina te vullen in plaats van een gat achter te laten.

`\nopagebreak` is het tegenovergestelde verzoek: het ontmoedigt een pauze op dat punt. Het is handig direct na een kop of vóór een korte lijst die u bij de introductie wilt bewaren. Net als `\pagebreak` accepteert het een optionele sterkte van 0 tot 4.

## Wanneer moet je deze überhaupt bereiken?

De veelgemaakte fout is het strooien van `\nieuwepagina` door een concept om de lay-out te corrigeren, en vervolgens te zien hoe elke correctie verkeerd wordt naarmate de tekst groter wordt. Pagina-einden zijn afhankelijk van alles wat eraan voorafgaat, dus een handmatige pauze die er vandaag perfect uitziet, kan na uw volgende revisie een halflege pagina achterlaten. De verstandige workflow is om eerst het hele document te schrijven en alleen pauzes toe te voegen tijdens de laatste passage, waarbij de voorkeur wordt gegeven aan de zachte `\pagebreak[3]` boven harde commando's, waar de exacte positie onderhandelbaar is.