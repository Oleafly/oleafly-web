---

title: "Coauteur zonder live cursor"
description: "Patches, gedeelde mappen plus Git, en het bezitten van afzonderlijke hoofdstukbestanden."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Coauteur zonder live cursor

Realtime gezamenlijk bewerken, waarbij u de cursor van een co-auteur ziet bewegen, is het model dat cloudeditors verkopen. Er zijn veel goede artikelen geschreven zonder. Wanneer auteurs lokaal werken, is asynchrone samenwerking gebaseerd op Git het betrouwbare patroon: iedereen bewerkt op zijn eigen machine, en wijzigingen worden doelbewust samengevoegd in plaats van karakter voor karakter. Het vereist iets meer coördinatie en betaalt dit terug met offline werk, volledige geschiedenis en geen afhankelijkheid van iemands server.

## Git als ruggengraat

De standaardconfiguratie is een gedeelde repository, meestal op GitHub, waar iedereen uit haalt en naartoe pusht. Elke auteur werkt in sessies: haal de laatste status op, schrijf, commit, push. Omdat LaTeX platte tekst is, voegt Git automatisch parallelle wijzigingen aan verschillende delen van het papier samen, en de installatie duurt minuten. [Plaats het papier op GitHub](/learn/sync-with-github/) bedekt het. Als een medewerker een Git-host niet kan of wil gebruiken, vullen patches het gat op: `git format-patch` verandert commits in kleine bestanden die je kunt e-mailen, en de ontvanger past ze toe met `git am`, waardoor het auteurschap en de geschiedenis intact blijven. Het is een oude workflow en werkt nog steeds overal waar e-mail werkt.

Een hybride werkt ook als een co-auteur aandringt op een gesynchroniseerde map: bewaar de gedeelde kopie voor het gemak in Dropbox of Syncthing, maar laat één persoon de Git-geschiedenis bijhouden en samenvoegingen uitvoeren. Richt de live Git-checkouts van twee mensen niet op dezelfde gesynchroniseerde map, omdat synchronisatieconflicten binnen de map `.git` repository's beschadigen.

## Verdeel het document per bestand

Samenvoegingen worden zeldzaam als mensen zelden hetzelfde bestand aanraken. Splits het manuscript zodat elk hoofdstuk of elke sectie in een eigen bestand staat, opgehaald uit een dunne `main.tex` met `\input{chapters/methods}`. De werking zit in [Een document in bestanden splitsen] (/learn/split-chapter-files/). Wijs vervolgens het eigendom toe: elke co-auteur schrijft in zijn eigen bestanden, en één integrator verzorgt de preambule, de samenvoeging en de uiteindelijke lezing voor consistentie van notatie en toon. Dit weerspiegelt hoe softwareteams elkaar vermijden, en het werkt om dezelfde redenen.

## Wat gaat er eigenlijk mis

De fout die je moet vermijden is dat twee mensen dezelfde paragraaf in hetzelfde tijdsbestek bewerken. Git zal het markeren als een conflict, en LaTeX-conflicten zijn leesbaar maar vervelend om op te lossen, dus de goedkoopste oplossing is sociaal: een snel bericht met de tekst "Ik ben vandaag in de inleiding" voorkomt ze bijna allemaal. Twee schrijfgewoonten verminderen de rest. Bewaar één zin per bronregel, zodat parallelle bewerkingen van aangrenzende zinnen helemaal niet botsen, en trek deze onmiddellijk vóór elke schrijfsessie uit, zodat u altijd de nieuwste tekst aan het bewerken bent.