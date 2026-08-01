---

title: "Grotere en kleinere soort"
description: "Klasse-opties zoals 11pt en schakelaars voor lokale grootte die de regelafstand niet verstoren."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Groter en kleiner type

De lettergrootte in LaTeX is op twee niveaus ingesteld: een documentbrede basisgrootte die één keer in de klassenopties wordt gekozen, en lokale schakelaars voor reeksen die moeten verschillen. De basisgrootte drijft al het andere. Koppen, voetnoten en de lokale grootten worden allemaal relatief daaraan gedefinieerd.

## Documentbreed

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

Met de klasseoptie wordt de grootte van de hoofdtekst ingesteld. `10pt` is de standaard, en `11pt` en `12pt` zijn de gebruikelijke alternatieven; de standaardklassen ondersteunen alleen deze drie. Als u deze optie wijzigt, wordt het hele document proportioneel opnieuw geschaald, omdat de kopgroottes, de voetnootgroottes en de regelafstand allemaal zijn afgeleid van de basis. Als je een basisgrootte groter dan 12pt nodig hebt, accepteren klassen zoals `extarticle` of de KOMA-Script-klassen een breder scala aan opties.

## Lokale schakelaars

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Dit zijn declaraties in plaats van commando's met argumenten: `\large` verandert de grootte vanaf dat punt totdat de huidige groep eindigt, en de accolades rond `{\large groter}` beperken het bereik ervan. De volledige ladder, van klein naar groot, is `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Elke stap wordt toegewezen aan een concrete grootte die afhangt van de klasseoptie, dus `\large` onder `12pt` is groter dan `\large` onder `10pt`. Beschouw de schakelaars als stappen verwijderd van de hoofdtekst, niet als vaste formaten.

De regelafstand heeft één subtiliteit. Een formaatschakelaar past de basislijnafstand alleen aan voor alinea's die eindigen terwijl deze actief is. Voor een groter formaat van meerdere alinea's moet u het alinea-einde binnen de groep houden door te eindigen met `\par` vóór de accolade sluiten, zoals in `{\large ... \par}`. Anders behoudt de laatste alinea de normale regelafstand onder te grote letters en botsen de regels.

## Maten versus structuur

Weersta het gebruik van formaatwijzigingen om kopteksten te vervalsen. `\section` en zijn verwanten bepalen de grootte voor u, en zij nummeren ook de kop, voegen deze toe aan de inhoudsopgave en maken PDF-bladwijzers. Een met de hand gemaakte regel `{\Large \textbf{...}}` geeft niets van dat alles. Hetzelfde idee is van toepassing op nadruk, behandeld in [nadruk zonder het lettertype te bestrijden](/learn/bold-italic/). Reserveer handmatige formaatwijzigingen voor echt lokale behoeften, zoals een opmerking ter grootte van een voetnoot onder een tabel of een regel op een titelpagina. Als elke kop in een document een restyling nodig heeft, verander dan de klasse of gebruik een pakket als `titlesec` in plaats van elke kop handmatig op maat te maken.