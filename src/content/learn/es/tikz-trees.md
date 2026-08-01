---

title: "Árboles y gráficos simples."
description: "Sintaxis secundaria y botones de espaciado."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Árboles y gráficos simples.

Las jerarquías aparecen constantemente: árboles de análisis, árboles de decisión, diseños de archivos, taxonomías. Dibujar una caja a la vez con "posicionamiento" funciona, pero mantener a los hermanos distribuidos uniformemente y los niveles espaciados uniformemente a mano es tedioso. La biblioteca `trees` de TikZ te permite describir la jerarquía misma, usando operaciones `child` anidadas, y calcula el diseño por ti:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## Leyendo la sintaxis secundaria

La imagen contiene una sola declaración. Comienza con la raíz, `\node{A}`, y cada `child{...}` adjunto declara un subárbol. Un hijo generalmente contiene un `nodo{...}` para su propia etiqueta y puede contener más operaciones `hijos`, que es la forma en que `C` obtiene los hijos `D` y `E`. El anidamiento de tirantes refleja el anidamiento del árbol, por lo que se puede leer la estructura directamente desde la sangría. TikZ coloca cada nivel debajo del anterior y dibuja los bordes de conexión automáticamente. La declaración one termina con un punto y coma después de la llave final. Un punto y coma extra o faltante dentro de la estructura es la causa habitual de errores aquí.

## Las tres perillas de diseño

Las opciones en la parte superior controlan la apariencia y el espaciado. `cada nodo/.style={draw, círculo, tamaño mínimo=7 mm}` aplica un estilo a todos los nodos a la vez: cada uno obtiene un borde dibujado, una forma circular y un diámetro mínimo de 7 mm, por lo que las letras individuales producen círculos uniformes. `level Distance=12mm` establece el espacio vertical entre un padre y sus hijos. `diferencia entre hermanos = 18 mm` establece la brecha horizontal entre hijos adyacentes del mismo padre.

La distancia entre hermanos es la perilla que más ajustará. La biblioteca "árboles" reserva el mismo ancho para cada subárbol en un nivel determinado, por lo que los subárboles anchos pueden colisionar si el valor es demasiado pequeño. La solución estándar es ampliar el espacio cerca de la parte superior, donde los subárboles son más anchos, con configuraciones por nivel como `level 1/.style={sibling Distance=36mm}` y `level 2/.style={sibling Distance=18mm}`. Si sus etiquetas difieren mucho en ancho, cambie de círculos a rectángulos eliminando "círculo" del estilo compartido.

## Más allá de los árboles pequeños

Los bordes eligen el estilo a través de `edge from parent/.style`, por ejemplo, para agregar puntas de flecha o líneas más gruesas. Para árboles de más de una docena de nodos, o para gráficos generales con ciclos, la biblioteca "árboles" se vuelve limitante. El paquete "bosque" maneja árboles grandes con embalaje automático. La biblioteca `graphs` con los algoritmos `graphdrawing` cubre gráficos arbitrarios, aunque esa ruta requiere LuaLaTeX. TikZ no se muestra en estas vistas previas en la página, así que compila el ejemplo para ver el diseño. Comience con lo básico en [su primera imagen de TikZ](/learn/tikz-intro/) si esta sintaxis es nueva.