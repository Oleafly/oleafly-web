---

title: "Numeri e puntatori per le equazioni"
description: "label, ref, eqref e numerando solo le righe che intendi."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Numeri e puntatori per equazioni

Numerare un'equazione è una promessa a cui farai riferimento in seguito. LaTeX gestisce entrambe le metà di questa promessa: l'ambiente "equazione" assegna il numero e il sistema di etichette ti consente di indicarlo da qualsiasi punto del documento senza mai digitare tu stesso il numero.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Etichette e riferimenti

`\begin{equation}` numera la riga visualizzata. `\label{eq:bayes}` associa il nome `eq:bayes` a quel numero. Il nome è a tua scelta e il prefisso `eq:` mantiene le etichette delle equazioni distinte da figure e tabelle. Per citarlo, `\ref{eq:bayes}` stampa il semplice numero, mentre `\eqref{eq:bayes}`, da `amsmath`, lo racchiude tra parentesi per corrispondere a come appare il numero accanto all'equazione. Preferisci `\eqref` per le equazioni in modo che i due stili coincidano.

Poiché i numeri vengono registrati in un passaggio e letti in quello successivo, una nuova compilazione mostra `??` fino all'esecuzione successiva. [Punti interrogativi invece di numeri](/learn/equations-show-qq/) copre quel ciclo.

Se non viene mai fatto riferimento a un'equazione visualizzata, non numerarla. Utilizza invece `\[ ... \]` o l'`equazione*` con l'asterisco, in modo che i numeri indichino solo le righe che il lettore potrebbe aver bisogno di ritrovare.

## Numerazione di alcune righe in allineamento

Le derivazioni su più righe in "align" numerano ogni riga per impostazione predefinita, il che raramente è ciò che desideri. Due comandi lo regolano per riga:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` sopprime il numero sulla sua riga, quindi qui il passaggio intermedio rimane non numerato mentre la prima e l'ultima riga mantengono i loro numeri ed etichette. Metti ogni `\label` sulla riga a cui dà il nome, prima di `\\`, in modo che si leghi al numero giusto. La scorciatoia tutto o niente è "allinea*", che non numera nulla. L'intera famiglia di ambienti multilinea è trattata in [equazioni multilinea che si allineano](/learn/align-equations/).

L'errore comune è scrivere il numero letterale, come in "vedi Equazione 3", che si interrompe nel momento in cui si inserisce un'equazione sopra di esso. Passa sempre attraverso un'etichetta e lascia che LaTeX venga rinumerato ad ogni compilazione. Puoi guardare l'aggiornamento della numerazione dal vivo mentre aggiungi e rimuovi `\notag` nel [parco giochi](/live/).