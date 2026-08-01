---

title: "Standalone TikZ naar PDF of PNG"
description: "standalone klasse en externe caches."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Standalone TikZ naar PDF of PNG

Een TikZ-afbeelding bevindt zich normaal gesproken in een document, maar vaak heb je het diagram als een eigen bestand nodig: om het opnieuw te gebruiken in een slide-deck, om het aan een co-auteur te overhandigen die in Word werkt, om het te uploaden waar een PNG vereist is, of gewoon om te voorkomen dat je bij elk document opnieuw een dure tekening moet compileren. Precies hiervoor bestaat de documentklasse `standalone`. Het zet één afbeelding op een pagina, bijgesneden tot het formaat van de afbeelding:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## Wat de klassenopties doen

De `tikz`-optie laadt het TikZ-pakket voor je en vertelt `standalone` om de uitvoerpagina strak rond de `tikzpicture` bij te snijden, zodat de resulterende PDF precies zo groot is als de tekening, zonder paginamarges. De `border=2pt` optie voegt aan alle kanten een tweepuntskussen toe, wat voorkomt dat streken die precies op het selectiekader liggen, door kijkers of printers worden afgeschoren. Compileer dit bestand zoals elk ander document en de uitvoer is een kleine, strak bijgesneden PDF met alleen het diagram.

Geef de voorkeur aan PDF, omdat het vector is: het kan naar elk formaat worden geschaald zonder vervaging. Het in een ander document plaatsen met `\includegraphics` werkt zoals beschreven in [een PDF-pagina als afbeelding](/learn/include-pdf-as-figure/). Als er echt een rasterkopie nodig is, converteer dan de gecompileerde PDF in plaats van de tekening opnieuw te maken. Commandoregelhulpmiddelen zoals `pdftoppm -png -r 300 figure.pdf figure` produceren een PNG van 300 dpi, en `pdf2svg` of Inkscape produceren SVG. Exporteer met 300 dpi of meer als de PNG wordt afgedrukt.

## Afbeeldingen in cache opslaan met externaliseren

In een groot document worden TikZ-afbeeldingen bij elke compilatie opnieuw getekend, en een handvol complexe plots kan de bouwtijd domineren. De `externe` bibliotheek lost dit op door elke afbeelding één keer naar zijn eigen PDF te compileren en vervolgens het in de cache opgeslagen bestand opnieuw te gebruiken totdat de code van de afbeelding verandert:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

De `prefix` optie bewaart de gegenereerde bestanden in hun eigen map. Externalisatie voert de compiler uit in een modus die subcompilaties voortbrengt, dus shell-escape moet zijn ingeschakeld en de interactie met sommige instellingen is slecht. Als je er moeite mee hebt, verplaats dan elke grote afbeelding naar een eigen 'op zichzelf staand' bestand en voeg de gecompileerde PDF's toe. Dat geeft je dezelfde caching met de hand, met minder machines. Compiletijden in het algemeen worden behandeld in [kortere wachttijd voor de PDF](/learn/speed-up-compilation/).

Eén veelgemaakte fout verdient een waarschuwing: maak geen screenshot van een weergegeven diagram om een ​​PNG-bestand te krijgen. Schermafbeeldingen leggen de schermresolutie vast, die er acceptabel uitziet in een diavoorbeeld en overal vaag is. Converteer vanuit de PDF, waarbij u de resolutie zelf kunt kiezen.