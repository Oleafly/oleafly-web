---

title: "Un archivo raíz, muchos capítulos"
description: "incluir versus entrada, incluir solo y redactar un capítulo a la vez."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Un archivo raíz, muchos capítulos

Una tesis en un solo archivo `.tex` se vuelve miserable para trabajar en algún momento alrededor del segundo capítulo: el desplazamiento reemplaza el pensamiento, y cada compilación procesa todo. La solución estándar es un archivo raíz que contiene la clase y el preámbulo, con cada capítulo en su propio archivo. El archivo raíz los une.

## El archivo raíz

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` es el único archivo que compila. Cada `\include` nombra otro archivo sin su extensión `.tex`, usando barras diagonales en cada plataforma, y ​​extrae su contenido en ese punto. Los archivos de capítulos en sí solo contienen contenido, que normalmente comienza con `\chapter{...}`. No tienen ningún entorno `\documentclass` ni `document` propio, porque son fragmentos de este documento, no documentos.

## incluir versus entrada

Los dos comandos de inclusión se comportan de manera diferente y las diferencias deciden cuál usar y dónde. `\include` inicia una nueva página antes del material, que se adapta a los capítulos, y escribe un archivo `.aux` separado para cada archivo incluido, que es lo que hace posible la compilación selectiva. `\input` es un pegado de texto simple: sin saltos de página, sin `.aux` separado, y se puede anidar dentro de otra entrada. Eso hace que `\input` sea la herramienta adecuada para fragmentos más pequeños que un capítulo, como una tabla grande guardada en su propio archivo o un [archivo de macros] compartido (/learn/custom-commands/). Una regla estructural a recordar es que `\include` no se puede anidar dentro de un archivo incluido, mientras que `\input` se puede usar en cualquier lugar.

## Redactando un capítulo a la vez

```latex
\includeonly{chapters/methods}
```

Colocado en el preámbulo, `\includeonly` le dice a LaTeX que procese solo los archivos enumerados mientras sigue leyendo los datos `.aux` guardados de todos los demás. La compilación se vuelve dramáticamente más rápida y debido a que las etiquetas y el recuento de páginas de los otros capítulos se reproducen desde sus archivos `.aux`, las referencias cruzadas y la numeración en el capítulo que está redactando se mantienen correctas. Esa segunda mitad es la razón para preferir esto a comentar las líneas `\include`, lo que olvida los otros capítulos por completo y convierte cada `\ref` en `??`.

Comente la línea `\includeonly` para compilaciones completas y siempre ejecute una compilación completa antes de compartir un PDF, ya que los datos `.aux` obsoletos pueden retrasarse con respecto a las ediciones realizadas en los capítulos excluidos. Para saber qué archivos de la carpeta resultante son suyos y cuáles se generan, consulte [los archivos en un proyecto real](/learn/latex-file-types/).