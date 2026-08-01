---

title: "Parada de emergencia y argumento desbocado"
description: "Abortos fatales por falta de extremos, tirantes o malas inclusiones."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Parada de emergencia y argumento desbocado

## El síntoma

La compilación muere por completo. El registro termina con `! Parada de emergencia.` o muestra `¿Argumento fuera de control?` seguido de una larga extensión de su propio texto, a menudo con una línea complementaria como `El archivo finalizó mientras se escaneaba el uso de \textbf` o `El párrafo finalizó antes de que \foo estuviera completo`. A diferencia de la mayoría de los errores de LaTeX, no hay ningún PDF y el número de línea reportado frecuentemente apunta al final del archivo en lugar del error real.

## Por qué sucede

Ambos mensajes provienen del mismo problema: TeX comenzó a leer algo que debe cerrarse y llegó al final de la entrada antes de que llegara el token de cierre. Cuando escribes `\textbf{`, TeX recopila todo hasta el `}` coincidente como argumento. Si esa llave nunca llega, TeX sigue tragando texto, a través de párrafos y secciones, hasta que se agota el archivo. El "argumento fugitivo" es TeX mostrándote lo que se tragó. "Parada de emergencia" es que TeX se dé por vencido porque no puede continuar sin la pieza que falta. Un `\end{document}` faltante, un entorno no cerrado o una `\input` de un archivo que no existe produce el mismo estado terminal.

## Cómo encontrar la ubicación real

No confíes en el número de línea; marca dónde TeX se quedó sin entrada, no dónde comenzó el desequilibrio. En su lugar, lea el bloque `¿Argumento fugitivo?` en el registro. Las primeras palabras del texto tragado le indican en qué parte del documento comenzó la fuga, y la línea `El archivo terminó mientras se escaneaba el uso de...` nombra el comando cuyo argumento nunca se cerró. Busque ese comando cerca del texto citado y cuente sus llaves.

Si el registro no es útil, realice una búsqueda binaria en el documento. Comente la segunda mitad del cuerpo (o envuélvala en `\iffalse ... \fi`) y vuelva a compilar. Si el error desaparece, el problema está en la mitad que eliminaste; siga reduciendo a la mitad hasta que se aísle el párrafo defectuoso. Esto suena crudo, pero en un documento grande encuentra una única llave que falta en un puñado de compilaciones.

## Los sospechosos habituales

Busque un `{` sin su `}` cerca de negrita, cursiva, notas al pie y subtítulos, ya que esos comandos toman llaves de argumento que usted escribe a mano. Compruebe que cada `\begin{...}` tenga un `\end{...}` coincidente con el mismo nombre de entorno. Confirme que el archivo termina con `\end{document}` y que cada `\input` e `\include` nombra un archivo que existe en esa ruta. Los editores ayudan aquí: Oleafly resalta las llaves coincidentes y los pares de entornos a medida que escribe, lo que captura la mayoría de estos antes de que el compilador los vea.