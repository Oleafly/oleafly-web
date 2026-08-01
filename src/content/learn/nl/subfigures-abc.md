---

title: "Panelen met het label a, b, c"
description: "subbijschrift voor figuren met meerdere panelen onder één bijschrift."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Panelen met het label a, b, c

Papers hebben voortdurend figuren met meerdere panelen nodig: de architectuur in paneel (a), de trainingscurve in (b), een ablatie in (c), die allemaal één figuurnummer en één algemeen bijschrift delen. De schone manier om dit te bouwen is het pakket 'subcaption', dat u een 'subfigure'-omgeving geeft die de (a), (b) letters, bijschriften per paneel en automatisch verwijzingen afhandelt.

## Het patroon

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Dit is wat elk stuk doet. De buitenste 'figure'-omgeving is een normale float, en '[htbp]' somt de plaatsingen op die LaTeX kan proberen, in volgorde: hier in de tekst, bovenaan een pagina, onderaan een pagina of een speciale float-pagina. Elk 'subfiguur' is een vak met een bepaalde breedte, hier '0,48\tekstbreedte' (48 procent van de tekstbreedte). Twee panelen op 0,48 laten een kleine opening achter, en de '\hfill' ertussen rekt zich uit zodat de panelen vlak tegen de linker- en rechtermarge liggen. Binnen elk paneel schaalt `width=\linewidth` de afbeelding naar de breedte van het paneel, niet naar de hele pagina. Dat laatste detail is het detail waar mensen het vaakst de fout in gaan.

Het `\bijschrift` in een `subfiguur` produceert het kleine label in de stijl "(a) Eerste" onder dat paneel. Het `\bijschrift` aan het einde, binnen `figuur` maar buiten elke `subfiguur`, is het hoofdonderschrift dat het figuurnummer draagt. Bewaar elk `\label` onmiddellijk na zijn `\caption`, omdat een label het meest recentelijk uitgegeven nummer registreert, zoals uitgelegd in [captions en labels](/learn/captions-labels/).

## Verwijzende panelen

Met de bovenstaande labels drukt `\ref{fig:p}` het figuurnummer af, bijvoorbeeld 2, terwijl `\ref{fig:p-a}` 2a afdrukt. Als je alleen de letter wilt, drukt `\subref{fig:p-a}` alleen "a" af, handig voor zinnen als "panelen (a) en (b)". Dat is de echte winst van 'subcaption' ten opzichte van het handmatig typen van "(a)" onder afbeeldingen. De letters worden opnieuw genummerd wanneer u panelen toevoegt of opnieuw ordent, en elke verwijzing blijft correct.

## Rijen, afstand en een veelgemaakte fout

Voor een derde paneel verkleint u de breedte tot ongeveer '0,31\textwidth' en voegt u nog een 'subfiguur' toe met '\hfill' tussen elk paar, of begint u een nieuwe rij door een lege regel tussen de rijen met subfiguren te laten. Een lege regel binnen een rij is echter een klassieke fout: elke lege regel tussen twee 'subfiguren'-omgevingen begint een nieuwe paragraaf, waarin de panelen verticaal worden gestapeld in plaats van naast elkaar. Als uw panelen weigeren om in één rij te zitten, zoek dan eerst naar een lege regel en onthoud dat `%` aan het einde van een regel de onzichtbare ruimte aan het einde van de regel wegneemt, waardoor een paneel ook te breed kan worden om te passen.