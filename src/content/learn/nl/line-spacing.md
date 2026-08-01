---

title: "Enkel, half, dubbel"
description: "setspace voor het hele document of een lokaal blok."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Enkel, half, dubbel

Standaard stelt LaTeX de tekst in op enkele regelafstand, waarbij de afstand tussen de regels wordt gekozen om bij het lettertype te passen. Zo ziet een voltooid boek eruit, maar veel documenten moeten losser zijn: scriptieregels vereisen vaak anderhalve of dubbele spatiëring, en tijdschriften vragen om manuscripten met dubbele spaties zodat reviewers ruimte hebben om te krabbelen. Wijzig de regelafstand met het pakket `setspace`. Het past de hoofdtekst aan zonder de delen van het document te verbreken die op enkele afstanden moeten blijven.

## Documentbrede spatiëring

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Laad het pakket in de preambule en geef vervolgens een van de drie verklaringen af. `\onehalfspacing` stelt het hele document in op anderhalve regelafstand, `\doublespacing` verdubbelt deze, en `\singlespacing` keert terug naar normaal, wat handig is als u halverwege terug moet schakelen. De verklaringen worden van kracht vanaf de plaats waar ze verschijnen, dus als u er één in de preambule plaatst, wordt alles gedekt.

De reden om setspace te gebruiken in plaats van met de hand te rommelen met `\baselinestretch` of `\linespread` is wat het bewust met rust laat: voetnoten, bijschriften van figuren en tabellen, en floats blijven op één regelafstand staan, wat precies is wat de richtlijnen van de scripties en typografische conventies verwachten. Een naïeve mondiale strekking zou ook in uw voetnoten een dubbele spatie betekenen, en dat leest slecht.

Als je een factor nodig hebt die de sneltoetsen niet dekken, accepteert `\setstretch{1.25}` elke vermenigvuldiger. Merk op dat "dubbele spatiëring" in de zin van een tekstverwerker overeenkomt met een stuk van ongeveer 1,66 in LaTeX-termen, en dat '\doublespacing' daar al rekening mee houdt, dus weersta de drang om '\setstretch{2}' te schrijven, tenzij een regelgeving dit letterlijk vereist.

## Ruimte voor slechts één blok

Soms heeft slechts een deel van het document een andere spatiëring nodig: een lang citaat, een declaratiepagina of een samenvatting die dubbele spaties moet hebben en de rest niet.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

De `spacing`-omgeving past de gegeven rekfactor, hier 1.2, toe op alleen de tekst tussen `\begin` en `\end`, en herstelt vervolgens wat daarvoor van kracht was. Het pakket biedt ook kant-en-klare 'singlespace'- en 'doublespace'-omgevingen voor de veelvoorkomende gevallen. Omdat de verandering afhankelijk is van de omgeving, mag u niet vergeten terug te schakelen, wat de gebruikelijke fout is bij het afgeven van kale declaraties midden in een document.

## Een woord van waarschuwing

Gebruik geen regelafstand om het aantal pagina's te halen. Het uitbreiden naar 1.1 om een ​​paper er langer uit te laten zien, is de oudste truc in het boek, en locaties met een strikte opmaak voeren geautomatiseerde controles uit die dit onderscheppen. De [page-limit guide](/learn/page-limits-without-crimes/) behandelt legitieme alternatieven. Bewaar setspace waarvoor het bedoeld is: voldoen aan een expliciete spatiëringsvereiste en vervolgens terugschakelen naar enkele spatiëring voor de camera-ready versie.