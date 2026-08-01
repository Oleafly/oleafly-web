---

title: "Figuras, tablas y comparaciones llevan el papel."
description: "Leyendas para llevar, tablas de comparación, gráficos versus tablas y coherencia visual."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Figuras, tablas y comparaciones llevan el papel.

Así es como un revisor ocupado lee realmente su artículo: resumen, luego hojea cada figura y tabla, luego tal vez el texto. Si sus imágenes cuentan la historia por sí solas, habrá ganado la mitad de la revisión antes de que se lea un solo párrafo. Diséñalos como si fueran el papel. Para muchos lectores, lo son.

## Cada figura necesita un título para llevar

Un título que dice "Resultados del conjunto de datos A" desperdicia los bienes inmuebles más valiosos del periódico. Un título que dice "Nuestro método (azul) coincide con la línea de base a la mitad del costo; la brecha se amplía con el tamaño del modelo" le dice al crítico qué concluir exactamente. Escribe títulos como afirmaciones y luego deja que la figura los pruebe. Un lector debería poder leer solo los subtítulos y reconstruir el argumento. La mecánica de los subtítulos y la numeración se encuentra en [títulos y etiquetas](/learn/captions-labels/).

## Tablas comparativas: las favoritas del crítico

Dos patrones de tablas dominan los artículos empíricos:

**La tabla de referencia.** Su método en comparación con el trabajo anterior, una fila cada una, los mejores números en negrita. Incluya las líneas de base obvias incluso cuando pierdan mucho. Omitir una línea de base conocida equivale a ocultar algo.

**La matriz de marcas de verificación.** Capacidades en el costado, métodos en la parte superior, marcas de verificación donde un método tiene la propiedad. Posiciona tu trabajo de un solo vistazo:

| Capacidad | Antes A | Anterior B | Nuestro |
|---|---|---|---|
| No es necesario volver a capacitarse | si | no | si |
| Obras a escala | no | si | si |
| Código abierto | no | no | si |

Mantenlo honesto. Los revisores conocen el truco de elegir filas que su método gane.

## ¿Trama o tabla?

Utilice un gráfico cuando la forma sea el mensaje: una tendencia, un cruce, una curva de escala. Utilice una tabla cuando el mensaje sean los números exactos: puntajes de referencia con los que todos compararán. En caso de duda, pregunte qué hará el lector con él. Si citan el número, tabla. Si van a describir la tendencia, trace.

## La coherencia es credibilidad

Pequeñas inconsistencias visuales indican silenciosamente descuido:

- Misma familia de fuentes y tamaño en todas las figuras, cercano al tamaño del texto del cuerpo después de escalar.
- Mismo color para el mismo método en cada parcela. Si su método es azul en la Figura 2, será azul en todas partes.
- Convenciones y unidades de etiquetas del mismo eje en todas partes.
- Legible en tamaño impreso. Si debe hacer zoom para leer una etiqueta de marca, es demasiado pequeña.

Exporte formatos vectoriales (PDF, SVG) en lugar de capturas de pantalla siempre que sea posible. Los gráficos de mapas de bits con texto borroso son la forma más rápida de lucir sin pulir.

## Construyéndolos en LaTeX

La ubicación, el tamaño y la manipulación del sistema flotante se tratan en [insertar imágenes](/learn/insert-images/), y limpiar tablas en [crear tablas](/learn/create-table/). Para diagramas, bocetos de arquitectura y diagramas de flujo, TikZ produce gráficos vectoriales que coinciden exactamente con las fuentes de sus documentos. Comience con [la introducción de TikZ](/learn/tikz-intro/). Si escribir a mano en TikZ le parece lento, Diagram Composer de Oleafly puede ayudarle a redactar figuras de TikZ visualmente que luego podrá perfeccionar en el código.

## La auditoría de cinco minutos

Antes de enviar, haga que el revisor se dé la vuelta: lea solo los subtítulos, en orden. ¿Cuentan toda la historia? ¿Hay algo en negrita, coloreado o destacado sin explicación? ¿Sabría un extraño cuál es el método tuyo en cada figura? Arregle lo que falla y luego envíelo.