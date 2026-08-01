---

title: "TeX, LaTeX en 45 jaar prachtige documenten"
description: "Hoe een geïrriteerde computerwetenschapper in 1978 het zetsysteem bouwde, loopt nog steeds voort."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX en 45 jaar prachtige documenten

Elk hulpmiddel dat je zult gebruiken om papieren te schrijven, komt voort uit de frustratie van één man over lelijke proefdrukken. Het verhaal is kort en verklaart veel over waarom het schrijven van onderzoek werkt zoals het werkt.

## 1978: Knuth raakt geïrriteerd

Donald Knuth, een computerwetenschapper aan Stanford, was bezig met het schrijven van zijn epische boekenreeks *The Art of Computer Programming*. Toen de uitgever van traditioneel metaalzetwerk overging op vroege digitale systemen, zagen de nieuwe proefdrukken er verschrikkelijk uit, vooral de wiskunde. Knuth's reactie was glorieus onevenredig: hij pauzeerde de boeken en bracht jaren door met het bouwen van zijn eigen zetsysteem, **TeX** (uitgesproken als "tech", de X is een Griekse chi), en bracht het uit in 1978.

TeX was een programma dat platte tekst met opmaakopdrachten gebruikte en typografisch uitstekende pagina's produceerde: perfecte wiskundige spatiëring, elegante alinea-afbrekingen, de werken. Knuth bevroor uiteindelijk de kern en biedt een premiecontrole voor elke gevonden bug. Er zijn er maar heel weinig geclaimd.

## 1984: Lamport maakt het bruikbaar

Raw TeX is krachtig maar laagdrempelig, zoals assembleertaal voor pagina's. In 1984 bracht Leslie Lamport (later een Turing Award-winnaar voor gedistribueerde systemen) **LaTeX** uit, een vriendelijke laag erbovenop: in plaats van dingen met de hand te positioneren, schrijf je `\section{Introductie}` en `\cite{knuth78}` en laat je het systeem de nummering, verwijzingen en lay-out afhandelen. LaTeX is wat bijna iedereen tegenwoordig bedoelt als ze zeggen dat ze 'in TeX schrijven'. Uw [eerste document](/learn/first-document/) is een LaTeX-document.

## Waarom het vier decennia heeft overleefd

Tekstverwerkers kwamen en gingen; LaTeX bleef om saaie, uitstekende redenen:

- **Wiskunde.** Niets zet nog steeds vergelijkingen zo goed in. Zie [wiskundemodus](/learn/math-mode/).
- **Platte tekst.** Een .tex-bestand uit 1985 wordt vandaag geopend en werkt netjes met versiebeheer.
- **Automatisering.** Nummering, kruisverwijzingen en bibliografieën werken gewoon op 300 pagina's.
- **Sjablonen.** Uitgevers coderen hun exacte huisstijl als een klassenbestand, zodat elke inzending er identiek uitziet. Dat is de reden waarom [ACM, IEEE en vrienden](/learn/acm-ieee-and-friends/) jullie allemaal .tex-sjablonen overhandigen, en waarom tijdschriften nog steeds .tex-bronnen willen die ze in hun eigen lay-out kunnen compileren.

## De motorenfamilie in één adem

De originele TeX-engine bracht moderne opvolgers voort: **pdfTeX** voegde directe PDF-uitvoer toe, **XeTeX** voegde Unicode en systeemlettertypen toe, en **LuaTeX** voegde een scripttaal toe aan de engine. U kiest meestal gewoon wat uw sjabloon verwacht. De praktische verschillen zitten in [welke engine voor dit project](/learn/engines-compared/).

## 2023: voer Typst in

**Typst** is de eerste serieuze moderne uitdager: een nieuwe zettaal die helemaal opnieuw is opgebouwd met een schonere syntaxis, directe compilatie en vriendelijkere foutmeldingen. Het is echt aangenaam en groeit snel. De beperkingen ervan zijn de keerzijde van de sterke punten van LaTeX: veertig jaar aan pakketten en vooral acceptatie door de uitgever. Locaties willen vandaag de dag .tex, dus LaTeX blijft de taal van inzending, terwijl Typst geweldig is voor notities, rapporten en alles waarvan je de uitvoer beheert. Oleafly compileert LaTeX, Typst en Markdown naast elkaar, zodat je ze allemaal kunt gebruiken waar ze het beste uitkomen zonder van app te wisselen.

## De afhaalmaaltijd

TeX is de motor, LaTeX de taal die iedereen schrijft, Typst de jonge rivaal, en dagboeken de reden waarom de oude garde blijft bestaan. Waar deze passen bij Overleaf, redacteuren en referentiebeheerders is het onderwerp van [de toolbox voor het schrijven van onderzoek, toen en nu] (/learn/research-tools-landscape/).