---

title: "Foto de pizarra a la fuente"
description: "Recortar, OCR o multimodal, compilar, corregir índices a ojo."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Foto de pizarra a la fuente

Una derivación en una pizarra, una página escaneada de apuntes de clase, una ecuación en un PDF que no se puede copiar: volver a escribir matemáticas en LaTeX a mano es lento y propenso a errores. Las herramientas modernas pueden hacer la mayor parte a partir de una fotografía. La conversión es realmente buena ahora, pero trate el resultado como un borrador, no como una transcripción terminada. El flujo de trabajo a continuación se basa en eso.

## Comience con una foto mejor

La calidad de la imagen determina el resultado más que la elección de la herramienta. Dispare en línea recta en lugar de en ángulo, ya que las líneas de base sesgadas hacen que los subíndices y superíndices sean ambiguos. Obtenga una iluminación uniforme sin reflejos en el tablero y recorte con precisión la única ecuación que desee, ya que los diagramas circundantes y las marcas dispersas se convierten en símbolos alucinados. Si una foto tiene tres ecuaciones, recórtala en tres imágenes y conviértelas una a la vez; Los resultados por ecuación son consistentemente mejores que los resultados de página por página.

## Convertir con la herramienta que tengas

Tres tipos de herramientas hacen este trabajo. Los servicios de OCR de ecuaciones dedicados son precisos con entradas limpias. Los modelos multimodales generales aceptan una imagen en el chat y devuelven LaTeX cuando se les solicita, y usted puede responder "el segundo subíndice debe ser j, no i" para obtener una versión corregida. Oleafly tiene incorporada la función de imagen a LaTeX, que se ejecuta a través de su propia clave API con cualquier proveedor que haya configurado, por lo que un fragmento puede pasar de la captura de pantalla a la fuente sin salir del editor. Consulte [Configuración de AI](/docs/ai-setup/) para la configuración. En una información clara, los tres enfoques convergen, razón por la cual el consejo fotográfico anterior es más importante que la decisión sobre la herramienta.

## Compilar inmediatamente

Pegue el resultado en su documento dentro de un entorno de "ecuación" y compílelo antes de hacer cualquier otra cosa. Los errores de conversión se dividen en dos tipos, y el compilador detecta el primer tipo: llaves desequilibradas, delimitadores `\left` y `\right` que no coinciden y comandos desconocidos, todos fallan ruidosamente y las correcciones son mecánicas. [Signo de dólar faltante](/learn/missing-dollar/) cubre el más común de estos fallos.

## Luego revisa las matemáticas.

El segundo tipo de error se compila perfectamente y es incorrecto. Lea la ecuación representada comparándola con la original símbolo por símbolo, con especial atención a los lugares donde la conversión falla de manera confiable: subíndices y superíndices, donde los pequeños glifos se confunden y `x_i` se convierte en `x_j`; primos y sombreros, que desaparecen o migran; los pares parecidos como `1`, `l` y `I` o `\rho` y `p`; y límites de sumas e integrales. Estos son exactamente los detalles que cambian el significado de una fórmula y la hacen tipográficamente plausible. Dos minutos de comparación por ecuación es el costo total, y es mucho más barato que que un crítico encuentre el índice incorrecto impreso.