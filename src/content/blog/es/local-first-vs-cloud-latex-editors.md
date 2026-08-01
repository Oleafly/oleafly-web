---

title: "Editores LaTeX locales primero versus en la nube: lo que realmente intercambias"
description: "Los editores de Cloud LaTeX intercambian la propiedad por conveniencia. Lo local primero significa archivos en el disco, un editor de investigación real, Git real, trabajo fuera de línea y red solo para las acciones que realice, además de lo que todavía pertenece al navegador."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Los editores de Cloud LaTeX ganaron por una sencilla razón: cero configuración. Abra una pestaña, compile.
Durante años, esa fue la forma más fácil de luchar contra una distribución TeX en un
portátil, y mucha gente todavía lo prefiere.

Sin embargo, la configuración ya no es la parte difícil para la mayoría de los documentos. Motores como
Tectonic puede enviarse dentro de una aplicación de escritorio y extraer paquetes a pedido, por lo que
instalar y compilar es aproximadamente el tiempo que lleva crear una cuenta en la nube. el
La pregunta que vale la pena hacerse es qué te sigue comprando la suscripción y qué
entregar por ello.

## A qué renuncias en la nube

Su manuscrito se encuentra en la base de datos de otra persona. La exportación suele funcionar, hasta que
Los planes cambian, se adquiere una empresa o una función desaparece, mientras que su
el plazo se mantiene.

El cifrado en reposo mantiene alejados a los forasteros. El servicio en sí todavía puede ver
borradores, subvenciones y resultados inéditos que pasan por su infraestructura.

La latencia es otro costo silencioso. Una pulsación de tecla manejada en su máquina es casi
siempre más ágil. Las colas de compilación y los tiempos de espera de nivel gratuito solo aparecen cuando el
la construcción no es tuya.

Fuera de línea es la otra brecha. En un vuelo, en el sótano de un hospital o en un lugar seguro
laboratorio sin red abierta, un editor de navegador es sólo una pestaña en blanco.

Algunos editores alojados también incluyen el historial completo, el seguimiento de cambios o la sincronización de Git/GitHub.
detrás de niveles pagados. A Git local no le importa qué plan compraste.

## Qué cambios locales primero

Los proyectos son archivos simples en una carpeta que puedes abrir. La historia puede ser real. Git you.
inspeccionar desde cualquier terminal. La compilación se ejecuta en su CPU sin cola. Tus archivos
y el historial de Git no dependen de que la cuenta de un proveedor se mantenga saludable.

La escritura multiusuario en vivo sigue siendo donde ganan las herramientas del navegador. Mucha investigación
Las semanas se ven diferentes: redacción en solitario, viajes, redes restringidas, querer
propiedad, o necesitar un editor de documentos completo que indexe todo el proyecto.
Los laboratorios ya ramifican y abren solicitudes de extracción de código. Los artículos pueden usar el mismo
Patrón asíncrono para coautores que no necesitan compartir un cursor.

## La red todavía ocurre (a propósito)

Las herramientas locales todavía buscan paquetes de primer uso, paquetes de plantillas y citas
metadatos, IA alojada si la activa, controles remotos de Git y actualizaciones. El punto es
el valor predeterminado: los borradores y las compilaciones en caché permanecen en el disco.

Los proyectos, los metadatos, las compilaciones y el historial de Git viven localmente. La red se ejecuta cuando
realizas una acción que la necesita. La edición y la compilación en caché deberían funcionar
fuera de línea. Pegue un DOI o habilite un modelo en la nube y esas solicitudes irán a donde usted
los apuntó. Dígalo claramente en cualquier artículo sobre privacidad en lugar de fingir
La red nunca sucede.

## La pila alrededor de un papel

Una semana de investigación casi nunca es "sólo un editor". Suele ser una mezcla de:

- entorno de escritura con inteligencia de proyecto real
- Distribución TeX y mantenimiento de paquetes.
- Visor de PDF con SyncTeX
- Cliente Git y host remoto.
- búsqueda de citas e higiene de la bibliografía
- herramientas de gramática y ortografía
- diagrama o figura de tubería
- plazos y otras herramientas secundarias

Un espacio de trabajo de investigación local es útil cuando esas piezas se encuentran en el mismo lugar.
proyecto de carpeta simple: un editor consciente del proyecto (referencias, citas, macros, estructura,
vista previa matemática, revisión fuera de línea), compilación supervisada, espacio de trabajo PDF con
SyncTeX tolerante a obsolescencia, puntos de control automáticos de Git, importación y exportación, verificación previa
antes de enviar, agente opcional que debe mostrar diferencias.

## Dónde encaja Oleafly

[Oleafly](https://github.com/Oleafly/Oleafly) está diseñado para esa categoría: gratis,
Espacio de trabajo de escritorio de código abierto para LaTeX, Typst y Markdown. incluido
compiladores. Biblioteca de proyectos con bifurcación y búsqueda. Editor de todo el proyecto
inteligencia (definición, referencias, cambio de nombre, verificaciones de referencias/citas en vivo, estructura
vistas, sus macros con formas de argumentos, TexLab/Tinymist cuando esté disponible). en vivo
vistas previas matemáticas. Harper y Hunspell sin conexión solo en prosa. PDF integrado con
SyncTeX bidireccional que aún se asigna mientras hay una reconstrucción pendiente. Git real con
puntos de control automático y GitHub opcional. Buscar y pegar citas. Diagrama
Compositor de TikZ editable. Prevuelo. IA opcional controlada por aprobación con su clave
o local Ollama.

La [página de privacidad](/privacy/) es breve a propósito: no hay cuenta Oleafly, no
Telemetría del producto. Los borradores se guardan en su máquina. IA alojada, búsqueda de citas y
GitHub habla con esos servicios según sus políticas, con tus claves y tu
acciones.

Si quieres probar un poco sin instalarlo, el [navegador gratuito
herramientas](/tools/) ejecutar en el lado del cliente. La aplicación de escritorio es donde la inteligencia,
La compilación, el historial y el árbol del proyecto realmente se encuentran.

## Cuando la nube todavía gana

Permanezca en el navegador cuando el producto sea la coautoría en tiempo real, cuando un
colaborador no instalará nada, o cuando su institución ya
estandarizado en un editor alojado para su envío.

Haga coincidir la herramienta con la semana que realmente tiene. Si necesitas multiusuario en vivo
escribiendo, permanezca en el navegador (o use Git cuando los coautores puedan trabajar de forma asincrónica). si tu
preocuparse más por la propiedad, la profundidad fuera de línea y un editor de investigación local completo,
guarde el manuscrito como archivos en el disco, cree el PDF en su máquina y guárdelo
historial en un repositorio que cualquier herramienta Git puede abrir.