---

title: "Señale otras partes del PDF"
description: "etiqueta y referencia, además de Cleveref para nombres automáticos."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Señale otras partes del PDF

Escribir "ver Figura 3" a mano es una promesa que no puede cumplir. Agregue una cifra anterior en el artículo y cada número escrito a mano después sea incorrecto. LaTeX resuelve esto con un mecanismo de dos partes: `\label` adjunta un nombre de su elección a un objeto numerado, y `\ref` imprime el número con el que terminó ese objeto. Usted hace referencia a nombres y el compilador mantiene los números honestos.

## Etiqueta y referencia

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` registra el número asignado más recientemente, aquí el de la sección, bajo la clave `sec:methods`. Posteriormente, `\ref{sec:methods}` imprime ese número, y `\eqref` es la variante amsmath que agrega la convención de paréntesis para ecuaciones, imprimiendo "(1)" en lugar de "1".

Dos detalles en este ejemplo son muy importantes. Primero, dentro de una figura la etiqueta debe venir después de `\caption`, porque el título es lo que marca el contador de figuras; en su lugar, una etiqueta colocada antes recoge silenciosamente el número de sección actual. En segundo lugar, el `~` en `Figura~\ref{...}` es un espacio sin separación, que mantiene la palabra y su número en la misma línea en lugar de permitir que "Figura" finalice una línea y "3" comience la siguiente.

Los prefijos `sec:`, `fig:` y `eq:` son pura convención. LaTeX no los requiere, pero hacen que las claves sean legibles y permiten que el editor autocomplete las etiquetas por tipo.

## ¿Por qué ves?

En la primera compilación después de agregar una etiqueta, `\ref` imprime `??`. Los números se resuelven a través del archivo `.aux` escrito durante la ejecución anterior, por lo que una nueva etiqueta necesita una compilación más para aparecer; [por qué compilas más de una vez](/learn/compile-to-pdf/) explica el mecanismo. Un `??` que sobrevive a dos compilaciones consecutivas casi siempre significa que la clave en `\ref` no coincide con la clave en `\label`.

## Cleveref escribe la palabra por ti.

Con Cleveref (cargar después de hyperref):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` imprime "Figura 3", incluido el nombre del tipo, y se adapta si la etiqueta resulta ser una tabla o una ecuación. `\Cref` escribe con mayúscula el comienzo de la oración y `\cref{eq:a,eq:b,eq:c}` comprime una lista en un rango. Tenga en cuenta el orden de carga: Cleveref es uno de los pocos paquetes que debe venir después de [hyperref](/learn/hyperlinks/), lo contrario de la regla habitual. Adoptelo temprano. Actualizar `\cref` en un papel lleno de frases "Figura~\ref" escritas a mano es tedioso.