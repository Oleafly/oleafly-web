---

title: "Dale al modelo tu tabla de símbolos."
description: "Macros y una breve lista de notaciones para que las variables se mantengan estables."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Dale al modelo tu tabla de símbolos.

Pídale a un modelo que redacte o revise un texto matemático y la prosa generalmente sale bien mientras la notación cambia. Su vector `\vect{x}` regresa como `\mathbf{x}` en un párrafo y `\vec{x}` en otro. La expectativa que escribe como `\E[X]` vuelve como `\mathbb{E}(X)`. Cada variante se compila, por lo que no hay errores. La inconsistencia sólo aparece cuando un lector nota el mismo objeto escrito de tres maneras diferentes. El modelo ha visto todas las convenciones de notación existentes y, sin instrucciones, muestras de todas ellas. Entrégalo tuyo explícitamente.

## Las macros hacen que la notación sea ejecutable

El trabajo preliminar es independiente de la IA y vale la pena hacerlo de todos modos: enrute cada símbolo recurrente a través de una macro, de modo que la fuente diga `\vect{x}` en lugar de `\boldsymbol{x}` sin formato. Eso le da a cada concepto un nombre, le permite cambiar el estilo de todo el artículo editando una definición y le da al modelo un pequeño vocabulario al que atenerse en lugar de inventar variantes. La definición de macros se trata en [Comandos personalizados](/learn/custom-commands/).

## Qué pegar en el mensaje

Junto a su solicitud real, incluya un bloque de notación compacto: las definiciones de macro más un comentario por línea que indique para qué sirve cada una.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Luego indique la restricción directamente: "Utilice sólo estas macros para estos conceptos. No introduzca notación nueva para nada de la lista, y si necesita un símbolo que no está en la lista, dígalo en lugar de inventar uno". Los modelos siguen instrucciones concretas y comprobables mucho mejor que un vago "coincide con mi estilo". Para un artículo completo, mantenga el bloque como un breve comentario de notación cerca del preámbulo para que permanezca actualizado y listo para pegar.

## Verificar mecánicamente

La capa macro hace que las comprobaciones sean económicas. Si cada vector debe ser `\vect{...}`, cualquier `\mathbf{` o `\vec{` sin formato en la salida del modelo es una violación que puede encontrar con una búsqueda de texto en lugar de releer las matemáticas. Realice esa búsqueda sobre todo lo que pegue, corrija los rezagados y la notación se mantendrá uniforme sin importar cuántas ediciones asistidas por modelos lleguen al documento.

## Dentro de Oleafly

El [asistente en Oleafly](/learn/oleafly-ai/) lee los archivos del proyecto, incluido el preámbulo donde se encuentran sus macros, por lo que generalmente selecciona comandos definidos sin que se lo indiquen. La instrucción explícita todavía ayuda: ver que existe una macro es más débil que que te digan que es obligatoria. Agregue una línea a su solicitud ("use las macros de notación del preámbulo") y revise la diferencia entre rojo y verde antes de que se produzcan cambios. Eso mantiene la deriva fuera de la fuente.