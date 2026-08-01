---

title: "Vectores y símbolos en negrita"
description: "mathbf, negrita y una macro vectorial consistente."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vectores y símbolos en negrita

Muchos campos establecen vectores y matrices en negrita: **x** para un vector, **A** para una matriz, beta en negrita para un vector de coeficientes. En LaTeX hay dos comandos en negrita diferentes para matemáticas y no son intercambiables. Saber cuál elegir y envolver la elección en una macro mantiene la notación consistente a lo largo de toda una tesis.

## Los dos comandos

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` cambia su argumento a una fuente romana en negrita y vertical. Funciona bien con letras latinas, por lo que `\mathbf{A}` proporciona una A sólida y vertical en negrita, que muchos textos usan para matrices. Su limitación es que solo cubre letras y dígitos: `\mathbf{\beta}` no hace nada útil, porque la fuente romana en negrita simplemente no tiene glifos griegos y la versión beta se imprime sin cambios.

`\boldsymbol`, proporcionado por `amsmath` (técnicamente por la maquinaria similar a `bm` en `amsbsy`, que carga `amsmath`), envalentona cualquier símbolo que le entregues manteniendo su forma. `\boldsymbol{\beta}` produce una beta en negrita y cursiva, y `\boldsymbol{x}` produce una x en negrita y cursiva, que coincide con el estilo inclinado de las variables matemáticas ordinarias. Si su convención es que los vectores estén en negrita y cursiva, este es el comando que desea.

Entonces, la división práctica es: letras latinas en negrita, verticales, use `\mathbf`; cualquier cosa en griego o negrita que deba permanecer en cursiva, use `\boldsymbol`.

## Definir macros una vez

En lugar de escribir estos comandos a lo largo del documento, defina macros semánticas en el preámbulo:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Ahora escribe `\vect{x}` para un vector y `\mat{A}` para una matriz. El `[1]` dice que cada macro toma un argumento, y `#1` es donde aterriza ese argumento. La recompensa llega más tarde: si una revista requiere que los vectores estén en negrita vertical en lugar de cursiva y negrita, edita una línea para que `\vect` ajuste `\mathbf` y cada vector en el artículo se actualice en la siguiente compilación. Esto supera la búsqueda y reemplazo en doscientas ecuaciones.

Las macros también hacen que la intención sea legible en el código fuente. Dentro de seis meses, `\vect{w}` te dice que w es un vector; un simple `\boldsymbol{w}` solo te indica que está en negrita.

## Un error común

No finjas griego en negrita con `\textbf` dentro de math, y no uses `\mathbf` y asumas que funcionó. Compile y observe de cerca: una versión beta sin negrita junto a vecinas en negrita es fácil de pasar por alto en la pantalla y obvia en la impresión. Si desea observar a los candidatos rápidamente, pegue una línea como `\boldsymbol{\beta} \mathbf{\beta} \beta` en el [área de juegos en vivo](/live/) y compare los tres uno al lado del otro. Para poner en negrita ecuaciones enteras, incluidos símbolos como `\sum`, consulte el comando `\bm` del paquete `bm`, que maneja más clases de símbolos que `\boldsymbol`.

La negrita en el texto corriente es un tema diferente con diferentes comandos; ver [énfasis en el texto](/learn/bold-italic/).