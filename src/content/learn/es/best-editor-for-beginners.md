---

title: "Elige un editor que realmente abrirás"
description: "Lo que necesitan los principiantes: un compilador, vista previa, SyncTeX y archivos que permanecen en el disco."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Elige un editor que realmente abrirás

El mejor editor de LaTeX para principiantes no es el más potente. Es el que te lleva de un archivo vacío a un PDF compilado con la menor fricción. La compilación temprana y, a menudo, es más importante que cualquier característica individual. Cuatro capacidades cubren lo que necesita el primer día.

Primero, la compilación debería funcionar sin instalar manualmente una distribución TeX de varios gigabytes. En segundo lugar, desea una vista previa del PDF uno al lado del otro con SyncTeX, por lo que un clic en el PDF salta a la línea de origen correspondiente y regresa. En tercer lugar, sus archivos deben ser `.tex` simples en el disco, para que pueda comprimirlos, enviarlos por correo electrónico o colocarlos en Git sin un paso de exportación. Cuarto, los errores deberían llegar como mensajes legibles, no sólo como un registro TeX sin formato.

## Las opciones realistas

| Redactor | Configuración | Funciona sin conexión | Notas |
| --- | --- | --- | --- |
| Oleafly | Descarga la aplicación | Editando siempre; compila utiliza paquetes almacenados en caché | Motor incluido, historial de Git, IA con su propia clave opcional |
| TeXShop / TeXworks | Instale primero una distribución TeX | Sí | Mínimo y confiable |
| Taller VS Code + LaTeX | Instale primero una distribución TeX | Sí | Una buena opción si ya trabajas en VS Code |
| Al dorso | Crear una cuenta en el navegador | Limitado | Instalación cero; proyectos viven en sus servidores |

Las dos filas del medio comparten un costo oculto: antes de que el editor sea útil, usted mismo instala y mantiene TeX Live o MiKTeX. Ahí es donde muchos principiantes se estancan. La opción del navegador elimina la configuración pero mueve sus archivos a una cuenta. Las compensaciones se tratan con más profundidad en [proyecto del navegador versus carpeta en el disco](/learn/overleaf-vs-local/).

## Un valor predeterminado razonable

Si desea archivos locales sin administración de TeX, comience con [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest): el compilador se envía dentro de la aplicación y descarga paquetes la primera vez que un documento los necesita. Cualquiera que sea el editor que elija, vincúlelo con el [tutorial del primer documento](/learn/first-document/) y mantenga la [hoja de referencia](/learn/cheatsheet/) cerca. El editor importa menos que compilar tu primera página hoy.