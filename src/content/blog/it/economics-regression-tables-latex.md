---

title: "Economia e scienze sociali: tavole di regressione accettate dalle riviste"
description: "booktabs, threeparttable, siunitx stars, note sotto stime, abitudini biblatex e versioni di documenti di lavoro per economia, scienza politica e sociologia."
date: 2026-06-26
tags: [economics, social-science, tables]
---

La scienza sociale empirica vive e muore grazie ai tavoli. Un decimale disallineato o a
la stella di significato mancante può bruciare un ciclo di revisione e reinvio che non aveva nulla
a che fare con la tua strategia di identificazione. Le riviste si preoccupano quasi della leggibilità
tanto quanto i coefficienti.

Quello che segue è per gli studenti e le RA che esportano da Stata o R e poi puliscono
LaTeX a mano.

## booktabs non è facoltativo

Le regole verticali e le doppie linee orizzontali assomigliano a Word degli anni '90. Usa i tre
regole orizzontali da `booktabs`:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Vedi le [tabelle con tre regole](/learn/booktabs-beautiful/). Esportazione da R
(`modelsummary`, strumenti in stile `estout`, vecchio `stargazer`) o da Stata a LaTeX
frammenti, quindi pulisci tu stesso la riga di intestazione. Le intestazioni generate automaticamente sono
di solito troppo ampio o troppo criptico per il PDF finale.

## Note sotto la tabella, note non casuali

"threparttable" mantiene la didascalia, la tabella e le note con la stessa larghezza:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Metti la dimensione del campione, gli effetti fissi, le note SE raggruppate e la stella di significatività
leggenda qui. Non appendere una nota a piè di pagina su una singola cella che solo alcuni lettori
noterà. Le etichette dei pannelli (A/B) appartengono alla didascalia o alle regole centrali con chiaro
testo, non in una legenda in stile figura che non appare mai nel PDF.

## Colonne numeriche e stelle di significato

I tipi di colonna "siunitx" (`S`) si allineano sul punto decimale. Solo questo fa a
la tabella dei risultati sembra intenzionale. Le stelle interrompono colonne numeriche pure, quindi tu
di solito è necessario un formato personalizzato o una colonna di testo. Modelli comuni:

Riporta i coefficienti e gli SE su righe separate (standard in econ) o avvolgi le stelle
quindi l'allineamento funziona ancora (`0.012^{***}` con un tipo di colonna dedicato).

Sii coerente tra le tabelle: stesse soglie di stelle, stesso stile SE, stesso numero
di decimali per la stessa metrica. I revisori confrontano la Tabella 2 con la Tabella 3
scopo.

Una prima bozza visiva va bene. Il navigatore
[generatore di tabelle](/tools/table-generator/) può disegnare la struttura; la finale
table dovrebbe comunque passare attraverso "booktabs" e le tue note SE.

## Dal software di regressione al pronto per la fotocamera

Il ciclo tipico è simile a questo. Congelare lo script e il seed di stima. Esporta un
Frammento LaTeX o CSV di stime. Rilascialo in un guscio di tavolo con stalla
etichette (`tab:main`, `tab:robust`). Scrivi la didascalia in modo che uno schiumatoio lo sappia
variabile dipendente, campione e stimatore senza leggere le note due volte.
Compila, quindi correggi le caselle troppo piene tagliando le colonne; ruotare solo come ultimo
ricorrere.

Se una tabella è più lunga di una pagina, passa a "longtable" (o pannelli divisi)
prima della settimana di scadenza, non dopo che il giornale si è lamentato dei caratteri 7pt.

##Citazioni: autore-anno è il dialetto

La maggior parte delle sedi di economia e scienza politica prevedono l'anno dell'autore. "biblatex" con
`style=authoryear` (o lo stile del diario) è più facile a lungo termine che litigare
File ".bst". Se il laboratorio utilizza ancora `natbib`, va bene; semplicemente non mescolare
entrambi gli stack in un preambolo. Panoramica:
[BibTeX o biblatex](/learn/bibtex-vs-biblatex/).

Le chiavi dovrebbero essere stabili ("autore:anno:parola chiave"). Riesportazione da Zotero sotto
nuove chiavi a metà progetto è il modo in cui `\cite` interrompe la settimana di invio. Convalidare
il `.bib` per gli anni e i diari mancanti:
[Validatore BibTeX](/tools/bibtex-validator/).

## Documenti di lavoro e SSRN

Le versioni del documento di lavoro cambiano mensilmente. Mantieni la data del frontespizio in una macro:

```latex
\newcommand{\paperdate}{June 2026}
```

Aumentalo quando riesporti il ​​PDF. La storia di Git locale è più onesta di
"final_final_v7.pdf" su un'unità condivisa. Impegnati quando il tavolo principale è apparecchiato
compila; taggare o inviare un messaggio esplicito alla versione inviata.

Un editore di ricerca che tratta il progetto come un vero e proprio repository Git (checkpoints
dopo la compilazione, il ripristino, GitHub privato opzionale) corrisponde al lavoro empirico
già codice delle versioni. Il documento e gli script di stima non dovrebbero sopravvivere
con diverse abitudini di backup.

## Identificazione ed etica del tavolo (versione breve)

LaTeX non può correggere un progetto debole, ma può renderlo leggibile.
Indicare lo stimatore e il campione nella didascalia. Non nascondere il fatto
la colonna (3) rilascia metà del campione in una nota a piè di pagina che nessuno legge. Se mostri
tabelle di robustezza, mantengono lo stesso ordine delle variabili dipendenti della tabella principale
i lettori possono eseguire la scansione.

## Lista di controllo pre-invio

Cose che mordono le persone tardi:

- Tabelle a tre regole; nessuna regola verticale.
- Allineamento decimale; stelle coerenti e note SE.
- La didascalia indica il risultato, il campione, lo stimatore.
- Etichette stabili; il testo cita `\ref{tab:...}`.
- Lo stile della bibliografia corrisponde alla sede; `.bib` convalidato.
- La data del documento di lavoro e il commit Git corrispondono a ciò che hai caricato.

## Pacchetti di replica

Sempre più riviste vogliono codice e dati. Conserva gli script di esportazione delle tabelle accanto al foglio
repository (o collegato con un hash di commit). Quando un coefficiente cambia perché il
lo script di pulizia è stato modificato, rigenerare il frammento LaTeX e ripetere il commit di entrambi. A
una tabella che non può essere riprodotta è una responsabilità anche se sembra pulita.

## Videoproiettore per seminari

Riutilizza gli stessi frammenti "booktabs" nelle diapositive quando puoi o esporta PDF
ritagli delle tavole. Ricostruire i numeri a mano in un mazzo di diapositive è come
le diapositive del seminario non sono d'accordo con l'articolo.

Se le tabelle sono corrette, la strategia di identificazione verrà ascoltata in modo imparziale. Ottieni
sbagliati e passi un giro a discutere sulla formattazione.