---

title: "Des personnages qui brisent la source"
description: "Comment taper un pourcentage, un dollar, une esperluette, un trait de soulignement, des accolades sans rompre la ligne."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Caractères qui cassent la source

LaTeX réserve une poignée de caractères quotidiens comme syntaxe, et en taper un là où vous voulez dire que le caractère littéral arrête la compilation ou modifie silencieusement la sortie. Chaque personnage réservé a une évasion, et l'ensemble tient dans une petite table.

| Char | Codes |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\textbackslash` |

## Ce que font les personnages sans s'échapper

`%` commence un commentaire, donc tout depuis celui-ci jusqu'à la fin de la ligne est supprimé. C'est le bug habituel de « ma phrase a disparu » : écrivez 50 % dans un rapport et le reste de la ligne disparaît sans aucune erreur. `$` bascule le mode mathématique, donc un mode errant met silencieusement le texte en italique ou génère des erreurs loin de la faute de frappe. `&` est l'onglet d'alignement dans les tableaux et les blocs `align` ; en dehors d'eux, il échoue avec "Onglet d'alignement égaré". `#` marque les paramètres de la macro. `_` et `^` appartiennent au mode mathématique, et dans le texte, ils génèrent "Missing $ insert", qui [a sa propre leçon](/learn/missing-dollar/). `~` est un espace insécable, donc un tilde tapé dans une URL ou un chemin devient tranquillement un espace. `\` démarre chaque commande, c'est pourquoi elle ne peut pas s'échapper : `\\` est un saut de ligne et le caractère littéral a besoin de `\textbackslash`.

## L'évasion en pratique

Pour les six premiers caractères, l'échappement est un préfixe de barre oblique inverse, et il fonctionne de la même manière dans les autres commandes :

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Notez que le trait de soulignement a besoin de son échappement même à l'intérieur de `\texttt`. Les deux échappements de style commande, `\textasciitilde` et `\textbackslash`, doivent être suivis de `{}` ou d'un espace lorsqu'une lettre vient ensuite, afin que le nom de la commande n'avale pas le mot suivant.

Pour des morceaux entiers de code, des chemins ou des URL, évitez complètement l’échappement. `\verb|...|` et l'environnement `verbatim` affichent leur contenu exactement tel qu'il a été saisi, avec chaque caractère spécial désarmé, et `\url{...}` du package `url` gère les liens complets avec des tildes.

Les personnages qui mordent le plus sont ceux qui échouent silencieusement, et « % » est en tête de cette liste. Le texte collé est généralement le coupable : les URL, les commandes shell et les chiffres financiers comportent tous des caractères réservés. Lorsqu'une phrase disparaît du PDF, recherchez dans cette ligne de la source un simple « % » avant toute autre chose.