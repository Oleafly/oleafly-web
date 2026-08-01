---

title: "Se insertó el dólar faltante"
description: "Subíndices y comandos matemáticos que se filtraron al modo texto."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# Dólar faltante insertado

"Falta $ insertado" es el error más común de LaTeX, y su nombre induce a error: LaTeX no le pide que gaste dinero, sino que le dice que la sintaxis solo matemática apareció en modo texto. Inserta el `$` para recuperarse, continúa compilando y, a menudo, deja una salida extraña en cursiva, por lo que el mensaje merece una solución real en lugar de encogerse de hombros.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## ¿Qué lo desencadena?

Dos caracteres y una clase de comandos pertenecen exclusivamente al modo matemático. El guión bajo `_` y el símbolo de intercalación `^` crean subíndices y superíndices, y comandos como `\alpha`, `\frac` y `\leq` producen símbolos matemáticos. Cualquiera de ellos en texto plano genera el error. El caso clásico es un identificador que contiene un guión bajo, como un nombre de archivo o un nombre de gen: `DNA_seq` en una oración se encuentra con `_`.

La solución depende de lo que quisiste decir. Si el guión bajo es un carácter literal, escápelo: `DNA\_seq` imprime el nombre con un guión bajo real. Si te referías a un subíndice, entonces te referías a matemáticas, así que ajusta la expresión: `$x_i$` establece una x con el subíndice i, en cursiva matemática con el espaciado correcto. La lista completa de caracteres que necesitan escape en el texto tiene [su propia lección](/learn/special-characters/), y los delimitadores matemáticos en sí se tratan en [conceptos básicos del modo matemático](/learn/math-mode/).

## Cuando el registro apunta a algún lugar extraño

El número de línea informado es donde LaTeX notó el problema, no necesariamente donde usted lo causó. El culpable habitual es un `$` abierto anteriormente: abriste el modo matemático y nunca lo cerraste, por lo que LaTeX se ejecutó en modo matemático hasta que algo forzó el problema, a menudo el final del párrafo. Una línea en blanco dentro de la pantalla matemática genera el mismo error, porque los saltos de párrafo son ilegales en el modo matemático. Entonces, cuando la línea marcada parezca inocente, escanee hacia arriba en busca de un número impar de signos de dólar y verifique que cada `\[` tenga un `\]` coincidente.

El resaltado de sintaxis es la forma rápida de detectar el desbocado: cualquier editor LaTeX colorea las regiones matemáticas de manera diferente, por lo que un párrafo que de repente se representa en color matemático señala el dólar no cerrado de un vistazo.

Una última advertencia: debido a que LaTeX se recupera insertando el `$` que falta, a menudo un PDF aún se genera. No tome el PDF como prueba de que el error fue inofensivo. La salida recuperada generalmente tiene cursivas perdidas o espacios desordenados donde debería estar el texto, así que corrija la fuente hasta que el registro esté limpio.