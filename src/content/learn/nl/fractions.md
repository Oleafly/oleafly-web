---

title: "Gestapelde verhoudingen die leesbaar blijven"
description: "frac, dfrac, tfrac en kettingbreuken met amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# Gestapelde verhoudingen die leesbaar blijven

Breuken zijn de eerste plaats waar LaTeX-uitvoer zichtbaar een tekstverwerker overtreft: een echte gestapelde teller en noemer met een regel daartussen, zo groot dat het past bij de omringende wiskunde. Het kerncommando is `\frac`. Waar het om gaat is hoe de grootte verandert afhankelijk van de context, en hoe je dat kunt negeren als de automatische keuze de leesbaarheid schaadt.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` neemt twee argumenten tussen haakjes, eerst de teller en daarna de noemer, en zet ze gestapeld over een horizontale regel. De grootte is contextgevoelig. In weergavewiskunde (binnen `\[ ... \]` of een `vergelijkings`omgeving) wordt de breuk op volledige grootte ingesteld. Bij inline wiskunde (binnen `$ ... $`) wordt het kleiner en compacter ingesteld, zodat de regels van de alinea niet uit elkaar worden gedrukt.

Soms wil je dat overschrijven. `\dfrac`, van `amsmath`, dwingt weergavestijl af: een gestapelde breuk op volledige grootte, zelfs in het midden van een zin. Gebruik het spaarzaam, omdat een groot gedeelte inline de regelafstand eromheen vergroot. `\tfrac` is het tegenovergestelde: het dwingt de kleine tekststijl af, zelfs bij weergavewiskunde, wat handig is voor eenvoudige coëfficiënten zoals de helft vóór een grote uitdrukking, waarbij een stapel op volledige grootte te veel aandacht zou trekken.

Beide argumenten kunnen willekeurige wiskunde bevatten, inclusief andere breuken: `\frac{1}{1 + \frac{1}{x}}` nestelt zich, en LaTeX verkleint de binnenste breuk automatisch. Als het nesten echter diep wordt, is er een beter hulpmiddel.

## Vervolg breuken

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Geneste `\frac`s krimpen op elk niveau, zodat op de derde verdieping van een kettingbreuk de cijfers nauwelijks leesbaar zijn. `\cfrac`, ook van `amsmath`, houdt elk niveau op de volledige weergavegrootte en lijnt de tellers uit, wat de geaccepteerde manier is om kettingbreuken te zetten. Je kunt een optionele positie doorgeven, `\cfrac[l]{1}{...}`, om een ​​teller naar links te duwen in plaats van deze te centreren.

## Praktisch oordeel

Alle `\dfrac`, `\tfrac` en `\cfrac` vereisen `\usepackage{amsmath}` in de preambule; gewoon `\frac` werkt zonder. Als u "Ongedefinieerde controlereeks" op `\dfrac` krijgt, ontbreekt de pakketregel.

Voor inline tekst is een schuine streep soms gewoon beter leesbaar dan een gestapelde breuk: door '(a/b)' of 'a/b' te schrijven blijft de regelhoogte gelijk en leest het prima voor eenvoudige verhoudingen. Een goede vuistregel is om breuken te stapelen bij weergavewiskunde, waar er verticale ruimte is, en de voorkeur te geven aan de schuine streep, tenzij de breuk het punt van de zin is. Typ een paragraaf in beide richtingen in de [live speeltuin](/live/) en vergelijk; het verschil in regelafstand is onmiddellijk zichtbaar. Als wiskundige scheidingstekens zoals `$` en `\[` nog steeds onbekend zijn, begin dan met [basisprincipes van de wiskundemodus](/learn/math-mode/).