---

title: "Enfasi senza combattere il carattere"
description: "textbf, textit, emph, mono e perché emph si annida meglio del corsivo codificato."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Enfasi senza contrastare il carattere

L'enfasi in LaTeX deriva da un piccolo insieme di comandi che accettano ciascuno il testo interessato come argomento tra parentesi graffe. LaTeX separa due idee che la maggior parte degli elaboratori di testi unisce: applicare un carattere tipografico specifico e contrassegnare un intervallo come enfatizzato. Sapere quale comando mantiene i documenti coerenti quando gli stili cambiano.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## I comandi

"\textbf" imposta il grassetto, il trattamento standard per una forte enfasi e per i lemmi nelle definizioni. `\textit` imposta direttamente il carattere corsivo. `\texttt` passa al carattere macchina da scrivere a spaziatura fissa, la convenzione per nomi di file, comandi e identificatori di codice nel testo corrente. `\textsc` imposta il maiuscolo, comune per i nomi degli autori nelle bibliografie e per gli acronimi che altrimenti dominerebbero una riga di testo.

`\underline` esiste ma ottiene il suo commento nell'esempio. La sottolineatura è un sostituto del corsivo nell'era delle macchine da scrivere, e anche in LaTeX presenta un problema meccanico: il testo sottolineato è posizionato in un riquadro, quindi non può dividersi su più righe e una lunga frase sottolineata traboccherà il margine. Nella tipografia stampata, il corsivo svolge il lavoro svolto in passato dalla sottolineatura.

I comandi sono annidati, quindi `\textbf{\textit{bold italic}}` li combina entrambi quando il carattere fornisce il carattere.

## Perché \emph

`\emph` contrassegna il significato piuttosto che l'apparenza: dice "enfatizza questo" e lascia che sia il contesto a decidere come. Nel testo verticale viene stampato il corsivo. All'interno del testo che è già in corsivo, torna in verticale, quindi l'enfasi nell'enfasi rimane visibile. `\textit` codificato all'interno del testo corsivo rimane semplicemente in corsivo e l'enfasi interna svanisce. L'intento di marcare ripaga anche in seguito. Una classe o un pacchetto può ridefinire l'aspetto dell'enfasi in un unico punto senza modifiche in tutto il documento.

Regola pratica: usare `\emph` per enfatizzare la prosa e riservare `\textit` per cose che sono convenzionalmente corsivo indipendentemente dal contesto, come titoli di libri, frasi straniere e nomi di specie.

## Confini e abitudini

Questi sono tutti comandi in modalità testo e si comportano male all'interno delle formule. I simboli matematici in grassetto necessitano di `\mathbf` o `\boldsymbol`, coperto da [bold math](/learn/bold-math/). Resisti all'enfasi sull'impilamento, perché quando tutto è audace, niente risalta. Crea intestazioni da comandi strutturali come "\sezione" anziché dal grassetto manuale, poiché la struttura alimenta anche il sommario e i segnalibri PDF. [Tipo più grande e più piccolo](/learn/font-size/) utilizza lo stesso argomento per le dimensioni dei caratteri.