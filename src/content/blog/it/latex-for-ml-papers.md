---

title: "LaTeX per documenti sull'apprendimento automatico senza problemi di notazione"
description: "Fogli di notazione, tabelle di ablazione, algoritmi, figure delle sessioni di formazione e Git accanto al documento dalla prima bozza di arXiv fino alla fotocamera."
date: 2026-06-18
tags: [machine-learning, research, math]
---

La maggior parte degli articoli di ML falliscono allo stesso modo in LaTeX: i calcoli vanno bene a pagina tre e
incoerente a pagina dodici. Una perdita è `L` in una sezione, `\mathcal{L}` in
un altro, e i vettori in grassetto compaiono solo quando l'autore se ne ricorda. Revisori
notare anche quando non commentano.

Questa è una guida pratica per gli studenti che scrivono articoli di workshop e conferenze
presentazioni e capitoli di tesi che condividono il DNA con il codice di formazione.

## Scegli un foglio di appunti il ​​primo giorno

Prima di scrivere un lavoro correlato, scrivi venti righe di macro:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Incolla quel blocco in ogni ramo del coautore. Quando un modello inventa un nuovo simbolo,
aggiungilo prima al foglio, quindi usalo. Il
[Lezione sulla notazione successiva dell'AI](/learn/ai-follow-notation/) è la stessa idea con a
modello linguistico in loop: il modello deve obbedire al foglio, non inventare caratteri.

L'anteprima matematica dal vivo in un editor di ricerca ti aiuta a catturare `\mathcal{L}` e
"L" non è lo stesso oggetto durante la digitazione.

## Tavoli che sopravvivono alla fotocamera

Le tabelle di ablazione crescono fino a scomparire dalla pagina. Preferisco `booktabs` con il n
regole verticali, "siunitx" per i decimali allineati e una didascalia che indica il
metrica e la suddivisione (ImageNet, CIFAR, in-domain vs OOD). Se la tabella si estende
pagine, usa subito `longtable` invece di ridurre il carattere a 7pt.

Un visual builder aiuta per la prima bozza: the
[generatore di tabelle](/tools/table-generator/) viene eseguito nel browser. Il tavolo finale
dovrebbe comunque denominare la metrica nella didascalia e definire ± come std o se.

Riporta i seed e gli intervalli degli iperparametri nelle tabelle dell'appendice quando la sede lo consente.
Le tabelle principali rimangono scansionabili.

## Algoritmi ed elenchi

Lo pseudocodice appartiene a "algorithm2e" o "algorithmicx", non a spaziatura fissa
paragrafo. I veri frammenti di formazione appartengono a "listings" o "minted" con a
lingua impostata in modo che i revisori possano sfogliare. Mantieni il documento principale breve; metti le configurazioni complete
nell'appendice o un collegamento al repository con un hash di commit.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Algoritmi numerici che citi. Non scaricare cinque pagine di PyTorch nel PDF.

## Figure da TensorBoard e matplotlib

Esporta PDF o SVG quando puoi. I PNG raster a 300 dpi vanno bene per l'interfaccia utente
screenshot, non per grafici a linee. Ritaglia gli spazi prima di "\includegraphics". Se a
float fugge alla sezione successiva, correggi le dimensioni e il posizionamento prima di combattere "[H]".
per un'ora: [posizionamento mobile](/learn/figure-wrong-position/).

Ablazioni multi-pannello: costruisci in TeX con `subcaption` o componi esternamente e
includere un PDF. Mantieni un colore coerente per i "nostri" tra le figure in modo da schiumare
impara la leggenda una volta.

## Lezioni di conferenza a due colonne

Le classi in stile NeurIPS, ICML, ICLR e CVPR modificano i margini e le regole di float.
Compila in anticipo contro la classe ufficiale. I limiti di pagina sono reali; non schiacciare
caratteri. Sposta prove e ablazioni aggiuntive nell'appendice o nel PDF supplementare quando
la chiamata lo consente.

## Lavori e citazioni correlati

Utilizza chiavi di citazione stabili ed esportazioni Scholar pulite. Convalida il `.bib`:
[Validatore BibTeX](/tools/bibtex-validator/). Cita il codice e i set di dati
dipendere da. L'anno dell'autore e il numero dipendono dalla sede; utilizzare il modello
stile, non un ibrido.

## Git accanto al foglio

Ogni modifica all'architettura dovrebbe essere un commit a cui puoi dare un nome. Trattare la carta e
il codice come lo stesso progetto, non due abitudini di backup separate.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) conserva il foglio
in un vero repository Git accanto a un editor sensibile al progetto con anteprima matematica dal vivo,
riferimenti tra file, completamento delle citazioni e SyncTeX PDF. Corrisponde al codice ML
già vive. Abbinalo al [cheatsheet](/learn/cheatsheet/) quando te ne dimentichi
sintassi entro una scadenza.

Contrassegna il commit che corrisponde al caricamento OpenReview o CMT. Lo vorrai
durante la replica.

## Confutazione e pronto per la fotocamera

I tempi di replica sono brevi. Conserva un ramo o una cartella per gli "esperimenti di confutazione"
in modo da non inquinare la fonte PDF inviata. La predisposizione per la fotocamera spesso consente un
pagina aggiuntiva; usatelo per chiarezza, non per scaricare ogni esecuzione fallita.

## Impatto e limitazioni più ampi

Anche quando la sede richiede un breve paragrafo sull’impatto sociale o sulle limitazioni,
scriverlo in un linguaggio semplice. LaTeX non salverà un paragrafo vago. Metti negativo
risultati che puoi visualizzare nell'appendice se il limite della pagina principale è limitato,
e dì che l'hai fatto nel testo principale in modo che i revisori non presumano che tu li abbia nascosti.

## Prima del caricamento

Controlla che il foglio delle annotazioni sia coerente tra le sezioni, lo sono le tabelle principali
leggibile con metriche denominate e ± definite e vengono citati algoritmi e figure
in ordine. Conferma che la classe ufficiale venga compilata entro il limite di pagina senza carattere
crimini, il file `.bib` è pulito con codice e dati citati, così come un hash di commit
registrato per il PDF caricato.

Gli esperimenti di ML sono già abbastanza rumorosi. Mantieni la notazione e le tabelle silenziose.