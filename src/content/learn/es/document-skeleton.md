---

title: "Un esqueleto que puedes reutilizar"
description: "Clase, preámbulo, título, secciones, bibliografía: la forma de casi todos los artículos."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# Un esqueleto que puedes reutilizar

Si se elimina el contenido, casi todos los documentos LaTeX tienen el mismo esqueleto: una declaración de clase, un preámbulo de configuración y un cuerpo entre `\begin{document}` y `\end{document}`. Una vez que conozcas esta forma, comienza un nuevo proyecto pegando el esqueleto, cambiando el título y escribiendo.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Leyendo de arriba a abajo: `\documentclass[11pt]{article}` elige el tipo de documento y establece el tamaño de fuente base como una opción. Todo lo demás en el diseño surge de esta elección. La región entre la línea de clase y `\begin{document}` es el [preámbulo](/learn/preamble-explained/), donde se cargan los paquetes y se almacenan metadatos como `\title` y `\author`. `\begin{document}` marca dónde comienza el contenido visible, `\maketitle` escribe el bloque de título almacenado y el cuerpo sigue como secciones, figuras y, finalmente, una bibliografía. `\end{document}` cierra el documento. Todo lo que sigue se ignora silenciosamente, lo que ocasionalmente oculta un fragmento de texto que alguien pegó en el lugar equivocado.

## Opciones de clase

| Clase | Uso |
| --- | --- |
| `artículo` | Documentos, tareas, notas |
| `informe` | Informes más extensos con capítulos |
| `libro` | Libros y muchas tesis |
| `proyector` | Diapositivas |

La clase no es cosmética; cambia qué comandos existen. El "artículo" no tiene "\ capítulo", por lo que pegar los capítulos de tesis falla inmediatamente. `report` agrega capítulos y le da al título su propia página. "libro" supone impresión a doble cara y abre capítulos en las páginas de la derecha. `beamer` reestructura todo lo relacionado con los marcos de diapositivas. Las revistas y conferencias ofrecen sus propias clases, y cuando escribes para un lugar, su clase reemplaza esta decisión por completo.

Dos errores explican la mayoría de los esqueletos rotos. El texto colocado antes de `\begin{document}` genera el error "Falta \begin{document}", porque el preámbulo solo puede configurarse, nunca imprimirse. Y un `\end{document}` faltante deja al compilador esperando al final del archivo con un mensaje inútil sobre el final de la entrada. Cuando aparezca cualquiera de los dos, verifique el marco del documento antes de sospechar del contenido.

El esqueleto escala. Una nota de cuatro páginas mantiene el cuerpo en línea; una tesis mueve cada capítulo a su propio archivo y los extrae desde la raíz, como se muestra en [archivos de capítulos divididos](/learn/split-chapter-files/). El marco que los rodea no cambia.