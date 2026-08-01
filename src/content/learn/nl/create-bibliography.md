---

title: "Bouw een .bib die lang meegaat"
description: "Invoertypen, verplichte velden, stabiele sleutels."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Bouw een .bib die lang meegaat

Een `.bib`-bestand is een kleine tekstdatabase met alles wat u kunt citeren. Elk item heeft een type, een sleutel en een reeks velden, en hetzelfde bestand kan jarenlang dienst doen voor elk artikel dat u schrijft. Een beetje discipline nu, in de manier waarop u typen kiest, velden invult en naamsleutels gebruikt, bespaart later veel pijn als een dagboekstijl plotseling een veld wil dat u nog nooit hebt opgenomen.

## Anatomie van een item

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

Het woord na `@` is het invoertype, dat de stijl vertelt wat voor soort werk dit is en dus welke velden ze kunnen verwachten. `knuth84` is de citatiesleutel, de handle die je typt in `\cite{...}`. Al het andere is een veld. Het veld 'auteur' gebruikt de vorm 'Laatste, Eerste', zodat de stijl op betrouwbare wijze namen kan afkorten en sorteren, en 'pagina's' gebruikt een dubbel koppelteken, dat LaTeX als een streepje voor het paginabereik typt.

## De invoertypen die u daadwerkelijk nodig heeft

Zes typen bestrijken bijna al het academische geschrift. Gebruik `@article` voor tijdschriftartikelen, `@inproceedings` voor conferentie- en workshoppapers, `@book` voor boeken, `@phdthesis` voor proefschriften, `@techreport` voor institutionele rapporten en vele preprints, en `@misc` voor al het andere, inclusief software en websites. Het kiezen van het juiste type is van belang omdat stijlen elk een andere opmaak hebben: een `@inproceedings`-item wil een `boektitel` (de naam van de conferentie), terwijl een `@article` een `tijdschrift` wil.

## Verplichte velden en waarom validators klagen

Elk type heeft verplichte velden, en een ontbrekend veld is de meest voorkomende reden dat een bibliografie-item verminkt naar voren komt of een backend-waarschuwing activeert. Voor `@article` zijn de essentiële gegevens `auteur`, `titel`, `tijdschrift` en `jaar`; voor `@inproceedings`, `auteur`, `titel`, `boektitel` en `jaar`. Het ontbreken van `jaar` of `auteur` is de klassieke mislukking, omdat auteur-jaarstijlen zonder deze stijlen letterlijk geen citatielabel kunnen construeren. Optionele velden zoals `volume`, `pages`, `doi` en `publisher` maken invoer nuttiger, dus noteer ze terwijl de broncode voor u ligt. U kunt een heel bestand in één keer controleren met de [BibTeX validator](/tools/bibtex-validator/).

## Sleutels die tien jaar meegaan

Citatiesleutels zijn voor altijd. Elke `\cite{knuth84}` in elke draft, notitie en slidedeck verwijst naar die exacte string, dus het hernoemen van een sleutel betekent dat elk gebruik moet worden opgespoord. Kies een conventie zoals 'authorYEAR' of 'authorYEARkeyword', pas deze vanaf de eerste dag toe en "schoon" nooit sleutels in een gevestigde database. Als u referenties beheert in Zotero, kan de Better BibTeX-plug-in stabiele sleutels voor u genereren en vastzetten; zie [Zotero in een .bib-bestand](/learn/zotero-latex/). Om het bestand in een document te plaatsen, begint u met [Van .bib-sleutel tot citaat in de tekst](/learn/add-citations/).