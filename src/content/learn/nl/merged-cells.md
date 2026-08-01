---

title: "Cellen die rijen of kolommen beslaan"
description: "meerdere kolommen, meerdere rijen, cmidrule onder gegroepeerde headers."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Cellen die rijen of kolommen beslaan

Echte tabellen hebben vaak samengevoegde cellen nodig. Een koptekst zoals 'Scores' die boven twee metrische kolommen staat, omvat kolommen, en een modelnaam die van toepassing is op twee resultaatrijen, omvat rijen. LaTeX verwerkt de twee richtingen met verschillende tools: `\multicolumn` is ingebouwd, terwijl `\multirow` uit het gelijknamige pakket komt. Hier is een compacte tabel die beide gebruikt, plus een gedeeltelijke regel uit `booktabs`:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Kolommen overspannen

`\multicolumn{2}{c}{Scores}` vervangt twee gewone cellen door één. Het eerste argument is hoeveel kolommen er moeten worden geabsorbeerd, het tweede is een kolomspecificatie voor alleen deze cel, hier `c` voor gecentreerd, en het derde is de inhoud. Let op de enige `&` ervoor: de eerste kolom van die rij is opzettelijk leeg, dus 'Scores' begint in kolom 2 en omvat de kolommen 2 en 3. Omdat het tweede argument lokaal het kolomtype overschrijft, is `\multicolumn{1}{c}{...}` ook de standaardtruc om een ​​enkele kopcel boven een links uitgelijnde kolom te centreren.

## De gedeeltelijke regel

`\cmidrule(lr){2-3}` tekent alleen een horizontale regel onder de kolommen 2 tot en met 3, die de gegroepeerde kop visueel verbindt met de kolommen. De `(lr)` optie trimt de regel iets aan de linker- en rechteruiteinden, zodat aangrenzende `\cmidrule`s elkaar niet raken en gelezen worden als afzonderlijke groepsmarkeringen. Dit is een `booktabs`-opdracht, en het bijsnijden is een van de details die ervoor zorgt dat deze tabellen er gezet uitzien in plaats van getekend. De volledige stijl met drie regels wordt behandeld in [tabellen met drie regels](/learn/booktabs-beautiful/).

## Rijen overspannen

Met `\multirow{2}{*}{Ours}` wordt 'Ours' verticaal gecentreerd over twee rijen afgedrukt. Het eerste argument is het aantal rijen, het tweede is de celbreedte, waarbij `*` de natuurlijke breedte van de inhoud betekent, en het derde is de inhoud zelf. Het commando reserveert alleen visuele ruimte, dus de tweede rij moet nog steeds een lege eerste cel leveren. Daarom begint de volgende regel met een kale `&`. Als u die lege cel vergeet, verschuift elke waarde in de rij één kolom naar links, en de foutmelding over de verkeerde uitlijning wijst naar de verkeerde regel, dus controleer eerst de rij na een `\multirow`.

## Een praktische limiet

Samengevoegde cellen kunnen het beste worden beperkt tot kopteksten en korte rijgroepen. Een tabel waarin gegevenscellen zich in beide richtingen uitstrekken, is moeilijk te lezen en moeilijker te onderhouden, omdat elke toegevoegde rij u dwingt de reeksen opnieuw te tellen. Als je merkt dat je `\multirow` binnen `\multicolumn` nestelt, overweeg dan om de tabel te herstructureren.