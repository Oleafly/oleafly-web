---

title: "Tablas de más de una página."
description: "encabezados y pies de página de tabla larga que se repiten."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Tablas de más de una página

Un entorno de "tabla" normal es un flotante, y un flotante debe caber en una sola página. Dale sesenta filas y LaTeX lo coloca en una página flotante y deja que se desborde, o lo pospone para siempre. La solución es el paquete `longtable`, que compone una tabla que se divide en páginas y repite su encabezado en cada una, de la misma manera que lo hace una hoja de cálculo impresa.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## Cómo funcionan los bloques de encabezado

Una "tabla larga" comienza con hasta cuatro bloques de declaración antes de las filas de datos reales. Todo lo que está encima de `\endfirsthead` es el encabezado impreso una vez, al principio de la tabla. Todo lo que está entre `\endfirsthead` y `\endhead` es el encabezado que se repite en la parte superior de cada página posterior, razón por la cual la misma línea "Clave y valor" aparece dos veces en el ejemplo. El bloque que termina en `\endfoot` se imprime en la parte inferior de cada página que toca la tabla, aquí solo una `\bottomrule` de cierre. También existe `\endlastfoot` para material que debe aparecer solo debajo de las filas finales, como una línea de totales. Si desea una pista de continuación, un patrón común es `\midrule \multicolumn{2}{r}{continúa en la página siguiente} \\` en el bloque del pie y el `\bottomrule` real en el último pie.

Después de las declaraciones vienen las filas de datos, escritas exactamente como en un `tabular` normal con `&` entre las celdas y `\\` al final de cada fila. Las reglas de las "pestañas de libros" funcionan sin cambios. Consulte [tablas de tres reglas](/learn/booktabs-beautiful/) para conocer lo que reemplazan.

## No es un flotador y lo que eso implica

La diferencia de comportamiento más importante se expresa en una frase: "longtable" no es un flotante. Comienza exactamente donde lo colocas en la fuente, se rompe donde se rompen las páginas y no toma ningún argumento `[htbp]`. Eso también cambia el funcionamiento de los subtítulos. No envuelve una "mesa larga" en un entorno de "tabla". En su lugar, coloque `\caption{...}\\` dentro de la propia tabla, como la primera línea del bloque del primer encabezado, y se numerará en la misma secuencia que las otras tablas.

## Dos cosas que debes saber antes de confiar en ello

Primero, el ancho de las columnas se decide globalmente, por lo que LaTeX puede necesitar varias pasadas de compilación antes de que las columnas dejen de moverse. Continúe compilando hasta que el diseño se asiente. En segundo lugar, "longtable" no se puede utilizar dentro de un diseño de dos columnas, lo que lo descarta para la mayoría de las plantillas de conferencias. En esos documentos, las opciones realistas son reducir la tabla, dividirla en partes o moverla a un apéndice de una columna.