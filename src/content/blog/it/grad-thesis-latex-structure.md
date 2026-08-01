---

title: "Struttura una tesi di laurea in LaTeX prima che si scateni il panico"
description: "Aspetti iniziali, capitoli inclusi, acronimi, file delle lezioni universitarie, velocità di compilazione e cronologia Git per studenti di master e dottorato."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

La tesi è un lungo documento con la burocrazia allegata. LaTeX gestisce il lungo
carta bene. La burocrazia è solitamente un file di classe universitario scritto nel 2009
e testato l'ultima volta su un TeX Live diverso.

Inizia la struttura in anticipo, anche se i capitoli sono ancora vuoti. Spostamento di contenuti tra
file nell'ultimo mese è il modo in cui i riferimenti incrociati e i percorsi delle figure si interrompono.

## Accetta il file della classe, recinta il resto

Inserisci il file `.cls` dell'università (e i file `.bst`/logo richiesti) nel progetto.
Non riscrivere la classe. Inserisci le tue macro, i pacchetti e il contenuto dei capitoli
file che controlli:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Se la classe si interrompe con un motore moderno, esegui il triage con
[file delle lezioni universitarie che non verranno compilati](/learn/fix-broken-template/).
Documentare quale motore è accettato dall'ufficio tesi (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) prima di investire in `fontspec`.

## Argomento principale che le commissioni si aspettano

Numeri di pagina romani per abstract, dedica, ringraziamenti, sommario, elenchi di
figure/tabelle; arabo per i capitoli principali. Le lezioni di libri/report espongono
`\frontmatter` / `\mainmatter`; i modelli basati su articoli necessitano del manuale
`\numerazione delle pagine`. Guida:
[romano poi arabo](/learn/front-matter-page-numbers/).

Il contenuto del frontespizio spesso deve corrispondere a un campione di Word della scuola di specializzazione.
Copia esattamente la dicitura. La creatività qui fa sì che il PDF venga rifiutato da a
lista di controllo.

## Capitoli come file

Una radice, molti includono:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Possiedi tu stesso i capitoli anche quando i coautori aiutano su articoli che alimentano la tesi.
Mantieni le figure in "figure/capitolo3/" in modo che i percorsi rimangano stabili quando riordini.
Utilizzare `\includeonly{capitoli/metodi}` durante la stesura di tesi complete
non sono il costo di ogni modifica dell'equazione:
[file di capitoli divisi](/learn/file-di-capitoli/).

Le etichette dovrebbero essere univoche in tutto il progetto (`eq:ch3-main`, non `eq:main` in
ogni file). Viste della struttura a livello di progetto e guida per il controllo dei riferimenti in tempo reale su a
Albero di 200 pagine.

## Acronimi e simboli

I pacchetti di glossari sono potenti e pignoli. Per molte tesi, una manutenzione manuale
è sufficiente l'elenco dei simboli nella parte introduttiva. Se hai bisogno dell'espansione automatica
acronimi, pianifica un giorno per imparare `glossari-extra` prima della settimana di
sottomissione, non durante essa.

Definisci le macro matematiche in `macros.tex` e tratta quel file come una legge condivisa. Notazione
che va alla deriva tra il capitolo 2 e il capitolo 5 è un dono per un esaminatore pedante.

## Bibliografia

Un `.bib` per l'intera tesi, oppure un piccolo insieme riunito con cura. Chiavi stabili.
Convalida prima del soft-bound:
[Validatore BibTeX](/tools/bibtex-validator/). Abbina lo stile al dipartimento
vuole (stili umanistici numerici, autore-anno, note a piè di pagina). Non mescolare
biblatex e il classico BibTeX vengono raggruppati in un unico preambolo.

## Velocità

La compilazione completa della tesi diventa lenta. Modalità bozza per figure, `\includeonly` e
TikZ esternalizza l'acquisto di ore indietro. Note:
[attesa più breve per il PDF](/learn/speed-up-compilation/).

Mantieni un rituale di "compilazione completa" settimanale in modo da vedere ancora errori tra capitoli
presto.

## Il backup non è la stessa cosa della cronologia

Una copia Dropbox è un backup. Git è la storia di come l'argomento è cambiato.
Impegnarsi quando un capitolo viene compilato. Invia a un GitHub privato o GitLab remoto.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) inizializza un
repository reale per progetto, checkpoint dopo compilazioni riuscite e modifiche inattive,
e ripristina con un clic, accanto alle visualizzazioni della struttura a livello di progetto e a SyncTeX
che funzionano ancora tra i file dei capitoli. Ciò rende l’abitudine più difficile da ignorare.
Puoi ottenere la stessa disciplina con qualsiasi editor e Git attento; la tesi
non dovrebbe dipendere dal ricordarsi di `git init` nel diciottesimo mese.

## Circuiti di feedback del comitato

Esporta PDF per i lettori che non saranno open source. Tieni traccia dei commenti nei problemi o
un documento condiviso, ma applica le modifiche in TeX. Quando un membro del comitato restituisce a
PDF di markup scansionato, assegna un nome al file con data e versione in modo da sapere quale
commit di origine a cui fa riferimento.

## Lista di controllo con rilegatura morbida e rigida

Prima di stampare o depositare:

- Il file della classe e il motore corrispondono alle regole dell'ufficio tesi.
- Corretta numerazione delle pagine del frontespizio; pagina delle firme presente se richiesta.
- Tutti i `\ref`/`\cite` vengono risolti; niente "[?]".
- Figure e tabelle elencate se richieste; didascalie coerenti.
- I margini e la dimensione del carattere superano la lista di controllo PDF (stampa una pagina di prova).
- Sorgente + PDF + hash di commit archiviato dopo il deposito.

## Figure, tabelle e pagine "elenco delle".

Molti uffici tesi richiedono un elenco di figure e tabelle. Le didascalie devono essere
coerente e non scaricare l'intera sezione dei metodi in una didascalia di 20 righe. Utilizzare
titoli brevi per gli elenchi e didascalie esplicative più lunghe nel corpo dell'eventuale
la classe supporta brevi didascalie opzionali.

## Plagio e pubblicazioni precedenti

Se i capitoli remixano articoli pubblicati, seguire le regole universitarie sull'inclusione
e il permesso del coautore. Conserva il PDF accettato di ogni articolo precedente e la tesi
capitolo nel controllo della versione con una nota su cosa è cambiato (notazione, estensione
esperimenti, introduzione unificata).

## Inizia questo mese, non il mese in cui scrivi

Crea lo scheletro quando proponi lo schema. Capitoli vuoti che si compilano
contare come progresso. La maggior parte del panico in fase avanzata è dovuto al debito strutturale e ad un testardo
file di classe, non una lacuna nella scienza. Paga quel debito in anticipo.