---

title: "Geesteswetenschappen en lange vorm: biblatex, voetnoten en hoofdstukboeken"
description: "Voetnoten, flexibele citaten, archiefbronnen, structuur in meerdere hoofdstukken en meerjarig eigendom voor geschiedenis, literatuur, filosofie en klassiekers."
date: 2026-07-05
tags: [humanities, biblatex, thesis]
---

Geesteswetenschappelijke manuscripten geven net zoveel om de vorm van citaten als om argumenten. Een numeriek
De IEEE-stijl is hier verkeerd; voetnoten, auteurstitel en archiefbronnen zijn de
norm. LaTeX is de moeite waard om te leren als je eenmaal meer hebt dan een seminarpaper en een
handvol boeken in de bibliografie.

Deze handleiding is bedoeld voor studenten die scriptiehoofdstukken op elkaar stapelen of een lang artikel opstellen
met echte voetnoten. Als u slechts drie MLA-inzendingen nodig heeft, kunt u eerder stoppen.

## Geef de voorkeur aan biblatex voor flexibiliteit

`biblatex` verwerkt voetnoten, uitgebreide stijlen en steno beter dan klassiek
BibTeX voor de meeste geesteswetenschappelijke workflows:

```latex
\usepackage[backend=biber,style=verbose-ibid]{biblatex}
\addbibresource{sources.bib}
```

Veel voorkomende alternatieven zijn onder meer 'auteurtitel', 'verbose', tijdschriftspecifieke stijlen,
of wat uw afdeling ook maar oplegt. Zoek eerst het handboek en kies dan de
dichtstbijzijnde biblatex-stijl. Achtergrond:
[BibTeX of biblatex](/learn/bibtex-vs-biblatex/).

Voer **biber** uit (of de backend die uw stijl nodig heeft), niet alleen pdflatex. Leeg
bibliografieën zijn bijna altijd een backend- of padfout. Valideer de invoer
vóór indiening: [BibTeX validator](/tools/bibtex-validator/).

## Archief- en webbronnen

Brieven, manuscripten en websites hebben velden nodig waarin '@article'-vermeldingen worden vastgelegd
maak je niet druk om:

- `@unpublished` of biblatex `@online` voor webbronnen met `urldate`
- archieflocatie, collectie, folio voor manuscripten
- stabiele sleutels die je over twee jaar nog steeds begrijpt

Onvolledige vermeldingen mislukken stilletjes totdat de bibliografie er schaars uitziet. Liever één
`.bib` (of een kleine set per project) over kopiëren en plakken van voetnoottekst die blijft hangen
niet synchroon met de geciteerde werken.

## Voetnoten versus eindnoten

Veel geesteswetenschappelijke stijlen willen voetnoten. `biblatex` uitgebreide stijlen en
`\footcite` / automatische voetnootcitaten bestrijken veel terrein. Als de
afdeling wil eindnoten, configureer dat vroeg. Het omzetten van drie hoofdstukken van
voetnoot citaten De week van indiening is een ellendige week.

Houd inhoudelijke opmerkingen kort. Als een voetnoot een volledige paragraaf is, vraag dan of
het hoort thuis in de hoofdtekst. Lezers skimmen.

## Hoofdstukken en kritische edities

Boeklange projecten willen een 'boek', 'memoires' of een universitaire scriptieklas
`\include` per hoofdstuk:

```latex
\include{chapters/ch1-intro}
\include{chapters/ch2-archive}
```

Kruisverwijzingen naar andere hoofdstukken moeten `\ref` / `\cref` gebruiken, niet hardgecodeerd
"zie hoofdstuk 4" snaren die rotten als je ze opnieuw ordent. Structureer weergaven van die lijst
koppen in bestanden helpen bij een concept van 200 pagina's. Dat geldt ook voor het compileren met
`\includeonly` terwijl u één hoofdstuk herziet.

