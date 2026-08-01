---

title: "Index empilés"
description: "Groupes vides pour le placement des tenseurs et les conventions de champs de correspondance."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Indices empilés

La notation tensorielle en relativité et en géométrie différentielle distingue les indices supérieurs des indices inférieurs, et l'ordre horizontal des indices a également une signification : une fois que les indices sont augmentés et abaissés avec une métrique, l'objet avec un indice supérieur en premier n'est pas le même que celui avec un indice inférieur en premier. Le placement du script par défaut de LaTeX ignore cette distinction, de sorte que les documents riches en tenseurs s'appuient sur une petite astuce avec des groupes vides.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## L'astuce du groupe vide

L'écriture de `T^i_j` place l'exposant et l'indice dans le même emplacement horizontal, empilés l'un au-dessus de l'autre. Pour les décaler, insérez `{}`, un groupe vide : `T^{i}{}_{j}` attache `i` en exposant à T, puis attache `j` en indice au groupe vide qui suit, de sorte que l'indice atterrit après l'exposant plutôt qu'en dessous. Chaque `{}` ouvre un nouvel emplacement de script, et vous pouvez en chaîner autant que le tenseur en a besoin, comme dans `T^{i}{}_{j}{}^{k}`.

La deuxième ligne montre le gain sur un objet réel. Dans `R^{\mu}{}_{\nu\rho\sigma}` le mu occupe la première position d'index et les trois indices inférieurs la suivent. C'est la disposition standard du tenseur de Riemann. Réduisez le décalage et l’ordre de l’index devient ambigu. Lorsque chaque index se trouve sur un seul niveau, comme dans la métrique `g_{\mu\nu}`, aucune astuce n'est nécessaire et un seul groupe d'indices les contient tous.

Le même `{}` résout également une erreur simple. `T^i^k` arrête la compilation avec "Double exposant", car un atome ne peut pas prendre deux exposants. `T^{i}{}^{k}` donne au deuxième exposant son propre emplacement et se compile proprement.

## Conventions et cohérence

Que les indices soient échelonnés ou empilés est une convention de terrain. La relativité générale chancelle presque universellement. D'autres domaines conviennent aux index empilés lorsqu'aucune métrique ne déplace les index. Faites correspondre les habitudes de votre domaine, et si vous soumettez quelque part, faites correspondre le modèle de la revue avant votre propre goût. Le package `tensor` peut automatiser le placement avec une commande `\tensor`, mais les groupes vides manuels sont portables, n'ont besoin d'aucun package et survivent à tout système de soumission inchangé.

La cohérence compte plus que le choix lui-même. Décidez une fois comment les indices de chaque tenseur sont disposés. Pour ceux que vous tapez constamment, placez une macro de préambule autour d'eux afin qu'un changement tardif de convention soit une modification plutôt qu'une recherche dans l'ensemble du document. Comparez les formulaires décalés et empilés côte à côte dans le [terrain de jeu en direct](/live/).