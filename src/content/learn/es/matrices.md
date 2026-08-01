---

title: "Matrices y arreglos"
description: "pmatrix, bmatrix, vmatrix y columnas de matriz personalizadas."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Matrices y arreglos

Una matriz en LaTeX es una cuadrícula de celdas: `&` separa las columnas, `\\` separa las filas y un entorno envuelve la cuadrícula con el par de delimitadores correctos. Los entornos matriciales provienen de `amsmath`, por lo que ese paquete debe estar en su preámbulo antes de que se compile.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## Los entornos matriciales

Los tres comparten el mismo cuerpo. Sólo cambian los delimitadores circundantes. `pmatrix` envuelve la cuadrícula entre paréntesis, el estilo más común para matrices y vectores. `bmatrix` usa corchetes y `vmatrix` usa barras verticales individuales, la notación estándar para un determinante. También hay una "matriz" simple sin delimitadores, "Bmatrix" con llaves y "Vmatrix" con barras dobles para normas. En el interior, `a & b` llena las dos columnas de una fila, `\\` comienza la siguiente fila y cada fila debe llevar el mismo número de separadores `&`.

Estos entornos deben aparecer dentro del modo matemático. Envuélvalos en `\[ ... \]` o úselos dentro de una ecuación. Para una matriz pequeña en medio de una oración, `smallmatrix`, también de `amsmath`, establece una versión compacta que no alarga la línea: `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`.

## Matriz personalizada

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Cuando necesita control por columna, "array" es la herramienta general. Su argumento obligatorio es una especificación de columna: aquí `r|cc` declara una columna alineada a la derecha, una regla vertical y luego dos columnas centradas. Las letras de alineación son `l`, `c` y `r`, y `|` dibuja una regla entre columnas. `\hline` entre filas dibuja una regla horizontal en todo el ancho. `array` no dibuja delimitadores externos propios. Emparéjelo con `\left(` y `\right)` si los desea. Es el hermano en modo matemático del entorno "tabular" utilizado para tablas en texto.

## Errores comunes

El error "La pestaña de alineación adicional se ha cambiado a \cr" significa que una fila tiene más separadores `&` de los que permite el recuento de columnas, lo que generalmente se debe a que falta un `\\` al final de la fila anterior. "Entorno pmatrix no definido" significa que falta `\usepackage{amsmath}`. Una matriz pegada fuera del modo matemático falla con "Falta $ insertado". Consulte [conceptos básicos del modo matemático](/learn/math-mode/) si los delimitadores son nuevos. Comparar dos por dos en cada estilo de delimitador lleva unos segundos en el [área de juegos en vivo](/live/).