---

title: "Articoli di biologia e scienze della vita: figure, tavole multipannello e coautori"
description: "LaTeX pratico per il laboratorio umido e la biologia computazionale: figure multi-pannello, risoluzione, supplementi, notazione statistica e collaborazione senza sovrascriversi a vicenda."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

I manoscritti di scienze della vita sono in primo piano. I revisori sfogliano il piatto prima di loro
leggi la tua prosa, quindi la figura deve sostenere la richiesta senza agitare la mano
la didascalia. LaTeX gestisce questa multa se tratti le figure come di prima classe
file di progetto invece di qualcosa che incolli alle 2 del mattino prima del supplemento
scadenza.

I gruppi di laboratorio e di calcolo si trovano a dover affrontare gli stessi problemi: pannelli senza condivisione
barre di scala, artefatti JPEG sulle macchie, supplementi che non riescono a compilare e a
dozzina di coautori che modificano un paragrafo. Di seguito è riportato ciò che funziona realmente.

## Figure multipannello

I revisori si aspettano pannelli (a) (b) (c) sotto un'unica didascalia. Puoi:

1. Costruisci la lastra fuori TeX (Illustrator, Inkscape, Fiji Export) e rilasciala
   in un singolo PDF o PNG, oppure
2. Assemblare in TeX con `subcaption` quando ogni pannello è il proprio file:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Fare riferimento ai pannelli come Figura~\ref{fig:exp}a nel testo solo se è in stile journal
lo permette. Molte sedi preferiscono la "Figura 2A" con uno schema applicato
ovunque. Maggiori informazioni su questo modello:
[pannelli a, b, c](/learn/subfigures-abc/).

Nomina i file in modo coerente (`fig03_western_a.pdf`) in modo che nessuno inventi
`final_gel_NEW.png` la settimana di invio.

## Risoluzione, colore e formati di file

Conserva gli archivi di microscopia come TIFF o PDF ad alta risoluzione. Per il PDF cartaceo
stesso, utilizza grafica vettoriale per gli schemi e PNG/PDF con dpi sufficienti per
dati rasterizzati. Salta le annotazioni e i gel JPEG in linea. Artefatti di compressione
letta come scienza sciatta anche quando l'esperimento va bene.

Controlla le tariffe dei colori e le regole di stampa prima di progettare una tavolozza a sei colori
funziona solo sul monitor calibrato. Alcune riviste vogliono CMYK; altri si convertono
male senza chiedere. Quando richiedono versioni key.safe in scala di grigi
cifre, dategliele.

Metti le barre della scala e le unità di intensità sul pannello, non solo nella didascalia. Se
sopravvivono figure di rilayout di produzione e barre di scala incorporate; note di sola didascalia
spesso no.

## Schemi e pannelli dati

Mantenere il "fumetto del percorso" separato dalla "quantificazione della macchia".
I cartoni animati possono essere TikZ o grafica vettoriale esterna. I pannelli dati dovrebbero rimanere vicini
l'esportazione dell'analisi in modo da poterle rigenerare quando un revisore lo desidera
normalizzazione diversa. Annotare il percorso dello script di analisi nelle note di didascalia o a
supplemento di riproducibilità quando la rivista lo consente.

## Supplementi ancora in fase di compilazione

Tavoli giganti, gel extra e fotogrammi di film appartengono a un supplemento a parte
documento o un'appendice chiara. Alcune regole che risparmiano mal di testa:

Le etichette devono essere univoche se principale e supplementare condividono una compilazione. Se lo sono
progetti separati, scrivere "Figura S3" in testo semplice e non fare affidamento su `\ref`
tra i PDF. Tieni un breve elenco di quali affermazioni del testo principale puntano e cosa
integrare gli articoli, quindi nulla va alla deriva.

Un supplemento che non compila la settimana di invio è comunque tuo
problema, anche quando il PDF principale sembra pulito.

## Caos multiautore

Gli articoli di biologia hanno spesso molti coautori con diversi livelli di competenza LaTeX. Possedere
file per sezione (`results.tex`, `methods.tex`, `figs.tex`), unirli
Git e decidere chi mantiene il `.bib` (una persona o un gruppo Zotero condiviso
esportazione).

Una cartella di progetto locale è più facile da comprimere per un collaboratore rispetto a un cloud
progetto a cui perdono l'accesso dopo la laurea. La vera storia di Git batte la posta elettronica
allegati denominati `manuscript_JM_edits_FINAL.docx` che qualcuno riconverte
a TeX manualmente. Checkpoint dopo la compilazione riuscita; ripristinare quando una fusione
va storto; tenere un telecomando privato.

Se alcuni coautori modificano solo Word, esporta DOCX o PDF per loro e mantieni `.tex`
come fonte di verità. Vedi
[coautori che parlano solo Word](/learn/collaborator-uses-word/).

## Metodi e notazione statistica

Definisci le macro statistiche una volta in modo che i valori p non vengano visualizzati sia come `$p$` che come
`p=` nello stesso articolo:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Indicare il test, n e la correzione per confronti multipli nei metodi o nella tabella
note, non solo nella legenda di una figura che viene ritagliata in produzione. Denso
gli articoli beneficiano di un breve elenco di notazioni. Controllo referenze/citazioni in tempo reale a
l'editore di ricerca individua un `\ref` in un pannello eliminato prima che lo faccia il revisore.

## Didascalie che riportano l'affermazione

Una buona didascalia dice cosa è stato misurato, in quale sistema e cosa dice al lettore
dovrebbe notare. Evita "Vedi testo". Non eseguire il dump dei metodi nella didascalia that
appartengono alla sezione metodi. Le lettere del pannello (grassetto o parentesi) dovrebbero
abbinare lo stile della casa.

## Lista di controllo delle figure pre-invio

Prima di premere Invia, percorri le figure una volta:

- Ogni figura principale citata in ordine (o qualunque ordine consentito dalla rivista).
- Pannelli etichettati; barre di scala dove contano.
- Nessun pasticcio JPEG sui pannelli quantitativi.
- Compilazioni di supplementi; I numeri S non sono stati rimescolati.
- Politica sui colori controllata; dimensioni dei file entro i limiti del portale.
- Immagini e script sorgente ancora reperibili nell'archivio del progetto o del laboratorio.

## Western, gel e contrasto

Non elaborare eccessivamente le macchie per il PDF. Giornali e lettori cercano il contrasto
giochi. Conserva i file grezzi nell'archivio del laboratorio e spedisci i pannelli che corrispondono a ciò che
quantificazione utilizzata. Se riorganizzi i pannelli, aggiorna ogni pannello nel testo
lettera lo stesso giorno, non "più tardi".

## Film e supplementi interattivi

Quando il diario consente i film, ospitali nel modo in cui istruiscono e mettono a
ancora più didascalia nel PDF. Non dipendere da un collegamento cloud personale
muore dopo la laurea.

Le cifre sono la spina dorsale di questi articoli. LaTeX è solo la cornice. Assicurati
la cornice non è ciò che fallisce la sera prima della presentazione.