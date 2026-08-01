---

title: "BibTeX clásico o biblatex"
description: "Backends, estilos y lo que cambia día a día."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# BibTeX clásico o biblatex

LaTeX tiene dos sistemas de citas que leen los mismos archivos `.bib` pero difieren en casi todo lo demás. El BibTeX clásico data de la década de 1980: un pequeño programa externo formatea sus referencias utilizando archivos de estilo escritos en un lenguaje propio basado en pila. biblatex es el reemplazo moderno: el formateo se realiza en el propio LaTeX, con un programa auxiliar llamado "biber" que se encarga de la clasificación y el manejo de los datos. Los nombres son confusamente similares. Recuerde que "BibTeX" es tanto el programa antiguo como, en términos generales, el sistema antiguo, mientras que "biblatex" es un paquete de LaTeX que utiliza `biber` como motor.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Edad | Clásico | Moderno |
| Estilos | `.bst` | `.bbx`/`.cbx` |
| Unicódigo | Frágil | Fuerte |
| Soporte de revista | Universales | Creciendo |

## Qué significan las diferencias en la práctica

La fila de estilo es la más importante. Los estilos BibTeX son archivos `.bst` que casi nadie puede leer o modificar, así que toma lo que incluye el diario. Los estilos biblatex son LaTeX ordinarios, divididos en componentes de bibliografía (`.bbx`) y citas (`.cbx`), y los pequeños cambios como eliminar URL o alterar la puntuación son personalizaciones de una sola línea. La fila Unicode es importante si sus referencias contienen nombres acentuados o escrituras no latinas. BibTeX clásico los destroza a menos que cada carácter tenga escape como `\'{e}` y amigos, mientras que biber maneja UTF-8 de forma nativa. La última fila es la razón por la que sobrevive el BibTeX clásico: la mayoría de las revistas y conferencias todavía distribuyen un archivo `.bst` y esperan la cadena de herramientas clásica, y los sistemas de envío a menudo rechazan cualquier otra cosa.

## Cómo se ve un documento biblatex

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

En comparación con el patrón clásico, `\addbibresource{refs.bib}` (con la extensión) pasa al preámbulo, `\printbibliography` reemplaza a `\bibliography{refs}` y no hay una línea `\bibliographystyle` porque el estilo es una opción del paquete. La compilación debe ejecutar `biber` en lugar de `bibtex`; ejecutar el backend incorrecto es una causa común de una [bibliografía vacía](/learn/bibliography-empty/).

## Cómo elegir

Deje que el lugar decida cuando pueda. Si la plantilla incluye un archivo `.bst` o las instrucciones del autor mencionan BibTeX, use BibTeX clásico y no luche contra él. Cuando usted puede controlar el formato, como en el caso de una tesis, una preimpresión o notas de clase, biblatex es la mejor herramienta: personalización más limpia, compatibilidad real con Unicode y tipos de entrada especialmente diseñados para fuentes web. Su base de datos `.bib` funciona sin cambios en ninguno de los dos sistemas, por lo que la elección nunca es permanente. Los comandos de citación difieren entre los dos, y [natbib habits vs biblatex commands](/learn/natbib-vs-biblatex/) asigna un conjunto al otro.