---

title: "Dubbelblind goed gedaan"
description: "Wat u moet anonimiseren, hoe u uzelf moet citeren en welke metadata u verraadt."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Dubbelblind goed gedaan

Dubbelblinde beoordeling betekent dat reviewers niet weten wie het artikel heeft geschreven. Een fout maken is een van de weinige opmaakfouten die ertoe kunnen leiden dat een artikel wordt afgewezen zonder dat het is gelezen. Beschouw anonimisering dus als een checklist en niet als een gevoel.

## Wat moet weg

| Artikel | Wat te doen |
|---|---|
| Auteursnamen en voorkeuren | Verwijderen of vervangen door "Anonieme auteur(s)" |
| Dankbetuigingen | Verwijderen voor indiening (financiers en collega's identificeren u) |
| Repo- en projectlinks | Vervangen door een geanonimiseerde link, zie hieronder |
| Instellingsspecifieke gegevens | "het cluster van onze universiteit" verslaat "het Stanford GPU-cluster" |
| "Ons eerdere werk"-frasering | Herschrijf in de derde persoon, zie hieronder |
| Logo's, watermerken, headers | Strip alles met een groeps- of labnaam |

Veel klassen automatiseren de eerste rij. Met de klasse van ACM is dit één optie:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Andere locaties verzenden een inzendingsvariant van hun sjabloon. [IEEEtran](/learn/ieee-format-in-practice/) locaties vertellen je vaak alleen dat je het auteursblok moet weglaten.

## Je eigen werk citeren

De regel is simpel: citeer uzelf precies zoals u een vreemde zou citeren.

Fout: "In ons vorige werk [7] hebben we laten zien..."
Rechts: "Lovelace et al. [7] lieten zien..."

Laat uw eigen relevante papieren niet achterwege. Recensenten verwachten dat het voor de hand liggende gerelateerde werk wordt geciteerd, en een verdachte leemte kan u net zo effectief de-anonimiseren als een naam. De enige uitzondering is echt ongepubliceerd werk, dat u in plaats daarvan als anoniem aanvullend materiaal kunt uploaden.

## Anonieme artefacten

Reviewers verwachten steeds vaker code en data. GitHub-links zijn radioactief: de gebruikersnaam staat daar. Opties die werken:

- Services die hiervoor zijn gebouwd (anonymous.4open.science is de veldstandaard)
- Een nieuwe repository onder een wegwerpaccount met opgeschoonde commitgeschiedenis
- Aanvullende zip geüpload met de inzending, waarbij auteursnamen zijn verwijderd uit bestandskoppen en notitieboekjes

Controleer de zip voordat u uploadt: licentiebestanden, `AUTHORS`, metagegevens van het notebook en hardgecodeerde paden naar de thuismap (`/home/ada/...`), allemaal leknamen.

## De ongelukken die je verraden

De papieren tekst is anoniem, maar de PDF mag niet:

- **PDF-metagegevens.** Het veld Auteur wordt vaak automatisch ingevuld vanuit uw systeem. Controleer dit met `pdfinfo` of de documenteigenschappen van uw viewer, en wis het via `\hypersetup{pdfauthor={}}`.
- **Bestandsnamen.** `lovelace-sigconf-final.pdf` maakt alles ongedaan. Noem het `paper.pdf` of het indieningsnummer.
- **Figuurbronnen.** Percelen die vanuit tools worden geëxporteerd, kunnen gebruikersnamen in metagegevens of in een zichtbaar pad in een screenshot insluiten.
- **Preprints.** Het posten op arXiv voordat het wordt ingediend, is op veel locaties toegestaan ​​en op andere locaties verboden. Het CFP zegt welk. Lees het. Dit is [onderdeel van het kiezen van de locatie](/learn/choose-your-venue/).

## Camera-ready draait hem terug

Na acceptatie keert alles terug: namen, affiliaties, dankbetuigingen, de echte repo-link en de frasering in de eerste persoon als je dat leuk vindt. Trek een uur uit voor de de-anonimiseringspas. Het raakt meer plaatsen dan je je herinnert, en de [camera-ready checklist] (/learn/first-paper-roadmap/) is het moment om achterblijvers te vangen.