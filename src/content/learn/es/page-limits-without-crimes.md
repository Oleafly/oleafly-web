---

title: "Límites de páginas sin delitos tipográficos"
description: "Formas legítimas de ajustarse al límite, los trucos que permiten marcar los documentos y por qué los lugares verifican."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Límites de página sin delitos tipográficos

Su artículo tiene 10,4 páginas. El límite es 10. Lo que sucede en la siguiente hora determina si arregla el documento o comete una infracción de formato que hace que sea rechazado.

## Exprime el contenido, no el formato

Trabaja esta lista en orden. Cada paso es invisible para las fichas de formato porque cambia el papel, no la plantilla.

1. **Primero ajuste la prosa.** Media página adicional suele ser una sección con muchas palabras sobre trabajos relacionados y tres oraciones de transición redundantes. Cortar palabras mejora el papel. Cortar espacios en blanco no lo hace.
2. **Cazar viudas.** Un párrafo cuya última línea contiene una o dos palabras desperdicia una línea completa. Reescribir una oración en ese párrafo lo recupera.
3. **Cambie el tamaño de las figuras honestamente.** Muchas figuras tienen márgenes internos enormes. Recorte el espacio en blanco en la figura misma o coloque una figura de dos columnas en una columna si sigue siendo legible.
4. **Tablas delgadas.** Las tablas `booktabs` sin reglas verticales son más compactas y se ven mejor, consulte [tablas hermosas](/learn/booktabs-beautiful/), y los encabezados de columna abreviados compran el ancho real.
5. **Utilice figuras vectoriales.** Los trazados PDF se reducen limpiamente, para que pueda reducirlos más que los PNG pixelados antes de que muera la legibilidad. Las figuras rasterizadas difusas tienen sus propios problemas, consulte [fuentes difusas en archivos PDF](/learn/fuzzy-font-pdf/).
6. **Trasladar el material a un apéndice o suplemento,** si el lugar lo permite. Las pruebas, las ablaciones adicionales y las tablas de hiperparámetros son candidatos clásicos de desbordamiento. Compruebe si el apéndice cuenta para el límite; muchos lugares lo excluyen, otros no.

## Los crímenes

Estos cambian la plantilla en lugar del papel. Los comités de programa ejecutan verificadores de formato automatizados precisamente porque la gente los prueba:

| Crimen | Cómo queda atrapado |
|---|---|
| `\vspace{-8pt}` esparcido por todas partes | Espaciado visiblemente reducido, diferencias con los valores predeterminados de clase |
| `\usepackage[margin=...]{geometría}` | Medición de márgenes automatizada |
| Reducir `\baselinestretch` o tamaño de fuente | Recuento de líneas por columna, sondeos de tamaño de fuente |
| `\small` o `\footnotesize` en el cuerpo del texto o en los subtítulos | Sondas de tamaño de fuente, ojos de revisores |
| `\itemsep` negativo, listas trituradas | Mirada estrecha, heurística del verificador |
| Cambiar el nombre del archivo de clase con ediciones internas | Suma de verificación contra la clase oficial |

## ¿Por qué los lugares realmente verifican?

Un límite de páginas es un contrato de equidad: cada autor obtiene el mismo espacio y cada revisor se compromete a leer una cantidad limitada. Un artículo que hace trampa para llegar a 10 páginas es en realidad un artículo de 11 páginas que compite con artículos honestos de 10 páginas. Es por eso que las violaciones se tratan como una cuestión de integridad, no como una cuestión de estilo. Muchos lugares rechazan sin revisión y no hay ninguna apelación que diga "pero el contenido era bueno".

## El último recurso honesto

Si has ajustado la prosa, adelgazado los flotadores, movido las pruebas al apéndice y todavía estás acabado: corta un resultado. Es doloroso, pero de todos modos un artículo enfocado de 10 páginas revisa mejor que uno abarrotado. Los revisores pueden sentir densidad y [elegir un lugar](/aprender/elegir-tu-lugar/) con un formato más largo siempre es una opción para el próximo envío.