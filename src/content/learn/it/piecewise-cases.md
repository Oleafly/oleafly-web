---

title: "Definizioni a tratti"
description: "L'ambiente dei casi per le condizioni di una singola funzione."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Definizioni a tratti

Una funzione a tratti fornisce formule diverse su diverse parti del suo dominio: il valore assoluto, l'attivazione ReLU, una pianificazione dello scaglione fiscale. La convenzione di composizione è una singola graffa alta sinistra con una riga per caso, ciascuna riga mostra la formula e la condizione in cui si applica. Il pacchetto `amsmath` fornisce l'ambiente `cases`, che produce esattamente questo layout senza alcun dimensionamento manuale delle parentesi graffe.

## L'ambiente dei casi

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Leggendo questa riga per riga: l'intera cosa si trova all'interno di `\[ ... \]`, quindi viene visualizzata la matematica su una propria riga. `f(x) =` è matematica ordinaria, quindi `\begin{cases}` apre il blocco a tratti. All'interno, ogni riga ha due colonne separate da `&`: la formula a sinistra, la condizione a destra. Le righe terminano con `\\`, tranne per il fatto che la riga finale non ne ha bisogno. Durante la compilazione, LaTeX disegna una parentesi graffa sinistra abbastanza alta da coprire entrambe le righe e allinea le formule in una colonna e le condizioni in un'altra.

Il `&` sta facendo un vero lavoro qui. Senza di essa, ogni riga sarebbe un singolo blob e le condizioni non si allineerebbero verticalmente. Con esso, `x^2` e `-x` condividono un bordo sinistro, e `x \ge 0` e `x < 0` condividono il proprio bordo sinistro, che è ciò che rende la definizione scansionabile.

Perché questo venga compilato devono essere presenti due cose. Innanzitutto, `\usepackage{amsmath}` nel preambolo, poiché `cases` non fa parte del nucleo di LaTeX. In secondo luogo, l'ambiente deve essere all'interno della modalità matematica. "cases" crea contenuti matematici ma non apre autonomamente la modalità matematica. Se uno dei due manca, riceverai un errore "Casi ambientali non definiti" o un errore "$ inserito mancante". Quest'ultimo è spiegato in [Dollaro mancante inserito](/learn/missing-dollar/).

## Aggiunta delle parole

La maggior parte delle definizioni a tratti pubblicate includono la parola "se" e spesso la finale "altrimenti". Dato che la colonna delle condizioni è in modalità matematica, le parole semplici necessitano che `\text{...}` venga visualizzata nel carattere del documento con la spaziatura corretta:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Nota lo spazio all'interno di `\text{if }`. La modalità matematica ignora gli spazi digitati, ma all'interno di `\text` gli spazi sono reali, quindi inserirne uno prima della parentesi graffa di chiusura separa "se" dalla condizione che segue.

## Varianti ed errore comune

Se le formule sono frazioni alte e sembrano anguste, il pacchetto `mathtools` offre `dcases`, un sostituto immediato che imposta ciascuna formula nello stile di visualizzazione. C'è anche "rcases" per la situazione di immagine speculare in cui il tutore appartiene a destra.

L'errore più frequente è dimenticare `\\` tra le righe, cosa che unisce silenziosamente due casi in un'unica lunga riga. Se l'output compilato mostra condizioni che rientrano nelle formule, conta prima le interruzioni di riga. Puoi sperimentare l'ambiente dal vivo nel [parco giochi](/live/).