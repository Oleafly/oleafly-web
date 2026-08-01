---

title: "Lavagna, sceneggiatura, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm e quando viene visualizzato ciascun alfabeto."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Lavagna, sceneggiatura, Fraktur

La matematica usa più di un alfabeto. I numeri reali ottengono una R in grassetto da lavagna, un lagrangiano ottiene una L calligrafica, un'algebra di Lie ottiene un Fraktur g, e ognuno di questi è un comando distinto in LaTeX piuttosto che un carattere che accendi. Usati in modo coerente, gli alfabeti dicono al lettore che tipo di oggetto nomina una lettera prima della frase circostante.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## I quattro alfabeti

| Comando | Guarda | Uso tipico |
| --- | --- | --- |
| `\mathbb{R}` | Lavagna | Set di numeri |
| `\mathcal{L}` | Calligrafico | Lagrangiane, perdita |
| `\mathfrak{g}` | Frattura | Algebre di Lie |
| `\mathrm{d}` | Verticale | Differenziali, nomi degli operatori |

`\mathbb` produce il grassetto, le lettere con il doppio colpo usate quasi esclusivamente per i set di numeri: `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. Proviene dal pacchetto `amssymb` e copre solo le maiuscole. Il carattere non ha alfabeto minuscolo, quindi un argomento minuscolo stampa glifi errati o nulla di utile.

"\mathcal" fornisce maiuscole calligrafiche, la scelta abituale per lagrangiane, funzioni di perdita e famiglie di insiemi. Inoltre copre solo le maiuscole e funziona nel core LaTeX senza pacchetti aggiuntivi.

`\mathfrak`, anch'esso da `amssymb`, è Fraktur, con entrambi i casi disponibili. Fraktur minuscolo nomina le algebre di Lie, e le maiuscole compaiono nell'algebra e nella teoria degli insiemi, per ideali e cardinali tra le altre cose.

"\mathrm" non è un alfabeto decorativo ma un passaggio al romano verticale all'interno della matematica. È lo strumento giusto per tutto ciò che è notazione piuttosto che una variabile: il differenziale in `\mathrm{d}x`, unità o sottoetichette testuali come `x_{\mathrm{max}}`. Per gli operatori con nome come tr e rango esiste un meccanismo migliore, trattato in [operatori che inventi una volta](/learn/argmin-argmax/).

## Note pratiche

Se `\mathcal` sembra troppo semplice per i tuoi scopi, il pacchetto `mathrsfs` aggiunge `\mathscr`, uno script più elaborato spesso usato per fasci e sigma-algebre. I due possono coesistere e denotare oggetti diversi nella stessa carta.

L’errore comune è considerare questi alfabeti come decorazioni. Ognuno di essi ha un significato convenzionale nella maggior parte dei campi, e un lettore che vede `\mathbb{A}` si aspetterà qualcosa di simile a un insieme e al sapore di numeri. Controlla le convenzioni del tuo campo prima di assegnare le lettere e, una volta assegnate, mantieni un alfabeto per oggetto per l'intero documento. Tutti e quattro vengono renderizzati fianco a fianco in pochi secondi nel [parco giochi live](/live/).