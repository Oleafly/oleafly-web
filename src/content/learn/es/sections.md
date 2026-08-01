---

title: "Títulos que se numeran solos"
description: "sección a párrafo, formas destacadas, profundidad de segundo."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Encabezados que se numeran solos

En un procesador de textos, los títulos se numeran a mano y se renumeran a mano cada vez que se mueve uno. LaTeX se niega a permitirte hacer eso. Usted declara qué es cada título, una sección, una subsección o un capítulo, y la numeración se resuelve sola. Inserte una nueva sección en el medio de su documento y todo lo que sigue se renumerará en la próxima compilación, junto con cada referencia cruzada y cada entrada de la tabla de contenido que apunte a ella.

## La jerarquía

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Estos comandos forman una escalera fija. `\section` es el caballo de batalla cotidiano en la clase `article`, con `\subsection` y `\subsubsection` anidados debajo de él. `\capítulo` solo existe en las clases `informe` y `libro`, por lo que al pegar capítulos de tesis en una plantilla de artículo falla con una secuencia de control indefinida. `\part` se encuentra encima de los capítulos y es raro fuera de los libros largos. `\paragraph` es el extraño: produce un título en negrita en la misma línea que el texto siguiente en lugar de un título en su propia línea, lo que sorprende a casi todos la primera vez.

Cada comando toma el texto del encabezado entre llaves, lo imprime en la fuente y el tamaño elegidos por la clase, lo numera y lo registra para que `\tableofcontents` pueda encontrarlo más tarde. Nunca aplicas estilos a los títulos en línea. Si desea diferentes fuentes de encabezado, esa es una decisión que afecta a todo el documento y que se toma en el preámbulo.

## Suprimir números

Los formularios destacados suprimen los números: `\section*{Agradecimientos}`. La estrella también mantiene el título fuera del índice y fuera de la secuencia numérica por completo, por lo que la sección posterior continúa como si la estrella no estuviera allí. Esto es exactamente lo que desea para los agradecimientos, un prefacio o una conclusión independiente en un artículo breve. Si una sección destacada aún aparece en el TOC, hay una solución de una línea cubierta en [la lección del TOC](/learn/table-of-contents/).

## Controlar la profundidad de la numeración

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnum Depth` decide qué tan profunda es la numeración. En el "artículo", las secciones son de nivel 1, las subsecciones de nivel 2 y las subsecciones de nivel 3, por lo que configurar el contador en 2 números de secciones y subsecciones, pero deja los títulos de las subsubsecciones sin numerar manteniendo su formato. `toc Depth` es la misma idea para la tabla de contenido: controla qué tan profundo llega el listado de TOC, independientemente de lo que se numera en la página. Ambas líneas pertenecen al preámbulo.

Un error común es saltarse niveles, por ejemplo saltar de `\section` directamente a `\subsubsection` porque le gusta el encabezado más pequeño. La numeración todavía funciona pero produce resultados extraños como "1.0.1" y los lectores pierden la noción de la estructura. Elija niveles de encabezado para determinar el significado y deje que la clase se encargue de la apariencia. Si no está seguro de cómo encaja el esqueleto de su documento, [la lección sobre el esqueleto del documento](/learn/document-skeleton/) lo explica.