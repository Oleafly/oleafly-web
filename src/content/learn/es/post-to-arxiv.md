---

title: "Publicar su primera preimpresión de arXiv"
description: "Respaldo, categorías, limpieza de fuentes, licencias y ciclo de anuncios."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Publicar su primera preimpresión de arXiv

Publicar en arXiv hace que su trabajo sea público, citable y con marca de tiempo. El proceso tiene algunas peculiaridades que sorprenden a todos la primera vez. Si no ha leído [qué es arXiv](/learn/what-is-arxiv/), comience allí y luego regrese.

## Respaldo: el portero en la puerta

Los nuevos remitentes en la mayoría de las categorías necesitan el respaldo de un autor establecido de arXiv. Si su cuenta utiliza un correo electrónico académico y tiene coautores con historial de arXiv, esto suele ser automático o rápido. De lo contrario, pregúntele a su asesor o coautor; el sistema te entrega un código de respaldo para enviarlos. Ordene esto días antes de que planee publicar, no la noche del día.

## Elige tus categorías

arXiv está organizado en categorías moderadas como `cs.LG` (aprendizaje automático), `cs.CL` (computación y lenguaje), `math.OC` (optimización), `stat.ML`. Eliges una categoría primaria y opcionalmente algunas secundarias. Busque dónde se encuentran los artículos que cita y sígalos. La categoría principal determina qué lista de correo anuncia su artículo, por lo que decide quién lo ve primero.

## arXiv quiere tu fuente, no tu PDF

Éste es el grande. Si su artículo se produjo con LaTeX, arXiv requiere la fuente LaTeX, no solo un PDF. Su sistema AutoTeX lo compila en sus servidores y esa compilación es la que descargan los lectores. Consecuencias:

- Todos los archivos que su artículo necesita deben estar en la carga: figuras, archivo `.bbl` (arXiv no ejecuta BibTeX por usted, así que incluya el `.bbl` generado), archivos de estilo que no sean estándar.
- Si no se compila en su sistema, lo arreglas hasta que lo haga.

## Limpia tu fuente primero

Sus comentarios se envían con su fuente y cualquiera puede descargarlos. Ese borrador de nota que dice "% TODO: ¿es cierta esta afirmación?" será público. Antes de cargar:

- [ ] Tirar comentarios. La herramienta `arxiv-latex-cleaner` automatiza esto y también elimina archivos no utilizados.
- [] Eliminar figuras no utilizadas y secciones antiguas.
- [] Compruebe si hay nombres de archivos embarazosos (`final_v7_ACTUALLY_final.tex`)
- [] Compile la copia limpia desde cero una vez

Trabajar desde un proyecto respaldado por Git ayuda aquí: en Oleafly puede dividir un punto de control, limpiar la fuente y compararla con el original para confirmar que no haya cambios sustanciales antes de exportar el ZIP.

## Licencias

arXiv le pide que elija una licencia. La licencia mínima exclusiva de arXiv es la opción predeterminada común y mantiene abiertas sus opciones con las revistas. CC BY es más permisivo. Si el artículo se dirige a una editorial específica, consulte su política de preimpresión antes de elegir algo irrevocable.

## El ciclo del anuncio y su folklore

arXiv anuncia nuevos artículos en lotes, en un horario fijo de lunes a viernes con una fecha límite de envío. Los artículos enviados justo después del corte aparecen en la parte superior de la siguiente lista, y una pequeña industria artesanal de folclore afirma que los artículos que encabezan la lista reciben más atención. Tal vez. No perdáis el sueño por ello; un buen resumen importa mucho más que la posición en la lista.

## Versiones: v1, v2 y después de la aceptación

Tu primera publicación es v1 y es permanente: puedes agregar versiones pero nunca eliminarlas. Publique la versión 2 cuando tenga mejoras reales, normalmente la versión aceptada después de la [revisión por pares](/learn/peer-review-explained/). Después de la aceptación, actualice la copia de arXiv con el contenido listo para cámara (respetando la política del editor) y agregue el DOI o el lugar en el campo de referencia de la revista. Los lectores te lo agradecerán.