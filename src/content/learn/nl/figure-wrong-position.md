---

title: "De figuur die de sectie ontvlucht"
description: "Drijfbarrières, grootte en plaatsing als laatste redmiddel."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# De figuur die de sectie ontvlucht

Je plaatst een figuur aan het einde van hoofdstuk 4 en het wordt in het midden van hoofdstuk 5 afgedrukt, of stapelt zich op met drie andere aan het einde van het hoofdstuk. Cijfers zijn floats: LaTeX beschouwt hun positie in de bron als uitgangspunt, niet als bestemming, en verplaatst ze om pagina's vol te houden. Drijvers moeten ook in volgorde verschijnen, dus één figuur die niet geplaatst kan worden, blokkeert alle figuren erachter. Het algemene plaatsingssysteem wordt behandeld in [waar drijvers daadwerkelijk landen](/learn/position-figures/). Deze les is de escalatieladder voor als een vlotter ergens terechtkomt die je niet kunt accepteren.

## Stap één: controleer de plaatsingsopties

Zorg ervoor dat de omgeving '[htbp]' zegt, en niet alleen '[h]'. De letters geven toestemming om de float hier, bovenaan een pagina, onderaan of op een speciale floatpagina te plaatsen. Het toekennen van alleen 'h' is de meest voorkomende oorzaak van een op hol geslagen figuur, want als de huidige pagina geen ruimte heeft, heeft LaTeX nergens een legale plek en wordt de float voor onbepaalde tijd voortgezet.

## Stap twee: verplaats de code

Een vlotter kan later afdrijven dan zijn bronpositie, maar nooit eerder. Als het cijfer te laat verschijnt, verplaats de omgeving dan hoger in de bron, idealiter net vóór de paragraaf met de eerste `\ref`. Met deze ene bewerking wordt een verrassend groot aantal plaatsingsklachten opgelost.

## Stap drie: hek de sectie

Het `placeins`-pakket biedt `\FloatBarrier`, een commando dat ervoor zorgt dat alle hangende floats worden geplaatst voordat de tekst verdergaat:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Plaats de barrière aan het einde van een sectie en geen enkel figuur uit die sectie kan in de volgende sectie lekken. LaTeX kan extra verticale ruimte invoegen om de drijvers door te spoelen, wat meestal een acceptabele prijs is in de buurt van een sectie-einde.

## Stap vier: de H-hamer

Het `float`-pakket voegt een `H`-specificatie met een hoofdletter toe die float volledig verwijdert:

```latex
\usepackage{float}
\begin{figure}[H]
```

Een `[H]`-figuur wordt precies afgedrukt waar de code zich bevindt, als een grote alinea. De kosten hiervan zijn dat LaTeX de pagina eromheen niet langer in evenwicht kan brengen, waardoor er mogelijk een grote lege ruimte ontstaat als het figuur niet in de resterende ruimte past. Beschouw het als een laatste redmiddel voor een of twee hardnekkige drijvers, niet als standaard.

## Stap vijf: verklein het figuur

Zeer grote praalwagens worden uitgesteld omdat er maar weinig pagina's ruimte voor hebben. Door `width=0.9\textwidth` te verkleinen naar `0.7\textwidth`, of door de witruimte uit het afbeeldingsbestand weg te halen, kan LaTeX vaak een figuur plaatsen die het naar het einde van het hoofdstuk had geduwd.

Eén gewoonte die de moeite waard is om te behouden: voer deze afstemming één keer uit, nadat de tekst stabiel is. Elke paragraaf die u toevoegt of verwijdert, herschikt de pagina's, dus een plaatsingsoperatie tijdens het opstellen is een inspanning die u opnieuw moet doen.