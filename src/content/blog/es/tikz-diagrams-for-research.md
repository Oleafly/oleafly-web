---

title: "Diagramas de investigación en TikZ cuando PowerPoint no es suficiente"
description: "Cuándo dibujar canalizaciones, autómatas y diagramas conmutativos en TeX para que cambien de color para la revista, se mantengan nítidos en la impresión y vivan como fuente en el repositorio."
date: 2026-07-08
tags: [tikz, figures, research]
---

Los diagramas de PowerPoint se convierten en rectángulos borrosos en el PDF. Los diagramas TikZ se quedan
vector, hacer coincidir las fuentes del documento y cambiar el color cuando una revista exige escala de grises
o un acento diferente. El comercio es una primera hora más pronunciada. Después de eso, pequeño
Las ediciones son diferencias de texto, no arqueología de capturas de pantalla.

No necesitas TikZ para cada figura. Fotografías, marcos de microscopios en bruto y
Los gráficos densos de matplotlib generalmente permanecen como se incluyen en PDF/PNG. Utilice TikZ cuando el
la figura es estructura: canalizaciones, autómatas, cuadros de arquitectura, diagramas de categorías,
árboles simples.

## Empieza pequeño

Una canalización de tres nodos enseña el modelo:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Nombrar nodos. Conéctese con `--` o anclajes explícitos (`(a.east)`). Prefiero pariente
ubicación (`derecha=de a`) sobre coordenadas mágicas que nunca recordarás.
Lecciones: [primera imagen de TikZ](/learn/tikz-intro/),
[nodos y flechas](/learn/tikz-nodes-arrows/).

## Los estilos superan a las opciones únicas

Defina estilos una vez para que todos los cuadros coincidan:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Cuando la revista te pida líneas más gruesas o monocromáticas, cambia el estilo, no
veinte nodos. Colorea con colores con nombre o una pequeña macro de paleta para que puedas intercambiar
acentos sin buscar códigos hexadecimales.

## CS e ingeniería: diagramas de flujo que se alinean

Utilice la biblioteca de `posicionamiento` (`abajo=de`, `derecha=de`) para que los cuadros compartan una cuadrícula.
Las coordenadas absolutas manuales son la forma en que los diagramas se pudren cuando se inserta un nodo. mantener
texto corto; poner detalles en el título. Guía:
[diagramas de flujo alineados](/learn/tikz-flowchart/).

Para bocetos de sistemas o redes neuronales, separe los "bloques" de las "anotaciones".
Las anotaciones pueden ser nodos de fuente más pequeños sin bordes para que la ruta principal permanezca
legible a dos columnas de ancho.

## Matemáticas y teoría: diagramas conmutativos

`tikz-cd` es la ruta habitual para diagramas de estilo de categorías sin colocar cada
nodo a mano:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Guía: [diagramas conmutativos](/aprender/diagramas-conmutativos/). para árboles y
existen diagramas de teoría de la prueba y bibliotecas especializadas; comienza simple antes que tú
importar la mitad de CTAN.

## Tiempo de externalización y compilación

Un artículo con veinte figuras de TikZ ralentizará las compilaciones completas. Opciones:

- Coloque cada figura en su propio archivo y `\ingrese`.
- Utilice la biblioteca "externa" para que las imágenes se conviertan en archivos PDF almacenados en caché.
- Borrador con `\tikzexternaldisable` cuando solo te interesa la prosa.

Exportar para diapositivas: compilar un documento TikZ "independiente" a PDF, convertirlo a PNG
solo si la herramienta de plataforma no puede aceptar PDF. Mantenga el `.tex` como fuente de verdad.

## Herramientas de lienzo versus TikZ escrito a mano

Algunos editores de investigación incluyen un lienzo de diagrama que emite TikZ editable (por
ejemplo del Diagram Composer de Oleafly: dibujar, modificar el código, compilar la figura,
insertar). Esto es útil para la geometría que puedes arrastrar. TikZ escrito a mano sigue ganando
para diagramas conmutativos ajustados y redes muy regulares. De cualquier manera, comete el
Fuente TikZ, no solo un PNG.

## Mantener diagramas en el repositorio

Guarde las fuentes de las figuras junto al documento:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Cuando la revista quiere líneas más gruesas, edita la fuente y la vuelve a compilar. cuando un
coautor "mejora" una captura de pantalla en una herramienta de diapositivas, has perdido la única
versión editable.

## Modos de falla comunes

El desbordamiento en dos columnas es común. Escale con `\resizebox` como último recurso;
rediseñar para el ancho primero. La falta de coincidencia de fuentes es otra: prefiera el documento predeterminado
fuentes sobre familias de fuentes codificadas dentro de TikZ a menos que la revista lo requiera.
Comprueba el contraste para hablar, porque el gris invisible en los proyectores es un clásico
trampa. Y las flechas sin etiqueta obligan al título a explicar cada borde, lo que significa
el diagrama está incompleto.

## Capas y superposiciones

Para charlas y ponencias que comparten figura, construye el diagrama en capas: base
Primero los cuadros, luego las flechas y luego las etiquetas. Comente las capas durante la depuración
colocación. Las superposiciones de Beamer (`\pause`, `\onslide`) pueden revelar una tubería paso a paso.
paso de la misma fuente de TikZ si mantiene estables los nombres de los nodos.

## Accesibilidad e impresión

No codifique el significado solo en rojo versus verde. Utilice también un estilo de forma o línea.
Mira la figura en escala de grises. Los subtítulos aún deberían tener sentido si el lector está
daltónicos o imprimir en una impresora de laboratorio en blanco y negro.

## Un flujo de trabajo que funciona

Dibuja en papel durante treinta segundos, luego construye el TikZ más pequeño que muestre el
reclamo. Defina estilos una vez y reutilícelos. Compile la figura sola hasta que
se ve bien, colóquelo en el periódico y deje que el título lleve el reclamo. comprometerse
el `.tex`.

PowerPoint está bien para una reunión de laboratorio única. Para el PDF se imprimirá una revista,
fuente vectorial que puedes recolorear supera otra ronda de "¿puedes enviar el archivo editable?"
archivo?"