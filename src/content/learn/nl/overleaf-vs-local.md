---

title: "Browserproject versus map op schijf"
description: "Cloudgemak vergeleken met lokaal eigendom, offline werken en echt Git."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Browserproject versus map op schijf

Wanneer u LaTeX begint te schrijven, wordt u al vroeg geconfronteerd met een beslissing: staat uw project in een browsertabblad op de server van iemand anders, of in een map op uw eigen schijf? Beide modellen produceren dezelfde PDF. Ze verschillen in wie de bron in handen heeft, wat er gebeurt als het netwerk wegvalt en hoeveel van de omliggende toolchain je beheert.

## Wat elk model je geeft

| | Cloud (bijv. achterzijde) | Lokaal (Oleafly, TeX Live) |
| --- | --- | --- |
| Opstelling | Direct, niets te installeren | Eén installatie |
| Offline | Beperkt | Bewerken werkt altijd; compileert uitgevoerd met pakketten in de cache |
| Privé | De aanbieder slaat uw projecten op | Bestanden blijven op uw schijf staan ​​|
| Git | Via een synchronisatiebrug | Native, een echte repository in de map |
| Samenwerking | Realtime cursors | Git, patches, gedeelde mappen |
| Kosten | Gratis niveau plus abonnementen | Gratis |

Een cloudproject is een rij in een database die de dienst voor u rendert. Een lokaal project is een map die je kunt openen in bestandsbeheer, naar een USB-station kunt kopiëren, kunt zoeken met elk hulpmiddel en een versie kunt maken met gewone Git. Dat verschil klinkt abstract totdat een deadline samenvalt met een storing, een wijziging van de betaalmuur of een vlucht.

## Wanneer de cloud de juiste keuze is

Realtime co-bewerking is het echte voordeel van de cloud. Als drie co-auteurs het laatste uur voor een deadline dezelfde alinea moeten typen en geen van hen software wil installeren, is een browsereditor het praktische antwoord. Niets lokaals vervangt momenteel gelijktijdige cursors.

## Wanneer lokaal de juiste keuze is

Lokaal wint wanneer het concept gevoelig of niet-gepubliceerd is, wanneer u op vliegtuigen of beperkte netwerken werkt, wanneer uw cijfers en gegevens groot zijn, of wanneer u versiegeschiedenis wilt die niet afhankelijk is van een abonnementsniveau. Een lokale Git-opslagplaats registreert uw wijzigingen, ongeacht of er morgen een dienst bestaat of niet, en dezelfde map werkt met een terminal, een code-editor of de kloon van een medewerker.

Oleafly is gebouwd voor de lokale kant van deze tabel: de compiler wordt binnen de app geleverd, projecten zijn gewone mappen met echte Git-geschiedenis en optionele AI draait met je eigen sleutel. Een langere vergelijking staat op de [blog](/blog/local-first-vs-cloud-latex-editors/), en de documenten behandelen [hoe de twee modellen kunnen samenwerken](/docs/why-oleafly/) via GitHub.