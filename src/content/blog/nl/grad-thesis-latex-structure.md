---

title: "Structureer een afstudeerscriptie in LaTeX voordat de paniek uitbreekt"
description: "Voorwerk, hoofdstuk bevat, acroniemen, universiteitsklassebestanden, compileersnelheid en Git-geschiedenis voor master- en PhD-studenten."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

Het proefschrift is een lang artikel waar bureaucratie aan vast zit. LaTeX handelt de lange termijn af
papier goed. De bureaucratie is meestal een dossier van de universiteit, geschreven in 2009
en voor het laatst getest op een andere TeX Live.

Begin vroeg met structuur, zelfs als de hoofdstukken nog leeg zijn. Inhoud verplaatsen tussen
bestanden in de laatste maand is hoe kruisverwijzingen en figuurpaden breken.

## Accepteer het klassenbestand, scherm de rest af

Plaats de `.cls` van de universiteit (en de vereiste `.bst`/logo-bestanden) in het project.
Herschrijf de klasse niet. Plaats uw macro's, pakketten en hoofdstukinhoud erin
bestanden die u beheert:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Als de klas kapot gaat op een moderne motor, triage dan met
[universitaire bestanden die niet kunnen worden gecompileerd](/learn/fix-broken-template/).
Document welke engine het scriptiebureau accepteert (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) voordat u investeert in `fontspec`.

## Voorzaak die commissies verwachten

Romeinse paginanummers voor samenvatting, opdracht, dankbetuiging, inhoudsopgave, lijsten van
figuren/tabellen; Arabisch voor de belangrijkste hoofdstukken. Boek-/rapportlessen blootleggen
`\frontmatter` / `\hoofdmaterie`; op artikelen gebaseerde sjablonen hebben een handleiding nodig
`\paginanummering`. Gids:
[Romeins dan Arabisch](/learn/front-matter-page-numbers/).

De inhoud van de titelpagina moet vaak overeenkomen met een Word-exemplaar van de graduate school.
Kopieer de bewoording exact. Creativiteit zorgt er hier voor dat de PDF wordt afgewezen door a
controlelijst.

## Hoofdstukken als bestanden

Eén wortel, veel omvat:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Bezit zelf hoofdstukken, zelfs als coauteurs helpen bij papers die het proefschrift voeden.
Bewaar cijfers onder `figures/chapter3/` zodat paden stabiel blijven als u de volgorde wijzigt.
Gebruik `\includeonly{chapters/methods}` tijdens het opstellen, zodat de volledige scriptie wordt samengesteld
zijn niet de kosten van elke bewerking van de vergelijking:
[hoofdstukbestanden splitsen](/learn/split-chapter-files/).

Labels moeten uniek zijn binnen het hele project (`eq:ch3-main`, niet `eq:main` in
elk bestand). Projectbrede structuurweergaven en live hulp bij het controleren van referenties op a
Boom van 200 pagina's.

## Acroniemen en symbolen

Woordenlijstenpakketten zijn krachtig en kieskeurig. Voor veel scripties is een handonderhouden
lijst met symbolen in het voorwerk is voldoende. Als u automatisch uitbreiden nodig heeft
acroniemen, budget een dag om `woordenlijsten-extra` te leren vóór de week van
indiening, niet tijdens de indiening.

Definieer wiskundige macro's in `macros.tex` en behandel dat bestand als gedeelde wet. Notatie
dat zweeft tussen hoofdstuk 2 en hoofdstuk 5 is een geschenk voor een pedante examinator.

## Bibliografie

Eén `.bib` voor het hele proefschrift, of een klein setje zorgvuldig samengevoegd. Stabiele sleutels.
Valideren vóór soft-bound:
[BibTeX-validator](/tools/bibtex-validator/). Passend bij de stijl van de afdeling
wil (numerieke, auteur-jaar, voetnoot-zware geesteswetenschappenstijlen). Niet mengen
biblatex en klassieke BibTeX stapelen in één preambule.

## Snelheid

Het compileren van volledige proefschriften wordt traag. Conceptmodus voor figuren, `\includeonly`, en
TikZ externaliseert koopuren terug. Opmerkingen:
[kortere wachttijd voor de PDF](/learn/speed-up-compilation/).

Houd wekelijks een 'volledig compileer'-ritueel aan, zodat je nog steeds fouten tussen de hoofdstukken tegenkomt
vroeg.

## Back-up is niet hetzelfde als geschiedenis

Een Dropbox-kopie is een back-up. Git is een verhaal over hoe het argument veranderde.
Commiteer wanneer een hoofdstuk wordt samengesteld. Push naar een privé GitHub- of GitLab-afstandsbediening.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) initialiseert een
echte repo per project, controlepunten na succesvolle compilaties en inactieve bewerkingen,
en herstelt met één klik, naast projectbrede structuurweergaven en SyncTeX
die nog steeds werken in hoofdstukbestanden. Dat maakt het moeilijker om de gewoonte over te slaan.
Je kunt dezelfde discipline krijgen met elke editor en zorgvuldige Git; het proefschrift
zou niet afhankelijk moeten zijn van het onthouden van `git init` in maand achttien.

## Feedbacklussen van de commissie

Exporteer PDF voor lezers die de source niet willen openen. Volg opmerkingen in problemen of
een gedeeld document, maar pas bewerkingen toe in TeX. Wanneer een commissielid een
gescande opmaak-PDF, geef het bestand een naam met datum en versie, zodat u weet welke
broncommit waarnaar het verwijst.

## Zachte en harde checklist

Voordat u afdrukt of stort:

- Klassenbestand en engine komen overeen met de regels van het scriptiebureau.
- Paginanummering voorwerk correct; handtekeningenpagina aanwezig indien nodig.
- Alle `\ref`/`\cite` worden opgelost; geen `[?]`.
- Eventueel vermelde figuren en tabellen; onderschriften consistent.
- Marges en lettergrootte passeren de checklist PDF (druk een testpagina af).
- Bron + PDF + commit-hash gearchiveerd na storting.

## Figuren, tabellen en "lijst met" pagina's

Veel scriptiebureaus hebben een lijst met figuren en tabellen nodig. Onderschriften moeten zijn
consistent en niet de hele methodesectie in een bijschrift van 20 regels dumpen. Gebruik
korte titels voor de lijsten en langere verklarende bijschriften in de hoofdtekst als de
klasse ondersteunt optionele korte bijschriften.

## Plagiaat en eerdere publicaties

Als hoofdstukken gepubliceerde artikelen remixen, volg dan de universitaire regels inzake inclusie
en toestemming van de coauteur. Bewaar de geaccepteerde pdf van elk eerder artikel en de scriptie
hoofdstuk in versiebeheer met een opmerking over wat er is veranderd (notatie, uitgebreid
experimenten, uniforme introductie).

## Begin deze maand, niet de maand waarin je schrijft

Maak het skelet wanneer u de omtrek voorstelt. Lege hoofdstukken die compileren
tellen als vooruitgang. De meeste paniek in een laat stadium bestaat uit structurele schulden en een hardnekkige
class-bestand, geen gat in de wetenschap. Betaal die schuld vroegtijdig.