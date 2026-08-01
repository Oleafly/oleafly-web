---

title: "Carte de bureau symbole"
description: "Accents, grands opérateurs, ensembles de chiffres et délimiteurs extensibles sur une seule page."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Carte de bureau Symbole

Cette page est une carte de référence plutôt qu'une leçon. Accents, grands opérateurs, ensembles de nombres et délimiteurs qui couvrent la plupart des mathématiques quotidiennes, le tout au même endroit. Chaque commande ici fonctionne uniquement en mode mathématique, et les ensembles de nombres nécessitent `\usepackage{amssymb}` dans le préambule. Pour l'alphabet grec et les relations de base, voir [Symboles grecs et quotidiens](/learn/greek-letters/). Pour savoir comment fonctionne le mode mathématique lui-même, commencez par [les bases du mode mathématique](/learn/math-mode/).

## Accents

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Commande | Rendu comme | Sens conventionnel |
| --- | --- | --- |
| `\chapeau{x}` | x avec circonflexe | Estimateurs, vecteurs unitaires, opérateurs |
| `\bar{x}` | x avec barre | Moyens d'échantillonnage, conjugués complexes |
| `\tilde{x}` | x avec tilde | Approximations, variables transformées |
| `\vec{x}` | x avec flèche | Vecteurs |
| `\dot{x}`, `\ddot{x}` | un ou deux points | Dérivés de première et deuxième fois |
| `\widehat{xyz}`, `\overline{xyz}` | accent étiré | Accents sur les expressions à plusieurs lettres |

Les accents simples correspondent à une seule lettre ; les variantes « large » et « over » s'étendent pour couvrir tout ce qui se trouve dans les accolades.

## Grands opérateurs

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Commande | Signification |
| --- | --- |
| `\sum_{i=1}^n` | Somme avec limites inférieure et supérieure |
| `\prod_{i=1}^n` | Produit |
| `\int_a^b` | Intégrale définie |
| `\point` | Intégrale de contour |
| `\lim_{x \to 0}` | Limite |
| `\max_{x}`, `\inf_{x}` | Maximum, minimum sur une variable |

Les limites s'attachent avec la syntaxe ordinaire en indice et en exposant, entre accolades lorsqu'elles comportent plus d'un caractère. En mathématiques d'affichage, les sommes, les produits et les limites placent leurs limites au-dessus et au-dessous du symbole. Les intégrales gardent les leurs de côté. C'est la convention standard.

## Ensembles de nombres

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Ce sont les nombres naturels, entiers, rationnels, réels et complexes en gras au tableau noir. L'alphabet `\mathbb` et ses parents sont traités dans [Blackboard, script, Fraktur](/learn/mathbb-mathcal/).

## Délimiteurs

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` et `\right` agrandissent leur délimiteur à la hauteur du contenu inclus, de sorte que les parenthèses autour d'une fraction haute l'enveloppent au lieu de la couper à la hauteur du texte. Ils doivent venir par paires. Pour afficher un seul côté, fermez avec `\right.` et le partenaire invisible satisfait l'appariement. Les accolades sont des caractères spéciaux, donc les accolades définies sont écrites `\{` et `\}`. Les crochets angulaires pour les produits internes sont `\langle` et `\rangle`, jamais les signes inférieur et supérieur du clavier, qui sont des symboles de relation avec une forme et un espacement incorrects.

N'importe quelle ligne de cette carte peut être collée dans le [terrain de jeu en direct](/live/) pour voir le formulaire rendu à côté de la source.