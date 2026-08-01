---

title: "Enlaces dentro del PDF"
description: "hiperref, url, href, colores y metadatos PDF."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Enlaces dentro del PDF

Un PDF no es sólo papel en una pantalla. Puede contener enlaces activos: URL en las que se puede hacer clic, referencias cruzadas que saltan a la figura correcta, citas que saltan a la bibliografía y un esquema de barra lateral creado a partir de los encabezados de las secciones. En LaTeX, un paquete proporciona todo esto: `hyperref`. Cárguelo y podrá hacer clic silenciosamente en cada entrada `\ref`, `\cite` y tabla de contenido de su documento, sin cambios en el resto de su fuente.

## Cargando y configurando hiperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Las opciones entre corchetes controlan el aspecto de los enlaces. De forma predeterminada, Hyperref dibuja un rectángulo de color alrededor de cada enlace, lo que a la mayoría de la gente le parece feo. Configurar `colorlinks=true` reemplaza los cuadros con texto coloreado, y las tres opciones de color lo dividen por tipo de enlace: `linkcolor` cubre saltos internos como referencias de secciones y figuras, `citecolor` cubre citas y `urlcolor` cubre direcciones web. Dividirlos es importante porque, de lo contrario, un artículo lleno de citas puede convertirse en una pared azul.

## URL versus href

Los dos comandos de enlace realizan trabajos diferentes. `\url{...}` imprime la dirección en una fuente de máquina de escribir y hace que se pueda hacer clic en ella, que es lo que desea en una bibliografía o nota al pie donde el lector debería ver adónde va el enlace. `\href{address}{text}` oculta la dirección detrás del texto que proporciones, como un enlace en una página web. Prefiera `\url` en los documentos que puedan imprimirse, ya que una etiqueta `\href` no permite al lector de papel escribir la dirección.

Una ventaja práctica: `\url` sabe cómo dividir direcciones largas en líneas sin insertar un guión que corrompería la dirección, algo que una URL con fuente simple de máquina de escribir no puede hacer.

## Metadatos PDF

`\hypersetup` le permite cambiar cualquier opción de hiperreferencia después de la carga, y también es donde configura los metadatos del documento. Los campos `pdftitle` y `pdfauthor` completan el título y el autor que su lector de PDF muestra en la barra de la ventana y en las propiedades del archivo. Sin ellos, los lectores suelen mostrar el nombre del archivo o el primer encabezado, que parece inacabado en un documento que envía o comparte. Puede llamar a `\hypersetup` en el preámbulo en cualquier momento después de `\usepackage{hyperref}`.

## Documentos aptos para imprimir

Para documentos aptos para imprimir, utilice "ocultar enlaces". Al pasarlo como una opción, `\usepackage[hidelinks]{hyperref}`, se mantiene cada enlace en el que se puede hacer clic en la pantalla, pero se eliminan tanto los cuadros de colores como el texto en color, por lo que la página impresa se ve completamente normal. Muchas clases de diario requieren exactamente esto.

Un error común que se debe evitar: hyperref redefine muchos comandos internos, por lo que debe cargarse como uno de los últimos paquetes en su preámbulo. Si sus enlaces apuntan a páginas incorrectas o recibe errores extraños de otro paquete, lo primero que debe verificar es el orden de carga. Consulte [referencias cruzadas](/learn/cross-references/) para conocer las mecánicas de `\label` y `\ref` en las que se puede hacer clic mediante hyperref.