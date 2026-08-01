---

title: "Carteles en A0"
description: "tikzposter, beamerposter o geometría más TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Pósteres en A0

Un cartel de congreso es una sola página, normalmente A0 o A1, que tiene que ser legible a un metro y medio de distancia. LaTeX maneja bien el formato porque el cartel puede reutilizar las ecuaciones, figuras y bibliografía del artículo directamente. Sin embargo, una clase de documento normal no es suficiente: las fuentes, los márgenes y el diseño de las columnas necesitan versiones a escala de póster. Tres enfoques cubren casi todos los carteles de LaTeX que existen.

## Las tres opciones

La clase "tikzposter" es la ruta más directa hacia un póster académico moderno. Organiza el contenido en bloques de colores dispuestos en columnas, incluye varios temas completos y maneja el tamaño de papel grande y las fuentes escaladas. Un esqueleto se parece a esto:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

Las opciones de clase establecen una fuente base de 25 puntos, papel A0 y orientación vertical. Cada `\column{0.5}` ocupa una fracción del ancho del cartel y cada `\block{title}{content}` se convierte en un panel titulado. Cambiar `\usetheme` cambia el estilo de cada bloque a la vez.

El paquete "beamerposter" extiende Beamer a tamaños de póster, por lo que el tema, los colores y los entornos de "bloques" de una plataforma se trasladan a un único marco gigante. Es la elección natural cuando su grupo ya mantiene los estilos Beamer y muchas plantillas de carteles universitarios se basan en ellos.

La tercera opción es una clase de documento simple con el paquete "geometría" que configura dimensiones A0, más TikZ para decoración. Esto brinda control total sobre cada milímetro y es la forma en que se fabrican los carteles más diseñados, pero usted mismo construye el andamio de columnas, así que dedique tiempo real a ello.

## Consejos prácticos

Cualquiera que sea la ruta que elija, comience desde una plantilla funcional en lugar de un archivo en blanco, por ejemplo uno de la [galería](/templates/), y reemplace el contenido bloque por bloque. Establezca el tamaño y la orientación del papel desde el primer día, porque cambiarlos más tarde interrumpe cada ancho ajustado manualmente. El cuerpo del texto debe tener entre 24 y 32 puntos una vez impreso; cualquier valor inferior a 20 puntos no se leerá. Prefiere figuras vectoriales. Un gráfico exportado para una columna de papel se vuelve papilla cuando se escala al ancho de un póster, así que regenere las figuras al tamaño de un póster en lugar de estirarlas.

El error más común es tratar el cartel como si fuera papel comprimido. Planifique aproximadamente un tercio del recuento de palabras de su primer borrador, deje que las cifras transmitan el argumento y verifique el resultado imprimiendo un bloque del PDF en A4 a escala completa para juzgar el tamaño real de la fuente antes de enviar el archivo a un trazador.