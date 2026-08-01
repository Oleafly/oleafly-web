---

title: "Dat pakket is niet geïnstalleerd"
description: "tlmgr, MiKTeX en on-demand ophalen met Tectonic of Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Dat pakket is niet geïnstalleerd

Vroeg of laat stopt een compilatie met een regel als `! LaTeX-fout: bestand 'siunitx.sty' niet gevonden'. Het bericht betekent precies wat het zegt: uw document vroeg om een ​​pakket, via `\usepackage{siunitx}`, en de compiler kon het `.sty`-bestand van het pakket niet vinden op uw machine. Er is niets mis met uw document. LaTeX-distributies verzenden niet standaard elk pakket en de oplossing hangt af van welke distributie u gebruikt.

## TeX Live

TeX Live, de standaarddistributie op Linux en macOS (als MacTeX), bevat een pakketbeheerder genaamd `tlmgr`. Installeer het ontbrekende pakket vanaf een terminal:

```
tlmgr install siunitx
```

Als de volledige TeX Live is geïnstalleerd, wat vele gigabytes is, is alles al aanwezig en zou deze fout niet moeten optreden. Het verschijnt meestal bij de kleinere 'basis'- of 'kleine' installatieschema's. Merk op dat het argument voor `tlmgr` de pakketnaam is, niet de bestandsnaam, dus geen `.sty` extensie.

## MiKTeX

MiKTeX, gebruikelijk op Windows, heeft twee mechanismen. De 'install-on-the-fly'-functie detecteert het ontbrekende bestand tijdens de compilatie en biedt aan om het op te halen, waarbij u hierom wordt gevraagd of automatisch verdergaat, afhankelijk van de instellingen. U kunt ook de MiKTeX-console openen, naar het tabblad Pakketten gaan, naar het pakket zoeken en het daar installeren. Als het lijkt alsof de installatie tijdens de installatie vastloopt bij het compileren, wacht deze meestal op een bevestigingsvenster dat verborgen is achter een ander venster.

## Tektonisch

De Tectonic-engine, die Oleafly bundelt, slaat de handmatige stap over: pakketten worden op aanvraag gedownload tijdens de compilatie en komen terecht in de lokale cache van de engine. De eerste compilatie die `siunitx` gebruikt, haalt het op; later compileert hergebruikt de cache. Die eerste run kan langer duren terwijl de afhankelijkheden worden gedownload, en er is een netwerkverbinding voor nodig.

## Bij installatie wordt het probleem niet opgelost

Als de pakketbeheerder rapporteert dat een dergelijk pakket niet bestaat, controleer dan de spelling op de pagina van het pakket op CTAN, het centrale LaTeX-pakketarchief op ctan.org. Twee mismatches zijn verantwoordelijk voor de meest hardnekkige gevallen. Ten eerste kunnen het bestand en het pakket verschillende namen hebben, omdat een distributiepakket meerdere `.sty`-bestanden kan bevatten. Door CTAN te zoeken naar de exacte `.sty` bestandsnaam uit de foutmelding wordt dit opgelost. Ten tweede noemt de fout soms een bestand uit uw eigen project, zoals een klassenbestand dat een sjabloon vergat op te nemen, en geen enkele pakketbeheerder kan dat leveren. Het bestand moet afkomstig zijn van de locatie waar de sjabloon vandaan kwam.

Een laatste opmerking over oud advies: het downloaden van een alleenstaand `.sty`-bestand van internet naar uw projectmap werkt wel, aangezien LaTeX eerst de huidige map doorzoekt, maar het pakket bevriest in een willekeurige versie en verbergt het voor updates. Geef de voorkeur aan de pakketbeheerder en gebruik de handmatige kopieertruc voor noodgevallen in de buurt van deadlines.