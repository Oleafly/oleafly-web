---

title: "Diagramas conmutativos"
description: "tikz-cd flechas y etiquetas sin sopa de coordenadas."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Diagramas conmutativos

Un diagrama conmutativo es una cuadrícula de objetos unidos por flechas etiquetadas, la imagen estándar en teoría de categorías, álgebra y topología. Raw TikZ puede dibujar uno, pero colocar cada nodo por coordenada es lento y frágil. El paquete `tikz-cd` envuelve TikZ en una sintaxis similar a una matriz: colocas los objetos como una tabla y describe cada flecha según su dirección.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## Leyendo la sintaxis

La cuadrícula funciona como una matriz: `&` separa columnas y `\\` separa filas, por lo que este diagrama tiene A y B en la fila superior y C y D en la inferior. Cada `\flecha[...]` pertenece a la celda en la que está escrita y apunta en dirección opuesta a ella. La primera opción es la dirección, escrita con las letras `r`, `l`, `u` y `d`: `\arrow[r]` va una celda hacia la derecha, `\arrow[d]` una celda hacia abajo. Las letras se combinan y se repiten para diagonales y tramos más largos, por lo que "rd" está un paso hacia abajo a la derecha y "rr" abarca dos columnas.

Una etiqueta entre comillas monta la flecha. Por defecto, se encuentra en un lado; un número primo después de la comilla de cierre, como en `"g"'', lo invierte hacia el otro lado. En el ejemplo, los números primos mantienen las cuatro etiquetas en el exterior del cuadrado, que es la disposición limpia habitual.

## Más opciones de flecha

Se acumulan más opciones después de la dirección y la etiqueta para cambiar el estilo de la flecha. "gancho" dobla la cola en una flecha de inclusión, "dos cabezas" duplica la cabeza para una sobreyección, "discontinuo" marca un mapa que estás afirmando en lugar de asumir, y "flecha derecha" produce la flecha de doble eje utilizada para transformaciones naturales. Una flecha típica de propiedad universal dice `\flecha[rd, discontinua, "\exists u"']`. Cuando un diagrama se siente apretado, las opciones de espaciado en el entorno ayudan, por ejemplo `\begin{tikzcd}[column sep=large]`.

## Notas prácticas

`tikz-cd` carga TikZ, por lo que no se necesita una línea `\usepackage{tikz}` separada, y los diagramas se compilan con un motor estándar y sin herramienta de dibujo externa. El error estructural más común es una cuadrícula desigual: las filas con diferentes números de separadores "&" desplazan los objetos a las columnas equivocadas y las flechas aterrizan en lugares impares. Comience desde un cuadrado de trabajo como el de arriba, haga crecer una fila o columna a la vez y vuelva a compilar a medida que avanza. Los diagramas son mucho más fáciles de depurar a simple vista que desde el código fuente, y el [área de juegos en vivo](/live/) le brinda esa retroalimentación a medida que escribe.