---

title: "Tabelle più lunghe di una pagina"
description: "intestazioni e piè di pagina longtable che si ripetono."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Tabelle più lunghe di una pagina

Un normale ambiente "tabella" è un float e un float deve stare in una singola pagina. Dategli sessanta righe e LaTeX lo inserisce in una pagina float e lo lascia traboccare, oppure lo rinvia per sempre. La soluzione è il pacchetto "longtable", che compone una tabella che si suddivide su più pagine e ripete la sua intestazione su ciascuna di esse, come fa la stampa di un foglio di calcolo.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## Come funzionano i blocchi di intestazione

Una `longtable` inizia con un massimo di quattro blocchi di dichiarazione prima delle righe di dati effettive. Tutto ciò che è sopra "\endfirsthead" è l'intestazione stampata una volta, proprio all'inizio della tabella. Tutto ciò che si trova tra `\endfirsthead` e `\endhead` è l'intestazione ripetuta nella parte superiore di ogni pagina successiva, motivo per cui la stessa riga "Chiave e valore" appare due volte nell'esempio. Il blocco che termina con `\endfoot` viene stampato in fondo a ogni pagina toccata dalla tabella, qui solo una `\bottomrule` di chiusura. C'è anche "\endlastfoot" per il materiale che dovrebbe apparire solo sotto le righe finali, come una riga dei totali. Se vuoi un suggerimento per la continuazione, uno schema comune è `\midrule \multicolumn{2}{r}{continua nella pagina successiva} \\` nel blocco piede e il vero `\bottomrule` nell'ultimo piede.

Dopo le dichiarazioni seguono le righe di dati, scritte esattamente come in un normale `tabella` con `&` tra le celle e `\\` alla fine di ogni riga. Le regole di `booktabs` funzionano invariate. Vedi le [tabelle delle tre regole](/learn/booktabs-beautiful/) per sapere cosa sostituiscono.

## Non è un float e cosa implica

La differenza comportamentale più importante è espressa in una frase: `longtable` non è un float. Inizia esattamente dove lo inserisci nel codice sorgente, si interrompe dove si interrompono le pagine e non accetta argomenti "[htbp]". Ciò cambia anche il modo in cui funzionano i sottotitoli. Non si inserisce un `longtable` in un ambiente `table`. Inserisci invece `\caption{...}\\` all'interno della tabella stessa, come prima riga del blocco di prima intestazione, e verrà numerato nella stessa sequenza delle altre tabelle.

## Due cose da sapere prima di affidarvi

Innanzitutto, la larghezza delle colonne viene decisa globalmente, quindi LaTeX potrebbe richiedere diversi passaggi di compilazione prima che le colonne smettano di spostarsi. Continua a compilare finché il layout non si stabilizza. In secondo luogo, `longtable` non può essere utilizzato all'interno di un layout a due colonne, il che lo esclude per la maggior parte dei modelli di conferenza. In questi documenti le opzioni realistiche sono rimpicciolire la tabella, dividerla in parti o spostarla in un'appendice a una colonna.