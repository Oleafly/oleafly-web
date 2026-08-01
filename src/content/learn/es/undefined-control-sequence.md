---

title: "Secuencia de control indefinida"
description: "Nombres de comandos desconocidos: errores tipográficos, paquetes faltantes, motor incorrecto."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Secuencia de control indefinida

## El síntoma

La compilación se detiene con `! Secuencia de control indefinida.` Luego, el registro muestra la línea donde sucedió, dividida en dos: todo lo que TeX había leído hasta el comando infractor incluido en una línea, y el resto de la línea fuente debajo de ella. El último token en esa línea superior es el comando que TeX no reconoció, lo que hace que este sea uno de los errores más fáciles de localizar con precisión.

## Por qué sucede

Una secuencia de control es cualquier cosa que comience con una barra invertida. TeX no tiene un vocabulario fijo: los comandos existen sólo porque el kernel, la clase de documento, un paquete o su propio `\newcommand` los definieron. Cuando TeX lee una barra invertida seguida de un nombre que nada ha definido, no puede adivinar lo que quisiste decir y se detiene. El error nunca se debe a que el comando sea "incorrecto" en general. Se trata de que ese nombre se desconoce en este documento, a estas alturas, bajo este motor.

## Arreglarlo en tres controles

Primero revisa la ortografía. `\texbf` en lugar de `\textbf`, `\lable` en lugar de `\label`, o un espacio suelto que divide un nombre en dos cuentas en la mayoría de los casos. El número de línea del registro le lleva directamente al error tipográfico.

Si la ortografía es correcta, probablemente falte el paquete que lo define. `\includegraphics` no hace nada sin `\usepackage{graphicx}`, `\toprule` necesita `booktabs` y `\SI` necesita `siunitx`. Esto duele más cuando copias un fragmento de otro documento o de la respuesta de un modelo: el texto del cuerpo apareció, la línea del preámbulo no. Encuentre qué paquete define un comando en [Cada comando explicado](/learn/every-command-explained/), agregue la línea `\usepackage` y vuelva a compilar. Si el paquete en sí no está instalado, consulte [Instalar un paquete faltante](/learn/install-missing-package/).

Si el paquete está cargado y el error persiste, sospeche del motor. Algunos comandos solo existen bajo un motor en particular: `\fontspec` y sus parientes requieren XeLaTeX o LuaLaTeX y morirán bajo pdfLaTeX exactamente con este error. Las plantillas que especifican un motor en su documentación suelen hacerlo por este motivo. [Qué motor para este proyecto](/learn/engines-compared/) explica las diferencias.

## Dos peculiaridades que vale la pena conocer

El orden importa: un comando usado antes de la línea `\usepackage` que lo define todavía no está definido en ese punto, así que mantenga la carga del paquete en el preámbulo, encima de `\begin{document}`. Y un error a menudo oculta otro, porque después de que TeX se recupera, puede leer mal todo lo que sigue. Corrija la primera secuencia de control indefinida en el registro, vuelva a compilar y solo entonces observe lo que queda.