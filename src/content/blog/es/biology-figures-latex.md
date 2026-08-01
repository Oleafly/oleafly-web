---

title: "Artículos sobre biología y ciencias biológicas: figuras, láminas de varios paneles y coautores"
description: "LaTeX práctico para laboratorio húmedo y biología computacional: figuras de múltiples paneles, resolución, suplementos, notación estadística y colaboración sin sobrescribirse entre sí."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Los manuscritos de ciencias biológicas ocupan el primer lugar. Los críticos hojean el plato antes de
lea su prosa, por lo que la figura tiene que llevar el reclamo sin agitar la mano en
el título. LaTeX maneja eso bien si tratas las figuras como de primera clase
archivos de proyecto en lugar de algo que pegue a las 2 a.m. antes del suplemento
plazo.

Los grupos de laboratorio húmedo y computacionales se enfrentan a los mismos líos: paneles sin compartir
barras de escala, artefactos JPEG en borrones, suplementos que no se pueden compilar y un
docena de coautores editando un párrafo. A continuación se muestra lo que realmente funciona.

## Figuras de múltiples paneles

Los revisores esperan paneles (a)(b)(c) bajo un mismo título. Puedes:

1. Construya la placa fuera de TeX (Illustrator, Inkscape, exportación de Fiji) y suéltela
   en un solo PDF o PNG, o
2. Ensamble en TeX con `subcaption` cuando cada panel sea su propio archivo:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Consulte los paneles como Figura~\ref{fig:exp}a en el texto sólo si el estilo de la revista
lo permite. Muchos lugares prefieren la "Figura 2A" con un esquema aplicado
en todas partes. Más sobre ese patrón:
[paneles a, b, c](/learn/subfigures-abc/).

Nombra los archivos consistentemente (`fig03_western_a.pdf`) para que nadie invente
`final_gel_NEW.png` la semana de envío.

## Resolución, color y formatos de archivo

Guarde los archivos de microscopía en formato TIFF o PDF de alta resolución. Para el PDF en papel
sí mismo, utilice gráficos vectoriales para esquemas y PNG/PDF a suficientes ppp para
datos ráster. Omita las anotaciones y geles JPEG en línea. Artefactos de compresión
leer como ciencia descuidada incluso cuando el experimento está bien.

Verifique las cargas de color y las reglas de impresión antes de diseñar una paleta de seis colores que
solo funciona en su monitor calibrado. Algunas revistas quieren CMYK; otros se convierten
mal sin preguntar. Cuando solicitan versiones de clave seguras en escala de grises
cifras, dales esas.

Coloque barras de escala y unidades de intensidad en el panel, no solo en el título. si
figuras de re-diseños de producción, sobreviven barras de escala integradas; notas solo con subtítulos
muchas veces no lo hacen.

## Esquemas vs paneles de datos

Mantenga la "caricatura del camino" separada de la "cuantificación de la transferencia".
Los dibujos animados pueden ser TikZ o arte vectorial externo. Los paneles de datos deben permanecer cerca de
la exportación de análisis para que pueda regenerarlos cuando un revisor quiera un
normalización diferente. Tenga en cuenta la ruta del script de análisis en las notas del título o en un
suplemento de reproducibilidad cuando la revista lo permita.

## Suplementos que aún se compilan

Mesas gigantes, geles adicionales y fotogramas de películas pertenecen a un suplemento con su propio
documento o un apéndice claro. Algunas reglas que ahorran dolores de cabeza:

Las etiquetas deben ser únicas si principal y complementaria comparten una compilación. si lo son
proyectos separados, escriba "Figura S3" en texto plano y no confíe en `\ref`
en archivos PDF. Mantenga una breve lista de qué afirmaciones del texto principal señalan en qué
Complemente los artículos para que nada se desvíe.

Un suplemento que no recopile la semana de envío sigue siendo su
problema, incluso cuando el PDF principal parece limpio.

## Caos de múltiples autores

Los artículos de biología suelen tener muchos coautores con diferentes niveles de habilidad en LaTeX. Propio
archivos por sección (`results.tex`, `methods.tex`, `figs.tex`), fusionar
Git y decide quién mantiene el `.bib` (una persona o un grupo compartido de Zotero).
exportación).

Una carpeta de proyecto local es más fácil de comprimir para un colaborador que una nube
proyecto al que pierden el acceso después de graduarse. La historia real de Git supera al correo electrónico
archivos adjuntos llamados `manuscript_JM_edits_FINAL.docx` que alguien vuelve a convertir
a TeX a mano. Punto de control después de compilaciones exitosas; restaurar cuando se fusiona
sale mal; mantenga un control remoto privado.

Si algunos coautores solo editan Word, exporte DOCX o PDF y conserve `.tex`
como fuente de verdad. Ver
[coautores que solo hablan Word](/learn/collaborator-uses-word/).

## Métodos y notación estadística.

Defina macros estadísticas una vez para que los valores p no aparezcan como `$p$` y
`p=` en el mismo artículo:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Indique la prueba, n, y la corrección de comparación múltiple en métodos o tabla
notas, no solo en la leyenda de una figura que se recorta en producción. Denso
Los artículos se benefician de una breve lista de notaciones. Consulta de referencia/cita en vivo en un
El editor de investigación detecta una `\ref` de un panel eliminado antes que el revisor.

## Títulos que llevan el reclamo

Un buen título dice lo que se midió, en qué sistema y lo que el lector
debería darse cuenta. Evite "Ver texto". No arroje métodos en el título que
pertenecen a la sección de métodos. Las letras del panel (negritas o paréntesis) deben
Combina con el estilo de la casa.

## Lista de verificación de figuras previa al envío

Antes de presionar enviar, recorre las figuras una vez:

- Cada figura principal citada en orden (o el orden que permita la revista).
- Paneles etiquetados; barras de escala donde importan.
- No hay desorden JPEG en paneles cuantitativos.
- Compilación de suplementos; Los números S no se han reorganizado.
- Política de color verificada; tamaños de archivos bajo los límites del portal.
- Las imágenes de origen y los scripts aún se pueden encontrar en el archivo del proyecto o del laboratorio.

## Westerns, geles y contrastes

No procese demasiado los borrones para el PDF. Las revistas y los lectores buscan el contraste
juegos. Mantenga los archivos sin procesar en el archivo del laboratorio y envíe paneles que coincidan con lo que
cuantificación utilizada. Si reorganiza los paneles, actualice cada panel en el texto
carta el mismo día, no "más tarde".

## Películas y suplementos interactivos

Cuando la revista permita películas, colóquelas de la manera que indiquen y coloque un
todavía más título en el PDF. No dependa de un enlace personal a la nube que
muere después de graduarse.

Las cifras son la columna vertebral de estos artículos. LaTeX es solo el marco. Asegúrate
el marco no es lo que falla la noche anterior a la presentación.