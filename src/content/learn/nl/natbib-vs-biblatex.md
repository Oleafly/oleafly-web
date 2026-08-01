---

title: "natbib-gewoonten versus biblatex-opdrachten"
description: "Citaties tussen haakjes en tekst, en de namen die daarvoor in de plaats komen."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# natbib-gewoonten versus biblatex-opdrachten

Citatie voor het jaar van de auteur heeft twee soorten cite-commando's nodig. Soms maken de auteurs deel uit van je zin, zoals in "Knuth (1984) introduceerde geletterd programmeren." Soms wordt het citaat tussen haakjes geplaatst, zoals in "Geletterd programmeren combineert code en proza ​​(Knuth, 1984)." Het gewone '\cite' kan dat onderscheid niet maken, daarom bestaat het 'natbib'-pakket, en waarom biblatex zijn eigen reeks namen voor dezelfde ideeën levert. Als je het ene hebt geleerd en een sjabloon hebt gekregen waarin je het andere gebruikt, is deze pagina de vertaaltabel.

## De natbib-opdrachten

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

Het geheugensteuntje is dat `\citet` een *tekstueel* citaat is dat als onderdeel van de zin wordt gelezen, terwijl `\citep` een *tussen haakjes* citaat is, tussen haakjes. Bij de varianten met ster wordt de volledige auteurslijst afgedrukt in plaats van "et al.", wat af en toe nodig is als u voor de eerste keer een werk citeert. natbib biedt ook `\citeauthor` aan voor alleen de namen, `\citeyear` voor alleen het jaar, en een optioneel argument voor paginanummers, zoals in `\citep[p.~42]{knuth84}`. natbib is een pakket uit het preprocessortijdperk: het werkt met klassieke BibTeX en een compatibele `.bst`-stijl zoals `plainnat` of `apalike`.

## De biblatex-equivalenten

biblatex bestrijkt hetzelfde terrein met verschillende namen. `\textcite{knuth84}` produceert de tekstvorm "Knuth (1984)", `\parencite{knuth84}` produceert tussen haakjes "(Knuth, 1984)", en gewoon `\cite{knuth84}` produceert een kale citatie waarvan het exacte uiterlijk afhangt van de geladen stijl. Er zijn ook directe analogen voor de rest: `\citeauthor`, `\citeyear`, en voor- en nanoten voor zaken als paginanummers, geschreven met `\parencite[see][p.~42]{knuth84}`. Als het spiergeheugen het probleem is, heeft biblatex zelfs een `natbib=true` pakketoptie die `\citet` en `\citep` als aliassen definieert, wat migratie vrijwel pijnloos maakt.

## Een document migreren van natbib naar biblatex

Uw `.bib`-bestand heeft helemaal geen wijzigingen nodig. Beide systemen lezen dezelfde database. De migratie betreft alleen de preambule en de build. Verwijder `\usepackage{natbib}` en de `\bibliographystyle` regel, laad dan `\usepackage[backend=biber,style=authoryear]{biblatex}` en wijs deze naar uw database met `\addbibresource{refs.bib}`. Vervang `\bibliography{refs}` aan het einde van het document door `\printbibliography`. Zorg er ten slotte voor dat de build `biber` draait in plaats van `bibtex`, omdat biblatex zijn gegevens in een ander formaat opslaat en de oude backend stilletjes niets zal produceren. Als je liever de hoofdtekst niet aanraakt, behoud dan de natbib-opdrachtnamen via de compatibiliteitsoptie en alleen de preambule verandert.

## Welke je moet kiezen

Als de dagboeksjabloon al natbib laadt, blijf daar dan bij. Het bestrijden van een klassenbestand is zelden de moeite waard. Voor nieuwe documenten waar u maar wilt, is biblatex flexibeler en kan beter omgaan met Unicode. De bredere vergelijking vindt u in [Klassiek BibTeX of biblatex](/learn/bibtex-vs-biblatex/), en het achteraf wisselen van stijl wordt behandeld in [Numeriek, auteur-jaar, tijdschriftstijlen](/learn/change-citation-style/).