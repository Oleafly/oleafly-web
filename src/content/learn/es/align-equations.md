---

title: "Ecuaciones de varias líneas que se alinean"
description: "alinear, reunir, dividir, formar líneas múltiples y no etiquetar."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Ecuaciones de varias líneas que se alinean

Una derivación de varios pasos se ve mejor con los signos iguales apilados en una columna, de modo que el ojo pueda rastrear lo que cambió de una línea a otra. El paquete `amsmath` proporciona el entorno `align` para eso, además de una pequeña familia de parientes para los casos en los que la alineación no es lo que desea.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## Cómo se lee align

Cada línea es una ecuación, terminada en `\\`; la última línea no necesita ninguno. El `&` marca el punto de alineación y el `&` de cada línea cae en la misma columna. Colocar `&` inmediatamente antes del signo igual es el hábito estándar, por lo que los signos igual se apilan y los lados izquierdos cuelgan hacia la izquierda. Cada línea recibe su propio número de ecuación; escriba `align*` al número ninguno, o agregue `\notag` a líneas individuales para omitir solo esas, como se muestra en [números y punteros para ecuaciones](/learn/number-ecuations/).

El entorno abre la visualización matemática por sí solo, por lo que no debe ubicarse dentro de `\[... \]` o `$ ... $`; anidarlo en otro entorno matemático produce errores confusos.

## La familia

| sobre | Propósito |
| --- | --- |
| `alinear` | Varias líneas, alineadas |
| `alinear*` | Igual, sin numerar |
| `reunir` | Varias líneas, centradas |
| `dividir` | Número de ecuación única de varias líneas |
| `multilínea` | Ecuación larga rota sin alineación |

`reunir` maneja varias ecuaciones sin ningún punto de alineación compartido; centra cada línea y numera cada una. "split" construye una ecuación de varias líneas bajo un solo número y debe ubicarse dentro de la "ecuación". `multiline` rompe una fórmula demasiado larga sin alineación, la primera línea va a la izquierda y la última a la derecha. Los dos últimos se tratan en detalle en [ecuaciones que no encajarán](/learn/break-long-equations/).

Dos preguntas deciden cuál usar: ¿las líneas son ecuaciones separadas o una ecuación rota, y hay un punto de alineación que vale la pena apilar? Separados y alineados: `alinear`. Separados y centrados: `reunir`. Único y alineado: `split`. Único y no alineado: `multilínea`.

## Errores comunes

Una línea sin `&` todavía se compila, pero se centra de forma independiente y no se alinea nada. Dos `&` en una línea inician un segundo par de columnas, que `align` se lee como una segunda columna de ecuaciones colocadas una al lado de la otra; Si su salida tiene ecuaciones que marchan hacia la derecha, cuente sus símbolos. Un `\\` final en la línea final agrega una fila vacía, que aparece como un espacio vertical impar debajo del bloque. Escriba una derivación de tres pasos en el [área de juegos en vivo](/live/) para observar cómo se forma la alineación.