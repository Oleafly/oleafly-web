---

title: "Notazione di Dirac"
description: "pacchetto staffa per reggiseni, kets ed elementi matrice."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Notazione di Dirac

La meccanica quantistica scrive gli stati come kets, i loro duali come reggiseni e i prodotti interni come coppie tra parentesi. Costruire la notazione a mano da `\langle`, `|` e `\rangle` funziona, ma è noioso e i delimitatori non crescono con il contenuto. Il pacchetto `braket` fornisce comandi che assemblano la notazione e dimensionano tutto per adattarlo.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## Cosa fa ogni comando

`\braket{\psi|\phi}` imposta il prodotto interno completo: parentesi angolari all'esterno, una barra verticale tra i due stati, tutti uguali in altezza. Con due barre, `\braket{\psi|A|\phi}` diventa l'elemento di matrice dell'operatore A tra i due stati, la forma utilizzata per i valori attesi e i calcoli delle perturbazioni. Il pacchetto fornisce anche `\bra{\psi}` e `\ket{\phi}` per le due metà singolarmente. Un bare ket è il modo usuale per nominare uno stato in prosa.

`\set{\vec{x}|x > 0}` è un bonus dello stesso pacchetto: notazione set-builder con parentesi graffe e barra centrale, utile ben oltre la fisica.

Il dimensionamento è il vero motivo per utilizzare il pacchetto. Inserisci una frazione o una somma all'interno di "\braket" e le parentesi e le barre si allungheranno per corrispondere. Un `\langle ... \rangle` costruito manualmente necessita di `\left` e `\right` su ogni delimitatore e tende comunque a spostarsi in modo sproporzionato.

## Alternative e vicini

Il pacchetto "fisica" offre un insieme simile, che include "\bra", "\ket", "\ev" per i valori attesi e "\mel" per gli elementi della matrice, oltre a abbreviazioni per derivate e commutatori. Entrambi i pacchetti definiscono `\bra` e `\ket`, quindi sceglierne uno per documento invece di caricarli entrambi. In un modello in cui non è possibile aggiungere pacchetti, `\langle \psi | \phi \rangle` con `\left`/`\right` attorno a contenuti alti produce lo stesso output con più digitazione.

Per i diagrammi di Feynman, che spesso risiedono negli stessi documenti, pacchetti come `tikz-feynman` si basano su TikZ; questa è un'abilità di disegno separata, più vicina nello spirito ai [diagrammi commutativi](/learn/commutative-diagrams/) che a qualsiasi cosa in questa pagina.

L'errore comune è digitare "<\psi|\phi>" con i caratteri angolari della tastiera. Queste sono le relazioni minore di e maggiore di, quindi LaTeX le spazia come confronti e le disegna all'altezza sbagliata. Le parentesi di Dirac reali provengono da `\langle` e `\rangle` o, meglio, dai comandi precedenti. La differenza è evidente nel momento in cui imposti entrambi i moduli uno accanto all'altro nel [parco giochi live](/live/).