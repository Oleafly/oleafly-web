---

title: "Tabellen met drie regels"
description: "toprule, midrule, bottomrule en verticale lijnen overslaan."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Tabellen met drie regels

Open een goed geschreven dagboek en bekijk de tabellen. Bijna allemaal volgen ze hetzelfde ontwerp: een regel bovenaan, een regel onder de kop, een regel onderaan en verder niets. Geen verticale lijnen, geen raster. Dit is de 'booktabs'-stijl, genoemd naar het pakket dat deze implementeert, en het overschakelen hiernaar is meestal de grootste visuele upgrade die u kunt maken voor LaTeX-tabellen. Het pakket biedt drie opdrachten die aansluiten op de drie regels:

```latex
\toprule
...
\midrule
...
\bottomrule
```

In een volledige tabel zien ze er als volgt uit:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## Wat de regels vervangen

Zonder `booktabs` tekenen mensen lijnen met `\hline` en verticale balken in de kolomspecificatie, zoals in `{|l|c|c|}`. Het resultaat is een kooi: elke cel is ingesloten, met de tekst krap tegen de regels omdat `\hline` geen ademruimte toevoegt. De `booktabs`-opdrachten vervangen `\hline` door regels met ingebouwde verticale opvulling, en `\toprule` en `\bottomrule` zijn iets zwaarder dan `\midrule`, dus de tabel heeft een zichtbaar frame en een lichtere binnenverdeling. Dat verschil in afstand en gewicht is de hele truc. Er is ruimte voor de gegevens, de header is duidelijk gescheiden en niets concurreert met de cijfers.

Verticale regels worden simpelweg weggelaten. Kolomuitlijning laat de lezer al zien waar de ene kolom eindigt en de volgende begint, en verticale lijnen voegen meestal inkt toe zonder helderheid toe te voegen. De `booktabs`-documentatie gaat zelfs zo ver dat ze weigert deze te ondersteunen.

## Gedeeltelijke regels voor gegroepeerde headers

Wanneer een header meerdere kolommen omvat, bijvoorbeeld 'Scores' boven nauwkeurigheid en F1, gebruik dan '\cmidrule' om alleen die kolommen te onderstrepen:

```latex
\cmidrule(lr){2-3}
```

Het bereik '{2-3}' geeft aan welke kolommen de regel bestrijkt, en de optie '(lr)' snijdt iets af van de linker- en rechteruiteinden, zodat aangrenzende regels niet samenvloeien in één lange regel. Dit gaat gepaard met `\multicolumn`, weergegeven in [cellen die rijen of kolommen omspannen](/learn/merged-cells/).

## Getallen en uitlijning

Een tabel met metingen leest het beste als de decimalen op één lijn staan. Het `siunitx`-pakket biedt een `S`-kolomtype dat getallen op de decimale markering automatisch uitlijnt, zodat `0.9` en `0.88` correct onder elkaar zitten, zelfs met verschillende cijfers. Het is de moeite waard om te adopteren zodra uw tabellen echte gegevens bevatten.

De veelgemaakte fout is het mixen van systemen: een `\hline` hier, een `\midrule` daar, en één kolomspecificatie met balken die overblijven van een sjabloon. Kies de stijl met drie regels en pas deze toe op elke tabel in het document. Consistentie is het grootste deel van wat ervoor zorgt dat de stijl er opzettelijk uitziet. Een volledige uitleg van de omringende `table` float bevindt zich in [een tabel die eruitziet als een papieren tafel](/learn/create-table/).