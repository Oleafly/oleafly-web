---

title: "TeX, LaTeX y 45 años de hermosos documentos"
description: "Aún se sigue investigando cómo un científico informático enojado construyó en 1978 el sistema de composición tipográfica."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX y 45 años de hermosos documentos

Cada herramienta que utilizará para escribir artículos proviene de la frustración de un hombre con las feas pruebas de galerada. La historia es breve y explica mucho sobre por qué la redacción de investigaciones funciona como lo hace.

## 1978: Knuth se molesta

Donald Knuth, un científico informático de Stanford, estaba escribiendo su serie de libros épicos *El arte de la programación informática*. Cuando el editor pasó de la tipografía tradicional en metal a los primeros sistemas digitales, las nuevas pruebas parecían terribles, especialmente las matemáticas. La respuesta de Knuth fue gloriosamente desproporcionada: detuvo los libros y pasó años construyendo su propio sistema de composición tipográfica, **TeX** (se pronuncia "tech", la X es un chi griego), y lo lanzó en 1978.

TeX era un programa que tomaba texto plano con comandos de marcado y producía páginas tipográficamente excelentes: espaciado matemático perfecto, elegante salto de línea de párrafo, todo funciona. Knuth finalmente congeló su núcleo y ofrece un cheque de recompensa por cada error encontrado. Se han reclamado muy pocos.

## 1984: Lamport lo hace utilizable

Raw TeX es potente pero de bajo nivel, como el lenguaje ensamblador para páginas. En 1984, Leslie Lamport (más tarde ganadora del Premio Turing por sistemas distribuidos) lanzó **LaTeX**, una capa amigable en la parte superior: en lugar de colocar las cosas manualmente, escribe `\section{Introducción}` y `\cite{knuth78}` y deja que el sistema maneje la numeración, las referencias y el diseño. LaTeX es lo que casi todo el mundo quiere decir hoy cuando dicen que "escriben en TeX". Su [primer documento](/learn/first-document/) es un documento LaTeX.

## Por qué sobrevivió cuatro décadas

Los procesadores de texto iban y venían; LaTeX permaneció, por excelentes y aburridas razones:

- **Matemáticas.** Aún así, nada escribe ecuaciones tan bien. Consulte [modo matemático](/learn/math-mode/).
- **Texto sin formato.** Hoy se abre un archivo .tex de 1985 que funciona perfectamente con el control de versiones.
- **Automatización.** La numeración, las referencias cruzadas y las bibliografías solo funcionan en 300 páginas.
- **Plantillas.** Los editores codifican su estilo interno exacto como un archivo de clase, por lo que cada envío resulta idéntico. Es por eso que [ACM, IEEE y amigos](/learn/acm-ieee-and-friends/) le entregan plantillas .tex, y por qué las revistas todavía quieren fuentes .tex que puedan compilar en su propio diseño.

## La familia de motores, en un suspiro

El motor TeX original generó sucesores modernos: **pdfTeX** agregó salida PDF directa, **XeTeX** agregó fuentes Unicode y del sistema, y ​​**LuaTeX** agregó un lenguaje de secuencias de comandos dentro del motor. En su mayoría, simplemente elige lo que espera su plantilla. Las diferencias prácticas están en [qué motor para este proyecto](/learn/engines-compared/).

## 2023: ingrese Typst

**Typst** es el primer desafío moderno serio: un nuevo lenguaje de composición tipográfica creado desde cero con una sintaxis más limpia, compilación instantánea y mensajes de error más amigables. Es realmente agradable y crece rápidamente. Sus límites son la otra cara de las fortalezas de LaTeX: cuarenta años de paquetes y, sobre todo, la aceptación de los editores. Los lugares quieren .tex hoy en día, por lo que LaTeX sigue siendo el lenguaje de envío, mientras que Typst es excelente para notas, informes y cualquier cosa cuya salida controle. Oleafly compila LaTeX, Typst y Markdown uno al lado del otro, para que puedas usarlos donde destaque sin cambiar de aplicación.

## La comida para llevar

TeX es el motor, LaTeX el lenguaje en el que todos escriben, Typst el joven rival y los diarios la razón por la que la vieja guardia persiste. Dónde encajan estos entre Al dorso, los editores y los administradores de referencias es el tema de [la caja de herramientas de redacción de investigaciones, antes y ahora](/learn/research-tools-landscape/).