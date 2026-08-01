---

title: "Je eerste TikZ-foto"
description: "Knooppunten, randen, een pijplijn met drie dozen die vector blijft."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# Je eerste TikZ-foto

TikZ is een tekentaal die in uw LaTeX-document leeft. In plaats van een diagram te importeren dat uit een ander hulpmiddel is geëxporteerd, beschrijft u het in tekst en tekent de compiler het. Het resultaat is dat de uitvoer bestaat uit vectorafbeeldingen met de eigen lettertypen van uw document, zodat labels exact overeenkomen met de omringende tekst en bij elke zoom scherp blijven. De kosten zijn dat u coördinaten en opties schrijft in plaats van vakken te slepen. Voor diagrammen die zijn opgebouwd uit vakken en pijlen is de afweging meestal de moeite waard. Hier is een pijplijn met drie dozen, de canonieke eerste afbeelding:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Knooppunten

Een knooppunt is een stukje inhoud, meestal tekst, dat op een positie wordt geplaatst, eventueel met een vorm eromheen. In `\node[tekenen, afgeronde hoeken] (a) {Invoer};` zeggen de opties tussen vierkante haakjes dat je de rand van het knooppunt moet tekenen en de hoeken moet ronden, de `(a)` geeft het knooppunt een naam waarnaar je later kunt verwijzen, en `{Invoer}` is de tekst erin. Het tweede knooppunt gebruikt `right=of a`, uit de `positioning` bibliotheek, die het rechts van knooppunt `a` plaatst op de afstand die is ingesteld door `node distance=1.5cm` in de omgevingsopties. Plaats knooppunten relatief ten opzichte van elkaar in plaats van op absolute coördinaten, en het hele diagram wordt aangepast wanneer een label langer wordt.

## Randen

Een rand is een lijn die twee punten verbindt. Omdat de knooppunten een naam hebben, verbindt u ze op naam: `\draw (a) -- (b);` tekent een rechte lijn van knooppunt `a` naar knooppunt `b`. TikZ begint en eindigt de lijn bij de knooppuntgrenzen in plaats van bij hun middelpunten. De `[-Latex]` optie stelt de stijl van de pijlpunt in vanuit de `arrows.meta` bibliotheek, waardoor de lijn een ononderbroken pijlpunt krijgt op zijn bestemming. De tip geldt één keer per pad, aan het einde ervan. Daarom gebruikt het voorbeeld twee `\draw`-commando's. Een enkel pad '(a) -- (b) -- (c)' zou alleen een pijlpunt op 'c' plaatsen.

## Waar heen te gaan

Verpak de 'tikzpicture' in een 'figuur'-omgeving wanneer deze een bijschrift en een nummer nodig heeft, precies zoals bij een afbeelding. TikZ-code wordt niet weergegeven in deze voorvertoningen op de pagina, dus compileer het fragment in een project om het resultaat te zien. In Oleafly kan de Diagram Composer ook bewerkbare TikZ als uitgangspunt produceren. De meest voorkomende beginnersfout is het vergeten van de puntkomma die elk TikZ-commando beëindigt, wat een lange, verwarrende fout oplevert. Wanneer een diagram voorbij drie vakken groeit, ga dan verder met [nodes and arrows](/learn/tikz-nodes-arrows/) en [uitgelijnde stroomdiagramvakken](/learn/tikz-flowchart/).