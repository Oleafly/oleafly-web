---

title: "Formules et structures chimiques"
description: "réactions mhchem et un croquis chemfig."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Formules et structures chimiques

La notation chimique combat les défauts de LaTeX. Le mode mathématique met en italique les symboles d'éléments comme s'il s'agissait de variables, et le mode texte n'a aucun indice. Deux packages se partagent le travail. `mhchem` compose les formules et les réactions à partir de la notation chimique simple, et `chemfig` dessine des diagrammes structurels.

## Formules et réactions avec mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

L'option `version=4` sélectionne la syntaxe actuelle. Tout ce qui est chimique va à l'intérieur de `\ce{...}`, qui lit son contenu comme un chimiste l'écrit. Dans `\ce{H2O}`, le 2 devient automatiquement un indice et les symboles des éléments restent droits, comme l'exige la convention. Dans la réaction, le « + » obtient un espacement approprié, « -> » devient une flèche de réaction et le 2 avant CO est reconnu comme un coefficient stoechiométrique, il reste donc en taille réelle sur la ligne de base.

La même notation évolue. Les charges montent en exposant, donc `\ce{SO4^2-}` donne du sulfate avec sa charge 2. Les états de la matière sont attachés entre parenthèses, comme dans `\ce{H2O(l)}` ; les flèches d'équilibre s'écrivent `<=>` ; et `\ce{^{14}C}` place un numéro d'isotope avant le symbole. `\ce` fonctionne à la fois en mode texte et en mode mathématique, de sorte qu'une formule peut figurer dans une phrase sans délimiteurs supplémentaires.

## Structures avec chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` dessine des structures à partir d'un code linéaire compact. Les atomes sont écrits comme leurs symboles, et « - » établit une liaison avec l'atome suivant. Un nombre entre parenthèses définit la direction de l'obligation par pas de 45 degrés dans le sens inverse des aiguilles d'une montre à partir de l'est : « [2] » pointe vers le haut et « [6] » vers le bas. Les parenthèses ouvrent les branches de l'atome actuel, donc `C(-[2]H)(-[6]H)` fait croître un hydrogène vers le haut et un vers le bas tandis que la chaîne principale continue vers la droite. L’exemple est le méthane dessiné à plat : un carbone central lié à quatre hydrogènes. Les liaisons doubles et triples sont écrites « = » et « ~ », et il existe une syntaxe de cycle dédiée pour les structures cycliques et aromatiques.

## Notes pratiques

Gardez les deux outils dans leurs voies. Utilisez « mhchem » pour tout ce qui se lit de gauche à droite comme une formule ou une équation, et « chemfig » lorsque la géométrie de la molécule est le point. Les deux se compilent avec un moteur LaTeX standard et aucun programme de dessin externe.

L’erreur habituelle du débutant consiste à écrire des formules en mode mathématique pur. `$H_2O$` compile, mais il définit le H et le O en italique comme des variables, ce qui est faux par convention. `\ce{H2O}` produit la forme verticale avec moins de saisie. Les deux packages sont disponibles pour essayer dans le [live playground](/live/).