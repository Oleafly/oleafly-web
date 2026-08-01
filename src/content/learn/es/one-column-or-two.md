---

title: "Una columna o dos"
description: "Por qué los diseños difieren según el lugar, qué hacen dos columnas con las figuras y ecuaciones, y quién decide."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Una columna o dos

Abra diez periódicos y verá dos tribus: páginas densas de dos columnas que parecen papel de periódico y páginas aireadas de una columna que parecen un libro. Ninguno de los dos es mejor. Cada uno evolucionó por una razón, y la elección casi nunca es tuya.

## Por qué los lugares difieren

Los diseños a dos columnas son una tradición en las conferencias, que nacieron cuando se imprimían las actas y los presupuestos de páginas eran ajustados. Las columnas estrechas contienen más palabras por página y las líneas cortas son más fáciles de escanear. La mayoría de las conferencias de informática (ACM, IEEE y amigos) todavía los utilizan.

Los diseños de una columna dominan en revistas, preimpresiones y tesis. Dan espacio para respirar a ecuaciones, figuras y tablas, y son más amigables para lecturas extensas. Los servidores de preimpresión y muchos lugares de ML han cambiado a una sola columna en parte exactamente por esta razón.

| Diseño | Casa típica | Personalidad |
|---|---|---|
| Dos columnas | Actas de la conferencia | Denso, escaneable, de páginas limitadas |
| Una columna | Revistas, preimpresiones, tesis | Espacioso, legible y compatible con ecuaciones |

## ¿Qué le hacen dos columnas a tus figuras?

En un documento de dos columnas, una "figura" normal flota dentro de una columna, que a menudo es demasiado estrecha para un gráfico detallado. La variante destacada abarca ambas columnas:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

El mismo truco para tablas anchas con `table*`. Un inconveniente: los flotadores con estrellas generalmente aparecen en la parte superior de una página y no pueden ubicarse en la parte inferior o aquí, así que planifique sus cifras amplias con anticipación. Los conceptos básicos sobre el tamaño se encuentran en [insertar imágenes](/learn/insert-images/).

## Las ecuaciones se vuelven apretadas

Una columna de aproximadamente 3,3 pulgadas de ancho es un lugar hostil para ecuaciones largas. En artículos de dos columnas, dividirá ecuaciones con más frecuencia, abreviará de manera más agresiva y se apoyará en entornos de varias líneas. Si su artículo tiene muchas ecuaciones y puede elegir el lugar, una sola columna le ahorrará tiempo real de formato. Consulte [modo matemático](/learn/math-mode/) para conocer las herramientas.

## Las pantallas y los lectores de pantalla prefieren una columna

Para cualquier cosa que no sea un envío formal en papel (informes, documentación, currículums, preimpresiones que la gente leerá en computadoras portátiles y teléfonos), gana una sola columna. Los archivos PDF no se redistribuyen, por lo que las páginas de dos columnas obligan a los lectores de pantalla y a los extractores de texto a adivinar el orden de lectura, y obligan a los humanos a desplazarse hacia arriba y hacia abajo en cada página. Los sistemas de análisis de currículums son conocidos por codificar diseños de varias columnas. Reserva dos columnas para lugares que las demanden.

## La clase de documento decide por ti

Aquí viene la parte relajante: casi nunca lo configuras a mano. El lugar te entrega una clase o plantilla, y el diseño viene con ella.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Escribe tu contenido una vez y al cambiar de plantilla todo se redistribuirá. Para eso está LaTeX: la misma fuente se compila en una versión de conferencia de dos columnas y una preimpresión de una columna con un cambio de una línea. Mantenga sus figuras en formatos vectoriales y sus ecuaciones en entornos estándar, y el cambio de diseño será casi sencillo.