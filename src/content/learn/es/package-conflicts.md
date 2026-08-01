---

title: "Paquetes que luchan entre sí"
description: "hyperref al final, Cleveref después, pares obsoletos, ejemplos mínimos."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Paquetes que luchan entre sí

Los paquetes LaTeX son libres de redefinir los comandos de cada uno, y muchos lo hacen deliberadamente. Así es como "hyperref" convierte cada referencia cruzada en un vínculo. También significa que dos paquetes pueden parchear el mismo comando con suposiciones incompatibles, y el resultado varía desde un error absoluto como "Comando \nota al pie ya definido" o "Choque de opciones para el paquete xcolor" hasta un resultado silenciosamente incorrecto. Los conflictos casi siempre surgen inmediatamente después de agregar un paquete a un preámbulo que ya funcionaba, lo cual también es la pista más importante.

## El orden de carga es la mitad de la batalla.

Muchos conflictos se resuelven únicamente por orden, porque el paquete que se carga más tarde tiene la última palabra. La regla más importante: cargue `hyperref` cerca del final del preámbulo. Reescribe grandes partes de la maquinaria de referencias cruzadas de LaTeX y los paquetes cargados después pueden deshacer esos parches. Una breve lista de excepciones debe aparecer incluso más adelante, y la que realmente encontrará es `cleveref`, que está diseñada para ubicarse encima de `hyperref` y debe cargarse después de él:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Cuando la documentación de un paquete especifica una posición relativa a otro paquete, créelo. Esas notas existen porque a alguien ya le pegó el conflicto que estás a punto de tener.

## Paquetes obsoletos y sus reemplazos

Algunos conflictos surgen al cargar un paquete inactivo junto a su sucesor. No combine `epsfig` con `graphicx`, `subfigure` con `subcaption`, ni los viejos `times` y `mathptmx` con paquetes de fuentes modernos como `newtxtext`. Las plantillas antiguas son la fuente habitual: cargan lo que estaba actual cuando se escribió la plantilla y usted agrega el equivalente moderno encima. Retire el obsoleto y conserve el de repuesto. El paquete `nag` puede indicarle el uso obsoleto en el momento de la compilación.

## Choques de opciones

"Choque de opciones para el paquete X" significa que el paquete se cargó dos veces con diferentes opciones, a menudo una vez por su clase de documento a sus espaldas. No puede volver a cargarlo con nuevas opciones, pero puede inyectar opciones antes de que alguien lo cargue: coloque `\PassOptionsToPackage{table}{xcolor}` antes de `\documentclass`, y las opciones se fusionarán en la carga que se produzca primero.

## Aislar con un ejemplo mínimo

Cuando la causa no sea obvia, cree un ejemplo de trabajo mínimo: un documento que contenga solo `\documentclass`, los dos paquetes sospechosos y un `\begin{document}....\end{document}` con una línea de texto. Si el error se reproduce, cambie el orden de carga y las opciones hasta que no se reproduzca. Si no se reproduce, agregue los otros paquetes por la mitad hasta que regrese. Esta búsqueda binaria converge en algunas compilaciones y le brinda un par claro para buscar. La misma técnica rescata preámbulos heredados, como se describe en [Archivos de clase universitaria que no se compilarán](/learn/fix-broken-template/).