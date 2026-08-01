---

title: "Páginas romanas y luego árabes."
description: "Numeración de los asuntos preliminares que los comités todavía esperan."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Páginas romanas y luego árabes.

Abra casi cualquier tesis o libro de texto y verá la misma convención: la página de título, el resumen, el índice y los agradecimientos están numerados i, ii, iii en números romanos minúsculos, y luego el primer capítulo real comienza de nuevo en la página 1 en números arábigos comunes. El tema inicial se trata como una secuencia preliminar separada, y las escuelas de posgrado verifican explícitamente esta convención. En LaTeX se necesitan exactamente dos comandos.

## El patrón

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` hace dos cosas a la vez: cambia el estilo numérico a minúsculas romanas y restablece el contador de páginas a 1, por lo que la página de título se convierte en la página i. Todo lo que coloque después, normalmente `\maketitle`, el resumen, la [tabla de contenido](/learn/table-of-contents/), y cualquier lista de figuras o tablas, se numera ii, iii, iv, etc.

Luego, inmediatamente antes del primer capítulo, `\pagenumbering{arabic}` vuelve a cambiar el estilo y reinicia el contador nuevamente, por lo que `\chapter{Introducción}` se abre en una nueva página 1. El reinicio es el objetivo: sin él, su introducción comenzaría en algo así como la página 7, que no es lo que esperan los comités o las convenciones de citas.

Debido a que `\chapter` en las clases `book` e `report` siempre inicia una nueva página, no necesita una `\newpage` explícita antes del cambio. En una clase sin capítulos, primero agregaría `\clearpage` para que el cambio de numeración no llegue a mitad de página.

## Clases que lo hacen por ti

Algunas clases de tesis proporcionan `\frontmatter`/`\mainmatter`/`\backmatter`. Estos provienen de la clase "libro" y son la forma de nivel superior de decir lo mismo. `\frontmatter` cambia a numeración romana y hace que los capítulos no estén numerados (por lo que un Prefacio no recibe la etiqueta "Capítulo 1"). `\mainmatter` cambia al árabe y restaura los capítulos numerados. `\backmatter` vuelve a desactivar la numeración de capítulos para material similar a un apéndice al final. Si la plantilla de su universidad se basa en "libro" o "memorias", prefiera estos comandos a "\pagenumbering" sin formato, porque la plantilla puede incluir comportamientos adicionales en ellos, como encabezados diferentes para la portada. Los dos enfoques no entran en conflicto, pero no hay razón para utilizar ambos.

## Una cosa para comprobar

Las páginas numeradas en romanos deben coincidir con su índice. Si su resumen se muestra como página "iv" en el ToC pero se imprime como "2", la causa habitual es una llamada `\pagenumbering` colocada después del contenido que se suponía debía cubrir, o una segunda compilación faltante: los números de página en el ToC provienen del archivo `.aux`, por lo que necesita [compilar dos veces](/learn/compile-to-pdf/) antes de juzgar si la numeración es correcta. Compile, vuelva a compilar y luego compare el ToC con las páginas reales.