---

title: "Bibliografia vuota"
description: "Percorso, backend, citazione mancante, printbibliography vs bibliografia."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Bibliografia vuota

## Il sintomo

Il documento viene compilato senza errori irreversibili, ma la sezione Riferimenti manca completamente oppure l'intestazione appare senza nulla sotto. Spesso ogni `\cite` nel testo viene visualizzato contemporaneamente come un punto interrogativo in grassetto. Non si è verificato alcun crash, quindi non c'è alcun errore evidente da inseguire, il che è ciò che rende questo frustrante.

## Perché succede

La bibliografia non è prodotta solo da LaTeX. LaTeX scrive prima l'elenco delle chiavi citate in un file ausiliario. Un programma backend separato (`bibtex` o `biber`) legge il tuo database `.bib` e formatta le voci corrispondenti. Alla fine LaTeX rilegge il risultato formattato al passaggio successivo. Una bibliografia vuota significa che questa pipeline si è rotta da qualche parte: il backend non è mai stato eseguito, è stato eseguito ma non è riuscito a trovare il database, ha trovato il database ma non sono state richieste chiavi, oppure il documento richiede il risultato con il comando sbagliato.

## Analizza le cause in ordine

Innanzitutto, conferma che il file di database esiste dove dice che si trova nel documento. `\bibliography{refs}` e `\addbibresource{refs.bib}` cercano entrambi `refs.bib` relativo al file principale, quindi un file che si trova in una sottocartella `bib/` deve essere referenziato come `bib/refs` o `bib/refs.bib`. Una strada sbagliata fallisce silenziosamente.

In secondo luogo, assicurati che il backend sia effettivamente eseguito. Una singola compilazione non è mai sufficiente; il ciclo completo è LaTeX, poi `bibtex` o `biber`, poi LaTeX altre due volte. Oleafly esegue questo ciclo automaticamente, ma una build guidata manualmente o una toolchain di editor mal configurata possono saltare il passaggio intermedio e il risultato è esattamente un elenco di riferimenti vuoto.

Terzo, controlla che sia presente almeno un comando `\cite`. Il backend formatta solo le voci richieste dal documento, quindi una bozza senza citazioni ottiene ancora un elenco vuoto in base alla progettazione. Durante la prima stesura puoi forzare tutto con `\nocite{*}`, che richiede ogni voce nel database senza stampare nulla nel testo.

In quarto luogo, abbina il comando al sistema. I documenti BibTeX classici terminano con `\bibliographystyle{...}` e `\bibliography{refs}`. I documenti biblatex caricano il database nel preambolo con `\addbibresource{refs.bib}` e lo stampano con `\printbibliography`. Mescolando i due, ad esempio caricando biblatex ma chiamando comunque `\bibliography`, si produce esattamente questo errore. Lo stesso vale per l'esecuzione del backend sbagliato: biblatex ha bisogno di `biber` e alimentarlo con il classico `bibtex` non produce nulla.

## Leggi il log del backend

Il backend scrive i suoi reclami in un file `.blg` accanto al tuo documento, ed è lì che vengono visualizzate voci con formato errato, chiavi duplicate e messaggi "Impossibile aprire il file del database". Se i passaggi precedenti sembrano corretti ma l'elenco è ancora vuoto, il registro `.blg` nomina quasi sempre il vero colpevole. Per i punti interrogativi che persistono dopo la comparsa della bibliografia stessa, vedere [Cancellazione delle citazioni misteriose](/learn/citation-question-mark/).