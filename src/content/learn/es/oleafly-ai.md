---

title: "Asistente dentro de Oleafly"
description: "Su clave API, contexto del proyecto, diferencias, ediciones con reconocimiento de compilación."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Asistente dentro de Oleafly

Oleafly incluye un asistente de IA que funciona dentro de su proyecto en lugar de en una ventana de chat separada. A diferencia de pegar LaTeX en un chatbot general, se ejecuta con su propia clave API, puede leer el proyecto que está editando y muestra cada cambio propuesto para su aprobación antes de tocar sus archivos.

## Tu clave, tu proveedor

El asistente no realiza llamadas de modelos a través de los servidores de Oleafly. Usted proporciona una clave API para uno de los nueve proveedores alojados admitidos, o dirige la aplicación a una instalación local de Ollama y utiliza un modelo que se ejecuta en su propio hardware. Las solicitudes van desde su máquina al proveedor que configuró, según los términos de ese proveedor, y usted le paga al proveedor directamente según sus tarifas. Qué modelo elegir y cómo configurar una clave o Ollama se explica en [Configuración de AI](/docs/ai-setup/).

## Lo que el asistente puede ver

Cuando haces una pregunta o solicitas una edición, el asistente trabaja desde un mapa de tu proyecto y lee los archivos relevantes a la solicitud, como el capítulo que estás editando, el preámbulo que define tus macros o el archivo `.bib` detrás de una pregunta de cita. Ese contexto es el motivo por el que puede responder "¿por qué la Figura 3 está flotando en la página siguiente?" sobre su Figura 3 real y por qué sus ediciones tienden a coincidir con la notación y los comandos que su documento ya usa.

## Ediciones que revisas, no ediciones que simplemente suceden

El asistente nunca escribe directamente en sus archivos. Propone cambios como una diferencia, con líneas eliminadas en rojo y líneas agregadas en verde, y usted acepta o rechaza cada uno. Antes de aplicar cualquier cambio aceptado, Oleafly registra un punto de control de Git, por lo que el estado antes de la edición siempre está a un paso del [historial de Git](/docs/git-history/). La eliminación de un archivo se trata por separado y siempre requiere su confirmación explícita, independientemente de lo que esté haciendo el asistente.

## Cerrando el ciclo con el compilador

Como el asistente vive al lado de la construcción, puede comprobar su propio trabajo. Después de una edición, puede desencadenar una compilación, leer el registro y, si el cambio tenía como objetivo corregir un error, verificar si ese error desapareció. También puede leer el texto del PDF compilado, por lo que puede confirmar que un cambio solicitado realmente aparece en el resultado. Los modelos todavía producen LaTeX incorrecto, así que lea lo que acepta. La ventaja es que las sugerencias incompletas tienden a quedar atrapadas y corregidas dentro del ciclo en lugar de ser detectadas por usted más tarde.

La mecánica del día a día se encuentra en los documentos de [chat](/docs/ai-chat/) y [edición en línea](/docs/ai-inline-edit/), y [Una semana de escritura en Oleafly](/learn/oleafly-workflow/) muestra dónde encaja el asistente en un ciclo de escritura completo.