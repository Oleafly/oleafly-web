---

title: "¿Qué motor para este proyecto?"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic: Unicode, fuentes, ajuste de diario."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# ¿Qué motor para este proyecto?

Un motor es el programa que realmente convierte su fuente `.tex` en un PDF. LaTeX en sí es una macrocapa que se ejecuta encima de una, y hay varias para elegir. Aceptan casi los mismos documentos, pero difieren en la forma en que manejan el texto y las fuentes Unicode, y una plantilla escrita para un motor puede fallar completamente en otro. Elija una vez por proyecto y continúe con él.

| Motor | Unicódigo | Fuentes del sistema | Notas |
| --- | --- | --- | --- |
| pdfLaTeX | Parcial | No | Compatibilidad máxima con diarios |
| XeLaTeX | Sí | Sí (`fontspec`) | Ideal para documentos políglotas |
| LuaLaTeX | Sí | Sí | Moderno, programable |
| Tectónico | Tipo Xe | Sí | Búsqueda automática de paquetes; Oleafly predeterminado |

## Para qué sirve cada motor

pdfLaTeX es el descendiente directo del TeX original y sigue siendo el supuesto predeterminado de la mayoría de revistas, conferencias y sistemas de envío. Es anterior a Unicode, por lo que la entrada acentuada necesita las convenciones `inputenc` y las fuentes se limitan a fuentes TeX especialmente empaquetadas. A cambio, cuenta con soporte rápido y universal, y décadas de plantillas apuntan a él.

XeLaTeX lee UTF-8 de forma nativa y, a través del paquete `fontspec`, utiliza cualquier fuente instalada en su sistema por nombre, como `\setmainfont{Georgia}`. Esto lo convierte en la opción práctica para documentos que combinan escrituras, para idiomas más allá de los de Europa occidental y para cualquier persona con requisitos de fuentes específicos. [Cuándo usar XeLaTeX](/learn/when-use-xelatex/) va más allá.

LuaLaTeX ofrece el mismo Unicode y compatibilidad con fuentes e incorpora el lenguaje de programación Lua, por lo que los paquetes pueden calcular cosas en tiempo de compilación que antes eran imposibles. Es el sucesor a largo plazo entre los motores tradicionales, a costa de compilaciones algo más lentas.

Tectonic es una versión moderna e independiente del motor XeTeX. Su característica distintiva es el manejo automático de dependencias: cuando un documento necesita un paquete que usted no tiene, Tectonic lo descarga a pedido en lugar de fallar. Oleafly incluye Tectonic como su motor predeterminado exactamente por esta razón, por lo que una nueva instalación compila documentos del mundo real sin ninguna administración de TeX.

## Cómo decidir

Sigue la plantilla. Si una clase de revista o una plantilla de tesis documenta un motor, utilícelo. Las plantillas codifican las suposiciones del motor de manera que aparecen como errores confusos en otros lugares, como se describe en [Archivos de clase universitaria que no se compilarán](/learn/fix-broken-template/). Si el documento es suyo desde cero, la regla general es simple: pdfLaTeX cuando un lugar conservador compilará sus fuentes, y XeLaTeX, LuaLaTeX o Tectonic cuando necesite Unicode o fuentes reales. Elija lo que elija, quédese con él durante la vigencia del documento. Las sutiles diferencias de espaciado y fuente hacen que cambiar a mitad del proyecto sea un mal uso del tiempo.