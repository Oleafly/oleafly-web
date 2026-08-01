---

title: "Het abstracte blok"
description: "plaatsing in een abstracte omgeving voor artikel- en tijdschriftlessen."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Het abstracte blok

De samenvatting is de korte samenvatting die tussen uw titel en uw eerste sectie staat. Bijna elke locatie heeft er een nodig. LaTeX geeft het een speciale omgeving in plaats van dat je het met een vetgedrukte kop moet vervalsen. De klasse moet weten welke tekst de samenvatting is, zodat tijdschriftklassen deze in een aparte stijl kunnen zetten (vaak kleiner en ingesprongen), zodat indieningssystemen deze automatisch kunnen extraheren.

## Het milieu

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Alles tussen `\begin{abstract}` en `\end{abstract}` wordt het abstracte blok. In de standaardklasse 'artikel' verschijnt het als een versmalde paragraaf met gecentreerde kop onder de titel. Schrijf er duidelijk proza ​​in. Inline wiskunde is prima, maar sla al het zware over: geen citaten als de locatie ze verbiedt, geen voetnoten, geen ongedefinieerde acroniemen. Samenvattingen verschijnen vaak alleen in databases en zoekresultaten, weg van de rest van het artikel.

## Waar het heen gaat

Plaats na `\maketitle` (of zoals vereist door de dagboekklasse). De gebruikelijke volgorde bovenaan een artikel is `\maketitle`, dan de samenvatting, en dan `\section{Inleiding}`. De omgeving moet na `\begin{document}` komen, omdat deze uitvoer produceert; het in de preambule plaatsen is een compileerfout.

Tijdschrift- en conferentieklassen veranderen dit contract vaak, en hun sjablonen winnen de standaard. Sommige klassen, waaronder verschillende ACM- en IEEE-varianten, willen dat de samenvatting vóór `\maketitle` wordt gedeclareerd, zodat ze deze in hun eigen titellay-out kunnen plaatsen. Anderen vervangen de omgeving volledig door een commando als `\abstract{...}`. Vuistregel: als je de sjabloon van een locatie gebruikt, plaats de samenvatting dan waar het voorbeeldbestand van de sjabloon deze plaatst en vecht niet tegen de klasse. De [titelblokkenles](/learn/title-page/) behandelt de `\maketitle`-machinerie waaraan deze hangt.

## Lessen zonder samenvatting

De klasse 'boek' definieert helemaal geen abstracte omgeving, maar gaat uit van de theorie dat boeken in plaats daarvan een voorwoord hebben. Als je er een nodig hebt in een scriptie in rapportstijl, ondersteunt de klasse 'report' dit, of je kunt een gecentreerde, ongenummerde kop typen, gevolgd door een normale paragraaf, wat het enige is wat de omgeving werkelijk doet.

Een veelgemaakte fout: een lege regel achterlaten tussen `\maketitle` en de samenvatting is prima, maar de samenvatting leeg laten is geen compileerfout, dus een vergeten tijdelijke aanduiding zoals "TODO" wordt vaker naar recensenten verzonden dan iemand toegeeft. Compileer, bekijk de eerste pagina van de pdf en lees het abstract daar minstens één keer voordat u het indient. Voor advies over wat de samenvatting eigenlijk zou moeten zeggen, en niet waar deze naartoe gaat, zie [hoe je een samenvatting schrijft](/learn/write-an-abstract/).