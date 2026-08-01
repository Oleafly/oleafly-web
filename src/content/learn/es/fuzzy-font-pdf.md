---

title: "Texto borroso en el visor de PDF"
description: "Mapas de bits tipo 3, fuentes de contorno, figuras vectoriales."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Texto borroso en el visor de PDF

Su PDF se compila limpiamente, pero el texto se ve suave o irregular en la pantalla y al acercarlo lo empeora en lugar de mejorarlo. No le pasa nada a tu espectador. El documento contiene fuentes de mapa de bits. En lugar de almacenar formas de letras como contornos escalables, las almacena como cuadrículas de píxeles renderizados con una resolución fija. En terminología PDF, estas son fuentes Tipo 3. Imprimen aceptablemente en papel con la resolución para la que fueron generados, razón por la cual el problema sobrevivió durante décadas, pero en las pantallas se desenfocan en cualquier nivel de zoom que no sea el original. Los formatos de contorno modernos (Type 1, TrueType, OpenType) se escalan limpiamente porque las formas son curvas matemáticas.

## Confirmando el diagnóstico

Hacer zoom es la prueba rápida: las fuentes de contorno se mantienen nítidas al 800 por ciento, los mapas de bits se disuelven en píxeles visibles. Para estar seguro, abra las propiedades del documento en su visor de PDF y mire el panel de fuentes. En Adobe Reader, esto se encuentra en Archivo, luego Propiedades, luego Fuentes y cualquier fuente que aparezca como "Tipo 3" es un mapa de bits. Esta verificación importa más allá de la estética, porque arXiv y muchos editores rechazan envíos que contengan fuentes Tipo 3.

## De dónde provienen los mapas de bits y sus correcciones

La fuente habitual es una configuración de fuente antigua. Instalaciones TeX muy antiguas convirtieron Computer Modern a través de METAFONT en mapas de bits, y algunos paquetes heredados y pilas antiguas de la era `\usepackage{times}` todavía incluyen variantes de mapas de bits. Solucionelo reemplazando los comandos de fuentes heredados con una pila moderna:

```latex
\usepackage{newtxtext,newtxmath}
```

Esto proporciona un resumen de Times con matemáticas coincidentes, como se detalla en [Times, Arial, Helvetica-like stacks](/learn/times-arial-helvetica/). Si desea el aspecto predeterminado en lugar del Times, `\usepackage{lmodern}` cambia Computer Modern por su sucesor general, Latin Modern. La compilación con XeLaTeX o LuaLaTeX y `fontspec` evita el problema por completo, ya que esos motores utilizan fuentes del sistema OpenType que están delineadas por construcción. Un motor moderno como el Tectonic basado en XeTeX que incluye Oleafly no genera texto Tipo 3 por sí solo; cuando aparece allí, la fuente de mapa de bits llega a través de un gráfico incluido.

## La versión figurada del mismo problema.

El texto borroso en un PDF no siempre es una fuente de documento. Si los párrafos son nítidos pero las etiquetas dentro de un diagrama son borrosas, la figura en sí es una imagen rasterizada, generalmente una captura de pantalla PNG de un diagrama o un diagrama exportado con resolución de pantalla. La cura es la misma idea en un nivel superior: exportar figuras como PDF vectorial desde la herramienta de trazado, de modo que su texto también sea un contorno. La guía de formato se encuentra en [colocar en una figura](/learn/insert-images/).

Después de cualquier corrección, verifique nuevamente el panel de fuentes en lugar de confiar en sus ojos con el zoom predeterminado. Una sola entrada de Tipo 3 dejada por una figura o un paquete es suficiente para rechazar una presentación.