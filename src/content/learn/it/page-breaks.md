---

title: "Forza o rifiuta un'interruzione di pagina"
description: "nuovapagina, cancellapagina, interruzione di pagina morbida, nessuna interruzione di pagina."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Forza o rifiuta un'interruzione di pagina

LaTeX decide dove finiscono le pagine. Nella maggior parte dei casi decide bene, ma a volte è necessario prevalere: l'intestazione di una sezione si incastra in fondo alla pagina, una tabella finisce una riga troppo tardi o vuoi che ogni capitolo di un rapporto ricominci da capo. LaTeX ti fornisce un piccolo insieme di comandi per questo, che vanno da un ordine difficile a un suggerimento educato.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## Le pause difficili

`\newpage` termina immediatamente la pagina corrente e ne inizia una nuova. È lo strumento più schietto e quello che utilizzerai di più durante la stesura.

`\clearpage` fa la stessa cosa ma prima svuota tutti i float in sospeso. Le figure e le tabelle in LaTeX sono float: vanno alla deriva ovunque l'algoritmo trovi spazio, a volte pagine dopo il punto in cui le hai scritte. `\clearpage` forza tutti i float che sono stati in coda fino a quel momento sulla pagina prima di proseguire, quindi è il comando giusto alla fine di un capitolo o prima di una sezione in cui non si vogliono ritardati. Se le cifre sembrano accumularsi alla fine del documento, un `\clearpage` ben posizionato è solitamente la soluzione; vedi [perché le figure si muovono](/learn/figure-wrong-position/) per la storia completa.

`\cleardoublepage` fa un ulteriore passo avanti nei documenti a due facciate: dopo aver scaricato i float garantisce che la pagina successiva sia una pagina a destra (dispari), inserendo una pagina vuota a sinistra se necessario. I capitoli dei libri si aprono tradizionalmente a destra e la classe "book" lo chiama per ogni "\chapter".

## Le richieste soft

`\pagebreak[n]` non dà comandi. Chiede. Il numero opzionale da 0 a 4 indica con quanta forza: `\pagebreak[1]` significa "un'interruzione qui sarebbe carina", `\pagebreak[4]` significa "un'interruzione qui, punto". I valori medi permettono a LaTeX di valutare i tuoi desideri rispetto al proprio giudizio sulla spaziatura, che di solito produce pagine più belle di un `\newpage` difficile, perché `\pagebreak` allunga il contenuto per riempire la pagina invece di lasciare uno spazio vuoto.

`\nopagebreak` è la richiesta opposta: scoraggia un'interruzione in quel punto. È utile subito dopo un titolo o prima di un breve elenco che si desidera conservare con la sua introduzione. Come `\pagebreak` accetta una forza opzionale da 0 a 4.

## Quando raggiungerli

L'errore comune è quello di cospargere `\newpage` in una bozza per correggere il layout, per poi osservare ogni correzione diventare sbagliata man mano che il testo cresce. Le interruzioni di pagina dipendono da tutto ciò che le precede, quindi un'interruzione manuale che sembra perfetta oggi può lasciare una pagina mezza vuota dopo la revisione successiva. Il flusso di lavoro sensato consiste nel scrivere prima l'intero documento e aggiungere interruzioni solo durante il passaggio finale, preferendo i comandi soft `\pagebreak[3]` rispetto ai comandi hard ovunque sia negoziabile la posizione esatta.