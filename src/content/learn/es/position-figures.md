---

title: "Dónde aterrizan realmente las carrozas"
description: "htbp, por qué forzado aquí a menudo falla, acercando el entorno al texto."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Dónde aterrizan realmente los flotadores

Las figuras y tablas en LaTeX son flotantes, lo que significa que la posición del código en su fuente es una sugerencia, no una instrucción. LaTeX mueve flotadores para mantener las páginas llenas uniformemente, evitar páginas medio vacías y respetar límites tipográficos, como la cantidad de imágenes que pueden contener una página. Este es el mayor choque cultural que proviene de un procesador de textos, y comprender el sistema de ubicación ahorra horas de luchar contra él.

## ¿Qué significa htbp?

Cada entorno flotante toma una lista de argumentos opcional donde LaTeX puede colocarlo:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Cada letra es un permiso. `h` permite el flotador "aquí", en el punto del texto donde aparece el código. `t` permite la parte superior de una página, `b` permite la parte inferior de una página y `p` permite una página flotante dedicada que contiene solo figuras y tablas. LaTeX los evalúa aproximadamente en ese orden para cada página que construye, tomando la primera ubicación que satisfaga sus reglas internas sobre espaciado y equilibrio de páginas. Las letras otorgan opciones en lugar de expresar deseos clasificados, por lo que enumerar las cuatro le da a LaTeX el mayor espacio para colocar el flotador en un lugar cercano y sensible. Si omites el argumento por completo, el valor predeterminado es `[tbp]`, sin `h`, razón por la cual una figura desnuda salta con tanta frecuencia a la parte superior de la página siguiente.

## ¿Por qué forzar "aquí" resulta contraproducente?

Escribir `[h]` por sí solo parece la solución obvia, pero normalmente empeora las cosas. Si el flotador no cabe en el espacio restante de la página actual y `h` es el único permiso que usted otorgó, LaTeX no puede colocarlo en esta página ni colocarlo legalmente en ninguna otra. Entonces lleva el flotador hacia adelante, página tras página, esperando un punto que satisfaga "h". Los flotadores también deben permanecer en orden, por lo que cada figura posterior hace cola detrás de la que está atascada, y con frecuencia toda la pila se tira al final del capítulo. Agregar un signo de exclamación, como en `[h!]`, le dice a LaTeX que relaje algunas de sus reglas de espaciado, pero no puede crear un espacio que no existe.

## Los hábitos que realmente funcionan

Primero, mantenga `[htbp]` como valor predeterminado y deje de lado la ubicación perfecta de píxeles mientras redacta, porque cada párrafo que agrega o elimina reorganiza las páginas de todos modos. En segundo lugar, coloque el entorno de la figura en la fuente junto al párrafo que primero hace referencia a él, ya que LaTeX comienza a buscar un hogar a partir de ese punto en adelante y un flotante puede moverse más tarde pero nunca antes que su código. En tercer lugar, escriba su prosa haciendo referencia a las figuras por número, como en "La Figura 3 muestra la tubería", nunca "la figura a continuación", para que el texto permanezca correcto dondequiera que aterrice el flotador.

Si un flotador aún termina en algún lugar inaceptable, existen herramientas más fuertes, incluidas barreras de flotador y la ubicación `[H]`, cubiertas en [la figura que huye de la sección](/learn/figure-wrong-position/). Consíguelos al final de la escritura, una vez que el texto esté estable, no durante la redacción.