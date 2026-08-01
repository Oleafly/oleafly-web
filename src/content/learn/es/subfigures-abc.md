---

title: "Paneles etiquetados a, b, c"
description: "subtítulo para figuras de varios paneles bajo un título."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Paneles etiquetados a, b, c

Los artículos necesitan constantemente figuras de múltiples paneles: la arquitectura en el panel (a), la curva de entrenamiento en (b), una ablación en (c), todas compartiendo un número de figura y un título general. La forma limpia de crear esto es el paquete `subcaption`, que le brinda un entorno `subfigure` que maneja las letras (a), (b), los títulos por panel y las referencias automáticamente.

## El patrón

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Esto es lo que hace cada pieza. El entorno externo `figure` es un flotante normal, y `[htbp]` enumera las ubicaciones que LaTeX puede intentar, en orden: aquí en el texto, en la parte superior de una página, en la parte inferior de una página o en una página flotante dedicada. Cada "subfigura" es un cuadro de un ancho determinado, aquí "0,48\textwidth" (48 por ciento del ancho del texto). Dos paneles a 0,48 dejan un pequeño espacio y el `\hfill` entre ellos se estira para que los paneles queden al ras de los márgenes izquierdo y derecho. Dentro de cada panel, `width=\linewidth` escala la imagen al ancho del panel, no a toda la página. Ese último detalle es en el que la gente se equivoca con mayor frecuencia.

El `\caption` dentro de una `subfigura` produce la pequeña etiqueta de estilo "(a) Primero" debajo de ese panel. El `\caption` al final, dentro de `figure` pero fuera de cualquier `subfigure`, es el título principal que lleva el número de figura. Mantenga cada `\label` inmediatamente después de su `\caption`, ya que una etiqueta registra el número emitido más recientemente, como se explica en [captions y etiquetas](/learn/captions-labels/).

## Paneles de referencia

Con las etiquetas anteriores, `\ref{fig:p}` imprime el número de figura, digamos 2, mientras que `\ref{fig:p-a}` imprime 2a. Si desea solo la letra, `\subref{fig:p-a}` imprime solo "a", lo cual es útil para oraciones como "paneles (a) y (b)". Esa es la verdadera ventaja de "subtítulo" en lugar de escribir manualmente "(a)" debajo de las imágenes. Las letras se renumeran cuando agrega o reordena paneles, y cada referencia permanece correcta.

## Filas, espaciado y un error común

Para un tercer panel, reduzca los anchos a aproximadamente `0,31\textwidth` y agregue otra `subfigura` con `\hfill` entre cada par, o comience una nueva fila dejando una línea en blanco entre las filas de subfiguras. Sin embargo, una línea en blanco dentro de una fila es el error clásico: cualquier línea vacía entre dos entornos de "subfigura" inicia un nuevo párrafo, que apila los paneles verticalmente en lugar de uno al lado del otro. Si sus paneles se niegan a ubicarse en una fila, busque primero una línea en blanco perdida y recuerde que "%" al final de una línea comenta el espacio invisible al final de la línea que también puede hacer que un panel sea demasiado ancho para caber.