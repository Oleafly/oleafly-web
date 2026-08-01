---

title: "Definiciones por partes"
description: "El entorno de casos para condiciones bajo una sola función."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Definiciones por partes

Una función por partes proporciona diferentes fórmulas en diferentes partes de su dominio: el valor absoluto, la activación de ReLU, un programa de tramo impositivo. La convención tipográfica es una llave izquierda alta y única con una fila por caso, cada fila muestra la fórmula y la condición bajo la cual se aplica. El paquete `amsmath` proporciona el entorno `cases`, que produce exactamente este diseño sin ningún tamaño de llave manual.

## El entorno de los casos

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Leyendo esto línea por línea: todo se encuentra dentro de `\[... \]`, por lo que se muestran las matemáticas en su propia línea. `f(x) =` es matemática ordinaria, y luego `\begin{cases}` abre el bloque por partes. En el interior, cada fila tiene dos columnas separadas por `&`: la fórmula a la izquierda, la condición a la derecha. Las filas terminan con `\\`, excepto que la última fila no necesita uno. Cuando se compila, LaTeX dibuja una llave izquierda lo suficientemente alta como para abarcar ambas filas y alinea las fórmulas en una columna y las condiciones en otra.

El `&` está haciendo un trabajo real aquí. Sin él, cada fila sería una sola mancha y las condiciones no se alinearían verticalmente. Con él, `x^2` y `-x` comparten un borde izquierdo, y `x \ge 0` y `x < 0` comparten su propio borde izquierdo, que es lo que hace que la definición sea escaneable.

Deben existir dos cosas para que esto se pueda compilar. Primero, `\usepackage{amsmath}` en el preámbulo, ya que `cases` no es parte del núcleo de LaTeX. En segundo lugar, el entorno debe estar en modo matemático. `cases` crea contenido matemático pero no abre el modo matemático por sí solo. Si falta alguno de ellos, obtendrá el error "Casos de entorno no definidos" o "Falta $ insertados". Esto último se explica en [Dólar faltante insertado](/learn/missing-dollar/).

## Añadiendo las palabras

La mayoría de las definiciones por partes publicadas incluyen la palabra "si" y, a menudo, un "de lo contrario" final. Dado que la columna de condición está en modo matemático, las palabras simples necesitan que `\text{...}` aparezcan en la fuente del documento con el espacio adecuado:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Tenga en cuenta el espacio dentro de `\text{if }`. El modo matemático ignora los espacios que escribes, pero dentro de `\text` los espacios son reales, por lo que colocar uno antes de la llave de cierre separa "si" de la condición que sigue.

## Variantes y un error común

Si las fórmulas son fracciones altas y parecen estrechas, el paquete `mathtools` ofrece `dcases`, un reemplazo directo que establece cada fórmula en el estilo de visualización. También hay "rcasos" para la situación de imagen especular donde la llave pertenece a la derecha.

El error más frecuente es olvidar `\\` entre filas, lo que fusiona silenciosamente dos casos en una larga línea. Si el resultado compilado muestra condiciones que se ejecutan en las fórmulas, cuente primero los saltos de fila. Puedes experimentar con el entorno en vivo en el [patio de juegos](/live/).