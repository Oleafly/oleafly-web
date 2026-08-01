---

title: "Humanidades y formato largo: biblatex, notas a pie de página y libros de capítulos."
description: "Notas a pie de página, citas flexibles, fuentes de archivo, estructura de varios capítulos y propiedad de varios años para historia, literatura, filosofía y clásicos."
date: 2026-07-05
tags: [humanities, biblatex, thesis]
---

Los manuscritos de humanidades se preocupan tanto por la forma de las citas como por los argumentos. un numero
El estilo IEEE está mal aquí; Las notas a pie de página, el título del autor y las fuentes de archivo son las
norma. Vale la pena aprender LaTeX una vez que tengas más que un trabajo de seminario y una
puñado de libros en la bibliografía.

Esta guía es para estudiantes que apilan capítulos de tesis o redactan un artículo extenso.
con notas a pie de página reales. Si solo necesita tres entradas de MLA, puede detenerse antes de tiempo.

## Prefiera biblatex por su flexibilidad

`biblatex` maneja notas a pie de página, estilos detallados y taquigrafía mejor que el clásico
BibTeX para la mayoría de los flujos de trabajo de humanidades:

```latex
\usepackage[backend=biber,style=verbose-ibid]{biblatex}
\addbibresource{sources.bib}
```

Las alternativas comunes incluyen "título de autor", "detallado", estilos específicos de revista,
o lo que su departamento exija. Primero haga coincidir el manual, luego elija el
estilo biblatex más cercano. Antecedentes:
[BibTeX o biblatex](/learn/bibtex-vs-biblatex/).

Ejecute **biber** (o el backend que su estilo necesita), no solo pdflatex. vacio
las bibliografías son casi siempre un error de backend o de ruta. Validar entradas
antes del envío: [validador BibTeX](/tools/bibtex-validator/).

## Fuentes de archivo y web

Las cartas, manuscritos y sitios web necesitan campos que registren las entradas "@artículo".
no me importa:

- `@unpublished` o biblatex `@online` para fuentes web con `urldate`
- ubicación de archivo, colección, folio de manuscritos
- claves estables que aún entenderás en dos años

Las entradas incompletas fracasan silenciosamente hasta que la bibliografía parece escasa. Prefiero uno
`.bib` (o un pequeño conjunto por proyecto) sobre texto de nota al pie de copia y pegado que se desplaza
no está sincronizado con las obras citadas.

## Notas al pie frente a notas al final

Muchos estilos de humanidades quieren notas a pie de página. estilos detallados `biblatex` y
`\footcite` / citas automáticas de notas al pie cubren mucho terreno. si el
El departamento quiere notas finales, configúrelo con anticipación. Convirtiendo tres capítulos de
citas de notas a pie de página la semana de presentación es miserable.

Mantenga breves los apartes sustantivos. Si una nota a pie de página es un párrafo completo, pregunte si
pertenece al texto principal. Los lectores hojean.

## Capítulos y ediciones críticas

Los proyectos de tamaño de libro quieren "libro", "memorias" o una clase de tesis universitaria con
`\include` por capítulo:

```latex
\include{chapters/ch1-intro}
\include{chapters/ch2-archive}
```

Las referencias cruzadas a otros capítulos deben usar `\ref` / `\cref`, no codificadas
"consulte el Capítulo 4" cuerdas que se pudren cuando realiza un nuevo pedido. Vistas de estructura que enumeran
Los títulos de los archivos ayudan en un borrador de 200 páginas. También lo hace compilar con
`\includeonly` mientras revisas un capítulo.

Las ediciones críticas y los textos paralelos cuentan con paquetes especializados. No inventes un
diseño con minipáginas sin formato hasta que haya comprobado si una clase mantenida
ya existe para su idioma.

## Cita e idioma

Utilice comillas adecuadas para el idioma del artículo (`csquotes` ayuda con
comillas anidadas y marcas que tienen en cuenta el idioma). Bloquear citas de más de unas pocas líneas
debe utilizar un entorno de cotización, no una sangría manual que se interrumpa
diseños de dos columnas o cuando cambian los márgenes.

Para proyectos en varios idiomas, XeLaTeX o LuaLaTeX con `fontspec` y un idioma
El paquete es menos doloroso que acumular trucos de "inputenc" de los años 90. Elija fuentes que
Cubra los guiones que necesita antes de escribir el capítulo tres en una fuente que no pueda
rendirlos.

## Imágenes, mapas y notas de uso legítimo

Los mapas y las fotografías manuscritas suelen incluir archivos PDF/PNG externos, no TikZ.
Título con fuente y estado de permiso. Mantenga los masters de alta resolución en el exterior
el historial de git si son enormes; cometer las figuras comprimidas el papel
realmente usa, y ponga una nota en el README sobre dónde viven los maestros.

## Propiedad local de años de notas

Una disertación es un árbol de archivos de varios años. Manteniéndolo solo en un proyecto de navegador
vinculado a una cuenta es un riesgo cuando los estudiantes cambian de institución o pierden el acceso
después de la graduación.

Las carpetas simples más Git, compiladas localmente, envejecen mejor.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) tiene como objetivo eso
una especie de documento largo. Obtiene vistas de estructura en todos los capítulos, en todo el proyecto.
referencias y citas, ortografía y gramática fuera de línea en prosa (se salta las claves de cita), y
puntos de control reales de Git sin una cuenta. Todavía puedes abrir los mismos archivos en
cualquier otro editor. La propiedad es el punto.

## Flujo de trabajo que sobrevive a un comité

Congele el estilo de cita en comparación con el manual en el primer año y conserve uno
Base de datos bibliográfica con claves estables. Poner archivos de capítulos bajo control de versiones
con un control remoto privado. El material preliminar (resumen, agradecimientos, TOC) debe
Siga las reglas de la clase universitaria para páginas romanas/árabes. Compile el PDF completo
mensualmente incluso si redacta con `\includeonly`, por lo que las referencias entre capítulos no
sorprenderte al final.

## Envío previo

- Biber/bibtex funciona limpio; no hay citas `[?]`.
- El estilo de la nota al pie coincide con el departamento.
- Referencias cruzadas de capítulos actualizadas después de reordenar.
- Incrustar fuentes; Los márgenes coinciden con la lista de verificación de la oficina de tesis.
- Fuente y PDF archivados, no solo el recibo del portal de carga.

## Indexación y material posterior

Los proyectos de clases de libros a veces necesitan un índice (`imakeidx` y amigos). Presupuesto
es hora de una verdadera pasada de indexación; marcar automáticamente cada palabra en mayúscula produce
basura. Los apéndices para las transcripciones deben utilizar una numeración clara que permita a los principales
los capítulos pueden `\ref`.

## Borradores del comité vs depósito PDF

Los borradores de líneas numeradas o los márgenes amplios pueden ayudar a marcar, pero el PDF de depósito debe
coincide con el espécimen de la oficina de tesis. Mantenga una opción de clase o una bandera de "borrador" separada
por lo que no tendrá que editar manualmente los márgenes la mañana del depósito.

Obtenga el motor de citas desde el principio. El argumento merece más atención.
que una pelea bibliográfica la semana pasada.