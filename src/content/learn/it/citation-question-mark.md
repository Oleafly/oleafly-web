---

title: "Cancellazione delle virgolette misteriose"
description: "Errori di battitura, passaggi mancanti, percorso sbagliato, mancata corrispondenza tra BibTeX e Biber."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Cancellazione delle virgolette misteriose

## Il sintomo

Il documento viene compilato, ma dove dovrebbe apparire una citazione viene visualizzato un punto interrogativo in grassetto, `[?]`, e il registro contiene righe come `LaTeX Warning: Citation 'knuth84' unfined`. A volte ogni citazione è interessata, a volte solo una o due. Poiché si tratta di un avviso e non di un errore, il PDF viene comunque creato ed è facile non notare i segni finché un lettore non li segnala.

## Perché succede

LaTeX non risolve direttamente le citazioni. Al primo passaggio registra ciascuna chiave richiesta in un file ausiliario. Un programma di backend (`bibtex` o `biber`) cerca quindi quelle chiavi nel tuo database `.bib` e scrive voci formattate. Due ulteriori passaggi LaTeX ripiegano nuovamente i risultati. Un punto interrogativo significa che al momento del passaggio finale non esisteva alcuna voce formattata per quella chiave. Ogni causa di questo sintomo è un modo per interrompere quella pipeline.

## Analizza le cause in ordine

Controlla prima la chiave stessa. `\cite{knuth84}` e `@article{knuth1984,...}` sono stringhe diverse e la corrispondenza è esatta, comprese le maiuscole e minuscole. Cerca nel file `.bib` la chiave indicata nell'avviso; un errore di battitura su entrambi i lati è il colpevole più comune e il primo avviso di chiave mancante nel registro è quello da inseguire.

Successivamente, assicurati che sia stato eseguito l'intero ciclo di compilazione. The sequence is LaTeX, then `bibtex` or `biber`, then LaTeX twice more. A single compile can never resolve citations, because the backend has not run yet. Oleafly drives the whole cycle automatically, but a manual build or a misconfigured editor can stop after the first pass.

In terzo luogo, verificare il percorso del database. `\bibliography{refs}` e `\addbibresource{refs.bib}` si risolvono in relazione al file principale, quindi un database in una sottocartella deve essere scritto come `bib/refs` o `bib/refs.bib`. Un percorso sbagliato fallisce silenziosamente e di solito porta con sé l'intero elenco di riferimenti; vedere [Bibliografia vuota](/learn/bibliography-empty/) per l'errore più grande.

Infine, abbina il backend al sistema. Un documento che carica biblatex deve essere elaborato con `biber`. Alimentandolo con il classico `bibtex` non si produce alcun output utilizzabile e ogni citazione rimane un punto interrogativo, non importa quante volte si ricompila.

## Se tutto il resto fallisce

I file ausiliari obsoleti possono mantenere uno stato vecchio e danneggiato. Elimina i file ".aux", ".bbl" e ".blg" accanto al documento e ricostruiscilo da zero. Vale la pena leggere anche il file `.blg` prima di eliminarlo: è il log del backend e nomina esplicitamente i database mancanti e le voci con formato errato.