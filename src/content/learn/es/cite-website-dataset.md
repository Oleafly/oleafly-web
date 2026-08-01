---

title: "Páginas web, vídeos, conjuntos de datos."
description: "entradas misceláneas/en línea y fechas de acceso para URL frágiles."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Páginas web, vídeos, conjuntos de datos.

BibTeX fue diseñado en la década de 1980 para revistas, libros y actas de congresos, por lo que no tiene una idea nativa de una página web, un vídeo de YouTube o un conjunto de datos sobre Zenodo. Aún necesitas citar estas cosas constantemente, y la solución estándar es el tipo de entrada `@misc`, que acepta casi cualquier combinación de campos y permite que el estilo los imprima de manera sensata.

## El patrón @misc

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Aquí importan tres detalles. Las llaves dobles alrededor de `{{Oleafly Contributors}}` le indican a BibTeX que trate la cadena completa como un nombre literal; sin ellos, analizaría "Colaboradores" como apellido y abreviaría el resto a "O. Colaboradores". El campo `howpublished` es el lugar habitual para una URL en BibTeX clásico, y envolver la dirección en `\url{...}` la escribe en fuente monoespaciada y permite dividirla claramente entre líneas (cargue el paquete `url` o `hyperref` para esto). El campo "nota" contiene la fecha de acceso, lo cual es importante porque el contenido web cambia y desaparece. Esa fecha les dice a los lectores qué versión de la página viste realmente.

## La alternativa biblatex: @online

Si su documento utiliza biblatex, existe un tipo dedicado. Una entrada `@online` toma los campos `url` y `urldate` adecuados, por lo que la misma fuente se convierte en `url = {https://oleafly.com}` y `urldate = {2026-07-24}`, y el estilo formatea la fecha de acceso por usted. Prefiere `@online` cuando el estilo de bibliografía lo admita y recurre a `@misc` cuando debas mantener la compatibilidad con un archivo clásico `.bst`. Las diferencias entre los dos sistemas se describen en [Classic BibTeX o biblatex](/learn/bibtex-vs-biblatex/).

## Conjuntos de datos y software

Los conjuntos de datos y las publicaciones de códigos merecen más que una URL simple cuando existe un DOI. Repositorios como Zenodo y Figshare crean DOI para que la cita pueda sobrevivir a cualquier configuración de alojamiento. Coloque el DOI en un campo `doi`, o en `howpublished` como `\url{https://doi.org/10.5281/...}` para estilos clásicos. Incluya una nota de "versión" cuando se versione el artefacto, porque "el conjunto de datos" que un lector descarga en cinco años puede no ser el que usted analizó. Muchos proyectos también publican una cita preferida, a menudo en un archivo `CITATION.cff` en el repositorio. Usarlo es más educado y más preciso que adivinar los campos usted mismo.

## Vídeos y otras fuentes extrañas

Para un video, coloque el canal o creador en "autor", el título del video en "título", la plataforma y la URL en "cómo se publicó" y el año de carga en "año", con su fecha de acceso en "nota". La regla general para cualquier cosa inusual es la misma: captura quién lo hizo, cómo se llama, dónde puede encontrarlo el lector y cuándo lo buscaste, y `@misc` llevará todo eso de forma segura a través de cualquier estilo.