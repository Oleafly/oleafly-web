---

title: "Dos paneles en una fila"
description: "minipáginas una al lado de la otra sin una guerra de paquetes."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Dos paneles en una fila

A veces quieres dos imágenes una al lado de la otra, cada una con su propio título y su propio número de figura. No necesitas un paquete especial para eso. Los cuadros simples de "minipágina" dentro de un entorno de "figura" única hacen el trabajo, y debido a que ambas imágenes viven en un flotante, LaTeX nunca puede separarlas en páginas diferentes.

## El patrón

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

Una "minipágina" es un cuadro que se comporta como una página en miniatura: tiene un ancho fijo que usted elige y su contenido se ajusta y apila dentro de ese ancho. Aquí cada minipágina ocupa `0,48\textwidth`, es decir, el 48 por ciento del ancho del texto. Eso deja deliberadamente un 4 por ciento sin reclamar, y el `\hfill` entre las dos cajas es un espacio extensible que se expande para llenarlo, empujando un panel hacia el margen izquierdo y el otro hacia la derecha. Si establece ambos anchos en `0.5\textwidth`, totalizarían exactamente el ancho de la línea sin espacio para ninguna separación, y el segundo cuadro caería en la siguiente línea, que es la razón más común por la que los diseños uno al lado del otro se apilan misteriosamente verticalmente.

Dentro de cada minipágina, `width=\linewidth` escala la imagen al ancho del cuadro circundante, no a toda la página. En cambio, al usar `\textwidth` se produce un error frecuente que hace que cada imagen sea tan ancha como el bloque de texto completo, lo que garantiza el desbordamiento.

Observe dónde se encuentran los títulos: dentro de cada minipágina. Eso le da a cada panel un título completo con su propio número, por lo que esta figura produce, digamos, la Figura 3 y la Figura 4 ubicadas en una fila. Las opciones de ubicación externas de `[htbp]` le indican a LaTeX que puede colocar el elemento flotante aquí, en la parte superior de una página, en la parte inferior o en una página flotante, en ese orden de preferencia.

## Alinear tapas y mezclar contenido

Si las dos imágenes tienen diferentes alturas, su alineación vertical puede verse mal, porque las minipáginas se alinean en sus centros de forma predeterminada. En su lugar, escriba `\begin{minipage}[t]{0.48\textwidth}` para alinearlos en la parte superior. A las minipáginas tampoco les importa lo que contienen, por lo que este mismo diseño coloca una figura al lado de una tabla, o una imagen al lado de un párrafo de texto explicativo, para lo cual los paquetes de estilo subfigura no están diseñados.

## Cuándo usar subfiguras en su lugar

Lo único que este patrón no puede ofrecerle son paneles etiquetados (a) y (b) bajo un único título compartido y un único número de figura. En el momento en que desee la "Figura 5(a)" en lugar de dos figuras independientes, cambie a [subfigures](/learn/subfigures-abc/). Regla general: las minipáginas son para figuras que son vecinas, mientras que las subfiguras son para una figura que tiene partes.