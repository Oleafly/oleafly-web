---

title: "Dove i galleggianti atterrano effettivamente"
description: "htbp, perché qui forzato spesso fallisce, avvicinando l'ambiente al testo."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Dove atterrano effettivamente i galleggianti

Le figure e le tabelle in LaTeX sono float, il che significa che la posizione del codice nel codice sorgente è un suggerimento, non un'istruzione. Gli spostamenti di LaTeX fluttuano per mantenere le pagine riempite uniformemente, per evitare pagine mezze vuote e per rispettare i limiti tipografici come la quantità di immagini che possono essere presenti in una pagina. Questo è il più grande shock culturale proveniente da un elaboratore di testi e comprendere il sistema di posizionamento fa risparmiare ore di lotta contro di esso.

## Cosa significa htbp

Ogni ambiente float accetta un argomento facoltativo che elenca dove LaTeX può inserirlo:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Ogni lettera è un permesso. `h` consente il float "qui", nel punto del testo in cui appare il codice. "t" consente l'inizio di una pagina, "b" consente la fine di una pagina e "p" consente una pagina mobile dedicata contenente solo figure e tabelle. LaTeX li valuta più o meno in quest'ordine per ogni pagina che costruisce, prendendo il primo posizionamento che soddisfa le sue regole interne sulla spaziatura e sul bilanciamento della pagina. Le lettere concedono opzioni piuttosto che esprimere desideri classificati, quindi elencarle tutte e quattro dà a LaTeX più spazio per posizionare il float in un posto vicino e sensato. Se ometti completamente l'argomento, il valore predefinito è `[tbp]`, senza `h`, motivo per cui così spesso una semplice figura salta all'inizio della pagina successiva.

## Perché forzare "qui" si ritorce contro

Scrivere "[h]" da solo sembra la soluzione più ovvia, ma di solito peggiora le cose. Se il float non entra nello spazio rimanente della pagina corrente, e `h` è l'unico permesso che hai concesso, LaTeX non può posizionarlo su questa pagina o posizionarlo legalmente su qualsiasi altra. Quindi porta avanti il ​​float, pagina dopo pagina, in attesa di un punto che soddisfi "h". Anche i galleggianti devono rimanere in ordine, quindi ogni figura successiva si mette in coda dietro quella bloccata e l'intera pila spesso viene scaricata alla fine del capitolo. L'aggiunta di un punto esclamativo, come in "[h!]", dice a LaTeX di allentare alcune delle sue regole di spaziatura, ma non può creare spazio che non esiste.

## Le abitudini che funzionano davvero

Innanzitutto, mantieni "[htbp]" come impostazione predefinita e abbandona il posizionamento perfetto al pixel durante la stesura, perché ogni paragrafo che aggiungi o elimini rimescola comunque le pagine. In secondo luogo, posiziona l'ambiente figure nel sorgente accanto al paragrafo che per primo fa riferimento ad esso, poiché LaTeX inizia a cercare una casa da quel punto in avanti e un float può spostarsi più tardi ma mai prima del suo codice. In terzo luogo, scrivi la tua prosa facendo riferimento alle figure per numero, come in "La Figura 3 mostra la pipeline", mai "la figura sotto", in modo che il testo rimanga corretto ovunque si fermi il galleggiante.

Se un galleggiante finisce comunque in un posto inaccettabile, ci sono strumenti più forti, comprese le barriere galleggianti e il posizionamento di `[H]`, trattato in [la figura che fugge dalla sezione](/learn/figure-wrong-position/). Raggiungeteli alla fine della scrittura, una volta che il testo è stabile, non durante la stesura.