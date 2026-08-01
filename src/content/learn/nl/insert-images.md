---

title: "Laat een figuur vallen"
description: "graphicx, breedte, paden, PDF versus PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Laat een figuur vallen

LaTeX heeft geen ingebouwde beeldondersteuning. Het komt allemaal uit het pakket `graphicx`, dat het commando `\includegraphics` levert, en volgens afspraak wordt de afbeelding in een `figure`-omgeving gewikkeld, zodat deze een bijschrift en een nummer kan bevatten. Dit is het patroon dat je honderden keren zult gebruiken:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Wat elke regel doet

De regel `\usepackage{graphicx}` komt in uw preambule, vóór `\begin{document}`, en hoeft slechts één keer te verschijnen, ongeacht hoeveel afbeeldingen u opneemt.

De 'figuur'-omgeving maakt van de afbeelding een zwevende afbeelding, wat betekent dat LaTeX kiest waar het terechtkomt in plaats van het op deze exacte plek in de tekst vast te spijkeren. De `[htbp]` letters zijn uw plaatsingsvoorkeuren: `h` betekent hier waar de code verschijnt, `t` betekent de bovenkant van een pagina, `b` betekent de onderkant van een pagina, en `p` betekent een aparte pagina met floats. LaTeX probeert ze in die volgorde en neemt de eerste die een fatsoenlijke pagina oplevert. Als je figuur ergens verrassend afdrijft, is dat normaal zweefgedrag, en [waar drijvers daadwerkelijk landen](/learn/position-figures/) legt uit hoe je ermee kunt onderhandelen.

Met `\centering` wordt de afbeelding horizontaal gecentreerd binnen het tekstblok. `width=0.8\textwidth` schaalt de afbeelding naar 80 procent van de tekstbreedte terwijl de beeldverhouding behouden blijft, wat bijna altijd beter is dan het specificeren van een absolute grootte in centimeters, omdat het zich aanpast als de marges van het document veranderen. Het bestandspad is relatief ten opzichte van de hoofdmap van het project, dus `figures/pipeline.pdf` betekent een map `figures` naast uw hoofdbestand `.tex`. Ten slotte drukt `\caption` het genummerde bijschrift af en `\label` registreert het nummer zodat `\ref{fig:pipeline}` het uit de tekst kan citeren. Het label moet na het bijschrift komen, om redenen die worden beschreven in [bijschriften en labels](/learn/captions-labels/).

## Welk bestandsformaat moet worden gebruikt

Geef de voorkeur aan PDF voor alles wat vector is, dat wil zeggen plots, diagrammen en stroomdiagrammen, omdat vectorafbeeldingen scherp blijven bij elke zoomlens en elk afdrukformaat. Gebruik PNG voor schermafbeeldingen en andere op pixels gebaseerde afbeeldingen. JPG is acceptabel voor foto's, waarbij de compressie-artefacten onzichtbaar zijn. Vermijd het insluiten van tekstrijke inhoud als schermafbeeldingen, omdat deze onscherp is in gedrukte vorm en niet kan worden doorzocht.

Pas ook het formaat van grote foto's aan voordat u ze opneemt. Een foto van 12 megapixels, weergegeven op een breedte van 8 centimeter, doet de PDF opzwellen en vertraagt ​​elke compilatie, terwijl een versie die op gedrukt formaat is verkleind tot ongeveer 300 dpi er identiek uitziet.

## De fout die je moet vermijden

Vecht niet op de eerste dag tegen de vlotter door alleen '[h]' te eisen. LaTeX zal dit vaak weigeren en vervolgens het figuur en alles erachter naar het einde van het hoofdstuk dragen. Schrijf `[htbp]`, plaats de figuurcode in de buurt van de paragraaf die er het eerst naar verwijst, en laat de cijfers en referenties het traceren voor u doen.