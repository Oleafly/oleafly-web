---

title: "Foto sulla lavagna alla fonte"
description: "Ritaglia, OCR o multimodale, compila, fissa gli indici a occhio."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Foto della lavagna alla fonte

Una derivazione su una lavagna, una pagina scannerizzata di dispense, un'equazione in un PDF da cui non è possibile copiare: riscrivere manualmente la matematica in LaTeX è lento e soggetto a errori. Gli strumenti moderni possono fare la maggior parte di questo da una foto. La conversione ora è davvero buona, ma tratta l'output come una bozza, non come una trascrizione finita. Il flusso di lavoro seguente è costruito attorno a questo.

## Inizia con una foto migliore

La qualità dell'immagine determina il risultato più della scelta dello strumento. Spara dritto anziché ad angolo, poiché le linee di base distorte rendono ambigui i sottoscritti e gli apici. Ottieni un'illuminazione uniforme senza abbagliamento sulla lavagna e ritaglia in modo preciso la singola equazione che desideri, perché i diagrammi circostanti e i segni vaganti diventano simboli allucinati. Se una foto ha tre equazioni, ritagliala in tre immagini e convertile una alla volta; i risultati per equazione sono costantemente migliori dei risultati pagina per volta.

## Converti con lo strumento che hai

Tre tipi di strumenti svolgono questo lavoro. I servizi OCR di equazioni dedicati sono accurati con input puliti. I modelli multimodali generali accettano un'immagine in chat e restituiscono LaTeX quando richiesto, e puoi rispondere "il secondo pedice dovrebbe essere j, non i" per ottenere una versione corretta. Oleafly ha la conversione da immagine a LaTeX integrata, che viene eseguita tramite la tua chiave API con qualunque provider tu abbia configurato, quindi uno snippet può passare dallo screenshot alla fonte senza uscire dall'editor. Vedi [Configurazione AI](/docs/ai-setup/) per la configurazione. Su input chiari i tre approcci convergono, motivo per cui i consigli fotografici di cui sopra sono più importanti della decisione sullo strumento.

## Compila immediatamente

Incolla l'output nel tuo documento all'interno di un ambiente `equation` e compila prima di fare qualsiasi altra cosa. Gli errori di conversione si dividono in due tipi e il compilatore rileva il primo tipo per te: parentesi graffe sbilanciate, delimitatori `\left` e `\right` non corrispondenti e comandi sconosciuti falliscono tutti rumorosamente e le correzioni sono meccaniche. [Segno del dollaro mancante](/learn/missing-dollar/) copre il più comune di questi errori.

## Quindi rileggi la matematica

Il secondo tipo di errore si compila perfettamente ed è sbagliato. Leggi l'equazione resa rispetto all'originale simbolo per simbolo, con particolare attenzione agli slittamenti attendibili della conversione dei luoghi: pedici e apici, dove piccoli glifi si confondono e `x_i` diventa `x_j`; numeri primi e cappelli, che svaniscono o migrano; le coppie di sosia come "1", "l" e "I" o "\rho" e "p"; e limiti su somme e integrali. Sono proprio questi i dettagli che cambiano il significato di una formula lasciandola tipograficamente plausibile. Due minuti di confronto per equazione rappresentano il costo totale, ed è molto più economico che un revisore trovi l'indice sbagliato su un foglio stampato.