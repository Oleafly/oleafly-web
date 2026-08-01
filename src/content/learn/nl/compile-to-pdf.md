---

title: "Waarom je meer dan eens compileert"
description: "Aux-bestanden, bibliografiepassen en waarom referenties worden afgedrukt ?? tijdens de eerste run."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Waarom je meer dan eens compileert

Vroeg of laat zul je een document samenstellen, de pdf openen en `??` vinden waar een cijfernummer of citaat zou moeten staan. Er is niets kapot. Een enkele compilatie is één keer over uw bestand gaan, en sommige informatie kan echt niet in één keer bekend zijn.

Hier is het probleem in miniatuur. Op pagina 2 schrijf je "zie figuur \ref{fig:results}", maar dat cijfer komt terecht op pagina 7. Wanneer de engine pagina 2 intypt, is pagina 7 nog niet bereikt, dus heeft hij geen idee welk nummer het figuur zal krijgen. Hetzelfde geldt voor de inhoudsopgave, die het paginanummer van elke sectie nodig heeft voordat pagina één zelfs maar is voltooid.

## Hoe de motor het oplost

Een LaTeX-engine leest uw `.tex`-bestand, lost elke macro op en schrijft een PDF. Naast de PDF schrijft het ook kleine hulpbestanden: `.aux` voor labels en citaten, `.toc` voor de inhoudsopgave, `.bbl` voor de opgemaakte bibliografie. Deze bestanden zijn aantekeningen die de engine achterlaat voor zijn toekomstige zelf.

1. Bij de eerste passage typt de engine uw tekst en schrijft elke `\label` en `\cite` die hij tegenkomt in het `.aux`-bestand, waarbij `??` wordt afgedrukt waar hij een nummer nodig heeft dat hij nog niet kent.
2. Als u iets citeert, leest een bibliografietool (bibtex of biber) het `.aux`-bestand, zoekt elke citatie op in uw `.bib`-database en schrijft de opgemaakte referentielijst in een `.bbl`-bestand.
3. Bij de tweede en soms derde keer leest de engine die hulpbestanden weer in, zodat kruisverwijzingen, inhoudsopgaven en citatielabels uiteindelijk worden omgezet in reële getallen.

Moderne opstellingen voeren deze passen automatisch voor u uit, dus in de praktijk typt u zelden zelf de opdrachten. Maar het kennen van de cyclus verklaart het symptoom: een nieuwe `??` na het toevoegen van een label of citaat betekent gewoon dat de helperbestanden de achterstand nog niet hebben ingehaald, en nog een compilatie verhelpt dit.

## Motoren elk op één lijn

Verschillende programma's kunnen de rol van "de motor" spelen. pdfLaTeX is de klassieke keuze met de breedste tijdschriftondersteuning. XeLaTeX voegt volledige Unicode toe en laat u lettertypen gebruiken die op uw systeem zijn geïnstalleerd. LuaLaTeX spreekt ook Unicode en bevat een scripttaal voor geavanceerde pakketten. Tectonic is een moderne engine die pakketten op aanvraag downloadt zodra u ze voor de eerste keer nodig heeft. Oleafly bundelt het zodat een nieuw project wordt gecompileerd zonder eerst een TeX-distributie te installeren.

Voor de meeste documenten doen de verschillen er nauwelijks toe; kies wat uw sjabloon of locatie verwacht en ga verder. Zie [motoren vergeleken](/learn/engines-compared/) als je bewust moet kiezen.

## Wanneer iets daadwerkelijk mislukt

Bij een mislukte compilatie wordt een lang logboek gedumpt, en het natuurlijke instinct is om het van onderaf te lezen. Weersta dat. Lees de eerste fout in het logbestand en los alleen dat op; latere fouten zijn vaak trapsgewijze ruis veroorzaakt door de eerste. Als referenties nog steeds `??` weergeven na twee opeenvolgende succesvolle compilaties, is de gebruikelijke boosdoener een typfout in de `\label` of `\ref` naam in plaats van een ontbrekende pas.