---

title: "Comando o ambiente?"
description: "Le macro accettano argomenti; gli ambienti avvolgono le regioni."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Comando o ambiente?

Tutto ciò che digiti in LaTeX oltre al semplice testo assume una delle due forme seguenti: un comando o un ambiente. La distinzione sembra accademica finché non raggiungi il primo messaggio di errore. La metà delle lamentele di LaTeX riguardano il fatto che uno viene utilizzato al posto dell'altro. Imparare a vedere quale forma stai guardando rende leggibili sia la documentazione che gli errori.

## Comandi

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Un comando è una barra rovesciata seguita da un nome ed esegue una sostituzione nel punto in cui appare. `\textbf{argomento}` accetta un argomento tra parentesi graffe e lo scrive in grassetto; l'effetto inizia e finisce con le parentesi graffe. I comandi possono accettare diverse parentesi graffe come argomenti e molti accettano anche un argomento opzionale tra parentesi quadre prima di essi, come in `\documentclass[11pt]{articolo}`.

Le prime due righe mostrano che i comandi sono qualcosa che puoi creare. `\newcommand{\foo}{bar}` definisce un nuovo comando chiamato `\foo` la cui espansione è il testo `bar`, e da quel momento in poi digitando `\foo` ovunque si ottiene `bar`. Questo è il meccanismo dietro le [macro personalizzate](/learn/custom-commands/), ed è anche il modo in cui funzionano i pacchetti: un pacchetto è in gran parte un file di definizioni di comandi.

Una curiosità che vale la pena conoscere in anticipo: un comando come `\LaTeX` ingoia lo spazio successivo, quindi "\LaTeX is fun" stampa le parole consecutive. Scrivi "\LaTeX{} is fun" o "\LaTeX\ is" per mantenere lo spazio.

## Ambienti

```latex
\begin{center}
 Centered block
\end{center}
```

Un ambiente racchiude una regione del documento tra una coppia `\begin{...}` e `\end{...}` corrispondente e applica il suo comportamento a tutto ciò che contiene. Qui l'ambiente `center` centra ogni riga del blocco. Gli ambienti possono essere nidificati, purché si chiudano nell'ordine inverso in cui sono stati aperti, e possono anche accettare argomenti: `\begin{tabular}{ll}` apre una tabella e le passa una specifica di colonna.

Poiché gli ambienti devono essere in equilibrio, falliscono in modo distintivo. Un errore come `\begin{itemize} terminato da \end{document}` significa che un ambiente è stato aperto e mai chiuso. Trova il `\end` mancante; non fissare la riga con i nomi degli errori.

## La regola pratica

Se avvolge una regione con un inizio e una fine chiari, probabilmente è un ambiente. Se si tratta di una piccola sostituzione o di un cambio, è un comando. Le due forme si sovrappongono addirittura: ogni ambiente `foo` è implementato come una coppia di comandi `\foo` e `\endfoo` dietro il cofano. Per un tour dei comandi e degli ambienti che incontrerai di più, consulta [spiegazione di ogni comando](/learn/every-command-explained/), oppure prova entrambe le forme nel [parco giochi dal vivo](/live/).