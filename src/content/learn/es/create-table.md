---

title: "Una mesa que parece una mesa de papel."
description: "tabular, reglas de booktabs, título, etiqueta."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Una mesa que parece una mesa de papel.

Las tablas en LaTeX utilizan dos entornos anidados con diferentes trabajos. El "tabular" interior construye la cuadrícula de celdas. La "tabla" exterior hace que esa cuadrícula sea flotante, por lo que puede contener un número, un título y una etiqueta, y así LaTeX puede colocarla donde la página tenga espacio. Agregue el paquete `booktabs` para las reglas horizontales y el resultado parecerá una tabla de un artículo publicado, no una captura de pantalla de una hoja de cálculo.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## El entorno exterior

El argumento `[htbp]` enumera dónde LaTeX puede colocar el flotante: aquí en el texto, en la parte superior de una página, en la parte inferior o en una página separada de flotantes. Los prueba en ese orden, y otorgar los cuatro evita que la mesa se desvíe mucho; La mecánica se explica en [dónde aterrizan realmente los flotadores](/learn/position-figures/). `\centering` centra la cuadrícula horizontalmente. `\caption` imprime el título numerado y, por convención, los títulos de las tablas van encima de la tabla, a diferencia de los títulos de las figuras, que van debajo. `\label` debe ir después de `\caption`, porque una etiqueta registra el número emitido más recientemente, tal como se describe en [captions y etiquetas](/learn/captions-labels/). Con la etiqueta en su lugar, `Table~\ref{tab:results}` en su texto siempre imprime el número correcto.

## La rejilla interior

El `{lcc}` después de `\begin{tabular}` declara una columna por letra: `l` está alineada a la izquierda, `c` está centrada y `r` estaría alineada a la derecha. Tres letras significan tres columnas y cada fila debe proporcionar exactamente esa cantidad de celdas. Dentro de una fila, `&` separa las celdas y `\\` finaliza la fila. Las columnas de texto suelen leerse mejor alineadas a la izquierda, mientras que las columnas numéricas cortas suelen estar centradas.

Las tres reglas provienen de "booktabs". `\toprule` abre la tabla, `\midrule` separa la fila del encabezado de los datos y `\bottomrule` la cierra. Estos reemplazan el simple comando `\hline` y vienen con el espaciado correctamente ajustado arriba y abajo, que es la razón principal por la cual la tabla se ve configurada profesionalmente. Sin líneas verticales ni reglas entre filas de datos: el estilo "booktabs" omite ambas a propósito. El razonamiento se presenta en [tablas de tres reglas](/learn/booktabs-beautiful/).

## Notas prácticas

Los errores más frecuentes de los principiantes son una falta de coincidencia entre el número de separadores `&` y las columnas declaradas, y un `\\` olvidado al final de una fila, los cuales producen mensajes de error confusos que apuntan a la siguiente línea. Si prefiere no contar las celdas manualmente, cree la cuadrícula visualmente con el [generador de tablas](/tools/table-generator/) y pegue el resultado en su documento.