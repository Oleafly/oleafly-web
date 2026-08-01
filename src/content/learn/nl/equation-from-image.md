---

title: "Whiteboardfoto naar bron"
description: "Bijsnijden, OCR of multimodaal, compileren, indexen met het oog corrigeren."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Whiteboardfoto naar bron

Een afleiding op een whiteboard, een gescande pagina met collegeaantekeningen, een vergelijking in een pdf waar je niet uit kunt kopiëren: het handmatig overtypen van wiskunde in LaTeX is traag en foutgevoelig. Moderne tools kunnen het meeste vanaf een foto doen. De conversie is nu echt goed, maar behandel de uitvoer als een concept en niet als een voltooide transcriptie. De onderstaande workflow is daar omheen gebouwd.

## Begin met een betere foto

De beeldkwaliteit bepaalt meer het resultaat dan de gereedschapkeuze. Fotografeer recht vooruit in plaats van vanuit een hoek, omdat scheve basislijnen sub- en superscript dubbelzinnig maken. Zorg voor een gelijkmatige verlichting zonder verblinding op het bord en snijd nauwkeurig bij tot de gewenste vergelijking, omdat omringende diagrammen en verdwaalde markeringen hallucinante symbolen worden. Als een foto drie vergelijkingen heeft, snijd deze dan in drie afbeeldingen bij en converteer ze één voor één; resultaten per vergelijking zijn consistent beter dan resultaten per pagina in één keer.

## Converteer met de tool die je hebt

Er zijn drie soorten gereedschappen die dit werk doen. Speciale OCR-services voor vergelijkingen zijn nauwkeurig bij schone invoer. Algemene multimodale modellen accepteren een afbeelding in de chat en retourneren LaTeX wanneer daarom wordt gevraagd, en u kunt antwoorden "het tweede subscript moet j zijn, niet i" om een ​​gecorrigeerde versie te krijgen. Oleafly heeft image-to-LaTeX ingebouwd en loopt via je eigen API-sleutel met welke provider je ook hebt geconfigureerd, zodat een fragment van screenshot naar bron kan gaan zonder de editor te verlaten. Zie [AI setup](/docs/ai-setup/) voor configuratie. Bij duidelijke input komen de drie benaderingen samen, en daarom is het bovenstaande fotoadvies belangrijker dan de gereedschapsbeslissing.

## Onmiddellijk compileren

Plak de uitvoer in uw document in een 'vergelijkingsomgeving' en compileer voordat u iets anders doet. Conversiefouten zijn in twee soorten te verdelen, en de compiler vangt de eerste soort voor je op: onevenwichtige accolades, niet-overeenkomende `\left` en `\right` scheidingstekens, en onbekende commando's mislukken allemaal luid, en de oplossingen zijn mechanisch. [Missing dollar sign](/learn/missing-dollar/) behandelt de meest voorkomende van deze fouten.

## Vervolgens proeflees je de wiskunde

De tweede soort fout compileert perfect en is verkeerd. Lees de weergegeven vergelijking met het originele symbool voor symbool, met bijzondere aandacht voor de plaatsen die de conversie betrouwbaar verschuift: subscripts en superscripts, waarbij kleine glyphs samen vervagen en `x_i` `x_j` wordt; primes en hoeden, die verdwijnen of migreren; de op elkaar lijkende paren zoals `1`, `l` en `I` of `\rho` en `p`; en grenzen aan sommen en integralen. Dit zijn precies de details die de betekenis van een formule veranderen, terwijl deze typografisch plausibel blijft. Twee minuten vergelijken per vergelijking zijn de totale kosten, en het is veel goedkoper dan dat een recensent de verkeerde index op papier vindt.