---

title: "Rapporti impilati che rimangono leggibili"
description: "frac, dfrac, tfrac e frazioni continue con amsmath."
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

# Rapporti impilati che rimangono leggibili

Le frazioni sono il primo posto in cui l'output di LaTeX surclassa visibilmente un elaboratore di testi: un vero numeratore e denominatore impilati con una regola tra di loro, dimensionato per adattarsi alla matematica circostante. Il comando principale è "\frac". Ciò che conta è come le sue dimensioni cambiano con il contesto e come sovrascriverle quando la scelta automatica compromette la leggibilità.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` prende due argomenti tra parentesi graffe, prima il numeratore, poi il denominatore, e li compone impilati su una regola orizzontale. La sua dimensione è sensibile al contesto. Nella matematica di visualizzazione (all'interno di `\[ ... \]` o di un ambiente `equation`) la frazione viene impostata a dimensione intera. Nella matematica in linea (all'interno di `$ ... $`) è impostato più piccolo e più compatto, quindi non forza le righe del paragrafo a separarsi.

A volte vuoi ignorarlo. `\dfrac`, da `amsmath`, impone lo stile di visualizzazione: una frazione impilata a grandezza naturale anche nel mezzo di una frase. Usalo con parsimonia, perché una frazione alta in linea allunga l'interlinea attorno ad essa. `\tfrac` è l'opposto: forza lo stile del testo piccolo anche nella matematica di visualizzazione, il che è utile per coefficienti semplici come metà davanti a un'espressione grande, dove uno stack a grandezza naturale attirerebbe troppa attenzione.

Entrambi gli argomenti possono contenere calcoli arbitrari, incluse altre frazioni: `\frac{1}{1 + \frac{1}{x}}` nidifica e LaTeX riduce automaticamente la frazione interna. Quando la nidificazione diventa profonda, però, c'è uno strumento migliore.

## Frazioni continue

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

I `\frac` nidificati si restringono ad ogni livello, quindi al terzo piano di una frazione continua le cifre sono appena leggibili. `\cfrac`, sempre da `amsmath`, mantiene ogni livello alla massima dimensione di visualizzazione e allinea i numeratori, che è il modo accettato per comporre le frazioni continue. Puoi passare una posizione opzionale, `\cfrac[l]{1}{...}`, per spostare un numeratore a sinistra invece di centrarlo.

## Giudizio pratico

Tutti i `\dfrac`, `\tfrac` e `\cfrac` richiedono `\usepackage{amsmath}` nel preambolo; il semplice `\frac` funziona senza di esso. Se ottieni "Sequenza di controllo non definita" su `\dfrac`, manca la riga del pacchetto.

Per il testo in linea, a volte una forma barrata è semplicemente più leggibile di una frazione in pila: scrivere "(a/b)" o "a/b" mantiene uniforme l'altezza della riga e si legge bene per rapporti semplici. Una buona regola pratica è quella di impilare le frazioni nella matematica di visualizzazione, dove c'è spazio verticale, e preferire la barra in linea a meno che la frazione non sia il punto della frase. Digita un paragrafo in entrambe le direzioni nel [parco giochi live](/live/) e confronta; la differenza nell'interlinea è immediatamente visibile. Se i delimitatori matematici come `$` e `\[` non ti sono ancora familiari, inizia con [nozioni di base sulla modalità matematica](/learn/math-mode/).