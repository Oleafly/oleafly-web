---

title: "Celdas que abarcan filas o columnas"
description: "varias columnas, varias filas, cmidrule bajo encabezados agrupados."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Celdas que abarcan filas o columnas

Las tablas reales a menudo necesitan celdas fusionadas. Un encabezado como "Puntuaciones" que se encuentra encima de dos columnas de métricas abarca columnas, y un nombre de modelo que se aplica a dos filas de resultados abarca filas. LaTeX maneja las dos direcciones con diferentes herramientas: `\multicolumn` está integrado, mientras que `\multirow` proviene del paquete del mismo nombre. Aquí hay una tabla compacta que usa ambos, además de una regla parcial de `booktabs`:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Columnas ampliadas

`\multicolumn{2}{c}{Scores}` reemplaza dos celdas ordinarias por una. El primer argumento es cuántas columnas absorber, el segundo es una especificación de columna solo para esta celda, aquí `c` para centrada, y el tercero es el contenido. Tenga en cuenta el solitario `&` anterior: la primera columna de esa fila está deliberadamente vacía, por lo que "Puntuaciones" comienza en la columna 2 y cubre las columnas 2 y 3. Debido a que el segundo argumento anula el tipo de columna localmente, `\multicolumn{1}{c}{...}` también es el truco estándar para centrar una sola celda de encabezado sobre una columna alineada a la izquierda.

## La regla parcial

`\cmidrule(lr){2-3}` dibuja una regla horizontal solo debajo de las columnas 2 a 3, que vincula visualmente el encabezado agrupado a sus columnas. La opción `(lr)` recorta la regla ligeramente en sus extremos izquierdo y derecho, por lo que las `\cmidrule` adyacentes no se tocan y se leen como marcadores de grupo separados. Este es un comando `booktabs`, y el recorte es uno de los detalles que hace que estas tablas parezcan tipografiadas en lugar de dibujadas. El estilo completo de tres reglas se describe en [tablas de tres reglas](/learn/booktabs-beautiful/).

## Filas que abarcan

`\multirow{2}{*}{Ours}` imprime "Ours" verticalmente centrado en 2 filas. El primer argumento es el recuento de filas, el segundo es el ancho de la celda, donde `*` significa el ancho natural del contenido y el tercero es el contenido mismo. El comando solo reserva espacio visual, por lo que la segunda fila aún debe proporcionar una primera celda vacía, razón por la cual la siguiente línea comienza con un `&` desnudo. Olvidar que la celda vacía desplaza cada valor de la fila una columna hacia la izquierda, y el mensaje de error de desalineación apunta a la línea incorrecta, así que primero verifique la fila después de `\multirow`.

## Un límite práctico

Es mejor mantener las celdas fusionadas en encabezados y grupos de filas cortas. Una tabla donde las celdas de datos se extienden en ambas direcciones es difícil de leer y de mantener, porque cada fila agregada obliga a volver a contar los intervalos. Si se encuentra anidando `\multirow` dentro de `\multicolumn`, considere reestructurar la tabla.