---

title: "Marges in één pakket"
description: "geometrie voor paginaformaat, marges, inbindoffset."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Marges in één pakket

De standaardmarges van LaTeX zien er enorm uit, vooral op A4-papier. Dat is inherent aan het ontwerp: de standaardinstellingen streven naar een comfortabele regellengte van ongeveer 66 tekens, wat geweldig is om te lezen, maar zelden wat een universiteitssjabloon, een tijdschrift of je eigen smaak vraagt. In plaats van een half dozijn lengtes op laag niveau met de hand aan te passen, stelt u de pagina in met het pakket 'geometrie' en beschrijft u de gewenste lay-out in duidelijke termen.

## De twee manieren waarop je het daadwerkelijk gaat gebruiken

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

De eerste vorm is de snelle: `margin=1in` stelt alle vier de marges in op één inch in een enkele optie, en de geometrie berekent de tekstbreedte en -hoogte opnieuw, zodat deze overeenkomen. Dit is de standaard 'Amerikaanse scriptie'-look en een verstandige standaard voor concepten.

Het tweede formulier beschrijft alles. `a4paper` geeft het fysieke papierformaat aan (gebruik `letterpaper` voor US Letter). Zonder dit erft geometrie alles wat de documentklasse aanneemt, wat mogelijk niet overeenkomt met wat uw PDF-viewer of printer verwacht. De opties `top`, `bottom`, `left` en `right` stellen vervolgens elke marge afzonderlijk in, zodat asymmetrische lay-outs net zo eenvoudig zijn als symmetrische lay-outs. Je kunt eenheden vrijelijk mixen: `in`, `cm`, `mm` en `pt` werken allemaal.

Alles gebeurt in de preambule, vóór `\begin{document}`. Geometry leest de opties één keer en leidt daaruit de hele pagina-indeling af. Daarom is het minder foutgevoelig dan handmatig afstemmen.

## Inbindoffset voor gedrukte exemplaren

Als het document wordt afgedrukt en ingebonden, heeft de binnenmarge extra ruimte nodig, zodat de tekst niet in de rug verdwijnt. Voeg `bindingoffset=0.5cm` toe aan de opties en de geometrie verschuift het tekstblok op elke pagina naar buiten. In een 'twoside'-document wisselt het de verschuiving tussen de linker- en rechterpagina's correct af, wat lastig is om met de hand rechts te krijgen.

## Wat je niet moet doen

Vermijd het mengen van geometrie met handmatig `\setlength{\textwith}{...}` tenzij je weet waarom. De pagina-indeling van LaTeX is een web van onderling afhankelijke lengtes (`\textwidth`, `\oddsidemargin`, `\headheight` en vrienden), en de geometrie beheert ze allemaal als één consistent systeem. Als u de ene lengte direct na het laden van de geometrie wijzigt, zijn de anderen het meestal niet eens, en krijgt u tekst die over de pagina loopt of marges die afwijken van waar u om vroeg. Als u halverwege het document een wijziging nodig heeft, biedt geometrie precies daarvoor `\newgeometry{...}` en `\restoregeometry`.

Eén waarschuwing voordat u iets afstemt: als u voor een tijdschrift of conferentie schrijft, codeert het klassenbestand al de vereiste marges, en het toevoegen van geometrie erbovenop zal waarschijnlijk het inzendingsformaat schenden. Bespaar margeaanpassingen voor documenten waarvan u de lay-out bepaalt, zoals een scriptie, notities of een CV, en controleer eerst wat uw [document class] (/learn/document-skeleton/) u al biedt.