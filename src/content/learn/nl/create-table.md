---

title: "Een tafel die eruitziet als een papieren tafel"
description: "tabellarisch, regels voor boekentabbladen, bijschrift, label."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Een tafel die eruitziet als een papieren tafel

Tabellen in LaTeX gebruiken twee geneste omgevingen met verschillende taken. De binnenste 'tabel' vormt het raster van cellen. De buitenste 'tabel' maakt van dat raster een float, zodat het een nummer, een bijschrift en een label kan bevatten, en zodat LaTeX het kan plaatsen waar de pagina ruimte heeft. Voeg het pakket `booktabs` toe voor de horizontale regels en het resultaat ziet eruit als een tabel uit een gepubliceerd artikel, en niet als een screenshot van een spreadsheet.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## De buitenomgeving

Het argument `[htbp]` geeft aan waar LaTeX de vlotter mag plaatsen: hier in de tekst, bovenaan een pagina, onderaan of op een aparte pagina met vlotters. Het probeert ze in die volgorde, en door ze alle vier toe te staan, voorkom je dat de tafel ver afdrijft; de werking ervan wordt uitgelegd in [waar drijvers daadwerkelijk landen](/learn/position-figures/). Met `\centreren` wordt het raster horizontaal gecentreerd. Met '\caption' wordt het genummerde bijschrift afgedrukt, en volgens afspraak gaan tabelbijschriften boven de tabel, in tegenstelling tot figuurbijschriften, die eronder staan. `\label` moet na `\caption` komen, omdat een label het meest recent uitgegeven nummer registreert, zoals beschreven in [captions en labels](/learn/captions-labels/). Met het label op zijn plaats wordt in `Tabel~\ref{tab:resultaten}` in uw tekst altijd het juiste nummer afgedrukt.

## Het binnenste raster

De `{lcc}` na `\begin{tabular}` declareert één kolom per letter: `l` is links uitgelijnd, `c` is gecentreerd en `r` zou rechts uitgelijnd zijn. Drie letters betekent drie kolommen, en elke rij moet precies dat aantal cellen bevatten. Binnen een rij scheidt `&` de cellen en `\\` beëindigt de rij. Tekstkolommen worden meestal het beste links uitgelijnd gelezen, terwijl korte numerieke kolommen doorgaans gecentreerd zijn.

De drie regels komen uit `booktabs`. `\toprule` opent de tabel, `\midrule` scheidt de koprij van de gegevens en `\bottomrule` sluit deze. Deze vervangen het gewone `\hline` commando en worden geleverd met correct afgestemde spaties boven en onder, wat de belangrijkste reden is waarom de tabel er professioneel uitziet. Geen verticale lijnen en geen regel tussen gegevensrijen: de 'booktabs'-stijl laat beide met opzet achterwege. De redenering is uiteengezet in [tabellen met drie regels](/learn/booktabs-beautiful/).

## Praktische opmerkingen

De meest voorkomende beginnersfouten zijn een mismatch tussen het aantal `&`-scheidingstekens en de gedeclareerde kolommen, en een vergeten `\\` aan het einde van een rij, die beide verwarrende foutmeldingen opleveren die naar de volgende regel verwijzen. Als u cellen liever niet met de hand telt, bouwt u het raster visueel op met de [table generator](/tools/table-generator/) en plakt u het resultaat in uw document.