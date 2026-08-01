---

title: "Limiti di pagina senza crimini tipografici"
description: "Modi legittimi per rispettare il limite, hack che segnalano i documenti e perché le sedi effettuano controlli."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Limiti di pagina senza crimini tipografici

Il tuo articolo è di 10,4 pagine. Il limite è 10. Ciò che accade nell'ora successiva determina se correggi il documento o commetti una violazione di formattazione che lo fa rifiutare alla scrivania.

## Comprimi il contenuto, non il formato

Elabora questo elenco in ordine. Ogni passaggio è invisibile ai correttori di formato perché cambia la carta, non il modello.

1. **Prima di tutto stringere la prosa.** Mezza pagina di overflow è solitamente una sezione prolissa di lavori correlati e tre frasi di transizione ridondanti. Tagliare le parole migliora la carta. Tagliare gli spazi bianchi no.
2. **Caccia alle vedove.** Un paragrafo la cui ultima riga contiene una o due parole spreca un'intera riga. Riscrivere una frase in quel paragrafo la recupera.
3. **Ridimensiona le figure onestamente.** Molte figure hanno enormi margini interni. Taglia lo spazio bianco nella figura stessa o rilascia una figura a due colonne su una colonna se rimane leggibile.
4. **Tabelle sottili.** Le tabelle `booktabs` senza regole verticali sono più compatte e hanno un aspetto migliore, vedi [beautiful tables](/learn/booktabs-beautiful/), e le intestazioni di colonna abbreviate acquistano larghezza reale.
5. **Utilizza figure vettoriali.** I grafici PDF vengono ridimensionati in modo pulito, in modo da poterli ridurre ulteriormente rispetto ai PNG pixelati prima che la leggibilità muoia. Le figure raster fuzzy hanno i loro problemi, vedi [font fuzzy nei PDF](/learn/fuzzy-font-pdf/).
6. **Spostare il materiale in un'appendice o supplemento,** se la sede lo consente. Dimostrazioni, ablazioni aggiuntive e tabelle di iperparametri sono classici candidati all'overflow. Controlla se l'appendice rientra nel limite, molte sedi la escludono, altre no.

## I crimini

Questi cambiano il modello invece della carta. I comitati del programma eseguono controlli automatizzati del formato proprio perché le persone li provano:

| Crimine | Come viene catturato |
|---|---|
| `\vspace{-8pt}` sparso ovunque | Spaziatura visibilmente ristretta, differenze rispetto ai valori predefiniti della classe |
| `\usepackage[margin=...]{geometria}` | Misurazione automatica del margine |
| Riduzione di `\baselinestretch` o dimensione del carattere | Conteggio righe per colonna, sondaggi dimensione carattere |
| `\small` o `\footnotesize` nel corpo del testo o nelle didascalie | Sonde sulla dimensione del carattere, bulbi oculari del revisore |
| `\itemsep` negativo, elenchi schiacciati | Aspetto angusto, euristica della dama |
| Rinominare il file di classe con le modifiche all'interno | Checksum rispetto alla classe ufficiale |

## Perché le sedi effettivamente controllano

Il limite di pagine è un contratto di equità: ogni autore ottiene lo stesso spazio e ogni revisore si impegna a leggerne una quantità limitata. Un giornale che imbroglia fino a 10 pagine è in realtà un giornale di 11 pagine che compete con giornali onesti di 10 pagine. Questo è il motivo per cui le violazioni vengono trattate come una questione di integrità, non come una questione di stile. Molte sedi rifiutano senza revisione e non c'è alcun appello che dica "ma il contenuto era buono".

## L'ultima risorsa onesta

Se hai inasprito la prosa, snellito i galleggianti, spostato le bozze in appendice, e hai ancora finito: taglia un risultato. Doloroso, ma un documento mirato di 10 pagine viene comunque valutato meglio di uno stipato. I revisori possono percepire la densità e [scegliere una sede](/learn/choose-your-venue/) con un formato più lungo è sempre un'opzione per l'invio successivo.