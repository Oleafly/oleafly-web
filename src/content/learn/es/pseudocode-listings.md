---

title: "Algoritmos y listados de fuentes"
description: "Boceto y listados de Algoritm2e para código real."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algoritmos y listados de fuentes

Los artículos presentan el código en dos formas distintas y LaTeX tiene una herramienta separada para cada una. El pseudocódigo es un bosquejo idealizado de un algoritmo, compuesto con palabras clave y matemáticas, y el paquete `algorithm2e` lo maneja. Los listados de fuentes son código real reproducido palabra por palabra en una fuente monoespaciada, y el paquete `listings` los maneja. Elegir la herramienta incorrecta es la fuente habitual de fricción, por lo que es útil ver ambas cosas.

## Pseudocódigo con algoritmo2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

Las opciones del paquete establecen el estilo visual: `ruled` dibuja reglas horizontales encima y debajo del algoritmo y coloca el título en la parte superior, la convención que la mayoría de los lugares esperan, mientras que `vlined` dibuja una pequeña línea vertical que marca la extensión de cada bloque, por lo que el anidamiento sigue siendo legible sin sangrías pesadas. El entorno del `algoritmo` es un flotante, como una figura, por lo que lleva el `\caption` que le da un número para que `\ref` lo cite.

En el interior, `\While{condition}{body}` escribe el bucle con una palabra clave en negrita, la condición y el cuerpo como un bloque sangrado. `\For`, `\If` y `\Return` siguen el mismo patrón. Las declaraciones terminan con `\;`, que imprime el terminador de la línea y comienza una nueva línea. Olvidarlo es el clásico error de principiante: las líneas van juntas. Debido a que se trata de LaTeX ordinario, matemáticas como `$\theta$` funcionan en línea, que es para lo que sirve el pseudocódigo: describir la regla de actualización en notación en lugar de en un lenguaje en particular.

## Código real con listados

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

El entorno `lstlisting` reproduce su contenido exactamente, preservando los espacios en blanco y tratando los caracteres especiales literalmente, para que puedas pegar código sin escapar de nada. La opción `language=Python` activa el resaltado de palabras clave para ese idioma, y ​​`listings` conoce docenas de otros. Por defecto, la salida es simple. La mayoría de las personas agregan un `\lstset{basicstyle=\ttfamily\small, number=left}` de una sola vez en el preámbulo para obtener una fuente monoespaciada en un tamaño razonable con números de línea. Para incluir un archivo directamente en lugar de pegarlo, `\lstinputlisting[language=Python]{train.py}` lo lee desde el disco, lo que mantiene el documento sincronizado con la fuente real. Si desea resaltado en color y de alta fidelidad, el paquete "minted" es la alternativa más potente, a costa de requerir una herramienta externa y un escape de caparazón.

## Elegir entre ellos

Utilice pseudocódigo en el cuerpo del artículo para comunicar la idea y reserve listas textuales para elementos en los que el código exacto sea importante, como apéndices o descripciones de herramientas. Un error común es colocar un `lstlisting` dentro de un marco de Beamer sin la opción `[frágil]`, lo cual falla con un error opaco; La misma precaución aparece en [una primera plataforma Beamer](/learn/beamer-basics/).