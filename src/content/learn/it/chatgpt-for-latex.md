---

title: "Modelli di prompt per la compilazione di TeX"
description: "Invia il preambolo, richiedi un diff, compila sempre la risposta."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Prompt dei modelli per la compilazione di TeX

Chiedi un modello di chat per LaTeX e di solito otterrai un codice che sembra corretto e non viene compilato nel tuo documento. Il modello non sa quale classe usi, quali pacchetti carichi o quali macro hai definito, quindi risponde per qualche documento generico che non è tuo. L'output quindi muore con pacchetti mancanti o definizioni contrastanti nel momento in cui lo incolli. La maggior parte di ciò è evitabile con tre abitudini di suggerimento, più una regola dura: compilare prima di fidarsi.

## Invia il preambolo

Il tuo preambolo è il contesto che manca al modello. Incollatelo, o almeno la riga `\documentclass` e la lista `\usepackage`, e chiedete "un frammento che venga compilato sotto questo preambolo". Questa abitudine blocca l'errore più comune: la risposta dipende silenziosamente da `tikz`, `siunitx` o da qualche altro pacchetto che non hai mai caricato. Inoltre, indirizza il modello verso i comandi effettivamente forniti dalla configurazione. Se il tuo progetto definisce macro, includi anche quelle, per i motivi trattati in [Dai al modello la tua tabella dei simboli](/learn/ai-follow-notation/).

## Chiedi da cosa dipende la risposta

Aggiungi una richiesta permanente: "Se il tuo codice necessita di un pacchetto che non ho caricato, elencalo esplicitamente all'inizio della tua risposta." Ciò trasforma le dipendenze nascoste in una lista di controllo visibile. Quando la risposta nomina un pacchetto, decidi se aggiungerlo, piuttosto che scoprire la dipendenza come errore "Sequenza di controllo non definita" tre compilazioni successive. L'errore e la sua diagnosi sono trattati in [Sequenza di controllo non definita](/learn/unfine-control-sequence/).

## Chiedi un differenziale, non una riscrittura

Quando desideri modificare il testo esistente, incolla lo snippet pertinente più piccolo e chiedi al modello di modificare solo ciò che richiede la richiesta, indicando cosa è cambiato. Dato un intero file, i modelli riscrivono liberamente: riformattano i paragrafi intatti, riordinano le righe del preambolo e occasionalmente lasciano cadere qualcosa sul pavimento. Il vero cambiamento scompare nella zangola. Una modifica minima e descritta è quella che puoi effettivamente rivedere. All'interno di Oleafly, l'assistente impone questa forma per te proponendo ogni modifica come un diff rosso/verde che approvi riga per riga, come descritto in [Assistente all'interno di Oleafly](/learn/oleafly-ai/).

## Compila prima di fidarti

Non spedire mai LaTeX che non hai compilato, non importa quanto sia plausibile. Incolla il suggerimento nel tuo documento, compila e leggi il primo errore, se presente. Restituire il messaggio di errore al modello, insieme allo snippet incriminato, di solito produce un secondo tentativo funzionante. Mantieni il progetto sotto Git in modo che qualsiasi modifica assistita dal modello possa essere ripristinata in un unico comando, una configurazione trattata in [Mettere il documento su GitHub](/learn/sync-with-github/). Il modello propone; il compilatore dispone.