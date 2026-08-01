---

title: "Coautore senza cursore attivo"
description: "Patch, cartelle condivise più Git e possesso di file di capitoli separati."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Coautore senza cursore attivo

L'editing collaborativo in tempo reale, in cui si osserva il movimento del cursore di un coautore, è il modello venduto dagli editor cloud. Molti buoni documenti vengono scritti senza di essa. Quando gli autori lavorano localmente, la collaborazione asincrona basata su Git è il modello affidabile: ogni persona modifica sul proprio computer e le modifiche vengono unite deliberatamente anziché carattere per carattere. Richiede un po' più di coordinamento e viene ripagato con il lavoro offline, la cronologia completa e nessuna dipendenza dal server di nessuno.

## Git come spina dorsale

La configurazione standard è un repository condiviso, in genere su GitHub, da cui tutti estraggono e a cui inviano. Ogni autore lavora in sessioni: pull dell'ultimo stato, scrivi, commit, push. Poiché LaTeX è testo semplice, Git unisce automaticamente le modifiche parallele a diverse parti del documento e l'installazione richiede pochi minuti. [Metti il ​​documento su GitHub](/learn/sync-with-github/) lo copre. Quando un collaboratore non può o non vuole utilizzare un host Git, le patch colmano il vuoto: `git format-patch` trasforma i commit in piccoli file che puoi inviare via email e il destinatario li applica con `git am`, mantenendo intatte la paternità e la cronologia. È un vecchio flusso di lavoro e funziona ancora ovunque ci sia la posta elettronica.

Un ibrido funziona anche quando un coautore insiste su una cartella sincronizzata: mantieni la copia condivisa in Dropbox o Syncthing per comodità, ma lascia che una persona mantenga la cronologia Git ed esegua le unioni. Non indirizzare i checkout Git live di due persone nella stessa cartella sincronizzata, perché i conflitti di sincronizzazione all'interno dei repository corrotti della directory `.git`.

## Dividere il documento per file

Le unioni diventano rare quando le persone toccano raramente lo stesso file. Dividi il manoscritto in modo che ogni capitolo o sezione risieda nel proprio file, estratto da un sottile `main.tex` con `\input{chapters/methods}`. I meccanismi sono in [Dividi un documento in file](/learn/split-chapter-files/). Quindi assegna la proprietà: ogni coautore disegna i propri file e un integratore gestisce il preambolo, l'unione e la lettura finale per coerenza di notazione e tono. Ciò rispecchia il modo in cui i team software evitano di intralciarsi a vicenda e funziona per gli stessi motivi.

## Cosa effettivamente va storto

La modalità di errore da evitare è che due persone modifichino lo stesso paragrafo nella stessa finestra temporale. Git lo contrassegnerà come conflitto, e i conflitti LaTeX sono leggibili ma noiosi da risolvere, quindi la soluzione più economica è social: un breve messaggio che dice "Oggi sono nell'introduzione" li previene quasi tutti. Due abitudini di scrittura riducono il resto. Mantieni una frase per riga di origine, in modo che le modifiche parallele alle frasi vicine non si scontrino affatto, e tira immediatamente prima di ogni sessione di scrittura in modo da modificare sempre il testo più recente.