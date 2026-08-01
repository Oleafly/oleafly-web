---

title: "Zorg voor een werkende TeX op elk besturingssysteem"
description: "Olafly met een gebundelde engine, of een volledige TeX Live / MiKTeX-installatie."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Krijg een werkende TeX op elk besturingssysteem

Voor het lokaal schrijven van LaTeX is een TeX-systeem vereist: de engine die uw broncode compileert, plus de duizenden pakketten waar documenten van afhankelijk zijn. Er zijn twee verstandige manieren om er een te krijgen. De ene is een applicatie waarin de engine is ingebouwd, waarmee je binnen enkele minuten kunt compileren. De andere is een volledige TeX-distributie, die de volledige opdrachtregeltoolketen installeert die elke editor kan gebruiken. Beide paden eindigen op dezelfde plaats: een `.tex`-bestand dat op uw computer in een PDF verandert.

## Pad A: een app met de engine inbegrepen

Download [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) voor Mac, Windows of Linux. Het bundelt de Tectonic-engine, dus er is geen aparte TeX-installatie om te beheren: je opent de app, maakt een project aan en compileert. Wanneer een document een pakket gebruikt dat niet aanwezig is, haalt Tectonic dit op verzoek op, waarvoor een netwerkverbinding vereist is de eerste keer dat een bepaald pakket wordt gebruikt en daarna niets meer. Dit pad is geschikt voor iedereen die papieren wil schrijven in plaats van een TeX-installatie te beheren, en het laat gewone `.tex`- en `.bib`-bestanden op schijf achter die elk ander hulpmiddel kan lezen.

## Pad B: een volledige TeX-distributie

Als u een distributie installeert, krijgt u `pdflatex`, `xelatex`, `lualatex` en de pakketbeheerder als systeemopdrachten. Installeer op een Mac MacTeX, een TeX Live-pakket voor macOS; als de download van meerdere gigabytes niet gewenst is, is BasicTeX een kleine kern die u via TeX Live Utility kunt uitbreiden als dat nodig is. Op Windows is MiKTeX de gebruikelijke keuze en kan tijdens het compileren ontbrekende pakketten direct installeren, terwijl TeX Live even goed werkt. Op Linux installeert u `texlive-full` vanuit uw pakketbeheerder voor alles in één keer, of een kleiner schema zoals `texlive-latex-extra` plus de `tlmgr` tool om pakketten later toe te voegen. Verwacht dat een volledige installatie enige tijd zal duren en dat er meerdere gigabytes aan schijfruimte nodig zijn.

## Controleer de installatie

Open een terminal en vraag een engine naar zijn versie:

```bash
pdflatex --version
# or
xelatex --version
```

Een versiebanner betekent dat de toolchain op uw pad is en gereed is. Een foutmelding dat de opdracht niet is gevonden, betekent meestal dat de wijzigingen van het installatieprogramma in uw PATH nog niet van kracht zijn; het herstarten van de terminal, of uitloggen en opnieuw inloggen op Windows, lost het op.

## Welk pad je moet nemen

Kies voor de app als je begint of gewoon de kortste route naar een samengestelde pdf wilt. Kies een volledige distributie als u specifieke zoekmachines, opdrachtregelbuilds of integratie met een bestaande editor nodig heeft. De twee bestaan ​​zonder conflict naast elkaar, dus beginnen met pad A en later pad B toevoegen kost niets. Hoe dan ook, de volgende stap is hetzelfde: compileer [uw eerste document] (/learn/first-document/).