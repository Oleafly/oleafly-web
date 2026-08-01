---

title: "Formatos Springer, Elsevier y LNCS"
description: "llncs, revistas Springer Nature y elsarticle: clases de una sola columna y fuente lista para cámara."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Formatos Springer, Elsevier y LNCS

Fuera de los ecosistemas IEEE y ACM, dominan dos editores: Springer (incluido Springer Nature) y Elsevier. Sus clases parecen más sencillas que los estilos de conferencia de dos columnas, y eso es por diseño. El editor escribe la versión final.

## LNCS: el caballo de batalla de los procedimientos

Si su conferencia se publica en Lecture Notes in Computer Science (o sus hermanos LNAI y LNBI), escriba en `llncs`:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

Los artículos de LNCS son de una sola columna, usan superíndices `\inst{}` para asignar autores a institutos y tienen un presupuesto de páginas predeterminado muy ajustado (a menudo de 12 a 16 páginas, incluidas las referencias). La clase no está en todas las distribuciones de TeX de forma predeterminada. Descargue el kit de autor de la página LNCS de Springer. Su estilo de bibliografía es `splncs04`:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Revistas Springer Nature

Las revistas Springer históricamente usaban `svjour3` y han estado migrando a la clase más nueva `sn-jnl` con opciones de estilo por familia de revistas (`sn-mathphys-num`, `sn-basic` y otras). La página "Pautas de envío" de la revista nombra la clase y opción exactas. No lo adivines: dos revistas Springer pueden querer clases diferentes.

## Elsevier: el artículo

Las revistas de Elsevier comparten una clase, "elsarticle":

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

La opción "preimpresión" ofrece una sola columna espaciosa a doble espacio para revisión, y "final" con "1p", "3p" o "5p" imita el diseño de impresión de la revista. Los estilos de bibliografía son `elsarticle-num` (numerado) o `elsarticle-harv` (autor-año), que coinciden con los que utiliza la revista.

## Comparación rápida

| Editor | Clase | Columnas | Estilo babero |
|---|---|---|---|
| Springer LNCS | `llncs` | uno | `splncs04` |
| Revistas Springer Nature | `sn-jnl` (antes `svjour3`) | uno | opción por revista |
| Elsevier | `elsartículo` | uno (revisión) | `elsartículo-num` / `-harv` |

## ¿Por qué una sola columna? Porque tu no eres el tipógrafo

Estas clases muestran su *manuscrito*, no la página final. El equipo de producción de la editorial vuelve a componer los artículos aceptados en el diseño interno de la revista. Es también por eso que "carga de fuente lista para la cámara" aquí significa algo específico: usted carga sus archivos `.tex`, `.bib` y figure, no solo un PDF, para que la producción pueda reconstruir y cambiar el estilo del documento. Consecuencias prácticas:

- Mantenga la fuente limpia y compilable desde una nueva compra: sin rutas absolutas, sin cifras faltantes
- No hackear espacios ni márgenes. La producción lo elimina de todos modos (y puede [ser marcado](/learn/page-limits- without-crimes/))
- Utilice paquetes estándar. Los exóticos son reescritos por la producción o devueltos a usted

Estas clases se basan en una buena cantidad de paquetes, por lo que una instalación mínima puede generar varios en la primera compilación. Si uno se niega a aparecer, consulte [instalar paquetes faltantes](/learn/install-missing-package/). Si la plantilla falla completamente, clasifíquela como cualquier [plantilla rota](/learn/fix-broken-template/).