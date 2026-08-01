---

title: "Compila il tuo primo PDF"
description: "Un piccolo articolo, una compilazione e le tre idee che ti danno la maggior parte di LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Compila il tuo primo PDF

Se hai sempre scritto solo in Word o Google Docs, LaTeX ti chiede di invertire un'abitudine. Invece di formattare il testo durante la digitazione, descrivi il tuo documento in testo semplice e lasci che un programma lo componga per te. Quel testo semplice risiede in un file `.tex`: un normale file di testo che potresti aprire in qualsiasi editor, con le tue parole più comandi come `\section{...}` che dicono cosa *è* ogni pezzo. La compilazione trasforma questa fonte in un PDF finito. Un motore LaTeX legge il tuo file dall'alto al basso, interpreta ogni comando, dispone le pagine e scrive il PDF. Non formatti mai direttamente l'output. Modifica il sorgente e compila di nuovo.

## Il documento reale più piccolo

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Leggilo da cima a fondo. `\documentclass{articolo}` dice al motore di che tipo di documento si tratta, impostando valori predefiniti sensati per caratteri, margini e stili di intestazione. Le righe `\title`, `\author` e `\date` memorizzano solo metadati; non è stato ancora stampato nulla e "\today" indica semplicemente la data di qualunque giorno compili. `\begin{document}` segna il punto in cui inizia il contenuto vero e proprio. "\maketitle" è il momento in cui il cartiglio memorizzato appare nella pagina. `\section{Introduzione}` stampa un'intestazione numerata e la registra silenziosamente in modo che un indice possa trovarla in seguito. Le ultime righe mostrano le due facce della matematica: `$...$` compone una formula all'interno di una frase, mentre `\[ ... \]` le dà una propria riga di visualizzazione centrata.

## Tre idee che trasportano il linguaggio

1. I comandi iniziano con una barra rovesciata e solitamente accettano un argomento tra parentesi graffe, quindi `\textbf{ciao}` significa "scrivi ciao in grassetto".
2. Gli ambienti racchiudono una regione tra `\begin{...}` e `\end{...}` e il corpo del file è esso stesso un grande ambiente `document`.
3. Il preambolo è tutto ciò che precede `\begin{document}`; configura il documento ma non produce mai testo visibile.

Quasi tutto il resto in LaTeX è una variazione di questi tre.

## Compilalo

In [Oleafly](/docs/getting-started/), crea un progetto, incolla il sorgente sopra e compila. Il PDF appare accanto alla tua fonte e SyncTeX collega i due lati: fai clic su un punto del PDF per passare alla riga della fonte corrispondente o viceversa. La primissima compilazione di un progetto può richiedere un po' più di tempo mentre il motore recupera ciò di cui ha bisogno; le corse successive sono più veloci.

C'è una cosa da aspettarsi: prima o poi la compilazione fallirà con un messaggio di errore e un numero di riga. Questo è del tutto normale e di solito significa un errore di battitura nel nome di un comando o una parentesi graffa di chiusura mancante. Correggi la linea a cui punta e compila di nuovo.

## Prossimo

Continua con [il preambolo, spiegato](/learn/preamble-explained/) per vedere cosa fanno realmente le righe di configurazione, quindi [modalità matematica](/learn/math-mode/) per le formule. Tieni aperto il [cheatsheet](/learn/cheatsheet/) mentre scrivi la tua prima vera pagina.