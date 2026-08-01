---

title: "Twee panelen op één rij"
description: "minipagina's naast elkaar zonder pakketoorlog."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Twee panelen op één rij

Soms wil je twee afbeeldingen naast elkaar, elk met een eigen onderschrift en een eigen figuurnummer. Daar heb je geen speciaal pakket voor nodig. Gewone 'minipagina'-vakken binnen een enkele 'figuur'-omgeving doen het werk, en omdat beide afbeeldingen in één float leven, kan LaTeX ze nooit op verschillende pagina's scheiden.

## Het patroon

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

Een 'minipagina' is een doos die zich gedraagt ​​als een miniatuurpagina: het heeft een vaste breedte die u kiest, en de inhoud wordt binnen die breedte gewikkeld en gestapeld. Hier neemt elke minipagina `0,48\textwidth` in beslag, wat 48 procent van de tekstbreedte betekent. Dat laat opzettelijk 4 procent onbenut, en de '\hfill' tussen de twee vakken is een rekbare ruimte die uitzet om deze te vullen, waardoor het ene paneel naar de linkermarge wordt geduwd en het andere naar rechts. Als je beide breedtes instelt op `0,5\textwidth`, zouden ze precies de lijnbreedte bedragen zonder ruimte voor enige scheiding, en zou het tweede vak op de volgende regel vallen, wat de meest voorkomende reden is dat lay-outs naast elkaar op mysterieuze wijze verticaal worden gestapeld.

Binnen elke minipagina schaalt `width=\linewidth` de afbeelding naar de breedte van het omringende kader, niet naar de hele pagina. Bij het gebruik van `\textwidth` is er in plaats daarvan een vaak voorkomende fout die ervoor zorgt dat elke afbeelding even breed is als het volledige tekstblok, waardoor overloop wordt gegarandeerd.

Let op waar de bijschriften staan: op elke minipagina. Dat geeft elk paneel een volledig onderschrift met een eigen nummer, dus deze figuur produceert bijvoorbeeld Figuur 3 en Figuur 4, zittend op één rij. De buitenste `[htbp]` plaatsingsopties vertellen LaTeX dat het de float hier, bovenaan een pagina, onderaan of op een float-pagina mag plaatsen, in die volgorde van voorkeur.

## Topjes op één lijn brengen en inhoud mixen

Als de twee afbeeldingen verschillende hoogtes hebben, kan de verticale uitlijning afwijken, omdat minipagina's standaard in het midden worden uitgelijnd. Schrijf `\begin{minipage}[t]{0.48\textwidth}` om ze bovenaan uit te lijnen. Het maakt minipagina's ook niet uit wat ze bevatten, dus plaatst deze zelfde lay-out een figuur naast een tabel, of een afbeelding naast een paragraaf met verklarende tekst, waarvoor pakketten in subfiguurstijl niet zijn ontworpen.

## Wanneer subfiguren gebruiken?

Het enige dat dit patroon je niet kan bieden, zijn panelen met de labels (a) en (b) onder één gedeeld bijschrift en één enkel figuurnummer. Op het moment dat u "Figuur 5(a)" wilt in plaats van twee onafhankelijke figuren, schakelt u over naar [subfiguren](/learn/subfigures-abc/). Vuistregel: minipagina's zijn voor figuren die toevallig buren zijn, terwijl subfiguren voor één figuur zijn die toevallig onderdelen heeft.