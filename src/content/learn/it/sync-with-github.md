---

title: "Metti il ​​documento su GitHub"
description: "Init, ignora i file aux, il repository privato, le abitudini che mantengono sane le fusioni del coautore."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Metti il ​​documento su GitHub

Un manoscritto LaTeX è costituito da testo semplice, il che lo rende ideale per Git. Ogni bozza diventa un commit a cui puoi tornare, ogni modifica è visibile come una differenza a livello di riga e GitHub ti fornisce una copia offsite oltre a un modo per i coautori di ottenere lo stato corrente. Niente di tutto ciò richiede Git avanzato. Un documento ha bisogno forse di cinque comandi, usati in modo coerente.

## La configurazione iniziale

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Eseguilo una volta nella cartella del progetto. Il passaggio `.gitignore` conta più di quanto sembri. Ogni compilazione rigenera i file `.aux`, `.log`, `.out`, `.toc` e `.synctex.gz` e il loro commit seppellisce le modifiche reali sotto il rumore della macchina e crea inutili conflitti di unione tra coautori. Tieni traccia solo di ciò che crei: i sorgenti `.tex`, il database `.bib`, le figure e qualsiasi file di classe o stile che la sede ti ha fornito. Anche il PDF è un prodotto di compilazione. La maggior parte dei team lo tralascia e lo ricostruisce localmente, sebbene allegarne uno a una versione contrassegnata sia un modo ragionevole per congelare una versione inviata. Mantieni il repository privato finché il lavoro non diventa pubblico. Un manoscritto inedito non è qualcosa da indicizzare.

## Abitudini che mantengono sani i coautori

Apporta a ogni commit una modifica logica, ad esempio "revisiona l'introduzione della sezione 3" o "aggiungi tabella di ablazione". La storia quindi viene letta come la storia del giornale e una cattiva modifica può essere annullata senza danni collaterali. Tira prima di iniziare una sessione di scrittura e spingi quando ti fermi. I conflitti di fusione crescono con il tempo che i rami trascorrono separati. Non forzare mai un ramo condiviso una volta che i coautori lo hanno tirato: questo riscrive la storia sotto i loro piedi. Mantieni gli artefatti binari di grandi dimensioni (set di dati, video) fuori dal repository cartaceo. Collegarsi a un archivio o utilizzare un repository di dati separato. Git memorizza ogni versione di ogni binario per sempre.

Un'abitudine specifica di LaTeX: scrivere una frase per riga di origine rende le differenze notevolmente più leggibili, perché una modifica di una parola viene visualizzata come una modifica di una riga anziché come un paragrafo ridisposto.

## Come si inserisce Oleafly

Ogni progetto Oleafly è una normale cartella su disco, quindi questi comandi funzionano senza modifiche. L'app può anche creare automaticamente un commit Git dopo ogni compilazione riuscita, il che ti offre una rete di sicurezza a grana fine tra i tuoi commit deliberati. Vedi [Cronologia Git](/docs/git-history/). Per i modelli di collaborazione basati su questo, incluso lo scambio di patch e la proprietà dei capitoli, vedere [Coautore senza cursore live](/learn/offline-collaboration/).