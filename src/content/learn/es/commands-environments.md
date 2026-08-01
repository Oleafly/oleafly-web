---

title: "¿Mando o entorno?"
description: "Las macros toman argumentos; Los entornos envuelven regiones."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# ¿Comando o entorno?

Todo lo que escribes en LaTeX más allá del texto plano toma una de dos formas: un comando o un entorno. La distinción suena académica hasta que aparece el primer mensaje de error. La mitad de las quejas de LaTeX se refieren a que uno se usa donde corresponde el otro. Aprender a ver qué forma estás mirando hace que tanto la documentación como los errores sean legibles.

## Comandos

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Un comando es una barra invertida seguida de un nombre y realiza una sustitución en el punto donde aparece. `\textbf{argument}` toma un argumento entre llaves y lo escribe en negrita; el efecto comienza y termina con los brackets. Los comandos pueden tomar varios argumentos entre corchetes, y muchos también aceptan un argumento opcional entre corchetes antes de ellos, como en `\documentclass[11pt]{article}`.

Las dos primeras líneas muestran que los comandos son algo que puedes crear. `\newcommand{\foo}{bar}` define un nuevo comando llamado `\foo` cuya expansión es el texto `bar`, y de ahí en adelante escribir `\foo` en cualquier lugar produce `bar`. Este es el mecanismo detrás de [macros personalizados](/learn/custom-commands/), y también es cómo funcionan los paquetes: un paquete es en gran medida un archivo de definiciones de comandos.

Una peculiaridad que vale la pena conocer desde el principio: un comando como `\LaTeX` se traga el espacio que sigue, por lo que `\LaTeX is fun` imprime las palabras juntas. Escribe `\LaTeX{} es divertido` o `\LaTeX\ es` para mantener el espacio.

## Ambientes

```latex
\begin{center}
 Centered block
\end{center}
```

Un entorno envuelve una región del documento entre un par coincidente `\begin{...}` y `\end{...}`, y aplica su comportamiento a todo lo que hay dentro. Aquí el entorno "centro" centra cada línea del bloque. Los entornos se pueden anidar, siempre que se cierren en el orden inverso al que se abrieron, y también pueden aceptar argumentos: `\begin{tabular}{ll}` abre una tabla y le pasa una especificación de columna.

Como los entornos deben equilibrarse, fallan de manera distintiva. Un error como `\begin{itemize} terminado en \end{document}` significa que se abrió un entorno y nunca se cerró. Encuentra el `\end` que falta; No mire fijamente la línea con los nombres de los errores.

## La regla general

Si envuelve una región con un inicio y un final claros, probablemente sea un entorno. Si se trata de una pequeña sustitución o un cambio, es una orden. Las dos formas incluso se superponen: cada entorno `foo` se implementa como un par de comandos `\foo` y `\endfoo` bajo el capó. Para ver un recorrido por los comandos y entornos que encontrarás con más frecuencia, consulta [cada comando explicado](/aprender/cada-comando-explicado/), o prueba ambas formas en el [área de juegos en vivo](/en vivo/).