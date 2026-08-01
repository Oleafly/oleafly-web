---

title: "Forzar o rechazar un salto de página"
description: "nueva página, borrar página, salto de página suave, no salto de página."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Forzar o rechazar un salto de página

LaTeX decide dónde terminan las páginas. La mayoría de las veces decide bien, pero a veces es necesario anularlo: el encabezado de una sección se queda al final de una página, una tabla llega una línea demasiado tarde o desea que cada capítulo de un informe comience de nuevo. LaTeX le ofrece un pequeño conjunto de comandos para esto, que van desde una orden estricta hasta una sugerencia cortés.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## Los descansos difíciles

`\newpage` finaliza la página actual inmediatamente y comienza una nueva. Es la herramienta más contundente y la que más utilizará al redactar.

`\clearpage` hace lo mismo pero primero vacía todos los flotantes pendientes. Las figuras y tablas en LaTeX son flotantes: se desplazan hacia donde el algoritmo encuentra espacio, a veces páginas después del punto donde las escribiste. `\clearpage` fuerza a todos los flotantes que han estado en cola hasta el momento a ingresar a la página antes de continuar, por lo que es el comando correcto al final de un capítulo o antes de una sección donde no quieres rezagados. Si las cifras parecen acumularse al final de su documento, una `\clearpage` bien ubicada suele ser la cura; consulte [por qué se mueven las figuras](/learn/figure-wrong-position/) para conocer la historia completa.

`\cleardoublepage` va un paso más allá en documentos de dos caras: después de vaciar los flotadores, garantiza que la siguiente página sea una página de la derecha (impar), insertando una página en blanco de la izquierda si es necesario. Los capítulos de libros tradicionalmente se abren a la derecha, y la clase `libro` lo llama por usted en cada `\capítulo`.

## Las peticiones suaves

`\pagebreak[n]` no ordena. Pregunta. El número opcional de 0 a 4 indica con qué fuerza: `\pagebreak[1]` significa "un descanso aquí estaría bien", `\pagebreak[4]` significa "un descanso aquí, punto". Los valores medios permiten a LaTeX comparar su deseo con su propio criterio de espaciado, lo que generalmente produce páginas con mejor apariencia que una `\newpage` estricta, porque `\pagebreak` estira el contenido para llenar la página en lugar de dejar un espacio.

`\nopagebreak` es la solicitud opuesta: desaconseja una pausa en ese punto. Es útil justo después de un encabezado o antes de una lista breve que desea mantener con su introducción. Al igual que `\pagebreak`, acepta una intensidad opcional de 0 a 4.

## Cuándo alcanzarlos

El error común es agregar `\newpage` a lo largo de un borrador para arreglar el diseño y luego ver cómo cada corrección se vuelve incorrecta a medida que el texto crece. Los saltos de página dependen de todo lo que tienen delante, por lo que un salto manual que parece perfecto hoy puede dejar una página medio vacía después de su próxima revisión. El flujo de trabajo sensato es escribir todo el documento primero y solo agregar saltos durante la pasada final, prefiriendo el `\pagebreak[3]` suave a los comandos duros siempre que la posición exacta sea negociable.