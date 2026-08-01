---

title: "Technische studenten: IEEE- en ACM-sjablonen zonder een weekend vol pijn"
description: "Begin met het echte klassenbestand, overleef floats en vergelijkingen met twee kolommen, zorg dat de referenties goed zijn en maak een versie van het papier voordat het klaar is voor de camera."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

IEEE- en ACM-sjablonen zijn geen optionele decoratie. Zij zijn de onderwerping
formaat. Beginnen met een willekeurige zip die iemand drie jaar geleden opnieuw heeft geüpload, is hoe
je brengt de nacht vóór de deadline door met het hernoemen van lettertypen en het achtervolgen
`ongedefinieerde controlereeks` in een klasse die u nooit wilde bewerken.

Dit is voor cursusprojecten, senior ontwerppapieren en eerste conferentie
inzendingen.

## Begin vanuit de officiële les

Download de les en het voorbeeld van de vereniging of de conferentiesite voor
*dit jaar*. Plaats de `.cls`, eventuele `.bst` en het voorbeeld `.tex` in uw project
wortel. Compileer één keer voordat je een enkele originele zin schrijft, zodat je de zin kent
omgeving werkt.

Oleafly's [sjabloongalerij](/templates/) en de gratis app-installatiepakketten die
volg gemeenschappelijke locaties (IEEE, ACM en vrienden) en compileer vervolgens met de gebundelde
engine en vang kapotte refs en citaten eerder op in de projecteditor
camera-klaar. Controleer nog steeds aan de hand van de call for papers van dat jaar: column
aantal, paginalimiet en wijziging van de bibliografiestijl.

Als de conferentie een aangepaste klasse levert, gebruik dan die van hen, en niet een generieke IEEEtran
uit het geheugen.

## Zweefregels met twee kolommen

In de tweekolomsmodus gebruiken brede figuren 'figure*' en verschijnen vaak alleen aan de
bovenaan een pagina. Plaats de vlotter in de buurt van de eerste referentie en stel de breedte in
Met opzet `\kolombreedte` of `\tekstbreedte`. Naast elkaar geplaatste subfiguren moeten voorzichtig zijn
breedtes of ze lopen over in de marge.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Als een praalwagen drie pagina's verderop vlucht, verklein hem dan of splits panelen voordat je gaat vechten
`[H]` voor een uur: [zwevende plaatsing](/learn/figure-wrong-position/).

## Vergelijkingen in smalle kolommen

Lange afleidingen eindigen in `\kolombreedte`. Gebruik `multiline` of `split`, of verplaats
de afleiding naar een bijlage. Verklein het lettertype van de vergelijking niet tot aan de lijn
is onleesbaar; recensenten merken het op. Nummer alleen vergelijkingen die u daadwerkelijk aanhaalt.

Algoritmen horen thuis in 'algoritme'/'algoritmische' omgevingen die zijn afgestemd op de
kolom, geen screenshots van een IDE.

## Referenties

IEEE-numerieke stijlen en ACM-stijlen zijn het niet eens over de details. Gebruik de bibliografie
stijl waarmee de sjabloon wordt meegeleverd. Bedenk geen hybride van auteur-jaar en
beugelnummers.

Valideer de `.bib` op ontbrekende velden voordat de camera gereed is:
[BibTeX-validator](/tools/bibtex-validator/). De export van geleerden is rommelig; schoon
sleutels (`auteur:jaar:trefwoord`) en herstel titels die in HOOFDLETTERS binnenkwamen.

Citeer datasets en software wanneer de locatie dit verwacht. Een ontbrekende DOI is eenvoudiger
om het probleem nu op te lossen dan in het venster "update camera gereed" van de portal.

## Paginalimieten zonder misdaden

Paginalimieten zijn reëel. Marges onder de sjabloon niet verpletteren, instellen
`\scriptsize` voor de hele resultatensectie, of verberg tekst binnen grote cijfers.
Inhoud knippen. Verplaats proefdrukken en extra plots naar een supplement of uitgebreide arXiv
versie als de oproep dit toestaat. Houd de inzending leesbaar. Langere checklist:
[paginalimieten zonder misdaden](/learn/page-limits-without-crimes/).

## Versiebeheer maakt nu deel uit van het labrapport

Senior design- en conferentiepapers profiteren beide van commitments na elk
succesvol compileren. Een onderzoeksredacteur zoals
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) houdt echte Git
naast de PDF, SyncTeX en live diagnostiek, zodat u geen zip verzendt
bestanden met de naam `submission_really_final.zip`. Privé-afstandsbedieningen blijven ongepubliceerd
werk af van openbare GitHub totdat het beleid dit toestaat.

Tag of bericht de exacte commit die u naar de portal heeft geüpload.

## Teamworkflows

Eigen secties per student. Eén persoon is eigenaar van de `.bib` en het klassenbestand. Samenvoegen
via pull-requests als de groep groot genoeg is. Compileer de volledige PDF op een
zodat de integratie niet alleen de avond ervoor plaatsvindt.

Als een teamgenoot alleen Word bewerkt, exporteer dan voor hem en behoud TeX als bron:
[coauteurs die alleen Word spreken](/learn/collaborator-uses-word/).

## Camera-ready-week

Instructies voor cameragebruik verschillen vaak van het beoordelingsformaat, dus download opnieuw
zij. Werk de auteursblokkering, financiering en IEEE/ACM-auteursrechtformulieren bij als
vereist. Opnieuw compileren met de laatste klasse-opties (vaak verschillend van
beoordeling). Controleer elk cijfer op dpi en lettertypen; lettertypen insluiten in de PDF als de
portaal vereist dit. Upload vervolgens de PDF en elke bron-zip die de portal vereist
archiveer beide.

## Auteursblok en voorkeuren

IEEE/ACM-auteurblokken zijn kieskeurig: gelijke bijdragecijfers, meerdere
aangesloten, dankzij financieringsinstanties. Kopieer de auteur van het voorbeeldbestand
markeer en vervang tekst zorgvuldig. Het bedenken van je eigen `\thanks`-stapel is een
veelvoorkomende bron van niet-volledige vakken en ontbrekende komma's in de PDF.

## Blinde beoordeling

Als de oproep dubbelblind is, verwijder dan de namen, de financiering die het laboratorium identificeert, en
citeert zichzelf met de tekst 'in ons vorige werk'. Schakel ze opnieuw in zodat ze klaar zijn voor de camera.
Houd een 'blinde' klassenoptie of een klein schakelbestand aan, zodat u niet met de hand hoeft te bewerken
identiteit op zes plaatsen.

## Kortom

Begin met de officiële klasse, respecteer de lay-out met twee kolommen en match de
bibliografiestijl waarmee de sjabloon wordt geleverd. Versie alles. De
technische inhoud is al moeilijk genoeg zonder een nagemaakt sjabloon uit 2019.