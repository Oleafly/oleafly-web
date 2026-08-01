---

title: "Bloques de título y páginas de título."
description: "maketitle para artículos, portada para tesis e informes."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Bloques de título y páginas de título

Un artículo se abre con un bloque de título: título, autores, fecha, ubicado en la parte superior de la primera página. Una tesis comienza con una página de título completa diseñada según las especificaciones de la universidad. LaTeX los trata como dos problemas diferentes. El primero está automatizado por `\maketitle`, y el segundo es un lienzo en blanco llamado entorno `titlepage`.

## El bloque de título

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

Los primeros tres comandos sólo almacenan metadatos. No aparece nada en el PDF cuando se ejecutan, por lo que pueden aparecer en el preámbulo. `\maketitle`, colocado después de `\begin{document}`, es el momento en que se compone el bloque almacenado. Dentro de `\author`, `\\` rompe una línea (la forma habitual de poner una afiliación bajo un nombre) y `\and` separa varios autores para que se coloquen uno al lado del otro. `\date{\today}` imprime la fecha del día que compilas. Escriba `\date{}` con llaves vacías para omitir la línea de fecha por completo. Al dejar `\date` fuera por completo, aún se imprime la fecha de hoy.

En la clase "artículo", el bloque se encuentra en la parte superior de la página uno con el texto a continuación. En "informe" y "libro" obtiene una página propia. Las clases de revistas y conferencias reemplazan esta maquinaria con sus propios comandos para afiliaciones, correos electrónicos y ORCID, por lo que dentro de una plantilla de lugar debes seguir su archivo de muestra en lugar de los comandos estándar.

## Una página de título hecha a mano

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

El entorno `titlepage` le brinda una página sin numerar y control manual total, que es lo que normalmente exigen las regulaciones de tesis. Cada pieza del ejemplo gana su lugar. `\centering` centra todo lo que sigue dentro del entorno. `\vspace*{2cm}` empuja el título hacia abajo desde el borde superior. El formulario destacado es importante porque se descarta un `\vspace` no destacado en la parte superior de una página. Las llaves alrededor de `{\Large ...}` modifican el tamaño de fuente para que termine donde termina el grupo, y `\\[1em]` rompe la línea con un em adicional de espacio debajo de ella. `\vfill` inserta un espacio extensible que absorbe cualquier altura restante, por lo que la declaración de grado y la fecha aparecen en la parte inferior de la página sin importar qué tan largo sea el título.

Utilice un mecanismo u otro. Combinar `\maketitle` con un entorno `\titlepage` produce dos páginas de título, y el error clásico para principiantes es el silencioso: definir `\title` y `\author` pero olvidar `\maketitle`, por lo que el documento se compila limpiamente sin título alguno. La [lección del esqueleto del documento](/learn/document-skeleton/) muestra dónde encaja el bloque en el archivo en su conjunto.