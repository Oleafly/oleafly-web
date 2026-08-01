---

title: "Assistente all'interno di Oleafly"
description: "La tua chiave API, contesto del progetto, differenze, modifiche compatibili con la compilazione."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Assistente all'interno di Oleafly

Oleafly include un assistente AI che funziona all'interno del tuo progetto anziché in una finestra di chat separata. A differenza di incollare LaTeX in un chatbot generico, funziona sulla tua chiave API, può leggere il progetto che sta modificando e mostra ogni modifica proposta per l'approvazione prima di toccare i tuoi file.

## La tua chiave, il tuo provider

L'assistente non effettua chiamate di modelle attraverso i server di Oleafly. Fornisci una chiave API per uno dei nove provider ospitati supportati oppure indirizzi l'app a un'installazione Ollama locale e utilizzi un modello in esecuzione sul tuo hardware. Le richieste vanno dal tuo computer al fornitore che hai configurato, secondo i termini di quel fornitore, e paghi direttamente il fornitore alle sue tariffe. Quale modello scegliere e come impostare una chiave o un Ollama sono trattati in [Configurazione AI](/docs/ai-setup/).

## Cosa può vedere l'assistente

Quando fai una domanda o richiedi una modifica, l'assistente lavora da una mappa del tuo progetto e legge i file rilevanti per la richiesta, come il capitolo che stai modificando, il preambolo che definisce le tue macro o il file `.bib` dietro una domanda di citazione. Questo contesto è il motivo per cui può rispondere "perché la Figura 3 passa alla pagina successiva" sulla Figura 3 effettiva e perché le sue modifiche tendono a corrispondere alla notazione e ai comandi già utilizzati dal documento.

## Modifiche della tua recensione, non modifiche che avvengono e basta

L'assistente non scrive mai direttamente nei tuoi file. Propone modifiche come differenze, con le linee rimosse in rosso e le linee aggiunte in verde, e tu le accetti o rifiuti ciascuna. Prima che venga applicata qualsiasi modifica accettata, Oleafly registra un checkpoint Git, quindi lo stato prima della modifica è sempre a un passo dalla [cronologia Git](/docs/git-history/). L'eliminazione di un file viene trattata separatamente e richiede sempre la tua esplicita conferma, qualunque altra cosa stia facendo l'assistente.

## Chiudo il ciclo con il compilatore

Poiché l'assistente vive vicino alla build, può verificare il proprio lavoro. Dopo una modifica può attivare una compilazione, leggere il registro e, se la modifica aveva lo scopo di correggere un errore, verificare se tale errore è scomparso. Può anche leggere il testo del PDF compilato, in modo da poter confermare che una modifica richiesta venga effettivamente visualizzata nell'output. I modelli continuano a produrre LaTeX errati, quindi leggi ciò che accetti. Il lato positivo è che i suggerimenti non funzionanti tendono a essere catturati e corretti all'interno del ciclo piuttosto che da te in un secondo momento.

I meccanismi quotidiani si trovano nei documenti di [chat](/docs/ai-chat/) e [modifica in linea](/docs/ai-inline-edit/) e [Una settimana di scrittura in Oleafly](/learn/oleafly-workflow/) mostra dove si inserisce l'assistente in un ciclo di scrittura completo.