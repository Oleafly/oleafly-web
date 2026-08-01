---

title: "Formato IEEE en la práctica"
description: "Modos de conferencia y revista IEEEtran, bloques de autores y trampas de dos columnas."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# Formato IEEE en la práctica

Los lugares del IEEE, desde pequeños talleres hasta revistas emblemáticas, comparten un archivo de clase: "IEEEtran". Aprendalo una vez y se abrirán cientos de lugares.

## Modo conferencia versus modo diario

La misma clase produce diferentes diseños según las opciones:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

El modo Conferencia le brinda el aspecto clásico: tiempos de 10 puntos, dos columnas, sin números de página de forma predeterminada. El modo diario cambia el diseño del título, agrega biografías de los autores al final y ajusta el espaciado. Utiliza siempre el modo que te pida tu local, no son intercambiables. Para obtener una comparación más amplia entre IEEE y ACM, consulte [ACM, IEEE y amigos](/learn/acm-ieee-and-friends/).

## Autores al estilo IEEE

El modo conferencia tiene su propio marcado de autor. No lo luches con `\\` y centrado manual:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` contiene nombres, `\IEEEauthorblockA` contiene afiliaciones y `\and` separa a los autores en columnas.

## Vivir con dos columnas

El diseño de dos columnas es donde los principiantes se quedan atascados. Las reglas:

| Problema | Arreglar |
|---|---|
| Figura o mesa ancha | Utilice `figura*`/`tabla*`, flota en la parte superior de una página |
| La ecuación larga se desborda | Divídalo, vea tácticas de dos columnas en [una columna o dos](/learn/one-column-or-two/) |
| Columnas de la última página desiguales | Equilíbrelos manualmente con `\IEEEtriggeratref` o el paquete `balance` |
| La URL llega al margen | `\usepackage{url}` o `xurl` para una mejor división |

Los entornos flotantes destacados no son negociables para contenido amplio:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Tenga en cuenta que `figure*` rechaza la colocación de `[h]`, siempre flota hacia la parte superior de la página. Planifique para eso en lugar de luchar contra ello.

## Bibliografía

IEEE utiliza citas numéricas con su propio estilo BibTeX:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

El `IEEEtran.bst` correspondiente se envía con la clase. No sustituyas "simple" o "ieeetr", advierten los revisores, y la lista de verificación lista para la cámara lo captará de todos modos.

## Dónde conseguir la plantilla real

Comience siempre desde la fuente oficial: el Selector de plantillas IEEE en ieee.org o la página del kit de autor de la conferencia. Los organizadores de la conferencia a veces parchean la plantilla (aviso de derechos de autor, pies de página adicionales), para que la versión del lugar prevalezca sobre una copia genérica. La [galería de plantillas](/templates/) de Oleafly incluye un iniciador de conferencia estilo IEEE que se compila de forma inmediata en el motor Tectonic incluido, útil para redactar antes de incluir el kit oficial.

## Lista de verificación de errores comunes

- Compile con código compatible con pdfLaTeX, IEEEtran es anterior a fontspec y espera motores clásicos
- No agregues `geometría` ni cambies márgenes, la clase los establece exactamente
- Se necesita `\IEEEpeerreviewmaketitle` después de `\maketitle` en algunos envíos de revistas
- Si la plantilla falla en su máquina, clasifíquela como cualquier [plantilla rota](/learn/fix-broken-template/)