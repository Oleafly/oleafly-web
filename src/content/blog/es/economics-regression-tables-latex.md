---

title: "Economía y ciencias sociales: tablas de regresión que aceptan las revistas"
description: "fichas de libros, tabla de tres partes, estrellas siunitx, notas bajo estimaciones, hábitos biblatex y versiones de documentos de trabajo para economía, ciencia política y sociología."
date: 2026-06-26
tags: [economics, social-science, tables]
---

La ciencia social empírica vive y muere según las tablas. Un decimal desalineado o un
La estrella de significado faltante puede quemar un ciclo de revisión y reenvío que no tenía nada.
que ver con su estrategia de identificación. Las revistas se preocupan casi por la legibilidad
tanto como coeficientes.

Lo que sigue es para estudiantes y RA que exportan desde Stata o R y luego limpian
Látex a mano.

## booktabs no es opcional

Las reglas verticales y las líneas horizontales dobles parecen Word de los años 90. Usa los tres
reglas horizontales de `booktabs`:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Consulte [tablas de tres reglas](/learn/booktabs-beautiful/). Exportar desde R
(`modelsummary`, herramientas estilo `estout`, `stargazer` anterior) o Stata a LaTeX
fragmentos, luego limpie la fila del encabezado usted mismo. Los encabezados generados automáticamente son
normalmente demasiado ancho o demasiado críptico para el PDF final.

## Notas debajo de la tabla, no notas al pie al azar

`tresparttable` mantiene el título, la tabla y las notas con el mismo ancho:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Coloque el tamaño de la muestra, los efectos fijos, las notas SE agrupadas y la estrella de importancia
leyenda aquí. No cuelgues una nota a pie de página en una sola celda que sólo algunos lectores
lo notarás. Las etiquetas de los paneles (A/B) deben estar en el título o en las reglas intermedias con etiquetas claras.
texto, no en una leyenda con forma de figura que nunca aparece en el PDF.

## Columnas numéricas y estrellas de significado.

Los tipos de columnas `siunitx` (`S`) se alinean en el punto decimal. Sólo eso hace un
La tabla de resultados parece intencionada. Las estrellas rompen columnas numéricas puras, por lo que
Por lo general, necesita un formato personalizado o una columna de texto. Patrones comunes:

Informe los coeficientes y los SE en filas separadas (estándar en economía) o ajuste las estrellas
por lo que la alineación todavía funciona (`0.012^{***}` con un tipo de columna dedicado).

Sea coherente en todas las tablas: los mismos umbrales de estrellas, el mismo estilo SE, el mismo número
de decimales para la misma métrica. Los revisores comparan la Tabla 2 con la Tabla 3 en
propósito.

Un primer borrador visual está bien. el navegador
[generador de tablas](/tools/table-generator/) puede esbozar la estructura; la final
La tabla aún debe pasar por `booktabs` y sus notas SE.

## Del software de regresión al software listo para cámara

El bucle típico se ve así. Congele el guión de estimación y la semilla. Exportar un
Fragmento LaTeX o CSV de estimaciones. Colóquelo en una mesa con establo.
etiquetas (`tab:principal`, `tab:robusto`). Escriba el título para que un skimmer sepa
variable dependiente, muestra y estimador sin leer las notas dos veces.
Compile y luego arregle las cajas llenas cortando columnas; rotar solo como último
recurso.

Si una tabla es más larga que una página, cambie a "longtable" (o paneles divididos)
antes de la semana límite, no después de que la revista se queje de las fuentes de 7 puntos.

## Citas: autor-año es el dialecto

La mayoría de los foros de economía y ciencia política esperan el año del autor. `biblatex` con
`style=authoryear` (o el estilo de la revista) es más fácil a largo plazo que pelear
Archivos `.bst`. Si el laboratorio todavía usa "natbib", está bien; simplemente no mezcles
ambas pilas en un preámbulo. Descripción general:
[BibTeX o biblatex](/learn/bibtex-vs-biblatex/).

Las claves deben ser estables (`autor:año:palabra clave`). Reexportación desde Zotero bajo
nuevas claves a mitad del proyecto es cómo `\cite` rompe la semana de envío. Validar
el `.bib` para los años y revistas que faltan:
[Validador BibTeX](/tools/bibtex-validator/).

## Papeles de trabajo y SSRN

Las versiones de los documentos de trabajo cambian mensualmente. Mantenga la fecha de la página de título en una macro:

```latex
\newcommand{\paperdate}{June 2026}
```

Bórralo cuando vuelvas a exportar el PDF. La historia local de Git es más honesta que
`final_final_v7.pdf` en una unidad compartida. Comprometerse cuando la mesa principal esté lista.
compila; etiquete o envíe un mensaje explícito a la versión enviada.

Un editor de investigación que trata el proyecto como un repositorio Git real (puntos de control
después de compilar, restaurar, GitHub privado opcional) coincide con el trabajo empírico
ya versiones del código. El documento y los guiones de estimación no deberían vivir.
bajo diferentes hábitos de respaldo.

## Identificación y ética en la mesa (versión corta)

LaTeX no puede arreglar un diseño débil, pero puede hacer legible uno fuerte.
Indique el estimador y la muestra en el título. No ocultes el hecho de que
la columna (3) deja caer la mitad de la muestra en una nota a pie de página que nadie lee. si lo muestras
tablas de robustez, mantenga el mismo orden de variables dependientes que la tabla principal para
los lectores pueden escanear.

## Lista de verificación previa al envío

Cosas que molestan a la gente tarde:

- Mesas de tres reglas; sin reglas verticales.
- Alineación decimal; estrellas consistentes y notas SE.
- El título indica resultado, muestra, estimador.
- Etiquetas estables; el texto cita `\ref{tab:...}`.
- El estilo de la bibliografía coincide con el lugar; `.bib` validado.
- La fecha del documento de trabajo y el compromiso de Git coinciden con lo que subiste.

## Paquetes de replicación

Más revistas quieren código y datos. Mantenga los scripts de exportación de tablas junto al papel.
repositorio (o vinculado con un hash de confirmación). Cuando un coeficiente cambia porque el
Se cambió el script de limpieza, regenere el fragmento de LaTeX y vuelva a confirmar ambos. un
La tabla que no se puede reproducir es una responsabilidad incluso si parece limpia.

## Beamer para seminarios

Reutilice los mismos fragmentos de "booktabs" en las diapositivas cuando pueda, o exporte PDF
cultivos de las mesas. Reconstruir números a mano en una plataforma de diapositivas es cómo
Las diapositivas del seminario no concuerdan con el artículo.

Haga las tablas correctas y la estrategia de identificación tendrá una audiencia justa. Obtener
están mal y te pasas una ronda discutiendo sobre el formato.