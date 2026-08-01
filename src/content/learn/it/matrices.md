---

title: "Matrici e array"
description: "pmatrix, bmatrix, vmatrix e colonne di array personalizzate."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Matrici e array

Una matrice in LaTeX è una griglia di celle: `&` separa le colonne, `\\` separa le righe e un ambiente avvolge la griglia nella giusta coppia di delimitatori. Gli ambienti matrice provengono da `amsmath`, quindi quel pacchetto deve essere nel preambolo prima che qualcuno di questi venga compilato.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## Gli ambienti della matrice

Tutti e tre condividono lo stesso corpo. Cambiano solo i delimitatori circostanti. `pmatrix` racchiude la griglia tra parentesi, lo stile più comune per matrici e vettori. "bmatrix" utilizza parentesi quadre e "vmatrix" utilizza singole barre verticali, la notazione standard per un determinante. Esiste anche una "matrice" semplice senza delimitatori, una "matrice B" con parentesi graffe e una "matrice V" con doppie barre per le norme. All'interno, "a & b" riempie le due colonne di una riga, "\\" inizia la riga successiva e ogni riga deve contenere lo stesso numero di separatori "&".

Questi ambienti devono apparire nella modalità matematica. Avvolgili in `\[ ... \]` o usali all'interno di un'equazione. Per una matrice piccola nel mezzo di una frase, `smallmatrix`, sempre da `amsmath`, imposta una versione compatta che non allunga la riga: `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`.

## Array personalizzato

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Quando hai bisogno del controllo per colonna, `array` è lo strumento generale. Il suo argomento obbligatorio è una specifica di colonna: qui `r|cc` dichiara una colonna allineata a destra, una regola verticale, quindi due colonne centrate. Le lettere di allineamento sono "l", "c" e "r" e "|" disegna una regola tra le colonne. `\hline` tra le righe disegna una linea orizzontale su tutta la larghezza. "array" non disegna alcun delimitatore esterno. Abbinalo a `\left(` e `\right)` se li desideri. È il fratello in modalità matematica dell'ambiente `tabular` utilizzato per le tabelle nel testo.

## Errori comuni

L'errore "La scheda di allineamento extra è stata modificata in \cr" significa che una riga ha più separatori `&` di quelli consentiti dal conteggio delle colonne, il che di solito riconduce a un `\\` mancante alla fine della riga precedente. "Ambiente pmatrix non definito" significa che manca `\usepackage{amsmath}`. Una matrice incollata al di fuori della modalità matematica fallisce con "$ mancante inserito". Vedi [nozioni di base sulla modalità matematica](/learn/math-mode/) se i delimitatori sono nuovi. Il confronto di un due per due in ogni stile delimitatore richiede pochi secondi nel [parco giochi live](/live/).