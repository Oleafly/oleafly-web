---

title: "Figure, tabelle e confronti portano avanti il ​​documento"
description: "Didascalie da asporto, tabelle di confronto, grafici vs tabelle e coerenza visiva."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Figure, tabelle e confronti sostengono il documento

Ecco come un revisore impegnato legge effettivamente il tuo articolo: abstract, poi sfoglia ogni figura e tabella, quindi forse il testo. Se le tue immagini raccontano la storia da sole, hai vinto metà della revisione prima che venga letto un singolo paragrafo. Progettali come se fossero la carta. Per molti lettori lo sono.

## Ogni figura ha bisogno di una didascalia da asporto

Una didascalia che dice "Risultati sul set di dati A" spreca lo spazio più prezioso del documento. Una didascalia che dice "Il nostro metodo (blu) corrisponde alla linea di base a metà del costo; il divario aumenta con le dimensioni del modello" dice esattamente al revisore che lancia la conclusione cosa concludere. Scrivi le didascalie come affermazioni, poi lascia che sia la figura a dimostrarle. Un lettore dovrebbe essere in grado di leggere solo le tue didascalie e ricostruire l'argomento. La meccanica delle didascalie e della numerazione si trova in [didascalie ed etichette](/learn/captions-labels/).

## Tabelle di confronto: le preferite del recensore

Due modelli di tabelle dominano gli studi empirici:

**La tabella delle linee di base.** Il tuo metodo rispetto al lavoro precedente, una riga ciascuno, i numeri migliori in grassetto. Includi le linee di base ovvie anche quando perdono gravemente. Omettere una linea di base ben nota equivale a nascondere qualcosa.

**La matrice del segno di spunta.** Funzionalità in basso, metodi in alto, segni di spunta dove un metodo ha la proprietà. Posiziona il tuo lavoro in un colpo d'occhio:

| Capacità | Prima A | Priore B | Il nostro |
|---|---|---|---|
| Non è necessaria alcuna riqualificazione | sì | no | sì |
| Funziona su larga scala | no | sì | sì |
| Fonte aperta | no | no | sì |

Sii onesto. I revisori conoscono il trucco di scegliere le righe che il tuo metodo vince.

## Trama o tabella?

Utilizza un grafico quando la forma è il messaggio: una tendenza, un crossover, una curva di scala. Utilizza una tabella in cui i numeri esatti rappresentano il messaggio: i punteggi di riferimento con cui tutti si confronteranno. In caso di dubbi, chiedi cosa ne farà il lettore. Se citeranno il numero, la tabella. Se descriveranno la tendenza, traccia.

## La coerenza è credibilità

Piccole incongruenze visive segnalano tranquillamente disattenzione:

- Stessa famiglia e dimensione di carattere in tutte le figure, vicino alla dimensione del corpo del testo dopo il ridimensionamento.
- Stesso colore per lo stesso metodo in ogni trama. Se il metodo è blu nella Figura 2, è blu ovunque.
- Stesse convenzioni e unità di etichettatura degli assi ovunque.
- Leggibile a dimensione stampata. Se è necessario eseguire lo zoom per leggere l'etichetta di un segno di spunta, è troppo piccola.

Esporta formati vettoriali (PDF, SVG) anziché screenshot, ove possibile. I grafici bitmap con testo sfocato sono il modo più veloce per apparire rozzi.

## Costruirli in LaTeX

Il posizionamento, il dimensionamento e la gestione del sistema float sono trattati in [inserimento di immagini](/learn/insert-images/) e la pulizia delle tabelle in [creazione di tabelle](/learn/create-table/). Per diagrammi, schizzi di architettura e diagrammi di flusso, TikZ produce grafica vettoriale che corrisponde esattamente ai caratteri del tuo documento. Inizia con [l'introduzione di TikZ](/learn/tikz-intro/). Se la scrittura a mano di TikZ sembra lenta, Diagram Composer di Oleafly può aiutarti a disegnare visivamente le figure di TikZ che poi perfezionerai nel codice.

## L'audit dei cinque minuti

Prima di inviare, chiedi al revisore di capovolgerlo: leggi solo le didascalie, in ordine. Raccontano tutta la storia? C'è qualcosa in grassetto, colorato o stellato senza spiegazione? Uno sconosciuto saprebbe qual è il tuo metodo in ogni figura? Correggi ciò che fallisce, quindi invia.