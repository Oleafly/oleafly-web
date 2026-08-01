---

title: "Opruimen van mysterieuze citatietekens"
description: "Typefouten, ontbrekende passen, verkeerd pad, BibTeX versus Biber-mismatch."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Mysterieuze citatietekens opruimen

## Het symptoom

Het document wordt gecompileerd, maar waar een citaat zou moeten verschijnen, krijgt u een vet vraagteken, `[?]`, en de log bevat regels als `LaTeX-waarschuwing: citaat 'knuth84' undefined`. Soms wordt elke citatie beïnvloed, soms slechts één of twee. Omdat dit eerder een waarschuwing dan een fout is, wordt de PDF nog steeds opgebouwd en zijn de markeringen gemakkelijk te missen totdat een lezer ze aanwijst.

## Waarom het gebeurt

LaTeX lost citaten niet rechtstreeks op. Bij de eerste doorgang registreert het elke gevraagde sleutel in een hulpbestand. Een backend-programma (`bibtex` of `biber`) zoekt vervolgens die sleutels op in uw `.bib`-database en schrijft geformatteerde vermeldingen. Nog twee LaTeX-passages vouwen de resultaten weer in. Een vraagteken betekent dat er op het moment van de laatste pass geen geformatteerde invoer bestond voor die sleutel. Elke oorzaak van dit symptoom is een manier om die pijplijn te doorbreken.

## Werk op volgorde door de oorzaken heen

Controleer eerst de sleutel zelf. `\cite{knuth84}` en `@article{knuth1984,...}` zijn verschillende tekenreeksen en de overeenkomst is exact, inclusief hoofdletters en kleine letters. Zoek in uw `.bib`-bestand naar de sleutel die in de waarschuwing wordt genoemd; een typefout aan beide kanten is de meest voorkomende boosdoener, en de eerste waarschuwing voor een ontbrekende sleutel in het logboek is degene die je moet achtervolgen.

Zorg er vervolgens voor dat de volledige compileercyclus is uitgevoerd. De volgorde is LaTeX, dan `bibtex` of `biber`, en dan nog twee keer LaTeX. Een enkele compilatie kan nooit citaten oplossen, omdat de backend nog niet is uitgevoerd. Oleafly voert de hele cyclus automatisch uit, maar een handmatige build of een verkeerd geconfigureerde editor kan na de eerste passage stoppen.

Ten derde: controleer het databasepad. `\bibliography{refs}` en `\addbibresource{refs.bib}` worden relatief ten opzichte van het hoofdbestand opgelost, dus een database in een submap moet worden geschreven als `bib/refs` of `bib/refs.bib`. Een verkeerd pad mislukt stilletjes en neemt meestal de hele referentielijst mee; zie [Lege bibliografie](/learn/bibliography-empty/) voor die grotere mislukking.

Match ten slotte de backend met het systeem. Een document dat biblatex laadt, moet worden verwerkt met `biber`. Het invoeren van de klassieke 'bibtex' levert geen bruikbare uitvoer op, en elke citatie blijft een vraagteken, ongeacht hoe vaak je opnieuw compileert.

## Als al het andere faalt

Verouderde hulpbestanden kunnen een oude, kapotte status behouden. Verwijder de bestanden `.aux`, `.bbl` en `.blg` naast uw document en bouw het geheel opnieuw op. Het `.blg`-bestand is ook de moeite waard om te lezen voordat u het verwijdert: het is het eigen logboek van de backend en het geeft ontbrekende databases en verkeerd ingedeelde vermeldingen expliciet een naam.