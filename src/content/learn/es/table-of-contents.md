---

title: "TOC, listas de figuras, listas de tablas."
description: "tabla de contenidos y por qué es importante la segunda pasada."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# TOC, listas de figuras, listas de tablas

Una tabla de contenidos en LaTeX no es algo que usted construye o mantiene. Coloca un solo comando donde lo desea y LaTeX reúne las entradas de los encabezados que ya ha escrito. Lo mismo ocurre con la lista de figuras y la lista de tablas, que recogen leyendas en lugar de encabezados. Este es uno de los lugares donde declarar la estructura vale la pena directamente: cambie el nombre de una sección o mueva una figura y la portada se arreglará sola.

## Los tres comandos

```latex
\tableofcontents
\listoffigures
\listoftables
```

`\tableofcontents` imprime el TOC en el punto donde aparece, normalmente justo después de la página de título o del resumen. Cada `\capítulo`, `\sección` y `\subsección` numerados aparecen con su número, título y página, hasta la profundidad establecida por el contador `tocprofundidad` descrito en [la lección de títulos](/aprender/secciones/). `\listoffigures` y `\listoftables` hacen lo mismo para los títulos de figuras y tablas, extrayendo el texto de cada `\caption{...}`. En los artículos son inusuales, pero las tesis comúnmente requieren ambos, colocados en sus propias páginas después del TOC.

## Por qué es importante la segunda pasada

Compile **dos veces** después de los cambios estructurales. Eso no es superstición. Así es como funciona el mecanismo. Durante una compilación, LaTeX no puede saber en la página 2 qué terminará en la página 47, por lo que escribe cada encabezado y su número de página final en un archivo auxiliar (`.toc`, `.lof`, `.lot`) a medida que avanza. `\tableofcontents` lee el archivo sobrante de la ejecución anterior. En un proyecto nuevo, ese archivo aún no existe, por lo que la primera compilación produce un TOC vacío. Después de agregar o mover secciones, el TOC muestra títulos obsoletos o números de página incorrectos hasta la siguiente ejecución. La segunda compilación lee el archivo recién escrito y todo se alinea. Los editores que ejecutan latexmk o un contenedor equivalente manejan las repeticiones por usted, por lo que es posible que nunca lo haya notado. Si su TOC alguna vez parece incorrecto, compílelo una vez más antes de depurar cualquier otra cosa.

## Secciones destacadas y TOC

Las secciones destacadas necesitan `\addcontentsline{toc}{section}{Title}` si deben aparecer en el TOC. Un encabezado destacado como `\section*{Acknowledgements}` omite deliberadamente tanto la numeración como el archivo de contenido, por lo que si desea que aparezca en la lista, agregue la entrada usted mismo. Los tres argumentos del comando son el archivo a escribir (`toc`), el nivel de entrada (`sección`) y el texto a mostrar. Coloque la línea inmediatamente después del título destacado para que el número de página grabado sea correcto.

Un hábito que vale la pena formar: antes de compartir un PDF, eche un vistazo al TOC para detectar signos reveladores de una compilación obsoleta, como signos de interrogación, entradas faltantes o una última entrada que no llega al capítulo final. Casi siempre se soluciona con una compilación más. Captarlo usted mismo es más barato que captarlo un crítico. El mismo archivo auxiliar de baile potencia `\ref` y sus amigos, cubierto en [referencias cruzadas](/learn/cross-references/).