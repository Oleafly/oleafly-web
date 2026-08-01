---

title: "Signos de interrogación en lugar de números"
description: "Las etiquetas necesitan otra pasada; colocación de etiquetas después de los subtítulos."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Signos de interrogación en lugar de números

Compilas, y donde debería estar una figura o número de ecuación, el PDF muestra `??`. Eso no es un error en su fuente. Así es como LaTeX genera una referencia que aún no puede resolver y, por lo general, la solución es simplemente compilarla nuevamente.

## Por qué una pasada no es suficiente

LaTeX lee su documento de arriba a abajo en una sola pasada. Cuando encuentra una `\label`, escribe el número actual en el archivo `.aux`; cuando encuentra un `\ref`, busca el número en el archivo `.aux` escrito en la ejecución anterior. En una compilación nueva no hay ninguna ejecución anterior, por lo que cada referencia se imprime como `??`. La segunda pasada lee el archivo `.aux` completo y completa los números. El compilador incluido de Oleafly vuelve a ejecutar los pases automáticamente hasta que los números se estabilicen, pero si maneja `pdflatex` a mano, la segunda compilación es su trabajo.

## Cuando ?? sobrevive a un segundo pase

Si los signos de interrogación persisten, realice tres comprobaciones. Primero, compare la ortografía en `\ref` con la de `\label` carácter por carácter; las etiquetas distinguen entre mayúsculas y minúsculas y un espacio extraviado cuenta. En segundo lugar, compruebe dónde se encuentra la etiqueta. `\label` registra el valor del contador incrementado más recientemente, y en un flotante es `\caption` el que incrementa el contador, por lo que la etiqueta debe ir después del título:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Una etiqueta colocada antes del título se compila sin quejas, pero recoge el contador incorrecto, generalmente la sección actual, por lo que la referencia imprime un número plausible pero incorrecto en lugar de `??`. Esa variante es peor porque es fácil pasarla por alto. En tercer lugar, si el archivo `.aux` se eliminó a mitad de ejecución o se interrumpió una compilación, las etiquetas grabadas pueden estar incompletas; recompilar desde un estado limpio.

## Leyendo las advertencias

El registro le indica en qué caso se encuentra. "Hubo referencias indefinidas" significa que al menos un `\ref` no encontró nada. "Es posible que las etiquetas hayan cambiado. Vuelva a ejecutar para obtener las referencias cruzadas correctas" significa que otra pasada lo solucionará. "Etiqueta definida múltiplesmente" significa que dos comandos `\label` comparten un nombre, y LaTeX usa silenciosamente uno de ellos, así que cambie el nombre hasta que cada etiqueta sea única. Una convención de nomenclatura con los prefijos `eq:`, `fig:` y `tab:` hace que las colisiones sean raras y la fuente sea más fácil de buscar; el flujo de trabajo de etiquetas en sí se trata en [números y punteros para ecuaciones](/learn/number-ecuations/).