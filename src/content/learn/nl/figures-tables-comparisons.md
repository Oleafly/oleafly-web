---

title: "Cijfers, tabellen en vergelijkingen dragen het papier"
description: "Afhaalbijschriften, vergelijkingstabellen, plots versus tabellen en visuele consistentie."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Cijfers, tabellen en vergelijkingen vormen de basis

Hier ziet u hoe een drukke recensent uw artikel daadwerkelijk leest: de samenvatting, dan een blader door alle figuren en tabellen, en dan misschien de tekst. Als je visuals het verhaal op zichzelf vertellen, heb je de helft van de recensie gewonnen voordat er ook maar één paragraaf wordt gelezen. Ontwerp ze alsof ze het papier zijn. Voor veel lezers is dat zo.

## Elk figuur heeft een afhaalbijschrift nodig

Een onderschrift met de tekst 'Resultaten op dataset A' verspilt het meest waardevolle onroerend goed in de krant. Een bijschrift met de tekst: "Onze methode (blauw) komt overeen met de basislijn tegen de helft van de kosten; de kloof wordt groter naarmate het model groter wordt", vertelt de flipperende recensent precies wat hij moet concluderen. Schrijf bijschriften als beweringen en laat de figuur ze vervolgens bewijzen. Een lezer moet alleen uw bijschriften kunnen lezen en het argument kunnen reconstrueren. De mechanismen van bijschriften en nummering zijn te vinden in [bijschriften en labels](/learn/captions-labels/).

## Vergelijkingstabellen: de favoriet van de recensent

Twee tabelpatronen domineren empirische artikelen:

**De tabel met basislijnen.** Jouw methode vergeleken met eerder werk, elk één rij, de beste cijfers zijn vetgedrukt. Neem de voor de hand liggende basislijnen op, zelfs als ze zwaar verliezen. Het weglaten van een bekende basislijn leest als het verbergen van iets.

**De matrix met vinkjes.** Mogelijkheden aan de zijkant, methoden aan de bovenkant, vinkjes waar een methode de eigenschap heeft. Het positioneert uw werk in één oogopslag:

| Vermogen | Voorafgaand A | Voorafgaand B | Onze |
|---|---|---|---|
| Geen omscholing nodig | ja | nee | ja |
| Werkt op schaal | nee | ja | ja |
| Open source | nee | nee | ja |

Houd het eerlijk. Recensenten kennen de truc om rijen te kiezen die uw methode toevallig wint.

## Perceel of tafel?

Gebruik een plot als de vorm de boodschap is: een trend, een crossover, een schaalcurve. Gebruik een tabel als de exacte cijfers de boodschap zijn: benchmarkscores waar iedereen mee zal vergelijken. Vraag bij twijfel wat de lezer ermee gaat doen. Als ze het nummer willen noemen, tabel. Als ze de trend willen beschrijven, plot dan.

## Consistentie is geloofwaardigheid

Kleine visuele inconsistenties duiden stilletjes op onzorgvuldigheid:

- Dezelfde lettertypefamilie en -grootte voor alle figuren, dicht bij de hoofdtekstgrootte na schalen.
- Dezelfde kleur voor dezelfde methode in elk plot. Als uw methode blauw is in Figuur 2, is deze overal blauw.
- Overal dezelfde aslabelconventies en -eenheden.
-Leesbaar op gedrukt formaat. Als u moet inzoomen om een ​​vinkje te kunnen lezen, is het te klein.

Exporteer waar mogelijk vectorformaten (PDF, SVG) in plaats van schermafbeeldingen. Bitmapplots met vage tekst zijn de snelste manier om er ongepolijst uit te zien.

## Bouw ze in LaTeX

Het plaatsen, vergroten en verkleinen van het float-systeem wordt behandeld in [afbeeldingen invoegen](/learn/insert-images/), en tabellen opschonen in [tabellen maken](/learn/create-table/). Voor diagrammen, architectuurschetsen en stroomdiagrammen produceert TikZ vectorafbeeldingen die exact overeenkomen met uw documentlettertypen. Begin met [de TikZ-intro](/learn/tikz-intro/). Als het met de hand schrijven van TikZ traag aanvoelt, kan Oleafly's Diagram Composer helpen TikZ-figuren visueel op te stellen, die je vervolgens in code kunt verfijnen.

## De vijf minuten durende audit

Voordat de recensent zich voordoet, moet hij zichzelf omdraaien: lees alleen de bijschriften, in de juiste volgorde. Vertellen ze het hele verhaal? Is er iets vetgedrukt, gekleurd of met een ster zonder uitleg? Zou een vreemde in elke figuur weten welke methode de jouwe is? Repareer wat mislukt en dien het vervolgens in.