---

title: "El bloque abstracto"
description: "Colocación de entornos abstractos para clases de artículos y revistas."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# El bloque abstracto

El resumen es el breve resumen que se encuentra entre el título y la primera sección. Casi todos los lugares requieren uno. LaTeX le brinda un entorno dedicado en lugar de dejar que usted lo finja con un encabezado en negrita. La clase necesita saber qué texto es el resumen para que las clases de revistas puedan componerlo en un estilo distinto (a menudo más pequeño y con sangría) y así los sistemas de envío puedan extraerlo automáticamente.

## El medio ambiente

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Todo lo que esté entre `\begin{abstract}` y `\end{abstract}` se convierte en el bloque abstracto. En la clase estándar "artículo", aparece como un párrafo de encabezado centrado y reducido debajo del título. Escribe prosa sencilla en su interior. Las matemáticas en línea están bien, pero omita todo lo pesado: sin citas si el lugar lo prohíbe, sin notas a pie de página, sin acrónimos indefinidos. Los resúmenes suelen aparecer solos en las bases de datos y en los resultados de búsqueda, lejos del resto del artículo.

## A donde va

Colóquelo después de `\maketitle` (o según lo requiera la clase de revista). El orden habitual en la parte superior de un artículo es `\maketitle`, luego el resumen y luego `\section{Introducción}`. El entorno debe venir después de `\begin{document}`, ya que produce resultados; ponerlo en el preámbulo es un error de compilación.

Las revistas y conferencias a menudo cambian este contrato y sus plantillas superan el predeterminado. Algunas clases, incluidas varias variantes de ACM e IEEE, quieren que el resumen se declare antes de `\maketitle` para poder colocarlo dentro de su propio diseño de título. Otros reemplazan el entorno por completo con un comando como `\abstract{...}`. Regla general: si está utilizando la plantilla de un lugar, coloque el resumen donde lo coloque el archivo de ejemplo de la plantilla y no pelee con la clase. La [lección de bloques de título](/learn/title-page/) cubre la maquinaria `\maketitle` que cuelga.

## Clases sin resumen

La clase "libro" no define ningún entorno abstracto, basándose en la teoría de que los libros tienen prefacios. Si necesita uno en una tesis estilo informe, la clase `report` lo admite, o puede escribir un título centrado sin numerar seguido de un párrafo normal, que es todo lo que realmente hace el entorno.

Un error común: dejar una línea en blanco entre `\maketitle` y el resumen está bien, pero dejar el resumen vacío no es un error de compilación, por lo que un marcador de posición olvidado como "TODO" se envía a los revisores con más frecuencia de lo que nadie admite. Compile, mire la primera página del PDF y lea el resumen allí al menos una vez antes de enviarlo. Para obtener consejos sobre lo que realmente debería decir el resumen, en lugar de adónde va, consulte [cómo escribir un resumen](/learn/write-an-abstract/).