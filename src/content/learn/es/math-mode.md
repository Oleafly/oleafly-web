---

title: "Matemáticas que se encuentran en una oración (o solas)"
description: "Matemáticas en línea, matemáticas en pantalla, entornos de ecuaciones y cuándo vale la pena numerar."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# Matemáticas que se encuentran en una oración (o solas)

LaTeX trata las matemáticas como un modo separado con sus propias fuentes y reglas de espaciado. Cada variable, fórmula y símbolo tiene que vivir dentro del modo matemático, ya sea una n solitaria en una oración o una ecuación completa. Hay dos tipos: las matemáticas en línea fluyen dentro de un párrafo y las matemáticas en pantalla se ubican centradas en su propia línea, con o sin un número.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## Matemáticas en línea

Un par de signos de dólar, como en `$E=mc^2$`, establece la fórmula en el tamaño de texto dentro de la línea. Las letras aparecen en cursiva matemática y el espaciado alrededor del signo igual lo maneja usted mismo. `\(E=mc^2\)` es la forma nativa de LaTeX equivalente. Produce una salida idéntica y, debido a que sus delimitadores de apertura y cierre difieren, uno no cerrado genera un mensaje de error más claro. Utilice matemáticas en línea incluso para un solo nombre de variable, de modo que la n en su prosa coincida con la n en sus ecuaciones.

## Mostrar matemáticas

`\[ ... \]` coloca una fórmula en su propia línea centrada sin un número. Es la elección correcta para ecuaciones únicas a las que nunca vuelves a consultar. Evite la antigua forma `$$ ... $$`. Es TeX simple en lugar de LaTeX y produce un espaciado vertical ligeramente incorrecto en algunas situaciones.

## Ecuaciones numeradas

El entorno "ecuación" muestra la fórmula con un número al margen. `\label{eq:energy}` asigna un nombre a ese número, y en otro lugar escribe `Equation~\ref{eq:energy}` o, con `amsmath` cargado, `\eqref{eq:energy}`, que agrega los paréntesis. El `~` es un espacio sin separación, por lo que la palabra y el número permanecen en una línea. Las referencias se resuelven en la segunda compilación. Si ve `??` en el resultado, consulte [signos de interrogación en lugar de números](/learn/equations-show-qq/).

## Los paquetes a cargar

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Casi todos los documentos matemáticos cargan estos tres. `amsmath` proporciona los entornos y comandos que asumen la mayoría de estas lecciones, incluidos `align` y `\eqref`. `amssymb` y `amsfonts` agregan fuentes de símbolos y alfabetos adicionales como `\mathbb`. Pon la línea en el preámbulo una vez y olvídalo.

El error clásico de principiante es la sintaxis matemática fuera del modo matemático: un guión bajo en texto sin formato detiene la compilación con "Missing $ insertado", que tiene [su propia lección](/learn/missing-dollar/). Para tener una idea de los dos modos, escriba una oración con `$x_i$` en línea y la misma fórmula dentro de `\[ ... \]` en el [área de juegos en vivo](/live/) y compare cómo se ubica cada uno en la página.