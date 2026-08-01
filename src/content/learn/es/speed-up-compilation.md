---

title: "Espera más corta para el PDF"
description: "Cifras preliminares, solo incluyen, TikZ externalizado, CPU local."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Espera más corta para el PDF

Una tesis que tarda noventa segundos en compilarse cambia la forma en que se escribe. Dejas de recompilar después de pequeñas ediciones, los errores se acumulan sin ser vistos y el ciclo de retroalimentación que hace que LaTeX sea agradable desaparece. Antes de optimizar, sepa adónde va el tiempo. En la mayoría de los documentos extensos, no es el número de paquetes sino un puñado de recursos pesados, sobre todo imágenes grandes e imágenes complejas de TikZ, lo que domina la construcción. Las técnicas siguientes atacan a aquellos directamente.

## Salta las cifras mientras redactas

La opción "borrador" hace que LaTeX reemplace cada imagen con un cuadro vacío del mismo tamaño, lo que conserva el diseño y los saltos de página y omite el procesamiento de la imagen:

```latex
\documentclass[draft]{article}
```

El "borrador" a nivel de clase también marca líneas demasiado llenas con barras negras, lo que algunas personas encuentran útil y otras encuentran ruidoso. Para limitar el efecto a imágenes, pase la opción al paquete, como `\usepackage[draft]{graphicx}`, o a un único culpable con `\includegraphics[draft]{...}`. Recuerde eliminarlo antes de compartir un PDF, ya que un borrador parece roto para cualquiera que no conozca la opción. Independientemente del modo borrador, reduzca la escala de las fotografías grandes una vez, como se describe en [colocar una figura](/learn/insert-images/), porque una imagen de 40 megabytes le cuesta una eternidad en cada compilación.

## Compile solo el capítulo actual

Si sus capítulos se encuentran en archivos separados extraídos con `\include`, el comando `\includeonly` restringe una compilación a los archivos que nombre:

```latex
\includeonly{chapters/04-results}
```

Póngalo en el preámbulo y LaTeX compilará solo ese capítulo mientras lee los archivos `.aux` de los demás, de modo que los números de página y las referencias cruzadas del resto del documento permanezcan aproximadamente correctos. Este es el mayor ahorro para una tesis, ya que rutinariamente convierte una construcción de un minuto en segundos. Solo funciona con `\include`, no con `\input`, que es una de las razones para estructurar documentos largos como se describe en [dividir un documento en archivos](/learn/split-chapter-files/).

## Caché de imágenes caras

Las imágenes de TikZ se vuelven a dibujar desde cero en cada compilación. La biblioteca `external`, cargada con `\usetikzlibrary{external}` más `\tikzexternalize`, compila cada imagen en su propio PDF una vez y la reutiliza hasta que el código cambia. La configuración tiene bordes nítidos y la alternativa manual de mover imágenes grandes a archivos independientes funciona igual de bien; ambos están cubiertos en [TikZ independiente a PDF o PNG](/learn/tikz-export/).

## Menos pasadas, plancha más rápida

La bibliografía y la resolución de referencias cruzadas requieren varias pasadas, pero al redactar prosa rara vez las necesitas, por lo que una sola pasada rápida es suficiente y la secuencia completa puede esperar hasta que verifiques las referencias. El hardware y la localidad también importan: un motor local se compila en su propia CPU sin carga ni cola, que es como Oleafly ejecuta las compilaciones.

Aplique `\includeonly` y redacte figuras juntas e incluso una tesis grande generalmente regresa en unos pocos segundos, que es el punto en el que comienza a compilar nuevamente después de cada párrafo.