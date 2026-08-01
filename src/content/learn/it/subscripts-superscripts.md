---

title: "Indici che non esplodono"
description: "Parentesi graffe per scritture multicarattere, numeri primi, punti."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Indici che non esplodono

Pedici e apici sono la prima sintassi matematica che tutti imparano in LaTeX e anche la fonte del primo output confuso che tutti producono. Il carattere di sottolineatura `_` abbassa ciò che segue, l'accento circonflesso `^` lo aumenta ed entrambi si applicano esattamente a un carattere a meno che tu non dica diversamente. Quella regola di un carattere è dietro quasi ogni indice mutilato che tu abbia mai visto.

## Le forme base

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

"x_i" inserisce un singolo "i" nella posizione del pedice e "x^2" solleva un singolo "2". Poiché `_` e `^` prendono solo il token successivo, qualsiasi cosa più lunga di un carattere deve essere racchiusa tra parentesi graffe: `x_{ij}` mette in pedice entrambe le lettere e `x^{2n}` solleva l'intero `2n`. Puoi allegare sia un pedice che un apice allo stesso simbolo, in qualsiasi ordine, e LaTeX li impila correttamente: `x_i^2`. Anche gli script si annidano. In "x_{i_j}" la "j" è un pedice della "i", che a sua volta è un pedice di "x", e ogni livello è progressivamente più piccolo.

Gli script multicarattere **devono** utilizzare le parentesi graffe: `x_ij` è `x_i` quindi `j`. LaTeX non segnala questo come un errore, perché `x_i` seguito da una variabile `j` è un calcolo perfettamente legale. La formula è compilabile, sembra quasi corretta a prima vista e significa qualcosa di diverso. Costruisci presto l'abitudine all'apparecchio. In caso di dubbio, prepara il copione.

La stessa trappola appare nei limiti e nei limiti. `\sum_i=1^n` non fa quello che sembra. La forma corretta è `\sum_{i=1}^{n}`, dove l'intero `i=1` è un pedice tra parentesi graffe. Se utilizzi `_` o `^` completamente al di fuori della modalità matematica, ottieni il classico errore descritto in [Dollaro mancante inserito](/learn/missing-dollar/).

## Numeri primi e punti

```latex
f' f'' \dot{x} \ddot{x}
```

Per i derivati ​​raramente si desidera un apice letterale. La chiave dell'apostrofo produce un primo: `f'` viene reso come f con un primo, `f''` con due, e LaTeX gestisce l'innalzamento e la spaziatura, quindi non c'è bisogno di `f^{\prime}`. Per le derivate temporali nello stile fisico, `\dot{x}` posiziona un singolo punto sopra la x e `\ddot{x}` ne posiziona due. Questi sono accenti, quindi argomentano tra parentesi graffe.

Un'altra sottigliezza: se hai bisogno di un apice dopo un numero primo, basta concatenarli, come in `f'^2`. LaTeX li combina in un unico cluster di apici.

## Controlla il tuo output

Il modo più veloce per interiorizzare la regola delle parentesi graffe è digitare `x_ij` e `x_{ij}` uno accanto all'altro nel [live playground](/live/) e osservare la differenza renderizzata. Ogni volta che un indice appare leggermente sbagliato in un documento compilato, la prima cosa da controllare è la mancanza di un paio di parentesi graffe.