---

title: "Teoremi e blocchi dimostrativi"
description: "stili amsthm, contatori condivisi, segni di fine prova."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Teoremi e blocchi dimostrativi

La scrittura matematica si basa su affermazioni numerate: teoremi, lemmi e definizioni, ciascuno separato dal testo e numerato in modo che le dimostrazioni successive possano citarle. Il pacchetto "amsthm" fornisce i macchinari. Dichiari i tipi di blocchi di cui il tuo documento ha bisogno una volta nel preambolo, quindi li usi come ambienti ordinari.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Dichiarare gli ambienti

`\newtheorem{teorema}{Teorema}[sezione]` crea un ambiente `teorema`. Il primo argomento è il nome dell'ambiente che digiterai, il secondo è il testo dell'intestazione che viene stampato e il finale "[sezione]" lega la numerazione alle sezioni, quindi il terzo teorema della sezione 2 è il Teorema 2.3 e il contatore si azzera ad ogni nuova sezione.

`\newtheorem{lemma}[teorema]{Lemma}` colloca l'argomento facoltativo nell'altra posizione, dove significa qualcosa di diverso: `[teorema]` dice che i lemmi condividono il contatore del teorema invece di mantenerne il proprio. Un contatore condiviso produce un'unica sequenza, Teorema 2.1 seguita dal Lemma 2.2. Questo è più facile da seguire rispetto alle sequenze parallele in cui esistono sia il Lemma 2.1 che il Teorema 2.1.

`\theoremstyle` imposta l'aspetto di ogni dichiarazione che lo segue. Lo stile "semplice" stampa il corpo in corsivo, il trattamento tradizionale per teoremi, lemmi e proposizioni. Lo stile "definizione" mantiene il corpo in posizione eretta, il che si adatta alle definizioni e agli esempi. Un terzo stile, "osservazione", è ancora più leggero e si adatta a note e osservazioni. Raggruppa le tue dichiarazioni secondo lo stile che ciascuna dovrebbe utilizzare.

## Usando i blocchi

L'argomento opzionale dell'ambiente stampa un nome dopo l'intestazione, quindi `\begin{teorema}[Nome opzionale]` produce qualcosa come il Teorema 2.4 (Fubini). L'ambiente "prova" stampa un'intestazione di prova in corsivo e si chiude con il segno di fine prova, il quadratino allineato a destra.

`\qedhere` riposiziona quel quadrato quando la dimostrazione non termina con il testo ordinario. Se l'ultima riga di una dimostrazione è un'equazione visualizzata, il segno automatico cadrà su una riga vuota sotto di essa. Scrivendo "\qedhere" all'interno del display si posiziona il quadrato sulla linea dell'equazione. Quando una dimostrazione termina con testo semplice, come nell'esempio, il comando è innocuo ma non necessario.

I blocchi di teoremi sono oggetti numerati come qualsiasi altro, quindi `\label{thm:main}` all'interno dell'ambiente e `Theorem~\ref{thm:main}` nel testo funzionano con le consuete regole a due passaggi descritte in [numeri e puntatori per equazioni](/learn/number-equations/). L'errore comune nelle dichiarazioni è mettere ogni ambiente sotto `\theoremstyle{plain}`, che imposta le definizioni multiparagrafo in corsivo. Mantieni le definizioni e gli esempi sotto lo stile "definizione".