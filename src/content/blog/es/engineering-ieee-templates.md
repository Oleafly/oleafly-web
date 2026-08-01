---

title: "Estudiantes de ingeniería: plantillas IEEE y ACM sin el fin de semana de dolor"
description: "Comience desde el archivo de clase real, sobreviva a flotaciones y ecuaciones de dos columnas, obtenga las referencias correctas y versione el artículo antes de que esté listo para la cámara."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

Las plantillas IEEE y ACM no son decoración opcional. ellos son la sumisión
formato. A partir de un zip aleatorio que alguien volvió a subir hace tres años, así es como
pasas la noche antes de la fecha límite cambiando el nombre de las fuentes y persiguiendo
`secuencia de control indefinida` en una clase que nunca quisiste editar.

Esto es para proyectos de cursos, trabajos de diseño senior y primera conferencia.
presentaciones.

## Empezar desde la clase oficial.

Descargue la clase y el ejemplo de la sociedad o del sitio de la conferencia para
*este año*. Coloque el `.cls`, cualquier `.bst` y el ejemplo `.tex` en su proyecto.
raíz. Compile una vez antes de escribir una sola oración original para que sepa
El entorno funciona.

La [galería de plantillas](/templates/) de Oleafly y los paquetes de instalación de aplicaciones gratuitas que
rastrear lugares comunes (IEEE, ACM y amigos) y luego compilar con el paquete
motor y detectar referencias y citas rotas en el editor del proyecto antes
listo para la cámara. Aún verificar con la convocatoria de ponencias de ese año: columna
recuento, límite de páginas y cambio de estilo de bibliografía.

Si la conferencia envía una clase modificada, use la suya, no una IEEEtran genérica
de la memoria.

## Reglas flotantes de dos columnas

En el modo de dos columnas, las figuras anchas usan "figura*" y a menudo solo aparecen en la parte superior.
parte superior de una página. Coloque el flotador cerca de la primera referencia y establezca los anchos en
`\columnwidth` o `\textwidth` a propósito. Las subfiguras una al lado de la otra necesitan cuidado
anchos o se desbordan hacia el margen.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Si una carroza huye a tres páginas de distancia, encógela o divide los paneles antes de luchar.
`[H]` durante una hora: [colocación del flotador](/learn/figure-wrong-position/).

## Ecuaciones en columnas estrechas

Las derivaciones largas se interrumpen en `\columnwidth`. Utilice "multilínea" o "dividir", o mueva
la derivación a un apéndice. No reduzca la fuente de la ecuación hasta que la línea
es ilegible; los revisores notan. Numera únicamente las ecuaciones que realmente cites.

Los algoritmos pertenecen a entornos `algoritmos`/`algorítmicos` dimensionados para
columna, no capturas de pantalla de un IDE.

## Referencias

Los estilos numéricos IEEE y los estilos ACM no coinciden en los detalles. Utiliza la bibliografía
estilo con el que se envía la plantilla. No inventes un híbrido de autor-año y
números de corchetes.

Valide el `.bib` para los campos faltantes antes de que la cámara esté lista:
[Validador BibTeX](/tools/bibtex-validator/). Las exportaciones académicas son confusas; limpio
claves (`autor:año:palabra clave`) y corregir los títulos que llegaron TODO EN MAYÚSCULAS.

Cite conjuntos de datos y software cuando el lugar lo requiera. Un DOI faltante es más fácil
arreglar ahora que en la ventana "actualizar cámara lista" del portal.

## Límites de página sin delitos

Los límites de página son reales. No aplaste los márgenes debajo de la plantilla, establezca
`\scriptsize` para toda la sección de resultados u ocultar texto dentro de figuras grandes.
Cortar contenido. Mover pruebas y gráficos adicionales a un arXiv complementario o extendido
versión si la llamada lo permite. Mantenga el envío legible. Lista de verificación más larga:
[límites de páginas sin delitos](/aprender/límites de páginas sin delitos/).

## El control de versiones ahora forma parte del informe de laboratorio

Tanto el diseño senior como los artículos de conferencias se benefician de los compromisos después de cada uno.
compilación exitosa. Un editor de investigación como
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) mantiene Git real
junto al PDF, SyncTeX y diagnóstico en vivo para que no envíe zip
archivos llamados `submission_really_final.zip`. Los controles remotos privados se mantienen inéditos
trabaje fuera de GitHub público hasta que la política lo permita.

Etiqueta o envía un mensaje al compromiso exacto que subiste al portal.

## Flujos de trabajo del equipo

Secciones propias por alumno. Una persona posee el `.bib` y el archivo de clase. fusionar
a través de solicitudes de extracción si el grupo es lo suficientemente grande. Compile el PDF completo en un
horario para que la integración no sea sólo la noche anterior.

Si un compañero de equipo solo edita Word, exporte para él y mantenga TeX como fuente:
[coautores que solo hablan Word](/learn/collaborator-uses-word/).

## Semana de preparación para la cámara

Las instrucciones listas para la cámara a menudo difieren del formato de revisión, así que vuelva a descargarlas
ellos. Actualice el bloque de autor, la financiación y los formularios de derechos de autor IEEE/ACM según sea necesario.
requerido. Vuelva a compilar con las opciones de clase finales (a menudo diferentes de
revisión). Verifique cada cifra en busca de ppp y fuentes; incrustar fuentes en el PDF si el
el portal lo requiere. Cargue el PDF y cualquier archivo zip de origen que requiera el portal, luego
archivar ambos.

## Bloqueo de autores y afiliaciones

Los bloques de autor IEEE/ACM son delicados: puntos de contribución iguales, múltiples
afiliaciones, gracias a agencias de financiación. Copie el autor del archivo de ejemplo.
marque y reemplace el texto con cuidado. Inventar tu propia pila `\gracias` es una
fuente común de cuadros insuficientemente llenos y comas faltantes en el PDF.

## Revisión ciega

Si la convocatoria es doble ciego, retire los nombres, la financiación que identifica al laboratorio y
autocitas que dicen "en nuestro trabajo anterior". Vuelva a habilitarlos para que estén listos para la cámara.
Mantenga una opción de clase "ciega" o un pequeño archivo de alternancia para no editarlo manualmente
identidad en seis lugares.

## Conclusión

Comience desde la clase oficial, respete el diseño de dos columnas y haga coincidir el
estilo de bibliografía con el que se envía la plantilla. Versiona todo. el
El contenido de ingeniería ya es bastante difícil sin una plantilla falsificada de 2019.