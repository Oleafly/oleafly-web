---

title: "Ontbrekende dollar ingevoegd"
description: "Subscripten en wiskundige opdrachten die in de tekstmodus zijn gelekt."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# Ontbrekende dollar ingevoegd

"Ontbrekende $ ingevoegd" is de meest voorkomende LaTeX-fout, en de naam ervan is misleidend: LaTeX vraagt ​​u niet om geld uit te geven, maar vertelt u dat alleen-wiskundige syntaxis in de tekstmodus verscheen. Het voegt de `$` zelf in om te herstellen, gaat door met compileren en laat vaak vreemde cursieve uitvoer achter in de stroomafwaartse richting, dus het bericht verdient een echte oplossing in plaats van schouderophalen.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## Wat veroorzaakt het

Twee karakters en een klasse commando's behoren exclusief tot de wiskundige modus. Het onderstrepingsteken `_` en het dakje `^` creëren subscripts en superscripts, en opdrachten als `\alpha`, `\frac` en `\leq` produceren wiskundige symbolen. Elk van deze in platte tekst geeft de fout weer. Het klassieke geval is een identificatie die een onderstrepingsteken bevat, zoals een bestandsnaam of een gennaam: `DNA_seq` in een zin struikelt over de `_`.

De oplossing hangt af van wat je bedoelde. Als het onderstrepingsteken een letterlijk teken is, ontsnap er dan aan: `DNA\_seq` drukt de naam af met een echt onderstrepingsteken. Als je een subscript bedoelde, dan bedoelde je wiskunde, dus wikkel de uitdrukking: `$x_i$` stelt een x in met het subscript i, in wiskunde cursief met de juiste spatiëring. De volledige lijst met tekens die in tekst moeten worden geëscaped, heeft [zijn eigen les] (/learn/special-characters/), en de wiskundige scheidingstekens zelf worden behandeld in [de basisbeginselen van de wiskundemodus] (/learn/math-mode/).

## Wanneer het log ergens vreemd naartoe wijst

Het gerapporteerde regelnummer is waar LaTeX het probleem heeft opgemerkt, niet noodzakelijkerwijs waar u het hebt veroorzaakt. De gebruikelijke boosdoener is een niet-afgesloten `$` eerder: je hebt de wiskundige modus geopend en nooit gesloten, dus LaTeX bleef in de wiskundige modus draaien totdat iets de kwestie forceerde, vaak het einde van de paragraaf. Een lege regel in de wiskundeweergave levert dezelfde fout op, omdat alinea-einden illegaal zijn in de wiskundemodus. Dus als de gemarkeerde lijn er onschuldig uitziet, scan dan omhoog naar een oneven aantal dollartekens en controleer of elke `\[` een overeenkomende `\]` heeft.

Syntaxisaccentuering is de snelle manier om de wegloper te herkennen: elke LaTeX-editor kleurt wiskundige gebieden anders, dus een alinea die plotseling in wiskundige kleuren wordt weergegeven, lokaliseert in één oogopslag de niet-gesloten dollar.

Nog een laatste waarschuwing: omdat LaTeX herstelt door de ontbrekende `$` in te voegen, wordt er vaak nog steeds een PDF opgebouwd. Gebruik de pdf niet als bewijs dat de fout onschadelijk was. De herstelde uitvoer heeft meestal cursief of vervormde spaties op de plaats waar uw tekst zou moeten staan. Corrigeer dus de broncode totdat het logboek schoon is.