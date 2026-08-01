---

title: "Un tavolo che sembra un tavolo di carta"
description: "tabellare, regole booktabs, didascalia, etichetta."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Un tavolo che sembra un tavolo di carta

Le tabelle in LaTeX utilizzano due ambienti nidificati con lavori diversi. Il "tabellare" interno costruisce la griglia di celle. La `tabella` esterna rende la griglia mobile, in modo che possa contenere un numero, una didascalia e un'etichetta, e in modo che LaTeX possa posizionarla dove c'è spazio nella pagina. Aggiungi il pacchetto `booktabs` per le regole orizzontali e il risultato apparirà come una tabella tratta da un articolo pubblicato, non come uno screenshot di un foglio di calcolo.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## L'ambiente esterno

L'argomento `[htbp]` elenca dove LaTeX può posizionare il float: qui nel testo, nella parte superiore di una pagina, in fondo o su una pagina separata di float. Li mette alla prova in quest'ordine, e concedendoli tutti e quattro si evita che il tavolo vada alla deriva; i meccanismi sono spiegati in [dove atterrano effettivamente i galleggianti](/learn/position-figures/). `\centering` centra la griglia orizzontalmente. `\caption` stampa la didascalia numerata e, per convenzione, le didascalie delle tabelle vanno sopra la tabella, a differenza delle didascalie delle figure, che vanno sotto. `\label` deve venire dopo `\caption`, perché un'etichetta registra il numero emesso più di recente, come indicato in [didascalie ed etichette](/learn/captions-labels/). Con l'etichetta a posto, `Table~\ref{tab:results}` nel tuo testo stampa sempre il numero giusto.

## La griglia interna

Il `{lcc}` dopo `\begin{tabular}` dichiara una colonna per lettera: `l` è allineato a sinistra, `c` è centrato e `r` sarebbe allineato a destra. Tre lettere significano tre colonne e ogni riga deve fornire esattamente altrettante celle. All'interno di una riga, `&` separa le celle e `\\` termina la riga. Le colonne di testo di solito si leggono meglio allineate a sinistra, mentre le colonne numeriche brevi sono comunemente centrate.

Le tre regole provengono da "booktabs". `\toprule` apre la tabella, `\midrule` separa la riga di intestazione dai dati e `\bottomrule` la chiude. Questi sostituiscono il semplice comando `\hline` e sono dotati di spaziatura correttamente calibrata sopra e sotto, motivo per cui la tabella sembra impostata in modo professionale. Nessuna linea verticale e nessuna regola tra le righe di dati: lo stile "booktabs" li esclude entrambi di proposito. Il ragionamento è esposto in [tabelle con tre regole](/learn/booktabs-beautiful/).

## Note pratiche

Gli errori più frequenti per i principianti sono una mancata corrispondenza tra il numero di separatori `&` e le colonne dichiarate e un `\\` dimenticato alla fine di una riga, entrambi i quali producono messaggi di errore confusi che puntano alla riga successiva. Se preferisci non contare manualmente le celle, costruisci visivamente la griglia con il [generatore di tabelle](/tools/table-generator/) e incolla il risultato nel tuo documento.