---

title: "Compila tu primer PDF"
description: "Un pequeño artículo, una recopilación y las tres ideas que le permitirán aprovechar al máximo LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Compila tu primer PDF

Si alguna vez solo ha escrito en Word o Google Docs, LaTeX le pide que cambie un hábito. En lugar de formatear el texto mientras escribe, describe su documento en texto plano y deja que un programa lo escriba por usted. Ese texto sin formato reside en un archivo `.tex`: un archivo de texto normal que puedes abrir en cualquier editor, con tus palabras más comandos como `\section{...}` que dicen qué *es* cada pieza. La compilación convierte esta fuente en un PDF terminado. Un motor LaTeX lee su archivo de arriba a abajo, interpreta cada comando, diseña las páginas y escribe el PDF. Nunca formateas la salida directamente. Editas la fuente y compilas nuevamente.

## El documento real más pequeño.

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Léelo de arriba a abajo. `\documentclass{article}` le dice al motor qué tipo de documento es, lo que establece valores predeterminados sensatos para fuentes, márgenes y estilos de encabezado. Las líneas `\title`, `\author` y `\date` solo almacenan metadatos; todavía no se imprime nada y `\today` simplemente significa la fecha del día que compilas. `\begin{document}` marca donde comienza el contenido real. `\maketitle` es el momento en que el bloque de título almacenado aparece en la página. `\section{Introducción}` imprime un encabezado numerado y lo registra silenciosamente para que una tabla de contenido pueda encontrarlo más tarde. Las últimas líneas muestran las dos caras de las matemáticas: `$...$` escribe una fórmula dentro de una oración, mientras que `\[ ... \]` le da una línea de visualización centrada propia.

## Tres ideas que llevan el lenguaje.

1. Los comandos comienzan con una barra invertida y generalmente toman un argumento entre llaves, por lo que `\textbf{hola}` significa "escribir hola en negrita".
2. Los entornos envuelven una región entre `\begin{...}` y `\end{...}`, y el cuerpo de su archivo es en sí mismo un gran entorno de `documento`.
3. El preámbulo es todo lo que está antes de `\begin{document}`; configura el documento pero nunca produce texto visible.

Casi todo lo demás en LaTeX es una variación de estos tres.

## compilarlo

En [Oleafly](/docs/getting-started/), cree un proyecto, pegue la fuente anterior y compílelo. El PDF aparece al lado de su fuente y SyncTeX vincula los dos lados: haga clic en un lugar en el PDF para saltar a la línea de fuente coincidente, o al revés. La primera compilación de un proyecto puede tardar un poco más hasta que el motor obtiene lo que necesita; Las carreras posteriores son más rápidas.

Una cosa es de esperar: tarde o temprano una compilación fallará con un mensaje de error y un número de línea. Esto es completamente normal y normalmente significa un error tipográfico en el nombre de un comando o que falta una llave de cierre. Corrige la línea a la que apunta y compila nuevamente.

## Próximo

Continúe con [el preámbulo, explicado](/learn/preamble-explained/) para ver qué hacen realmente las líneas de configuración, luego [modo matemático](/learn/math-mode/) para las fórmulas. Mantén abierta la [hoja de referencia](/learn/cheatsheet/) mientras escribes tu primera página real.