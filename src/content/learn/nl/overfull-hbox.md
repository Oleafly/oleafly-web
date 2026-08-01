---

title: "Overvolle horizontale doos"
description: "Lijnen die in de marge steken en wanneer u erop moet letten."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Overvolle horizontale doos

## Het symptoom

Het log rapporteert zoiets als 'Overvolle \hbox (14.2pt te breed) in paragraaf op regels 87--92', en in de PDF steekt één regel van die paragraaf uit in de rechtermarge. Het document wordt nog steeds samengesteld, omdat dit eerder een waarschuwing dan een fout is, maar de uitstekende lijn is zichtbaar in druk en de recensenten merken het op. In conceptmodus (`\documentclass[draft]{...}`) markeert LaTeX elke overtreder met een zwarte rechthoek, waardoor ze gemakkelijk te herkennen zijn.

## Waarom het gebeurt

TeX verdeelt alinea's in regels door elk mogelijk breekpunt te wegen en de opstelling met de minste totale "slechtheid" te kiezen, waarbij slechtheid meet hoeveel de spaties op een regel moesten uitrekken of krimpen. Soms bestaat er geen acceptabele indeling: een lange URL bevat helemaal geen breekpunten, inline wiskunde wordt als bijna onbreekbaar beschouwd, of een lang woord bevat geen woordafbreking. In plaats van ruimtes buiten de tolerantie uit te rekken en een zichtbaar gapende lijn te produceren, laat TeX de lijn lang doorlopen en vertelt u erover. Het overvolle vakje is dat TeX weigert de paragraaf op een andere manier lelijk te maken.

## Oplossingen, van beste tot botste

De beste oplossing is redactioneel. Door de zin te herformuleren, het lange woord weg te halen van het regeleinde, of een zin in tweeën te splitsen, wordt het probleem meestal zonder enige code opgelost en wordt het proza ​​vaak toch verbeterd.

Voor URL's plaatst u het adres in `\url{...}` uit het `url`- of `hyperref`-pakket, zodat het kan eindigen bij schuine strepen en punten, en laadt u het `xurl`-pakket wanneer u pauzes nodig heeft bij bijna elk teken. Voor een brede inline-formule geeft u deze weer, of gebruikt u een breekbare omgeving zoals 'multline' van 'amsmath' wanneer de vergelijking zelf te lang is voor de regel.

Twee verbeteringen op preambuleniveau helpen wereldwijd. Door 'microtype' te laden, steken de tekens gedeeltelijk uit en worden de lettertypen iets groter, waardoor veel marginale gevallen worden opgelost zonder dat u het merkt. Door de documenttaal correct in te stellen via `babel` of `polyglossia` krijgt TeX de juiste afbreekpatronen, aangezien een woord dat het niet kan afbreken een woord is dat het niet kan afbreken.

## Wanneer moet je zorgen

Het getal in de waarschuwing is de overschrijding. Alles onder ongeveer 2pt is onzichtbaar voor lezers en kan veilig worden genegeerd in een concept. Tientallen punten zijn de moeite waard om te corrigeren voordat iemand anders de pdf ziet. De verstandige workflow is om tijdens het schrijven overvolle dozen te negeren, vervolgens het logboek één keer door te vegen voordat u het verzendt en het handjevol dat overblijft, de grootste eerst, op te lossen. Weersta '\sloppy' en andere mondiale tolerantie-hacks: ze ruilen een paar uitstekende regels in voor losse, ongelijke spaties over het hele document.