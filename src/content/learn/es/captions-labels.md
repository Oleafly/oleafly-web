---

title: "Títulos que coinciden con el número."
description: "Coloque la etiqueta después del título para que el número se quede fijo."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Títulos que coinciden con el número

Las referencias cruzadas son una de las cosas que LaTeX hace mejor que un procesador de textos. Nunca escribes "Figura 3" a mano. En su lugar, adjunta una etiqueta a la figura y deja que LaTeX complete el número en todos los lugares donde se menciona, de modo que los números permanezcan correctos sin importar cuánto reordene, inserte o elimine. El mecanismo tiene una regla que hace tropezar a casi todos al menos una vez: el orden de `\caption` y `\label` importa.

## Por qué es importante el orden

El comando `\caption` hace dos trabajos. Imprime el texto del título debajo de su figura o tabla, y avanza el contador, convirtiendo este flotador en la Figura 3. El comando `\label` hace algo más tonto de lo que la gente espera: registra cualquier número asignado más recientemente, cualquiera que sea. No tiene idea de que está "dentro de una figura". Entonces la etiqueta debe ir después del título:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Si coloca `\label` antes de `\caption`, el título aún no ha superado el contador de cifras, por lo que la etiqueta captura el número más reciente de algún otro lugar, generalmente la sección actual. Su texto luego dice "ver Figura 2.4" cuando la figura es en realidad la Figura 7. Este es el síntoma clásico: las referencias que apuntan a números de sección en lugar de números de figura casi siempre significan una etiqueta colocada demasiado pronto. El hábito más seguro es escribir `\label` en la línea inmediatamente después de `\caption`, siempre, tanto en figuras como en tablas.

## Haciendo referencia a la etiqueta

En tu texto, escribe la referencia así:

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` se expande al número simple y usted mismo proporciona la palabra "Figura". El `~` entre ellos es un espacio que no se separa, lo que evita que LaTeX termine una línea después de "Figura" y comience la siguiente con "3". Prefijos como `fig:`, `tab:`, `sec:` y `eq:` son pura convención, LaTeX no los interpreta, pero mantienen las etiquetas legibles y evitan que una figura y una tabla compartan un nombre accidentalmente.

Tenga en cuenta que `\pageref{fig:neat}` proporciona el número de página en el que llegó la figura, lo que es útil en documentos largos donde un flotante puede alejarse de su mención. Para obtener un recorrido completo por los comandos de referencia, consulte [cada comando explicado](/aprender/cada-comando-explicado/).

## Compilar dos veces y otros errores

Las referencias se resuelven a lo largo de las ejecuciones del compilador: la primera pasada escribe las posiciones de las etiquetas en el archivo `.aux` y la segunda pasada las vuelve a leer. Hasta esa segunda pasada, las referencias se imprimen como signos de interrogación en negrita, por lo que `??` en su PDF generalmente solo significa "compilar de nuevo", no es que haya algo roto. La mayoría de los editores, incluido Oleafly, vuelven a ejecutar los pases automáticamente. Si `??` sobrevive a compilaciones repetidas, la etiqueta no existe. Las causas probables son un error tipográfico en el nombre de la etiqueta o un `\caption` que eliminaste dejando la `\label` atrás.