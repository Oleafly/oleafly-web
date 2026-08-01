---

title: "Márgenes en un paquete"
description: "geometría para tamaño de página, márgenes, desplazamiento de encuadernación."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Márgenes en un paquete

Los márgenes predeterminados de LaTeX parecen enormes, especialmente en papel A4. Esto es por diseño: los valores predeterminados apuntan a una longitud de línea cómoda de aproximadamente 66 caracteres, lo cual es excelente para leer, pero rara vez es lo que pide una plantilla universitaria, una revista o su propio gusto. En lugar de ajustar manualmente media docena de longitudes de bajo nivel, configura la página con el paquete "geometría" y describe el diseño que desea en términos sencillos.

## Las dos formas en que realmente lo usarás

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

La primera forma es rápida: `margin=1in` establece los cuatro márgenes en una pulgada en una sola opción, y la geometría vuelve a calcular el ancho y alto del texto para que coincidan. Este es el aspecto estándar de una "tesis estadounidense" y un valor predeterminado sensato para los borradores.

La segunda forma lo explica todo. `a4paper` declara el tamaño físico del papel (use `carta` para Carta estadounidense). Sin él, la geometría hereda cualquier clase de documento asumida, que puede no coincidir con lo que espera su visor de PDF o su impresora. Las opciones "superior", "inferior", "izquierda" y "derecha" establecen cada margen de forma independiente, por lo que los diseños asimétricos son tan fáciles como los simétricos. Puede mezclar unidades libremente: `in`, `cm`, `mm` y `pt`, todas funcionan.

Todo sucede en el preámbulo, antes de `\begin{document}`. Geometry lee sus opciones una vez y deriva el diseño completo de la página a partir de ellas, por lo que es menos propenso a errores que el ajuste manual.

## Offset de encuadernación para copias impresas

Si el documento se va a imprimir y encuadernar, el margen interior necesita espacio adicional para que el texto no desaparezca en el lomo. Agregue `bindingoffset=0.5cm` a las opciones y la geometría desplaza el bloque de texto hacia afuera en cada página. En un documento de "dos caras", alterna correctamente el desplazamiento entre las páginas izquierda y derecha, lo cual resulta tedioso hacerlo a mano.

## Qué no hacer

Evite mezclar geometría con `\setlength{\textwidth}{...}` manual a menos que sepa por qué. El diseño de página de LaTeX es una red de longitudes interdependientes (`\textwidth`, `\oddsidemargin`, `\headheight` y amigos), y la geometría las gestiona todas como un sistema consistente. Cambiar una longitud directamente después de cargar la geometría generalmente hace que los demás no estén de acuerdo y termina con texto que desborda la página o márgenes que difieren de lo que solicitó. Si necesita un cambio a mitad del documento, la geometría proporciona `\newgeometry{...}` y `\restoregeometry` exactamente para eso.

Una advertencia antes de ajustar algo: si está escribiendo para una revista o conferencia, el archivo de clase ya codifica los márgenes requeridos y agregar geometría encima probablemente violará el formato de envío. Guarde los ajustes de márgenes para los documentos cuyo diseño controle, como una tesis, notas o un CV, y verifique primero lo que su [clase de documento](/learn/document-skeleton/) ya le ofrece.