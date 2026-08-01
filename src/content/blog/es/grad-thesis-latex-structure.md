---

title: "Estructurar una tesis de posgrado en LaTeX antes de que cueste el pánico"
description: "El capítulo incluye acrónimos, archivos de clases universitarias, velocidad de compilación e historial de Git para estudiantes de maestría y doctorado."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

La tesis es un trabajo largo con burocracia adjunta. LaTeX maneja el largo
papel bien. La burocracia suele ser un expediente de clase universitaria escrito en 2009.
y probado por última vez en un TeX Live diferente.

Comience a estructurar temprano, incluso si los capítulos todavía están vacíos. Mover contenido entre
archivos en el último mes es como se rompen las referencias cruzadas y las rutas de figuras.

## Acepta el archivo de clase, cerca el resto.

Coloque el `.cls` de la universidad (y los archivos requeridos `.bst`/logotipo) en el proyecto.
No reescribas la clase. Coloque sus macros, paquetes y contenido de capítulos en
archivos que controlas:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Si la clase se rompe en un motor moderno, clasificación con
[archivos de clase universitaria que no se compilarán](/learn/fix-broken-template/).
Documente qué motor acepta la oficina de tesis (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) antes de invertir en `fontspec`.

## Tema previo que esperan los comités

Números de páginas romanas para resúmenes, dedicatorias, agradecimientos, TOC, listas de
figuras/tablas; árabe para los capítulos principales. Exposición de clases de libro/informe
`\frontmatter` / `\mainmatter`; Las plantillas basadas en artículos necesitan un manual.
`\numeración de páginas`. Guía:
[romano y luego árabe](/learn/front-matter-page-numbers/).

El contenido de la página de título a menudo debe coincidir con una muestra de Word de la escuela de posgrado.
Copie el texto exactamente. La creatividad aquí hace que el PDF sea rechazado por un
lista de verificación.

## Capítulos como archivos

Una raíz, muchas incluyen:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Sea propietario de capítulos usted mismo, incluso cuando los coautores ayuden en los artículos que alimentan la tesis.
Mantenga las cifras en `cifras/capítulo3/` para que las rutas se mantengan estables cuando reordene.
Utilice `\includeonly{chapters/methods}` mientras redacta para compilar la tesis completa
no son el costo de cada edición de ecuación:
[archivos de capítulos divididos](/learn/split-chapter-files/).

Las etiquetas deben ser únicas en todo el proyecto (`eq:ch3-main`, no `eq:main` en
cada archivo). Vistas de estructura de todo el proyecto y ayuda de verificación de referencias en vivo en un
Árbol de 200 páginas.

## Acrónimos y símbolos

Los paquetes de glosarios son potentes y complicados. Para muchas tesis, un manual mantenido
La lista de símbolos en la portada es suficiente. Si necesita expansión automática
acrónimos, presupuesta un día para aprender `glosarios-extra` antes de la semana de
sumisión, no durante la misma.

Defina macros matemáticas en `macros.tex` y trate ese archivo como una ley compartida. Notación
que oscila entre el capítulo 2 y el capítulo 5 es un regalo para un examinador pedante.

## Bibliografía

Un `.bib` para toda la tesis, o un pequeño conjunto fusionado cuidadosamente. Llaves estables.
Validar antes del encuadernado suave:
[Validador BibTeX](/tools/bibtex-validator/). Combina el estilo del departamento.
quiere (estilos de humanidades numéricos, de autor, de año y con muchas notas a pie de página). no mezclar
biblatex y BibTeX clásico se acumulan en un solo preámbulo.

## Velocidad

Las compilaciones completas de tesis se vuelven lentas. Modo borrador para figuras, `\includeonly` y
TikZ externaliza la compra hace horas. Notas:
[espera más corta para el PDF](/learn/speed-up-compilation/).

Mantenga un ritual de "compilación completa" semanalmente para seguir viendo fallas entre capítulos
temprano.

## Copia de seguridad no es lo mismo que historial

Una copia de Dropbox es una copia de seguridad. Git es una historia de cómo cambió el argumento.
Comprometerse cuando se compila un capítulo. Envíe a un control remoto privado de GitHub o GitLab.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) inicializa un
repositorio real por proyecto, puntos de control después de compilaciones exitosas y ediciones inactivas,
y restaura con un solo clic, junto a las vistas de estructura de todo el proyecto y SyncTeX
que todavía funcionan en archivos de capítulos. Eso hace que el hábito sea más difícil de abandonar.
Puedes conseguir la misma disciplina con cualquier editor y Git cuidadoso; la tesis
no debería depender de recordar `git init` en el mes dieciocho.

## Ciclos de retroalimentación del comité

Exporte PDF para lectores que no abrirán el código fuente. Seguimiento de comentarios en ediciones o
un documento compartido, pero aplique ediciones en TeX. Cuando un miembro del comité devuelve un
PDF de marcado escaneado, nombre el archivo con fecha y versión para saber cuál
fuente confirmada a la que se refiere.

## Lista de verificación encuadernada blanda y dura

Antes de imprimir o depositar:

- El archivo de clase y el motor coinciden con las reglas de la oficina de tesis.
- Numeración correcta de las páginas iniciales; página de firmas presente si es necesario.
- Todo `\ref`/`\cite` se resuelve; sin `[?]`.
- Figuras y tablas enumeradas si es necesario; subtítulos consistentes.
- Los márgenes y el tamaño de fuente pasan la lista de verificación en PDF (imprima una página de prueba).
- Fuente + PDF + hash de confirmación archivado después del depósito.

## Figuras, tablas y "lista de" páginas

Muchas oficinas de tesis requieren una lista de figuras y tablas. Los subtítulos deben ser
consistente y no volcar toda la sección de métodos en un título de 20 líneas. uso
títulos breves para las listas y títulos explicativos más largos en el cuerpo si el
La clase admite subtítulos cortos opcionales.

## Plagio y publicaciones anteriores

Si los capítulos mezclan artículos publicados, siga las reglas de la universidad sobre inclusión.
y permiso del coautor. Conserve el PDF aceptado de cada artículo anterior y la tesis.
capítulo en control de versiones con una nota sobre lo que cambió (notación, extensión
experimentos, introducción unificada).

## Comienza este mes, no el mes que escribes

Crea el esqueleto cuando propongas el esquema. Capítulos vacíos que compilan.
contar como progreso. La mayor parte del pánico en las últimas etapas es la deuda estructurada más una obstinada
archivo de clase, no una brecha en la ciencia. Pague esa deuda anticipadamente.