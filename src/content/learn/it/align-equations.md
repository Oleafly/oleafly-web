---

title: "Equazioni multilinea che si allineano"
description: "allinea, raccogli, dividi, multilinea e annota."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Equazioni multilinea che si allineano

Una derivazione di più passaggi risulta migliore con i segni di uguale impilati in un'unica colonna, in modo che l'occhio possa tenere traccia di ciò che è cambiato da una riga all'altra. Il pacchetto `amsmath` fornisce l'ambiente `align` per questo, oltre a una piccola famiglia di parenti per i casi in cui l'allineamento non è quello che desideri.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## Come allineare le letture

Ogni riga è un'equazione, terminata con `\\`; l'ultima riga non ne ha bisogno. Il simbolo "&" indica il punto di allineamento e il simbolo "&" di ogni riga finisce nella stessa colonna. Posizionare `&` immediatamente prima del segno di uguale è l'abitudine standard, quindi i segni di uguale si sovrappongono e i lati di sinistra pendono verso sinistra. Ogni riga riceve il proprio numero di equazione; scrivi `align*` al numero nessuno, o aggiungi `\notag` alle singole righe per saltare solo quelle, come mostrato in [numeri e puntatori per equazioni](/learn/number-equations/).

L'ambiente apre la matematica di visualizzazione da sola, quindi non deve trovarsi all'interno di `\[ ... \]` o `$ ... $`; annidarlo in un altro ambiente matematico produce errori confusi.

## La famiglia

| Busta | Scopo |
| --- | --- |
| "allineare" | Diverse righe allineate |
| `allinea*` | Uguale, non numerato |
| `raccogliere` | Diverse righe, centrate |
| `dividere` | Numero di equazione singola su più righe |
| `multilinea` | Equazione lunga rotta senza allineamento |

`gather` gestisce diverse equazioni senza punto di allineamento condiviso; centra ogni riga e la numera. "split" crea un'equazione su più righe con un singolo numero e deve trovarsi all'interno di "equation". "multiline" interrompe una formula troppo lunga senza allineamento, la prima riga allineata a sinistra e l'ultima allineata a destra. Gli ultimi due sono trattati in dettaglio in [equazioni che non si adattano](/learn/break-long-equations/).

Due domande decidono quale utilizzare: le linee sono equazioni separate o un'equazione spezzata e c'è un punto di allineamento che vale la pena impilare? Separato e allineato: "allinea". Separato e centrato: "raccogliere". Singolo e allineato: `diviso`. Singolo e non allineato: "multilinea".

## Errori comuni

Una riga senza `&` viene comunque compilata, ma si centra in modo indipendente e non si allinea nulla. Due "&" su una riga iniziano una seconda coppia di colonne, che "align" si legge come una seconda colonna di equazioni affiancate; se il tuo output ha equazioni che marciano verso destra, conta le tue e commerciali. Un `\\` finale sulla riga finale aggiunge una riga vuota, che appare come uno spazio verticale dispari sotto il blocco. Digita una derivazione in tre passaggi nel [parco giochi live](/live/) per osservare l'allineamento.