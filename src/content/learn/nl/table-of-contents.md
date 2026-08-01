---

title: "TOC, lijsten met figuren, lijsten met tabellen"
description: "inhoudsopgave en waarom de tweede passage ertoe doet."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# TOC, lijsten met figuren, lijsten met tabellen

Een inhoudsopgave in LaTeX is niet iets dat u bouwt of onderhoudt. U plaatst een enkel commando op de gewenste plek, en LaTeX verzamelt de gegevens uit de koppen die u al hebt geschreven. Hetzelfde geldt voor de lijst met figuren en de lijst met tabellen, die bijschriften verzamelen in plaats van kopjes. Dit is een van de plaatsen waar het aangeven van structuur direct loont: hernoem een ​​sectie of verplaats een figuur en de voorkant fixeert zichzelf.

## De drie commando's

```latex
\tableofcontents
\listoffigures
\listoftables
```

Met `\inhoudsopgave` wordt de inhoudsopgave afgedrukt op het punt waar deze verschijnt, meestal direct na de titelpagina of de samenvatting. Elk genummerd `\hoofdstuk`, `\sectie` en `\subsectie` verschijnt met zijn nummer, titel en pagina, tot aan de diepte die is ingesteld door de `tocdiepte`-teller die wordt beschreven in [de les met kopjes](/learn/sections/). `\listoffigures` en `\listoftables` doen hetzelfde voor de bijschriften van figuren en tabellen, waarbij de tekst uit elke `\caption{...}` wordt gehaald. In artikelen zijn ze ongebruikelijk, maar voor scripties zijn meestal beide vereist, die na de inhoudsopgave op hun eigen pagina's worden geplaatst.

## Waarom de tweede doorgang ertoe doet

Compileer **tweemaal** na structurele wijzigingen. Dat is geen bijgeloof. Het is hoe het mechanisme werkt. Tijdens het compileren kan LaTeX niet weten wat er op pagina 2 zal eindigen op pagina 47, dus schrijft het elke kop en het uiteindelijke paginanummer naar een hulpbestand (`.toc`, `.lof`, `.lot`). `\tableofcontents` leest het bestand dat overblijft van de vorige run. Bij een nieuw project bestaat dat bestand nog niet, dus de eerste compilatie levert een lege inhoudsopgave op. Nadat u secties hebt toegevoegd of verplaatst, toont de inhoudsopgave verouderde titels of verkeerde paginanummers tot de volgende run. De tweede compilatie leest het vers geschreven bestand en alles komt in de rij te staan. Editors die latexmk of een gelijkwaardige wrapper draaien, behandelen de herhalingen voor je, en daarom heb je het misschien nooit gemerkt. Als uw TOC er ooit verkeerd uitziet, compileer dan nog een keer voordat u iets anders debugt.

## Secties met ster en de inhoudsopgave

Secties met ster hebben `\addcontentsline{toc}{section}{Title}` nodig als ze in de inhoudsopgave moeten verschijnen. Een kop met een ster als `\section*{Dankbetuigingen}` slaat opzettelijk zowel de nummering als het inhoudsbestand over, dus als je dit vermeld wilt hebben, voeg je het item zelf toe. De drie argumenten van het commando zijn het bestand waarnaar moet worden geschreven (`toc`), het invoerniveau (`section`) en de tekst die moet worden weergegeven. Plaats de regel onmiddellijk na de kop met ster, zodat het opgenomen paginanummer juist is.

Eén gewoonte die de moeite waard is om aan te leren: voordat je een pdf deelt, kijk eens naar de inhoudsopgave en zoek naar de veelbetekenende tekenen van een verouderde build, zoals vraagtekens, ontbrekende invoer of een laatste invoer die vlak voor je laatste hoofdstuk stopt. Het wordt bijna altijd genezen door nog een compilatie. Het zelf vangen is goedkoper dan een recensent die het opvangt. Dezelfde danskrachten in het hulpbestand `\ref` en vrienden, behandeld in [kruisverwijzingen](/learn/cross-references/).