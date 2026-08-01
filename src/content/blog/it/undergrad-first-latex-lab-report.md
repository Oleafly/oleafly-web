---

title: "Il tuo primo rapporto di laboratorio in LaTeX da studente universitario"
description: "Da zero a un rapporto di compilazione: modello, equazioni, figure, riferimenti e un percorso di compilazione che non richiede l'amministrazione manuale di TeX Live."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

Non è necessario padroneggiare LaTeX per completare una relazione di laboratorio. Hai bisogno di un modello, a
pochi comandi e un pulsante di compilazione che funziona fin dal primo giorno. Tutto il resto può
attendere che un corso successivo richieda un documento di tesi.

Questo è un percorso breve che dà priorità a un PDF pulito rispetto a una composizione perfetta.

## Se puoi, salta l'installazione multi-gigabyte

Un editor di ricerca desktop con un motore in bundle (ad esempio
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) ti porta a un PDF
senza amministrare TeX Live. Ottieni modelli, schede di errore sulla riga che
rotto, PDF accanto alla fonte con clic per saltare e cronologia dei file senza a
corso Git separato. Se il tuo istruttore richiede una distribuzione specifica o
Sul retro seguire gli appunti del corso. Altrimenti ottimizza per iniziare.

Anche gli editor cloud vanno bene quando il corso li utilizza già. L'obiettivo è un PDF
puntuale, non un'identità della toolchain.

## Ruba uno scheletro, quindi eliminane la metà

Inizia da un semplice modello di "articolo":

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Maggiori dettagli: [compila il tuo primo PDF](/learn/first-document/) e il
[riferimento rapido](/learn/cheatsheet/).

Elimina le sezioni che la tua rubrica non richiede. Non copiare una tesi composta da 40 pacchetti
preambolo "per ogni evenienza". I pacchetti extra sono il modo in cui i principianti ottengono errori che non possono
leggere.

## Equazioni per il laboratorio, non per un libro di testo

In linea: `$F = ma$`. Display:

```latex
\[
  v = v_0 + at
\]
```

Numera solo ciò che citi in seguito con `\eqref`. Se l'AT chiedesse incertezza,
inseriscilo in una frase o in una piccola tabella, non in un "allineamento" di dieci righe, cosa che non fai
capire ancora. Frazioni: `\frac{a}{b}`. Radici quadrate: `\sqrt{x}`.

Quando il registro di compilazione dice qualcosa di spaventoso, correggi solo il primo errore, quindi
ricompilare. Gli errori successivi sono spesso il rumore del primo.

## Una cifra, fatta bene

Esporta un grafico come PDF o PNG dal tuo strumento di analisi. Includilo con:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

Nel testo: `Figura~\ref{fig:vr} mostra...`. Didascalia sotto la figura. Etichetta
dopo la didascalia. Se la figura passa alla pagina sbagliata, riduci leggermente la larghezza
prima di combattere per un'ora sulle opzioni di posizionamento:
[posizionamento mobile](/learn/figure-wrong-position/).

## Tavoli senza sofferenza

Per poche righe è sufficiente un semplice `tabular`. Metti una didascalia sopra con "tabella".
+ `\didascalia`. Allinea i numeri in modo che l'AT possa scansionarli. Non ne hai bisogno
`booktabs` di qualità pubblicazione nel lab 1, ma evita la zuppa di linee verticali se puoi.

## Riferimenti senza un flusso di lavoro bibliografico di dottorato

Per tre citazioni funziona un elenco manuale:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Per di più, esporta un `.bib` da Google Scholar o Zotero e pulisci le chiavi in questo modo
sono brevi e leggibili. Le citazioni interrotte vengono stampate come `[?]`:
[eliminazione delle virgolette misteriose](/learn/citation-question-mark/).

Citare il manuale di laboratorio e il libro di testo nel modo richiesto dal corso (IEEE, APA-ish o
un semplice elenco numerato). Abbinare la rubrica batte abbinare un diario.

## Errori comuni per principianti

- Dimenticare `\usepackage{graphicx}` prima di `\includegraphics`
- Caratteri speciali come `%` e `_` nel testo senza escape
- Delimitatori matematici `$` non corrispondenti
- Nomi di file con spazi (`my plot.pdf`) inclusi nell'interruzione
- Modificare una cartella diversa da quella compilata

Rallenta, correggi la prima riga di registro, ricompila.

## Consegna il PDF e conserva la fonte

Invia ciò che richiede l'LMS (solitamente PDF). Conserva il `.tex` e le figure in a
cartella che avrai ancora al termine del corso. In futuro riutilizzerai lo scheletro
per il prossimo resoconto. Se il tuo editor conserva automaticamente la cronologia Git, anche
meglio: puoi recuperare una versione precedente all'eliminazione dell'equazione corretta.

## Una prima sessione di 90 minuti

Se inizi stasera:

1. Apri un modello o incolla lo scheletro sopra.
2. Compila il titolo, il nome e i titoli delle sezioni della rubrica.
3. Aggiungi un'equazione che già sai essere corretta.
4. Esporta un appezzamento; includerlo; didascalia; citarlo nei risultati.
5. Aggiungi due riferimenti come richiesto dal corso.
6. Compila finché il PDF non assomiglia a un rapporto, non a un articolo vuoto.

Fermati quando la rubrica è coperta. Non passare la notte sulle opzioni del pacchetto.

## Quando qualcosa si rompe

Leggi solo il primo errore. Correzioni comuni: `$` mancante, pacchetto mancante per
grafica, nome file errato, `}` extra. Salvare prima una copia di una versione di compilazione
grandi modifiche in modo da poter tornare indietro. Se il preambolo di un compagno di classe funziona per il corso,
prendere in prestito i pacchetti minimi utilizzati, non l'intero stack della tesi.

## Che aspetto ha il successo

Il PDF si apre, i margini sembrano ragionevoli, le figure hanno didascalie, le equazioni sì
leggibili e gli elementi della rubrica hanno un titolo chiaro. Questo è sufficiente per la prima volta
Rapporto di laboratorio LaTeX. La perfezione tipografica può attendere un documento che ne abbia effettivamente bisogno
esso.