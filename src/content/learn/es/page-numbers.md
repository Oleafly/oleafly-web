---

title: "Números de página activados o desactivados"
description: "simple, vacío, romano versus árabe, suprimiendo números en la portada."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Números de página activados o desactivados

Los números de página aparecen de forma predeterminada en el "artículo": las clases estándar utilizan el estilo de página "normal", que centra el número en la parte inferior de cada página. Normalmente eso está bien y nunca piensas en ello. Las tres situaciones en las que sí piensas en esto son ocultar el número en una página de título, desactivar la numeración por completo y cambiar entre números romanos y arábigos en un documento más largo.

## Ocultar el número en la página de título

Una página de título con un solitario "1" en la parte inferior parece inacabada. La solución es una línea colocada justo después de establecer el título:

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` cambia el estilo de página solo para la página actual, y `\thispagestyle` es el estilo integrado que no imprime nada en el encabezado o pie de página. El orden importa: debe ir después de `\maketitle` en la misma página, porque `\maketitle` mismo restablece el estilo de la página. Tenga en cuenta que la página todavía cuenta; la siguiente página se numerará 2. Si utiliza `\begin{titlepage}....\end{titlepage}` en lugar de `\maketitle`, el número se suprime y la siguiente página comienza en 1.

## Estilos y sistemas de numeración

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Estos dos pares de comandos controlan cosas diferentes, y mezclarlos es el clásico tropiezo. `\pagestyle{...}` controla dónde aparece el número y lo que lo rodea: `plain` proporciona el número de pie de página centrado, `empty` elimina encabezados y pies de página de cada página a partir de ese punto. No dice nada sobre cómo se ve el número.

`\pagenumbering{...}` controla cómo se escribe el número: `romano` produce i, ii, iii, mientras que `árabe` produce 1, 2, 3. También hay "romano" para I, II, III y "alfa" para a, b, c, aunque rara vez los necesitarás. `\pagenumbering` también restablece el contador de páginas a 1. Ese restablecimiento es una característica, no un error: es lo que permite que una tesis numere su prefacio del i al vi y luego comience el capítulo uno en la página 1.

Si desea un control total sobre la ubicación, como el número en una esquina o junto con un título en ejecución, ese es el trabajo del paquete fancyhdr en lugar de estos integrados. Consulte [cabezas y pies en ejecución](/learn/headers-footers/).

## El error común

Escribir `\pagestyle{empty}` cuando quería decir `\thispagestyle{empty}` elimina silenciosamente los números de todo el documento, y es posible que no se dé cuenta hasta que un revisor le pregunte por qué sus páginas no están numeradas. Recuerde la regla: `\thispagestyle` es una excepción de una página, `\pagestyle` es un cambio que afecta a todo el documento.

Portada de la tesis: [guía romana/árabe](/learn/front-matter-page-numbers/).