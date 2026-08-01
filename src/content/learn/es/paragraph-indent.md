---

title: "Sangría o espacio entre párrafos"
description: "parindent, parskip, noindent para una sola línea."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Sangría o espacio entre párrafos

La tipografía tiene dos formas estándar de mostrar dónde termina un párrafo y comienza el siguiente: sangrar la primera línea de cada nuevo párrafo o dejar un espacio vertical entre los párrafos sin sangría. Los libros y revistas casi siempre utilizan el primero. Las páginas web y los documentos comerciales utilizan el segundo. LaTeX utiliza de forma predeterminada la convención del libro, sangrando cada párrafo excepto el primero después del título de una sección, sin espacios adicionales entre los párrafos. Si quieres el otro estilo, cambias dos largos.

## Las dos longitudes que lo controlan todo

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` es el ancho de la sangría de primera línea. Configurarlo en `0pt` con `\setlength` elimina la sangría en todas partes. `\parskip` es el espacio vertical insertado entre párrafos, normalmente cero (más un pequeño estiramiento); configurarlo en `0.8em` da un espacio visible, un poco menos que una línea en blanco completa. La unidad `em` escala con el tamaño de fuente, lo que mantiene el espaciado proporcional si luego cambias el [tamaño de fuente](/learn/font-size/). Coloque ambas líneas en el preámbulo y todo el documento seguirá el estilo de bloque.

Si sigue este camino, tenga en cuenta que un simple cambio de `\parskip` también amplía el espacio alrededor de los encabezados de las secciones, los elementos de la lista y la tabla de contenido, porque estos también se crean a partir de párrafos. Para algo más largo que una nota breve, cargar el paquete `parskip` (`\usepackage{parskip}`) aplica el mismo estilo mientras parchea esos efectos secundarios por usted.

## Suprimiendo una sola sangría

Párrafo único: coloque `\noindent` al principio, antes de la primera palabra. Esto suprime la sangría solo para ese párrafo y es útil después de una ecuación mostrada, una lista de códigos o una tabla cuando el siguiente texto es una continuación del mismo pensamiento en lugar de un nuevo párrafo. La situación inversa, forzar una sangría donde LaTeX omite una (como el primer párrafo después de un encabezado), se maneja mediante el pequeño paquete `indentfirst` en lugar de una solución manual.

Mientras estamos aquí: un nuevo párrafo en LaTeX se crea mediante una línea en blanco en el código fuente, no mediante `\\`. El comando `\\` es un salto de línea dentro del mismo párrafo, y usarlo para simular el espaciado entre párrafos produce advertencias de falta de contenido y espacios desiguales. La [lección de párrafos y nuevas líneas](/learn/paragraphs-newlines/) cubre esta distinción en su totalidad.

## Elige un estilo y mantenlo

Elija sangría **o** estilo parskip y mantenga la coherencia. Las dos convenciones son alternativas, no capas: los párrafos con sangría y grandes espacios entre ellos parecen un borrador, y la sangría cero con espacio cero deja al lector incapaz de ver dónde comienzan los párrafos. Si está escribiendo para una revista o conferencia, no cambie ninguna de las longitudes; el archivo de clase ya implementa la elección del editor, y su anulación será lo primero que revierta el editor de diseño.