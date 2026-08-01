---

title: "Nodos y flechas"
description: "Nodos con nombre, ubicación relativa, puntas de flecha."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Nodos y flechas

Casi todos los diagramas de TikZ se reducen a dos ingredientes. Un nodo es una pieza de contenido posicionada, normalmente un cuadro o círculo etiquetado. Una arista es una línea o flecha que conecta dos nodos. Una vez que puedas colocar nodos y unirlos, los diagramas de flujo, las tuberías y los diagramas de bloques son todos el mismo ejercicio en diferentes tamaños. El siguiente ejemplo coloca dos cuadros con nombre y dibuja una flecha etiquetada entre ellos:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Nombrar y colocar nodos

En `\node[draw] (src) {Source};`, las opciones de corchetes dan estilo al nodo, y `draw` significa dibujar su borde, sin el cual se obtiene texto flotante. `(src)` es el nombre del nodo y `{Source}` es su contenido. El nombre es la parte importante: permite que otros comandos se refieran a este nodo sin conocer sus coordenadas.

El segundo nodo muestra por qué eso es importante. `right=2cm of src` proviene de la biblioteca `positioning` y coloca `dst` dos centímetros a la derecha de `src`, medido entre sus bordes. La biblioteca también proporciona `izquierda=de`, `arriba=de`, `abajo=de` y combinaciones diagonales como `arriba a la derecha=de`. Cree un diagrama de esta manera (cada nodo en relación con uno existente) y el diseño permanecerá intacto cuando el texto cambie de tamaño. Las coordenadas absolutas como `\nodo en (4,2)` todavía tienen usos, pero un diagrama construido sobre ellas necesita una renumeración manual cada vez que crece un cuadro.

## Dibujando la flecha

`\draw (src) -- (dst);` dibuja una línea recta entre los dos nodos nombrados, y TikZ automáticamente comienza y termina la línea en los bordes de los nodos en lugar de en sus centros. La opción `[-{Latex}]` especifica las puntas de las flechas: nada antes del guión significa que no hay punta de cola, y `Latex` después selecciona una punta de flecha sólida de la biblioteca `arrows.meta` en el destino. Escribir `{Latex}-{Latex}` daría una flecha de dos puntas.

El `nodo[arriba] {borde}` a mitad de camino es una etiqueta adjunta a la línea misma. Un nodo escrito dentro de una ruta se coloca en ese punto de la ruta, a la mitad de forma predeterminada, y "arriba" lo desplaza justo encima de la línea para que el texto no quede en el trazo. Esta es la forma estándar de anotar transiciones y flujos de datos.

## Hábitos que dan frutos

Nombra cada nodo, incluso en diagramas pequeños. No se pueden conectar nodos sin nombre y los diagramas pequeños rara vez permanecen pequeños. Prefiera la ubicación relativa del "posicionamiento" a las coordenadas absolutas por el mismo motivo. Cada declaración de TikZ termina con un punto y coma. Omitir uno es el error más común de TikZ y los mensajes a menudo apuntan muy lejos del problema real. Para organizar muchos cuadros en filas y columnas ordenadas, continúe con [cuadros de diagrama de flujo alineados](/learn/tikz-flowchart/).