---

title: "Formato ACM en la práctica"
description: "La clase acmart: sigconf, metadatos, revisión anónima y sorpresas en la primera compilación."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# Formato ACM en la práctica

ACM consolidó todas sus plantillas en una clase, "acmart", en 2017. Una clase, muchas caras: la opción de formato decide si obtiene un artículo de conferencia de dos columnas o un artículo de revista de una sola columna.

## Elige tu opción de formato

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` es lo que desea para casi cualquier conferencia ACM. La CFP del lugar menciona la opción exacta; Confíe en él sobre el hábito. Si aún está decidiendo entre familias de lugares, [ACM, IEEE y amigos](/learn/acm-ieee-and-friends/) las compara.

## Los metadatos son obligatorios

A diferencia de IEEEtran, acmart se niega a verse bien (y el editor se niega a aceptarlo) sin sus bloques de metadatos:

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

Los conceptos de CCS provienen de un selector en el sitio web de ACM que genera líneas XML y `\ccsdesc`. Pégalos palabra por palabra. Las palabras clave van en `\keywords`, no en abstracto. El bloque de formato de referencia de ACM (ese cuadro gris de citas en la página uno) se genera automáticamente a partir de `\acmConference`, `\acmYear` y amigos, que el editor completa o verifica en el momento en que la cámara está lista.

## Envío doble ciego

La mayoría de las conferencias de ACM se revisan de forma anónima. Una opción lo maneja:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

"anónimo" oculta autores y afiliaciones, "revisión" agrega números de línea para los revisores. Apaga ambos para que estén listos para la cámara. La clase maneja la mecánica, pero el anonimato es más grande que una bandera. Consulte [doble ciego bien hecho](/learn/anonymization-double-blind/).

## Citas: numeradas o autor-año

acmart usa natbib debajo y admite ambos estilos:

| Opción | Resultado |
|---|---|
| predeterminado | Numerado: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Año del autor: (Lovelace, 1843) |

Algunos SIG exigen el año del autor (Históricamente, CHI), otros están numerados. De nuevo: la PPC decide.

## Sorpresas de primera compilación

acmart tiene hambre de paquetes. Espere esto en una configuración nueva:

- **Fuentes Libertine.** La clase carga Linux Libertine y Biolinum más `newtxmath`. En una instalación mínima de TeX, estos llegan como descargas la primera vez que compila. El motor Tectonic incluido en Oleafly los recupera automáticamente en el primer uso, por lo que la compilación inicial lleva más tiempo que la segunda. Eso es normal, no un bloqueo.
- **Reglas de flotación estrictas.** acmart bloquea algunos paquetes (como `titlesec`) directamente y generará un error si los carga.
- **`\authorsaddresses{}`** silencia la molestia del pie de página "direcciones de los autores" en los borradores.

Si un paquete realmente no se resuelve, la solución es la habitual: [instalar el paquete que falta](/learn/install-missing-package/).

## Dónde conseguirlo

Descargue la plantilla oficial de las páginas de autor de acm.org o del sitio de su conferencia y mantenga actualizado `acmart.cls`. ACM lo acelera varias veces al año y las comprobaciones de la cámara lista se ejecutan con la última versión.