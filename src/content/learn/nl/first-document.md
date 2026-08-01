---

title: "Stel uw eerste PDF samen"
description: "Een klein artikel, één compilatie en de drie ideeën waarmee u het meeste uit LaTeX haalt."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Stel uw eerste PDF samen

Als je alleen maar in Word of Google Docs hebt geschreven, vraagt ​​LaTeX je om één gewoonte om te draaien. In plaats van de tekst op te maken terwijl u typt, beschrijft u uw document in platte tekst en laat u het door een programma typen. Die platte tekst bevindt zich in een `.tex`-bestand: een gewoon tekstbestand dat je in elke editor zou kunnen openen, met je woorden plus opdrachten als `\section{...}` die zeggen wat elk stuk *is*. Door het compileren wordt deze bron omgezet in een voltooide PDF. Een LaTeX-engine leest uw bestand van boven naar beneden, interpreteert elke opdracht, maakt de pagina's op en schrijft de PDF. Je formatteert de uitvoer nooit rechtstreeks. Je bewerkt de broncode en compileert opnieuw.

## Het kleinste echte document

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Lees het van boven naar beneden. `\documentclass{article}` vertelt de engine wat voor soort document dit is, waardoor verstandige standaardinstellingen worden ingesteld voor lettertypen, marges en kopstijlen. De regels `\title`, `\author` en `\date` slaan alleen metagegevens op; er is nog niets afgedrukt, en `\vandaag` betekent eenvoudigweg de datum van de dag die u compileert. `\begin{document}` markeert waar de daadwerkelijke inhoud begint. `\maketitle` is het moment waarop het opgeslagen titelblok op de pagina verschijnt. `\section{Inleiding}` drukt een genummerde kop af en neemt deze stilletjes op, zodat een inhoudsopgave deze later kan terugvinden. De laatste regels tonen de twee gezichten van wiskunde: `$...$` zet een formule binnen een zin, terwijl `\[ ... \]` deze een eigen gecentreerde weergaveregel geeft.

## Drie ideeën die de taal dragen

1. Commando's beginnen met een backslash en bevatten meestal een argument tussen accolades, dus `\textbf{hello}` betekent "hallo vetgedrukt zetten".
2. Omgevingen bevatten een gebied tussen `\begin{...}` en `\end{...}`, en de hoofdtekst van uw bestand is zelf één grote `document`-omgeving.
3. De preambule bestaat uit alles vóór `\begin{document}`; het configureert het document maar produceert nooit zichtbare tekst.

Bijna al het andere in LaTeX is een variatie op deze drie.

## Compileer het

Maak in [Oleafly](/docs/getting-started/) een project, plak de broncode hierboven en compileer. De PDF verschijnt naast uw bron en SyncTeX koppelt de twee zijden: klik op een plek in de PDF om naar de overeenkomende bronregel te springen, of omgekeerd. De allereerste compilatie van een project kan iets langer duren, terwijl de engine haalt wat hij nodig heeft; latere runs zijn sneller.

Eén ding kunt u verwachten: vroeg of laat zal een compilatie mislukken met een foutmelding en een regelnummer. Dit is volkomen normaal en betekent meestal een typefout in de naam van een opdracht of een ontbrekende accolade. Repareer de lijn waarnaar deze verwijst en compileer opnieuw.

## Volgende

Ga verder met [de preambule, uitgelegd](/learn/preamble-explained/) om te zien wat de installatieregels werkelijk doen, en vervolgens met [math mode](/learn/math-mode/) voor formules. Houd de [cheatsheet](/learn/cheatsheet/) open terwijl je je eerste echte pagina schrijft.