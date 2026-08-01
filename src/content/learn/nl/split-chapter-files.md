---

title: "Eén rootbestand, veel hoofdstukken"
description: "include vs input, includeonly en het opstellen van hoofdstuk voor hoofdstuk."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Eén rootbestand, veel hoofdstukken

Een scriptie in een enkel `.tex`-bestand wordt ergens rond het tweede hoofdstuk ellendig om in te werken: scrollen vervangt het denken, en elke compilatie verwerkt alles. De standaardoplossing is één rootbestand dat de klasse en de preambule bevat, waarbij elk hoofdstuk in zijn eigen bestand staat. Het rootbestand voegt ze samen.

## Het rootbestand

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` is het enige bestand dat u ooit compileert. Elke `\include` benoemt een ander bestand zonder de `.tex`-extensie, met behulp van slashes op elk platform, en haalt de inhoud ervan op dat punt binnen. De hoofdstukbestanden zelf bevatten alleen inhoud, meestal beginnend met `\chapter{...}`. Ze hebben geen eigen `\documentclass` en geen `document`-omgeving, omdat het fragmenten zijn van dit document en geen documenten.

## opnemen versus invoer

De twee opnameopdrachten gedragen zich verschillend, en de verschillen bepalen welke waar moet worden gebruikt. `\include` begint een nieuwe pagina vóór het materiaal, passend bij de hoofdstukken, en schrijft een apart `.aux`-bestand voor elk opgenomen bestand, wat selectieve compilatie mogelijk maakt. `\input` is een gewone tekstpasta: geen pagina-einde, geen aparte `.aux`, en het kan in een andere invoer worden genest. Dat maakt `\input` het juiste hulpmiddel voor fragmenten die kleiner zijn dan een hoofdstuk, zoals een grote tabel die in een eigen bestand wordt bewaard of een gedeeld [macrobestand](/learn/custom-commands/). Eén structurele regel om te onthouden is dat `\include` niet in een opgenomen bestand kan worden genest, terwijl `\input` overal kan worden gebruikt.

## Eén hoofdstuk tegelijk opstellen

```latex
\includeonly{chapters/methods}
```

Geplaatst in de preambule vertelt `\includeonly` LaTeX om alleen de genoemde bestanden te verwerken terwijl de opgeslagen `.aux`-gegevens van alle anderen nog steeds worden gelezen. Het compileren wordt dramatisch sneller, en omdat de labels en paginatellingen van de andere hoofdstukken worden afgespeeld vanuit hun `.aux`-bestanden, blijven kruisverwijzingen en nummering in het hoofdstuk dat u aan het opstellen bent correct. Die tweede helft is de reden om dit te verkiezen boven het commentaar geven op `\include`-regels, waardoor de andere hoofdstukken volledig worden vergeten en elke `\ref` daarin wordt omgezet in `??`.

Geef commentaar op de regel `\includeonly` voor volledige builds, en voer altijd een volledige compilatie uit voordat u een PDF deelt, aangezien verouderde `.aux`-gegevens achter kunnen blijven bij bewerkingen die in uitgesloten hoofdstukken zijn gemaakt. Voor welke bestanden in de resulterende map van jou zijn en welke worden gegenereerd, zie [de bestanden in een echt project](/learn/latex-file-types/).