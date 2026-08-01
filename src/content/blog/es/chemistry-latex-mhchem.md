---

title: "Artículos de química en LaTeX: fórmulas, esquemas y unidades SI"
description: "Reacciones con mhchem, estructuras, tablas experimentales, unidades SI, bibliografías y borradores privados para estudiantes de química e ingeniería química."
date: 2026-06-22
tags: [chemistry, research]
---

Los químicos suelen aparecer en LaTeX por una de dos razones: la revista insiste,
o un colaborador ya trabaja de esa manera. De cualquier manera, los puntos débiles se ven
familiar: esquemas de reacción, etiquetas de isótopos, tablas de condiciones y un
Bibliografía repleta de revistas y patentes.

Esta guía cubre los informes de pregrado hasta los primeros envíos a revistas. lo hará
No reemplaza ChemDraw por productos naturales complejos. Conservará el manuscrito.
y la sección experimental de luchar contra el compilador.

## Reacciones con mhchem

`mhchem` es la respuesta habitual para fórmulas y reacciones:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Fije la versión 4 para que la sintaxis no se desvíe entre los coautores o entre los al dorso
y una instalación local de TeX. Tutorial más largo:
[fórmulas químicas](/aprender/notación-química/).

Los esquemas de varios pasos con reactivos encima y debajo de la flecha necesitan más de
en línea `\ce`. mhchem maneja las fórmulas; el diseño a menudo quiere un esquema de diario
entorno o una figura externa. No abarrotes una síntesis total de veinte pasos
en una serie de líneas químicas en línea.

## Estructuras: chemfig o dibujos externos.

`chemfig` dibuja estructuras simples en TeX puro y guarda todo
vector-local. Los productos naturales complejos casi siempre son mejores como ChemDraw,
Marvin, o similar, exportado a PDF, luego `\includegraphics`. Prefiero PDF vectorial
sobre una captura de pantalla PNG para que las líneas de unión se mantengan nítidas en impresión y en dos columnas
diseño.

Nombra los archivos por ID compuesto (`cmpd-12.pdf`). Mantenga la fuente editable de ChemDraw
en el archivo del laboratorio incluso si git solo contiene el PDF que va en el documento.

## Secciones experimentales y tablas largas.

Las tablas de condiciones (temperatura, disolvente, rendimiento, carga de catalizador) funcionan bien
con `booktabs` y frecuentemente `siunitx` para columnas numéricas:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Si una tabla es más larga que una página, cambie a "longtable" antes de la fecha límite
semana, no después de que la revista se quejara de las fuentes de 7 puntos. El título debería decir
qué significa "rendimiento" (aislado, RMN, GC) para que los lectores no adivinen.

## Unidades y fragmentos de espectroscopia

Elija un estilo de unidad y manténgalo: `siunitx`, o manual `\mathrm` si el grupo
Ya estamos de acuerdo en eso. Los fragmentos de RMN y HRMS en las secciones experimentales son
a menudo texto sin formato con espacios cuidadosos. No inventes un frágil lenguaje macro
a mitad del artículo a menos que el laboratorio ya comparta uno.

Reporte cifras significativas como lo hace el cuaderno. LaTeX se imprimirá felizmente
precisión falsa si lo escribes.

## Esquemas vs cifras

Muchas revistas de química distinguen esquemas (reacciones) de figuras (tramas,
ORTEP, espectros). Utilice los entornos que envía la clase Journal (`scheme`,
`figure`) para que la numeración coincida con la producción. Referencia cruzada con `\ref` y estable
etiquetas (`sch:reducción`, `fig:ortep-1`).

## Seguridad del borrador

Rutas inéditas y socios industriales convierten a los editores exclusivos de la nube en un
una cuestión de política, no sólo una cuestión de conveniencia. Manteniendo `.tex` y cifras
como archivos normales en el disco con Git es aburrido de una manera útil.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) es local
editor de investigación: compiladores incluidos, verificaciones de referencias y citas de todo el proyecto, fuera de línea
ortografía y gramática solo en prosa (por lo que `\ce` y las claves de cita no se marcan como
"errores tipográficos"), puntos de control reales de Git, IA opcional que solo edita mediante aprobación
diferencias. Sin cuenta. El borrador no necesita un editor externo para existir.
La red es para paquetes, búsqueda de citas o IA si los activa.

## Citar la literatura primaria correcta

Las bibliografías de química se apoyan mucho en revistas y patentes. Exportar desde Zotero
o EndNote en un `.bib` con claves estables, luego valide los campos faltantes antes
envío: [validador BibTeX](/tools/bibtex-validator/). Bibliografías vacías
son casi siempre un error de ruta o de backend, no faltan citas.

Los estilos de revistas difieren (ACS, RSC, Springer). Utilice el estilo de bibliografía
La plantilla se envía con. No pegue el número y el año del autor en uno
preámbulo.

## Colaboración

Secciones propias por persona cuando puedas. Una persona es propietaria del `.bib`. De acuerdo en
Versión mhchem y formato de exportación de estructura por adelantado. Cuando varios experimentos
Las secciones crecen en paralelo, compila el PDF completo cada semana para que la integración
Las sorpresas aparecen temprano.

## Lista de verificación previa al envío

Vale la pena un pase final:

- versión mhchem fijada; Las fórmulas se compilan sin advertencias.
  ignorando.
- Las estructuras son vectoriales siempre que sea posible; Los ID compuestos coinciden en texto, esquemas,
  y SI.
- Las tablas utilizan un estilo de tres reglas; unidades consistentes; rendimientos definidos en el título
  o notas.
- La numeración de esquemas/figuras coincide con la clase de revista.
- `.bib` validado; el estilo coincide con la plantilla.
- Las rutas sensibles permanecen en una carpeta local con control de acceso que coincide con el laboratorio
  política.

## Listas de verificación de SI y diarios

Muchas revistas de química publican listas de verificación de autores (resolución de gráficos, TOC
tamaño gráfico, caracterización compuesta). Hojee ese PDF antes de dibujar
esquemas. Una relación de aspecto gráfico TOC incorrecta es una razón tonta para un administrador
rechazo.

## Información de respaldo

El SI a menudo tiene su propia plantilla o reglas de encabezado. Mantenga las fuentes SI en el mismo
repositorio como documento principal con nombres de archivos claros. Cuando la revista requiere completa
caracterización, verifique que cada número compuesto en el texto principal realmente
aparece en el SI.

El formateo químico es complicado porque los objetos son densos. Obtenga las reacciones
y tablas a la derecha y la sección experimental se lee como un trabajo cuidadoso, no como un
pegar desde un cuaderno PDF.