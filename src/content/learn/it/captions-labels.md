---

title: "Didascalie che corrispondono al numero"
description: "Metti l'etichetta dopo la didascalia in modo che il numero rimanga attaccato."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Didascalie che corrispondono al numero

I riferimenti incrociati sono una delle cose che LaTeX fa meglio di un elaboratore di testi. Non si digita mai "Figura 3" a mano. Invece alleghi un'etichetta alla figura e lasci che LaTeX compili il numero ovunque sia menzionato, in modo che i numeri rimangano corretti indipendentemente da quanto riordini, inserisci o elimini. Il meccanismo ha una regola che fa inciampare quasi tutti almeno una volta: l'ordine di `\caption` e `\label` è importante.

## Perché l'ordine è importante

Il comando `\caption` svolge due compiti. Stampa il testo della didascalia sotto la figura o la tabella e fa avanzare il contatore, trasformando questo float nella Figura 3. Il comando `\label` fa qualcosa di più stupido di quanto le persone si aspettino: registra qualunque numero sia stato assegnato più di recente, qualunque cosa sia. Non ha idea di essere "dentro una figura". Quindi l'etichetta deve venire dopo la didascalia:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Se inserisci `\label` prima di `\caption`, la didascalia non ha ancora fatto avanzare il contatore delle cifre, quindi l'etichetta cattura il numero più recente da qualche altra parte, solitamente la sezione corrente. Il testo quindi dice "vedi Figura 2.4" quando la figura è in realtà la Figura 7. Questo è il sintomo classico: i riferimenti che puntano ai numeri di sezione invece che ai numeri di figura significano quasi sempre un'etichetta posizionata troppo presto. L'abitudine più sicura è scrivere `\label` sulla riga immediatamente successiva a `\caption`, ogni volta, sia nelle figure che nelle tabelle.

## Riferimento all'etichetta

Nel tuo testo, scrivi il riferimento in questo modo:

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` si espande al semplice numero e tu fornisci tu stesso la parola "Figura". Il `~` tra di loro è uno spazio unificatore, che impedisce a LaTeX di terminare una riga dopo "Figura" e di iniziare quella successiva con "3". Prefissi come `fig:`, `tab:`, `sec:` e `eq:` sono pure convenzioni, LaTeX non li interpreta, ma mantengono leggibili le etichette e impediscono che una figura e una tabella condividano accidentalmente un nome.

Nota che `\pageref{fig:neat}` fornisce il numero di pagina in cui è finita la figura, utile in documenti lunghi in cui un float può allontanarsi dalla sua menzione. Per un tour completo dei comandi di riferimento, vedere [ogni comando spiegato](/learn/ogni-comando-spiegato/).

## Compila due volte e altre insidie

I riferimenti vengono risolti durante le esecuzioni del compilatore: il primo passaggio scrive le posizioni delle etichette nel file `.aux` e il secondo passaggio le rilegge. Fino al secondo passaggio, i riferimenti vengono stampati come punti interrogativi in ​​grassetto, quindi `??` nel tuo PDF di solito significa semplicemente "compilare di nuovo", non che qualcosa sia rotto. La maggior parte degli editor, incluso Oleafly, rieseguono automaticamente i passaggi. Se `??` sopravvive a compilazioni ripetute, l'etichetta non esiste. Le cause più probabili sono un errore di battitura nel nome dell'etichetta o un `\caption` eliminato lasciando dietro di sé `\label`.