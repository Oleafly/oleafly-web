---

title: "Apéndices que se renumeran limpiamente"
description: "apéndice, capítulos A/B, contadores que se mantienen consistentes."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Apéndices que se renumeran limpiamente

Un apéndice contiene material que respalda el texto principal pero que lo interrumpiría: pruebas largas, instrumentos de encuesta, tablas adicionales, detalles de implementación. Los lectores esperan que los apéndices tengan las letras A, B, C en lugar de continuar con los números de los capítulos, y esperan que el material que contiene haga lo mismo, por lo que una figura en el Apéndice A es la Figura A.1, no la Figura 47. En LaTeX eso es un cambio único, no un trabajo de reestructuración.

## El interruptor

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

`\appendix` es una declaración, no un entorno: no hay nada que cerrar. Desde el punto donde aparece, los contadores de secciones se reinician y cambian a letras. En las clases `informe` y `libro`, cada `\capítulo` posterior se convierte en Apéndice A, Apéndice B, etc., y una `\sección` interna se convierte en A.1. Todavía escribes sólo tu propio texto de encabezado; la etiqueta "Apéndice A" y las letras provienen de la clase, exactamente como lo eran los números de capítulo antes del cambio.

En el `artículo`, que no tiene capítulos, `\apéndice` se vuelve a etiquetar como `\sección`: la primera sección después se convierte en Apéndice A. Todo lo que sigue se mantiene consistente automáticamente. La tabla de contenido enumera los encabezados con letras y una `\label` colocada en un apéndice se resuelve mediante `\ref` en "A" o "A.2" sin ningún tratamiento especial.

## Qué renumera y qué no

En el "informe" y el "libro", las figuras, tablas y ecuaciones están numeradas dentro de los capítulos, por lo que recogen la letra gratis: la primera figura del Apéndice B es la Figura B.1. En "artículo", esos contadores se ejecutan continuamente a lo largo de todo el documento y "\apéndice" no los toca, por lo que la numeración de ecuaciones simplemente continúa. Esto es normal en un artículo breve; Solo luche contra ello si un lugar solicita explícitamente números con prefijo A.

## Cuando quieras más

El paquete "apéndice" agrega mejoras de las que carece el interruptor simple. Su entorno `apéndices` puede imprimir la palabra "Apéndice" en cada encabezado y en la tabla de contenido (`\usepackage[toc,titletoc,title]{appendix}`), y puede insertar una página separadora que anuncie los apéndices. Para una tesis cuya plantilla aún no maneja esto, esas opciones ahorran manipulación manual.

Un error común es escribir usted mismo la etiqueta en el encabezado, como en `\chapter{Apéndice A: Pruebas adicionales}`. La clase agrega su propia etiqueta, por lo que el resultado es "Apéndice A Apéndice A: Pruebas adicionales". Dé al título sólo el título y deje que la maquinaria de numeración haga su único trabajo. Si tiene un solo apéndice, el único "Apéndice A" es una pregunta de estilo; la mayoría de los lugares lo aceptan y algunos prefieren un `\capítulo*{Apéndice}` analfabeto.