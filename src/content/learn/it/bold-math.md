---

title: "Vettori e simboli in grassetto"
description: "mathbf, boldsymbol e una macro vettoriale coerente."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vettori e simboli in grassetto

Molti campi impostano vettori e matrici in grassetto: **x** per un vettore, **A** per una matrice, beta in grassetto per un vettore di coefficienti. In LaTeX ci sono due diversi comandi in grassetto per la matematica e non sono intercambiabili. Sapere quale prendere e racchiudere la scelta in una macro, mantiene la notazione coerente per tutta la tesi.

## I due comandi

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` cambia il suo argomento in un carattere romano in grassetto verticale. Funziona bene con le lettere latine, quindi `\mathbf{A}` ti dà una solida A verticale in grassetto, che molti testi usano per le matrici. Il suo limite è che copre solo lettere e cifre: `\mathbf{\beta}` non fa nulla di utile, perché il carattere bold roman semplicemente non ha glifi greci e la versione beta viene stampata invariata.

`\boldsymbol`, fornito da `amsmath` (tecnicamente dal meccanismo simile a `bm` in `amsbsy`, caricato da `amsmath`), incoraggia qualunque simbolo gli passi in mano mantenendone la forma. `\boldsymbol{\beta}` produce una beta corsiva grassetto e `\boldsymbol{x}` produce una x corsiva grassetto, che corrisponde allo stile inclinato delle variabili matematiche ordinarie. Se per tua convenzione i vettori sono in grassetto corsivo, questo è il comando che desideri.

Quindi la divisione pratica è: lettere latine in grassetto verticali, usare `\mathbf`; qualsiasi cosa in greco, o in grassetto, che dovrebbe rimanere in corsivo, usa `\boldsymbol`.

## Definisci le macro una volta

Invece di digitare questi comandi in tutto il documento, definisci le macro semantiche nel preambolo:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Ora scrivi `\vect{x}` per un vettore e `\mat{A}` per una matrice. "[1]" dice che ogni macro accetta un argomento e "#1" è il punto in cui si ferma quell'argomento. Il vantaggio arriva più tardi: se un diario richiede che i vettori siano in grassetto verticale anziché in corsivo grassetto, si modifica una riga in modo che `\vect` avvolga `\mathbf` e ogni vettore nel documento venga aggiornato alla compilazione successiva. Questo batte la ricerca e sostituzione su duecento equazioni.

Le macro inoltre rendono leggibile l'intento nell'origine. Tra sei mesi, `\vect{w}` ti dice che w è un vettore; un semplice `\boldsymbol{w}` ti dice solo che è in grassetto.

## Un errore comune

Non falsificare il grassetto greco con `\textbf` all'interno di math e non usare `\mathbf` per questo dando per scontato che funzioni. Compila e guarda attentamente: una beta non in grassetto accanto a vicini audaci è facile da perdere sullo schermo ed è evidente sulla stampa. Se vuoi individuare rapidamente i candidati, incolla una riga come `\boldsymbol{\beta} \mathbf{\beta} \beta` nel [live playground](/live/) e confronta i tre fianco a fianco. Per mettere in grassetto intere equazioni, inclusi simboli come `\sum`, guarda il comando `\bm` del pacchetto `bm`, che gestisce più classi di simboli rispetto a `\boldsymbol`.

Il grassetto nel testo corrente indica un argomento diverso con comandi diversi; vedere [enfasi nel testo](/learn/bold-italic/).