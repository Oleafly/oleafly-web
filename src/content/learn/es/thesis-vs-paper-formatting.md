---

title: "Formato de tesis versus formato de papel"
description: "Clases universitarias, portadas, capítulos, márgenes de encuadernación y reutilización de material en papel."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Formato de tesis versus formato en papel

Un artículo está formateado para un editor. Una tesis tiene el formato de una escuela de posgrado, una bestia muy diferente con reglas muy diferentes. Si solo tienes artículos escritos, la plantilla de tesis te sorprenderá de maneras específicas.

## ¿Quién establece las reglas?

Artículos: el lugar te ofrece una clase ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) y todos en todo el mundo usan la misma. Tesis: su universidad exige su propia clase o una página de reglas tipográficas (márgenes, interlineado, redacción de la página de título), y no hay dos universidades que estén de acuerdo. Obtenga primero la clase oficial de su departamento o escuela de posgrado. Si es antiguo y se niega a compilarse, es lo suficientemente común como para tener [su propia lección](/learn/fix-broken-template/).

## Las diferencias estructurales

| Aspecto | Papel | Tesis |
|---|---|---|
| Unidad de nivel superior | `\sección` | `\capítulo` |
| Base de clase | clase de lugar | Derivado `libro`/`informe` |
| Tema frontal | título + resumen | portada, declaración, resumen, TOC, listas de figuras y tablas |
| Longitud | 8 a 30 páginas | 80 a 300 páginas |
| Diseño | a menudo dos columnas | columna única, espacio generoso |
| Lados | PDF unilateral | a menudo a dos caras para imprimir |

Los capítulos cambian todo: la numeración pasa a ser "3.2", las figuras a "Figura 3.1" y cada capítulo normalmente se abre en una página nueva (a veces a la derecha).

## El asunto preliminar es la mitad de la batalla

La secuencia inicial de una tesis generalmente incluye: página de título, declaración de originalidad, resumen, agradecimientos, índice, lista de figuras, lista de tablas y luego el capítulo 1. La mayor parte está automatizada:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

La numeración de páginas romana y luego árabe hace que todos viajen una vez, [portada y números de página](/learn/front-matter-page-numbers/) lo cubre adecuadamente.

## Impresión a dos caras y márgenes de encuadernación

Las tesis impresas suelen ser a dos caras (opción de clase "dos caras"), lo que hace que los márgenes sean asimétricos: el margen interior es más ancho para sobrevivir a la encuadernación. Las reglas de tu universidad dirán algo así como "margen izquierdo 35 mm, otros 25 mm", lo que en un documento de dos caras significa *interior*, no izquierdo. No luches contra esto con `\hspace` manual, la opción de clase más la configuración de `geometría` lo manejan:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

`openright` fuerza los capítulos a las páginas de la derecha, estándar para copias encuadernadas.

## Reutilizar tus artículos como capítulos

La mayoría de las tesis absorben artículos publicados y la mayoría de las universidades lo permiten explícitamente. La mecánica: despojar a cada artículo del preámbulo de su sede, degradar sus "secciones" si es necesario, unificar la notación y las macros en todos los capítulos y fusionar las bibliografías en una sola. Mantener cada capítulo en su propio archivo hace que esto sea manejable. [Dividir capítulos en archivos](/learn/split-chapter-files/) muestra la configuración `\input`/`\include` que mantiene sana una compilación de 200 páginas.

Una advertencia honesta: las clases de tesis universitarias tienden a tener muchos paquetes, por lo que la primera compilación en una máquina nueva puede eliminar un lote de paquetes antes de tener éxito. Déjelo terminar una vez y las compilaciones posteriores serán rápidas.