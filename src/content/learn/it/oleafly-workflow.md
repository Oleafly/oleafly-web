---

title: "Una settimana di scrittura su Oleafly"
description: "Libreria, modelli, compilazione, SyncTeX, citazioni, cronologia Git, AI opzionale."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# Una settimana di scrittura su Oleafly

Ecco come appare un articolo giorno per giorno in Oleafly, da un progetto vuoto a una bozza che potresti inviare a un coautore. L'app non ha bisogno di account né di server: un progetto è una cartella di file `.tex`, `.bib` e figure sul tuo disco, e tutto ciò che segue opera su quella cartella.

## Primo giorno: inizia da un modello

Crea un progetto nella Libreria, vuoto o da un [modello](/templates/) per formati comuni come documenti IEEE e ACM o uno scheletro di tesi. Un modello fornisce immediatamente un documento da compilare, con le opzioni della classe e il preambolo già sensati, il che è meglio dell'assemblaggio di un preambolo riga per riga il primo giorno. Premi Compila una volta per confermare di aver ricevuto un PDF prima di scrivere qualsiasi cosa.

## Midweek: il ciclo di scrittura-compilazione

La maggior parte della settimana è un ciclo tra l'editor e il riquadro PDF. L'editor completa automaticamente i comandi, gli ambienti, le etichette e le chiavi di citazione esistenti nel tuo progetto, mentre i comandi barra inseriscono strutture più grandi come figure e tabelle senza che tu memorizzi il loro standard. Compila spesso, perché un nuovo errore nel testo che hai scritto due minuti fa è facile da individuare, mentre un errore che emerge dopo un pomeriggio di modifiche non lo è. SyncTeX collega insieme i due riquadri: fai clic su un paragrafo nel PDF per passare alla riga di origine o passa dall'origine al PDF, il che è più importante quando si rivedono pagine specifiche di un documento lungo.

## Citazioni man mano che procedi

Mantieni un file `.bib` nel progetto e cita con `\cite{...}` mentre scrivi, lasciando che il completamento automatico fornisca le chiavi. Aggiungere riferimenti al momento della scrittura è economico. Ricostruire tre settimane di segnaposto "citazione necessaria" non lo è. Se le voci provengono da Zotero o dall'esportazione di un editore, il [validatore BibTeX](/tools/bibtex-validator/) rileva i campi mancanti prima che emergano come riferimenti dall'aspetto strano. La pipeline completa è descritta in [Dalla chiave .bib alla citazione nel testo](/learn/add-citations/).

## Storia senza cerimonie

Oleafly può registrare automaticamente un commit Git dopo ogni compilazione riuscita, quindi la settimana lascia dietro di sé una sequenza temporale di stati di lavoro che puoi controllare o ripristinare. Quando vale la pena condividere la bozza, invia la cartella a un repository GitHub privato; [Metti il ​​foglio su GitHub](/learn/sync-with-github/) mostra la configurazione.

## Opzionale: l'assistente

Se aggiungi una chiave API per un provider ospitato o indirizzi l'app a Ollama locale, un assistente può rispondere a domande sul tuo progetto, proporre modifiche dietro le differenze di approvazione e compilare per verificare il proprio lavoro. Facoltativo: tutti i passaggi precedenti funzionano senza di esso. I dettagli sono in [Assistente all'interno di Oleafly](/learn/oleafly-ai/) e l'intento progettuale più ampio dietro l'app è in [Introduzione](/docs/getting-started/) e [Filosofia](/docs/philosophy/).