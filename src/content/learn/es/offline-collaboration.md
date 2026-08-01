---

title: "Coautor sin cursor activo"
description: "Parches, carpetas compartidas más Git y propiedad de archivos de capítulos separados."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Coautor sin cursor activo

La edición colaborativa en tiempo real, en la que ves cómo se mueve el cursor de un coautor, es el modelo que venden los editores en la nube. Se escriben muchos buenos artículos sin él. Cuando los autores trabajan localmente, la colaboración asincrónica basada en Git es el patrón confiable: cada persona edita en su propia máquina y los cambios se combinan deliberadamente en lugar de carácter por carácter. Requiere un poco más de coordinación y se compensa con trabajo fuera de línea, historial completo y sin dependencia del servidor de nadie.

## Git como columna vertebral

La configuración estándar es un repositorio compartido, generalmente en GitHub, del que todos extraen y envían. Cada autor trabaja en sesiones: extrae el último estado, escribe, confirma, envía. Debido a que LaTeX es texto sin formato, Git fusiona cambios paralelos en diferentes partes del documento automáticamente y la configuración lleva unos minutos. [Ponga el documento en GitHub](/learn/sync-with-github/) lo cubre. Cuando un colaborador no puede o no quiere usar un host Git, los parches llenan el vacío: `git format-patch` convierte las confirmaciones en pequeños archivos que puedes enviar por correo electrónico, y el destinatario los aplica con `git am`, manteniendo intactas la autoría y el historial. Es un flujo de trabajo antiguo y todavía funciona en cualquier lugar donde funcione el correo electrónico.

Un híbrido también funciona cuando un coautor insiste en una carpeta sincronizada: mantenga la copia compartida en Dropbox o Syncthing por conveniencia, pero permita que una persona mantenga el historial de Git y realice fusiones. No apunte las compras de Git en vivo de dos personas a la misma carpeta sincronizada, porque los conflictos de sincronización dentro del directorio `.git` corrompen los repositorios.

## Dividir el documento por archivo

Las fusiones se vuelven raras cuando las personas rara vez tocan el mismo archivo. Divida el manuscrito para que cada capítulo o sección viva en su propio archivo, extraído de un `main.tex` delgado con `\input{chapters/methods}`. La mecánica está en [Dividir un documento en archivos](/learn/split-chapter-files/). Luego asigne la propiedad: cada coautor redacta sus propios archivos y un integrador se encarga del preámbulo, la fusión y la lectura final para mantener la coherencia de la notación y el tono. Esto refleja cómo los equipos de software evitan pisarse unos a otros y funciona por las mismas razones.

## ¿Qué es lo que realmente sale mal?

El modo de error que se debe evitar es que dos personas editen el mismo párrafo en el mismo período de tiempo. Git lo marcará como un conflicto, y los conflictos de LaTeX son legibles pero tediosos de resolver, por lo que la solución más barata es social: un mensaje rápido que diga "Hoy estoy en la introducción" evita casi todos ellos. Dos hábitos de escritura reducen el resto. Mantenga una oración por línea fuente, para que las ediciones paralelas de oraciones vecinas no choquen en absoluto, y retírela inmediatamente antes de cada sesión de escritura para que siempre esté editando el texto más reciente.