---

title: "Numérico, autor-año, estilos de revista"
description: "Intercambie estilos sin reescribir la base de datos."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Numérico, autor-año, estilos de revista

Un estilo de cita controla dos cosas: cómo se ve el marcador en el texto, como "[12]" versus "(Knuth, 1984)", y cómo se formatea cada entrada en la lista de referencias. La buena noticia es que el estilo está completamente separado de su base de datos `.bib`. Puede cambiar un artículo de numérico a autor-año, o reformatearlo para una revista diferente, cambiando una línea en el preámbulo. Tus entradas permanecen como están.

## Cambiando de estilo con el clásico BibTeX

Con BibTeX, el estilo reside en el comando `\bibliographystyle{...}`, que nombra un archivo `.bst`. Cambie el argumento y vuelva a compilar:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Las revistas y conferencias suelen enviar su propio archivo `.bst`, por ejemplo `IEEEtran.bst` o `ACM-Reference-Format.bst`. Coloque ese archivo al lado de su `main.tex` y asígnele el nombre `\bibliographystyle`. Tenga en cuenta que un `.bst` se hornea de una sola vez; Si el lugar quiere citas por año de autor, también necesita el paquete `natbib` para obtener comandos como `\citep` y `\citet`.

## Cambiando de estilo con biblatex

Con biblatex, el estilo es una opción en el propio paquete:

```latex
\usepackage[style=authoryear]{biblatex}
```

Otros valores comunes son `style=numeric`, `style=numeric-comp` para rangos comprimidos como `[3-6]`, `style=alphabetic` y `style=apa` o `style=ieee` de paquetes complementarios. Debido a que los estilos biblatex están escritos en LaTeX en lugar del antiguo lenguaje `.bst`, son mucho más fáciles de modificar, por ejemplo para cambiar la puntuación o eliminar URL.

## Recompilar correctamente después de cambiar

Después de cualquier cambio de estilo, los archivos auxiliares antiguos todavía contienen datos formateados por el estilo anterior, así que ejecute un ciclo completo: compile una vez, ejecute el backend (`bibtex` para BibTeX clásico, `biber` para biblatex), luego compile dos veces más para que se establezcan las referencias cruzadas. Oleafly ejecuta este ciclo por usted, pero si las citas parecen obsoletas después de un cambio manual, eliminar los archivos `.aux` y `.bbl` y reconstruir desde cero lo soluciona.

## ¿Qué familia deberías usar?

Si el lugar de destino proporciona un archivo `.bst` o una clase que espera BibTeX, use BibTeX clásico; esa sigue siendo la situación en la mayoría de las revistas. Si usted mismo controla el formato, como en una tesis o una preimpresión, biblatex es la opción más capaz. Las compensaciones se tratan en [BibTeX clásico o biblatex](/learn/bibtex-vs-biblatex/), y las diferencias de comando en [hábitos de natbib frente a comandos de biblatex](/learn/natbib-vs-biblatex/).