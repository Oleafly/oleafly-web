---

title: "Inserito dollaro mancante"
description: "Pedici e comandi matematici trapelati in modalità testo."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# Dollaro mancante inserito

"$ mancante inserito" è l'errore LaTeX più comune e il suo nome fuorviante: LaTeX non ti sta chiedendo di spendere soldi ma ti sta dicendo che la sintassi esclusivamente matematica è apparsa in modalità testo. Inserisce il `$` stesso per il ripristino, continua la compilazione e spesso lascia strani output in corsivo a valle, quindi il messaggio merita una vera correzione piuttosto che un'alzata di spalle.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## Cosa lo innesca

Due caratteri e una classe di comandi appartengono esclusivamente alla modalità matematica. Il carattere di sottolineatura `_` e l'accento circonflesso `^` creano pedici e apici, mentre comandi come `\alpha`, `\frac` e `\leq` producono simboli matematici. Ognuno di essi in testo normale solleva l'errore. Il caso classico è un identificatore contenente un carattere di sottolineatura, come il nome di un file o il nome di un gene: `DNA_seq` in una frase inciampa su `_`.

La soluzione dipende da cosa intendevi. Se il carattere di sottolineatura è un carattere letterale, esegui l'escape: `DNA\_seq` stampa il nome con un vero carattere di sottolineatura. Se intendevi un pedice, allora intendevi matematica, quindi avvolgi l'espressione: `$x_i$` imposta una x con il pedice i, in corsivo matematico con la spaziatura corretta. L'elenco completo dei caratteri che necessitano di escape nel testo ha [una propria lezione](/learn/special-characters/), e gli stessi delimitatori matematici sono trattati in [nozioni di base sulla modalità matematica](/learn/math-mode/).

## Quando il registro punta in un punto strano

Il numero di riga riportato è il punto in cui LaTeX ha notato il problema, non necessariamente il punto in cui lo hai causato. Il solito colpevole è un `$` non chiuso in precedenza: hai aperto la modalità matematica e non l'hai mai chiusa, quindi LaTeX funzionava in modalità matematica finché qualcosa non forzava il problema, spesso alla fine del paragrafo. Una riga vuota all'interno della matematica di visualizzazione genera lo stesso errore, poiché le interruzioni di paragrafo non sono valide in modalità matematica. Quindi, quando la linea contrassegnata sembra innocua, esegui la scansione verso l'alto per cercare un numero dispari di simboli del dollaro e controlla che ogni `\[` abbia un `\]` corrispondente.

L'evidenziazione della sintassi è il modo più veloce per individuare la fuga: qualsiasi editor LaTeX colora le regioni matematiche in modo diverso, quindi un paragrafo che viene improvvisamente visualizzato in colori matematici individua a colpo d'occhio il dollaro non chiuso.

Un'ultima avvertenza: poiché LaTeX si ripristina inserendo il `$` mancante, spesso un PDF viene comunque creato. Non prendere il PDF come prova che l'errore era innocuo. L'output recuperato di solito ha un corsivo sparso o una spaziatura alterata dove dovrebbe essere il testo, quindi correggi l'origine finché il registro non è pulito.