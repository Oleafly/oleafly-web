---

title: "Notas a pie de página, referencias y apéndices: quién hace qué"
description: "Adónde pertenecen los apartes, las pruebas y el material sobrante, y quién los lee realmente."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Notas a pie de página, referencias y apéndices: quién hace qué

Un periódico tiene tres lugares para colocar el material que no pertenece al flujo principal, y cada uno tiene un trabajo distinto. Coloque el contenido correcto en el lugar correcto y los lectores se mantendrán orientados. Mézclalos y tu periódico se leerá como un cajón de basura.

## Notas a pie de página: lo educado a un lado

Una nota a pie de página es para algo que vale la pena decir pero que no vale la pena interrumpir la oración: una URL, una aclaración, una advertencia, un "agradecemos a un revisor por esta observación".

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Úsalos con moderación. Un artículo con una nota a pie de página por párrafo es un artículo que discute consigo mismo. Si el contenido es esencial, promociónelo al texto. Si se trata de un trabajo anterior citable, pertenece a las referencias. Y algunos lugares prohíben las notas a pie de página de las URL en favor de las citas adecuadas, así que consulte la plantilla.

## Referencias: el rastro de la evidencia

Cuando cita un trabajo, está señalando la evidencia detrás de una afirmación: este hecho se estableció allí, este método fue introducido por ellos, este conjunto de datos proviene de aquí. La lista de referencias es el mapa completo de quién está construyendo, y los revisores la revisan cuidadosamente, tanto para detectar entradas faltantes como para afirmaciones ancladas a citas que en realidad no las respaldan.

En LaTeX la mecánica es automática: `\cite{key}` en el texto, una entrada en su archivo `.bib` y la lista se muestra sola.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

El flujo de trabajo completo se encuentra en [agregar citas](/learn/add-citations/) y [crear una bibliografía](/learn/create-bibliography/). Oleafly puede completar una entrada `.bib` a partir de una búsqueda de DOI, lo que supera a las listas de autores escritas a mano.

## Apéndice: la sala de desbordamiento

El apéndice contiene material que respalda el artículo pero que interrumpiría su flujo: pruebas completas, tablas de resultados adicionales, cuadrículas de hiperparámetros, plantillas de indicaciones, documentación de conjuntos de datos. La regla es que el documento principal debe ser independiente. Un lector que nunca abra el apéndice debería quedar convencido; un lector que lo abra debería encontrar todos los detalles que se le prometieron.

```latex
\appendix
\section{Full proofs}
```

Después de `\appendix`, las secciones se denominan A, B, C automáticamente.

## Material complementario: fuera del PDF

El material complementario es todo lo que no puede vivir en un PDF en absoluto: código, datos, vídeos, demostraciones interactivas. Muchos lugares lo recopilan como una carga separada con sus propios límites de tamaño. Trátelo como parte de su historia de reproducibilidad y haga referencia explícita a él desde la sección de método para que los lectores sepan que existe.

## ¿Quién lee realmente qué?

| Parte | Comportamiento del revisor |
|---|---|
| Notas a pie de página | Leer de pasada, olvidar rápidamente |
| Referencias | Escaneado en busca de trabajos faltantes, especialmente el suyo propio |
| Apéndice | Se abre cuando es necesario verificar un reclamo en el periódico |
| Suplementario | Abierto por el único revisor que ejecuta su código |

Lo que eso significa en la práctica: nunca ocultar nada esencial en una nota a pie de página o en un apéndice. Los revisores juzgan el texto principal, y "la respuesta estaba en el Apéndice F" nunca ha suavizado una revisión. Coloque su mejor material donde lo encuentre el desnatado y deje que el material posterior haga lo que mejor sabe hacer: guardar los recibos en silencio.