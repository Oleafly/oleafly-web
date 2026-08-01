---

title: "Git para trabajos de investigación: lo que realmente funciona con los coautores"
description: "Ignore las reglas, la propiedad de los capítulos, los mensajes de confirmación, los controles remotos privados y cómo un espacio de trabajo de investigación con Git real, bifurcaciones y puntos de control de IA mantiene los documentos recuperables sin convertir a Git en un segundo trabajo."
date: 2026-07-10
tags: [git, collaboration, workflow, local-first]
---

Los investigadores ya utilizan Git para el código. Los artículos se parecen mucho al código: texto sin formato,
incluye, construir basura. Poner un manuscrito en un repositorio es menos extraño que
suena una vez que lo has probado una vez.

## Ignora la basura

Un `.gitignore` sensato para LaTeX:

```text
*.aux
*.log
*.out
*.toc
*.synctex.gz
*.bbl
*.blg
*.fdb_latexmk
*.fls
```

Confirme `.tex`, `.bib`, las figuras que no puede regenerar y el archivo de clase si
la universidad lo requiere. Omita la confirmación de cada PDF a menos que la revista lo desee.
un binario en el archivo.

Si su editor inicia Git por usted, verifique que las cachés de compilación y los archivos PDF
Se ignoran los intermedios. Un flujo de "ruido" vacío se confirma desde archivos auxiliares
hace que el tronco pierda su valor. Dejas de leerlo y entonces la historia no puede ayudarte.
tú cuando algo se rompe.

## Archivos propios, no líneas.

Dos personas en el mismo párrafo se fusionan el dolor. Preferir capítulo o sección
propiedad. Utilice solicitudes de extracción cuando el grupo sea lo suficientemente grande como para realizar una revisión.
realmente ayuda.

La escritura multiusuario en vivo en un búfer es una herramienta diferente (navegador LaTeX
editores). La colaboración de Git es más lenta y explícita: bifurcar, enviar, revisar.
Eso funciona bien cuando necesitas un rastro en papel. Cuando tres personas deben escribir el
resumen juntos esta tarde, elijan otra cosa.

## Confirmar mensajes futuros que puedas leer

"Reparar cosas" es inútil en tres meses. "Reescribir trabajos relacionados con transformadores"
es suficiente. Dos capas ayudan:

1. Hitos que usted nombre: borradores de sección, envío, listo para cámara.
2. Controles de seguridad: instantáneas frecuentes para que una mala tarde sea reversible.

Si su editor realiza puntos de control después de una compilación exitosa o después de dejar de escribir,
trátelos como un piso, no como la única historia. Escribe un mensaje real cuando un
tierras de la sección o un borrador va a los coautores.

## Controles remotos privados

El trabajo no publicado pertenece a proyectos privados de GitHub o GitLab. Graduación y
Los movimientos de laboratorio ocurren cuando las personas pierden el acceso a cuentas aleatorias de editores en la nube. un control remoto
lo que controlas es la copia de seguridad.

Pulsa cuando tengas red. No espere hasta la noche anterior a la fecha límite para
descubre que el control remoto nunca estuvo conectado.

## Compilación local, copia de seguridad remota

La mayoría de las semanas, el ciclo se ve así: edite y compile sin conexión, presione cuando
tener red. No necesita una sesión de navegador activa solo para escribir.

Lo que desea de las herramientas:

- cada proyecto ya es un repositorio Git real (sin `git init` olvidado)
- puntos de control automáticos después de compilaciones exitosas y ediciones inactivas
- etapa, diferenciación en paralelo, descarte y restauración con un clic en la misma aplicación que
  el editor y PDF
- GitHub opcional para controles remotos; el historial ya funciona en el disco
- bifurcar un proyecto completo con historia completa para un experimento paralelo (arriesgado
  métodos de reescritura, currículum alternativo) mientras la copia enviada permanece
- Ediciones de IA, si las habilitas, controla primero y aterriza solo a través
  diferencias de aprobación

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) está construido para que
manera: carpetas simples, `.git` real, puntos de control automáticos que nombran los archivos que
movido, panel de control de código fuente con diferencias de árbol de trabajo editables, restaurar después
confirmar, publicar/empujar/tirar de GitHub opcional con adelante/atrás, bifurcación de proyecto con
linaje en la biblioteca. La terminal `git log` coincide con la aplicación porque es la
mismo repositorio. El punto de control de la IA, cuando usas uno, aterriza en el mismo
historial desde el que restauras.

Puedes aproximar partes de esto con un hábito cuidadoso y un Git separado.
cliente. La diferencia es si la historia es algo que configuras y recuerdas,
o algo que el espacio de trabajo de investigación asume el primer día junto a SyncTeX y
compilar.

## Lo que Git no soluciona

Git no reemplazará los comentarios de un investigador privado que solo abre archivos PDF, y no
decidir cuál resumen es correcto. Las cifras binarias aún no se fusionan bien, así que sigue
Si son pequeñas, prefiera parcelas que pueda regenerar y acuerde la propiedad con antelación.

Para los coautores que rechazan Git, exporten PDF o DOCX para su revisión y mantengan `.tex` como
fuente de verdad. Ver
[coautores que solo hablan Word](/learn/collaborator-uses-word/).

## Una práctica mínima

1. Un repositorio por artículo o tesis, no un mega repositorio para toda tu carrera.
2. `.gitignore` para compilar basura el primer día.
3. Propiedad del capítulo cuando más de una persona edita.
4. Milestone se compromete con mensajes legibles.
5. Control remoto privado conectado antes de que el trabajo importe.
6. Restaurar probado una vez a propósito, por lo que la primera emergencia no es la primera.
   restaurar.

Si te ciñes a esa lista, Git para documentos prácticamente desaparece en la lista.
fondo. Quieres una confiabilidad aburrida antes de una fecha límite, no un segundo pasatiempo.