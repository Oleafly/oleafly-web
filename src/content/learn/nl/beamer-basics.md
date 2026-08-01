---

title: "Een eerste Beamerdek"
description: "Thema, titelkader, overzicht, één resultatendia."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# Een eerste Beamer-deck

Beamer is de standaard LaTeX-documentklasse voor presentaties. In plaats van pagina's produceert het document dia's, en alles wat u al weet, wordt overgenomen: dezelfde wiskunde, dezelfde cijfers, dezelfde bibliografische opdrachten. De praktische winst voor papieren auteurs is hergebruik. Vergelijkingen en TikZ-diagrammen uit het manuscript plakken onveranderd in de lezing. Hier is een minimaal maar compleet kaartspel:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Frames, geen pagina's

De kerneenheid is het frame, en elke 'frame'-omgeving wordt één dia. Het optionele argument tussen accolades, zoals in `\begin{frame}{Results}`, stelt de titel van de dia in. De eerste dia gebruikt de afkorting `\frame{\titlepage}`, waarbij `\titlepage` de metagegevens weergeeft die in de preambule zijn gedeclareerd door `\title` en `\author`. Je kunt ook `\institute` en `\date` toevoegen en ze verschijnen in dezelfde lay-out. Een frame bevat merkbaar minder dan een pagina, ruwweg 128 mm bij 96 mm canvas, dus inhoud die overloopt is een teken om het materiaal over twee frames te verdelen in plaats van het lettertype te verkleinen.

## Thema's en de schets

`\usetheme{Madrid}` selecteert een compleet visueel ontwerp: kleuren, kop- en voettekstbalken en hoe frametitels worden getekend. Beamer verzendt tientallen thema's. 'Madrid', 'Berlijn' en de opzettelijk eenvoudige 'standaard' zijn veel voorkomende keuzes, en het verwisselen van het thema is een verandering van één regel die het hele kaartspel opnieuw opmaakt. Veel conferenties en labs verspreiden hun eigen thema. In dat geval plaatst u hun stijlbestand in het project en geeft u het hier een naam.

Het overzichtsframe roept `\tableofcontents` aan, waarin de sectiestructuur van de lezing wordt vermeld. Eén addertje onder het gras: het vermeldt `\section`-opdrachten, en dit minimale voorbeeld heeft er geen, dus de omtrek wordt leeg weergegeven totdat u regels als `\section{Method}` tussen frames toevoegt. Secties in Beamer printen geen kopjes op dia's; ze zijn er om de omtrek en de navigatie-elementen te structureren die sommige thema's weergeven.

## Inhoud op dia's

Binnen een frame werkt `itemize` zoals in elk ander document, en elk `\item` wordt een opsommingsteken. Dia's verdragen veel minder tekst dan papier, dus houd de items waar mogelijk op enkele regels en breng details aan in wat u zegt. Figuren, tabellen en wiskunde werken allemaal ook binnen frames, hoewel de uitvoer van Beamer niet wordt weergegeven in deze voorvertoningen op de pagina, dus compileer het kaartspel om het te zien.

De meest voorkomende vroege fout is de letterlijke inhoud: `\verb` en codelijsten vallen binnen gewone frames vanwege de manier waarop frames hun inhoud verwerken. De oplossing is de fragiele optie, geschreven `\begin{frame}[fragile]`, op elk frame dat code bevat. Wanneer het kaartspel is opgesteld, zijn stapsgewijze onthullingen het volgende hulpmiddel om te leren, beschreven in [onthullingslijnen bij klikken] (/learn/beamer-overlays/).