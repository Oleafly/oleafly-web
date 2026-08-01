---

title: "Notación de Dirac"
description: "Paquete de soportes para sujetadores, kets y elementos de matriz."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Notación de Dirac

La mecánica cuántica escribe los estados como kets, sus duales como bras y los productos internos como pares entre corchetes. Construir la notación a mano a partir de `\langle`, `|` y `\rangle` funciona, pero es tedioso y los delimitadores no crecen con el contenido. El paquete `braket` proporciona comandos que ensamblan la notación y dimensionan todo para que quepa.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## Qué hace cada comando

`\braket{\psi|\phi}` establece el producto interno completo: corchetes angulares en el exterior, una barra vertical entre los dos estados, todos coinciden en altura. Con dos barras, `\braket{\psi|A|\phi}` se convierte en el elemento matricial del operador A entre los dos estados, la forma utilizada para los valores esperados y los cálculos de perturbaciones. El paquete también proporciona `\bra{\psi}` y `\ket{\phi}` para las dos mitades por separado. Un bare ket es la forma habitual de nombrar un estado en prosa.

`\set{\vec{x}|x > 0}` es una ventaja del mismo paquete: notación de creación de conjuntos con llaves y una barra central, útil mucho más allá de la física.

El tamaño es la verdadera razón para usar el paquete. Coloque una fracción o una suma dentro de `\braket` y los corchetes y las barras se estiran para coincidir. Un `\langle ... \rangle` construido a mano necesita `\left` y `\right` en cada delimitador y aún tiende a desproporcionarse.

## Alternativas y vecinos

El paquete `physics` ofrece un conjunto similar, que incluye `\bra`, `\ket`, `\ev` para valores esperados y `\mel` para elementos matriciales, junto con abreviaturas para derivadas y conmutadores. Ambos paquetes definen `\bra` y `\ket`, así que elija uno por documento en lugar de cargar ambos. En una plantilla donde no se pueden agregar paquetes, `\langle \psi | \phi \rangle` con `\left`/`\right` alrededor de contenidos altos produce el mismo resultado con más escritura.

Para los diagramas de Feynman, que a menudo se encuentran en los mismos documentos, paquetes como `tikz-feynman` se basan en TikZ; esa es una habilidad de dibujo separada, más cercana en espíritu a [diagramas conmutativos](/learn/commutative-diagrams/) que a cualquier cosa en esta página.

El error común es escribir `<\psi|\phi>` con los caracteres en ángulo del teclado. Esas son las relaciones menor que y mayor que, por lo que LaTeX las espacia como comparaciones y las dibuja a la altura incorrecta. Los corchetes reales de Dirac provienen de `\langle` y `\rangle` o, mejor, de los comandos anteriores. La diferencia es obvia en el momento en que colocas ambos formularios uno al lado del otro en el [área de juegos en vivo](/live/).