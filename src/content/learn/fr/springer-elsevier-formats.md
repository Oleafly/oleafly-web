---

title: "Formats Springer, Elsevier et LNCS"
description: "llncs, revues Springer Nature et elsarticle : classes à colonne unique et source prête à photographier."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Formats Springer, Elsevier et LNCS

En dehors des écosystèmes IEEE et ACM, deux éditeurs dominent : Springer (dont Springer Nature) et Elsevier. Leurs cours semblent plus simples que les styles de conférence à deux colonnes, et c'est par conception. L'éditeur compose la version finale.

## LNCS : le cheval de bataille des procédures

Si votre conférence publie dans Lecture Notes in Computer Science (ou ses frères et sœurs LNAI et LNBI), vous écrivez dans « llncs » :

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

Les articles du LNCS sont constitués d'une seule colonne, utilisent des exposants `\inst{}` pour mapper les auteurs aux instituts et ont un budget de pages par défaut réputé serré (souvent 12 à 16 pages, références comprises). La classe n'est pas présente par défaut dans toutes les distributions TeX. Téléchargez le kit d'auteur à partir de la page LNCS de Springer. Son style de bibliographie est `splncs04` :

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Revues Springer Nature

Les revues Springer utilisaient historiquement `svjour3` et ont migré vers la nouvelle classe `sn-jnl` avec des options de style par famille de revues (`sn-mathphys-num`, `sn-basic` et autres). La page « Directives de soumission » de la revue nomme la classe et l'option exactes. Ne devinez pas : deux revues Springer peuvent vouloir des classes différentes.

## Elsevier : elsarticle

Les revues Elsevier partagent une classe, `elsarticle` :

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

L'option « préimpression » donne une grande colonne unique à double interligne pour la révision, et « final » avec « 1p », « 3p » ou « 5p » imite la mise en page d'impression du journal. Les styles de bibliographie sont `elsarticle-num` (numéroté) ou `elsarticle-harv` (auteur-année), correspondant à ce que la revue utilise.

## Comparaison rapide

| Éditeur | Classe | Colonnes | Style bavoir |
|---|---|---|---|
| Springer LNCS | `llncs` | un | `splncs04` |
| Revues Springer Nature | `sn-jnl` (était `svjour3`) | un | option par journal |
| Elsevier | `elsarticle` | un (revue) | `elsarticle-num` / `-harv` |

## Pourquoi une seule colonne ? Parce que tu n'es pas le compositeur

Ces classes restituent votre *manuscrit*, pas la page finale. L'équipe de production de l'éditeur recompose les articles acceptés dans la mise en page maison de la revue. C'est aussi pourquoi « téléchargement de source prête à l'emploi » signifie ici quelque chose de spécifique : vous téléchargez vos fichiers `.tex`, `.bib` et vos fichiers de figures, pas seulement un PDF, afin que la production puisse reconstruire et relooker le papier. Conséquences pratiques :

- Gardez la source propre et compilable à partir d'une nouvelle extraction : pas de chemins absolus, pas de chiffres manquants
- Ne modifiez pas l'espacement ou les marges. La production le supprime de toute façon (et il peut [être signalé](/learn/page-limits-without-crimes/))
- Utilisez des packages standards. Les exotiques sont réécrits par la production ou vous sont renvoyés

Ces classes s'appuient sur un bon nombre de packages, donc une installation minimale peut en récupérer plusieurs lors de la première compilation. Si l'on refuse d'apparaître, voir [installation des packages manquants](/learn/install-missing-package/). Si le modèle est carrément erroné, triez-le comme n'importe quel [modèle cassé](/learn/fix-broken-template/).