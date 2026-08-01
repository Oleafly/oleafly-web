---

title: "Equazioni che non si adattano"
description: "multilinea e dividere quando la misura è troppo stretta."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Equazioni che non si adattano

Prima o poi una derivazione produce un'equazione più ampia del blocco di testo e LaTeX la lascerà scorrere nel margine anziché indovinare dove interromperla. Due ambienti `amsmath` ti consentono di posizionare tu stesso l'interruzione: `multline` per una singola espressione lunga e `split` per un'interruzione che dovrebbe rimanere allineata.

## multilinea

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

`multline` suits one long formula with no natural alignment point. Scegli l'interruzione con `\\` e l'ambiente gestisce il layout: la prima riga è allineata a sinistra, l'ultima a destra e le eventuali linee centrali sono centrate. The whole expression gets one equation number, placed on the last line. La convenzione è quella di infrangere prima di un operatore binario, quindi il `+` apre la riga di continuazione e il lettore vede a colpo d'occhio che l'espressione continua.

## diviso

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

Anche `split` produce un singolo numero, ma allinea le sue linee come fa `align`, con `&` che indica il punto di allineamento. Non è un ambiente autonomo; vive all'interno di "equazione" o di un altro ambiente di visualizzazione, che fornisce il numero. Qui `&` si trova prima del segno di uguale sulla prima riga e la continuazione inizia con `&\quad`, un punto di allineamento vuoto seguito da un quad di spazio, quindi la seconda riga rientra appena oltre il segno di uguale. Quel trattino dice al lettore che questo è ancora il lato destro, non una nuova equazione.

## Scegliere tra loro

Utilizza "multilinea" quando l'equazione è una lunga somma senza alcuna struttura che valga la pena allineare. Utilizza "split" quando è presente un segno di uguale sotto il quale dovrebbe rimanere la continuazione. Se hai diverse equazioni veramente separate, nessuna delle due è corretta; questo è un lavoro per "align", trattato in [equazioni su più righe che si allineano](/learn/align-equations/).

Prima di sceglierli, considera di riscrivere i conti. Nominando una sottoespressione nella frase precedente, fattorizzandola o dividendola in due equazioni spesso si tiene sotto controllo la larghezza e si legge anche meglio. Preferisco questo piuttosto che restringere il tipo. Un display schiacciato per adattarsi quasi sempre si legge peggio di una rottura netta.

Un errore da sapere: `split` usato da solo, senza un'`equazione` che lo racchiude, si interrompe con un "Errore pacchetto amsmath". Prima avvolgilo, poi compila. Entrambi gli ambienti sono facili da sperimentare nel [parco giochi live](/live/).