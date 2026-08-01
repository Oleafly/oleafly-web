---

title: "Cada \\\\ comando en el universo LaTeX, explicado"
description: "La referencia global: cientos de comandos y entornos LaTeX, desde el kernel hasta amsmath, hyperref, TikZ, biblatex y Beamer, cada uno explicado en una línea."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Cada \command en el universo LaTeX, explicado

Esta página define cada comando y entorno de LaTeX que aparece en cualquier lección de Oleafly Learn, además del vocabulario estándar más amplio que encontrará en artículos reales. Kernel, amsmath, hyperref, graphicx, booktabs, biblatex, TikZ, Beamer y los paquetes que los investigadores realmente cargan. Hojéelo por categoría o busque en la página con Ctrl/Cmd-F el comando que acaba de encontrar. Cada entrada es una línea: qué hace y, dónde importa, de qué paquete proviene.

## Clases de documentos y configuración

| Comando | Qué hace |
| --- | --- |
| `\documentclass{artículo}` | Primera línea de cada documento: elige el diseño general; artículo es la opción predeterminada para los artículos. |
| `\documentclass{informe}` | Clase para informes más largos: agrega `\chapter` e inicia el resumen en su propia página. |
| `\documentclass{libro}` | Clase para libros: capítulos, disposición a dos caras, anverso/principal/contraportada. |
| `\documentclass{letra}` | Clase para correspondencia, con comandos `\opening`, `\closing` y dirección. |
| `\documentclass{beamer}` | Clase para presentaciones de diapositivas construidas a partir de entornos `frame`. |
| `\documentclass[11pt,a4paper]{artículo}` | Opciones de clase comunes: tamaño de fuente (10 pt, 11 pt, 12 pt), papel (papel a4, papel carta), `dos columnas`, `dos caras`, `paisaje`, `borrador`, `portada`. |
| `\usepackage{amsmath}` | Carga un paquete en el preámbulo para agregar funciones. |
| `\usepackage[margin=1in]{geometría}` | Establece los márgenes de la página y el tamaño del papel (geometría). |
| `\título{...}` | Almacena el título del documento, impreso posteriormente por `\maketitle`. |
| `\autor{...}` | Almacena la lista de autores de `\maketitle`; separe varios autores con `\y`. |
| `\y` | Separador entre nombres de autores dentro de `\author{...}`. |
| `\fecha{...}` | Almacena la fecha mostrada por `\maketitle`; `\date{}` lo oculta, `\date{\today}` muestra hoy. |
| `\hoy` | Imprime la fecha actual en tiempo de compilación. |
| `\maketitle` | Imprime el bloque de título de `\title`, `\author` y `\date`. |
| `\gracias{...}` | Adjunta una nota a pie de página a un título o nombre de autor, p. para financiación o información de contacto. |
| `\instituto{...}` | Comando de afiliación de autor utilizado por Beamer y la clase Springer LNCS. |
| `\inst{1}` | Marcador de superíndice de afiliación en las listas de autores de LNCS y Beamer: `Ada Lovelace\inst{1}`. |
| `\palabras clave{...}` | Imprime la lista de palabras clave del artículo en el editor.clases como acmart y llncs. |
| `\dirección{...}` | clase de carta: almacena la dirección del remitente para el membrete. |
| `\firma{...}` | clase de letra: almacena el nombre impreso debajo del cierre. |
| `\apertura{Estimado...}` | clase de letra: imprime el saludo y comienza el cuerpo de la letra. |
| `\closing{Atentamente,}` | clase de letra: imprime el bloque de firma y cierre de sesión. |
| `\LaTeX` | Imprime el logo de LaTeX con sus letras elevadas y bajadas. |
| `\TeX` | Imprime el logo de TeX con su E bajada.
| `\entrada{archivo}` | Pega otro archivo .tex en su lugar, como si lo hubiera escrito allí. |
| `\incluir{capítulo1}` | Introduce un archivo de capítulo que comienza en una nueva página; permite compilaciones parciales a través de `\ includeonly`. |
| `\includeonly{capítulo1,capítulo3}` | Lista de preámbulo que restringe qué archivos `\include` realmente se compilan. |
| `\hipersetup{...}` | Configura opciones de hiperreferencia, como colores de enlaces y metadatos de PDF. |
| `\AtBeginDocument{...}` | Ejecuta el código justo después de `\begin{document}`, lo que resulta útil para una configuración tardía. |
| `\AtEndDocument{...}` | Ejecuta el código justo antes de que finalice el documento. |
| `\makeatletter` | Temporalmente convierte `@` en una letra para que puedas usar o parchear comandos internos. |
| `\makeatother` | Restaura `@` a la normalidad después de `\makeatletter`. |
| `\escribir{...}` | Imprime un mensaje en el registro de compilación y en la terminal, lo que resulta útil para la depuración. |
| `\proteger` | Protege un comando frágil dentro de un argumento en movimiento como `\caption` o `\section`. |
| `\lista de archivos` | Comando de preámbulo que registra cada archivo cargado y su versión, para informes de errores. |

## Estructura y seccionamiento

| Comando | Qué hace |
| --- | --- |
| `\part{...}` | División de más alto nivel, por encima de capítulos, en clases de libros e informes. |
| `\capítulo{...}` | Encabezado de capítulo numerado en clases de libro e informe (no en artículo). |
| `\sección{...}` | Título de nivel superior numerado en un artículo. |
| `\subsección{...}` | Encabezado numerado un nivel debajo de `\sección`. |
| `\subsubsección{...}` | Encabezado numerado un nivel debajo de `\subsección`. |
| `\párrafo{...}` | Encabezado de nivel más bajo: un título en negrita al comienzo de un párrafo. |
| `\subpárrafo{...}` | Un nivel por debajo de `\paragraph`, rara vez es necesario. |
| `\sección*{...}` | La sección con estrella imprime el encabezado sin número ni entrada TOC. |
| `\apéndice` | Cambia la numeración para que los siguientes capítulos o secciones se conviertan en Apéndice A, B, C. |
| `\página del apéndice` | Imprime una página divisoria de "Apéndices" independiente (paquete de apéndices). |
| `\tabladecontenido` | Imprime la tabla de contenidos, creada a partir de sus comandos de sección. |
| `\listadefiguras` | Imprime una lista de todos los títulos de figuras con números de página. |
| `\lisoftables` | Imprime una lista de todos los títulos de las tablas con números de página. |
| `\frontmatter` | Cambio de clase de libro para las páginas de contenido previo: números de página romanos, capítulos sin numerar. |
| `\materia principal` | La clase de libro vuelve al contenido principal: números de páginas en árabe, capítulos numerados. |
| `\trasfondo` | Cambio de clase de libro para las páginas finales: los capítulos dejan de estar numerados. |
| `\addcontentsline{toc}{capítulo}{...}` | Agrega manualmente una entrada a la tabla de contenido (o una lista de figuras/tablas). |
| `\addtocontents{toc}{...}` | Escribe material arbitrario (como espaciado) en un archivo de contenido. |
| `\setcounter{secnumprofundidad}{3}` | Controla la profundidad de los números de sección. |
| `\setcounter{tocprofundidad}{2}` | Controla la profundidad de la tabla de contenido. |

## Definición de comandos y entornos

