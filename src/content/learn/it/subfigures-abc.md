---

title: "Pannelli etichettati a, b, c"
description: "sottodidascalia per figure composte da più pannelli sotto un'unica didascalia."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Pannelli etichettati a, b, c

I documenti necessitano costantemente di figure multi-pannello: l'architettura nel pannello (a), la curva di allenamento in (b), un'ablazione in (c), tutte con in comune un numero di figura e una didascalia generale. Il modo pulito per crearlo è il pacchetto `subcaption`, che fornisce un ambiente `subfigure` che gestisce i caratteri (a), (b), le didascalie per pannello e i riferimenti automaticamente.

## Il modello

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Ecco cosa fa ogni pezzo. L'ambiente esterno `figure` è un normale float e `[htbp]` elenca i posizionamenti che LaTeX può provare, in ordine: qui nel testo, in cima a una pagina, in fondo a una pagina o in una pagina float dedicata. Ogni "sottofigura" è una casella di larghezza stabilita, qui "0,48\textwidth" (48% della larghezza del testo). Due pannelli a 0,48 lasciano un piccolo spazio e il `\hfill` tra di loro si allunga in modo che i pannelli siano a filo con i margini sinistro e destro. All'interno di ogni pannello, `width=\linewidth` ridimensiona l'immagine alla larghezza del pannello, non all'intera pagina. Quest’ultimo dettaglio è quello che le persone sbagliano più spesso.

La `\caption` all'interno di una `subfigure` produce la piccola etichetta di stile "(a) First" sotto quel pannello. La `\caption` alla fine, all'interno di `figure` ma all'esterno di qualsiasi `sottofigura`, è la didascalia principale che porta il numero della figura. Conserva ogni `\label` immediatamente dopo la sua `\caption`, perché un'etichetta registra qualunque numero sia stato emesso più recentemente, come spiegato in [didascalie ed etichette](/learn/captions-labels/).

## Pannelli di riferimento

Con le etichette sopra, `\ref{fig:p}` stampa il numero della figura, diciamo 2, mentre `\ref{fig:p-a}` stampa 2a. Se vuoi solo la lettera, `\subref{fig:p-a}` stampa solo "a", utile per frasi come "pannelli (a) e (b)". Questo è il vero vantaggio di `subcaption` rispetto alla digitazione manuale di "(a)" sotto le immagini. Le lettere si rinumerano quando aggiungi o riordini i pannelli e ogni riferimento rimane corretto.

## Righe, spaziatura e un errore comune

Per un terzo pannello, riduci la larghezza a circa `0,31\textwidth` e aggiungi un'altra "sottofigura" con "\hfill" tra ogni coppia, oppure inizia una nuova riga lasciando una riga vuota tra le righe di sottofigure. Una riga vuota all'interno di una riga, tuttavia, è il classico errore: qualsiasi riga vuota tra due ambienti `sottofigura` inizia un nuovo paragrafo, che impila i pannelli verticalmente invece che fianco a fianco. Se i tuoi pannelli si rifiutano di stare in una riga, cerca prima una riga vuota e ricorda che `%` alla fine di una riga commenta lo spazio invisibile di fine riga che può anche spingere un pannello troppo largo per adattarsi.