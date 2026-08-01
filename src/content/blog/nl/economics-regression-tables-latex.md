---

title: "Economie en sociale wetenschappen: regressietabellen die tijdschriften accepteren"
description: "boekentabbladen, driedelige tabel, siunitx-sterren, aantekeningen onder schattingen, biblatex-gewoonten en versiebeheer van werkdocumenten voor economie, politiek en sociologie."
date: 2026-06-26
tags: [economics, social-science, tables]
---

Empirische sociale wetenschappen leven en sterven bij tabellen. Een verkeerd uitgelijnd decimaalteken of a
Een ster met een ontbrekende betekenis kan een cyclus van herzien en opnieuw indienen die niets bevatte, verbranden
te maken met uw identificatiestrategie. Tijdschriften geven bijna om leesbaarheid
net zo goed als coëfficiënten.

Wat volgt is voor studenten en RA's die exporteren vanuit Stata of R en vervolgens opschonen
LaTeX met de hand.

## booktabs is niet optioneel

Verticale regels en dubbele horizontale lijnen zien eruit als Word uit de jaren negentig. Gebruik de drie
horizontale regels uit `booktabs`:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Zie [tabellen met drie regels](/learn/booktabs-beautiful/). Exporteren van R
(`modelsummary`, `estout`-stijl tools, oudere `stargazer`) of Stata naar LaTeX
fragmenten, maak dan zelf de koprij schoon. Automatisch gegenereerde headers zijn dat wel
meestal te breed of te cryptisch voor de uiteindelijke PDF.

## Notities onder de tabel, geen willekeurige voetnoten

Met 'threeparttable' blijven het bijschrift, de tabel en de noten even breed:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Zet de steekproefomvang, vaste effecten, geclusterde SE-notities en de betekenisster
legende hier. Hang geen voetnoot aan een enkele cel die slechts enkele lezers bevat
zal merken. Paneellabels (A/B) horen thuis in het onderschrift of in middenregels met transparant
tekst, niet in een legenda in figuurstijl die nooit in de PDF verschijnt.

## Numerieke kolommen en betekenissterren

`siunitx`-kolomtypen (`S`) worden uitgelijnd op de komma. Dat alleen al maakt een
resultatentabel ziet er opzettelijk uit. Sterren breken pure numerieke kolommen, dus jij
hebben meestal een aangepast formaat of een tekstachtige kolom nodig. Veel voorkomende patronen:

Rapporteer coëfficiënten en SE's in aparte rijen (standaard in econ), of verpak sterren
dus uitlijning werkt nog steeds (`0.012^{***}` met een speciaal kolomtype).

Wees consistent in alle tabellen: dezelfde sterdrempels, dezelfde SE-stijl, hetzelfde nummer
aantal decimalen voor dezelfde metriek. Recensenten vergelijken tabel 2 met tabel 3
doel.

Een visuele eerste versie is prima. De browser
[tabelgenerator](/tools/table-generator/) kan structuur schetsen; de finale
tabel moet nog steeds door `booktabs` en uw SE-notities gaan.

## Van regressiesoftware tot cameraklaar

Een typische lus ziet er zo uit. Bevries het schattingsscript en het zaad. Exporteer een
LaTeX-fragment of CSV van schattingen. Laat het in een tafelschaal met stal vallen
labels (`tab:main`, `tab:robust`). Schrijf het onderschrift zodat een skimmer de naam kent
afhankelijke variabele, steekproef en schatter zonder de noten twee keer te lezen.
Compileer en repareer overvolle dozen door kolommen te knippen; roteer alleen als laatste
toevlucht.

Als een tabel langer is dan een pagina, schakel dan over naar 'longtable' (of gesplitste panelen)
vóór de deadlineweek, niet nadat het tijdschrift klaagt over 7pt-lettertypen.

## Citaties: auteurjaar is het dialect

De meeste econ- en poli-sci-locaties verwachten een auteursjaar. `biblatex` met
`stijl=auteurjaar` (of de stijl van het tijdschrift) is op de lange termijn gemakkelijker dan vechten
`.bst`-bestanden. Als het lab nog steeds `natbib` gebruikt, is dat prima; gewoon niet mengen
beide stapels in één preambule. Overzicht:
[BibTeX of biblatex](/learn/bibtex-vs-biblatex/).

Sleutels moeten stabiel zijn (`auteur:jaar:trefwoord`). Opnieuw exporteren vanuit Zotero onder
nieuwe sleutels midden in het project is hoe `\cite` de week van indiening doorbreekt. Valideer
de `.bib` voor ontbrekende jaartallen en dagboeken:
[BibTeX-validator](/tools/bibtex-validator/).

## Werkdocumenten en SSRN

De versies van de werkdocumenten veranderen maandelijks. Bewaar de titelpaginadatum in een macro:

```latex
\newcommand{\paperdate}{June 2026}
```

Maak er een probleem van als u de PDF opnieuw exporteert. De lokale Git-geschiedenis is eerlijker dan
`final_final_v7.pdf` op een gedeelde Drive. Commit wanneer de hoofdtafel gedekt is
compileert; tag of bericht de inzendingsversie expliciet.

Een onderzoekseditor die het project behandelt als een echte Git-repository (checkpoints
na compileren, herstellen, optionele privé GitHub) komt overeen met hoe empirisch werk
al versiecode. Het papier en de schattingsscripts mogen niet leven
onder verschillende back-upgewoonten.

## Identificatie en tafelethiek (korte versie)

LaTeX kan een zwak ontwerp niet repareren, maar kan een sterk ontwerp wel leesbaar maken.
Vermeld de schatter en het monster in het onderschrift. Verberg het feit niet
kolom (3) zet de helft van het monster neer in een voetnoot die niemand leest. Als je het laat zien
Robuustheidstabellen moeten dezelfde afhankelijke-variabele-volgorde aanhouden als de hoofdtabel
lezers kunnen scannen.

## Controlelijst vóór indiening

Dingen die mensen laat bijten:

- Tabellen met drie regels; geen verticale regels.
- Decimale uitlijning; consistente sterren en SE-notities.
- Bijschrift vermeldt uitkomst, steekproef, schatter.
- Etiketten stabiel; tekst citeert `\ref{tab:...}`.
- De stijl van de bibliografie past bij de locatie; `.bib` gevalideerd.
- De datum van het werkdocument en de Git-commit komen overeen met wat je hebt geüpload.

## Replicatiepakketten

Steeds meer tijdschriften willen code en data. Bewaar scripts voor het exporteren van tabellen naast het papier
repo (of gekoppeld aan een commit-hash). Wanneer een coëfficiënt verandert omdat de
schoonmaakscript gewijzigd, genereer het LaTeX-fragment opnieuw en voer beide opnieuw uit. EEN
tafel die niet kan worden gereproduceerd, is een risico, zelfs als deze er schoon uitziet.

## Beamer voor seminars

Hergebruik indien mogelijk dezelfde 'booktabs'-fragmenten in dia's, of exporteer PDF
oogsten van de tafels. Zo kunt u getallen met de hand ombouwen tot een diadeck
seminardia's zijn het niet eens met het artikel.

Zorg dat de tabellen goed zijn en de identificatiestrategie krijgt een eerlijk gehoor. Krijg
ze verkeerd en je besteedt een ronde aan ruzie over de opmaak.