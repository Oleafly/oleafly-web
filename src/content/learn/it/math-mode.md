---

title: "Matematica che si trova in una frase (o da sola)"
description: "Matematica in linea, matematica visualizzata, ambienti di equazioni e quando vale la pena numerare."
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

# Matematica che si trova in una frase (o da sola)

LaTeX tratta la matematica come una modalità separata con i propri caratteri e regole di spaziatura. Ogni variabile, formula e simbolo deve vivere in modalità matematica, sia che si tratti di una sola n in una frase o di un'equazione completa. Ne esistono di due tipi: la matematica in linea scorre all'interno di un paragrafo e la matematica visualizzata è centrata sulla propria riga, con o senza un numero.

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

## Matematica in linea

Una coppia di simboli del dollaro, come in `$E=mc^2$`, imposta la formula alla dimensione del testo all'interno della riga. Le lettere vengono visualizzate in corsivo matematico e la spaziatura attorno al segno di uguale viene gestita per te. `\(E=mc^2\)` è la forma nativa LaTeX equivalente. Produce un output identico e, poiché i suoi delimitatori di apertura e chiusura differiscono, uno non chiuso fornisce un messaggio di errore più chiaro. Utilizza la matematica in linea anche per un nome di variabile singola, in modo che la n nella tua prosa corrisponda alla n nelle tue equazioni.

## Visualizza la matematica

`\[ ... \]` inserisce una formula su una propria linea centrata senza numero. È la scelta giusta per equazioni una tantum a cui non fai mai riferimento. Evita il vecchio formato `$$ ... $$`. È semplice TeX anziché LaTeX e in alcune situazioni produce una spaziatura verticale leggermente errata.

## Equazioni numerate

L'ambiente "equazione" visualizza la formula con un numero al margine. `\label{eq:energy}` attribuisce un nome a quel numero e altrove si scrive `Equation~\ref{eq:energy}` o, con `amsmath` caricato, `\eqref{eq:energy}`, che aggiunge le parentesi stesse. Il `~` è uno spazio unificatore, quindi la parola e il numero rimangono su una riga. I riferimenti si risolvono nella seconda compilazione. Se vedi `??` nell'output, vedi [punti interrogativi al posto dei numeri](/learn/equations-show-qq/).

## I pacchetti da caricare

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Quasi ogni documento matematico carica questi tre. "amsmath" fornisce gli ambienti e i comandi presupposti dalla maggior parte di queste lezioni, inclusi "align" e "\eqref". "amssymb" e "amsfonts" aggiungono caratteri simbolici e alfabeti extra come "\mathbb". Metti la riga nel preambolo una volta e dimenticatela.

Il classico errore da principiante è la sintassi matematica al di fuori della modalità matematica: un carattere di sottolineatura in testo normale interrompe la compilazione con "Missing $ inserito", che ha [una propria lezione](/learn/missing-dollar/). Per avere un'idea delle due modalità, digita una frase con `$x_i$` in linea e la stessa formula all'interno di `\[ ... \]` nel [live playground](/live/) e confronta come ciascuna si trova sulla pagina.