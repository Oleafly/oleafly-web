---

title: "Acronimi ed elenchi di simboli"
description: "glossari: schizzi extra o un elenco creato a mano quando ciò è sufficiente."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Acronimi ed elenchi di simboli

I documenti lunghi accumulano abbreviazioni e le convenzioni che li riguardano sono rigide. Un acronimo viene scritto per intero al primo utilizzo, abbreviato in seguito, e una tesi di solito necessita di un elenco di abbreviazioni nella parte introduttiva. Mantenerlo manualmente fallisce in modo prevedibile. Riordini due capitoli, il primo utilizzo si sposta e improvvisamente "ML" appare tre pagine prima di "machine learning (ML)". Il pacchetto `glossaries-extra` tiene traccia del primo utilizzo per te.

## Il percorso automatizzato

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

L'opzione `acronym` abilita il supporto degli acronimi e `\makeglossaries` attiva il meccanismo che raccoglie le voci durante la compilazione. Ogni `\newacronym` accetta tre argomenti: una chiave che digiterai nel testo, la forma breve e la forma lunga. Definiscili tutti nel preambolo o in un file separato `\input`, in modo che vivano in un unico posto.

Nel corpo non si digita mai l'acronimo stesso:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

Il primo `\gls{ml}` nel documento stampa "machine learning (ML)", mentre quelli successivi stampano solo "ML". Poiché il pacchetto tiene traccia dell'utilizzo anziché della posizione nella fonte, l'espansione segue il primo utilizzo ovunque la ristrutturazione lo sposti. `\printglossaries` stampa l'elenco raccolto delle abbreviazioni ovunque lo collochi, tipicamente dopo l'indice. I comandi correlati coprono la grammatica attorno a questo: `\glspl` per i plurali, `\Gls` per l'inizio della frase in maiuscolo.

Il problema è la costruzione. Tra i passaggi LaTeX, l'helper `makeglossaries` deve essere eseguito per ordinare e formattare le voci, altrimenti `\printglossaries` non produce silenziosamente nulla. Le configurazioni complete di latexmk lo gestiscono automaticamente. Le pipeline più semplici potrebbero non esserlo e i glossari extra offrono un fallback per loro. Se la tua lista si rifiuta ostinatamente di apparire, l'esecuzione dell'helper mancante è il primo sospettato, ben prima di un bug nel tuo documento.

## Il percorso costruito a mano

Per un semplice elenco di simboli, spesso è sufficiente un ambiente "descrizione" gestito manualmente:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Ogni `\item[...]` stampa il suo argomento tra parentesi come un'etichetta in grassetto con la spiegazione che segue, che è esattamente la forma di un elenco di notazioni. Non esiste un tracciamento del primo utilizzo, ma un elenco di simboli raramente ne ha bisogno; i simboli sono definiti indipendentemente dal punto in cui appaiono per la prima volta in matematica.

Il consiglio onesto è quello di abbinare lo strumento alla bilancia. Una carta con cinque acronimi è più facile da gestire a mano. Una tesi di 200 pagine con quaranta non lo è, e lì il pacchetto paga più volte il costo di installazione. La [lezione sugli elenchi](/learn/lists/) copre l'ambiente `descrizione` in modo più dettagliato.