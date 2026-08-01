---

title: "Testa e piedi in esecuzione"
description: "modelli fancyhdr per titolo e numero di pagina."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Esecuzione di teste e piedi

Una testa che corre è la striscia di testo nella parte superiore di ogni pagina, mentre il piede che corre è la sua controparte in basso. In un libro o in una tesi solitamente riportano il titolo del capitolo e il numero della pagina. In un articolo presentato potrebbero riportare una versione breve del titolo, gli autori o nulla. Gli stili di pagina incorporati di LaTeX ("semplice", "vuoto", "intestazioni") coprono le basi, ma nel momento in cui desideri una combinazione specifica, come il titolo a sinistra e il numero di pagina a destra, raggiungi il pacchetto "fancyhdr".

## La ricetta standard

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Ogni riga qui fa un lavoro. `\usepackage{fancyhdr}` carica il pacchetto nel preambolo. `\pagestyle{fancy}` commuta l'intero documento nello stile configurabile di fancyhdr. `\fancyhf{}` cancella ogni campo di intestazione e piè di pagina, il che è importante perché fancyhdr viene fornito con valori predefiniti (numero di pagina e contrassegni di sezione) che non vorresti quasi mai mescolare con i tuoi. Partire da zero impedisce di avere sorprese.

Le due righe successive riempiono nuovamente i campi. `\fancyhead[L]{Short title}` inserisce il testo letterale nello slot sinistro dell'intestazione e `\fancyhead[R]{\thepage}` inserisce il numero della pagina corrente nello slot destro. `\thepage` è un comando che si espande al numero di pagina, quindi si aggiorna automaticamente su ogni pagina. C'è un `\fancyfoot[L/C/R]{...}` corrispondente se preferisci mettere le cose in fondo.

Infine, `\headrulewidth` controlla la sottile linea orizzontale sotto l'intestazione. Impostandolo su "0.4pt" si disegna una linea sottile; impostalo su "0pt" per rimuovere completamente la regola. Esiste anche un `\footrulewidth` e il valore predefinito è zero.

## Documenti fronte-retro

Se la classe del documento utilizza "twoside" (l'impostazione predefinita per "book"), le pagine si alternano tra pari e dispari e le intestazioni solitamente si rispecchiano a vicenda. fancyhdr gestisce questo con i selettori pari/dispari: `\fancyhead[LE,RO]{\thepage}` mette il numero di pagina a sinistra delle pagine pari e a destra delle pagine dispari, che è dove lo trova il pollice del lettore. Puoi combinarlo con `\leftmark` e `\rightmark`, che contengono i titoli dei capitoli e delle sezioni correnti, per riprodurre il layout classico del libro.

## Le pagine dei capitoli e l'aspetto vuoto

Le pagine di apertura dei capitoli ignorano il tuo stile fantasioso perché `\chapter` richiama `\thispagestyle{plain}` dietro le quinte. Questo è intenzionale e la maggior parte dei progetti lo mantiene. Se vuoi che quelle pagine siano vuote, aggiungi `\fancypagestyle{plain}{\fancyhf{}}` per ridefinire il significato di "plain".

Un avvertimento comune da aspettarsi: fancyhdr potrebbe lamentarsi del fatto che `\headheight` è troppo piccolo. La correzione è esattamente ciò che suggerisce il messaggio, ad esempio `\setlength{\headheight}{14pt}` nel preambolo o passando `headheight=14pt` al [pacchetto geometria](/learn/margins-geometry/) se lo usi già. Si tratta di una prenotazione del layout, non di un errore, ma silenziarla mantiene il registro pulito e la griglia di base onesta.