---

title: "Todo lo anterior comienza {document}"
description: "Paquetes, metadatos y orden de carga: qué pertenece al preámbulo y qué no."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Todo lo anterior comienza {documento}

Todo lo que está entre `\documentclass{...}` y `\begin{document}` es el **preámbulo**. No produce ningún texto visible. Configura la ejecución. Las fuentes, los márgenes, los paquetes, los comandos personalizados y los metadatos de los documentos viven aquí, razón por la cual el preámbulo de un artículo maduro suele ser más largo que su introducción. Una vez que sabes qué hace cada línea, una plantilla copiada deja de ser mágica y se convierte en una lista de verificación.

## Anatomía

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

Las opciones en `\documentclass` establecen valores predeterminados globales: `11pt` es el tamaño de fuente base desde el que se escala todo lo demás, y `a4paper` declara el tamaño del papel. Las dos líneas de codificación son compañeras históricas: `inputenc` le dice al motor que su archivo fuente es UTF-8, y `fontenc` selecciona la codificación de fuente para que los caracteres acentuados sean glifos reales en lugar de compuestos. LaTeX actual ya asume entrada UTF-8, por lo que verá estas líneas omitidas en documentos nuevos, pero son inofensivas y las plantillas las mantienen por compatibilidad.

El bloque del medio carga paquetes de capacidades. [geometry](/learn/margins-geometry/) establece los márgenes en una opción, `amsmath` y `amssymb` proporcionan los entornos matemáticos y los símbolos que casi todo documento técnico necesita, `graphicx` habilita `\includegraphics` para figuras y `booktabs` proporciona las reglas que hacen que las tablas se vean profesionales. Finalmente, [hyperref](/learn/hyperlinks/) hace que se pueda hacer clic en las referencias y citas y se carga deliberadamente en último lugar, porque redefine las partes internas de muchos otros paquetes.

Las líneas `\title`, `\author` y `\date` solo almacenan metadatos. Nada se imprime hasta que `\maketitle` se ejecute en el cuerpo, razón por la cual estos pueden aparecer en el preámbulo.

## Reglas generales

Algunos hábitos mantienen saludables los preámbulos. Cargue un paquete por trabajo y resista apilar paquetes que peleen por el mismo territorio, como dos formas de establecer márgenes. Mantenga hyperref al final, con un puñado de excepciones documentadas como Cleveref que deben aparecer después. Coloque opciones para todo el documento en las opciones de clase en lugar de dispersarlas, de modo que "11pt" o "twocolumn" se declaren una vez donde cualquiera pueda verlo. Y una vez que sus [macros personalizados](/learn/custom-commands/) superen unas pocas líneas, muévalas a un archivo `.sty` para que varios documentos puedan compartir un conjunto de definiciones.

La disciplina más útil es la negativa: si no sabes por qué hay una línea de preámbulo, infórmate antes de que tu documento dependa de ella. Los preámbulos copiados acumulan fechas límite, y las fechas límite son donde se esconden los conflictos de paquetes. Véase también [el esqueleto del documento](/learn/document-skeleton/) y [motores comparados](/learn/engines-compared/).