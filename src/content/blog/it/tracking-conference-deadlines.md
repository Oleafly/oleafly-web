---

title: "Basta con le scadenze delle conferenze: AoE, abstract e conti alla rovescia"
description: "Perché le scadenze delle conferenze confondono tutti (AoE, registrazione degli abstract, date in movimento), come aiuta il set di dati aperto sulle scadenze ccf e come tenere un conto alla rovescia accanto al manoscritto."
date: 2026-07-21
tags: [conferences, deadlines]
---

Ogni ricercatore ha una storia su una scadenza che in realtà era di dodici ore
prima di quanto pensassero. Il documento era pronto. Il portale no. Il solito
i colpevoli sono i fusi orari, la registrazione astratta e le date che si sono spostate mentre nessuno
aggiornato il wiki del laboratorio.

Questa è una guida pratica per leggere i bandi, monitorare le sedi e
mantenendo il conto alla rovescia nel punto in cui scrivi effettivamente.

## AoE non è il tuo fuso orario

"Anywhere on Earth" (AoE) significa UTC-12: la scadenza scade quando è trascorsa
mezzanotte sul lato ovest della linea internazionale del cambio di data. Questo è generoso
rispetto a un mezzogiorno duro a New York, ma solo se converti correttamente.

Non fidarti di uno screenshot dell'app di calendario di qualcun altro. Converti da
convocazione ufficiale. Se il sito dice "23:59 AoE, 14 marzo", considera il 15 marzo mattina
La California è già in ritardo finché non hai effettuato tu stesso la conversione.

## La scadenza astratta è reale

Molti CS e sedi adiacenti richiedono un titolo registrato e un abstract di circa una settimana
prima della scadenza completa del documento. Manca la scadenza dell'abstract e del paper
la scadenza è irrilevante; il portale non ti consentirà di inviare.

Inserisci entrambe le date nella stessa serie di eventi del calendario: abstract, articolo, confutazione,
pronto per la fotocamera. I tempi di replica sono brevi. La fotocamera pronta spesso arriva durante un'altra
fretta della conferenza.

## Le scadenze si spostano

Estensioni e date di secondo turno distribuite su mailing list e feed social.
Il bando ufficiale (o il banner del portale di presentazione) è l'unica fonte degna di nota
confidando. Quando una data cambia, aggiorna il tuo tracker lo stesso giorno; stantio
i fogli di calcolo causano falsa calma.

## Il set di dati aperto che corregge il rilevamento

La comunità mantenuta
Il progetto [ccf-deadlines](https://github.com/ccfddl/ccf-deadlines) tiene traccia di centinaia
delle sedi come YAML revisionabile: scadenze, fusi orari, classifiche e collegamenti ufficiali,
Con licenza MIT. Poiché si tratta di dati e non di un singolo sito Web, chiunque può crearli
filtri, conti alla rovescia e ricerca sopra di esso.

Non includerà tutti i workshop nella tua nicchia. Per quelli, aggiungi ancora il file ai segnalibri
pagina ufficiale. Utilizza il set di dati per le sedi ricorrenti di grandi dimensioni in cui
la comunità ha già svolto il lavoro di raschiatura.

## Conto alla rovescia accanto al manoscritto

Un sito Web con scadenze separato aiuta solo se ti ricordi di aprirlo. L'utile
il posto per il conto alla rovescia è accanto al foglio che stai correndo per finire.

Pubblichiamo una [scheda delle scadenze in tempo reale](/deadlines/) gratuita sul set di dati aperto:
conti alla rovescia, gradi CCF e CORE, filtri di campo, ricerca, nessuna iscrizione. Il
[App desktop Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) mette
la stessa scheda con un clic dai tuoi progetti, funziona offline da un bundle
snapshot e aggiornamenti su richiesta. Quando sei nell'editor all'una di notte, dovresti
non è necessario un secondo profilo del browser per sapere se AoE è stasera o domani.

Nuovo nel processo? [Il ciclo di vita della scadenza](/learn/deadline-lifecycle/) copre
registrazione astratta, confutazioni e fotocamera pronta da zero.

## Un rituale di laboratorio che funziona

Quando qualcuno propone una sede, incolla il link ufficiale del CFP nel tracker
lo stesso giorno. Registra i tempi degli abstract e degli elaborati cartacei in AoE e nella zona locale del laboratorio.
Incaricare una persona di ricontrollare il portale la settimana prima (le date si spostano). Congelare
esperimenti importanti o affermazioni di teoremi abbastanza presto che la scrittura non è la cosa giusta
unico percorso per il PDF. Mantieni il documento sotto controllo della versione in modo che "l'invio
PDF" corrisponde a un commit, non a un nome file desktop.

## Scrivere con un punto fermo

Le scadenze non si preoccupano del lavoro correlato perfetto. Ridurre l'ambito: un'affermazione chiara,
tabelle che compilano, figure con didascalie, bibliografia che non riporta
"[?]". Convalidare anticipatamente il `.bib`
([Validatore BibTeX](/tools/bibtex-validator/)). Compila la classe pronta per la fotocamera
file giorni prima dell'apertura del portale, non ore.

Se utilizzi un editor di ricerca locale con compilazione automatica e checkpoint Git, utilizza
loro. Un float rotto alle 23:00 AoE è recuperabile se esiste la cronologia.

## Dopo l'invio

Archivia il PDF esatto, lo zip di origine e l'hash di commit. Prendere nota dell'ID di invio. Quando
arrivano le recensioni, vorrai il testo che hai effettivamente inviato, non il ramo
hai continuato a modificare "per ogni evenienza".

## Monitoraggio personale e di laboratorio

Gli individui possono vivere su un calendario più una tavola. I laboratori necessitano di un foglio condiviso o
canale con i nomi dei proprietari: chi invia cosa, abstract fatto (sì/no), PDF
congelato (sì/no). La persona che "pensava che qualcun altro si stesse sottomettendo" è a
bug del processo, non un bug del fuso orario.

## Gli strumenti non sono la scadenza

Un widget per il conto alla rovescia non scrive il lavoro correlato. Usa la tavola per rimuovere
incertezza, quindi proteggi i blocchi di scrittura sul calendario nello stesso modo in cui lo fai tu
proteggere gli esperimenti. Se l'elaborato non è compilabile 48 ore prima dell'
scadenza, ridurre l’ambito invece di inventare un nuovo modello.

La maggior parte delle scadenze non rispettate sono errori di processo. Converti tu stesso AoE, tratta l'abstract
la registrazione è vincolante e aggiorna il tuo tracker quando cambia la pagina ufficiale.
Tieni il conto alla rovescia accanto al manoscritto. I set di dati e le schede fanno scoperta
economico; il rituale è ancora tuo.