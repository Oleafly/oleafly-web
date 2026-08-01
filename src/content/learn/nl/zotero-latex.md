---

title: "Zotero naar een .bib-bestand"
description: "Betere BibTeX, automatische export, sleutels die machines overleven."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero naar een .bib-bestand

Zotero is erg goed in het verzamelen van referenties: het haalt metadata en pdf's uit een browserknop en houdt alles doorzoekbaar. LaTeX daarentegen leest alleen `.bib`-bestanden. De brug tussen de twee is de Better BibTeX-plug-in. Het verandert een Zotero-verzameling in een `.bib`-bestand dat actueel blijft en, net zo belangrijk, de citatiesleutels stabiel houdt, zodat uw `\cite`-opdrachten nooit kapot gaan.

## Waarom de ingebouwde export niet genoeg is

Zotero kan BibTeX zelfstandig exporteren, maar het genereert elke keer de citatiesleutels opnieuw, en een sleutel die verandert van `knuth_literate_1984` in `knuth_literate_1984-1` breekt in stilte elke `\cite` die de oude naam gebruikte. De export is ook een eenmalige momentopname, dus het bestand veroudert zodra u een artikel toevoegt. Beter BibTeX lost beide problemen op: sleutels worden gegenereerd op basis van een formule die u kiest, kunnen worden vastgezet zodat ze nooit veranderen, en de export kan zichzelf automatisch vernieuwen.

## De pijplijn opzetten

Installeer eerst Better BibTeX vanaf de website via Zotero's dialoogvenster Tools, Plug-ins en start vervolgens Zotero opnieuw. Ten tweede, beslis over een citatiesleutelformule in de Better BibTeX-voorkeuren. Een patroon dat sleutels als `knuth1984` of `knuth1984literate` produceert, is gemakkelijk te typen en gemakkelijk te herkennen in de broncode. Ten derde klikt u met de rechtermuisknop op de verzameling die bij uw artikel hoort, kiest u Collectie exporteren, selecteert u het Better BibTeX-formaat en vinkt u "Update houden" aan voordat u het bestand in uw projectmap opslaat, bijvoorbeeld `refs.bib`. Vanaf dat moment wordt het bestand binnen enkele seconden herschreven door een item toe te voegen of te bewerken in Zotero.

Wijs ten slotte uw document naar het geëxporteerde bestand met `\bibliography{refs}` of `\addbibresource{refs.bib}`, precies zoals bij een handgeschreven database. De bedrading wordt behandeld in [Van .bib-sleutel tot citaat in de tekst](/learn/add-citations/).

## Arbeidsverdeling

Behandel Zotero als de hoofddatabase en het `.bib`-bestand als een gegenereerd artefact dat in de repository van het artikel leeft. Als u de `.bib` naast de `.tex` vastlegt, betekent dit dat een co-auteur, of u op een andere machine, het artikel kunt compileren zonder dat Zotero überhaupt is geïnstalleerd. Bewerk het geëxporteerde bestand niet met de hand. Bij de volgende automatische export worden uw wijzigingen overschreven. Corrigeer in plaats daarvan metadata in Zotero, en de correctie stroomt door. Als een invoer er na het exporteren nog steeds verkeerd uitziet, voer deze dan door de [BibTeX validator](/tools/bibtex-validator/) om te zien over welk veld de stijl niet tevreden is.

Eén gewoonte voorkomt de meeste toekomstige pijn: zodra een sleutel in een manuscript verschijnt, pint u deze in Better BibTeX (klik met de rechtermuisknop op het item, Better BibTeX, Pin BibTeX key). Vastgezette sleutels overleven formulewijzigingen, machineverplaatsingen en bibliotheekreorganisaties, en dat is precies wat een citatiesleutel moet doen.