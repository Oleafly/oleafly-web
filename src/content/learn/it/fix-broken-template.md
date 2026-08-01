---

title: "File di lezioni universitarie che non verranno compilati"
description: "Triage: primo errore, motore, pacchetti obsoleti, ricerca binaria."
category: "long-form"
order: 6
level: "advanced"
tags: ["thesis", "errors"]
featured: false
updated: 2026-07-25
---

# File di lezioni universitarie che non verranno compilati

I modelli di tesi universitaria sono un tipo speciale di codice legacy. Uno studente laureato scrisse il file della classe quindici anni fa contro la distribuzione TeX dell'epoca, si laureò e lo lasciò congelato mentre l'ecosistema LaTeX andava avanti. Quando scarichi `universitythesis.cls` oggi e muore con una schermata di errori, la classe di solito non è tanto rotta quanto bloccata nel tempo. Le modalità di fallimento, tuttavia, sono prevedibili e un ordine di triage fisso ne risolve la maggior parte.

## Inizia solo con il primo errore

Un errore LaTeX si verifica a cascata: un comando non definito all'inizio della classe può produrre dozzine di errori a valle che non significano nulla. Scorri il log fino alla prima riga che inizia con `!`, correggilo e ricompila prima di leggere qualsiasi altra cosa. La ripetizione di questo ciclo spesso elimina un muro di errori intimidatorio in tre o quattro passaggi. Se il primo errore è un comando sconosciuto, [Sequenza di controllo non definita](/learn/unfine-control-sequence/) segue la diagnosi.

## Controlla il motore

Molti modelli presuppongono un motore specifico e falliscono in modo bizzarro con qualsiasi altro. Una classe che carica `fontspec` o imposta i font per nome richiede XeLaTeX o LuaLaTeX; una classe costruita attorno a primitive specifiche di `pdftex` potrebbe fallire con entrambe. Cerca un commento nella parte superiore del file della classe o una riga nelle istruzioni dell'università che nomina il motore desiderato e abbinalo prima di eseguire il debug di qualsiasi altra cosa. Le differenze sono riepilogate in [Quale motore per questo progetto](/learn/engines-compared/).

## Modernizza ciò che controlli

I vecchi modelli caricano pacchetti obsoleti i cui sostituti moderni sono già nella tua distribuzione, e la coppia poi litiga; [Pacchetti che combattono tra loro](/learn/package-conflitti/) elenca le combinazioni classiche. La strategia praticabile è lasciare intatto il file della classe, poiché i requisiti di formattazione dell'università risiedono lì, e modernizzare solo il proprio preambolo: rimuovere le righe `\usepackage` obsolete, caricare `hyperref` in ritardo ed evitare di ricaricare tutto ciò che la classe già carica.

## Ricerca binaria nel preambolo

Quando l'errore resiste all'ispezione, commenta la seconda metà del preambolo e ricompila. Se l'errore scompare, il trigger è nella metà commentata; ripristinarne la metà e ripetere. Una manciata di compilazioni isola la singola riga in errore, il che è molto più veloce del ragionamento su un preambolo che non hai scritto.

## Cerca prima di soffrire

Ogni studente di quell'università compila la stessa classe, quindi il tuo errore è quasi certamente già stato riscontrato prima. Cerca il messaggio di errore esatto insieme al nome del file della classe e controlla se l'università o lo studente successore mantiene un fork con patch su GitHub. Usare un fork mantenuto, quando ne esiste uno, è meglio che correggere da soli i bug noti.