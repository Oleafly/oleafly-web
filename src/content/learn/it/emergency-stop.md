---

title: "Arresto di emergenza e discussione incontrollata"
description: "Interruzioni fatali dovute a estremità mancanti, parentesi graffe o inclusioni errate."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Arresto di emergenza e discussione in fuga

## Il sintomo

La compilazione muore definitivamente. Il registro termina con `! Arresto di emergenza." o mostra "Argomento in fuga?" seguito da un lungo tratto del tuo testo, spesso con una riga di accompagnamento come "File terminato durante la scansione con l'uso di \textbf" o "Paragrafo terminato prima che \foo fosse completato". A differenza della maggior parte degli errori LaTeX, non è presente alcun PDF e il numero di riga riportato spesso punta alla fine del file anziché all'errore reale.

## Perché succede

Entrambi i messaggi provengono dallo stesso problema: TeX ha iniziato a leggere qualcosa che deve essere chiuso e ha raggiunto la fine dell'input prima che arrivasse il token di chiusura. Quando scrivi `\textbf{`, TeX raccoglie tutto fino al corrispondente `}` come argomento. Se la parentesi graffa non arriva mai, TeX continua a ingoiare testo, attraverso paragrafi e sezioni, finché il file non si esaurisce. "Argomento in fuga" è TeX che ti mostra ciò che ha ingoiato. "Arresto di emergenza" significa che TeX si arrende perché non può continuare senza il pezzo mancante. Un `\end{document}` mancante, un ambiente non chiuso o un `\input` di un file che non esiste produce lo stesso stato terminale.

## Come trovare la posizione reale

Non fidarti del numero di linea; indica il punto in cui TeX ha esaurito gli input, non il punto in cui è iniziato lo squilibrio. Leggi invece il blocco "Argomento di fuga?" nel registro. Le prime parole del testo inghiottito ti dicono dove nel documento è iniziata la fuga, e la riga `File terminato durante la scansione uso di ...` nomina il comando il cui argomento non è mai stato chiuso. Cerca quel comando vicino al testo citato e conta le sue parentesi graffe.

Se il registro non è utile, esegui una ricerca binaria nel documento. Commenta la seconda metà del corpo (o avvolgila in `\iffalse ... \fi`) e ricompila. Se l'errore scompare, il problema è nella metà rimossa; continuare a dimezzare finché il paragrafo difettoso non viene isolato. Sembra rozzo, ma su un documento di grandi dimensioni trova un'unica parentesi graffa mancante in una manciata di compilazioni.

## I soliti noti

Cerca un `{` senza il suo `}` in prossimità di grassetto, corsivo, note a piè di pagina e didascalie, poiché questi comandi accettano parentesi argomentative digitate a mano. Controlla che ogni `\begin{...}` abbia un `\end{...}` corrispondente con lo stesso nome di ambiente. Conferma che il file termini con `\end{document}` e che ogni `\input` e `\include` nomini un file che esiste in quel percorso. Gli editor aiutano qui: Oleafly evidenzia le parentesi graffe e le coppie di ambienti corrispondenti durante la digitazione, il che ne rileva la maggior parte prima che il compilatore le veda.