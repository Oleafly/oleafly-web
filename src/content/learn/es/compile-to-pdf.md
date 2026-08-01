---

title: "¿Por qué compilas más de una vez?"
description: "Archivos auxiliares, pases de bibliografía y ¿por qué se imprimen las referencias? en la primera carrera."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Por qué compilas más de una vez

Tarde o temprano compilarás un documento, abrirás el PDF y encontrarás `??` donde debería estar el número de figura o la cita. No hay nada roto. Una sola compilación es una pasada por su archivo, y parte de la información realmente no se puede conocer en una sola pasada.

Aquí está el problema en miniatura. En la página 2 escribe "ver Figura \ref{fig:results}", pero esa cifra llega a la página 7. Cuando el motor escribe la página 2, aún no ha llegado a la página 7, por lo que no tiene idea de qué número obtendrá la figura. Lo mismo se aplica a la tabla de contenido, que necesita el número de página de cada sección incluso antes de terminar la primera página.

## Cómo lo soluciona el motor

Un motor LaTeX lee su archivo `.tex`, resuelve cada macro y escribe un PDF. Además del PDF, también escribe pequeños archivos auxiliares: `.aux` para etiquetas y citas, `.toc` para la tabla de contenido, `.bbl` para la bibliografía formateada. Estos archivos son notas que el motor deja para su futuro.

1. En la primera pasada, el motor compone su texto y escribe cada `\label` y `\cite` que encuentra en el archivo `.aux`, imprimiendo `??` dondequiera que necesite un número que aún no conoce.
2. Si cita algo, una herramienta de bibliografía (bibtex o biber) lee el archivo `.aux`, busca cada cita en su base de datos `.bib` y escribe la lista de referencias formateada en un archivo `.bbl`.
3. En la segunda y, a veces, tercera pasada, el motor vuelve a leer esos archivos auxiliares, por lo que las referencias cruzadas, las entradas de la tabla de contenido y las etiquetas de citas finalmente se resuelven en números reales.

Las configuraciones modernas ejecutan estos pases automáticamente, por lo que en la práctica rara vez escribe los comandos usted mismo. Pero conocer el ciclo explica el síntoma: un nuevo `??` después de agregar una etiqueta o cita simplemente significa que los archivos auxiliares aún no se han actualizado, y una compilación más lo soluciona.

## Motores en una línea cada uno

Varios programas pueden desempeñar el papel de "motor". pdfLaTeX es la opción clásica con el soporte de revistas más amplio. XeLaTeX agrega Unicode completo y le permite usar fuentes instaladas en su sistema. LuaLaTeX también habla Unicode e incorpora un lenguaje de programación para paquetes avanzados. Tectonic es un motor moderno que descarga paquetes a pedido la primera vez que los necesita. Oleafly lo empaqueta para que se compile un nuevo proyecto sin instalar primero una distribución TeX.

Para la mayoría de los documentos las diferencias apenas importan; elige lo que tu plantilla o lugar espera y sigue adelante. Consulte [motores comparados](/aprender/motores-comparados/) cuando necesite elegir deliberadamente.

## Cuando algo realmente falla

Una compilación fallida arroja un registro largo y el instinto natural es leerlo de abajo hacia arriba. Resiste eso. Lea el primer error en el registro y corríjalo solo; Los errores posteriores suelen ser ruidos en cascada causados ​​por el primero. Si las referencias aún imprimen `??` después de dos compilaciones exitosas consecutivas, el culpable habitual es un error tipográfico en el nombre `\label` o `\ref` en lugar de un pase faltante.