---

title: "Listo para la cámara sin pánico"
description: "Quitar el anonimato, agregar financiación, incrustar fuentes y alcanzar el límite de páginas: la lista de verificación de la versión final."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Listo para la cámara sin pánico

¡Aceptado! Después de la celebración llega una última fecha límite: estar listo para la cámara. El nombre es una reliquia de cuando los editores fotografiaron sus páginas para imprimirlas. Hoy significa la versión final que entra en el proceso, exactamente como la verán los lectores para siempre. Ningún editor corrige tus errores tipográficos después de esto. Esa parte depende de ti.

## ¿Qué cambia entre envío y listo para cámara?

La versión enviada se ajustó para los revisores. La cámara está lista para el registro permanente, y varias cosas cambian:

| Artículo | Versión enviada | Listo para cámara |
|---|---|---|
| Nombres de autores | Oculto (doble ciego) | Nombres reales, afiliaciones, correos electrónicos |
| Agradecimientos | Omitido | Financiación, subvenciones, agradecimientos |
| Límite de páginas | Límite de revisión | A menudo +1 página, pero exacta |
| Bloque de derechos de autor | Marcador de posición o ninguno | Bloque del editor, DOI, ISBN |
| Autocitas | Tercera persona ("Smith et al.") | Puede decir "nuestro trabajo anterior" |
| Promesas de refutación | Prometido | Realmente entregado |

Desanonimizar es más que volver a agregar nombres. Busque en la fuente cada lugar donde escribió sobre su identidad; consulte [anonimización para revisión doble ciego](/learn/anonymization-double-blind/) para conocer los escondites habituales y luego inviértalos todos.

## El límite de páginas exacto, nuevamente

Los editores, no sólo los presidentes, imponen los límites de las cámaras listas, y el contenido adicional (bloqueo de autor, agradecimientos) consume espacio. Si de repente te faltan seis líneas, hazlo honestamente: ajusta la prosa y las figuras en lugar de abusar de los comandos de espaciado. Las técnicas en [límites de páginas sin delitos](/learn/page-limits- without-crimes/) se aplican doblemente aquí, porque los editores verifican el formato.

## Las fuentes deben estar incrustadas

Este es el que muerde a la gente. Los editores realizan comprobaciones automáticas y el principal motivo de rechazo son las fuentes no incrustadas, normalmente introducidas de contrabando en un PDF de figuras exportado desde una herramienta de trazado. Verifique con `pdffonts yourpaper.pdf`: cada fuente debe decir "emb: yes". Si no se hace, el culpable casi siempre es una figura; Vuelva a exportarlo con fuentes incrustadas o como un PDF generado correctamente.

## La revisión final: las referencias primero

Las referencias son donde se concentra la entropía. Antes de subir:

- [ ] No "??" citas o referencias indefinidas en el registro
- [ ] Cada entrada de bibliografía tiene lugar, año y título correctamente escrito.
- [] Nombres de los autores escritos correctamente (la gente nota su propio nombre)
- [] citas exclusivas de arXiv actualizadas a las versiones publicadas cuando existan
- [] Las URL en las referencias aún se resuelven

Luego lea el documento completo en voz alta una vez. Es lento y funciona.

## Peculiaridades de la carga de fuentes

La mayoría de los editores quieren su fuente LaTeX, no sólo el PDF, y sus sistemas de compilación son exigentes: incluyan el `.bbl`, eviten paquetes no estándar y sigan el diseño de sus archivos. Exporte un ZIP de fuente limpia (Oleafly lo hace en un solo paso) y compílelo desde cero en una carpeta vacía antes de cargarlo. Si sólo se compila debido a un archivo perdido en su máquina, el sistema del editor lo descubrirá.

## La lista de verificación de una sola vez

- [ ] Nombres, afiliaciones, correos electrónicos restaurados y correctos
- [ ] Agradecimientos y números de financiación añadidos
- [] Bloque de derechos de autor/información DOI pegada del correo electrónico del editor
- [] Límite de páginas cumplido exactamente
- [] `pdffonts` muestra todas las fuentes incrustadas
- [ ] Referencias revisadas
- [] ZIP de código limpio compila desde cero
- [] Subido con un día de sobra

Entonces se hace, de forma permanente. Es hora de pensar en [presentarlo](/aprender/presentar-tu-artículo/).