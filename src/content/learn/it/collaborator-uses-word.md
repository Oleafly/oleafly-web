---

title: "Coautori che parlano solo Word"
description: "Mantieni .tex come fonte di verità mentre scambi PDF o DOCX per commenti."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Coautori che parlano solo Word

Le collaborazioni con strumenti misti sono comuni: tu scrivi l'articolo in LaTeX e un coautore, consulente o collaboratore clinico lavora solo in Microsoft Word. Niente si converte perfettamente tra i due formati. Concordare subito quale file sia il vero documento, quindi impostare una routine per spostare il feedback attraverso il divario senza perdere il lavoro.

## Una fonte di verità

Decidi subito che i file `.tex` sono canonici e tutto il resto è una copia derivata per la revisione. Nel momento in cui esistono due "versioni correnti" in due formati, le modifiche di qualcuno si perdono e riconciliare a occhio un file Word con un file LaTeX è un lavoro miserabile. Secondo questo accordo il tuo lavoro è la composizione e l'integrazione. Il lavoro del tuo coautore è contenuto e commenti, forniti con qualunque strumento preferisca.

## Scegli l'esportazione in base al tipo di feedback

Per la lettura e commenti di alto livello inviare il PDF compilato. Ogni utente di Word può aprire un PDF e gli strumenti di annotazione in qualsiasi lettore PDF coprono le note a margine e le evidenziazioni. L'applicazione manuale del feedback ti consente di avere il pieno controllo della fonte.

Quando il coautore deve proporre riscritture a livello di frase con modifiche tracciate, esporta un DOCX. Pandoc converte LaTeX in Word abbastanza bene per scopi di revisione, e Oleafly ha l'esportazione DOCX incorporata. Aspettatevi che la conversione sia approssimativa: equazioni, riferimenti incrociati e posizionamento delle figure degradano, e dovreste dirlo in anticipo in modo che nessuno segnali problemi di layout in una copia usa e getta.

## La sessione di unione

Il feedback in un `.docx` deve ritornare manualmente nel `.tex`. Trattalo come un'attività pianificata piuttosto che come un flusso continuo: raccogli le modifiche tracciate dal coautore, apri il file Word e il sorgente LaTeX fianco a fianco e applica le modifiche accettate una per una, impegnandoti in Git man mano che procedi in modo che ogni round di feedback sia un impegno. Una regola mantiene tutto ciò praticabile: ogni ciclo di revisione inizia da una nuova esportazione della fonte corrente. Non lasciare mai che lo stesso file Word sopravviva in più round, perché biforca silenziosamente la carta.

## Quando la bozza inizia in Word

A volte il flusso si inverte: il coautore scrive la prima bozza in Word e tu ti occupi dell'impaginazione. Convertilo una volta, presto. Oleafly importa `.docx` in un progetto LaTeX e pandoc fa lo stesso sulla riga di comando. Da quel momento in poi il `.tex` è canonico e si applica la routine di cui sopra. Per la struttura di controllo della versione che rende tutto questo recuperabile, vedere [Mettere il documento su GitHub](/learn/sync-with-github/).