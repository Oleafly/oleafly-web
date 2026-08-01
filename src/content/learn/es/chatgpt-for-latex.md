---

title: "Modelos rápidos para compilar TeX"
description: "Envía el preámbulo, exige una diferencia, compila siempre la respuesta."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Modelos rápidos para compilar TeX

Solicite un modelo de chat para LaTeX y normalmente obtendrá un código que se ve bien y no se compila en su documento. El modelo no sabe qué clase usas, qué paquetes cargas, ni qué macros tienes definidas, por lo que responde por algún documento genérico que no es tuyo. Luego, el resultado muere con paquetes faltantes o definiciones contradictorias en el momento en que lo pega. La mayor parte de esto se puede evitar con tres hábitos de indicaciones, más una regla estricta: compilar antes de confiar.

## Enviar el preámbulo

Su preámbulo es el contexto del que carece el modelo. Péguelo, o al menos la línea `\documentclass` y la lista `\usepackage`, y solicite "un fragmento que se compile bajo este preámbulo". Este hábito bloquea el fallo más común: la respuesta depende silenciosamente de `tikz`, `siunitx` o algún otro paquete que nunca cargaste. También dirige el modelo hacia los comandos que realmente proporciona su configuración. Si su proyecto define macros, inclúyalas también, por los motivos cubiertos en [Proporcione al modelo su tabla de símbolos](/learn/ai-follow-notation/).

## Pregunte de qué depende la respuesta

Agregue una solicitud permanente: "Si su código necesita algún paquete que no haya cargado, indíquelo explícitamente en la parte superior de su respuesta". Eso convierte las dependencias ocultas en una lista de verificación visible. Cuando la respuesta nombra un paquete, usted decide si desea agregarlo, en lugar de descubrir la dependencia como un error de "secuencia de control indefinida" tres compilaciones más tarde. Ese error y su diagnóstico se tratan en [Secuencia de control indefinida](/learn/secuencia-de-control-indefinida/).

## Pide una diferencia, no una reescritura

Cuando desee realizar un cambio en el texto existente, pegue el fragmento relevante más pequeño y solicite al modelo que cambie solo lo que requiere la solicitud, indicando qué cambió. Dado un archivo completo, los modelos lo reescriben libremente: reformatean párrafos intactos, reordenan las líneas del preámbulo y ocasionalmente dejan caer algo al suelo. El verdadero cambio desaparece dentro de la rotación. Una edición mínima y descrita es aquella que realmente puedes revisar. Dentro de Oleafly, el asistente aplica esta forma proponiendo cada edición como una diferencia roja/verde que usted aprueba línea por línea, como se describe en [Asistente dentro de Oleafly](/learn/oleafly-ai/).

## Compila antes de confiar

Nunca envíes LaTeX que no hayas compilado, por muy plausible que parezca. Pega la sugerencia en tu documento, compila y lee el primer error, si lo hay. Enviar ese mensaje de error al modelo, junto con el fragmento ofensivo, generalmente produce un segundo intento funcional. Mantenga el proyecto en Git para que cualquier cambio asistido por el modelo pueda revertirse con un solo comando, una configuración que se explica en [Ponga el documento en GitHub](/learn/sync-with-github/). El modelo propone; dispone el compilador.