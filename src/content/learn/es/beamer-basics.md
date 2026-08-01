---

title: "Una primera plataforma Beamer"
description: "Tema, marco de título, esquema, una diapositiva de resultados."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# Una primera plataforma Beamer

Beamer es la clase de documento LaTeX estándar para presentaciones. En lugar de páginas, el documento produce diapositivas y todo lo que ya sabes se traslada: las mismas matemáticas, las mismas cifras, los mismos comandos de bibliografía. La ventaja práctica para los autores de artículos es la reutilización. Las ecuaciones y los diagramas TikZ del manuscrito se pegan en la charla sin cambios. Aquí hay un mazo mínimo pero completo:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Marcos, no páginas

La unidad central es el marco, y cada entorno de "marco" se convierte en una diapositiva. El argumento opcional entre llaves, como en `\begin{frame}{Resultados}`, establece el título de la diapositiva. La primera diapositiva usa la abreviatura `\frame{\titlepage}`, donde `\titlepage` representa los metadatos declarados en el preámbulo por `\title` y `\author`. También puede agregar `\institute` y `\date` y aparecerán en el mismo diseño. Un marco contiene notablemente menos que una página, aproximadamente 128 mm por 96 mm de lienzo, por lo que el contenido que se desborda es una señal de que se debe dividir el material en dos marcos en lugar de reducir la fuente.

## Temas y esquema

`\usetheme{Madrid}` selecciona un diseño visual completo: colores, barras de encabezado y pie de página, y cómo se dibujan los títulos de los marcos. Beamer ofrece docenas de temas. "Madrid", "Berlín" y el deliberadamente simple "predeterminado" son opciones comunes, y cambiar el tema es un cambio de una línea que cambia el estilo de todo el mazo. Muchas conferencias y laboratorios distribuyen su propio tema. En ese caso, coloque su archivo de estilo en el proyecto y asígnele un nombre aquí.

El marco de esquema llama `\tableofcontents`, que enumera la estructura seccional de la charla. Un problema: enumera los comandos `\section`, y este ejemplo mínimo no tiene ninguno, por lo que el esquema queda vacío hasta que agregas líneas como `\section{Method}` entre los cuadros. Las secciones de Beamer no imprimen títulos en las diapositivas; existen para estructurar el esquema y los elementos de navegación que muestran algunos temas.

## Contenido en diapositivas

Dentro de un marco, "itemize" funciona como en cualquier documento, y cada "\item" se convierte en una viñeta. Las diapositivas toleran mucho menos texto que el papel, así que mantenga los elementos en líneas simples siempre que sea posible y incluya los detalles en lo que dice. Las figuras, tablas y matemáticas también funcionan dentro de los marcos, aunque la salida de Beamer no se representa en estas vistas previas en la página, así que compila la presentación para verla.

El primer error más común es el contenido palabra por palabra: `\verb` y las listas de códigos se rompen dentro de marcos normales debido a cómo los marcos procesan su contenido. La solución es la opción frágil, escrita `\begin{frame}[frágil]`, en cualquier marco que contenga código. Cuando se redacta el mazo, las revelaciones paso a paso son la siguiente herramienta a aprender, cubiertas en [revelar líneas al hacer clic](/learn/beamer-overlays/).