---

title: "Cuadros de diagrama de flujo alineados"
description: "biblioteca de posicionamiento para que las columnas compartan un borde."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Cuadros de diagrama de flujo alineados

Un diagrama de flujo parece amateur exactamente por una razón: cuadros que casi se alinean. TikZ evita el problema estructuralmente, porque cada cuadro se coloca en relación con otro, por lo que una columna de cuadros comparte un eje por construcción en lugar de por observación. El segundo ingrediente es un estilo con nombre, por lo que todas las cajas coinciden en su forma y tamaño mínimo. Aquí hay un flujo vertical de tres pasos:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Definir un estilo una vez

La línea `box/.style={...}` crea un estilo reutilizable llamado `box`. Su contenido son opciones de nodo ordinarias: `draw` le da al nodo un borde, `redondear esquinas` lo suaviza, `align=center` centra el texto de varias líneas dentro del nodo y `minimum width=2.8cm` obliga a cada cuadro a tener al menos ese ancho para que las etiquetas cortas no se reduzcan a cuadros pequeños. A partir de ese momento, `\node[box]` aplica todo el conjunto. Cuando desee un color de relleno o un ancho mayor, cambie una línea y se actualizará todo el gráfico. Ese es un diagrama que usted mantiene, no uno que vuelve a dibujar.

## Espaciado en dos direcciones

`distancia de nodo = 10 mm y 14 mm` establece los espacios predeterminados utilizados por la biblioteca de `posicionamiento`: el primer valor es la distancia vertical, el segundo la horizontal. Con esto en su lugar, `below=of i` coloca el cuadro de proceso 10 mm debajo del cuadro de entrada, de borde a borde y perfectamente centrado en él. Una segunda columna usaría `right=of p` y aterrizaría 14 mm hacia un lado. Debido a que cada ubicación encadena un nodo existente, insertar un paso significa agregar un nodo y actualizar una referencia `debajo=de`. Todo lo que ocurre aguas abajo cambia con él. También puede anular la distancia por nodo, como en "abajo = 15 mm de i".

## Conectando los pasos

Cada `\draw[-Latex] (i) -- (p);` dibuja una flecha de un nodo con nombre al siguiente, con `-Latex` seleccionando una punta de flecha sólida de la biblioteca `arrows.meta` en el extremo de destino. Las flechas se conectan automáticamente en los bordes de los nodos. Para una rama de decisión, dibuje desde anclajes específicos, por ejemplo `(p.east)` para salir desde el lado derecho, y enruta con curvas como `-- ++(2,0) |-` una vez que el gráfico necesite esquinas.

La salida de TikZ no se muestra en estas vistas previas en la página, así que compila el fragmento para verlo. El error clásico en los diagramas de flujo es colocar algunos cuadros con coordenadas absolutas "sólo por esta vez": esos cuadros son los que terminan desalineados después de la siguiente edición. Mantenga cada ubicación relativa y consulte [nodos y flechas](/learn/tikz-nodes-arrows/) para conocer las opciones de ubicación subyacentes.