---

title: "Scheikundepapieren in LaTeX: formules, schema's en SI-eenheden"
description: "Reacties met mhchem, structuren, experimentele tabellen, SI-eenheden, bibliografieën en privéconcepten voor studenten scheikunde en chemische technologie."
date: 2026-06-22
tags: [chemistry, research]
---

Chemici verschijnen meestal om twee redenen in LaTeX: het tijdschrift houdt vol:
of een medewerker werkt al op die manier. Hoe dan ook, de pijnpunten zien er uit
bekend: reactieschema's, isotopenlabels, toestandstabellen, en a
bibliografie vol met tijdschriften en patenten.

Deze gids behandelt undergrad-rapporten tot en met de eerste tijdschriftinzendingen. Het zal
vervangt ChemDraw niet voor complexe natuurlijke producten. Het manuscript wordt bewaard
en het experimentele gedeelte van het vechten tegen de compiler.

## Reacties met mhchem

`mhchem` is het gebruikelijke antwoord voor formules en reacties:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Pin versie 4 vast, zodat de syntaxis niet afwijkt tussen coauteurs of tussen ommezijde
en een lokale TeX-installatie. Langere uitleg:
[chemische formules](/learn/chemistry-notation/).

Meerstapsschema's met reagentia boven en onder de pijl hebben meer nodig dan
inline `\ce`. mhchem verzorgt de formules; lay-out vereist vaak een journaalschema
omgeving of een externe figuur. Maak geen totale synthese van twintig stappen
in een reeks inline chemielijnen.

## Structuren: chemfig of externe tekeningen

`chemfig` tekent eenvoudige structuren in pure TeX en bewaart alles
vector-lokaal. Complexe natuurlijke producten zijn bijna altijd beter als ChemDraw,
Marvin, of iets dergelijks, exporteerde naar PDF en vervolgens naar `\includegraphics`. Geef de voorkeur aan vector-PDF
over een screenshot PNG zodat de verbindingslijnen scherp blijven in druk en in twee kolommen
indeling.

Geef bestanden een naam op samengestelde ID (`cmpd-12.pdf`). Bewaar de bewerkbare ChemDraw-bron
in het laboratoriumarchief, zelfs als git alleen de PDF bevat die in de krant hoort.

## Experimentele secties en lange tafels

Conditietabellen (temperatuur, oplosmiddel, opbrengst, katalysatorbelading) werken goed
met `booktabs` en vaak `siunitx` voor numerieke kolommen:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Als een tabel langer duurt dan een pagina, schakel dan vóór de deadline over naar 'longtable'
week, niet nadat het tijdschrift klaagt over 7pt-lettertypen. Het onderschrift zou moeten zeggen
wat "opbrengst" betekent (geïsoleerd, NMR, GC), dus lezers raden het niet.

## Eenheden en spectroscopiefragmenten

Kies een eenheidsstijl en houd u daaraan: `siunitx`, of handmatig `\mathrm` als de groep
was het daar al over eens. NMR- en HRMS-fragmenten in experimentele secties zijn dat wel
vaak platte tekst met zorgvuldige spatiëring. Bedenk geen fragiele macrotaal
mid-paper, tenzij het lab er al een deelt.

Rapporteer significante cijfers zoals de notebook dat doet. LaTeX print graag
valse precisie als u het typt.

## Regelingen versus cijfers

Veel scheikundetijdschriften onderscheiden schema’s (reacties) van cijfers (plots,
ORTEP, spectra). Gebruik de omgevingen die de journal-klasse verzendt (`scheme`,
`figuur`) zodat de nummering overeenkomt met de productie. Kruisverwijzing met `\ref` en stabiel
labels (`sch:reductie`, `fig:ortep-1`).

## Veiligheid van de diepgang

Niet-gepubliceerde routes en industriële partners maken van cloud-only editors een
beleidsvraag, niet alleen een gemaksvraag. Behouden van `.tex` en cijfers
omdat gewone bestanden op schijf met Git op een nuttige manier saai zijn.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) is een lokaal
onderzoekseditor: gebundelde compilers, projectbrede ref- en cite-controles, offline
spelling en grammatica alleen op proza (dus `\ce` en cite-sleutels worden niet gemarkeerd als
"typefouten"), echte Git-controlepunten, optionele AI die alleen bewerkt via goedkeuring
verschillen. Geen rekening. Voor het concept is geen externe editor nodig.
Netwerk is voor pakketten, opzoeken van citaten of AI als u deze inschakelt.

## Citeer de juiste primaire literatuur

Chemiebibliografieën leunen zwaar op tijdschriften en patenten. Exporteren uit Zotero
of EndNote in een `.bib` met stabiele sleutels, en valideer vervolgens de ontbrekende velden eerder
inzending: [BibTeX validator](/tools/bibtex-validator/). Lege bibliografieën
zijn bijna altijd een pad- of backend-fout, waarbij geen citaten ontbreken.

Tijdschriftstijlen verschillen (ACS, RSC, Springer). Gebruik de bibliografiestijl the
sjabloon wordt meegeleverd. Plak numeriek en auteur-jaar niet in één
inleiding.

## Samenwerking

Eigen secties per persoon wanneer je kunt. Eén persoon is eigenaar van de `.bib`. Mee eens
mhchem-versie en structuur-exportformaat vooraf. Wanneer verschillende experimentele
secties groeien parallel, compileer elke week de volledige PDF dus integratie
verrassingen komen vroeg opdagen.

## Controlelijst vóór indiening

Een laatste pas waard:

- mhchem-versie vastgezet; formules compileren zonder waarschuwingen dat je bent geweest
  negeren.
- Structuren zijn waar mogelijk vector; samengestelde ID's komen overeen in tekst, schema's,
  en SI.
- Tabellen gebruiken een stijl met drie regels; eenheden consistent; rendementen gedefinieerd in het onderschrift
  of notities.
- Schema-/figuurnummering komt overeen met de tijdschriftklasse.
- `.bib` gevalideerd; stijl komt overeen met de sjabloon.
- Gevoelige routes blijven in een lokale map met toegangscontrole die overeenkomt met het lab
  beleid.

## SI- en dagboekchecklists

Veel scheikundige tijdschriften publiceren checklists voor auteurs (grafische resolutie, TOC
grafische grootte, samengestelde karakterisering). Blader die PDF door voordat u tekent
schema's. Een verkeerde TOC grafische beeldverhouding is een domme reden voor een beheerder
afwijzing.

## Ondersteunende informatie

SI heeft vaak zijn eigen sjabloon- of kopregels. Houd SI-bronnen hetzelfde
repo als het hoofdpapier met duidelijke bestandsnamen. Wanneer het journaal vol moet zijn
karakterisering, controleer of elk samengesteld getal in de hoofdtekst daadwerkelijk is
verschijnt in de SI.

De opmaak van de scheikunde is lastig omdat de objecten compact zijn. Ontvang de reacties
en tabellen rechts en het experimentele gedeelte leest als zorgvuldig werk, niet als een
plakken vanuit een notitieboekje-PDF.