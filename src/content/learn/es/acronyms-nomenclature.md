---

title: "Acrónimos y listas de símbolos"
description: "glosarios, bocetos adicionales o una lista hecha a mano cuando sea suficiente."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Acrónimos y listas de símbolos

Los documentos extensos acumulan abreviaturas y las convenciones que las rodean son estrictas. Un acrónimo se escribe completo cuando se usa por primera vez, se abrevia después, y una tesis generalmente necesita una lista de abreviaturas al principio. Mantener eso a mano falla de manera predecible. Reordena dos capítulos, el primer uso se mueve y, de repente, "ML" aparece tres páginas antes que "aprendizaje automático (ML)". El paquete `glossaries-extra` rastrea el primer uso.

## La ruta automatizada

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

La opción `acronym` habilita el soporte de acrónimos y `\makeglossaries` activa la maquinaria que recopila entradas durante la compilación. Cada `\newacronym` toma tres argumentos: una clave que escribirás en el texto, la forma corta y la forma larga. Defínelos todos en el preámbulo o en un archivo separado que `\ingrese`, para que vivan en un solo lugar.

En el cuerpo, nunca escribes el acrónimo en sí:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

El primer `\gls{ml}` del documento imprime "aprendizaje automático (ML)", y todos los posteriores imprimen solo "ML". Debido a que el paquete rastrea el uso en lugar de la posición en la fuente, la expansión sigue al primer uso dondequiera que la reestructuración lo mueva. `\printglossaries` imprime la lista recopilada de abreviaturas dondequiera que la coloque, generalmente después de la tabla de contenido. Los comandos relacionados cubren la gramática relacionada con esto: `\glspl` para plurales, `\Gls` para un comienzo de oración en mayúscula.

El problema es la construcción. Entre pasadas de LaTeX, el asistente `makeglossaries` debe ejecutarse para ordenar y formatear las entradas, o `\printglossaries` silenciosamente no produce nada. Las configuraciones completas de latexmk manejan esto automáticamente. Es posible que los canales más simples no lo sean, y los glosarios adicionales ofrecen una alternativa para ellos. Si su lista se niega obstinadamente a aparecer, la ejecución de ayuda faltante es el primer sospechoso, mucho antes que un error en su documento.

## La ruta construida a mano

Para obtener una lista simple de símbolos, a menudo es suficiente un entorno de "descripción" mantenido manualmente:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Cada `\item[...]` imprime su argumento entre corchetes como una etiqueta en negrita con la siguiente explicación, que tiene exactamente la forma de una lista de notación. No existe un seguimiento del primer uso, pero una lista de símbolos rara vez lo necesita; Los símbolos se definen donde aparecen por primera vez en las matemáticas independientemente.

El consejo honesto es hacer coincidir la herramienta con la escala. Un documento con cinco siglas es más fácil de manejar a mano. Una tesis de 200 páginas con cuarenta no lo es, y allí el paquete paga con creces el coste de su preparación. La [lección de listas](/learn/lists/) cubre el entorno de `descripción` con más detalle.