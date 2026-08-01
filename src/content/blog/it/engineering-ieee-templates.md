---

title: "Studenti di ingegneria: modelli IEEE e ACM senza fine settimana di dolore"
description: "Inizia dal file di classe reale, sopravvivi a float ed equazioni a due colonne, ottieni i riferimenti corretti e versione del documento prima che sia pronto per la fotocamera."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

I modelli IEEE e ACM non sono decorazioni opzionali. Sono la sottomissione
formato. Partendo da un zip casuale che qualcuno ha ricaricato tre anni fa ecco come
passi la notte prima della scadenza a rinominare i caratteri e a rincorrerli
"sequenza di controllo indefinita" in una classe che non avresti mai voluto modificare.

Questo è per progetti di corsi, documenti di progettazione senior e prima conferenza
sottomissioni.

## Inizia dalla classe ufficiale

Scarica la lezione e l'esempio dalla società o dal sito della conferenza
*quest'anno*. Inserisci `.cls`, qualsiasi `.bst` e l'esempio `.tex` nel tuo progetto
radice. Compila una volta prima di scrivere una singola frase originale in modo da conoscere il
l'ambiente funziona.

La [galleria modelli](/templates/) di Oleafly e l'installazione gratuita dell'app lo completano
traccia le sedi comuni (IEEE, ACM e amici), quindi compila con il bundle
motore e individuare prima i riferimenti e le citazioni non funzionanti nell'editor del progetto
pronto per la fotocamera. Ancora da verificare rispetto al call for papers di quell'anno: colonna
conteggio, limite di pagine e modifica dello stile della bibliografia.

Se la conferenza fornisce una classe modificata, utilizzare la loro, non un IEEEtran generico
dalla memoria.

## Regole float a due colonne

Nella modalità a due colonne, le cifre larghe utilizzano `figure*` e spesso appaiono solo nella parte inferiore
parte superiore di una pagina. Posiziona il float vicino al primo riferimento e imposta la larghezza su
`\columnwidth` o `\textwidth` apposta. Le sottofigure affiancate richiedono attenzione
larghezze o traboccano nel margine.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Se un carro fugge a tre pagine di distanza, riducilo o dividi i pannelli prima di combattere
`[H]` per un'ora: [posizionamento mobile](/learn/figure-wrong-position/).

## Equazioni in colonne strette

Le derivazioni lunghe si interrompono in "\columnwidth". Utilizza "multilinea" o "dividi" oppure sposta
la derivazione in appendice. Non ridurre il carattere dell'equazione fino alla linea
è illeggibile; avviso dei revisori. Numero solo le equazioni che citi effettivamente.

Gli algoritmi appartengono agli ambienti `algorithm` / `algorithmic` dimensionati per
colonna, non screenshot di un IDE.

## Riferimenti

Gli stili numerici IEEE e gli stili ACM non sono d'accordo sui dettagli. Utilizza la bibliografia
stile con cui viene fornito il modello. Non inventare un ibrido tra autore-anno e
numeri di parentesi.

Convalida il `.bib` per i campi mancanti prima che la fotocamera sia pronta:
[Validatore BibTeX](/tools/bibtex-validator/). Le esportazioni degli studiosi sono caotiche; pulito
chiavi ("autore:anno:parola chiave") e correggere i titoli che arrivano TUTTO IN MAIUSCOLO.

Citare set di dati e software quando la sede lo prevede. Un DOI mancante è più semplice
risolvere ora piuttosto che nella finestra "Aggiornamento pronto per la fotocamera" del portale.

## Limiti di pagina senza crimini

I limiti di pagina sono reali. Non schiacciare i margini sotto il modello, impostarlo
`\scriptsize` per l'intera sezione dei risultati oppure nascondi il testo all'interno di cifre enormi.
Taglia il contenuto. Sposta prove e grafici aggiuntivi in un supplemento o in un arXiv esteso
versione se la chiamata lo consente. Mantieni leggibile l'invio. Lista di controllo più lunga:
[limiti di pagina senza crimini](/learn/page-limits-without-crimes/).

## Il controllo della versione ora fa parte del rapporto di laboratorio

Entrambi i progetti senior e gli articoli di conferenza beneficiano di impegni successivi a ciascuno
compilazione riuscita. Un editore di ricerca come
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) mantiene il vero Git
accanto a PDF, SyncTeX e diagnostica in tempo reale in modo da non spedire zip
file denominati "submission_really_final.zip". I telecomandi privati restano inediti
lavorare su GitHub pubblico finché le policy non lo consentono.

Tagga o invia un messaggio all'esatto commit che hai caricato sul portale.

## Flussi di lavoro del team

Sezioni proprie per studente. Una persona possiede il `.bib` e il file della classe. Unisci
tramite richieste pull se il gruppo è abbastanza grande. Compila il PDF completo su a
programmare in modo che l'integrazione non avvenga solo la sera prima.

Se un compagno di squadra modifica solo Word, esporta per lui e mantieni TeX come sorgente:
[coautori che parlano solo Word](/learn/collaborator-uses-word/).

## Settimana pronta per la fotocamera

Le istruzioni pronte per la fotocamera spesso differiscono dal formato di revisione, quindi scaricale nuovamente
loro. Aggiorna i moduli di blocco dell'autore, finanziamento e copyright IEEE/ACM come
richiesto. Ricompilare con le opzioni della classe finale (spesso diverse da
revisione). Controlla ogni cifra per dpi e caratteri; incorporare i caratteri nel PDF se il
il portale lo richiede. Carica quindi il PDF e qualsiasi sorgente zip richiesta dal portale
archiviarli entrambi.

## Blocco autore e affiliazioni

I blocchi degli autori IEEE/ACM sono pignoli: punteggi di contributo uguali, multipli
affiliazioni, grazie agli enti finanziatori. Copia l'autore del file di esempio
markup e sostituisci il testo con attenzione. Inventare il tuo stack `\thanks` è un
fonte comune di caselle insufficienti e virgole mancanti nel PDF.

## Revisione cieca

Se la chiamata è in doppio cieco, elimina i nomi, i finanziamenti che identificano il laboratorio e
autocitazioni che dicono "nel nostro lavoro precedente". Riattivali per la fotocamera pronta.
Mantieni un'opzione di classe "cieca" o un piccolo file di commutazione in modo da non apportare modifiche manuali
identità in sei luoghi.

## In conclusione

Inizia dalla classe ufficiale, rispetta il layout a due colonne e abbina il file
stile della bibliografia con cui viene fornito il modello. Versione tutto. Il
il contenuto ingegneristico è già abbastanza difficile senza un modello contraffatto del 2019.