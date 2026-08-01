---

title: "Bibliografía vacía"
description: "Ruta, backend, cita faltante, bibliografía impresa versus bibliografía."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Bibliografía vacía

## El síntoma

Su documento se compila sin un error fatal, pero la sección Referencias falta por completo o el encabezado aparece sin nada debajo. A menudo, cada `\cite` en el texto se muestra como un signo de interrogación en negrita al mismo tiempo. Nada falló, por lo que no hay ningún error obvio que perseguir, lo que hace que este sea frustrante.

## Por qué sucede

La bibliografía no es producida únicamente por LaTeX. LaTeX primero escribe la lista de claves citadas en un archivo auxiliar. Un programa backend separado (`bibtex` o `biber`) lee su base de datos `.bib` y formatea las entradas coincidentes. Finalmente, LaTeX vuelve a leer el resultado formateado en la siguiente pasada. Una bibliografía vacía significa que esta tubería se rompió en alguna parte: el backend nunca se ejecutó, se ejecutó pero no pudo encontrar la base de datos, encontró la base de datos pero no se solicitaron claves o el documento solicita el resultado con el comando incorrecto.

## Resuelva las causas en orden

Primero, confirme que el archivo de la base de datos existe donde dice el documento. `\bibliography{refs}` y `\addbibresource{refs.bib}` buscan `refs.bib` en relación con el archivo principal, por lo que un archivo que se encuentra en una subcarpeta `bib/` debe tener como referencia `bib/refs` o `bib/refs.bib`. Un camino equivocado fracasa silenciosamente.

En segundo lugar, asegúrese de que el backend realmente se haya ejecutado. Una sola compilación nunca es suficiente; el ciclo completo es LaTeX, luego `bibtex` o `biber`, luego LaTeX dos veces más. Oleafly ejecuta este ciclo automáticamente, pero una compilación manual o una cadena de herramientas del editor mal configurada pueden omitir el paso intermedio y el resultado es precisamente una lista de referencias vacía.

En tercer lugar, verifique que al menos un comando `\cite` esté presente. El backend solo formatea las entradas que solicita el documento, por lo que un borrador sin citas aún obtiene una lista vacía por diseño. Durante la redacción inicial, puede forzar todo con `\nocite{*}`, que solicita cada entrada en la base de datos sin imprimir nada en el texto.

Cuarto, haga coincidir el comando con el sistema. Los documentos BibTeX clásicos terminan con `\bibliographystyle{...}` y `\bibliography{refs}`. Los documentos biblatex cargan la base de datos en el preámbulo con `\addbibresource{refs.bib}` y la imprimen con `\printbibliography`. Mezclar los dos, por ejemplo cargar biblatex pero seguir llamando a `\bibliography`, produce exactamente este error. Lo mismo ocurre con ejecutar el backend incorrecto: biblatex necesita "biber", y alimentarlo con el clásico "bibtex" no produce nada.

## Leer el propio registro del backend

El backend escribe sus quejas en un archivo `.blg` al lado de su documento, y ahí es donde aparecen entradas con formato incorrecto, claves duplicadas y mensajes de "No pude abrir el archivo de base de datos". Si los pasos anteriores parecen correctos pero la lista aún está vacía, el registro `.blg` casi siempre nombra al verdadero culpable. Para los signos de interrogación que persisten después de que aparece la bibliografía, consulte [Borrar marcas de citas misteriosas](/learn/citation-question-mark/).