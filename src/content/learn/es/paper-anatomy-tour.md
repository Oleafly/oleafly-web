---

title: "Un papel, de arriba a abajo."
description: "Un recorrido a pie por cada parte de un trabajo de investigación y el trabajo que realiza cada parte."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Un papel, de arriba a abajo.

Los trabajos de investigación parecen intimidantes hasta que te das cuenta de que están ensamblados a partir de la misma docena de piezas, aproximadamente en el mismo orden, cada vez. Una vez que conozca el trabajo de cada parte, podrá leer los artículos más rápido y escribirlos sin mirar una página en blanco. Aquí está el recorrido.

## La portada

| Parte | Es un trabajo |
|---|---|
| Título | Haz que el lector adecuado deje de desplazarse. |
| Autores | Di quién hizo el trabajo y a quién enviar un correo electrónico. |
| Resumen | Venda el artículo completo en 150-250 palabras. |
| Palabras clave | Ayude a los motores de búsqueda e indexadores a archivarlo correctamente. |

El título y el resumen hacen la mayor parte del reclutamiento. El noventa por ciento de sus lectores potenciales no verán nada más, razón por la cual [el resumen recibe su propia lección](/learn/write-an-abstract/) y la [página de título tiene su propia mecánica de LaTeX](/learn/title-page/).

## El cuerpo

| Parte | Es un trabajo |
|---|---|
| Introducción | Explique por qué el problema es importante y qué aporta usted. |
| Trabajo relacionado | Posiciona tu trabajo entre todo lo que vino antes. |
| Método | Describe lo que hiciste con suficiente precisión para reproducirlo. |
| Experimentos/resultados | Muestre evidencia de que el método funciona. |
| Discusión | Interpretar la evidencia honestamente, incluso cuando sea débil. |
| Conclusión | Repita la conclusión y señale lo que viene después. |

El cuerpo es un argumento contado en etapas: aquí hay un problema, aquí está nuestra idea, aquí está la prueba de que funciona, esto es lo que significa. Si una sección no promueve ese argumento, está rellenando. Consulte [introducción y trabajo relacionado](/aprender/introducción-y-trabajo-relacionado/) y las [secciones de la sala de máquinas](/aprender/metodos-resultados-discusión/) para obtener más información sobre cada uno.

## La materia de atrás

| Parte | Es un trabajo |
|---|---|
| Agradecimientos | Agradezca a los financiadores, ayudantes y revisores de borradores. |
| Referencias | Enumere todas las fuentes que citó, formateadas según las reglas del lugar. |
| Apéndice | Mantenga pruebas, tablas adicionales y detalles que interrumpan el flujo. |
| Material complementario | Lleve códigos, datos y vídeos que no caben en un PDF. |

Las referencias no son decoración, son la evidencia sobre la que se basan sus afirmaciones. Consulte [notas a pie de página, referencias y apéndices](/learn/footnotes-references-appendix/) para saber quién lee qué, y [citas](/learn/add-citations/) para conocer la mecánica de LaTeX.

## El esqueleto en LaTeX

La mayor parte de esto se asigna directamente a comandos que ya conoce:

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

Los comandos de sección manejan la numeración y la tabla de contenido por usted, como se explica en [secciones y estructura](/aprender/secciones/).

## Adónde ir a continuación

Si es nuevo en el género de los artículos, comience con [qué es realmente un artículo de investigación](/aprender/qué-es-un-artículo-de-investigación/). Si está a punto de escribir uno, el resto de esta pista recorre cada parte en orden, desde [resúmenes](/aprender/escribir-un-abstract/) hasta [cuánta matemática realmente necesita](/aprender/cuánta-matemática/). Lee la parte en la que estás atascado, escríbela y repite.