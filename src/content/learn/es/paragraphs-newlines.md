---

title: "Párrafos, pausas y espacios vacíos"
description: "Líneas en blanco, saltos forzados, vspace y los comandos de espaciado que vale la pena conocer."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Párrafos, saltos y espacios vacíos

En un procesador de textos, usted da forma a los párrafos presionando Enter y observando los espacios. LaTeX funciona de manera diferente: el texto fuente describe la estructura y el compilador decide el espaciado. Una vez que sepa cómo LaTeX comienza un párrafo y cómo anularlo cuando sea necesario, evitará las peleas de formato que los principiantes suelen tener con él.

## Cómo funcionan los párrafos

Una línea en blanco en su fuente comienza un nuevo párrafo. Esa es toda la regla. Una línea en blanco o cinco, no hace diferencia; LaTeX los colapsa en un solo salto de párrafo. Del mismo modo, un salto de línea dentro de su fuente se trata como un espacio ordinario, por lo que puede ajustar su texto de origen al ancho que desee y redistribuirlo libremente sin cambiar la salida en absoluto.

El comando `\par` significa exactamente lo mismo que una línea en blanco. Rara vez lo escribirá usted mismo, pero lo verá dentro de macros y archivos de clase, donde es incómodo escribir una línea en blanco literal.

`\\` es algo completamente distinto: fuerza un salto de línea dentro del párrafo actual, sin comenzar uno nuevo. La nueva línea no tiene sangría de párrafo ni espacio vertical adicional. Existe para lugares donde los saltos de línea son contenido, como direcciones, poesía y filas de una tabla. Usarlo para finalizar párrafos ordinarios es el clásico error de principiante, porque produce un párrafo que en realidad nunca termina, y LaTeX puede quejarse diciendo "Aquí no hay línea para terminar" cuando dos de ellos se acumulan.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Agregar espacio vertical

A veces se desea un espacio deliberado, por ejemplo antes de un bloque de firma o entre partes lógicas de una página de título.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` inserta exactamente el espacio vertical que solicitas, en cualquier unidad que LaTeX conozca (`em`, `pt`, `cm`, etc.). Los tres comandos de omisión son cantidades preestablecidas: `\smallskip`, `\medskip` y `\bigskip` insertan espacios pequeños, medianos y grandes cuyos tamaños están definidos por su clase de documento, lo que los mantiene consistentes en todo el documento. Prefiera los saltos a los valores `\vspace` ajustados manualmente, porque se adaptan si cambia la clase o el tamaño de fuente.

Un detalle útil: un `\vspace` en la parte superior de una página se elimina silenciosamente, ya que LaTeX asume que el espacio extendido en los límites de la página no es intencional. Si realmente necesita conservarlo, utilice `\vspace*{1em}` con la estrella.

## Espacio entre todos los párrafos

No envíe spam `\\` para dejar espacio entre párrafos. Si desea que cada párrafo esté separado por un espacio en lugar de estar marcado por una sangría, esa es una decisión de diseño para todo el documento: configúrelo una vez en el preámbulo con el paquete `parskip`, o reconsidere si los encabezados y la estructura comunicarían mejor la separación. Consulte [sangría de párrafo](/learn/paragraph-indent/) para conocer la otra mitad de esta compensación.