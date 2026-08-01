---

title: "Por qué la gente se cambia a XeLaTeX"
description: "Fuentes del sistema, scripts complejos, plantillas de especificaciones de fuentes."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Por qué la gente se cambia a XeLaTeX

LaTeX es un lenguaje, pero varios motores lo compilan y difieren en lo que pueden hacer. El motor tradicional es pdfLaTeX y los dos modernos son XeLaTeX y LuaLaTeX. La principal razón por la que la gente pasa a XeLaTeX son las fuentes: pdfLaTeX sólo utiliza fuentes empaquetadas específicamente para TeX, mientras que XeLaTeX carga cualquier fuente OpenType o TrueType instalada en su sistema, dirigida por su nombre común.

## Las tres razones para cambiar

El primero es el acceso directo a las fuentes del sistema. Con el paquete `fontspec`, la elección de fuente es una línea legible y no es necesario que exista ningún paquete de fuentes específico de TeX para el tipo de letra que desea. Ya sea que el objetivo sea `\setmainfont{Inter}` para una apariencia moderna o Times New Roman para un requisito de revista, el mecanismo es el mismo:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` requiere XeLaTeX o LuaLaTeX; en pdfLaTeX simplemente falla. Las fuentes también pueden viajar dentro de la carpeta del proyecto en lugar del sistema, como se muestra en [un archivo de fuente al lado del proyecto](/learn/install-custom-font/).

El segundo es Unicode nativo y scripts complejos. XeLaTeX lee entradas UTF-8 directamente y maneja sistemas de escritura que pdfLaTeX no puede, incluidos árabe, devanagari, chino, japonés y coreano, con la configuración adecuada y, a través del paquete "polyglossia", la división de palabras y la dirección correctas por idioma. Si su documento mezcla guiones o simplemente cita un nombre con signos diacríticos inusuales, esto por sí solo decide el motor.

El tercero son las plantillas que deciden por ti. Muchas plantillas modernas de CV, tesis y presentaciones cargan `fontspec` o `polyglossia` en sus primeras líneas, y dichas plantillas se compilan solo en XeLaTeX o LuaLaTeX. Si una plantilla descargada falla inmediatamente con un error que menciona "fontspec", la solución es cambiar el motor, no editar la plantilla.

## A qué renuncias

Las compensaciones son modestas pero reales. Algunos paquetes específicos de pdfLaTeX no se aplican, en particular la expansión de fuentes `microtype`, que XeLaTeX admite sólo parcialmente. Las compilaciones también se ejecutan algo más lentas. Algunas publicaciones de revistas más antiguas todavía asumen pdfLaTeX, así que consulte las instrucciones del lugar antes de enviar un manuscrito creado en XeLaTeX. LuaLaTeX comparte las capacidades de fuente y Unicode y agrega secuencias de comandos Lua. Entre los dos, elija el nombre de su plantilla o lugar. Los documentos creados con `fontspec` generalmente se compilan en ambos.

## Elegir en la práctica

Una regla razonable es usar pdfLaTeX cuando la plantilla de un lugar esté dirigida a él, y XeLaTeX para todo lo que elija las fuentes: tesis, CV, diapositivas y documentos multilingües. El motor incluido de Oleafly está basado en XeTeX (Tectonic), por lo que los documentos `fontspec` se compilan allí sin ninguna configuración del motor. El error común es mezclar eras, por ejemplo cargar `fontspec` junto con paquetes de fuentes solo para pdfLaTeX como `newtxtext`. Elija un sistema de fuentes por documento y la pregunta del motor se responderá sola.