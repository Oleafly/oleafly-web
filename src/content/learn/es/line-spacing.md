---

title: "Sencillo, medio, doble"
description: "setspace para todo el documento o un bloque local."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Sencillo, medio, doble

De forma predeterminada, LaTeX establece el texto a espacio simple, con la distancia entre líneas elegida para adaptarse a la fuente. Así es como se ve un libro terminado, pero se requiere que muchos documentos sean más flexibles: las regulaciones de tesis a menudo exigen un espacio y medio o doble, y las revistas exigen manuscritos a doble espacio para que los revisores tengan espacio para garabatear. Cambie el interlineado con el paquete `setspace`. Ajusta el texto del cuerpo sin dividir las partes del documento que deben permanecer a espacio simple.

## Espaciado en todo el documento

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Cargue el paquete en el preámbulo y luego emita una de las tres declaraciones. `\onehalfspacing` establece todo el documento con un interlineado de una línea y media, `\doublespace` lo duplica y `\singlespacing` vuelve a la normalidad, lo cual es útil si necesita volver a la mitad. Las declaraciones surten efecto desde donde aparecen, por lo que poner una en el preámbulo cubre todo.

La razón para usar setspace en lugar de jugar con `\baselinestretch` o `\linespread` a mano es lo que deja deliberadamente como está: las notas a pie de página, los títulos de figuras y tablas y los elementos flotantes permanecen en un solo espacio, que es exactamente lo que esperan las pautas de tesis y la convención tipográfica. Una ingenua extensión global también pondría doble espacio en las notas a pie de página, y eso se lee mal.

Si necesita un factor que los atajos no cubren, `\setstretch{1.25}` acepta cualquier multiplicador. Tenga en cuenta que "doble espacio" en el sentido del procesador de textos corresponde a una extensión de aproximadamente 1,66 en términos de LaTeX, y "\doble espacio" ya representa eso, así que resista la tentación de escribir "\setstretch{2}" a menos que una regulación lo exija literalmente.

## Espaciado solo para un bloque

A veces sólo una parte del documento necesita espacio diferente: una cita larga, una página de declaración o un resumen que debe ir a doble espacio mientras que el resto no.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

El entorno `spacing` aplica el factor de extensión dado, aquí 1.2, solo al texto entre `\begin` y `\end`, luego restaura lo que estaba vigente antes. El paquete también proporciona entornos de "espacio único" y "espacio doble" listos para usar para los casos comunes. Debido a que el alcance del cambio depende del entorno, no puede olvidar volver atrás, que es el modo de error habitual al emitir declaraciones simples a mitad de documento.

## Una palabra de precaución

No utilice el interlineado para alcanzar el recuento de páginas. Extenderse a 1.1 para hacer que un artículo parezca más largo es el truco más antiguo del libro, y los lugares con formato estricto ejecutan comprobaciones automáticas que lo detectan. La [guía de límite de páginas](/learn/page-limits- without-crimes/) cubre alternativas legítimas. Guarde el espacio establecido para lo que está destinado: cumplir con un requisito de espaciado explícito y luego volver al espaciado simple para la versión lista para cámara.