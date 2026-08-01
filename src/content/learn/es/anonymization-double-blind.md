---

title: "Doble ciego bien hecho"
description: "Qué anonimizar, cómo citarte a ti mismo y los metadatos que te delatan."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Doble ciego bien hecho

La revisión doble ciego significa que los revisores no saben quién escribió el artículo. Hacerlo mal es uno de los pocos errores de formato que pueden hacer que un artículo sea rechazado sin ser leído, así que trate el anonimato como una lista de verificación, no como una vibra.

## ¿Qué debe irse?

| Artículo | Qué hacer |
|---|---|
| Nombres de autores y afiliaciones | Eliminar o reemplazar con "Autor(es) anónimo(s)" |
| Agradecimientos | Eliminar para envío (los financiadores y colegas lo identifican) |
| Enlaces de repositorios y proyectos | Reemplazar con un enlace anónimo, ver más abajo |
| Detalles específicos de la institución | "el grupo de nuestra universidad" supera al "grupo de GPU de Stanford" |
| Frase "Nuestro trabajo anterior" | Reescribir en tercera persona, ver más abajo |
| Logotipos, marcas de agua, encabezados | Quite cualquier cosa que tenga un nombre de grupo o laboratorio |

Muchas clases automatizan la primera fila. Con la clase de ACM es una opción:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Otros lugares envían una variante de envío de su plantilla. Los lugares [IEEEtran](/learn/ieee-format-in-practice/) a menudo simplemente le dicen que omita el bloque de autor.

## Citando tu propio trabajo

La regla es simple: cítate a ti mismo exactamente como citarías a un extraño.

Incorrecto: "En nuestro trabajo anterior [7], mostramos..."
Derecha: "Lovelace et al. [7] mostraron..."

No omita sus propios documentos relevantes. Los revisores esperan que se cite el trabajo relacionado obvio, y una brecha sospechosa puede anonimizarlo tan efectivamente como un nombre. La única excepción es el trabajo genuinamente inédito, que puedes subir como material complementario anónimo.

## Artefactos anónimos

Los revisores esperan cada vez más código y datos. Los enlaces de GitHub son radiactivos: el nombre de usuario está ahí. Opciones que funcionan:

- Servicios creados para esto (anonymous.4open.science es el estándar de campo)
- Un repositorio nuevo en una cuenta desechable con un historial de confirmaciones eliminado
- Zip complementario cargado con el envío, con los nombres de los autores eliminados de los encabezados de archivos y cuadernos

Verifique el zip antes de cargar: archivos de licencia, `AUTHORS`, metadatos del cuaderno y rutas de directorio de inicio codificadas (`/home/ada/...`), todos los nombres de fugas.

## Los accidentes que te traicionan

El texto en papel es anónimo, pero el PDF puede no serlo:

- **Metadatos PDF.** El campo Autor a menudo se completa automáticamente desde su sistema. Verifique con `pdfinfo` o las propiedades del documento de su visor y bórrelo mediante `\hypersetup{pdfauthor={}}`.
- **Nombres de archivos.** `lovelace-sigconf-final.pdf` deshace todo. Nómbrelo "paper.pdf" o el número de envío.
- **Fuentes de las figuras.** Los gráficos exportados desde herramientas pueden incrustar nombres de usuarios en metadatos o en una ruta visible en una captura de pantalla.
- **Preimpresiones.** Publicar en arXiv antes de enviarlo está permitido en muchos lugares y prohibido en otros. La PPC dice cuál. Léelo. Esto es [parte de la elección del lugar](/aprende/elige-tu-lugar/).

## Cámara lista para darle la vuelta

Después de la aceptación, todo vuelve: nombres, afiliaciones, agradecimientos, el enlace real del repositorio y la redacción en primera persona, si lo desea. Presupuesta una hora para el pase de anonimización. Toca más lugares de los que recuerdas, y la [lista de verificación lista para la cámara](/learn/first-paper-roadmap/) es el momento de atrapar a los rezagados.