| Comando | Qué hace |
| --- | --- |
| `\nuevocomando{\R}{\mathbb{R}}` | Define su propio comando; errores si el nombre ya existe. |
| `\renewcommand{...}{...}` | Redefine un comando existente; errores si no existe. |
| `\proporcionarcomando{...}{...}` | Define un comando sólo si aún no está definido; de lo contrario, silenciosamente no hace nada. |
| `\NuevoComandoDocumento` | Definición de comando moderna con argumentos opcionales flexibles (LaTeX3/xparse). |
| `\newenvironment{nombre}{código de inicio}{código de finalización}` | Define su propio entorno con código ejecutado en `\begin` y `\end`. |
| `\renewenvironment{nombre}{...}{...}` | Redefine un entorno existente. |
| `\ensuremath{...}` | Hace que el contenido matemático de una macro funcione tanto dentro como fuera del modo matemático. |
| `\DeclareMathOperator{\E}{E}` | Define un nombre de operador vertical; la forma estrellada pone límites debajo (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Forma destacada: el operador toma los límites siguientes en la visualización matemática (amsmath). |
| `\nuevoteorema{lema}{Lema}` | Declara un entorno similar a un teorema (amsthm). |
| `\foo` | Nombre de ejemplo para una macro definida por el usuario en la lección `\newcommand`, no un comando LaTeX real. |
| `\abs{x}` | Ejemplo de macro definida por el usuario de la lección de comandos personalizados que escribe barras de valor absoluto. |
| `\mat{A}` | Ejemplo de macro definida por el usuario de la lección de comandos personalizados para un símbolo de matriz en negrita. |
| `\vect{v}` | Ejemplo de macro definida por el usuario de la lección de comandos personalizados para un símbolo vectorial en negrita. |
| `\set{...}` | Ejemplo de macro definida por el usuario de la lección de comandos personalizados que compone el tamaño de las llaves. |
| `\citepair` | Ejemplo de macro auxiliar de citas definida por el usuario de la lección de comandos personalizados, no un comando estándar. |
| `\E` | Ejemplo de operador definido por el usuario para expectativa, típicamente definido con`\DeclareMathOperator` o `\newcommand`. |
| `\R` | Ejemplo de macro definida por el usuario para reales: `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | Nombres de operadores para arg max/arg min, definidos en este curso con `\DeclareMathOperator*`, por lo que los subíndices se encuentran debajo. |

## Contadores y longitudes

| Comando | Qué hace |
| --- | --- |
| `\newcounter{ejemplos}` | Crea un nuevo contador, opcionalmente restablecido por un padre: `\newcounter{examples}[section]`. |
| `\setcounter{página}{1}` | Establece el valor de un contador, aquí reiniciando los números de página. |
| `\addtocounter{ejemplos}{2}` | Agrega un valor a un contador sin imprimir nada. |
| `\stepcounter{ejemplos}` | Incrementa un contador en uno. |
| `\refstepcounter{ejemplos}` | Incrementa un contador y lo convierte en el objetivo de la siguiente `\label`. |
| `\valor{ejemplos}` | Lee el valor de un contador para usarlo en aritmética o comparaciones. |
| `\árabe{ejemplos}` | Imprime un contador con números arábigos: 1, 2, 3. |
| `\roman{ejemplos}`, `\Roman{ejemplos}` | Imprime un contador como números romanos en minúsculas o mayúsculas. |
| `\alph{ejemplos}`, `\Alph{ejemplos}` | Imprime un contador como letras minúsculas o mayúsculas. |
| `\fnsymbol{nota al pie}` | Imprime un contador como símbolos de nota al pie: asterisco, daga, etc. |
| `\nueva longitud{\mygap}` | Crea un nuevo registro de longitud. |
| `\setlength{\parskip}{6pt}` | Asigna un valor a un registro de longitud. |
| `\addtolength{\textheight}{1cm}` | Se suma a una longitud existente. |
| `\settowidth{\mygap}{texto}` | Establece una longitud al ancho natural de algún texto. |
| `\parindent` | Longitud de la sangría del párrafo de primera línea; establecido con `\setlength{\parindent}{0pt}`. |
| `\parskip` | Longitud del espacio vertical entre párrafos; establecer con `\setlength`. |
| `\ancho de línea` | Longitud de la línea actual, útil para dimensionar: `width=\linewidth`. |
| `\ancho de texto` | Longitud del ancho del bloque de texto completo en la página. |
| `\textheight` | Longitud de la altura del bloque de texto completo en la página. |
| `\ancho de columna` | Ancho de una columna en un diseño de varias columnas. |
| `\baselineskip` | Distancia vertical entre líneas base de líneas consecutivas. |
|`\linespread{1.3}` | Escala el interlineado (interlineado) de todo el documento; necesita `\selectfont` o un comando de tamaño para que surta efecto. |

## Párrafos, saltos de línea y separación de palabras

| Comando | Qué hace |
| --- | --- |
| `\\` | Finaliza la línea actual dentro de párrafos, tablas y matrices. |
| `\\[6 puntos]` | Salto de línea con espacio vertical adicional después. |
| `\nueva línea` | Rompe la línea sin justificarla y sin permitir salto de página. |
| `\salto de línea` | Solicita un salto de línea justificado aquí; opcional `[0-4]` establece la insistencia. |
| `\nolinebreak` | Desalienta un salto de línea en este punto. |
| `\par` | Finaliza el párrafo, igual que una línea en blanco en la fuente. |
| `\noindent` | Suprime la sangría de primera línea del párrafo siguiente. |
| `\sangría` | Fuerza la sangría de primera línea donde de otro modo se suprimiría. |
| `\-` | Marca un punto de separación de palabras permitido dentro de una palabra. |
| `\hyphenation{conjunto de datos}` | Lista de preámbulo que enseña a LaTeX cómo dividir palabras específicas con guiones. |
| `\descuidado` | Afloja las reglas de espaciado para que las líneas se rompan más fácilmente, evitando cuadros demasiado llenos. |
| `\quisquilloso` | Restaura reglas de espaciado estrictas después de `\sloppy`. |
| `\raggedright` | Alinea a la izquierda el siguiente texto en lugar de justificarlo. |
| `\raggedleft` | Alinea a la derecha el siguiente texto. |
| `\centrado` | Centra todo lo que sigue dentro del grupo actual, p.e. la imagen de una figura. |
| `\misma página` | Desalienta los saltos de página dentro del grupo actual. |
| `\enlargethispage{\baselineskip}` | Hace que sólo la página actual sea un poco más alta, para incluir una línea más. |
| `~` | Espacio sin separación: `Figura~1` mantiene el número en la misma línea. |

## Espaciado

| Comando | Qué hace |
| --- | --- |
| `\cuádruple` | Inserta un espacio horizontal del ancho de una M mayúscula. |
| `\qquad` | Inserta el doble del espacio de `\quad`. |
| `\enespacio` | Inserta medio `\quad` de espacio horizontal. |
| `\hespacio{1cm}` | Inserta espacio horizontal; desaparece en un salto de línea. |
| `\hespacio*{1cm}` | Espacio horizontal que sobrevive incluso en un salto de línea. |
| `\vespacio{1cm}` | Inserta un espacio vertical de una longitud determinada. |
| `\vespacio*{1cm}` | Espacio vertical que sobrevive incluso en un salto de página. |
| `\smallskip` | Inserta un pequeño espacio vertical entre párrafos. |
| `\medskip` | Inserta un espacio vertical mediano entre párrafos. |
| `\bigskip` | Inserta un gran espacio vertical entre párrafos. |
| `\hfill` | Espacio horizontal elástico que separa el contenido para llenar la línea. |
| `\vfill` | Espacio vertical elástico que separa el contenido para llenar la página. |
| `\puntofill` | Rellena la línea restante con puntos, como en un menú o línea de contenido. |
| `\hrulefill` | Rellena la línea restante con una regla horizontal. |
| `\estirar{2}` | Pegamento elástico con peso, para espaciado proporcional: `\hspace{\stretch{2}}`. |
| `\rellenar` | La unidad de longitud elástica; `\hspace{\fill}` es a lo que se expande `\hfill`. |
| `\fantasma{texto}` | Ocupa exactamente el espacio de su argumento pero no imprime nada. |
| `\hphantom{texto}` | Ocupa sólo el ancho de su argumento, con altura cero. |
| `\vphantom{texto}` | Ocupa sólo la altura de su argumento, con ancho cero. |
| `\smash{...}` | Imprime su argumento pero finge que tiene altura y profundidad cero. |
| `\puntal` | Soporte invisible a la altura de una línea normal, para igualar la altura de las filas. |
| `\mathstrut` | Puntal en modo matemático del tamaño de un paréntesis, para alinear radicales y fracciones. |

## Cajas y reglas

| Comando | Qué hace |
| --- | --- |
| `\mbox{...}` | Caja horizontal irrompible; también mantiene su contenido en una línea. |
| `\makebox[3cm][r]{...}` | Caja de un ancho establecido con alineación elegida (l, c, r, s). |
| `\fbox{...}` | Dibuja un marco alrededor de su contenido. |
| `\framebox[3cm][c]{...}` | Caja enmarcada de un ancho determinado con alineación elegida. |
| `\parbox{5cm}{...}` | Un cuadro de párrafo: una mini columna de texto del ancho dado. |
| `\raisebox{2pt}{...}` | Desplaza su contenido hacia arriba (o hacia abajo con una longitud negativa). |
| `\regla{2cm}{0.4pt}` | Dibuja un rectángulo relleno; el caballo de batalla para líneas personalizadas. |
| `\colorbox{amarillo}{...}` | Coloca el texto en un cuadro de fondo de color (xcolor). |
| `\fcolorbox{rojo}{amarillo}{...}` | Caja de color con marco de color (xcolor). |

## Páginas, numeración y encabezados

| Comando | Qué hace |
| --- | --- |
| `\nuevapágina` | Finaliza la página actual y comienza una nueva. |
| `\clearpage` | Comienza una nueva página después de borrar por primera vez todas las figuras y tablas pendientes. |
| `\cleardoublepage` | Como `\clearpage` pero también garantiza que la página siguiente sea una página de la derecha (impar). |
| `\salto de página` | Solicita un salto de página en este punto, estirando la página a su altura completa. |
| `\nopagebreak` | Desalienta un salto de página en este punto. |
| `\pagenumbering{romano}` | Establece el estilo del número de página (árabe, romano, romano, alph, Alph), restableciendo el contador a 1. |
| `\pagestyle{elegante}` | Establece el estilo de encabezado/pie de página (normal, vacío, encabezados, myheadings, elegante) para todas las páginas siguientes. |
| `\thispagestyle{vacío}` | Anula el estilo de encabezado/pie de página solo para la página actual. |
| `\lapágina` | Imprime el número de página actual; utilizado dentro de encabezados y pies de página. |
| `\marginpar{...}` | Coloca una nota en el margen de la página junto a la línea actual. |
| `\fancyhf{}` | Borra todos los campos de encabezado y pie de página de fancyhdr antes de configurar el tuyo propio. |
| `\fancyhead[R]{...}` | Establece un campo de encabezado fancyhdr, aquí el de la derecha. |
| `\fancyfoot[C]{\lapágina}` | Establece un campo de pie de página fancyhdr, aquí un número de página centrado. |
| `\headrulewidth` | macro fancyhdr para el grosor de la regla del encabezado; renovar a 0pt para eliminar la línea. |
| `\footrulewidth` | Macro fancyhdr para el grosor de la regla del pie de página, 0pt de forma predeterminada. |
| `\nuevageometría{margen=2cm}` | Cambia la geometría de la página a mitad del documento (geometría). |
| `\restoregeometry` | Vuelve a la geometría del preámbulo después de `\newgeometry` (geometría). |

## Caracteres especiales

Los diez caracteres reservados y cómo imprimirlos, además de los símbolos de texto comunes.

| Comando | Qué hace |
| --- | --- |
| `\%` | Imprime un signo de porcentaje (el `%` vacío inicia un comentario). |
| `\&` | Imprime un signo comercial (`&` simple es el separador de columnas de la tabla). |
| `\#` | Imprime un hash (el `#` desnudo marca los argumentos de macro). |
| `\_` | Imprime un guión bajo (`_` desnudo es un subíndice matemático). |
| `\{` y `\}` | Imprima llaves (grupo de llaves desnudas). |
| `\$` | Imprime un signo de dólar (simple `$` alterna el modo matemático). |
| `\ barra invertida de texto` | Imprime una barra invertida en el texto. |
| `\textasciitilde` | Imprime una tilde en el texto (`~` desnudo es un espacio que no se separa). |
| `\textasciicircum` | Imprime un símbolo de intercalación en el texto (el `^` simple es un superíndice matemático). |
| `\barra de texto` | Imprime una barra vertical en el texto. |
| `\textless`, `\textgreater` | Imprima < y > correctamente en modo texto. |
| `\ldots`, `\puntos` | Elipsis con espaciado correcto; `\dots` se adapta en modo matemático (amsmath). |
| `\textellipsis` | Los puntos suspensivos en modo texto que `\dots` usa fuera de las matemáticas. |
| `\textemdash`, `\textendash` | Comandos con nombre para em y en dash (el mismo resultado que `---` y `--`). |
| `\textquotedblleft`, `\textquotedblright` | Comillas dobles rizadas (generalmente escritas como pares de comillas invertidas y pares de apóstrofes). |
| `\guillemetleft`, `\guillemetright` | Comillas angulares en francés (ortografía anterior: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Daga y doble daga en el texto, común para afiliaciones de autores. |
| `\S` | Signo de sección, como en S 2.1 de un documento legal. |
| `\P` | Signo de párrafo (pilcrow). |
| `\libras` | Signo de libra británica. |
| `\euro` | Signo de euro (paquete de sinónimos de euros; el núcleo también proporciona `\texteuro`). |
| `\ derechos de autor` | Signo de derechos de autor. |
| `\textregistered` | Signo de marca registrada. |
| `\texttrademark` | Signo de marca registrada. |
| `\textgrado` | Signo de grado: `25\textgrado C`. |
| `\textmu` | micro verticalfirmar para texto como micras. |
| `\textperthousand` | Signo por milla. |

## Acentos y letras especiales

Para acentos de texto de la era pdfLaTeX; con entrada XeLaTeX/LuaLaTeX y UTF-8 normalmente puedes simplemente escribir el carácter.

| Comando | Qué hace |
| --- | --- |
| `\'{e}` | Acento agudo: e-agudo como en café con acento. |
| `` \`{e} `` | Acento grave. |
| `\^{o}` | Acento circunflejo. |
| `\"{u}` | Diéresis/diéresis. |
| `\~{n}` | Acento tilde, como en español n-tilde. |
| `\c{c}` | Cedilla, como en francés c-cedilla. |
| `\v{s}` | Caron (hacek), común en nombres checos y croatas. |
| `\H{o}` | Doble acento agudo húngaro. |
| `\k{a}` | Ogonek, como en polaco a-ogonek. |
| `\b{o}` | Acento de barra debajo. |
| `\d{u}` | Acento de punto debajo, utilizado en transliteración. |
| `\r{a}` | Acento de anillo, como en el anillo en forma de A escandinavo. |
| `\u{o}` | Acento breve. |
| `\.{o}` | Acento de puntos. |
| `\t{oo}` | Detalle de lazo uniendo dos letras. |
| `\i`, `\j` | I y j sin puntos, para apilar acentos: `\'{\i}`. |
| `\ae`, `\AE` | La ligadura ae, minúsculas y mayúsculas. |
| `\oe`, `\Oe` | La ligadura oe, como en la obra francesa. |
| `\ss` | S sostenida alemana (eszett). |
| `\o`, `\O` | Cortado o, como en los nombres daneses y noruegos. |
| `\l`, `\L` | Polaco cortó l. |
| `\aa`, `\AA` | Anillo A como letra independiente, como en el nombre de Angstrom. |

## Fuentes y tamaños

| Comando | Qué hace |
| --- | --- |
| `\textbf{...}` | Texto en negrita. |
| `\textit{...}` | Texto en cursiva. |
| `\emph{...}` | Énfasis que se adapta al contexto: cursiva en texto vertical, vertical en texto cursiva. |
| `\textsc{...}` | Texto en minúsculas. |
| `\texttt{...}` | Texto de máquina de escribir (monoespaciado), bueno para código y nombres de archivos. |
| `\textrm{...}` | Texto familiar romano (serif). |
| `\textsf{...}` | Texto familiar sans-serif. |
| `\textmd{...}` | Peso medio (normal), deshaciendo negrita. |
| `\textup{...}` | Forma vertical, deshaciéndose en cursiva o inclinada. |
| `\textsl{...}` | Forma inclinada (oblicua), distinta de la cursiva verdadera. |
| `\textnormal{...}` | Restablece la fuente predeterminada del documento en un solo paso. |
| `\subrayado{...}` | Subraya el texto; Úselo con moderación, el énfasis suele ser `\ emph`. |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Declaraciones cambiando la familia de fuentes (serif, sans, mono) hasta que finalice el grupo. |
| `\bfseries`, `\mdseries` | Las declaraciones cambian a negrita o vuelven a peso medio. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Declaraciones que cambian de forma: cursiva, inclinada, versalitas, vertical. |
| `\fuente normal` | Declaración que restablece la familia, la serie y la forma a los valores predeterminados. |
| `\em` | Forma de declaración de `\emph`: `{\em así}`. |
| `\pequeño` | El más pequeño de los diez comandos de tamaño. |
| `\tamaño de script` | Segundo tamaño más pequeño, tamaño aproximadamente de subíndice. |
| `\pie de página` | El tamaño utilizado para las notas a pie de página. |
| `\pequeño` | Ligeramente más pequeño de lo normal. |
| `\tamaño normal` | El tamaño base del documento. |
| `\grande`, `\Grande`, `\LARGE` | Uno, dos y tres pasos más grandes de lo normal. |
| `\enorme`, `\enorme` | Los dos tamaños estándar más grandes. |
| `\fontsize{14}{17}\selectfont` | Establece un tamaño de fuente arbitrario y un salto de línea de base, luego lo activa. |
| `\selectfont` | Activa el atributo de fuente pendientecambios (NFSS). |
| `\textsuperscript{...}` | Texto pequeño en relieve, como en los marcadores de estilo 1.º o nota al pie. |
| `\textsubscript{...}` | Texto pequeño reducido en modo texto. |
| `\familiadefault` | Macro que contiene la familia de fuentes predeterminada; renovarlo para cambiar la fuente de todo el documento. |
| `\sfdefault` | Macro nombrando a la familia sans-serif; `\renewcommand{\familydefault}{\sfdefault}` hace que el documento sea sans. |
| `\setmainfont{...}` | Establece la fuente del cuerpo principal por nombre en XeLaTeX o LuaLaTeX (fontspec). |
| `\setsansfont{...}` | Establece la fuente sans-serif por nombre en XeLaTeX o LuaLaTeX (fontspec). |
| `\setmonofont{...}` | Establece la fuente monoespaciada por nombre en XeLaTeX o LuaLaTeX (fontspec). |

## Color (xcolor)

| Comando | Qué hace |
| --- | --- |
| `\textcolor{rojo}{...}` | Colorea un fragmento de texto. |
| `\color{azul}` | Formulario de declaración: colorea todo hasta finalizar el grupo. |
| `\definecolor{marca}{HTML}{2F6F4F}` | Define un color con nombre para su uso posterior. |
| `\pagecolor{gris!10}` | Establece el color de fondo de toda la página. |
| `\rowcolor{gris!20}` | Colorea una fila de la tabla (xcolor con la opción `table`, a través de colortbl). |
| `\cellcolor{gris!20}` | Colorea una celda de la tabla (colortbl). |
| `\rowcolors{2}{gris!10}{blanco}` | Colores de fila alternos comenzando en una fila determinada (opción xcolor `tabla`). |

## Gráficos (gráficox)

| Comando | Qué hace |
| --- | --- |
| `\includegraphics[ancho=\ancho de línea]{plot.pdf}` | Inserta un archivo de imagen; opciones clave: `ancho`, `alto`, `escala`, `ángulo`, `recortar`+`clip`, `página`. |
| `\graphicspath{{figuras/}}` | Le dice a LaTeX en qué carpetas buscar archivos de imágenes. |
| `\rotatebox[origen=c]{90}{...}` | Gira su contenido en un ángulo. |
| `\scalebox{0.8}{...}` | Escala su contenido por un factor. |
| `\resizebox{5cm}{!}{...}` | Cambia el tamaño del contenido a un ancho y/o alto objetivo; `!` mantiene la relación de aspecto. |
| `\reflectbox{...}` | Refleja su contenido horizontalmente. |
| `\includepdf[páginas=-]{papel.pdf}` | Inserta páginas enteras de otro PDF (páginas pdf). |

## Entrar en modo matemático

| Comando | Qué hace |
| --- | --- |
| `$...$` | Matemáticas en línea dentro de una oración. |
| `\(...\)` | Delimitadores matemáticos en línea oficiales de LaTeX, equivalentes a `$...$`. |
| `\[...\]` | Ecuación mostrada sin numerar en su propia línea. |
| `$$...$$` | Matemáticas de visualización TeX simple; no se recomienda en LaTeX, use `\[...\]` en su lugar. |
| `x^2`, `x_i` | `^` crea superíndices y `_` crea subíndices; llaves de scripts de varios caracteres: `x^{10}`. |

## Matemáticas: letras griegas

Todos estos funcionan sólo en modo matemático. Existen formas mayúsculas donde la capital griega difiere de la latina.

| Comando | Qué hace |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Letras griegas alfa, beta, gamma, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Letras griegas épsilon, zeta, eta, theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Letras griegas iota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Letras griegas xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Letras griegas upsilon, phi, chi, psi, omega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Letras griegas mayúsculas Gamma a Pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Letras griegas mayúsculas Sigma a Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Formas variantes de épsilon (la rizada que usan la mayoría de los artículos), theta y pi. |
| `\varrho` `\varsigma` `\varphi` | Formas variantes de rho, sigma (final de palabra) y phi (rizado abierto). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Variantes griegas en mayúsculas y cursivas (amsmath). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | El resto de variantes griegas en cursiva y mayúscula (amsmath). |

## Matemáticas: operadores binarios

| Comando | Qué hace |
| --- | --- |
| `\pm`, `\mp` | Signos más-menos y menos-más. |
| `\veces` | Cruz de multiplicación, también utilizada para dimensiones como 3 x 3. |
| `\div` | Signo de división (obelus). |
| `\cdot` | Punto centrado para la multiplicación. |
| `\ast`, `\star`, `\bullet`, `\circ` | Operadores de asterisco, estrella, bala y círculo pequeño; `\circ` también es composición de funciones. |
| `\oplus`, `\ominus` | Más encerrado en un círculo (suma directa, XOR) y menos encerrado en un círculo. |
| `\otimes`, `\oslash`, `\odot` | Tiempos en círculos (producto tensorial), barra en círculo, punto en círculo. |
| `\cuña`, `\vee` | Cuña (Y lógico, producto exterior) y V (O lógico, unión). |
| `\tierra`, `\lor` | Alias ​​de `\wedge` y `\vee` nombrados por su lectura lógica. |
| `\tapa`, `\taza` | Establecer señales de intersección y unión. |
| `\setminus` | Establecer barra invertida de diferencia: `A \setminus B`. |
| `\uplus` | Unión con signo más, para unión multiconjunto o disjunta. |
| `\sqcap`, `\sqcup` | Tapa cuadrada y copa, se encuentran y se unen en la teoría de la red. |
| `\amalga` | Fusión (producto al revés), utilizada para coproductos. |
| `\daga`, `\ddaga` | Daga y doble daga como operadores matemáticos, p. conjugar transponer `A^\dagger`. |
| `\bigtriangleup`, `\bigtriangledown` | Operadores triangulares, p.e. diferencia simétrica. |
| `\triangleleft`, `\triangleright` | Triángulos laterales, p.e. relación normal de subgrupo. |

## Matemáticas: relaciones

| Comando | Qué hace |
| --- | --- |
| `\leq`, `\le` | Signo menor o igual (`\le` es el alias corto). |
| `\geq`, `\ge` | Signo mayor o igual (`\ge` es el alias corto). |
| `\neq`, `\ne` | Signo distinto de igual (`\ne` es el alias corto). |
| `\ll`, `\gg` | Signos mucho menor que y mucho mayor que. |
| `\aprox` | Signo aproximadamente igual. |
| `\sim` | Relación de tilde, leída como 'se distribuye como' o 'es similar a'. |
| `\simeq` | Signo asintóticamente igual (tilde sobre igual). |
| `\cong` | Signo congruente (tilde sobre dos barras), utilizado para isomorfismo. |
| `\equiv` | Signo idéntico a (triple barra), también utilizado para congruencia. |
| `\propto` | Signo proporcional. |
| `\asymp` | Relación asintóticamente equivalente (curvas apiladas). |
| `\doteq` | Signo igual con un punto, leído como "se acerca" o "se define como". |
| `\prec`, `\succ` | Precede y sucede a relaciones, ordenamientos curvos. |
| `\preceq`, `\succeq` | Precede-o-igual y sucede-o-igual. |
| `\subset`, `\subseteq` | Signos propios de subconjunto y subconjunto o igual. |
| `\supset`, `\supseteq` | Signos adecuados de superconjunto y superconjunto o igual. |
| `\sqsubseteq`, `\sqsupseteq` | Relaciones de subconjunto y superconjunto cuadrado, utilizadas para el orden de la información. |
| `\en`, `\notin` | Establecer membresía y su negación: `x \in A`. |
| `\ni` | Pertenencia invertida: el conjunto contiene el elemento. |
| `\vdash`, `\dashv` | Torniquete 'prueba' y su reverso. |
| `\modelos` | Torniquete doble, vinculación semántica. |
| `\perp` | Relación perpendicular/independencia. |
| `\paralelo` | Relación de barras paralelas. |
| `\medio` | Barra vertical con espaciado de relaciones, como en la notación de creación de conjuntos o 'divisiones'. |
| `\no` | Niega la siguiente relación sobreimprimiendo una barra diagonal: `\not\subset`. |

## Matemáticas: flechas

| Comando | Qué hace |
| --- | --- |
| `\a`, `\rightarrow` | Flecha hacia la derecha, como en los tipos de función `f: A \to B` y límites `x \to 0`. |
| `\gets`, `\leftarrow` | Flecha izquierda, también utilizada para asignaciones en pseudocódigo. |
| `\flecha izquierda derecha` | Una sola flecha de dos puntas. |
| `\Flecha derecha` | Doble flecha hacia la derecha, leída como 'implica'. |
| `\Flecha izquierda` | Doble flecha hacia la izquierda, que se lee como "está implícito en". |
| `\Flechaizquierdaderecha` | Flecha doble de dos puntas, leída como 'si y sólo si'. |
| `\implica`, `\impliedby` | `\Rightarrow` y `\Leftarrow` espaciados para lógica (amsmath). |
| `\iff` | `\Leftrightarrow` espaciado para 'si y solo si'. |
| `\mapsto` | Flecha de asignación con cola de barra: `x \mapsto x^2`. |
| `\longmapsto` | Versión larga de `\mapsto`. |
| `\hookrightarrow` | Flecha derecha con cola de gancho, para inclusiones/incrustaciones. |
| `\rightharpoonup` | Arpón derecho (media flecha), utilizado para convergencia débil. |
| `\rightleftharpoons` | Arpones opuestos emparejados, como en el equilibrio químico. |
| `\lleva a` | Flecha ondulada hacia la derecha, 'conduce a' (amssymb). |
| `\flecha arriba`, `\flecha abajo` | Flechas hacia arriba y hacia abajo. |
| `\arribaabajo` | Flecha vertical de dos puntas. |
| `\Flecha arriba`, `\Flecha abajo`, `\Flecha arriba` | Flechas verticales de doble línea. |
| `\narrow`, `\searrow` | Flechas diagonales noreste y sureste, p.e. aumentando/disminuyendo hasta un límite. |
| `\swarrow`, `\nwarrow` | Flechas diagonales suroeste y noroeste. |
| `\longrightarrow`, `\longleftarrow` | Flechas largas y simples. |
| `\Longrightarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Flechas dobles largas. |
| `\xrightarrow{f}` | Flecha derecha extensible con una etiqueta en la parte superior, que crece para adaptarse (amsmath). |
| `\xleftarrow{f}` | Flecha izquierda extensible con una etiqueta en la parte superior (amsmath). |

## Matemáticas: grandes operadores

| Comando | Qué hace |
| --- | --- |
| `\sum_{i=1}^{n}` | Signo de suma con límites. |
| `\prod_{i=1}^{n}` | Signo de producto con límites. |
| `\coprod` | Signo de coproducto (producto al revés). |
| `\int_0^1` | Signo integral con límites. |
| `\iint` | Doble signo integral (amsmath). |
| `\iiint` | Signo integral triple (amsmath). |
| `\punto` | Signo integral de contorno (bucle cerrado). |
| `\bigcap`, `\bigcup` | Gran intersección y unión sobre una familia de conjuntos. |
| `\bigsqcup` | Copa cuadrada grande (unión desunida). |
| `\bigvee`, `\bigwedge` | OR grande y AND grande sobre un conjunto de índices. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Un signo más, tiempos y puntos con círculos grandes para sumas indexadas y productos de estructuras. |
| `\biguplus` | Gran unión con plus sobre un conjunto de índices. |
| `\límites` | Fuerza los subíndices/superíndices del siguiente operador arriba y abajo: `\int\limits_0^1`. |
| `\sin límites` | Fuerza los subíndices/superíndices hacia un lado en lugar de arriba y abajo. |

## Matemáticas: delimitadores y tamaño

| Comando | Qué hace |
| --- | --- |
| `\izquierda(...\derecha)` | Par delimitador de tamaño automático que crece para adaptarse a su contenido. |
| `\izquierda.` y `\derecha.` | Compañero invisible cuando solo se desea un lado de un par de tamaño, como en las barras de evaluación. |
| `\medio|` | Delimitador medio de tamaño automático entre `\left` y `\right` (como en probabilidad condicional). |
| `\big( \Big( \bigg( \Bigg(` | Delimitadores de tamaño manual, desde ligeramente grandes hasta muy grandes. |
| `\bigl(...\bigr)` | Delimitadores de tamaño con espaciado correcto de apertura/cierre (también `\Bigl`, `\biggl`, `\Biggl`). |
| `\lfloor`, `\rfloor` | Soportes de suelo. |
| `\lceil`, `\rceil` | Soportes de techo. |
| `\langle`, `\rangle` | Delimitadores de corchetes de ángulo izquierdo y derecho. |
| `\|` | Delimitador de doble barra vertical (barras normalizadas). |
| `\lvert`, `\rvert` | Barras de valor absoluto con espaciado delimitador correcto (amsmath). |
| `\lVert`, `\rVert` | Barras dobles para normas, con espaciado delimitador correcto (amsmath). |
| `\barra invertida` | Barra invertida como símbolo matemático o delimitador. |

## Matemáticas: acentos y decoraciones

| Comando | Qué hace |
| --- | --- |
| `\sombrero{x}` | Detalle de sombrero pequeño sobre un símbolo. |
| `\verificar{x}` | Acento de Caron (sombrero invertido). |
| `\breve{x}` | Acento breve (redondeado). |
| `\acute{x}`, `\grave{x}` | Acentos agudos y graves en matemáticas. |
| `\tilde{x}` | Acento de tilde sobre un símbolo. |
| `\bar{x}` | Barra corta sobre un símbolo. |
| `\vec{v}` | Pequeña flecha sobre un símbolo. |
| `\punto{x}`, `\ddot{x}` | Uno o dos puntos sobre un símbolo, común para las derivadas del tiempo. |
| `\dddot{x}` | Tres puntos sobre un símbolo (amsmath). |
| `\mathring{x}` | Acento de anillo sobre un símbolo. |
| `\widehat{abc}` | Sombrero ancho que se extiende sobre varios símbolos. |
| `\widetilde{abc}` | Amplia tilde que se extiende sobre varios símbolos. |
| `\overrightarrow{AB}` | Estirar la flecha derecha sobre una expresión, como en los vectores de A a B. |
| `\overleftarrow{AB}` | Estirando la flecha izquierda sobre una expresión. |
| `\overline{x + y}` | Línea sobre una expresión completa. |
| `\subrayado{x + y}` | Línea debajo de una expresión completa (también funciona en texto). |
| `\overbrace{...}^{n}` | Llave horizontal encima de una expresión, con una etiqueta opcional en la parte superior. |
| `\underbrace{...}_{n}` | Llave horizontal debajo de una expresión, con una etiqueta opcional debajo. |
| `\overset{!}{=}` | Coloca un símbolo encima de otro, p.e. 'debe ser igual' (amsmath). |
| `\underset{i}{\max}` | Coloca un símbolo debajo de otro (amsmath). |
| `\stackrel{\text{def}}{=}` | Comando del kernel anterior que apila un símbolo sobre una relación. |
| `\boldsymbol{\beta}` | Matemáticas en negrita que también ponen en negrita letras y símbolos griegos (amsmath). |
| `\prime` | Símbolo principal; `x'` es la abreviatura habitual de `x^{\prime}`. |

## Matemáticas: operadores tipo registro

Todo tipográfico en posición vertical con el espaciado correcto; los que toman límites colocan subíndices debajo en la visualización matemática.

| Comando | Qué hace |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | Las funciones trigonométricas básicas. |
| `\sec`, `\csc` | Secante y cosecante. |
| `\arcsin`, `\arccos`, `\arctan` | Funciones trigonométricas inversas. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Funciones hiperbólicas. |
| `\exp`, `\ln`, `\log`, `\lg` | Exponenciales y logaritmos (`\lg` es log en base 2 o 10 por convención). |
| `\det`, `\dim`, `\ker`, `\deg` | Determinante, dimensión, núcleo, grado. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Máximo común divisor, hom-sets, argumento complejo, probabilidad. |
| `\lim_{x\a 0}` | Operador de límite, en posición vertical con el subíndice a continuación en la pantalla matemática. |
| `\limsup`, `\liminf` | Limitar superior e inferior. |
| `\inf`, `\sup` | Operadores ínfimo y supremo, tipográficos en posición vertical. |
| `\min`, `\max` | Operadores mínimo y máximo, escritos en posición vertical con límites a continuación en matemáticas de visualización. |
| `\bmod` | Operador mod binario con espaciado entre operadores: `a \bmod n`. |
| `\pmod{n}` | Final entre paréntesis '(mod n)'. |
| `\mod{n}` | Al final de 'mod n' sin paréntesis (amsmath). |
| `\nombreoperador{lcm}` | Nombre de operador vertical único sin declaración de preámbulo (amsmath). |
| `\nombredeloperador*{ess\,sup}` | Operador único que toma límites inferiores (amsmath). |

## Matemáticas: fracciones, binomios y apilamiento

| Comando | Qué hace |
| --- | --- |
| `\frac{a}{b}` | Fracción apilada: numerador sobre denominador. |
| `\dfrac{a}{b}` | Fracción forzada al tamaño de visualización completo, incluso en línea (amsmath). |
| `\tfrac{a}{b}` | Fracción forzada a un tamaño pequeño en línea, incluso en matemáticas de visualización (amsmath). |
| `\cfrac{a}{b}` | Fracción continua con niveles anidados de tamaño completo (amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Raíz cuadrada; el argumento opcional da una raíz enésima. |
| `\binom{n}{k}` | Coeficiente binomial entre paréntesis (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Binomios forzados de tamaño de visualización y tamaño de texto (amsmath). |
| `{n \elegir k}` | Primitiva binomial TeX simple; no se recomienda en LaTeX, utilice `\binom`. |
| `{a \sobre b}` | Primitiva de fracción TeX simple; desaconsejado en LaTeX, use `\frac`. |
| `{a \ encima de b}` | Primitiva de apilamiento TeX simple sin barra; no se recomienda utilizar `\substack` o `\genfrac`. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | Generador de fracciones generales detrás de `\frac`, `\binom` y amigos (amsmath). |
| `\substack{i < n \\ j < m}` | Subíndice de varias líneas bajo un operador grande (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Adjunta índices a las cuatro esquinas de un operador grande (amsmath). |
| `\prescript{a}{b}{X}` | Superíndices/subíndices de la izquierda, como en la notación de isótopos (mathtools). |

## Matemáticas: espaciado y estilos

| Comando | Qué hace |
| --- | --- |
| `\,` | Espacio matemático delgado, como entre un número y su unidad. |
| `\:` | Espacio matemático medio. |
| `\;` | Espacio matemático denso. |
| `\!` | Espacio delgado negativo, acercando los símbolos. |
| `\quad`, `\qquad` | Espacios de uno y dos em, en matemáticas o texto. |
| `\displaystyle` | Fuerza el tamaño matemático de visualización completo, p. Grandes límites dentro de las matemáticas en línea. |
| `\estilo de texto` | Fuerza el tamaño de las matemáticas en línea dentro de las matemáticas de visualización. |
| `\scriptstyle`, `\scriptscriptstyle` | Forzar el tamaño de subíndice y subíndice. |

## Matemáticas: letras, alfabetos y símbolos varios

| Comando | Qué hace |
| --- | --- |
| `\mathbb{R}` | Letras en negrita de pizarra para conjuntos de números (amssymb). |
| `\mathbf{x}` | Letras verticales en negrita en matemáticas, comunes para vectores y matrices. |
| `\mathcal{L}` | Letras mayúsculas caligráficas, p. una pérdida o lagrangiana. |
| `\mathfrak{g}` | Letras Fraktur, utilizadas en álgebra y lógica. |
| `\mathscr{F}` | Escritura de letras mayúsculas, más rizadas que `\mathcal` (mathrsfs). |
| `\mathrm{d}x` | Letras verticales (romanas) en matemáticas, para unidades y nombres de varias letras. |
| `\mathit{diff}` | Identificador de varias letras en cursiva con espaciado similar a una palabra. |
| `\mathsf{T}`, `\mathtt{x}` | Letras sans-serif y de máquina de escribir en matemáticas. |
| `\bm{\beta}` | Símbolos matemáticos en negrita, una alternativa a `\boldsymbol` (paquete bm). |
| `\text{si } x > 0` | Texto vertical normal dentro de matemáticas con el espacio adecuado (amsmath). |
| `\infty` | Signo de infinito. |
| `\parcial` | Signo de derivada parcial (d rizada). |
| `\nabla` | Operador Nabla (del) para gradientes y divergencias. |
| `\hbar` | Constante de Planck reducida, h con una barra. |
| `\ell` | Escritura l minúscula, utilizada para evitar confusiones con el dígito 1. |
| `\wp` | Weierstrass pág. |
| `\Re`, `\Estoy` | Símbolos de partes reales e imaginarias (Fraktur R e I). |
| `\alef` | Aleph, por infinitos cardenales. |
| `\emptyset` | Signo de conjunto vacío. |
| `\varnada` | Variante de conjunto vacío más redondeada que muchos autores prefieren (amssymb). |
| `\ángulo` | Símbolo de ángulo. |
| `\ángulo medido` | Símbolo de ángulo medido con un arco (amssymb). |
| `\triángulo` | Símbolo del triángulo. |
| `\cuadrado`, `\cuadradonegro` | Cuadrados abiertos y llenos; el lleno a menudo termina pruebas (amssymb). |
| `\diamante`, `\pastilla` | Pequeño operador de diamantes; símbolo de rombo (amssymb para este último). |
| `\arriba`, `\bot` | Símbolos superior (verdadero) e inferior (falso/indefinido). |
| `\forall`, `\existe` | Universal ('para todos')y cuantificadores existenciales ("existe"). |
| `\nexiste` | Cuantificador existencial negado (amssymb). |
| `\neg` | Signo NO lógico. |
| `\por lo tanto`, `\porque` | Signos de tres puntos "por lo tanto" y "porque" (amssymb). |
| `\plano`, `\natural`, `\nido` | Accidentes musicales, también utilizados en notación matemática. |
| `\surd` | Símbolo radical desnudo sin argumento. |
| `\marca de verificación` | Marca de verificación (amssymb). |
| `\cdots` | Puntos centrados, entre operadores: `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Puntos verticales y diagonales, principalmente en matrices. |
| `\puntosb`, `\puntosc` | Puntos semánticos: entre operadores binarios y entre comas (amsmath). |

## herramientas de visualización amsmath y mathtools

| Comando | Qué hace |
| --- | --- |
| `\etiqueta{...}` | Reemplaza el número de ecuación automática con tu propia etiqueta (amsmath). |
| `\etiqueta*{...}` | Como `\tag` pero sin los paréntesis que lo rodean (amsmath). |
| `\notag` | Suprime el número de ecuación en una línea de un entorno numerado (amsmath). |
| `\sinnúmero` | Sinónimo anterior de `\notag`. |
| `\numberwithin{ecuación}{sección}` | Ecuaciones numéricas por sección: (2.1), (2.2) (amsmath). |
| `\intertext{...}` | Interrumpe un bloque de alineación con una línea de texto de ancho completo, manteniendo la alineación (amsmath). |
| `\shortintertext{...}` | Como `\intertext` con menos espacio vertical (mathtools). |
| `\allowdisplaybreaks` | Permite que las visualizaciones de varias líneas se divida entre páginas (amsmath). |
| `\displaybreak` | Solicita un salto de página en este punto de una visualización (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Permite que los límites amplios del operador sobresalgan para que no separe el contenido (mathtools). |
| `\mathclap{...}` | Contenido matemático de ancho cero, para subíndices/sobrescritos amplios (mathtools). |
| `\coloneqq` | Signo de definición de dos puntos iguales: = con el espaciado correcto (mathtools). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Define una macro delimitadora con un formulario de tamaño automático destacado (mathtools). |
| `\eqref{eq:pérdida}` | Imprime un número de ecuación con sus paréntesis (amsmath). |
| `\qedaquí` | Mueve el cuadrado de fin de prueba a la línea actual, p.e. después de una ecuación mostrada (amsthm). |

## Entornos matemáticos

| Medio ambiente | Qué hace |
| --- | --- |
| `ecuación` | Una ecuación numerada mostrada. |
| `ecuación*` | Una ecuación mostrada y sin numerar (amsmath). |
| `alinear` | Múltiples ecuaciones mostradas alineadas en marcas `&`, cada una numerada (amsmath). |
| `alinear*` | Ecuaciones alineadas sin números (amsmath). |
| `reunir` | Múltiples ecuaciones centradas sin alineación, cada una numerada (amsmath). |
| `alinear` | Ecuaciones alineadas con espaciado entre columnas controlado manualmente (amsmath). |
| `flaligar` | Ecuaciones alineadas empujadas hacia los márgenes izquierdo y derecho (amsmath). |
| `dividir` | Divide una ecuación larga en líneas alineadas bajo un solo número, dentro de la "ecuación" (amsmath). |
| `multilínea` | Una ecuación larga dividida en líneas: primera línea a la izquierda, última línea a la derecha (amsmath). |
| `alineados`, `reunidos` | Versiones de bloques de construcción de align/gather utilizables dentro de otra pantalla (amsmath). |
| `subecuaciones` | Numera las ecuaciones internas como 1a, 1b, 1c (amsmath). |
| `casos` | Distinciones de casos agrupadas entre llaves, como en funciones por partes (amsmath). |
| `dcasos` | `casos` con entradas de estilo de visualización para que las fracciones permanezcan en tamaño completo (mathtools). |
| `matriz` | Matriz desnuda sin delimitadores (amsmath). |
| `pmatriz` | Matriz entre paréntesis (amsmath). |
| `bmatriz` | Matriz entre corchetes (amsmath). |
| `Bmatriz` | Matriz envuelta entre llaves (amsmath). |
| `matriz` | Matriz envuelta en barras verticales, notación determinante estándar (amsmath). |
| `Vmatriz` | Matriz envuelta en barras dobles (amsmath). |
| `pequeña matriz` | Tamaño de matriz compacto para uso en línea (amsmath). |
| `matriz` | Cuadrícula en modo matemático con alineación por columna, el primo matemático de "tabular". |
| `eqnarray` | Antiguo entorno de ecuaciones de tres columnas; No se recomienda, su espaciado es incorrecto, use "alinear". |

## Referencias cruzadas y enlaces

| Comando | Qué hace |
| --- | --- |
| `\label{fig:configuración}` | Nombra un lugar (ecuación, figura, sección) para que puedas consultarlo. |
| `\ref{fig:configuración}` | Imprime el número de un artículo etiquetado. |
| `\pageref{fig:configuración}` | Imprime el número de página donde se encuentra la etiqueta. |
| `\cref{fig:configuración}` | Imprime el número Y su nombre de tipo automáticamente: 'fig. 1' (inteligente). |
| `\Cref{fig:configuración}` | `\cref` en mayúscula para el inicio de una oración: 'Figura 1' (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Imprime un rango: 'eqs. 1 a 4' (cleveref). |
| `\labelcref{fig:configuración}` | Imprime solo el número de etiqueta en estilo Cleveref, sin el nombre del tipo (cleveref). |
| `\vref{fig:configuración}` | Referencia más una frase automática 'en la página siguiente' cuando sea necesario (varioref). |
| `\autoref{fig:configuración}` | Referencia mecanografiada de Hyperref: 'Figura 1', con la frase completa vinculada. |
| `\nameref{sec:introducción}` | Imprime el texto del título de la sección referenciada (hiperreferencia). |
| `\href{https://example.com}{texto del enlace}` | Crea un enlace en el que se puede hacer clic con texto personalizado (hiperreferencia). |
| `\url{https://ejemplo.com}` | Escribe una URL en tipo de máquina de escribir y hace que se pueda hacer clic en ella. |
| `\hyperref[sec:intro]{esa sección}` | Crea un enlace de texto arbitrario a una etiqueta (hiperreferencia). |
| `\hypertarget{punto}{...}` | Crea un destino de enlace con nombre en cualquier parte del documento (hiperreferencia). |
| `\hipervínculo{lugar}{texto}` | Enlaces a un `\hypertarget` (hyperref). |
| `\sección fantasma` | Crea un ancla para que los enlaces a encabezados no numerados lleguen al lugar correcto (hiperreferencia). |
| `\texorpdfstring{$\alpha$}{alpha}` | Ofrece una alternativa de texto sin formato para matemáticas en los títulos, de modo que los marcadores de PDF sigan siendo válidos (hiperreferencia). |
| `\pdfbookmark[1]{Título}{nombre}` | Agrega una entrada de marcador PDF manual (hiperreferencia). |

## Citas y bibliografía

| Comando | Qué hace |
| --- | --- |
| `\citar{knuth1984}` | Cita una entrada de bibliografía por clave. |
| `\nocite{clave}` | Agrega una entrada a la bibliografía sin citarla en el texto; `\nocite{*}` agrega todo. |
| `\citep{knuth1984}` | Cita entre paréntesis '(Knuth, 1984)' en estilo natbib autor-año. |
| `\citet{knuth1984}` | Cita textual 'Knuth (1984)' en estilo natbib autor-año. |
| `\citeauthor{knuth1984}` | Imprime solo los nombres de los autores (natbib y biblatex). |
| `\citeyear{knuth1984}` | Imprime sólo el año (natbib y biblatex). |
| `\citealp{knuth1984}` | Cita entre paréntesis de natbib sin paréntesis, para crear la tuya propia. |
| `\citealt{knuth1984}` | Cita textual de natbib sin paréntesis alrededor del año. |
| `\parencita{knuth1984}` | Cita entre paréntesis de biblatex, el análogo de `\citep`. |
| `\textcite{knuth1984}` | cita textual de biblatex, el análogo de `\citet`. |
| `\autocite{knuth1984}` | Cita biblatex que sigue la forma preferida del estilo (paréntesis, nota al pie, etc.). |
| `\footcite{knuth1984}` | Cita biblatex colocada en una nota al pie. |
| `\fullcita{knuth1984}` | Imprime el texto completo de la bibliografía de la entrada en línea (biblatex). |
| `\citetitle{knuth1984}` | Imprime el título de la obra (biblatex). |
| `\bibliografía{refs}` | BibTeX: imprime la lista de referencias desde un archivo .bib. |
| `\bibliographystyle{plainnat}` | BibTeX: elige el formato de referencia; Los estilos clásicos incluyen Plain, Unsrt, Alpha, Abbrv, Ieeetr, Acm y Apalike. |
| `\addbibresource{refs.bib}` | biblatex: registra un archivo .bib en el preámbulo. |
| `\printbibliografía` | biblatex: imprime la lista de referencias donde lo colocas. |
| `\bibitem{clave}` | Una entrada manuscrita dentro de un entorno "thebibliography". |
| `labibliografía` (medio ambiente) | Escritolista de referencia utilizada cuando se omite BibTeX por completo. |

## Flotadores, figuras y tablas

| Comando o entorno | Qué hace |
| --- | --- |
| `figura` (entorno) | Contenedor flotante para una imagen más título; LaTeX elige la posición final. |
| `figura*` (entorno) | Figura que abarca ambas columnas en un documento de dos columnas. |
| `mesa` (entorno) | Contenedor flotante para un título tabular plus; LaTeX elige la posición final. |
| `tabla*` (entorno) | Tabla que abarca ambas columnas en un documento de dos columnas. |
| `\begin{figura}[htbp]` | Sugerencias de ubicación: aquí, arriba, abajo, página propia; `!` relaja las reglas, `[H]` (paquete flotante) significa exactamente aquí. |
| `tabular` (medio ambiente) | La cuadrícula real de filas y columnas: celdas divididas por `&`, las filas terminan con `\\`. |
| `tabular*` (entorno) | Tabular estirado hasta un ancho total especificado. |
| `tabularx` (medio ambiente) | Tabla de ancho fijo cuyas columnas `X` comparten el espacio sobrante (tabularx). |
| `matriz` (entorno) | Cuadrícula en modo matemático con alineación por columna. |
| `longtable` (medio ambiente) | Tabla que puede dividirse en páginas, con encabezados repetidos (longtable). |
| `minipágina` (entorno) | Minipágina de ancho fijo dentro de la página, utilizada para colocar contenido uno al lado del otro. |
| `subfigura` (entorno) | Un subpanel con su propio título, como (a) y (b), dentro de una figura (subtítulo). |
| `wrapfigure` (entorno) | Figura con texto en el cuerpo envolviéndola (wrapfig). |
| `sidewaysfigure`, `sidewaystable` (entornos) | Los flotadores giraron 90 grados sobre su propia página (girando). |
| `paisaje` (medio ambiente) | Gira páginas enteras a horizontal, con la página PDF rotada automáticamente (pdflscape). |
| `tres partes` (medio ambiente) | Envuelve una tabla para que las notas al pie se alineen con el ancho de la tabla (tabla de tres partes). |
| `tablenotes` (medio ambiente) | La lista de notas bajo una tabla de tres partes, marcada con `\tnote{a}`. |
| `adjustbox` (entornoy `\adjustbox`) | Escala, cambia el tamaño o recorta cualquier contenido con opciones de valor clave (cuadro de ajuste). |
| `\caption{...}` | Agrega un título numerado a una figura o tabla; ponga `\label` después. |
| `\caption*{...}` | Título sin número ni entrada de lista (paquete de subtítulos). |
| `\captionsetup{...}` | Configura las fuentes, las etiquetas y el espaciado de los subtítulos (paquete de subtítulos). |
| `\toprule` | Regla pesada en la parte superior de una mesa de libretas. |
| `\ regla intermedia` | Regla media entre el encabezado y el cuerpo de una tabla booktabs. |
| `\ regla inferior` | Regla pesada en la parte inferior de una mesa de libretas. |
| `\cmidrule(lr){2-3}` | Regla parcial que abarca columnas seleccionadas (pestañas de libros). |
| `\addlinespace` | Pequeño espacio vertical adicional entre las filas de las pestañas, en lugar de una regla. |
| `\hline` | Línea horizontal de ancho completo en una tabla simple; Las reglas de las pestañas de libros suelen verse mejor. |
| `\clina{2-3}` | Línea horizontal que abarca las columnas seleccionadas en una tabla simple. |
| `\vlínea` | Línea vertical en este punto de una fila de la tabla; Los especificadores de columna `|` son de la forma habitual. |
| `\multicolumn{2}{c}{Encabezado}` | Combina celdas en columnas en una fila. |
| `\multirow{2}{*}{Etiqueta}` | Fusiona celdas verticalmente entre filas (varias filas). |
| `\arraystretch` | Factor para la altura de la fila de la tabla; establecido con `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Longitud del relleno a cada lado de una columna tabular. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Define un especificador de columna reutilizable (paquete de matriz). |
| `\endfirsthead` | tabla larga: marca el final del encabezado que se muestra solo en la primera página. |
| `\endhead` | tabla larga: marca el final del encabezado que se repite en cada página siguiente. |
| `\endfoot` | longtable: marca el final del pie de página que se muestra en cada salto de página. |
| `\endlastfoot` | longtable: marca el final del pie de página que se muestra solo al final. |
|`\FloatBarrier` | Detiene los flotadores que pasan por este punto (placeins). |

## Notas al pie

| Comando | Qué hace |
| --- | --- |
| `\nota al pie{...}` | Coloca una nota al final de la página, marcada con un número automático. |
| `\nota al pie` | Imprime solo el marcador de nota al pie, para lugares donde no se permite `\footnote`. |
| `\footnotetext{...}` | Proporciona el texto de una `\footnotemark` anterior. |

## Teoremas y demostraciones

| Comando o entorno | Qué hace |
| --- | --- |
| `\nuevoteorema{lema}{Lema}` | Declara un entorno similar a un teorema (amsthm). |
| `\newtheorem*{observación}{Observación}` | Declara un entorno tipo teorema sin numerar (amsthm). |
| `\theoremstyle{definición}` | Establece el aspecto (simple, definición, comentario) para las siguientes declaraciones `\newtheorem` (amsthm). |
| `teorema` (entorno) | Bloque de teorema numerado, creado por `\newtheorem{theorem}{Theorem}`. |
| `prueba` (medio ambiente) | Bloque de prueba que imprime 'Prueba'. y termina con el cuadrado QED (amsthm). |

## Texto palabra por palabra, código y listados

| Comando o entorno | Qué hace |
| --- | --- |
| `\verbo|código|` | En línea palabra por palabra: imprime exactamente lo que escribe, delimitado por cualquier carácter repetido. |
| `textalmente` (medio ambiente) | Bloque de texto impreso exactamente como se escribió, en fuente de máquina de escribir. |
| `\verbatiminput{archivo.txt}` | Imprime un archivo completo palabra por palabra (paquete palabra por palabra). |
| `lstlisting` (entorno) | Listado de código fuente con resaltado de sintaxis opcional (listados). |
| `\lstinline|código|` | Fragmento de código en línea en estilo de listados (listados). |
| `\lstset{idioma=Python}` | Configura los valores predeterminados de los listados: idioma, numeración, colores (listados). |
| `\lstinputlisting{script.py}` | Escribe un archivo fuente completo como un listado (listados). |
| `acuñado` (medio ambiente) | Bloques de código resaltados basados ​​en pigmentos; necesita `-shell-escape` en el momento de la compilación (acuñado). |
| `\mintinline{python}|código|` | Código resaltado en línea (acuñado). |

## Beamer (diapositivas)

| Comando o entorno | Qué hace |
| --- | --- |
| `frame` (entorno) | Una diapositiva de Beamer: `\begin{frame}{Título de la diapositiva} ... \end{frame}`. |
| `\marco{...}` | Formulario de diapositiva de un solo comando de Beamer; el entorno "frame" es la forma habitual. |
| `\frametitle{...}` | Establece el título de la diapositiva desde dentro de un marco. |
| `\framesubtitle{...}` | Establece un subtítulo más pequeño debajo del título del marco. |
| `\página de título` | Beamer: dentro de un marco, imprime la diapositiva del título a partir de los metadatos del título. |
| `\tableofcontents[sección actual]` | Diapositiva de esquema que resalta la sección en la que se encuentra. |
| `\pausa` | Beamer: revela el resto del fotograma en el siguiente paso de diapositiva. |
| `\onslide<2->` | El contenido aparece a partir de un paso de superposición determinado. |
| `\sólo<2>{...}` | El contenido existe sólo en los pasos dados y no ocupa espacio en otros lugares. |
| `\descubrir<2->{...}` | El contenido es invisible ante su paso pero siempre reserva su espacio. |
| `\visible<2->{...}`, `\invisible<2>{...}` | Muestre u oculte contenido en pasos determinados sin cambiar el diseño. |
| `\alerta{...}` | Resalta el texto en el color de alerta del tema, generalmente rojo. |
| `bloque` (entorno) | Cuadro titulado en el color estándar del tema. |
| `alertblock` (entorno) | Cuadro titulado en el color de alerta, para advertencias o puntos clave. |
| `bloque de ejemplo` (entorno) | Cuadro titulado en el color del ejemplo, normalmente verde. |
| `columnas` (entorno) y `\column{0.5\textwidth}` | Regiones de diseño una al lado de la otra en una diapositiva. |
| `\usetheme{Madrid}` | Beamer: elige el tema de la presentación en el preámbulo. |
| `\usecolortheme{caballo de mar}` | Cambia solo la paleta de colores del tema. |
| `\usefonttheme{serif}` | Intercambia sólo las opciones de fuente del tema. |
| `\setbeamertemplate{símbolos de navegación}{}` | Anula un elemento del tema, aquí eliminando los íconos de navegación. |
|`\setbeamercolor{título}{fg=negro}` | Anula un color de tema. |
| `\nota{...}` | Notas del orador adjuntas a un marco, que se muestran solo en la salida de notas. |

## TikZ y diagramas

| Comando o entorno | Qué hace |
| --- | --- |
| `tikzpicture` (medio ambiente) | Lienzo para dibujos de TikZ; todos los comandos `\draw` y `\node` van dentro de él. |
| `\tikz` | Imagen en línea de una sola vez: `\tikz \draw (0,0) círculo (2pt);`. |
| `\ dibujar (0,0) -- (1,1);` | Comando de ruta TikZ que dibuja líneas y formas; opciones como `[grueso, rojo, ->]` le dan estilo. |
| `\rellenar` | Comando de ruta TikZ que rellena una forma en lugar de acariciarla. |
| `\filldraw` | Comando de ruta TikZ que rellena y delinea una forma. |
| `\sombra` | Comando de ruta TikZ que se rellena con un degradado. |
| `\clip` | Camino TikZ que restringe todo dibujo posterior a su interior. |
| `\ruta` | Ruta TikZ que calcula coordenadas sin dibujar, p. para colocar nodos. |
| `\nodo en (0,0) {etiqueta};` | Comando TikZ que coloca texto o formas en coordenadas. |
| `\coordenada (a) en (1,2);` | Nombra un punto para su reutilización en rutas posteriores. |
| `\foreach \i en {1,...,5}` | Bucle que repite el código de dibujo sobre una lista (TikZ/pgffor). |
| `\tikzset{miestilo/.style={...}}` | Define estilos TikZ reutilizables de forma moderna. |
| `\tikzstyle` | Sintaxis de definición de estilo antiguo; en desuso, utilice `\tikzset`. |
| `\usetikzlibrary{posicionamiento}` | Carga funciones adicionales de TikZ en el preámbulo. |
| `\matriz` (TikZ) | Disposición de nodos alineados con la cuadrícula dentro de una imagen tikz. |
| `tikzcd` (medio ambiente) | Cuadrícula para diagramas conmutativos; celdas divididas por `&` (tikz-cd). |
| `\flecha[r, "f"]` | Dibuja una flecha entre las celdas en un diagrama conmutativo de tikz-cd. |

## Unidades (siunitx)

| Comando | Qué hace |
| --- | --- |
| `\núm{12345.678}` | Da formato a un número con la agrupación de dígitos y marcadores decimales adecuados. |
| `\cantidad{9,8}{\metro\por\segundo\cuadrado}` | Número con unidad, correctamente espaciado (nombre siunitx v3). |
| `\unidad{\kilo\gramo}` | Unidad sola (nombre siunitx v3). |
| `\SI{9.8}{\metro\por\segundo\cuadrado}` | v2 nombre de `\cantidad`; todavía se ve ampliamente en los periódicos. |
| `\si{\kilo\gramo}` | v2 nombre de `\unidad`. |
| `\sisetup{...}` | Configuración global de siunitx. |
| `\DeclareSIUnit{\parsec}{pc}` | Define una unidad personalizada (siunitx). |

## Glosarios y siglas

| Comando | Qué hace |
| --- | --- |
| `\gls{svm}` | Imprime una entrada de glosario o acrónimo y la expande cuando se usa por primera vez (glosarios). |
| `\Gls{svm}` | Forma en mayúscula para inicios de oraciones (glosarios). |
| `\glspl{svm}` | Forma plural de la entrada (glosarios). |
| `\newglossaryentry{árbol}{nombre=árbol, descripción={...}}` | Declara un término de glosario (glosarios). |
| `\newacronym{svm}{SVM}{máquina de vectores de soporte}` | Declara una sigla con formas cortas y largas (glosarios). |
| `\acrshort{svm}`, `\acrlong{svm}` | Fuerce la forma corta o larga independientemente del primer uso (glosarios). |
| `\makeglossaries` | Comando de preámbulo que activa el procesamiento de glosarios/acrónimos (glosarios). |
| `\printglossary` | Imprime una lista de glosarios donde la coloca (glosarios). |
| `\printglossaries` | Imprime el glosario y las listas de acrónimos donde lo coloque (glosarios). |

## Algoritmos y pseudocódigo

Los comandos de palabras clave provienen de algpseudocode (algorithmicx); el flotador del "algoritmo" los envuelve.

| Comando o entorno | Qué hace |
| --- | --- |
| `algoritmo` (entorno) | Contenedor flotante para pseudocódigo, con título y número (algoritmo). |
| `algorítmico` (entorno) | El propio cuerpo del pseudocódigo, que contiene los comandos de palabras clave (algpseudocódigo). |
| `\Estado` | Una línea de declaración de pseudocódigo. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Palabras clave de bloque condicional. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Recorre palabras clave en un rango o conjunto. |
| `\Mientras{...}`, `\EndMientras` | Palabras clave del bucle while. |
| `\Función{Nombre}{args}`, `\EndFunction` | Bloque de definición de funciones. |
| `\Procedimiento{Nombre}{args}`, `\EndProcedure` | Bloque de definición de procedimientos. |
| `\Regresar` | La palabra clave de retorno. |
| `\Comentario{...}` | Comentario alineado a la derecha en una línea de pseudocódigo. |
| `\Requerir`, `\Asegurar` | Líneas de condiciones previas y posteriores en la parte superior de un algoritmo. |

## Paquetes de lenguaje, citas y editorial

| Comando | Qué hace |
| --- | --- |
| `\selectlanguage{alemán}` | Cambia el idioma activo: separación de palabras, subtítulos, fechas (babel). |
| `\idioma extranjero{francés}{...}` | Escribe un pasaje breve según las reglas de otro idioma (babel). |
| `\enquote{...}` | Comillas sensibles al contexto que se anidan y localizan correctamente (csquotes). |
| `\todo{Solucionar esto}` | Nota al margen que marca el trabajo por hacer (todonotes). |
| `\listadetodos` | Imprime una lista de todas las notas de tareas pendientes (todonotes). |
| `\figura faltante{...}` | Cuadro de marcador de posición para una figura que aún no has hecho (todonotes). |
| `\xespacio` | Al final de una macro, agrega un espacio a menos que le siga la puntuación (xspace). |
| `\patchcmd{\cmd}{buscar}{reemplazar}{ok}{fallar}` | Parchea la definición de una macro existente en su lugar (etoolbox). |
| `\apptocmd`, `\pretocmd` | Agregue o anteponga código a una macro existente (etoolbox). |
| `\newtoggle{borrador}`, `\toggletrue{borrador}`, `\iftoggle{borrador}{...}{...}` | Banderas booleanas ligeras (etoolbox). |

## Paquetes de diseño y tipografía en una línea

| Paquete o comando | Qué hace |
| --- | --- |
| `\setstretch{1.25}` | Establece un factor de interlineado exacto (setspace). |
| `\doble espacio` | Cambia a interlineado doble (setspace). |
| `\un medio espacio` | Cambia a interlineado y medio (setspace). |
| `\espacio simple` | Vuelve al interlineado sencillo (setspace). |
| `espaciado` (entorno) | Establece un factor de interlineado personalizado para su contenido (setspace). |
| `\titleformat{\sección}{...}{...}{...}{...}` | Rediseña el aspecto de un encabezado de sección (títulosec). |
| `\titlespace{\section}{0pt}{12pt}{6pt}` | Ajusta el espacio alrededor de un título (títuloseg). |
| `\setlist[itemize]{noitemsep}` | Configura el espaciado de listas y las etiquetas globalmente o por nivel (enumitem). |
| `parskip` (paquete) | Cambia el documento para bloquear párrafos: espacio entre ellos, sin sangría. |
| `microtipo` (paquete) | Sutil protuberancia y expansión que mejora la justificación; solo cárgalo. |
| `multicols` (medio ambiente) | Texto equilibrado de varias columnas sin la opción de clase de dos columnas (multicol). |

## Química, física y notación de dominio.

| Comando | Qué hace |
| --- | --- |
| `\ce{H2O}` | Escribe una fórmula o reacción química (mhchem). |
| `\chemfig{...}` | Dibuja un diagrama de estructura química (chemfig). |
| `\freno{\phi|\psi}` | Escribe la notación Dirac bracket con barras de tamaño automático (braket). |

## Comandos de clase de editor

| Comando o entorno | Qué hace |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: formatea un bloque de nombre de autor en el área del título de la conferencia IEEE. |
| `\IEEEauthorblockA{...}` | IEEEtran: formatea un bloque de afiliación de autor en el área del título de la conferencia IEEE. |
| `\ccsdesc[500]{...}` | acmart: declara un concepto ACM CCS para la clasificación del artículo. |
| `CCSXML` (entorno) | acmart: contiene los conceptos XML de ACM CCS legibles por máquina de la herramienta de clasificación de ACM. |
| `\Universidad{...}` | Comando de metadatos específicos de la clase que se ve en las plantillas de tesis, no en LaTeX estándar. |

## Ambientes en general

Un entorno es una región abierta con `\begin{name}` y cerrada con `\end{name}`; todo entre los dos obtiene el comportamiento de ese entorno. La historia completa está en [comandos vs entornos](/learn/commands-environments/). Los de uso general:

| Medio ambiente | Qué hace |
| --- | --- |
| `documento` | El cuerpo de cada documento se encuentra entre `\begin{document}` y `\end{document}`. |
| `abstracto` | Imprime el resumen del artículo con el encabezado y diseño estándar de la clase. |
| `página de título` | Envuelve una página de título completa hecha a mano; la página no está numerada. |
| `centro` | Centra su contenido horizontalmente. |
| `flushleft` | Alinea su contenido a la izquierda, a la derecha irregular. |
| `flushright` | Alinea su contenido a la derecha, a la izquierda irregular. |
| `detallar` | Lista con viñetas; cada entrada comienza con `\item`. |
| `enumerar` | Lista numerada; cada entrada comienza con `\item`. |
| `descripción` | Lista etiquetada; las entradas comienzan con `\item[Etiqueta]`. |
| `\elemento` | Inicia una entrada dentro de listas de desgloses, enumeraciones o descripciones. |
| `cita` | Bloque con sangría para citas breves, sin sangría de párrafo. |
| `cita` | Bloque sangrado para citas más largas, con sangría de párrafo. |
| `verso` | Bloque con sangría para poesía, donde `\\` termina cada línea de verso. |
| `descuidado` | Párrafos tipográficos con saltos de línea relajados, el entorno tiene la forma `\sloppy`. |
| `lista` | El creador de listas generales desde el que se definen los artículos y los amigos. |
| `lista triv` | Lista básica sin etiquetas ni márgenes, utilizada dentro de definiciones de macros. |
| `contenido del archivo` | Escribe su cuerpo en un archivo en tiempo de compilación, p. para enviar un .bib dentro del .tex. |
| `apéndices` | Envuelve los capítulos del apéndice, habilitando `\appendixpage` y herramientas por apéndice (paquete de apéndice). |

## Adónde ir a continuación

Esta página es el diccionario. Las lecciones son la gramática. Para obtener un folleto de una página listo para pegar, mantenga [la hoja de referencia](/learn/cheatsheet/) abierta. Para conocer la diferencia entre los bloques `\command{...}` y `\begin{...}`, lea [comandos vs entornos](/learn/commands-environments/). Para un símbolo que puedes representar pero no puedes nombrar, usa [símbolos matemáticos](/learn/math-symbols-cheatsheet/). Para ver cómo se ve cualquier comando en modo matemático, péguelo en [la vista previa en vivo](/live/) y observe cómo se procesa.