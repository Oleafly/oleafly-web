---

title: "La figura que huye de la sección"
description: "Barreras flotantes, tamaño y ubicación de último recurso."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# La figura que huye de la sección.

Colocas una cifra al final de la Sección 4 y se imprime en el medio de la Sección 5, o se acumula con otras tres al final del capítulo. Las figuras son flotantes: LaTeX trata su posición en el origen como un punto de partida, no como un destino, y las mueve para mantener las páginas llenas. Los flotadores también deben aparecer en orden, por lo que una figura que no se puede colocar bloquea todas las figuras detrás de ella. El sistema de colocación general se explica en [dónde aterrizan realmente los flotadores](/learn/position-figures/). Esta lección es la escalera a seguir cuando un flotador termina en algún lugar que no puedes aceptar.

## Paso uno: verifique las opciones de ubicación

Asegúrese de que el entorno diga `[htbp]`, no solo `[h]`. Las letras otorgan permiso para colocar el flotador aquí, en la parte superior de una página, en la parte inferior o en una página flotante dedicada. Otorgar solo `h` es la causa más común de una figura fuera de control, porque cuando la página actual no tiene espacio, LaTeX no tiene lugar legal en ninguna parte y lleva la flotación hacia adelante indefinidamente.

## Paso dos: mueve el código

Un flotador puede desplazarse más tarde que su posición de origen, pero nunca antes. Si la figura aparece demasiado tarde, mueva el entorno hacia arriba en la fuente, idealmente justo antes del párrafo que contiene su primer `\ref`. Esta edición soluciona una sorprendente proporción de quejas de ubicación.

## Paso tres: cercar la sección

El paquete `placeins` proporciona `\FloatBarrier`, un comando que fuerza que todos los flotantes pendientes se coloquen antes de que el texto continúe:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Coloca la barrera al final de una sección y ninguna figura de esa sección podrá pasar a la siguiente. LaTeX puede insertar espacio vertical adicional para limpiar los flotadores, lo que suele ser un precio aceptable cerca de un salto de sección.

## Paso cuatro: el martillo H

El paquete `float` agrega un especificador `H` mayúscula que elimina la flotación por completo:

```latex
\usepackage{float}
\begin{figure}[H]
```

Una cifra `[H]` imprime exactamente donde se encuentra su código, como un párrafo grande. El costo es que LaTeX ya no puede equilibrar la página a su alrededor, por lo que puede obtener un gran espacio en blanco cuando la figura no cabe en el espacio restante. Trátelo como un último recurso para uno o dos flotadores obstinados, no como un incumplimiento.

## Paso cinco: reduce la figura

Los flotadores muy grandes se aplazan porque pocas páginas tienen espacio para ellos. Reducir `width=0.9\textwidth` a `0.7\textwidth`, o recortar espacios en blanco del archivo de imagen, a menudo permite a LaTeX colocar una figura que había estado empujando hasta el final del capítulo.

Un hábito que vale la pena mantener: realice este ajuste una vez, después de que el texto esté estable. Cada párrafo que agregas o eliminas reorganiza las páginas, por lo que la cirugía de colocación durante la redacción es un esfuerzo que tendrás que rehacer.