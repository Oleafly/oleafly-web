---

title: "Pon el documento en GitHub"
description: "Inicie, ignore los archivos auxiliares, el repositorio privado y los hábitos que mantienen sanas las fusiones del coautor."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Pon el documento en GitHub

Un manuscrito de LaTeX es texto plano, lo que lo hace ideal para Git. Cada borrador se convierte en una confirmación a la que puede regresar, cada cambio es visible como una diferencia a nivel de línea y GitHub le brinda una copia externa además de una forma para que los coautores extraigan el estado actual. Nada de esto requiere Git avanzado. Un documento necesita quizás cinco comandos, utilizados de manera consistente.

## La configuración inicial

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Ejecute esto una vez en la carpeta del proyecto. El paso `.gitignore` importa más de lo que parece. Cada compilación regenera los archivos `.aux`, `.log`, `.out`, `.toc` y `.synctex.gz`, y su confirmación oculta los cambios reales bajo el ruido de la máquina y crea conflictos de fusión inútiles entre coautores. Realice un seguimiento únicamente de lo que usted escribe: las fuentes `.tex`, la base de datos `.bib`, las figuras y cualquier archivo de clase o estilo que le haya proporcionado el lugar. El PDF también es un producto de construcción. La mayoría de los equipos lo omiten y lo reconstruyen localmente, aunque adjuntar uno a una versión etiquetada es una forma razonable de congelar una versión enviada. Mantenga el repositorio privado hasta que el trabajo sea público. Un manuscrito inédito no es algo que deba indexarse.

## Hábitos que mantienen cuerdos a los coautores

Haga que cada confirmación realice un cambio lógico, como "revisar la introducción de la sección 3" o "agregar tabla de ablación". Luego, la historia se lee como la historia del artículo y una mala edición se puede revertir sin daños colaterales. Tira antes de comenzar una sesión de escritura y empuja cuando termines. Los conflictos de fusión aumentan con el tiempo que pasan las ramas separadas. Nunca fuerces una rama compartida una vez que los coautores la hayan tirado: eso reescribe la historia bajo sus pies. Mantenga grandes artefactos binarios (conjuntos de datos, vídeos) fuera del repositorio en papel. Enlace a un archivo o utilice un repositorio de datos independiente. Git almacena cada versión de cada binario para siempre.

Un hábito específico de LaTeX: escribir una oración por línea fuente hace que las diferencias sean mucho más legibles, porque una edición de una palabra se muestra como un cambio de una línea en lugar de un párrafo redistribuido.

## Cómo encaja Oleafly

Cada proyecto de Oleafly es una carpeta normal en el disco, por lo que estos comandos funcionan sin cambios. La aplicación también puede crear una confirmación de Git automáticamente después de cada compilación exitosa, lo que le brinda una red de seguridad detallada entre sus confirmaciones deliberadas. Consulte [Historial de Git](/docs/git-history/). Para conocer los patrones de colaboración creados a partir de esto, incluido el intercambio de parches y la propiedad de capítulos, consulte [Coautor sin cursor activo](/learn/offline-collaboration/).