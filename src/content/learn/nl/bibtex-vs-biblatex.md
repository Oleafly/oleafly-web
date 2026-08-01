---

title: "Klassieke BibTeX of biblatex"
description: "Backends, stijlen en wat er van dag tot dag verandert."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# Klassieke BibTeX of biblatex

LaTeX heeft twee citatiesystemen die dezelfde `.bib`-bestanden lezen, maar in bijna al het andere verschillen. Klassieke BibTeX dateert uit de jaren 80: een klein extern programma formatteert uw referenties met behulp van stijlbestanden die zijn geschreven in een eigen stapelgebaseerde taal. biblatex is de moderne vervanging: het formatteren gebeurt in LaTeX zelf, waarbij een hulpprogramma genaamd `biber` het sorteren en de gegevensverwerking verzorgt. De namen lijken verwarrend op elkaar. Onthoud dat "BibTeX" zowel het oude programma is als, losjes, het oude systeem, terwijl "biblatex" een LaTeX-pakket is dat `biber` als backend gebruikt.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Leeftijd | Klassiek | Moderne |
| Stijlen | `.bst` | `.bbx`/`.cbx` |
| Unicode | Breekbaar | Sterk |
| Ondersteuning voor tijdschriften | Universeel | Groeien |

## Wat de verschillen in de praktijk betekenen

De stijlrij is het belangrijkst. BibTeX-stijlen zijn `.bst`-bestanden die bijna niemand kan lezen of wijzigen, dus neem wat het tijdschrift verzendt. biblatex-stijlen zijn gewone LaTeX, opgesplitst in bibliografie- (`.bbx`) en citatie- (`.cbx`) componenten, en kleine veranderingen zoals het verwijderen van URL's of het wijzigen van interpunctie zijn aanpassingen van één regel. De Unicode-rij is van belang als uw verwijzingen namen met accenten of niet-Latijnse schriften bevatten. Klassieke BibTeX verminkt ze, tenzij elk personage wordt geëscaped als `\'{e}` en vrienden, terwijl Biber native UTF-8 verwerkt. De laatste rij is de reden waarom klassieke BibTeX overleeft: de meeste tijdschriften en conferenties verspreiden nog steeds een `.bst`-bestand en verwachten de klassieke toolchain, en indieningssystemen weigeren vaak al het andere.

## Hoe een biblatex-document eruit ziet

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

Vergeleken met het klassieke patroon gaat `\addbibresource{refs.bib}` (met de extensie) naar de preambule, `\printbibliography` vervangt `\bibliography{refs}`, en er is geen `\bibliographystyle` regel omdat de stijl een pakketoptie is. De build moet 'biber' draaien in plaats van 'bibtex'; het uitvoeren van de verkeerde backend is een veelvoorkomende oorzaak van een [lege bibliografie](/learn/bibliography-empty/).

## Hoe te kiezen

Laat de locatie beslissen wanneer het kan. Als de sjabloon een `.bst`-bestand levert of als de instructies van de auteur BibTeX vermelden, gebruik dan de klassieke BibTeX en vecht er niet tegen. Wanneer u het formaat zelf kunt bepalen, zoals bij een scriptie, een preprint of collegeaantekeningen, is biblatex het betere hulpmiddel: schonere aanpassingen, echte Unicode-ondersteuning en speciaal gebouwde invoertypen voor webbronnen. Uw `.bib` database werkt onder beide systemen onveranderd, dus de keuze is nooit definitief. De citatiecommando's verschillen tussen de twee, en [natbib-gewoonten versus biblatex-commando's](/learn/natbib-vs-biblatex/) koppelt de ene set aan de andere.