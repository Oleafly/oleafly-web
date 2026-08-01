---

title: "Cabezas y pies corriendo"
description: "Patrones fancyhdr para título y número de página."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Correr cabezas y pies

Un encabezado es la franja de texto en la parte superior de cada página, y el pie es su contraparte en la parte inferior. En un libro o tesis suelen llevar el título del capítulo y el número de página. En un artículo enviado, es posible que incluyan una versión breve del título, los autores o nada en absoluto. Los estilos de página integrados de LaTeX (`plain`, `vacío`, `headings`) cubren lo básico, pero en el momento en que deseas una combinación específica, como tu título a la izquierda y el número de página a la derecha, buscas el paquete `fancyhdr`.

## La receta estándar

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Cada línea aquí hace un trabajo. `\usepackage{fancyhdr}` carga el paquete en su preámbulo. `\pagestyle{fancy}` cambia todo el documento al estilo configurable de fancyhdr. `\fancyhf{}` borra todos los campos de encabezado y pie de página, lo cual es importante porque fancyhdr viene con valores predeterminados (número de página y marcas de sección) que casi nunca querrás mezclar con los tuyos. Empezar desde cero evita las sorpresas.

Las dos líneas siguientes rellenan los campos nuevamente. `\fancyhead[L]{Título corto}` coloca el texto literal en el espacio izquierdo del encabezado, y `\fancyhead[R]{\thepage}` coloca el número de página actual en el espacio derecho. `\thepage` es un comando que se expande al número de página, por lo que se actualiza automáticamente en cada página. Hay un `\fancyfoot[L/C/R]{...}` coincidente si prefieres poner las cosas en la parte inferior.

Finalmente, `\headrulewidth` controla la delgada línea horizontal debajo del encabezado. Establecerlo en `0.4pt` dibuja una línea de cabello; configúrelo en `0pt` para eliminar la regla por completo. También existe un `\footrulewidth` y el valor predeterminado es cero.

## Documentos de dos caras

Si su clase de documento usa "dos lados" (el valor predeterminado para "libro"), las páginas alternan entre pares e impares, y los encabezados generalmente se reflejan entre sí. fancyhdr maneja esto con selectores pares/impares: `\fancyhead[LE,RO]{\thepage}` coloca el número de página a la izquierda de las páginas pares y a la derecha de las páginas impares, que es donde el pulgar del lector lo encuentra. Puede combinar esto con `\leftmark` y `\rightmark`, que contienen los títulos de capítulos y secciones actuales, para reproducir el diseño clásico del libro.

## Páginas de capítulos y la mirada vacía.

Las páginas de apertura del capítulo ignoran su estilo elegante porque `\chapter` llama a `\thispagestyle{plain}` detrás de escena. Esto es deliberado y la mayoría de los diseños lo mantienen. Si desea que esas páginas estén desnudas, agregue `\fancypagestyle{plain}{\fancyhf{}}` para redefinir lo que significa `plain`.

Una advertencia común a esperar: fancyhdr puede quejarse de que `\headheight` es demasiado pequeño. La solución es exactamente lo que sugiere el mensaje, por ejemplo `\setlength{\headheight}{14pt}` en el preámbulo, o pasar `headheight=14pt` al [paquete de geometría](/learn/margins-geometry/) si ya lo usa. Es una reserva de diseño, no un error, pero silenciarlo mantiene el registro limpio y la cuadrícula base honesta.