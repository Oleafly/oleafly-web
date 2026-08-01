---

title: "Ese paquete no está instalado."
description: "tlmgr, MiKTeX y búsqueda bajo demanda con Tectonic u Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

#Ese paquete no está instalado

Tarde o temprano una compilación se detiene con una línea como `! Error de LaTeX: Archivo 'siunitx.sty' no encontrado`. El mensaje significa exactamente lo que dice: su documento solicitó un paquete, a través de `\usepackage{siunitx}`, y el compilador no pudo encontrar el archivo `.sty` del paquete en su máquina. No hay ningún problema con su documento. Las distribuciones de LaTeX no incluyen todos los paquetes de forma predeterminada y la solución depende de la distribución que ejecute.

## TeX en vivo

TeX Live, la distribución estándar en Linux y macOS (como MacTeX), incluye un administrador de paquetes llamado `tlmgr`. Instale el paquete que falta desde una terminal:

```
tlmgr install siunitx
```

Si se instaló TeX Live completo, que es de muchos gigabytes, todo ya está presente y este error no debería ocurrir. Suele aparecer con los esquemas de instalación "básicos" o "pequeños" más pequeños. Tenga en cuenta que el argumento de `tlmgr` es el nombre del paquete, no el nombre del archivo, por lo que no hay extensión `.sty`.

##MiKTeX

MiKTeX, común en Windows, tiene dos mecanismos. Su función de instalación sobre la marcha detecta el archivo que falta durante la compilación y ofrece buscarlo, ya sea avisándole o procediendo automáticamente según la configuración. Alternativamente, abra la consola MiKTeX, vaya a la pestaña Paquetes, busque el paquete e instálelo allí. Si la instalación sobre la marcha parece bloquear una compilación, generalmente está esperando un cuadro de diálogo de confirmación oculto detrás de otra ventana.

## tectónico

El motor Tectonic, que incluye Oleafly, se salta el paso manual: los paquetes se descargan a pedido durante la compilación y aterrizan en la caché local del motor. La primera compilación que usa `siunitx` lo recupera; Las compilaciones posteriores reutilizan el caché. Esa primera ejecución puede tardar más mientras se descargan las dependencias y necesita una conexión de red.

## Al instalar no se soluciona

Si el administrador de paquetes informa que no existe dicho paquete, verifique la ortografía con la página del paquete en CTAN, el archivo central de paquetes de LaTeX en ctan.org. Dos desajustes explican los casos más difíciles. Primero, el archivo y el paquete pueden tener nombres diferentes, porque un paquete de distribución puede contener varios archivos `.sty`. Esto se resuelve buscando en CTAN el nombre de archivo `.sty` exacto del mensaje de error. En segundo lugar, el error a veces nombra un archivo de su propio proyecto, como un archivo de clase que una plantilla olvidó incluir, y ningún administrador de paquetes puede proporcionarlo. El archivo tiene que venir de donde vino la plantilla.

Una última nota sobre un viejo consejo: descargar un único archivo `.sty` de Internet a la carpeta de su proyecto funciona, ya que LaTeX busca primero en el directorio actual, pero congela ese paquete en una versión aleatoria y lo oculta de las actualizaciones. Prefiere el administrador de paquetes y mantén el truco de copia manual para emergencias cercanas a las fechas límite.