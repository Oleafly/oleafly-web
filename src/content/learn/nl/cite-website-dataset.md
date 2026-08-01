---

title: "Webpagina's, video's, datasets"
description: "diverse/online vermeldingen en toegangsdata voor kwetsbare URL's."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Webpagina's, video's, datasets

BibTeX is in de jaren tachtig ontworpen voor tijdschriften, boeken en conferentieverslagen en heeft dus geen eigen idee van een webpagina, een YouTube-video of een dataset op Zenodo. Je moet deze dingen nog steeds voortdurend citeren, en de standaard oplossing is het invoertype `@misc`, dat vrijwel elke combinatie van velden accepteert en de stijl deze op een verstandige manier laat afdrukken.

## Het @misc-patroon

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Drie details zijn hier van belang. De dubbele accolades rond `{{Oleafly Contributors}}` vertellen BibTeX om de hele string als één letterlijke naam te behandelen; zonder hen zou het "Contributors" als achternaam analyseren en de rest afkorten tot "O. Contributors". Het veld 'howpublished' is de gebruikelijke plaats voor een URL in de klassieke BibTeX, en als het adres in '\url{...}' wordt geplaatst, wordt het in een monospaced lettertype gezet en kan het netjes over de regels worden verdeeld (laad hiervoor het pakket 'url' of 'hyperref'). Het veld 'opmerking' bevat de toegangsdatum, wat van belang is omdat webinhoud verandert en verdwijnt. Die datum vertelt lezers welke versie van de pagina je daadwerkelijk hebt gezien.

## Het biblatex-alternatief: @online

Als uw document biblatex gebruikt, is er een speciaal type. Een `@online`-invoer gebruikt de juiste `url`- en `urldate`-velden, dus dezelfde bron wordt `url = {https://oleafly.com}` en `urldate = {2026-07-24}`, en de stijl noteert de toegangsdatum voor u. Geef de voorkeur aan `@online` wanneer de bibliografiestijl dit ondersteunt, en val terug op `@misc` wanneer u compatibel moet blijven met een klassiek `.bst`-bestand. De verschillen tussen de twee systemen worden uiteengezet in [Classic BibTeX of biblatex](/learn/bibtex-vs-biblatex/).

## Datasets en software

Datasets en codereleases verdienen meer dan een kale URL als er een DOI bestaat. Repository's zoals Zenodo en Figshare mint DOI's, zodat de bronvermelding elke hostingconfiguratie kan overleven. Plaats de DOI in een `doi`-veld, of in `howpublished` als `\url{https://doi.org/10.5281/...}` voor klassieke stijlen. Voeg een 'versie'-opmerking toe wanneer het artefact wordt bijgewerkt, omdat 'de dataset' die een lezer over vijf jaar downloadt, mogelijk niet degene is die u hebt geanalyseerd. Veel projecten publiceren ook een voorkeurscitatie, vaak in een `CITATION.cff`-bestand in de repository. Dat gebruiken is zowel beleefd als nauwkeuriger dan zelf de velden raden.

## Video's en andere vreemde bronnen

Voor een video zet je het kanaal of de maker in 'auteur', de videotitel in 'titel', het platform en de URL in 'hoe gepubliceerd', en het uploadjaar in 'jaar', met je toegangsdatum in 'opmerking'. De algemene regel voor alles wat ongewoon is, is hetzelfde: leg vast wie het heeft gemaakt, hoe het heet, waar een lezer het kan vinden en wanneer je keek, en `@misc` zal dat allemaal veilig door elke stijl heen dragen.