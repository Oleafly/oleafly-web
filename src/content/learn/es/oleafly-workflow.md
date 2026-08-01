---

title: "Una semana escribiendo en Oleafly"
description: "Biblioteca, plantillas, compilación, SyncTeX, citas, historial de Git, IA opcional."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# Una semana escribiendo en Oleafly

Así es como se ve un artículo día a día en Oleafly, desde un proyecto vacío hasta un borrador que puedes enviar a un coautor. La aplicación no necesita cuenta ni servidor: un proyecto es una carpeta de archivos `.tex`, `.bib` y figuras en su disco, y todo lo que aparece a continuación funciona en esa carpeta.

## Día uno: empezar desde una plantilla

Cree un proyecto en la Biblioteca, ya sea en blanco o desde una [plantilla](/templates/) para formatos comunes como artículos IEEE y ACM o un esqueleto de tesis. Una plantilla le brinda un documento de compilación inmediatamente, con las opciones de clase y el preámbulo ya prácticos, lo que es mejor que armar un preámbulo línea por línea el primer día. Presione compilar una vez para confirmar que obtiene un PDF antes de escribir algo.

## Entre semana: el ciclo de escritura y compilación

La mayor parte de la semana es un bucle entre el editor y el panel PDF. El editor completa automáticamente los comandos, los entornos y las etiquetas y claves de citas que existen en su proyecto, y los comandos de barra diagonal insertan estructuras más grandes, como figuras y tablas, sin que usted memorice su texto estándar. Compile con frecuencia, porque un nuevo error en el texto que escribió hace dos minutos es fácil de ubicar, mientras que un error que surge después de una tarde de cambios no lo es. SyncTeX une los dos paneles: haga clic en un párrafo del PDF para saltar a su línea de origen, o salte del origen al PDF, lo que es más importante al revisar páginas específicas de un documento largo.

## Citas sobre la marcha

Mantenga un archivo `.bib` en el proyecto y cite con `\cite{...}` mientras escribe, dejando que el autocompletado proporcione las claves. Agregar referencias al momento de escribir es económico. Reconstruir tres semanas de marcadores de posición de "cita requerida" no lo es. Si las entradas provienen de Zotero o de una exportación de un editor, el [validador BibTeX](/tools/bibtex-validator/) detecta los campos faltantes antes de que aparezcan como referencias de aspecto extraño. El proceso completo se describe en [De la clave .bib a la cita en el texto](/learn/add-citations/).

## Historia sin ceremonia

Oleafly puede registrar una confirmación de Git automáticamente después de cada compilación exitosa, por lo que la semana deja una línea de tiempo de estados de trabajo que puede inspeccionar o retroceder. Cuando valga la pena compartir el borrador, envíe la carpeta a un repositorio privado de GitHub; [Ponga el documento en GitHub](/learn/sync-with-github/) muestra la configuración.

## Opcional: el asistente

Si agrega una clave API para un proveedor alojado o apunta la aplicación a Ollama local, un asistente puede responder preguntas sobre su proyecto, proponer ediciones detrás de las diferencias de aprobación y compilar para verificar su propio trabajo. Opcional: cada paso anterior funciona sin él. Los detalles se encuentran en [Asistente dentro de Oleafly](/learn/oleafly-ai/), y la intención de diseño más amplia detrás de la aplicación se encuentra en [Introducción](/docs/getting-started/) y [Filosofía](/docs/philosophy/).