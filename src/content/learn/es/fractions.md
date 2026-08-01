---

title: "Proporciones apiladas que permanecen legibles"
description: "frac, dfrac, tfrac y fracciones continuas con amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# Proporciones apiladas que permanecen legibles

Las fracciones son el primer lugar en el que la salida de LaTeX supera visiblemente a un procesador de textos: un numerador y un denominador apilados reales con una regla entre ellos, dimensionados para adaptarse a las matemáticas circundantes. El comando principal es `\frac`. Lo que importa es cómo cambia su tamaño con el contexto y cómo anularlo cuando la elección automática perjudica la legibilidad.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` toma dos argumentos entre llaves, primero el numerador y después el denominador, y los escribe apilados sobre una regla horizontal. Su tamaño depende del contexto. En visualización matemática (dentro de `\[... \]` o un entorno de `ecuación`), la fracción se establece en tamaño completo. En matemáticas en línea (dentro de `$ ... $`) se establece más pequeño y más compacto, por lo que no fuerza las líneas del párrafo a separarse.

A veces quieres anular eso. `\dfrac`, de `amsmath`, fuerza el estilo de visualización: una fracción apilada de tamaño completo incluso en medio de una oración. Úselo con moderación, porque una fracción alta en línea estira el espacio entre líneas a su alrededor. `\tfrac` es lo opuesto: fuerza el estilo de texto pequeño incluso en matemáticas de visualización, lo cual es útil para coeficientes simples como la mitad delante de una expresión grande, donde una pila de tamaño completo llamaría demasiado la atención.

Ambos argumentos pueden contener matemáticas arbitrarias, incluidas otras fracciones: `\frac{1}{1 + \frac{1}{x}}` anida, y LaTeX reduce la fracción interna automáticamente. Sin embargo, cuando el anidamiento se vuelve profundo, existe una herramienta mejor.

## Fracciones continuas

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Las `\frac`s anidadas se reducen en todos los niveles, por lo que en el tercer piso de una fracción continua los dígitos son apenas legibles. `\cfrac`, también de `amsmath`, mantiene cada nivel en tamaño de visualización completo y alinea los numeradores, que es la forma aceptada de componer fracciones continuas. Puede pasar una posición opcional, `\cfrac[l]{1}{...}`, para empujar un numerador hacia la izquierda en lugar de centrarlo.

## Juicio práctico

Todos `\dfrac`, `\tfrac` y `\cfrac` requieren `\usepackage{amsmath}` en el preámbulo; simple `\frac` funciona sin él. Si obtiene "Secuencia de control no definida" en `\dfrac`, falta la línea del paquete.

Para texto en línea, a veces una forma con barra es simplemente más legible que una fracción apilada: escribir "(a/b)" o "a/b" mantiene la altura de la línea uniforme y se lee bien para proporciones simples. Una buena regla general es apilar fracciones en la visualización matemática, donde hay espacio vertical, y preferir la barra diagonal en línea a menos que la fracción sea el punto de la oración. Escriba un párrafo en ambos sentidos en el [área de juegos en vivo](/live/) y compare; la diferencia en el interlineado es inmediatamente visible. Si los delimitadores matemáticos como `$` y `\[` aún no le resultan familiares, comience con [conceptos básicos del modo matemático](/learn/math-mode/).