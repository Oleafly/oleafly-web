---

title: "Operadores que inventas una vez"
description: "DeclareMathOperator para argmin, argmax y nombres similares."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Operadores que inventas una vez

LaTeX se envía con operadores con nombre como `\sin`, `\log` y `\max` que se imprimen en formato vertical con el espacio correcto alrededor de ellos. No viene con `\argmin` o `\argmax`, aunque los artículos de optimización los usan constantemente. Si escribe `argmin` como letras simples dentro del modo matemático, LaTeX lo trata como el producto de seis variables: las letras aparecen en cursiva, juntas, sin espacio para operadores. Declare usted mismo el operador, una vez, en el preámbulo.

## Declarando el operador

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Esto es lo que hace cada pieza. `\DeclareMathOperator` proviene de `amsmath` y crea un nuevo comando cuyo argumento se compone como texto de operador: letras romanas verticales, con las reglas de espaciado que LaTeX ya aplica a `\max` y `\lim`. El primer argumento es el nombre del comando que escribirá, el segundo es el texto que realmente se imprime. El `\,` dentro de `arg\,min` inserta un espacio delgado entre las dos palabras, que se lee mejor que si las juntara.

La estrella después de `\DeclareMathOperator` es importante. Una declaración con estrella hace que el operador se comporte como `\lim`: en matemáticas de visualización, cualquier cosa que adjunte con `_` se ubica directamente debajo del operador en lugar de ir hacia abajo a la derecha. Eso es exactamente lo que desea para `\argmin_\theta`, donde la variable que se está optimizando debería aparecer debajo. Sin la estrella, el subíndice permanece a un lado, que es la convención para operadores como `\log_2`. En matemáticas en línea, el subíndice permanece a un lado en cualquier sentido, para evitar estirar la altura de la línea.

## Reutilizando el patrón

La misma técnica cubre cualquier operador que utilice su campo y que LaTeX no conozca. Algunos comunes:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Observe que `\tr`, `\rank` y `\diag` no están destacados porque sus subíndices, cuando los tienen, pertenecen al lado. Sólo los operadores de estilo límite como `\esssup` obtienen la estrella.

Declarar operadores en el preámbulo en lugar de escribir `\mathrm{argmin}` en línea vale la pena dos veces. La notación se mantiene constante en todo el documento y, si un diario solicita una representación diferente, se cambia una línea en lugar de buscar en cada ecuación. Pruebe la declaración y la línea de visualización juntas en el [área de juegos en vivo](/live/) para ver cómo se comporta la ubicación del subíndice destacado.

Un error común: declarar un operador cuyo nombre choca con un comando existente, como `\max` o `\deg`. LaTeX se detendrá con un error "ya definido". Elija un nombre nuevo o utilice `\renewcommand` solo si realmente tiene la intención de reemplazar el original.