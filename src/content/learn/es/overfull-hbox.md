---

title: "Caja horizontal demasiado llena"
description: "Líneas que asoman en el margen y cuándo preocuparse."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Caja horizontal demasiado llena

## El síntoma

El registro informa algo como "Overfull \hbox (14.2pt demasiado ancho) en el párrafo en las líneas 87-92", y en el PDF una línea de ese párrafo sobresale en el margen derecho. El documento aún se compila, porque se trata de una advertencia más que de un error, pero la línea que sobresale es visible en la impresión y los revisores lo notan. En modo borrador (`\documentclass[draft]{...}`), LaTeX marca a cada infractor con un rectángulo negro, lo que los hace fáciles de detectar.

## Por qué sucede

TeX divide los párrafos en líneas sopesando cada punto de ruptura posible y eligiendo la disposición con la menor "maldad" total, donde la maldad mide cuánto tuvieron que estirarse o encogerse los espacios en una línea. A veces no existe ninguna disposición aceptable: una URL larga no contiene ningún punto de interrupción, las matemáticas en línea se tratan como casi irrompibles o una palabra larga no tiene ninguna entrada de separación de palabras. En lugar de estirar los espacios más allá de su tolerancia y producir una línea visiblemente entrecortada, TeX deja que la línea se extienda y le informa al respecto. El cuadro demasiado lleno es TeX que se niega a hacer que el párrafo sea feo de una manera diferente.

## Correcciones, de las mejores a las más contundentes

La mejor solución es editorial. Reformular la oración, alejar la palabra larga del final de la línea o dividir una oración en dos generalmente elimina el problema sin ningún código y, a menudo, mejora la prosa de todos modos.

Para las URL, ajuste la dirección en `\url{...}` del paquete `url` o `hyperref` para que pueda dividirse en barras y puntos, y cargue el paquete `xurl` cuando necesite saltos en casi cualquier carácter. Para una fórmula en línea amplia, muéstrela o utilice un entorno rompible como "multilínea" de "amsmath" cuando la ecuación en sí sea demasiado larga para la línea.

Dos mejoras a nivel de preámbulo ayudan a nivel global. Cargar "microtipo" permite que los caracteres sobresalgan fraccionalmente y amplía ligeramente las fuentes, lo que resuelve muchos casos marginales sin que usted se dé cuenta. Configurar el idioma del documento correctamente a través de "babel" o "polyglossia" le da a TeX los patrones de separación de palabras correctos, ya que una palabra a la que no se le pueden dividir es una palabra que no puede dividir.

## Cuando preocuparse

El número en la advertencia es el exceso. Cualquier valor inferior a aproximadamente 2 puntos es invisible para los lectores y es seguro ignorarlo en un borrador. Vale la pena solucionar decenas de puntos antes de que alguien más vea el PDF. El flujo de trabajo sensato es ignorar los cuadros demasiado llenos mientras se escribe, luego barrer el registro una vez antes de enviarlo y arreglar los pocos que quedan, el más grande primero. Resista los `\sloppy` y otros trucos de tolerancia global: cambian algunas líneas sobresalientes por espacios sueltos y desiguales en todo el documento.