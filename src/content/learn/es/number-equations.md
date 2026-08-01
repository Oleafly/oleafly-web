---

title: "Números y punteros para ecuaciones."
description: "label, ref, eqref y numere solo las líneas a las que se refiere."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Números y punteros para ecuaciones.

Numerar una ecuación es una promesa de que la consultarás más adelante. LaTeX maneja ambas mitades de esa promesa: el entorno de "ecuación" asigna el número, y el sistema de etiquetas le permite señalarlo desde cualquier parte del documento sin tener que escribir el número usted mismo.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Etiquetas y referencias

`\begin{equation}` numera la línea mostrada. `\label{eq:bayes}` adjunta el nombre `eq:bayes` a ese número. El nombre es suyo para elegir y un prefijo `eq:` mantiene las etiquetas de las ecuaciones distintas de las figuras y tablas. Para citarlo, `\ref{eq:bayes}` imprime el número simple, mientras que `\eqref{eq:bayes}`, de `amsmath`, lo envuelve entre paréntesis para que coincida con la forma en que aparece el número al lado de la ecuación. Prefiera `\eqref` para las ecuaciones para que los dos estilos coincidan.

Debido a que los números se registran en una pasada y se leen en la siguiente, una nueva compilación muestra `??` hasta la siguiente ejecución. [Signos de interrogación en lugar de números](/learn/equations-show-qq/) cubre ese ciclo.

Si nunca se hace referencia a una ecuación mostrada, no la numere. Utilice `\[ ... \]` o la `ecuación*` marcada con asterisco, de modo que los números marquen solo las líneas que un lector podría necesitar encontrar nuevamente.

## Numerar algunas líneas en alineación

Las derivaciones de varias líneas en `align` numeran cada línea de forma predeterminada, lo cual rara vez es lo que desea. Dos comandos ajustan eso por línea:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` suprime el número en su línea, por lo que aquí el paso intermedio permanece sin numerar mientras que la primera y la última línea mantienen sus números y etiquetas. Coloque cada `\label` en la línea que nombra, antes de `\\`, de modo que se vincule al número correcto. El atajo de todo o nada es "alinear*", que no numera nada. La familia completa de entornos multilínea se cubre en [ecuaciones multilínea que se alinean](/learn/align-equations/).

El error común es escribir el número literal, como en "ver Ecuación 3", que se rompe en el momento en que se inserta una ecuación encima. Revise siempre una etiqueta y deje que LaTeX vuelva a numerar en cada compilación. Puede ver la actualización de la numeración en vivo mientras agrega y elimina `\notag` en el [playground](/live/).