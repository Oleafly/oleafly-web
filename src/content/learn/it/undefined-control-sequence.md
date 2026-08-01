---

title: "Sequenza di controllo non definita"
description: "Nomi di comandi sconosciuti: errori di battitura, pacchetti mancanti, motore sbagliato."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Sequenza di controllo non definita

## Il sintomo

La compilazione termina con `! Sequenza di controllo non definita.` Il registro mostra quindi la riga in cui è avvenuto, spezzata in due: tutto ciò che TeX aveva letto fino al comando incriminato incluso su una riga, e il resto della riga sorgente sotto di essa. L'ultimo segno sulla riga superiore è il comando che TeX non ha riconosciuto, il che rende questo uno degli errori più facili da individuare con precisione.

## Perché succede

Una sequenza di controllo è tutto ciò che inizia con una barra rovesciata. TeX non ha un vocabolario fisso: i comandi esistono solo perché li hanno definiti il ​​kernel, la classe del documento, un pacchetto o il tuo `\newcommand`. Quando TeX legge una barra rovesciata seguita da un nome che nulla ha definito, non riesce a indovinare cosa intendi e si ferma. L'errore non riguarda mai il comando "sbagliato" in generale. Si tratta del fatto che quel nome è sconosciuto in questo documento, a questo punto, sotto questo motore.

## Risolvilo in tre controlli

Controlla prima l'ortografia. `\texbf` invece di `\textbf`, `\lable` invece di `\label` o uno spazio vagante che divide un nome in due account nella maggior parte dei casi. Il numero di riga del registro ti porta direttamente all'errore di battitura.

Se l'ortografia è corretta, probabilmente manca il pacchetto che lo definisce. `\includegraphics` non fa nulla senza `\usepackage{graphicx}`, `\toprule` necessita di `booktabs` e `\SI` necessita di `siunitx`. Questo è più duro quando copi uno snippet da un altro documento o dalla risposta di un modello: il corpo del testo è arrivato, la riga di preambolo no. Trova quale pacchetto definisce un comando in [Ogni comando spiegato](/learn/ogni-comando-spiegato/), aggiungi la riga `\usepackage` e ricompila. Se il pacchetto stesso non è installato, vedere [Installare un pacchetto mancante](/learn/install-missing-package/).

Se il pacchetto viene caricato e l'errore persiste, sospetta il motore. Alcuni comandi esistono solo sotto un particolare motore: `\fontspec` e i suoi parenti richiedono XeLaTeX o LuaLaTeX e moriranno sotto pdfLaTeX esattamente con questo errore. I modelli che specificano un motore nella loro documentazione solitamente lo fanno per questo motivo. [Quale motore per questo progetto](/learn/engines-compared/) spiega le differenze.

## Due stranezze che vale la pena conoscere

L'ordine è importante: un comando utilizzato prima della riga `\usepackage` che lo definisce non è ancora definito a quel punto, quindi mantieni il caricamento del pacchetto nel preambolo, sopra `\begin{document}`. E un errore spesso ne nasconde un altro, perché dopo il ripristino TeX potrebbe leggere erroneamente tutto ciò che segue. Correggi la prima sequenza di controllo non definita nel registro, ricompila e solo dopo guarda ciò che rimane.