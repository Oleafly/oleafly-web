---

title: "Zotero en un archivo .bib"
description: "Mejor BibTeX, exportación automática, claves que sobreviven a las máquinas."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero en un archivo .bib

Zotero es muy bueno recopilando referencias: toma metadatos y archivos PDF desde un botón del navegador y mantiene todo en condiciones de búsqueda. LaTeX, por otro lado, sólo lee archivos `.bib`. El puente entre los dos es el complemento Better BibTeX. Convierte una colección de Zotero en un archivo `.bib` que se mantiene actualizado y, lo que es igualmente importante, mantiene estables las claves de citas para que los comandos `\cite` nunca se rompan.

## Por qué la exportación incorporada no es suficiente

Zotero puede exportar BibTeX por sí solo, pero regenera claves de citas cada vez, y una clave que cambia de `knuth_literate_1984` a `knuth_literate_1984-1` rompe silenciosamente cada `\cite` que usaba el nombre antiguo. La exportación también es una instantánea única, por lo que el archivo queda obsoleto en el momento en que agrega un documento. Better BibTeX soluciona ambos problemas: las claves se generan a partir de una fórmula que usted elija, se pueden fijar para que nunca cambien y la exportación se puede actualizar automáticamente.

## Configurando la canalización

Primero, instale Better BibTeX desde su sitio web a través del cuadro de diálogo Herramientas, Complementos de Zotero y luego reinicie Zotero. En segundo lugar, decida una fórmula clave de cita en las preferencias de Better BibTeX. Un patrón que produce claves como `knuth1984` o `knuth1984literate` es fácil de escribir y de reconocer en el código fuente. En tercer lugar, haga clic derecho en la colección que pertenece a su artículo, elija Exportar colección, seleccione el formato Better BibTeX y marque "Mantener actualizado" antes de guardar el archivo en la carpeta de su proyecto como, por ejemplo, `refs.bib`. A partir de ese momento, agregar o editar un elemento en Zotero reescribe el archivo en unos segundos.

Finalmente, apunte su documento al archivo exportado con `\bibliography{refs}` o `\addbibresource{refs.bib}`, exactamente como con una base de datos escrita a mano. El cableado se trata en [De la clave .bib a la cita en el texto](/learn/add-citations/).

## División del trabajo

Trate a Zotero como la base de datos maestra y al archivo `.bib` como un artefacto generado que reside en el repositorio del artículo. Confirmar `.bib` junto con `.tex` significa que un coautor, o usted en otra máquina, puede compilar el artículo sin tener instalado Zotero. No edite manualmente el archivo exportado. La próxima exportación automática sobrescribe sus cambios. En su lugar, corrija los metadatos en Zotero y la corrección fluirá. Si una entrada aún se ve mal después de la exportación, ejecútela a través del [validador BibTeX](/tools/bibtex-validator/) para ver con qué campo no está satisfecho el estilo.

Un hábito previene la mayoría de los dolores futuros: una vez que aparece una clave en un manuscrito, fíjela en Better BibTeX (haga clic con el botón derecho en el elemento, Better BibTeX, Fije la clave BibTeX). Las claves fijadas sobreviven a cambios de fórmula, movimientos de máquinas y reorganizaciones de bibliotecas, que es exactamente lo que debe hacer una clave de cita.