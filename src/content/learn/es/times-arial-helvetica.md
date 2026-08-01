---

title: "Times, Arial, pilas tipo Helvética"
description: "Las revistas de asignaciones newtx, helvet o fontspec todavía solicitan."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times, Arial, pilas tipo Helvética

Las pautas de revistas y conferencias todavía exigen rutinariamente Times para el cuerpo del texto o Arial para las cifras, décadas después de que esas fuentes dejaron de ser la primera opción estética de cualquiera. En LaTeX hay dos formas de satisfacer dicho requisito y cuál se aplica depende de su motor. El pdfLaTeX clásico no puede cargar archivos Times New Roman o Arial reales, por lo que utiliza clones compatibles con métricas que se envían como paquetes. XeLaTeX y LuaLaTeX cargan las fuentes reales del sistema a través de `fontspec`.

## La ruta del paquete

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` cambia la fuente del texto a un clon de Times y `newtxmath` proporciona matemáticas coincidentes. El emparejamiento importa: cambie solo la fuente del texto y las ecuaciones permanezcan en Computer Modern por defecto. Un párrafo del Times junto a Computer Modern Math es inmediatamente visible. `newtx` es el sucesor mantenido de los antiguos paquetes `times` y `txfonts`, que debes evitar en documentos nuevos. Las pilas antiguas no convertían las matemáticas y algunas producen las fuentes de mapa de bits descritas en [texto borroso en el visor de PDF](/learn/fuzzy-font-pdf/).

`helvet` proporciona un clon de Helvetica como la familia sans-serif, que también reemplaza a Arial, ya que Arial fue diseñado para igualar las métricas de Helvetica. Cargarlo no cambia la fuente del documento, porque el texto del cuerpo usa la familia serif. La línea `\renewcommand{\familydefault}{\sfdefault}` realiza ese cambio: `\familydefault` es la familia que LaTeX usa para texto ordinario, y establecerla en `\sfdefault` hace que todo el documento sea similar a Helvética. Omite esa línea si solo necesitas títulos sans-serif o etiquetas de figuras. Si Helvetica aparece ligeramente grande junto a la fuente de su texto, `\usepackage[scaled=0.92]{helvet}` la alinea.

## La ruta de especificación de fuente

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

En XeLaTeX o LuaLaTeX, `fontspec` aborda las fuentes por nombre y las carga desde el sistema operativo, por lo que esto establece la Times New Roman genuina como la familia principal (serif) y la Arial genuina como la familia sans. Las fuentes deben estar realmente instaladas en la máquina. Eso afecta cuando un documento se mueve entre computadoras o hacia CI. Una fuente que viaja con el proyecto evita el problema, como se muestra en [un archivo de fuente al lado del proyecto](/learn/install-custom-font/). Las matemáticas son nuevamente una preocupación separada, manejada por "unicode-math" o manteniendo "newtxmath" al lado. Las ventajas y desventajas del motor se tratan en [por qué la gente cambia a XeLaTeX](/learn/when-use-xelatex/).

## La regla general

Antes de elegir cualquiera de las rutas, verifique si el archivo de clase del lugar ya configura las fuentes. La mayoría lo hace. Apilar sus propios paquetes de fuentes encima de una clase que ha hablado produce, en el mejor de los casos, advertencias. Agregue paquetes de fuentes solo a documentos cuya clase le deje la elección a usted.