---

title: "TikZ independiente a PDF o PNG"
description: "clase independiente y externalizar cachés."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# TikZ independiente a PDF o PNG

Una imagen de TikZ normalmente se encuentra dentro de un documento, pero a menudo necesitas el diagrama como su propio archivo: para reutilizarlo en una plataforma de diapositivas, para entregárselo a un coautor que trabaja en Word, para cargarlo cuando se requiere un PNG o simplemente para evitar volver a compilar un dibujo costoso en cada documento. La clase de documento "independiente" existe exactamente para esto. Escribe una imagen en una página recortada al tamaño de la imagen:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## Qué hacen las opciones de clase

La opción `tikz` carga el paquete TikZ por usted y le indica a `standalone` que recorte la página de salida firmemente alrededor de la `tikzpicture`, de modo que el PDF resultante sea exactamente tan grande como el dibujo, sin márgenes de página. La opción `border=2pt` agrega un cojín de dos puntos en todos los lados, lo que evita que los espectadores o impresores eliminen los trazos que se ubican exactamente en el cuadro delimitador. Compile este archivo como cualquier documento y el resultado será un PDF pequeño y bien recortado que contiene sólo el diagrama.

Prefiero ese PDF, porque es vectorial: se escala a cualquier tamaño sin desenfocarse. Colocarlo en otro documento con `\includegraphics` funciona como se describe en [una página PDF como gráfico](/learn/include-pdf-as-figure/). Cuando realmente se necesita una copia rasterizada, convierta el PDF compilado en lugar de recrear el dibujo. Las herramientas de línea de comandos como `pdftoppm -png -r 300 figure.pdf figure` producen un PNG de 300 ppp, y `pdf2svg` o Inkscape producen SVG. Exporte a 300 ppp o más si se imprimirá el PNG.

## Almacenamiento en caché de imágenes con externalización

Dentro de un documento grande, las imágenes de TikZ se vuelven a dibujar en cada compilación, y un puñado de gráficos complejos pueden dominar el tiempo de compilación. La biblioteca "externa" soluciona este problema compilando cada imagen en su propio PDF una vez y luego reutilizando el archivo almacenado en caché hasta que el código de la imagen cambie:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

La opción `prefijo` mantiene los archivos generados en su propia carpeta. La externalización ejecuta el compilador en un modo que genera subcompilaciones, por lo que necesita habilitar el escape de shell e interactúa mal con algunas configuraciones. Si se le resiste, mueva cada imagen grande a su propio archivo "independiente" e incluya los archivos PDF compilados. Esto le brinda el mismo almacenamiento en caché a mano, con menos maquinaria. Los tiempos de compilación en general se tratan en [espera más corta para el PDF](/learn/speed-up-compilation/).

Un error común merece una advertencia: no hagas una captura de pantalla de un diagrama renderizado para obtener un PNG. Las capturas de pantalla capturan la resolución de la pantalla, que parece aceptable en una vista previa de diapositiva y borrosa en el resto. Convierte desde PDF, donde la resolución es tuya para elegir.