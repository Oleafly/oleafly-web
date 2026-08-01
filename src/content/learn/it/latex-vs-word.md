---

title: "Quando LaTeX batte Word (e quando no)"
description: "Scegli lo strumento per il documento: equazioni, documenti lunghi, citazioni o brevi bozze collaborative."
category: "open-the-loop"
order: 2
level: "beginner"
tags: ["basics"]
featured: true
updated: 2026-07-25
---

# Quando LaTeX batte Word (e quando no)

Nessuno dei due strumenti è universalmente migliore. Gli elaboratori di testi ottimizzano per la manipolazione diretta: quello che vedi è il documento. LaTeX ottimizza la struttura: descrivi il documento in testo semplice e un compilatore lo compone. Quale modello vince dipende dal documento che hai di fronte, non dalla lealtà tribale.

## Dove LaTeX guadagna la sua curva di apprendimento

Le equazioni sono il caso più chiaro. L'editor di equazioni di Word funziona per un problema di compiti a casa. Diventa doloroso attraverso un centinaio di equazioni numerate con riferimenti incrociati. In LaTeX, `\label` e `\ref` mantengono ogni numero corretto indipendentemente da quanto lo riorganizzi, cosa che la lezione sui [riferimenti incrociati](/learn/cross-references/) tratta in dettaglio.

I documenti strutturati lunghi si comportano allo stesso modo. Una tesi con capitoli in file separati, indici automatici e stili di intestazione coerenti è di routine in LaTeX e fragile in un elaboratore di testi. Le citazioni seguono lo stesso schema: un database BibTeX con poche centinaia di voci si riformatta per qualsiasi stile di rivista, dove gli elenchi di riferimenti gestiti manualmente si degradano rapidamente. Vedi [aggiungere citazioni](/learn/add-citations/) per la meccanica.

Due vantaggi più silenziosi si sommano nel tempo. Il sorgente LaTeX è testo semplice, quindi Git può differenziarlo e versionerlo in modo pulito, e la stessa sorgente produce lo stesso PDF anni dopo, su qualsiasi macchina, senza variazioni del layout.

## Dove Word o Google Docs sono la scelta giusta

Gli editor che utilizzano la manipolazione diretta vincono quando la collaborazione è il documento. Se i tuoi coautori non hanno competenze tecniche, lavorano solo sulle modifiche tracciate e hanno bisogno di commentare questo pomeriggio, un documento condiviso è la risposta pratica. Vincono anche per le lettere brevi una tantum, dove l'installazione di LaTeX costa più del rendimento della composizione, e per gli editori o i dipartimenti delle risorse umane che accettano solo file ".docx".

## Un ibrido che funziona nella pratica

Mantieni la fonte della verità in LaTeX ed esporta le bozze per le persone che ne hanno bisogno. Un PDF raccoglie i commenti; un DOCX generato da Pandoc soddisfa un requisito `.docx`. Le decisioni di questi round vengono riunite nei file `.tex`, che rimangono la versione canonica. La lezione su [lavorare con collaboratori basati su Word](/learn/collaborator-uses-word/) segue questo ciclo.

## La risposta breve

Usa LaTeX per tutto ciò che citerai, numererai, farai riferimenti incrociati o rivedrai nel corso dei mesi. Utilizzare un elaboratore di testi quando il costo sociale di LaTeX supera il vantaggio di impaginazione. Entrambi i giudizi sono legittimi e la maggior parte dei ricercatori utilizza entrambi gli strumenti in un dato anno.