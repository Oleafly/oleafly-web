---

title: "Coautores que solo hablan Word"
description: "Mantenga .tex como fuente de confianza mientras intercambia PDF o DOCX por comentarios."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Coautores que solo hablan Word

Las colaboraciones de herramientas mixtas son comunes: usted escribe el artículo en LaTeX y un coautor, asesor o colaborador clínico trabaja solo en Microsoft Word. Nada se convierte perfectamente entre los dos formatos. Acuerde desde el principio qué archivo es el documento real y luego establezca una rutina para trasladar los comentarios a través de la brecha sin perder trabajo.

## Una fuente de verdad

Decida con anticipación que los archivos `.tex` son canónicos y que todo lo demás es una copia derivada para su revisión. En el momento en que existen dos "versiones actuales" en dos formatos, las ediciones de alguien se pierden, y conciliar a simple vista un archivo de Word con un archivo de LaTeX es un trabajo miserable. Según este acuerdo su trabajo es la composición tipográfica y la integración. El trabajo de su coautor es el contenido y los comentarios, entregados en cualquier herramienta que prefiera.

## Elija la exportación según el tipo de comentarios

Para lectura y comentarios de alto nivel, envíe el PDF compilado. Todos los usuarios de Word pueden abrir un PDF y las herramientas de anotación de cualquier lector de PDF cubren las notas al margen y los resaltados. Aplicar esa retroalimentación manualmente te mantiene en control total de la fuente.

Cuando el coautor necesite proponer reescrituras a nivel de oración con seguimiento de cambios, exporte un DOCX. Pandoc convierte LaTeX a Word lo suficientemente bien para fines de revisión, y Oleafly tiene la exportación DOCX incorporada. Espere que la conversión sea aproximada: las ecuaciones, las referencias cruzadas y la ubicación de las figuras se degradan, y debe decirlo desde el principio para que nadie informe problemas de diseño en una copia desechable.

## La sesión de fusión

Los comentarios en un `.docx` deben volver al `.tex` manualmente. Trate esto como una tarea programada en lugar de un goteo continuo: recopile los cambios rastreados por el coautor, abra el archivo de Word y la fuente de LaTeX uno al lado del otro, y aplique las ediciones aceptadas una por una, comprometiéndose con Git a medida que avanza, de modo que cada ronda de comentarios sea una confirmación. Una regla mantiene esto viable: cada ronda de revisión comienza con una nueva exportación de la fuente actual. Nunca dejes que el mismo archivo de Word viva en varias rondas, porque silenciosamente bifurca el papel.

## Cuando comienza el borrador en Word

A veces la corriente se invierte: el coautor escribe el primer borrador en Word y tú te encargas de la composición tipográfica. Conviértalo una vez, temprano. Oleafly importa `.docx` a un proyecto LaTeX y pandoc hace lo mismo en la línea de comando. A partir de ese momento, el `.tex` es canónico y se aplica la rutina anterior. Para conocer la columna vertebral de control de versiones que hace que todo esto sea recuperable, consulte [Ponga el documento en GitHub](/learn/sync-with-github/).