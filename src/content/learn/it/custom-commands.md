---

title: "Macro che mantengono onesta la notazione"
description: "newcommand, NewDocumentCommand, un file di macro condiviso."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Macro che mantengono onesta la notazione

Ogni foglio ha una notazione che si ripete: i numeri reali, un operatore di aspettativa, un valore assoluto con barre di dimensioni adeguate. Se digiti `\mathbb{R}` in quaranta posti e il tuo consulente in seguito preferisce `\mathbf{R}`, hai quaranta modifiche da apportare e ne perderai una. Una macro trasforma quella notazione in un singolo comando con nome, definito una volta. Cambia la definizione e segue l'intero documento. È così che mantieni la notazione onesta: la fonte non può andare fuori sincronia con se stessa.

## Definizione dei comandi con newcommand

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

La prima definizione è quella più semplice: `\R` ora è pura abbreviazione e digitando `\R` ovunque si ottiene `\mathbb{R}`.

La seconda forma accetta un argomento. Il segno "[1]" dopo il nome dichiara che "\E" accetta un argomento e "#1" indica il punto in cui quell'argomento finisce nell'espansione. Quindi `\E{X}` diventa `\mathbb{E}\left[X\right]`. La definizione acquista più che brevità: la coppia `\left[` e `\right]` fa crescere le parentesi per adattarsi a tutto ciò che è all'interno, quindi `\E{\frac{X}{n}}` ottiene automaticamente le parentesi alte. La macro `\abs` fa lo stesso con `\lvert` e `\rvert`, la coppia corretta di barre verticali per il valore assoluto. Puoi dichiarare fino a nove argomenti e fare riferimento ad essi da "#1" a "#9".

Se un comando esiste già, `\newcommand` si rifiuta di ridefinirlo e si ferma con un errore, che ti protegge dal rompere silenziosamente qualcosa. Per sostituire deliberatamente un comando esistente, utilizzare invece `\renewcommand`.

## L'interfaccia moderna

L'attuale LaTeX fornisce anche un comando di definizione più ricco:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` utilizza una stringa di specifica dell'argomento invece di un conteggio. Qui `mm` indica due argomenti obbligatori, quindi `\citepair{knuth84}{lamport94}` cita entrambe le chiavi. Il linguaggio delle specifiche va oltre ciò che `\newcommand` può fare: `o` dichiara un argomento opzionale tra parentesi quadre, `s` rileva una variante a stella e `O{default}` fornisce a un argomento opzionale un valore predefinito. Per qualsiasi cosa oltre la semplice sostituzione, utilizza questa interfaccia.

## Condividi le definizioni

Mantieni un `macros.sty` condiviso tra i capitoli. Metti le tue definizioni in quel file, caricalo con `\usepackage{macros}` da ogni documento, e ogni capitolo di una tesi, più le diapositive e la versione cartacea, sono tutti d'accordo sulla notazione. Quando un collaboratore si unisce, legge un breve file per apprendere le tue convenzioni invece di decodificarle dal testo. Questo si accoppia naturalmente con una [configurazione multi-file](/learn/split-chapter-files/).

Un consiglio sulla denominazione: assegna alle macro nomi significativi come "\abs" o "\norm" anziché nomi basati sull'aspetto come "\bigbars". Il nome dovrebbe dire cosa significa la notazione, quindi la definizione è libera di cambiare il suo aspetto. E resisti alla definizione di una macro per qualcosa che usi due volte; il guadagno inizia intorno al terzo utilizzo.