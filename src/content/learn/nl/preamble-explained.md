---

title: "Alles hierboven begint{document}"
description: "Pakketten, metadata en laadvolgorde: wat hoort in de preambule en wat niet."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Alles hierboven begint{document}

Alles tussen `\documentclass{...}` en `\begin{document}` is de **preambule**. Het produceert geen zichtbare tekst. Het configureert de run. Lettertypen, marges, pakketten, aangepaste opdrachten en metadata van documenten zijn allemaal hier aanwezig. Daarom is de inleiding van een volwassen artikel vaak langer dan de introductie ervan. Als je eenmaal weet wat elke regel doet, is een gekopieerde sjabloon niet langer magisch en wordt het een checklist.

## Anatomie

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

De opties op `\documentclass` stellen globale standaardwaarden in: `11pt` is de basislettergrootte waar al het andere vanaf schaalt, en `a4paper` declareert het papierformaat. De twee coderingsregels zijn historische metgezellen: `inputenc` vertelt de engine dat uw bronbestand UTF-8 is, en `fontenc` selecteert lettertypecodering zodat tekens met accenten echte glyphs zijn in plaats van composieten. Het huidige LaTeX gaat al uit van UTF-8-invoer, dus je zult zien dat deze regels in nieuwe documenten worden weggelaten, maar ze zijn onschadelijk en sjablonen behouden ze voor compatibiliteit.

Het middelste blok laadt mogelijkhedenpakketten. [geometry](/learn/margins-geometry/) stelt de marges in één optie in, `amsmath` en `amssymb` bieden de wiskundige omgevingen en symbolen die bijna elk technisch document nodig heeft, `graphicx` maakt `\includegraphics` voor figuren mogelijk, en `booktabs` biedt de regels die tabellen er professioneel uit laten zien. Ten slotte maakt [hyperref](/learn/hyperlinks/) verwijzingen en citaten klikbaar en wordt deze met opzet als laatste geladen, omdat het de interne onderdelen van veel andere pakketten opnieuw definieert.

De regels `\title`, `\author` en `\date` slaan alleen metagegevens op. Er wordt niets afgedrukt totdat `\maketitle` in de body draait, daarom kunnen deze überhaupt in de preambule staan.

## Vuistregels

Een paar gewoonten houden de preambules gezond. Laad één pakket per taak en weersta het stapelen van pakketten die over hetzelfde territorium vechten, zoals twee manieren om marges in te stellen. Laat de hyperref aan het eind staan, met een handvol gedocumenteerde uitzonderingen zoals Cleveref die erna moeten komen. Plaats documentbrede keuzes in de klassenopties in plaats van ze te verspreiden, zodat `11pt` of `twocolumn` één keer wordt gedeclareerd waar iedereen het kan zien. En zodra uw [aangepaste macro's](/learn/custom-commands/) een paar regels te groot zijn, verplaatst u ze naar een `.sty`-bestand, zodat meerdere documenten één set definities kunnen delen.

De nuttigste discipline is negatief: als u niet weet waarom een ​​inleidingsregel er is, zoek dit dan uit voordat uw document ervan afhangt. Gekopieerde preambules stapelen dode regels op, en dode regels zijn de plekken waar pakketconflicten zich verbergen. Zie ook [het documentenskelet](/learn/document-skeleton/) en [engines vergeleken](/learn/engines-compared/).