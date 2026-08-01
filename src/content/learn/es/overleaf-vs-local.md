---

title: "Proyecto de navegador versus carpeta en el disco"
description: "Comodidad de la nube en comparación con la propiedad local, el trabajo fuera de línea y Git real."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Proyecto del navegador versus carpeta en el disco

Cuando empiezas a escribir LaTeX te enfrentas a una decisión temprana: ¿tu proyecto reside en una pestaña del navegador en el servidor de otra persona o en una carpeta de tu propio disco? Ambos modelos producen el mismo PDF. Se diferencian en quién posee la fuente, qué sucede cuando la red cae y qué parte de la cadena de herramientas circundante controla.

## Qué te aporta cada modelo

| | Nube (por ejemplo, al dorso) | Local (Oleafly, TeX Live) |
| --- | --- | --- |
| Configuración | Instantáneo, nada que instalar | Una instalación |
| Sin conexión | Limitado | La edición siempre funciona; compila ejecutadas con paquetes almacenados en caché |
| Privacidad | El proveedor almacena sus proyectos | Los archivos permanecen en su disco |
| Git | A través de un puente de sincronización | Nativo, un repositorio real en la carpeta |
| Colaboración | Cursores en tiempo real | Git, parches, carpetas compartidas |
| Costo | Nivel gratuito más suscripciones | Gratis |

Un proyecto en la nube es una fila en una base de datos que el servicio le brinda. Un proyecto local es un directorio que puede abrir en un administrador de archivos, copiarlo a una unidad USB, buscar con cualquier herramienta y versión con Git normal. Esa diferencia suena abstracta hasta que una fecha límite coincide con una interrupción, un cambio en el muro de pago o un vuelo.

## Cuando la nube es la elección correcta

La coedición en tiempo real es la verdadera ventaja de la nube. Si tres coautores necesitan escribir el mismo párrafo durante la última hora antes de una fecha límite y ninguno de ellos instala el software, un editor de navegador es la respuesta práctica. Actualmente, nada local reemplaza los cursores simultáneos.

## Cuando lo local es la elección correcta

Lo local gana cuando el borrador es confidencial o no está publicado, cuando trabaja en aviones o redes restringidas, cuando sus cifras y datos son grandes, o cuando desea un historial de versiones que no dependa de un nivel de suscripción. Un repositorio Git local registra sus cambios, exista o no algún servicio mañana, y la misma carpeta funciona con una terminal, un editor de código o el clon de un colaborador.

Oleafly está diseñado para el lado local de esta tabla: el compilador se envía dentro de la aplicación, los proyectos son carpetas simples con un historial real de Git y la IA opcional se ejecuta con su propia clave. Hay una comparación más larga en el [blog](/blog/local-first-vs-cloud-latex-editors/), y los documentos cubren [cómo los dos modelos pueden trabajar juntos](/docs/why-oleafly/) a través de GitHub.