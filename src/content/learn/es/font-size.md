---

title: "Tipo más grande y más pequeño"
description: "Opciones de clase como 11 puntos y cambios de tamaño local que no arruinan el espacio entre líneas."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Tipo más grande y más pequeño

El tamaño de letra en LaTeX se establece en dos niveles: un tamaño base para todo el documento elegido una vez en las opciones de clase y conmutadores locales para intervalos que deben diferir. El tamaño de la base impulsa todo lo demás. Los títulos, las notas a pie de página y los tamaños locales se definen en relación con él.

## Todo el documento

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

La opción de clase establece el tamaño del texto del cuerpo. `10pt` es el valor predeterminado, y `11pt` y `12pt` son las alternativas comunes; las clases estándar solo admiten estos tres. Al cambiar la opción se cambia la escala de todo el documento en proporción, ya que los tamaños de los títulos, los tamaños de las notas al pie y el interlineado se derivan de la base. Si necesita un tamaño base superior a 12 puntos, clases como `extarticle` o las clases KOMA-Script aceptan una gama más amplia de opciones.

## Conmutadores locales

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Estas son declaraciones en lugar de comandos con argumentos: `\large` cambia el tamaño desde ese punto hasta que termina el grupo actual, y las llaves alrededor de `{\largelarge}` son las que limitan su alcance. La escalera completa, de menor a mayor, es `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Cada paso se asigna a un tamaño concreto que depende de la opción de clase, por lo que "\large" en "12pt" es mayor que "\large" en "10pt". Piense en los interruptores como pasos alejados del cuerpo del texto, no como tamaños fijos.

El interlineado tiene una sutileza. Un interruptor de tamaño ajusta la distancia de la línea base solo para los párrafos que terminan mientras está activo. Para un intervalo de varios párrafos de mayor tamaño, mantenga el salto de párrafo dentro del grupo terminando con `\par` antes de la llave de cierre, como en `{\large... \par}`. De lo contrario, el último párrafo mantiene un interlineado de tamaño normal debajo de letras de gran tamaño y las líneas chocan.

## Tamaños versus estructura

Resista el uso de cambios de tamaño para falsificar títulos. `\section` y sus parientes establecen el tamaño por usted, y también numeran el encabezado, lo agregan a la tabla de contenido y crean marcadores PDF. Una línea `{\Large \textbf{...}}` construida a mano no proporciona nada de eso. La misma idea se aplica al énfasis, cubierto en [énfasis sin luchar contra la fuente](/learn/bold-italic/). Reserve los cambios de tamaño manuales para necesidades genuinamente locales, como un comentario del tamaño de una nota a pie de página debajo de una tabla o una línea en una página de título. Si es necesario modificar cada título de un documento, cambie la clase o utilice un paquete como `titlesec` en lugar de cambiar el tamaño de cada título a mano.