---

title: "Manifesti in A0"
description: "tikzposter, beamerposter o geometria più TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Poster in A0

Un poster di una conferenza è una pagina singola, solitamente A0 o A1, che deve essere leggibile da un metro e mezzo di distanza. LaTeX gestisce bene il formato perché il poster può riutilizzare direttamente le equazioni, le figure e la bibliografia dell'articolo. Una normale classe di documenti, però, non basterà: i caratteri, i margini e il layout delle colonne necessitano tutti di versioni in scala poster. Tre approcci coprono quasi tutti i poster LaTeX in circolazione.

## Le tre opzioni

La classe "tikzposter" è il percorso più diretto verso un moderno poster accademico. Organizza il contenuto in blocchi colorati disposti in colonne, fornisce diversi temi completi e gestisce autonomamente il formato carta di grandi dimensioni e i caratteri in scala. Uno scheletro assomiglia a questo:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

Le opzioni della classe impostano un carattere di base da 25 punti, carta A0 e orientamento verticale. Ogni `\column{0.5}` occupa una frazione della larghezza del poster e ogni `\block{title}{content}` diventa un pannello intitolato. Cambiando `\usetheme` si ridisegna ogni blocco contemporaneamente.

Il pacchetto "beamerposter" estende Beamer alle dimensioni dei poster, quindi il tema, i colori e gli ambienti "a blocchi" di un mazzo vengono trasferiti su un unico fotogramma gigante. È la scelta naturale quando il tuo gruppo mantiene già gli stili Beamer e molti modelli di poster universitari sono basati su di essi.

La terza opzione è una semplice classe di documenti con il pacchetto `geometry` che imposta le dimensioni A0, più TikZ per la decorazione. Ciò dà il pieno controllo su ogni millimetro ed è il modo in cui vengono realizzati i poster dal design più pesante, ma costruisci tu stesso l'impalcatura delle colonne, quindi pianifica il tempo reale per questo.

## Consigli pratici

Qualunque percorso tu scelga, inizia da un modello funzionante anziché da un file vuoto, ad esempio uno dalla [galleria](/templates/), e sostituisci il contenuto blocco per blocco. Imposta il formato e l'orientamento della carta il primo giorno, perché modificarli successivamente interrompe ogni larghezza regolata manualmente. Il corpo del testo dovrebbe avere una lunghezza compresa tra 24 e 32 punti una volta stampato; qualsiasi cosa inferiore a 20 punti non verrà letta. Preferisci figure vettoriali. Una trama esportata per una colonna di carta diventa poltiglia quando viene ridimensionata alla larghezza del poster, quindi rigenera le figure alla dimensione del poster invece di allungarle.

L'errore più comune è trattare il poster come un foglio di carta compresso. Pianifica circa un terzo del conteggio delle parole della prima bozza, lascia che le cifre sostengano l'argomento e controlla il risultato stampando un blocco del PDF su A4 a grandezza naturale per giudicare la vera dimensione del carattere prima di inviare il file a un plotter.