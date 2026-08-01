---

title: "Color que sobrevive a la impresión"
description: "xcolor, especificaciones HTML y uso del color para señalar cuando las revistas pasan a escala de grises."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Color que sobrevive a la impresión

El color en LaTeX proviene de un paquete, `xcolor`. Le brinda colores con nombre, especificaciones de color exactas, cuadros de fondo y una forma de definir su propia paleta. El cuerpo del texto de las revistas casi siempre es negro, por lo que lo necesita con menos frecuencia de lo que cree. Todavía vale la pena en diapositivas, borradores con anotaciones visibles y cualquier cosa que tenga que coincidir con la paleta de una organización.

## Los comandos

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` colorea solo el texto en su segundo argumento, usando uno de los nombres predefinidos de xcolor; "rojo", "azul", "gris", "verde azulado" y algunas docenas más funcionan de inmediato. Cuando un nombre no es lo suficientemente preciso, el modelo opcional `[HTML]` acepta un código hexadecimal de seis dígitos, el mismo formulario que le entrega un diseñador web o una guía de estilo, por lo que `2563EB` reproduce exactamente un azul específico. Tenga en cuenta que xcolor quiere los dígitos hexadecimales en mayúsculas y sin el `#`.

`\colorbox{gray!15}{highlighted}` pinta un fondo detrás de su texto en lugar de colorear el texto mismo. El argumento `gray!15` muestra la sintaxis de mezcla de xcolor: 15 partes de gris mezcladas con 85 partes de blanco, lo que produce el tinte pálido que se lee como resaltado. La misma sintaxis funciona en cualquier lugar donde se espere un color y puedes encadenarlo, como en `blue!50!black` para un azul oscuro.

## Definir una vez, utilizar en todas partes

`\definecolor{brand}{HTML}{2563EB}` registra un nombre propio. Después de esta línea, `\textcolor{brand}{...}` funciona como cualquier color integrado y el valor hexadecimal reside exactamente en un lugar. Cuando cambia la paleta, edita una línea de preámbulo en lugar de buscar códigos hexadecimales sin formato en el documento. La misma idea que [macros personalizados](/learn/custom-commands/): definir una vez, reutilizar en todas partes.

## La escala de grises sigue siendo real

Utilice el color como señal, no como decoración, y asuma que algunos lectores no lo verán. Muchas revistas todavía se imprimen en escala de grises, donde el rojo y el azul colapsan en grises similares, y una fracción significativa de lectores tiene algún tipo de deficiencia en la visión del color. Regla general: el color puede reforzar una distinción, pero nunca debe ser lo único que la transmita. Combine texto en color con negrita o un símbolo, y combine líneas gráficas de colores con marcadores distintos o patrones de guiones.

Una cosa más sobre el alcance. Colorear los títulos o el cuerpo del texto a mano rápidamente hace que un documento parezca hecho en casa, y dentro de la plantilla de un lugar se revertirá de todos modos. Mantenga el color manual para los lugares en los que signifique algo, como marcar los cambios solicitados por el revisor en una revisión, y elimínelo antes de la versión final.