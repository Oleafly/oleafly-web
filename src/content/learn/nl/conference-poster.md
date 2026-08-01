---

title: "Affiches op A0"
description: "tikzposter, beamerposter of geometrie plus TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Posters op A0

Een congresposter is één pagina, meestal A0 of A1, die vanaf anderhalve meter afstand leesbaar moet zijn. LaTeX gaat goed om met het formaat omdat de poster de vergelijkingen, cijfers en bibliografie van het artikel rechtstreeks kan hergebruiken. Een normale documentklasse volstaat echter niet: lettertypen, marges en kolomindeling hebben allemaal versies op posterformaat nodig. Drie benaderingen bestrijken bijna elke LaTeX-poster in het wild.

## De drie opties

De klasse 'tikzposter' is de meest directe route naar een moderne academische poster. Het organiseert de inhoud in gekleurde blokken die in kolommen zijn gerangschikt, verzendt verschillende complete thema's en verwerkt het grote papierformaat en de geschaalde lettertypen zelf. Een skelet ziet er als volgt uit:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

De klasseopties stellen een basislettertype van 25 punten, A0-papier en portretoriëntatie in. Elke `\kolom{0.5}` neemt een fractie van de posterbreedte in beslag, en elk `\blok{titel}{content}` wordt één paneel met een titel. Als u `\usetheme` wijzigt, wordt elk blok in één keer opnieuw vormgegeven.

Het 'beamerposter'-pakket breidt Beamer uit naar posterformaten, zodat het thema, de kleuren en de 'blok'-omgevingen van een deck worden overgedragen naar één gigantisch frame. Het is de logische keuze als uw groep al Beamer-stijlen hanteert en er veel universitaire postersjablonen op zijn gebouwd.

De derde optie is een gewone documentklasse met de pakketinstelling `geometrie` A0-afmetingen, plus TikZ voor decoratie. Dit geeft volledige controle over elke millimeter en is de manier waarop de zwaarst ontworpen posters worden gemaakt, maar je bouwt de kolommensteiger zelf, dus budgeteer er echt tijd voor.

## Praktisch advies

Welke route u ook kiest, begin met een werkend sjabloon in plaats van met een leeg bestand, bijvoorbeeld één uit de [galerij](/templates/), en vervang de inhoud blok voor blok. Stel het papierformaat en de papierrichting al op de eerste dag in, want als u ze later wijzigt, wordt elke handmatig ingestelde breedte verbroken. De hoofdtekst zou na het afdrukken ongeveer 24 tot 32 punten moeten bedragen; alles onder de 20 punten wordt ongelezen. Geef de voorkeur aan vectorfiguren. Een plot dat voor een papieren kolom wordt geëxporteerd, verandert in pap wanneer het wordt geschaald naar posterbreedte. Genereer dus figuren op posterformaat in plaats van ze uit te rekken.

De meest voorkomende fout is het behandelen van de poster als gecomprimeerd papier. Houd bij de eerste versie rekening met ongeveer een derde van het aantal woorden, laat de cijfers het argument overbrengen en controleer het resultaat door een blok van de PDF op volledige schaal op A4-formaat af te drukken om de ware lettergrootte te beoordelen voordat u het bestand naar een plotter stuurt.