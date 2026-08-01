---

title: "Ecuaciones que no encajan"
description: "línea múltiple y división cuando la medida es demasiado estrecha."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Ecuaciones que no encajan

Tarde o temprano, una derivación produce una ecuación más ancha que el bloque de texto, y LaTeX permitirá que llegue al margen en lugar de adivinar dónde dividirlo. Dos entornos "amsmath" le permiten colocar el corte usted mismo: "multilínea" para una única expresión larga y "split" para un corte que debe permanecer alineado.

## varias líneas

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

"multilínea" se adapta a una fórmula larga sin un punto de alineación natural. Usted elige el salto con `\\` y el entorno maneja el diseño: la primera línea se coloca al ras a la izquierda, la última a la derecha y las líneas intermedias se centran. La expresión completa obtiene un número de ecuación, ubicado en la última línea. La convención es interrumpir antes de un operador binario, por lo que `+` abre la línea de continuación y el lector ve de un vistazo que la expresión continúa.

## dividir

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

`split` también produce un solo número, pero alinea sus líneas de la misma manera que lo hace `align`, con `&` marcando el punto de alineación. No es un entorno independiente; vive dentro de la "ecuación" u otro entorno de visualización, que proporciona el número. Aquí, `&` se encuentra antes del signo igual en la primera línea, y la continuación comienza con `&\quad`, un punto de alineación vacío seguido de un espacio cuádruple, por lo que la segunda línea sangra justo después del signo igual. Esa sangría le dice al lector que esto sigue siendo el lado derecho, no una ecuación nueva.

## Elegir entre ellos

Utilice "multilínea" cuando la ecuación sea una suma larga sin una estructura que valga la pena alinear. Utilice `split` cuando haya un signo igual bajo el cual deba colgarse la continuación. Si tienes varias ecuaciones genuinamente separadas, ninguna es correcta; ese es un trabajo para "alinear", cubierto en [ecuaciones de múltiples líneas que se alinean] (/aprender/alinear-ecuaciones/).

Antes de optar por cualquiera de las dos cosas, considere reescribir las matemáticas. Nombrar una subexpresión en la oración anterior, factorizar o dividir en dos ecuaciones a menudo permite controlar el ancho y también se lee mejor. Prefiero eso a reducir el tipo. Una pantalla ajustada casi siempre se lee peor que una rotura limpia.

Un error que debe conocer: `split` usado solo, sin una `ecuación` adjunta, se detiene con un "Error de paquete matemático". Envuélvalo primero y luego compílelo. Se puede experimentar rápidamente con ambos entornos en el [área de juegos en vivo](/live/).