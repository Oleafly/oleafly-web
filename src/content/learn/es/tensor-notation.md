---

title: "Índices apilados"
description: "Grupos vacíos para colocación de tensores y convenciones de campos coincidentes."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Índices apilados

La notación tensorial en relatividad y geometría diferencial distingue los índices superiores de los inferiores, y el orden horizontal de los índices también tiene significado: una vez que los índices se suben y bajan con una métrica, el objeto con un índice superior primero no es el mismo que el que tiene un índice inferior primero. La ubicación predeterminada del script de LaTeX ignora esa distinción, por lo que los documentos con mucho tensor dependen de un pequeño truco con grupos vacíos.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## El truco del grupo vacío

Escribir `T^i_j` coloca el superíndice y el subíndice en la misma ranura horizontal, apilados uno encima del otro. Para escalonarlos, inserte `{}`, un grupo vacío: `T^{i}{}_{j}` adjunta `i` como superíndice a T, luego adjunta `j` como subíndice al grupo vacío que sigue, de modo que el subíndice caiga después del superíndice en lugar de debajo de él. Cada `{}` abre una nueva ranura de script y puedes encadenar tantos como necesite el tensor, como en `T^{i}{}_{j}{}^{k}`.

La segunda línea muestra el pago de un objeto real. En `R^{\mu}{}_{\nu\rho\sigma}` el mu ocupa la primera posición del índice y los tres índices inferiores le siguen. Ese es el diseño estándar del tensor de Riemann. Contrae el escalonamiento y el orden del índice se vuelve ambiguo. Cuando cada índice se encuentra en un nivel, como en la métrica `g_{\mu\nu}`, no se necesita ningún truco y un solo grupo de subíndices los contiene a todos.

El mismo `{}` también resuelve un simple error. `T^i^k` detiene la compilación con "Doble superíndice", porque un átomo no puede tomar dos superíndices. `T^{i}{}^{k}` le da al segundo superíndice su propio espacio y lo compila limpiamente.

## Convenciones y coherencia

Si los índices están escalonados o apilados es una convención de campo. La relatividad general se tambalea casi universalmente. Otras áreas están bien con índices apilados cuando ninguna métrica mueve los índices. Haga coincidir los hábitos de su campo y, si realiza envíos en algún lugar, haga coincidir la plantilla de la revista antes que su propio gusto. El paquete `tensor` puede automatizar la colocación con un comando `\tensor`, pero los grupos vacíos manuales son portátiles, no necesitan paquete y sobreviven a cualquier sistema de envío sin cambios.

La coherencia importa más que la elección misma. Decide una vez cómo se organizan los índices de cada tensor. Para los que escribe constantemente, coloque una macro de preámbulo alrededor de ellos para que un cambio tardío de convención sea una edición en lugar de una búsqueda en todo el documento. Compare formas escalonadas y apiladas una al lado de la otra en el [área de juegos en vivo](/live/).