---

title: "Los archivos en un proyecto real"
description: ".tex, .bib, .cls, .sty y la basura generada que no debes enviar."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# Los archivos en un proyecto real.

Abra la carpeta de cualquier proyecto LaTeX real después de una compilación y encontrará muchos más archivos de los que escribió. Esto sorprende a la mayoría de los principiantes y el miedo a eliminar algo incorrecto mantiene las carpetas desordenadas para siempre. La distinción que lo aclara: algunos archivos son fuente que usted edita, algunos son estilos proporcionados por una plantilla o paquete, y el resto son espacio temporal generado que el compilador recrea en cada ejecución.

## Los archivos que escribes

Sus archivos `.tex` contienen el documento real: el texto, las secciones, las figuras y las matemáticas. Un archivo `.bib` es su base de datos bibliográfica, una entrada por artículo o libro que pueda citar; puedes mantenerlo a mano o exportarlo desde un gestor de referencias como Zotero. Estos son los archivos que vale la pena respaldar y poner en control de versiones, porque todo lo demás se puede reconstruir a partir de ellos.

## Los archivos que te proporciona una plantilla

Un archivo `.cls` define una clase de documento, lo que usted nombra en `\documentclass{...}`. Las revistas y conferencias envían las suyas propias, por lo que cada envío parece idéntico y casi nunca editas uno. Un archivo `.sty` es un paquete: macros reutilizables y configuraciones cargadas con `\usepackage`. Solo escribirá uno usted mismo cuando desee compartir comandos personalizados en varios documentos. Un archivo `.bst` describe un estilo de cita BibTeX y, por lo general, también lo deja un lugar.

## Los archivos que crea el compilador

El archivo `.aux` almacena datos de referencias cruzadas y citas entre pasadas de compilación; nunca lo edite y siéntase libre de eliminarlo, ya que la próxima compilación lo reescribirá. El archivo `.log` registra todo lo que hizo el compilador y vale la pena abrirlo sólo cuando algo sale mal. El `.pdf` es el resultado que realmente deseaba.

| Ampliación | Rol | ¿Editar a mano? |
| --- | --- | --- |
| `.tex` | Documentos fuente y capítulos | Sí |
| `.bib` | Base de datos bibliográfica | Sí (o exportar desde Zotero) |
| `.cls` | Clase de documento | En raras ocasiones, plantillas de proveedores |
| `.sty` | Paquetes/archivos de estilo | Al escribir tus propias macros |
| `.bst` | Estilo BibTeX | Rara vez |
| `.aux` | Datos cruzados | **No:** generado |
| `.log` | Registro del compilador | Leer al depurar |
| `.pdf` | Salida | Ver/enviar |

## Diseño del proyecto que escala

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Un `main.tex` en el nivel superior actúa como punto de entrada, los capítulos viven en su propia carpeta y se ingresan con `\input` o `\include`, las imágenes se ubican en `figures/` y la bibliografía permanece en un `refs.bib`. Este diseño sigue siendo manejable ya sea que el proyecto sea un artículo de cuatro páginas o una tesis. [Archivos de capítulos divididos](/learn/split-chapter-files/) muestra cómo se conectan las piezas.

Si usa Git, agregue `*.aux`, `*.log` y los demás archivos generados a `.gitignore` para que su historial solo rastree la fuente real. Los proyectos de Oleafly son carpetas simples en el disco, por lo que este consejo se aplica allí sin cambios. El error más común es el inverso: mientras se busca un error de compilación extraño, eliminar los archivos `.aux` suele ser la solución, porque uno obsoleto debido a una ejecución interrumpida puede envenenar todas las compilaciones posteriores.