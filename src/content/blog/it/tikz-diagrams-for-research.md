---

title: "Diagrammi di ricerca in TikZ quando PowerPoint non è sufficiente"
description: "Quando disegnare pipeline, automi e diagrammi commutativi in ​​TeX in modo che si ricolorino per il diario, rimangano nitidi nella stampa e vivano come sorgente nel repository."
date: 2026-07-08
tags: [tikz, figures, research]
---

I diagrammi di PowerPoint diventano rettangoli sfocati nel PDF. I diagrammi TikZ rimangono
vettore, abbina i caratteri del documento e ricolora quando un diario richiede la scala di grigi
o un accento diverso. Il commercio è una prima ora più ripida. Dopodiché, piccolo
le modifiche sono differenze di testo, non archeologia degli screenshot.

Non hai bisogno di TikZ per ogni figura. Fotografie, telai per microscopi grezzi e
i grafici densi di matplotlib di solito rimangono inclusi in PDF/PNG. Usa TikZ quando
la figura è struttura: condutture, automi, scatole architettoniche, diagrammi di categoria,
alberi semplici.

## Inizia in piccolo

Una pipeline a tre nodi insegna al modello:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Nomi nodi. Connettiti con `--` o ancore esplicite (`(a.east)`). Preferisco parente
posizionamento (`right=of a`) su coordinate magiche che non ricorderai mai.
Lezioni: [prima immagine TikZ](/learn/tikz-intro/),
[nodi e frecce](/learn/tikz-nodes-arrows/).

## Gli stili battono le opzioni una tantum

Definisci gli stili una volta in modo che ogni casella corrisponda:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Quando il diario richiede linee più spesse o monocromatiche, cambia lo stile, no
venti nodi. Colora con colori con nome o una piccola macro di tavolozza in modo da poter scambiare
accenti senza cercare codici esadecimali.

## CS e ingegneria: diagrammi di flusso che si allineano

Utilizza la libreria di posizionamento (`sotto=di`, `destra=di`) in modo che i riquadri condividano una griglia.
Le coordinate assolute manuali rappresentano il modo in cui i diagrammi marciscono quando si inserisce un nodo. Tieni
testo breve; inserire i dettagli nella didascalia. Guida:
[diagrammi di flusso allineati](/learn/tikz-flowchart/).

Per gli schizzi di reti o sistemi neurali, separare i "blocchi" dalle "annotazioni".
Le annotazioni possono essere nodi di caratteri più piccoli senza bordi, quindi il percorso principale rimane
leggibile a larghezza di due colonne.

## Matematica e teoria: diagrammi commutativi

`tikz-cd` è il percorso abituale per i diagrammi in stile categoria senza inserire ogni
nodo a mano:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Guida: [diagrammi commutativi](/learn/commutative-diagrams/). Per alberi e
esistono diagrammi teorici della dimostrazione, biblioteche specializzate; inizia in modo semplice prima di te
importare metà del CTAN.

## Esternalizza e compila il tempo

Un documento con venti cifre TikZ rallenterà la compilazione completa. Opzioni:

- Metti ogni figura nel proprio file e `\input`.
- Utilizza la libreria "esterna" in modo che le immagini diventino PDF memorizzati nella cache.
- Drafta con `\tikzexternaldisable` quando ti interessa solo la prosa.

Esporta per diapositive: compila un documento TikZ "autonomo" in PDF, convertilo in PNG
solo se lo strumento deck non può accettare PDF. Mantieni il `.tex` come fonte di verità.

## Strumenti Canvas e TikZ scritti a mano

Alcuni editor di ricerca includono un'area di disegno che emette TikZ modificabile (per
esempio Diagram Composer di Oleafly: disegna, modifica il codice, compila la figura,
inserire). Questo è utile per la geometria che puoi trascinare. TikZ scritto a mano vince ancora
per diagrammi commutativi stretti e griglie molto regolari. In ogni caso, impegna il
Sorgente TikZ, non solo un PNG.

## Conserva i diagrammi nel repository

Memorizza le fonti delle figure accanto al foglio:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Quando il diario vuole linee più spesse, modifichi il sorgente e ricompili. Quando a
coautore "migliora" uno screenshot in uno strumento diapositiva, hai perso l'unico
versione modificabile.

## Modalità di guasto comuni

L'overflow in due colonne è comune. Ridimensiona con `\resizebox` come ultima risorsa;
riprogettare prima la larghezza. La mancata corrispondenza dei caratteri è un'altra: preferisci il documento predefinito
caratteri su famiglie di caratteri codificati all'interno di TikZ a meno che il diario non lo richieda.
Controlla il contrasto per i colloqui, perché il grigio invisibile sui proiettori è un classico
trappola. E le frecce senza etichetta costringono la didascalia a spiegare ogni bordo, il che significa
lo schema è incompleto.

## Livelli e sovrapposizioni

Per discorsi e documenti che condividono una figura, costruisci il diagramma a strati: base
prima le caselle, poi le frecce e infine le etichette. Commenta i livelli durante il debug
posizionamento. Le sovrapposizioni del proiettore (`\pause`, `\onslide`) possono rivelare una pipeline passo dopo passo
passa dalla stessa fonte TikZ se mantieni stabili i nomi dei nodi.

## Accessibilità e stampa

Non codificare il significato solo in rosso vs verde. Utilizza anche lo stile forma o linea.
Controlla la figura in scala di grigi. Le didascalie dovrebbero comunque avere senso se lo è il lettore
daltonici o stampa su una stampante da laboratorio in bianco e nero.

## Un flusso di lavoro che funziona

Disegna su carta per trenta secondi, quindi costruisci il TikZ più piccolo che mostri il
reclamo. Definisci gli stili una volta e riutilizzali. Compila la figura da sola fino ad essa
sembra giusto, lascialo cadere sul foglio e lascia che la didascalia riporti il reclamo. Impegnarsi
il `.tex`.

PowerPoint va bene per una riunione di laboratorio una tantum. Per il PDF verrà stampato un diario,
fonte vettoriale che puoi ricolorare batte un altro giro di "puoi inviare il file modificabile
cartella?"