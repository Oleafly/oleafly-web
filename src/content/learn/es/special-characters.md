---

title: "Personajes que rompen la fuente"
description: "Cómo escribir porcentaje, dólar, signo comercial, guión bajo y llaves sin romper la línea."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Personajes que rompen la fuente

LaTeX reserva un puñado de caracteres cotidianos como sintaxis, y escribir uno donde te refieres al carácter literal detiene la compilación o altera silenciosamente la salida. Cada personaje reservado tiene un escape y todo el conjunto cabe en una pequeña mesa.

| Carbón | Código |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\ barra invertida de texto` |

## Lo que hacen los personajes sin escapar

`%` inicia un comentario, por lo que todo, desde él hasta el final de la línea, se descarta. Ese es el error habitual de "mi oración desapareció": escribe el 50% en un informe y el resto de la línea desaparece sin ningún error. `$` alterna el modo matemático, por lo que uno extraviado pone el texto en cursiva silenciosamente o genera errores lejos del error tipográfico. `&` es la pestaña de alineación en tablas y bloques `align`; fuera de ellos falla con "Pestaña de alineación fuera de lugar". `#` marca los parámetros macro. `_` y `^` pertenecen al modo matemático, y en el texto aparecen "Falta $ insertado", que [tiene su propia lección](/learn/missing-dollar/). `~` es un espacio que no se separa, por lo que una tilde escrita en una URL o ruta se convierte silenciosamente en un espacio. `\` inicia cada comando, por lo que no puede escapar de sí mismo: `\\` es un salto de línea y el carácter literal necesita `\textbackslash`.

## Escapar en la práctica

Para los primeros seis caracteres, el escape es un prefijo de barra invertida y funciona igual dentro de otros comandos:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Tenga en cuenta que el guión bajo necesita su escape incluso dentro de `\texttt`. Los dos escapes de estilo comando, `\textasciitilde` y `\textbackslash`, deben ir seguidos de `{}` o un espacio cuando aparece una letra a continuación, para que el nombre del comando no se trague la siguiente palabra.

Para fragmentos completos de código, rutas o URL, omita el escape por completo. `\verb|...|` y el entorno `verbatim` imprimen su contenido exactamente como se escribió, con cada carácter especial desarmado, y el `\url{...}` del paquete `url` maneja enlaces completos con tildes.

Los personajes que muerden con más fuerza son los que fallan silenciosamente, y `%` lidera esa lista. El texto pegado es el culpable habitual: las URL, los comandos de shell y las cifras financieras contienen caracteres reservados. Cuando una oración desaparezca del PDF, busque en esa línea de la fuente un simple `%` antes que nada.