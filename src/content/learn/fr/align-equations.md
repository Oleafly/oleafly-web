---

title: "Équations multilignes qui s'alignent"
description: "aligner, rassembler, diviser, multiligne et noter."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Équations multilignes qui s'alignent

Une dérivation de plusieurs étapes semble meilleure avec les signes égaux empilés dans une colonne, afin que l'œil puisse suivre ce qui a changé d'une ligne à l'autre. Le package `amsmath` fournit l'environnement `align` pour cela, ainsi qu'une petite famille de parents pour les cas où l'alignement n'est pas ce que vous souhaitez.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## Comment aligner les lectures

Chaque ligne est une équation, terminée par `\\` ; la dernière ligne n’en a besoin. Le « & » marque le point d'alignement et le « & » de chaque ligne atterrit dans la même colonne. Placer `&` immédiatement avant le signe égal est l'habitude standard, de sorte que les signes égal s'empilent et que les côtés gauches pendent vers la gauche. Chaque ligne reçoit son propre numéro d'équation ; écrivez « align* » sur le numéro aucun, ou ajoutez « \notag » aux lignes individuelles pour ignorer uniquement celles-ci, comme indiqué dans [nombres et pointeurs pour les équations](/learn/number-equations/).

L'environnement ouvre l'affichage mathématique par lui-même, il ne doit donc pas se trouver à l'intérieur de `\[ ... \]` ou `$ ... $` ; l'imbriquer dans un autre environnement mathématique produit des erreurs déroutantes.

## La famille

| Env | Objectif |
| --- | --- |
| `aligner` | Plusieurs lignes alignées |
| `aligner*` | Idem, non numéroté |
| `rassembler` | Plusieurs lignes centrées |
| `diviser` | Numéro d'équation unique multiligne |
| `multiligne` | Équation longue brisée sans alignement |

« gather » gère plusieurs équations sans point d'alignement partagé ; il centre chaque ligne et numérote chacune d'elles. `split` construit une équation multiligne sous un seul nombre et doit se trouver à l'intérieur de `equation`. `multline` casse une formule trop longue sans alignement, la première ligne affleure à gauche et la dernière affleure à droite. Les deux derniers sont traités en détail dans [equations that will not fit](/learn/break-long-equations/).

Deux questions décident laquelle utiliser : les lignes sont-elles des équations distinctes ou une équation brisée, et y a-t-il un point d'alignement qui mérite d'être empilé ? Séparé et aligné : « aligner ». Séparé et centré : « rassembler ». Unique et aligné : `split`. Unique et non aligné : `multline`.

## Erreurs courantes

Une ligne sans « & » est toujours compilée, mais elle se centre indépendamment et rien ne s'aligne. Deux « & » sur une ligne démarrent une deuxième paire de colonnes, qui « alignent » se lit comme une deuxième colonne d'équations placées côte à côte ; si votre sortie contient des équations marchant vers la droite, comptez vos esperluettes. Un `\\` final sur la dernière ligne ajoute une ligne vide, qui apparaît comme un espace vertical impair sous le bloc. Tapez une dérivation en trois étapes dans le [terrain de jeu en direct](/live/) pour voir l'alignement se mettre en place.