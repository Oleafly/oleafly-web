---

title: "Tablas de tres reglas"
description: "regla superior, regla media, regla inferior y saltar líneas verticales."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Tablas de tres reglas

Abra cualquier diario bien escrito y mire las tablas. Casi todos siguen el mismo diseño: una regla en la parte superior, una regla debajo del encabezado, una regla en la parte inferior y nada más. Sin líneas verticales, sin cuadrícula. Este es el estilo `booktabs`, llamado así por el paquete que lo implementa, y cambiar a él suele ser la mayor mejora visual que puede realizar en las tablas LaTeX. El paquete proporciona tres comandos que se asignan a las tres reglas:

```latex
\toprule
...
\midrule
...
\bottomrule
```

En una tabla completa se ven así:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## Lo que reemplazan las reglas

Sin `booktabs`, la gente dibuja líneas con `\hline` y barras verticales en la especificación de la columna, como en `{|l|c|c|}`. El resultado es una jaula: cada celda encajonada, con el texto apretado contra las reglas porque `\hline` no agrega espacio para respirar. Los comandos `booktabs` reemplazan `\hline` con reglas que llevan un relleno vertical incorporado, y `\toprule` y `\bottomrule` son ligeramente más pesados ​​que `\midrule`, por lo que la tabla tiene un marco visible y una división interior más ligera. Esa diferencia de espacio y peso es el truco. Los datos tienen espacio, el encabezado está claramente separado y nada compite con los números.

Las reglas verticales simplemente se omiten. La alineación de las columnas ya muestra al lector dónde termina una columna y comienza la siguiente, y las líneas verticales en su mayoría agregan tinta sin agregar claridad. La documentación de `booktabs` llega incluso a negarse a respaldarlos.

## Reglas parciales para encabezados agrupados

Cuando un encabezado abarca varias columnas, por ejemplo, "Puntuaciones" que se encuentran encima de precisión y F1, use `\cmidrule` para subrayar solo esas columnas:

```latex
\cmidrule(lr){2-3}
```

El rango `{2-3}` dice qué columnas cubre la regla, y la opción `(lr)` recorta un poco los extremos izquierdo y derecho para que las reglas vecinas no se fusionen en una línea larga. Esto se combina con `\multicolumn`, que se muestra en [celdas que abarcan filas o columnas](/learn/merged-cells/).

## Números y alineación

Una tabla de medidas se lee mejor cuando los puntos decimales están alineados. El paquete `siunitx` proporciona un tipo de columna `S` que alinea los números en el marcador decimal automáticamente, por lo que `0.9` y `0.88` se ubican correctamente uno debajo del otro incluso con diferentes recuentos de dígitos. Vale la pena adoptarlo una vez que sus tablas contengan datos reales.

El error común es mezclar sistemas: una `\hline` aquí, una `\midrule` allá y una especificación de columna con barras sobrantes de una plantilla. Elija el estilo de tres reglas y aplíquelo a cada tabla del documento. La coherencia es lo que hace que el estilo parezca deliberado. Un recorrido completo por la `tabla` flotante circundante se encuentra en [una tabla que parece una mesa de papel](/learn/create-table/).