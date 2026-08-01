---

title: "Singolo, mezzo, doppio"
description: "setspace per l'intero documento o un blocco locale."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Singolo, mezzo, doppio

Per impostazione predefinita LaTeX imposta il testo a interlinea singola, con la distanza tra le linee scelta per adattarsi al carattere. Questo è l'aspetto di un libro finito, ma molti documenti devono essere più sciolti: i regolamenti delle tesi spesso richiedono una spaziatura e mezza o doppia, e le riviste richiedono manoscritti con spaziatura doppia in modo che i revisori abbiano spazio per scarabocchiare. Cambia l'interlinea con il pacchetto `setspace`. Regola il corpo del testo senza interrompere le parti del documento che dovrebbero rimanere a interlinea singola.

## Spaziatura a livello di documento

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Caricare il pacchetto nel preambolo, quindi emettere una delle tre dichiarazioni. `\onehalfspacing` imposta l'intero documento a un'interlinea e mezza, `\doublespacing` la raddoppia e `\singlespacing` ritorna alla normalità, il che è utile se è necessario tornare indietro a metà strada. Le dichiarazioni hanno effetto da dove appaiono, quindi inserirne una nel preambolo copre tutto.

Il motivo per usare setspace invece di armeggiare con `\baselinestretch` o `\linespread` a mano è ciò che lascia deliberatamente da parte: le note a piè di pagina, le didascalie di figure e tabelle e i numeri mobili rimangono a interlinea singola, che è esattamente ciò che le linee guida della tesi e la convenzione tipografica si aspettano. Un ingenuo allungamento globale raddoppierebbe anche lo spazio delle note a piè di pagina, e questo si legge male.

Se hai bisogno di un fattore che le scorciatoie non coprono, `\setstretch{1.25}` accetta qualsiasi moltiplicatore. Tieni presente che la "doppia spaziatura" nel senso di un elaboratore di testi corrisponde a un allungamento di circa 1,66 in termini LaTeX, e `\doublespacing` già lo tiene conto, quindi resisti all'impulso di scrivere `\setstretch{2}` a meno che un regolamento non lo richieda letteralmente.

## Spaziatura per un solo blocco

A volte solo una parte del documento necessita di spaziatura diversa: una citazione lunga, una pagina di dichiarazione o un abstract che deve avere l'interlinea doppia mentre il resto no.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

L'ambiente `spacing` applica il fattore di allungamento specificato, qui 1.2, solo al testo tra `\begin` e `\end`, quindi ripristina tutto ciò che era in vigore prima. Il pacchetto fornisce anche ambienti `singlespace` e `doublespace` già pronti per i casi più comuni. Poiché la modifica rientra nell'ambito dell'ambiente, non è possibile dimenticare di tornare indietro, che è la consueta modalità di errore nell'emettere semplici dichiarazioni a metà documento.

## Un avvertimento

Non utilizzare l'interlinea per raggiungere il conteggio delle pagine. L'estensione a 1.1 per far sembrare un foglio più lungo è il trucco più vecchio del mondo e le sedi con una formattazione rigorosa eseguono controlli automatizzati per rilevarlo. La [guida sui limiti di pagina](/learn/page-limits-without-crimes/) copre alternative legittime. Risparmia setspace per lo scopo a cui è destinato: soddisfare un requisito di spaziatura esplicito, quindi tornare alla spaziatura singola per la versione pronta per la fotocamera.