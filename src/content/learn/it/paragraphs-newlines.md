---

title: "Paragrafi, interruzioni e spazi vuoti"
description: "Righe vuote, interruzioni forzate, vspace e comandi di spaziatura che vale la pena conoscere."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Paragrafi, interruzioni e spazi vuoti

In un elaboratore di testi puoi modellare i paragrafi premendo Invio e osservando gli spazi vuoti. LaTeX funziona diversamente: il testo sorgente descrive la struttura e il compilatore decide la spaziatura. Una volta che sai come LaTeX inizia un paragrafo e come sovrascriverlo quando necessario, eviti i conflitti di formattazione che i principianti di solito hanno con esso.

## Come funzionano i paragrafi

Una riga vuota nel codice sorgente inizia un nuovo paragrafo. Questa è l'intera regola. Una riga vuota o cinque, non fa differenza; LaTeX li comprime in un'unica interruzione di paragrafo. Allo stesso modo, una singola interruzione di riga all'interno del codice sorgente viene trattata come uno spazio ordinario, quindi puoi mandare a capo il testo sorgente con la larghezza che preferisci e ridistribuirlo liberamente senza modificare affatto l'output.

Il comando "\par" significa esattamente la stessa cosa di una riga vuota. Raramente lo digiterai tu stesso, ma lo vedrai all'interno di macro e file di classe, dove una riga vuota letterale è scomoda da scrivere.

`\\` è qualcosa di completamente diverso: forza un'interruzione di riga all'interno del paragrafo corrente, senza iniziarne uno nuovo. La nuova riga non avrà alcun rientro di paragrafo e nessuno spazio verticale aggiuntivo. Esiste per i luoghi in cui le interruzioni di riga sono contenuti, come indirizzi, poesie e righe di una tabella. Usarlo per terminare paragrafi ordinari è il classico errore da principiante, perché produce un paragrafo che non è mai realmente terminato, e LaTeX potrebbe lamentarsi con "Non c'è nessuna riga qui che finisca" quando due di essi si accumulano.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Aggiunta di spazio verticale

A volte è necessario uno spazio intenzionale, ad esempio prima di un blocco di firma o tra le parti logiche di un frontespizio.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` inserisce esattamente lo spazio verticale richiesto, in qualsiasi unità conosciuta da LaTeX (`em`, `pt`, `cm` e così via). I tre comandi di salto sono quantità preimpostate: `\smallskip`, `\medskip` e `\bigskip` inseriscono spazi piccoli, medi e grandi le cui dimensioni sono definite dalla classe del documento, che li mantiene coerenti in tutto il documento. Preferisci i salti rispetto ai valori `\vspace` ottimizzati manualmente, perché si adattano se cambi la classe o la dimensione del carattere.

Un dettaglio utile: un `\vspace` nella parte superiore di una pagina viene eliminato silenziosamente, poiché LaTeX presuppone che lo spazio elastico ai limiti della pagina non sia intenzionale. Se hai veramente bisogno che venga mantenuto, usa `\vspace*{1em}` con la stella.

## Spazio tra tutti i paragrafi

Non spammare `\\` per creare spazio tra i paragrafi. Se vuoi che ogni paragrafo sia separato da uno spazio invece che contrassegnato da un rientro, questa è una decisione di progettazione a livello di documento: impostalo una volta nel preambolo con il pacchetto `parskip`, o riconsidera se i titoli e la struttura comunicherebbero meglio la separazione. Vedi [rientro del paragrafo](/learn/paragraph-indent/) per l'altra metà di questo compromesso.