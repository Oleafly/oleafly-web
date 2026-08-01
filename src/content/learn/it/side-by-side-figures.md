---

title: "Due pannelli in una fila"
description: "minipagine fianco a fianco senza una guerra di pacchetti."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Due pannelli in una riga

A volte vuoi due immagini una accanto all'altra, ciascuna con la propria didascalia e il proprio numero di figura. Non hai bisogno di un pacchetto speciale per questo. Semplici riquadri `minipagina` all'interno di un singolo ambiente `figura` svolgono il lavoro e poiché entrambe le immagini risiedono in un unico float, LaTeX non può mai separarle su pagine diverse.

## Il modello

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

Una "minipagina" è una casella che si comporta come una pagina in miniatura: ha una larghezza fissa scelta dall'utente e i suoi contenuti si avvolgono e si impilano all'interno di tale larghezza. Qui ogni minipagina occupa `0.48\textwidth`, ovvero il 48% della larghezza del testo. Ciò lascia deliberatamente il 4% non reclamato e il `\hfill` tra i due riquadri è uno spazio estensibile che si espande per riempirlo, spingendo un pannello verso il margine sinistro e l'altro verso destra. Se imposti entrambe le larghezze su `0.5\textwidth`, totalizzerebbero esattamente la larghezza della linea senza spazio per alcuna separazione, e la seconda casella cadrebbe sulla riga successiva, che è la ragione più comune per cui i layout affiancati si impilano misteriosamente verticalmente.

All'interno di ogni minipagina, `width=\linewidth` ridimensiona l'immagine alla larghezza del riquadro circostante, non all'intera pagina. Utilizzando `\textwidth` si verifica invece un errore frequente che rende ciascuna immagine larga quanto l'intero blocco di testo, garantendo l'overflow.

Nota dove si trovano le didascalie: all'interno di ogni minipagina. Ciò fornisce a ciascun pannello una didascalia completa con il proprio numero, quindi questa figura produce, ad esempio, la Figura 3 e la Figura 4 sedute in una riga. Le opzioni di posizionamento esterne di `[htbp]` dicono a LaTeX che può posizionare il float qui, in cima alla pagina, in fondo o su una pagina float, in quell'ordine di preferenza.

## Allineamento delle parti superiori e miscelazione dei contenuti

Se le due immagini hanno altezze diverse, il loro allineamento verticale può sembrare sbagliato, perché le minipagine si allineano al centro per impostazione predefinita. Scrivi invece `\begin{minipage}[t]{0.48\textwidth}` per allinearli in alto. Anche le minipagine non si preoccupano di cosa contengono, quindi questo stesso layout mette una figura accanto a una tabella, o un'immagine accanto a un paragrafo di testo esplicativo, per cui i pacchetti in stile sottofigura non sono progettati.

## Quando utilizzare invece le sottofigure

L'unica cosa che questo modello non può darti sono i pannelli etichettati (a) e (b) sotto un'unica didascalia condivisa e un unico numero di figura. Nel momento in cui desideri la "Figura 5(a)" anziché due figure indipendenti, passa a [sottofigure](/learn/subfigures-abc/). Regola pratica: le minipagine sono per le figure che sono vicine, mentre le sottofigure sono per una figura che sembra avere parti.