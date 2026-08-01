---

title: "Tu primer informe de laboratorio en LaTeX como estudiante"
description: "De cero a un informe de compilación: plantilla, ecuaciones, figuras, referencias y una ruta de compilación que no requiere administrar TeX Live manualmente."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

No es necesario dominar LaTeX para finalizar un informe de laboratorio. Necesitas una plantilla, una
pocos comandos y un botón de compilación que funciona desde el primer día. Todo lo demás puede
espere hasta que un curso posterior solicite un documento de clase de tesis.

Este es un camino corto que prioriza un PDF limpio sobre una composición tipográfica perfecta.

## Omita la instalación de varios gigabytes si puede

Un editor de investigación de escritorio con un motor incluido (por ejemplo
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) te lleva a un PDF
sin administrar TeX Live. Obtienes plantillas, tarjetas de error en la línea que
roto, PDF al lado de la fuente con clic para saltar e historial de archivos sin
curso de Git separado. Si su instructor requiere una distribución específica o
Al dorso, siga las notas del curso. De lo contrario, optimice para comenzar.

Los editores en la nube también están bien cuando el curso ya los utiliza. El objetivo es un PDF.
a tiempo, no una identidad de cadena de herramientas.

## Roba un esqueleto y luego elimina la mitad.

Comience desde una plantilla de "artículo" simple:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Más detalles: [compila tu primer PDF](/learn/first-document/) y el
[referencia rápida](/aprender/cheatsheet/).

Elimina las secciones que tu rúbrica no solicita. No copiar una tesis de 40 paquetes
preámbulo "por si acaso". Los paquetes adicionales son la forma en que los principiantes obtienen errores que no pueden
leer.

## Ecuaciones para el laboratorio, no para un libro de texto

En línea: `$F = ma$`. Mostrar:

```latex
\[
  v = v_0 + at
\]
```

Numere solo lo que cite más adelante con `\eqref`. Si la AT pidió incertidumbre,
póngalo en una oración o en una tabla pequeña, no en un "alinear" de diez líneas que no
entender todavía. Fracciones: `\frac{a}{b}`. Raíces cuadradas: `\sqrt{x}`.

Cuando el registro de compilación diga algo aterrador, corrija solo el primer error y luego
recompilar. Los errores posteriores suelen ser ruido del primero.

## Una figura, bien hecha

Exporte un trazado como PDF o PNG desde su herramienta de análisis. Inclúyalo con:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

En el texto: `La figura~\ref{fig:vr} muestra...`. Leyenda debajo de la figura. Etiqueta
después del título. Si la figura flota en la página equivocada, reduzca ligeramente el ancho.
antes de luchar contra las opciones de ubicación durante una hora:
[colocación del flotador](/learn/figure-wrong-position/).

## Mesas sin sufrimiento

Para algunas filas, un simple "tabular" es suficiente. Pon un título arriba con "tabla"
+ `\título`. Alinee los números para que el asistente técnico pueda escanearlos. no necesitas
`booktabs` de grado de publicación en el laboratorio 1, pero evite la sopa de líneas verticales si puede.

## Referencias sin flujo de trabajo de bibliografía de doctorado

Para tres citas, una lista manual funciona:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Para obtener más información, exporte un `.bib` de Google Scholar o Zotero y limpie las claves para
son breves y legibles. Las citas rotas se imprimen como `[?]`:
[borrar las citas misteriosas](/learn/citation-question-mark/).

Cite el manual de laboratorio y el libro de texto de la forma en que lo solicita el curso (IEEE, APA-ish o
una simple lista numerada). Hacer coincidir la rúbrica es mejor que hacer coincidir un diario.

## Errores comunes de principiantes

- Olvidar `\usepackage{graphicx}` antes de `\includegraphics`
- Caracteres especiales como `%` y `_` en texto sin escape
- Delimitadores matemáticos `$` no coincidentes
- Nombres de archivos con espacios (`my plot.pdf`) que incluyen el salto
- Editar una carpeta diferente a la que compilas

Reduzca la velocidad, arregle la primera línea de registro, vuelva a compilar.

## Entrega el PDF, conserva la fuente

Envíe lo que solicita el LMS (normalmente PDF). Mantenga el `.tex` y las cifras en un
carpeta que todavía tienes después de que termine el curso. En el futuro reutilizarás el esqueleto.
para el próximo informe. Si su editor mantiene el historial de Git automáticamente, incluso
Mejor: puedes recuperar una versión anterior a que eliminaras la ecuación correcta.

## Una primera sesión de 90 minutos

Si empiezas esta noche:

1. Abra una plantilla o pegue el esqueleto de arriba.
2. Complete el título, nombre y encabezados de sección de la rúbrica.
3. Agrega una ecuación que ya sabes que es correcta.
4. Exportar una parcela; incluirlo; subtítulolo; citarlo en Resultados.
5. Agregue dos referencias como lo pide el curso.
6. Compile hasta que el PDF parezca un informe, no un artículo en blanco.

Deténgase cuando la rúbrica esté cubierta. No pases la noche en opciones de paquetes.

## Cuando algo se rompe

Lea solo el primer error. Correcciones comunes: falta `$`, falta paquete para
gráficos, nombre de archivo incorrecto, `}` adicional. Guarde una copia de una versión compilada antes
Grandes ediciones para que puedas regresar. Si el preámbulo de un compañero funciona para el curso,
tomen prestado los paquetes mínimos que utilizaron, no toda la pila de tesis.

## Cómo se ve el éxito

El PDF se abre, los márgenes parecen razonables, las figuras tienen leyendas, las ecuaciones son
legible y los elementos de la rúbrica tienen encabezados claros. Eso es suficiente para una primera
Informe de laboratorio de LaTeX. La perfección tipográfica puede esperar a que un documento realmente lo necesite.
eso.