Kritische edities en parallelle tekst hebben gespecialiseerde pakketten. Verzin geen a
lay-out met onbewerkte minipagina's totdat je hebt gecontroleerd of een klasse wordt onderhouden
bestaat al voor uw taal.

## Offerte en taal

Gebruik de juiste aanhalingstekens voor de taal van het artikel (`csquotes` helpt bij
geneste aanhalingstekens en taalbewuste markeringen). Blokkeer citaten die langer zijn dan een paar regels
moet een offerteomgeving gebruiken, en geen handmatige inspringing die inbreekt
lay-outs met twee kolommen of wanneer de marges veranderen.

Voor meertalige projecten, XeLaTeX of LuaLaTeX met `fontspec` en een taal
pakket is minder pijnlijk dan het stapelen van `inputenc`-hacks uit de jaren negentig. Kies lettertypen die
Behandel de scripts die je nodig hebt voordat je hoofdstuk drie schrijft in een lettertype dat dat niet kan
geef ze weer.

## Afbeeldingen, kaarten en opmerkingen over redelijk gebruik

Kaarten en manuscriptfoto's zijn meestal externe PDF/PNG-bestanden, niet TikZ.
Onderschrift met bron- en toestemmingsstatus. Houd masters met hoge resolutie buiten
de git-geschiedenis als ze enorm zijn; bevestig de gecomprimeerde figuren op het papier
daadwerkelijk gebruikt, en plaats een notitie in de README over waar meesters wonen.

## Lokaal eigendom van jarenlange bankbiljetten

Een proefschrift is een meerjarige dossierboom. Alleen in een browserproject bewaren
gekoppeld aan één account is een risico wanneer studenten van instelling veranderen of de toegang verliezen
na afstuderen.

Gewone mappen plus Git, lokaal gecompileerd, verouderen beter.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) is daarop gericht
soort lang document. U krijgt structuuroverzichten over de hoofdstukken heen, voor het hele project
refs en cites, offline spelling en grammatica op proza (het slaat cite-sleutels over), en
echte Git-controlepunten zonder account. U kunt nog steeds dezelfde bestanden openen in
elke andere redacteur. Eigendom is het punt.

## Workflow die een commissie overleeft

Bevries de citatiestijl ten opzichte van het handboek in het eerste jaar en behoud er één
bibliografiedatabase met stabiele sleutels. Zet hoofdstukbestanden onder versiebeheer
met een eigen afstandsbediening. Voorwerk (samenvatting, dankbetuiging, inhoudsopgave) zou dat moeten zijn
volg de universitaire lesregels voor Romeinse/Arabische pagina's. Stel de volledige PDF samen
maandelijks, zelfs als u opstelt met `\includeonly`, dus verwijzingen tussen hoofdstukken niet
verras je op het einde.

## Voorinzending

- Biber/bibtex loopt schoon; geen `[?]` citeert.
- Voetnootstijl past bij de afdeling.
- Hoofdstukkruisverwijzingen bijgewerkt na herschikking.
- Lettertypen insluiten; marges komen overeen met de checklist van het scriptiebureau.
- Bron en pdf beide gearchiveerd, niet alleen het ontvangstbewijs van het uploadportaal.

## Indexering en back-materie

Boekklasseprojecten hebben soms een index nodig (`imakeidx` en vrienden). Begroting
tijd voor een echte indexeringspas; automatisch markeren van elk woord met hoofdletter
vuilnis. Bijlagen voor transcripties moeten een duidelijke nummering gebruiken dan de hoofdtekst
hoofdstukken kunnen `\ref`.

## Commissieconcepten vs. storting PDF

Genummerde regelconcepten of brede marges kunnen de opmaak helpen, maar de gedeponeerde PDF moet dat wel doen
overeenkomen met het proefschriftkantoorexemplaar. Behoud een klasseoptie of een aparte "concept"-vlag
u hoeft de marges dus niet met de hand te bewerken op de ochtend van de storting.

Zorg ervoor dat u de citatie-engine vroeg gebruikt. Het argument verdient meer aandacht
dan een bibliografiegevecht van vorige week.