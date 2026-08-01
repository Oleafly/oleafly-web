---

title: "Wiskunde die in een zin zit (of alleen)"
description: "Inline wiskunde, weergave van wiskunde, vergelijkingsomgevingen en wanneer nummeren de moeite waard is."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# Wiskunde die in een zin zit (of alleen)

LaTeX beschouwt wiskunde als een aparte modus met zijn eigen lettertypen en spatiëringsregels. Elke variabele, formule en symbool moet in de wiskundige modus leven, of het nu een enkele n in een zin is of een volledige vergelijking. Er zijn twee soorten: inline wiskunde loopt binnen een alinea, en weergave wiskunde wordt gecentreerd op een eigen regel, met of zonder nummer.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## Inline wiskunde

Een paar dollartekens, zoals in `$E=mc^2$`, stellen de formule in op tekstgrootte binnen de regel. De letters worden cursief weergegeven en de afstand rond het gelijkteken wordt voor u afgehandeld. `\(E=mc^2\)` is de equivalente LaTeX-native vorm. Het produceert identieke uitvoer, en omdat de openings- en sluitingsscheidingstekens verschillen, geeft een niet-gesloten scheidingsteken een duidelijker foutmelding. Gebruik inline wiskunde, zelfs voor de naam van een enkele variabele, zodat de n in je proza ​​overeenkomt met de n in je vergelijkingen.

## Wiskunde weergeven

`\[ ... \]` plaatst een formule op zijn eigen gecentreerde lijn zonder getal. Het is de juiste keuze voor eenmalige vergelijkingen waar u nooit meer naar teruggrijpt. Vermijd de oude `$$ ... $$`-vorm. Het is gewone TeX in plaats van LaTeX en produceert in sommige situaties een enigszins verkeerde verticale spatiëring.

## Genummerde vergelijkingen

De 'vergelijking'-omgeving geeft de formule weer met een getal in de marge. `\label{eq:energy}` koppelt een naam aan dat getal, en elders schrijf je `Vergelijking~\ref{eq:energy}` of, met `amsmath` geladen, `\eqref{eq:energy}`, wat de haakjes zelf toevoegt. De `~` is een niet-afbrekende spatie, dus het woord en het cijfer blijven op één regel. Referenties worden opgelost bij de tweede compilatie. Als je `??` in de uitvoer ziet, zie dan [vraagtekens in plaats van cijfers](/learn/equations-show-qq/).

## De pakketten die moeten worden geladen

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Bijna elk wiskundig document laadt deze drie. `amsmath` biedt de omgevingen en commando's waar de meeste van deze lessen van uitgaan, inclusief `align` en `\eqref`. `amssymb` en `amsfonts` voegen symboollettertypen en extra alfabetten toe zoals `\mathbb`. Zet de regel één keer in de inleiding en vergeet het.

De klassieke beginnersfout is de wiskundige syntaxis buiten de wiskundige modus: een onderstrepingsteken in platte tekst stopt het compileren met "Missing $ insert", wat [zijn eigen les] heeft (/learn/missing-dollar/). Om een ​​idee te krijgen van de twee modi, typt u een zin met `$x_i$` inline en dezelfde formule binnen `\[ ... \]` in de [live speeltuin](/live/) en vergelijkt u hoe beide op de pagina staan.