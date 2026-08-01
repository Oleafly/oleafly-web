---

title: "Tu primera foto de TikZ"
description: "Nodos, bordes, una tubería de tres cajas que sigue siendo vectorial."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# Tu primera foto de TikZ

TikZ es un lenguaje de dibujo que se encuentra dentro de su documento LaTeX. En lugar de importar un diagrama exportado desde otra herramienta, lo describe en texto y el compilador lo dibuja. La ventaja es que el resultado son gráficos vectoriales que utilizan las propias fuentes de su documento, por lo que las etiquetas coinciden exactamente con el texto circundante y se mantienen nítidas con cualquier zoom. El costo es que escribes coordenadas y opciones en lugar de arrastrar cuadros. Para los diagramas creados a partir de cuadros y flechas, la compensación suele valer la pena. Aquí hay un pipeline de tres cajas, la primera imagen canónica:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Nodos

Un nodo es una parte de contenido, generalmente texto, colocado en una posición, opcionalmente con una forma dibujada a su alrededor. En `\nodo[dibujar, esquinas redondeadas] (a) {Entrada};` las opciones entre corchetes dicen dibujar el borde del nodo y redondear sus esquinas, `(a)` le da al nodo un nombre al que puede hacer referencia más adelante, y `{Entrada}` es el texto que contiene. El segundo nodo usa `right=of a`, de la biblioteca `positioning`, que lo coloca a la derecha del nodo `a` a la distancia establecida por `node Distance=1.5cm` en las opciones del entorno. Coloque los nodos entre sí en lugar de en coordenadas absolutas, y todo el diagrama se ajustará cuando una etiqueta se alargue.

## Bordes

Una arista es una línea que conecta dos puntos. Debido a que los nodos tienen nombre, los conecta por su nombre: `\draw (a) -- (b);` dibuja una línea recta desde el nodo `a` hasta el nodo `b`. TikZ comienza y termina la línea en los bordes de los nodos en lugar de en sus centros. La opción `[-Latex]` establece el estilo de punta de flecha de la biblioteca `arrows.meta`, dándole a la línea una punta de flecha sólida en su destino. El consejo se aplica una vez por ruta, al final, razón por la cual el ejemplo usa dos comandos `\draw`. Una única ruta `(a) - (b) -- (c)` colocaría una punta de flecha solo en `c`.

## Adónde ir a continuación

Envuelva la "tikzpicture" en un entorno de "figura" cuando necesite un título y un número, exactamente como una imagen. El código TikZ no se representa en estas vistas previas en la página, así que compila el fragmento en un proyecto para ver el resultado. En Oleafly, Diagram Composer también puede producir TikZ editable como punto de partida. El error más común de los principiantes es olvidar el punto y coma que finaliza cada comando de TikZ, lo que produce un error largo y confuso. Cuando un diagrama supere los tres cuadros, continúe con [nodos y flechas](/learn/tikz-nodes-arrows/) y [cuadros de diagrama de flujo alineados](/learn/tikz-flowchart/).