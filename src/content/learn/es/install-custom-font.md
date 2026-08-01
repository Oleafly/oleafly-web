---

title: "Un archivo de fuente al lado del proyecto."
description: "fontspec Ruta para familias locales otf o ttf."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Un archivo de fuente al lado del proyecto.

Supongamos que su tesis utiliza una fuente que no está instalada en todas las máquinas que la compilarán: la computadora portátil de un coautor, el servidor de compilación de una universidad o su propia computadora después de una reinstalación. Instalar la fuente en todo el sistema en cada uno de ellos es frágil y, a veces, no está permitido. Coloque los archivos de fuentes en la carpeta del proyecto y apúntelos con `fontspec`, para que el documento tenga su propia tipografía. Esto requiere XeLaTeX o LuaLaTeX, ya que `fontspec` no funciona en pdfLaTeX. Los motivos se tratan en [por qué la gente cambia a XeLaTeX](/learn/when-use-xelatex/).

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## Qué hace cada tecla

`\setmainfont{MyFont}` declara la familia de texto principal y le proporciona el nombre base utilizado para crear nombres de archivos. `Path = ./fonts/` le dice a `fontspec` que busque los archivos en una carpeta `fonts` dentro del proyecto, en relación con el archivo principal `.tex`, en lugar de preguntarle al sistema operativo. `Extensión = .otf` indica el tipo de archivo una vez para que no sea necesario repetirlo por archivo. Utilice `.ttf` si eso es lo que tiene.

Las teclas restantes asignan formas de fuentes a archivos. En cada uno, `*` se expande al nombre base, por lo que `UprightFont = *-Regular` se resuelve en `MyFont-Regular.otf`, y de la misma manera `MyFont-Bold.otf` y `MyFont-Italic.otf`. Estos nombres deben coincidir exactamente con los nombres de archivos reales, incluidas las mayúsculas, porque las mayúsculas y minúsculas importan en los servidores Linux incluso cuando su sistema local lo perdona. Si la familia tiene cursiva y negrita, agregue `BoldItalicFont = *-BoldItalic`. Una forma que no asigna es una forma que el documento no puede usar: sin una línea `BoldFont`, `\textbf` no tiene nada a qué cambiar y el compilador advierte que la forma en negrita no está definida.

La misma sintaxis funciona para las otras familias, por lo que `\setsansfont` y `\setmonofont` aceptan bloques de opciones idénticos para una fuente sans-serif o de código local.

## Licencias y portabilidad

Envíe los archivos de fuentes con el proyecto solo si la licencia permite la redistribución. Las licencias abiertas como la SIL Open Font License lo permiten, y las fuentes de Google Fonts generalmente califican, pero las fuentes comerciales generalmente prohíben pasar copias a los colaboradores, en cuyo caso cada máquina necesita su propia copia con licencia y usted debe documentar ese requisito en el archivo Léame del proyecto.

El error común es una discrepancia silenciosa entre los nombres declarados y los archivos, a menudo después de cambiar el nombre de la carpeta o descargar un peso con un nombre diferente. Luego, la compilación se detiene con "No se puede encontrar la fuente 'MyFont-Regular'". Cuando eso suceda, compare el nombre de archivo esperado del error, carácter por carácter, con el contenido de la carpeta y confirme que la "Ruta" aún indica dónde se encuentran los archivos. Dado que el motor Tectonic incluido de Oleafly está basado en XeTeX, este patrón local del proyecto funciona allí sin instalación de fuentes del sistema.