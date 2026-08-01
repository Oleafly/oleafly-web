---

title: "Obtenga un TeX que funcione en cualquier sistema operativo"
description: "Oleafly con un motor incluido o una instalación completa de TeX Live/MiKTeX."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Obtenga un TeX que funcione en cualquier sistema operativo

Escribir LaTeX localmente requiere un sistema TeX: el motor que compila su código fuente más los miles de paquetes de los que dependen los documentos. Hay dos formas sensatas de conseguir uno. Una es una aplicación con el motor integrado, que te permite compilar en minutos. La otra es una distribución TeX completa, que instala la cadena de herramientas de línea de comandos completa que cualquier editor puede usar. Ambas rutas terminan en el mismo lugar: un archivo `.tex` que se convierte en PDF en su máquina.

## Ruta A: una app con el motor incluido

Descargue [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) para Mac, Windows o Linux. Incluye el motor Tectonic, por lo que no es necesario administrar una instalación TeX separada: abres la aplicación, creas un proyecto y compilas. Cuando un documento usa un paquete que no está presente, Tectonic lo recupera a pedido, lo que requiere una conexión de red la primera vez que se usa un paquete determinado y nada después. Esta ruta es adecuada para cualquiera que quiera escribir artículos en lugar de administrar una instalación de TeX, y deja archivos comunes `.tex` y `.bib` en el disco que cualquier otra herramienta puede leer.

## Ruta B: una distribución TeX completa

La instalación de una distribución le proporciona `pdflatex`, `xelatex`, `lualatex` y el administrador de paquetes como comandos del sistema. En una Mac, instale MacTeX, que es TeX Live empaquetado para macOS; Si la descarga de varios gigabytes no es bienvenida, BasicTeX es un núcleo pequeño que se puede ampliar a través de TeX Live Utility según surjan las necesidades. En Windows, MiKTeX es la opción común y puede instalar paquetes faltantes sobre la marcha durante la compilación, mientras que TeX Live funciona igualmente bien. En Linux, instale `texlive-full` desde su administrador de paquetes para todo a la vez, o un esquema más pequeño como `texlive-latex-extra` más la herramienta `tlmgr` para agregar paquetes más adelante. Espere que una instalación completa demore un tiempo y varios gigabytes de disco.

## Verificar la instalación

Abra una terminal y solicite a un motor su versión:

```bash
pdflatex --version
# or
xelatex --version
```

Un banner de versión significa que la cadena de herramientas está en camino y lista. Un error que indica que no se encuentra el comando generalmente significa que los cambios del instalador en su RUTA aún no han tenido efecto; reiniciar la terminal o cerrar sesión y volver a iniciarla en Windows lo resuelve.

## ¿Qué camino tomar?

Elija la aplicación si está comenzando o simplemente desea la ruta más corta hacia un PDF compilado. Elija una distribución completa si necesita motores específicos, compilaciones de línea de comandos o integración con un editor existente. Los dos coexisten sin conflicto, por lo que comenzar con la Ruta A y agregar la Ruta B luego no cuesta nada. De cualquier manera, el siguiente paso es el mismo: compilar [su primer documento](/aprender/primer-documento/).