---

title: "Numeriek, auteurjaar, tijdschriftstijlen"
description: "Wissel stijlen uit zonder de database te herschrijven."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Numeriek, auteurjaar, tijdschriftstijlen

Een citatiestijl bepaalt twee dingen: hoe de marker in de tekst eruit ziet, zoals `[12]` versus `(Knuth, 1984)`, en hoe elk item in de referentielijst is opgemaakt. Het goede nieuws is dat de stijl volledig gescheiden is van uw `.bib`-database. U kunt een artikel omzetten van numeriek naar auteurjaar, of het opnieuw formatteren voor een ander tijdschrift, door één regel in de preambule te wijzigen. Uw vermeldingen blijven zoals ze zijn.

## Veranderende stijl met klassieke BibTeX

Met BibTeX bevindt de stijl zich in het `\bibliographystyle{...}` commando, dat een `.bst` bestand een naam geeft. Wissel het argument om en compileer opnieuw:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Tijdschriften en conferenties leveren doorgaans hun eigen `.bst`-bestand, bijvoorbeeld `IEEEtran.bst` of `ACM-Reference-Format.bst`. Plaats dat bestand naast je `main.tex` en noem het in `\bibliographystyle`. Merk op dat een `.bst` in één blik bakt; als de locatie citaten over het auteursjaar wil, heb je ook het pakket `natbib` nodig om opdrachten als `\citep` en `\citet` te krijgen.

## Stijl veranderen met biblatex

Bij biblatex is de stijl een optie op de verpakking zelf:

```latex
\usepackage[style=authoryear]{biblatex}
```

Andere veel voorkomende waarden zijn `style=numeric`, `style=numeric-comp` voor gecomprimeerde bereiken zoals `[3-6]`, `style=alphabetic` en `style=apa` of `style=ieee` uit add-onpakketten. Omdat biblatex-stijlen in LaTeX zijn geschreven in plaats van in de oude `.bst`-taal, zijn ze veel gemakkelijker aan te passen, bijvoorbeeld om interpunctie te wijzigen of URL's te verwijderen.

## Opnieuw correct compileren na het overschakelen

Na elke stijlwijziging bevatten de oude hulpbestanden nog steeds gegevens die zijn geformatteerd door de vorige stijl, dus voer een volledige cyclus uit: compileer één keer, voer de backend uit (`bibtex` voor klassieke BibTeX, `biber` voor biblatex), en compileer vervolgens nog twee keer zodat kruisverwijzingen worden opgelost. Oleafly voert deze cyclus voor je uit, maar als citaten er oud uitzien na een handmatige omschakeling, wordt het probleem opgelost door de bestanden `.aux` en `.bbl` te verwijderen en helemaal opnieuw op te bouwen.

## Welke familie moet je gebruiken?

Als de doellocatie een `.bst`-bestand of een klasse biedt die BibTeX verwacht, gebruik dan de klassieke BibTeX; bij de meeste tijdschriften is dat nog steeds het geval. Als u zelf het formaat bepaalt, zoals bij een proefschrift of een preprint, is biblatex de betere keuze. De afwegingen worden behandeld in [Klassieke BibTeX of biblatex](/learn/bibtex-vs-biblatex/), en de commandoverschillen in [natbib-gewoonten versus biblatex-commando's](/learn/natbib-vs-biblatex/).