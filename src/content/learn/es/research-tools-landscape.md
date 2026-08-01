---

title: "La caja de herramientas para la redacción de investigaciones, antes y ahora"
description: "Desde máquinas de escribir y viajes de ida y vuelta por correo electrónico hasta Overleaf, Zotero, Typst y espacios de trabajo locales."
category: "research-101"
order: 9
level: "beginner"
tags: ["research", "basics", "tools"]
featured: false
updated: 2026-07-25
---

# La caja de herramientas para la redacción de investigaciones, antes y ahora

Cada generación de investigadores piensa que sus herramientas son permanentes. Nunca lo son. Un recorrido rápido por cómo se escribieron los artículos y cómo luce la caja de herramientas hoy en día, para que pueda elegir la suya deliberadamente.

## Los tiempos anteriores

En la década de 1980, los artículos se **mecanografiaban en máquinas de escribir**, las ecuaciones se escribían a mano y se enviaban por correo a las revistas. Luego vinieron los procesadores de texto: décadas de **plantillas de Word** con numeración frágil, ecuaciones pegadas como imágenes y diseños de figuras que explotaban cuando se movía un párrafo. La colaboración significaba **enviar archivos por correo electrónico de un lado a otro**: `paper_final_v3_REALLY_FINAL_jw_edits.docx` no es una broma, es historia. LaTeX existió durante todo esto (ver [45 años de TeX](/learn/history-of-tex-latex/)) pero lo compilaste en una terminal y también lo compartiste por correo electrónico.

## La caja de herramientas de hoy

| Herramienta | Categoría | En qué es bueno |
| --- | --- | --- |
| Al dorso | Editor LaTeX en la nube | Coedición en tiempo real en el navegador, sin configuración |
| TeXstudio / TeXmaker | IDE de látex local | Edición de escritorio clásica, gratis |
| Taller VS Code + LaTeX | IDE local | Potente si ya vives en VS Code |
| Oleafly | Espacio de trabajo local primero | LaTeX, Typst y Markdown con compiladores incluidos |
| Zotero | Gestor de referencias | Recopilar, organizar y exportar citas |
| Google Académico | Descubrimiento | Búsqueda de artículos y seguimiento de citas |
| arXiv | Descubrimiento + preimpresiones | Para leer gratis el trabajo más reciente, consulte [el mundo de la preimpresión](/learn/what-is-arxiv/) |
| Mecanografíe | Nuevo sistema de composición tipográfica | Documentos rápidos y modernos cuando ningún lugar lo exige .tex |

Las herramientas de **descubrimiento** encuentran artículos, los **administradores de referencias** organizan lo que encontró y los **editores** lo convierten todo en un PDF. Terminarás con uno de cada uno.

## Nube vs local, sinceramente

**Al dorso** hizo que LaTeX se generalizara al eliminar la instalación por completo, y su edición colaborativa en tiempo real es realmente su característica principal. Si sus coautores quieren escribir el mismo documento al mismo tiempo, las herramientas en la nube como Overleaf son simplemente mejores hoy en día.

Las herramientas **locales primero** cambian el negocio: sus archivos viven en su máquina como archivos simples, puede trabajar en un tren o detrás de un firewall de hospital, nada depende de una suscripción o de que un servidor se mantenga activo, y el historial de versiones es real [Git](/learn/oleafly-workflow/), no una línea de tiempo propietaria. El problema clásico del LaTeX local era instalar una distribución TeX de varios gigabytes. Esa es la parte que ha cambiado.

## Dónde encaja Oleafly

Oleafly es un espacio de trabajo de escritorio local, gratuito y de código abierto. Los compiladores para LaTeX y Typst vienen incluidos, por lo que no es necesario instalar ninguna distribución. Las citas se pueden recuperar mediante [DOI o arXiv ID](/learn/open-access-doi-explained/), los proyectos son repositorios Git con un historial honesto, las plantillas de lugar están integradas y un asistente de IA opcional ayuda cuando lo desee. El objetivo es hacer que la ruta local tenga tan poca fricción como la de la nube. Para ser justos con el oficio: para la coedición simultánea en vivo, Overleaf sigue siendo la mejor opción. Para la propiedad de sus archivos y el trabajo sin conexión, lo local primero gana. Mucha gente usa ambos, redactando localmente y sincronizando a través de Git.

## Elegir sin agonizar

Comience con lo que le elimine la mayor fricción este mes. Los archivos .tex son portátiles para todas las herramientas de la mesa. Esa portabilidad es la verdadera ventaja de la escritura de texto plano, que se trata en [LaTeX vs Word](/learn/latex-vs-word/). Luego escriba su [primer documento](/learn/first-document/) y deje que la caja de herramientas crezca con el trabajo.