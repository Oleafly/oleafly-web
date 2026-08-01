---

title: "Rientro o spazio tra i paragrafi"
description: "parindent, parskip, noindent per una singola riga."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Rientro o spazio tra i paragrafi

La tipografia ha due modi standard per mostrare dove finisce un paragrafo e inizia il successivo: rientrare la prima riga di ogni nuovo paragrafo o lasciare uno spazio verticale tra i paragrafi senza rientro. Libri e riviste usano quasi sempre il primo. Le pagine Web e i documenti aziendali utilizzano il secondo. Per impostazione predefinita LaTeX segue la convenzione del libro, rientrando ogni paragrafo tranne il primo dopo l'intestazione di sezione, senza spazio aggiuntivo tra i paragrafi. Se vuoi l'altro stile, cambi due lunghezze.

## Le due lunghezze che controllano tutto

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

"\parindent" è la larghezza del rientro della prima riga. Impostandolo su `0pt` con `\setlength` si rimuove il rientro ovunque. `\parskip` è lo spazio verticale inserito tra i paragrafi, normalmente zero (più un piccolo allungamento); impostandolo su "0.8em" si ottiene uno spazio visibile, leggermente inferiore a una riga vuota completa. L'unità `em` si ridimensiona con la dimensione del carattere, mantenendo la spaziatura proporzionale se successivamente si modifica la [dimensione del carattere](/learn/font-size/). Metti entrambe le righe nel preambolo e l'intero documento seguirà lo stile del blocco.

Se segui questa strada, tieni presente che una semplice modifica a `\parskip` allunga anche lo spazio attorno ai titoli delle sezioni, agli elementi dell'elenco e al sommario, perché anche questi sono costruiti da paragrafi. Per qualsiasi cosa più lunga di una breve nota, caricare invece il pacchetto `parskip` (`\usepackage{parskip}`) applica lo stesso stile mentre corregge quegli effetti collaterali per te.

## Soppressione di un singolo trattino

Paragrafo singolo: inserisci `\noindent` all'inizio, prima della prima parola. Ciò sopprime il rientro solo per quel paragrafo ed è utile dopo un'equazione visualizzata, un elenco di codici o una tabella quando il testo seguente è una continuazione dello stesso pensiero anziché un nuovo paragrafo. La situazione inversa, forzando un rientro dove LaTeX ne omette uno (come il primo paragrafo dopo un'intestazione), è gestita dal piccolo pacchetto `indentfirst` piuttosto che da una correzione manuale.

Già che ci siamo: un nuovo paragrafo in LaTeX viene creato da una riga vuota nel codice sorgente, non da `\\`. Il comando `\\` è un'interruzione di riga all'interno dello stesso paragrafo e il suo utilizzo per falsificare la spaziatura dei paragrafi produce avvisi di testo insufficiente e spazi irregolari. La [lezione sui paragrafi e sui ritorni a capo](/learn/paragraphs-newlines/) copre interamente questa distinzione.

## Scegli uno stile e tienilo premuto

Scegli lo stile indent **o** parskip e mantieni la coerenza. Le due convenzioni sono alternative, non livelli: i paragrafi rientrati con grandi spazi tra loro sembrano una bozza, e il rientro zero con zero spazio lascia il lettore incapace di vedere dove iniziano i paragrafi. Se stai scrivendo per un diario o una conferenza, non modificare la durata; il file di classe implementa già la scelta dell'editore e la tua sostituzione sarà la prima cosa che l'editor del layout ripristinerà.