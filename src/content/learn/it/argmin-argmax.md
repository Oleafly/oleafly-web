---

title: "Operatori che inventi una volta"
description: "DeclareMathOperator per argmin, argmax e nomi simili."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Operatori che inventi una volta

LaTeX viene fornito con operatori con nome come `\sin`, `\log` e `\max` che vengono stampati in caratteri verticali con la spaziatura corretta attorno ad essi. Non viene fornito con `\argmin` o `\argmax`, anche se i documenti di ottimizzazione li utilizzano costantemente. Se digiti "argmin" come lettere semplici in modalità matematica, LaTeX lo tratta come il prodotto di sei variabili: le lettere risultano in corsivo, compresse insieme, senza spazi tra gli operatori. Dichiara tu stesso l'operatore, una volta, nel preambolo.

## Dichiarazione dell'operatore

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Ecco cosa fa ogni pezzo. `\DeclareMathOperator` proviene da `amsmath` e crea un nuovo comando il cui argomento è composto come testo dell'operatore: lettere romane verticali, con le regole di spaziatura LaTeX già applicate a `\max` e `\lim`. Il primo argomento è il nome del comando che digiterai, il secondo è il testo che verrà effettivamente stampato. Il `\,` all'interno di `arg\,min` inserisce uno spazio sottile tra le due parole, che si legge meglio che metterle insieme.

La stella dopo "\DeclareMathOperator" è importante. Una dichiarazione con asterisco fa sì che l'operatore si comporti come `\lim`: nella matematica di visualizzazione, tutto ciò che alleghi con `_` si trova direttamente sotto l'operatore invece di trascinarsi in basso a destra. Questo è esattamente ciò che desideri per `\argmin_\theta`, dove la variabile su cui si sta ottimizzando dovrebbe apparire sotto. Senza l'asterisco, il pedice rimane di lato, che è la convenzione per operatori come "\log_2". Nella matematica in linea il pedice rimane laterale in entrambi i casi, per evitare di allungare l'altezza della riga.

## Riutilizzare il modello

La stessa tecnica copre qualsiasi operatore utilizzato nel tuo campo e di cui LaTeX non è a conoscenza. Alcuni comuni:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Si noti che `\tr`, `\rank` e `\diag` non sono contrassegnati da asterisco perché i loro pedici, quando ne hanno, appartengono a un lato. Solo gli operatori di stile limite come `\esssup` ottengono l'asterisco.

Dichiarare gli operatori nel preambolo invece di scrivere `\mathrm{argmin}` inline ripaga due volte. La notazione rimane coerente in tutto il documento e, se un diario richiede una resa diversa, cambi una riga invece di cercare in ogni equazione. Prova insieme la dichiarazione e la riga di visualizzazione nel [live playground](/live/) per vedere come si comporta il posizionamento del pedice con asterisco.

Un errore comune: dichiarare un operatore il cui nome è in conflitto con un comando esistente, come `\max` o `\deg`. LaTeX si fermerà con un errore "già definito". Scegli un nuovo nome o usa "\renewcommand" solo se intendi davvero sostituire l'originale.