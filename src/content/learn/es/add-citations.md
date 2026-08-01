---

title: "De la clave .bib a la cita en el texto"
description: "El bucle BibTeX habitual con comandos de cita y bibliografía."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# De la clave .bib a la cita en el texto

Citar una fuente en LaTeX implica dos partes: una base de datos de texto plano que describe cada trabajo una vez y un comando `\cite` en su documento que apunta a una entrada por su clave. LaTeX numera la cita, da formato a la lista de referencias y mantiene todo coherente cuando reordena las secciones o agrega fuentes. Nunca escribe "[12]" a mano y nunca renumera nada usted mismo.

## Los comandos en el documento.

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` inserta el marcador en el texto dondequiera que pertenezca la cita. Los dos comandos en la parte inferior hacen el resto: `\bibliographystyle{plain}` elige cómo se formatean las citas y referencias, y `\bibliography{refs}` nombra el archivo de base de datos (sin su extensión `.bib`) y marca dónde se debe imprimir la lista de referencias, generalmente justo antes de `\end{document}`. En la lista sólo aparecen las fuentes que usted realmente cita.

## La entrada en la base de datos.

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Esto se encuentra en `refs.bib`, un archivo separado al lado de su `main.tex`. La palabra después de `@` es el tipo de entrada, `knuth84` es la clave de cita y el resto son campos que el estilo utiliza para crear la referencia formateada. La clave es el único vínculo entre los dos archivos, por lo que debe coincidir exactamente con el argumento de `\cite`, incluidas las mayúsculas. Puede verificar una base de datos completa en busca de campos faltantes y entradas con formato incorrecto con el [validador BibTeX](/tools/bibtex-validator/).

## Por qué una compilación no es suficiente

La bibliografía se construye mediante un programa independiente. En la primera pasada de LaTeX, el documento escribe la lista de claves citadas en un archivo auxiliar. Luego, el programa `bibtex` lee esa lista, extrae las entradas coincidentes de `refs.bib` y las formatea. Dos pases más de LaTeX vuelven a plegar el resultado y resuelven los marcadores en el texto. Oleafly ejecuta este ciclo completo en cada compilación. Si construye a mano y se salta el paso del medio, las citas aparecen como signos de interrogación en negrita; consulte [Borrar las citas misteriosas](/learn/citation-question-mark/) cuando eso suceda.

## Adónde ir desde aquí

Un único archivo `.bib` puede servir para cada artículo que escriba, por lo que vale la pena crearlo con cuidado. [Cree un .bib que dure](/learn/create-bibliography/) cubre tipos de entrada, campos obligatorios y claves que sobreviven una década. Cuando un lugar quiere una apariencia diferente, cambia una línea en lugar de cualquier entrada, como se explica en [Numéricos, autor-año, estilos de revista](/learn/change-citation-style/).