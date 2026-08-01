---

title: "Caer en una figura"
description: "Graphicx, ancho, rutas, PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Colocar una figura

LaTeX no tiene soporte de imágenes incorporado. Todo proviene del paquete `graphicx`, que proporciona el comando `\includegraphics` y, por convención, la imagen está envuelta en un entorno `figure` para que pueda llevar un título y un número. Este es el patrón que usarás cientos de veces:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Qué hace cada línea

La línea `\usepackage{graphicx}` va en el preámbulo, antes de `\begin{document}`, y solo necesita aparecer una vez, sin importar cuántas imágenes incluyas.

El entorno "figura" hace que la imagen flote, lo que significa que LaTeX elige dónde aterriza en lugar de clavarla en este punto exacto del texto. Las letras `[htbp]` son sus preferencias de ubicación: `h` significa aquí donde aparece el código, `t` significa la parte superior de una página, `b` significa la parte inferior de una página y `p` significa una página separada de flotantes. LaTeX los prueba en ese orden y toma el primero que produce una página decente. Si su figura se desplaza a algún lugar sorprendente, ese es un comportamiento normal de flotación, y [dónde aterrizan realmente los flotadores](/learn/position-figures/) explica cómo negociar con ella.

`\centering` centra la imagen horizontalmente dentro del bloque de texto. `width=0.8\textwidth` escala la imagen al 80 por ciento del ancho del texto conservando su relación de aspecto, lo que casi siempre es mejor que especificar un tamaño absoluto en centímetros, porque se adapta si los márgenes del documento cambian. La ruta del archivo es relativa a la raíz del proyecto, por lo que `figures/pipeline.pdf` significa una carpeta `figures` al lado de su archivo principal `.tex`. Finalmente, `\caption` imprime el título numerado y `\label` registra el número para que `\ref{fig:pipeline}` pueda citarlo del texto. La etiqueta debe aparecer después del título, por los motivos que se tratan en [títulos y etiquetas](/learn/captions-labels/).

## Qué formato de archivo usar

Prefiera PDF para cualquier contenido vectorial, es decir, gráficos, diagramas y diagramas de flujo, porque los gráficos vectoriales se mantienen nítidos con cualquier zoom y tamaño de impresión. Utilice PNG para capturas de pantalla y otras imágenes basadas en píxeles. JPG es aceptable para fotografías, donde sus artefactos de compresión son invisibles. Evite incrustar contenido con mucho texto como capturas de pantalla, ya que se ve borroso al imprimir y no se puede buscar.

También cambie el tamaño de fotografías grandes antes de incluirlas. Una foto de 12 megapíxeles mostrada a 8 centímetros de ancho agranda el PDF y ralentiza cada compilación, mientras que una versión reducida a aproximadamente 300 ppp en su tamaño impreso parece idéntica.

## El error a evitar

No luches contra la carroza el primer día exigiendo "[h]" solo. LaTeX a menudo se niega y luego lleva la figura y todo lo que hay detrás hasta el final del capítulo. Escriba `[htbp]`, coloque el código de la figura cerca del párrafo que hace referencia a él primero y deje que los números y las referencias hagan el seguimiento por usted.