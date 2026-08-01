---

title: "Revelar líneas al hacer clic"
description: "Superponga especificaciones, haga pausa, únicamente, sin exagerar."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Revelar líneas al hacer clic

Un marco Beamer puede ser más de una diapositiva física. Cuando revela las viñetas una a la vez, Beamer genera varias páginas PDF a partir del mismo marco, cada una de las cuales muestra un poco más. Avanzando en el visor de PDF se avanza a través de ellos. Estas páginas generadas se denominan superposiciones. Aprender a controlarlos es lo que convierte una plataforma estática en una charla con ritmo.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Especificaciones de superposición

La notación entre corchetes angulares después de `\item` es una especificación de superposición. Indica en qué superposiciones del marco es visible el elemento. El número es el índice de superposición dentro de este marco y el guión lo convierte en un rango: `<2->` significa desde la superposición 2 en adelante, por lo que el elemento aparece en el segundo paso y permanece. Un `<2>` simple significaría solo la superposición 2, por lo que el elemento aparecería y luego desaparecería. También puedes dar listas como `<1,3>`. Beamer crea tantas superposiciones como el número más alto mencionado, por lo que el marco de arriba produce tres páginas PDF.

Las especificaciones de superposición funcionan en más que elementos. `\textbf<2->{key term}` pone en negrita el texto desde la superposición 2 en adelante, y `\only<2>{...}` incluye su contenido únicamente en la superposición 2. Debido a que `\only` elimina el contenido por completo en otras superposiciones, el diseño circundante vuelve a fluir, lo que la convierte en la herramienta para reemplazar una figura con otra en el mismo lugar: asigne a dos bloques `\only` la misma posición y especificaciones consecutivas. Su primo `\uncover` reserva el espacio mientras oculta el contenido, por lo que nada se mueve.

## La herramienta más sencilla

`\pause` divide el cuadro en ese punto. Todo lo anterior se muestra inmediatamente, todo lo posterior espera el siguiente paso y los comandos `\pause` repetidos crean pasos sucesivos. No necesita números ni planificación, por lo que es el valor predeterminado correcto para una revelación sencilla de arriba a abajo. Busque especificaciones explícitas solo cuando el orden de revelación difiera del orden de origen, o cuando los elementos deban aparecer y desaparecer.

Un atajo útil cuando cada elemento de una lista debe ir en orden es `\begin{itemize}[<+->]`, que asigna números superpuestos crecientes automáticamente.

## Restricción

Las superposiciones son fáciles de usar en exceso. Una plataforma donde cada viñeta de cada diapositiva hace clic de una en una agota al presentador (clic constante) y a la audiencia (sin lectura anticipada). Reserve revelaciones escalonadas para los pocos lugares donde el ritmo conlleva un argumento, como construir una derivación o contrastar el antes y el después. Cada superposición es una página PDF real, por lo que las copias del folleto se disparan a menos que se compile con `\documentclass[handout]{beamer}`, que colapsa cada cuadro hasta su superposición final. Los conceptos básicos del marco se tratan en [una primera plataforma Beamer](/learn/beamer-basics/).