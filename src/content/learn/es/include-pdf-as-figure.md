---

title: "Una página PDF como gráfico"
description: "Incluye gráficos con selección de páginas y páginas PDF para apéndices."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Una página PDF como gráfico

PDF es el mejor formato de figura que LaTeX puede consumir. A diferencia de PNG o JPG, un PDF almacena datos vectoriales, por lo que las líneas y etiquetas se mantienen nítidas en cualquier nivel de zoom y las fuentes que contiene viajan con el archivo. Herramientas como Matplotlib, Inkscape y draw.io exportan PDF, lo que significa que el diagrama que dibujó en otro lugar puede colocarse directamente en su documento. Pero los PDF tienen una característica que las imágenes no tienen: un PDF puede contener muchas páginas y tienes que decirle a LaTeX cuál quieres.

## Sacar una página de un PDF de varias páginas

El `\includegraphics` del paquete `graphicx` acepta una opción de `página` junto con las claves de tamaño habituales:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Aquí `page=1` selecciona la primera página de `diagram.pdf`, y `width=\textwidth` escala esa página al ancho completo del bloque de texto. Si omite "página", LaTeX utiliza silenciosamente la página uno, que normalmente es lo que desea, pero puede sorprenderlo cuando un script de trazado escribe varias figuras en un solo archivo. Puede incluir el mismo PDF varias veces con diferentes valores de "página", una vez por entorno de figura, cada uno con su propio título y etiqueta.

Envuelva el comando en un entorno normal de `figura` para que obtenga un título y un número, exactamente como lo haría con [cualquier otra imagen](/learn/insert-images/). La página incluida se recorta según su propio cuadro delimitador, por lo que si su PDF de origen tiene márgenes generosos, la figura se verá acolchada. Vuelva a exportarlo con un cuadro delimitador ajustado o recórtelo una vez con una herramienta como `pdfcrop`, en lugar de luchar contra los espacios en blanco con espacios negativos.

## Insertar documentos completos con páginas pdf

A veces no quieres una figura en absoluto. Quiere páginas enteras, palabra por palabra, incluidas en su documento: un PDF complementario, un formulario firmado, un cuestionario publicado en un apéndice de tesis. Ese es el trabajo del paquete `pdfpages`:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

El valor `pages=-` significa cada página. También puedes escribir `pages=2-5` para un rango o `pages={1,3,7}` para una lista específica. Cada página insertada llena su propia página de salida, mantiene su diseño original y participa en la numeración de páginas del documento, por lo que el apéndice se lee continuamente. Agregue la opción `pagecommand={}` si los encabezados o pies de página de su clase de documento se imprimen encima de las páginas insertadas y desea suprimirlos o personalizarlos.

## Qué herramienta para qué trabajo

Utilice `\includegraphics[page=...]` cuando el contenido del PDF deba comportarse como una figura, lo que significa que flota, lleva un título y se hace referencia a él desde el texto. Utilice `\includepdf` cuando las páginas deban mantenerse solas en tamaño completo. El error común es usar `pdfpages` para un diagrama, lo que le brinda una página completa sin subtítulos ni referencias que no puede citar con `\ref`. Si los lectores alguna vez ven "ver Figura 3", pertenece al entorno de figuras.