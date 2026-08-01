---

title: "Texte flou dans la visionneuse PDF"
description: "Tapez 3 bitmaps, polices de contour, figures vectorielles."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Texte flou dans la visionneuse PDF

Votre PDF se compile proprement, mais le texte semble mou ou irrégulier à l'écran, et le zoom avant ne fait qu'empirer les choses au lieu de les améliorer. Rien ne va pas avec votre spectateur. Le document contient des polices bitmap. Au lieu de stocker les formes de lettres sous forme de contours évolutifs, il les stocke sous forme de grilles de pixels rendues à une résolution fixe. Dans la terminologie PDF, ce sont des polices de type 3. Ils impriment de manière acceptable sur papier à la résolution pour laquelle ils ont été générés, c'est pourquoi le problème a survécu pendant des décennies, mais sur les écrans, ils sont flous à n'importe quel niveau de zoom autre que celui d'origine. Les formats de contour modernes (Type 1, TrueType, OpenType) évoluent proprement car les formes sont des courbes mathématiques.

## Confirmation du diagnostic

Le zoom est le test rapide : les polices de contour restent d'une netteté exceptionnelle à 800 %, les bitmaps se dissolvent en pixels visibles. Pour plus de certitude, ouvrez les propriétés du document dans votre visionneuse PDF et regardez le panneau des polices. Dans Adobe Reader, cela se trouve sous Fichier, puis Propriétés, puis Polices, et toute police répertoriée comme « Type 3 » est un bitmap. Cette vérification est importante au-delà de l'esthétique, car arXiv et de nombreux éditeurs rejettent les soumissions contenant des polices de type 3.

## D'où viennent les bitmaps et les correctifs

La source habituelle est une ancienne configuration de police. De très anciennes installations TeX ont rendu Computer Modern via METAFONT en bitmaps, et certains packages hérités et anciennes piles de l'ère `\usepackage{times}` exploitent toujours des variantes bitmap. Corrigez-le en remplaçant les anciennes commandes de polices par une pile moderne :

```latex
\usepackage{newtxtext,newtxmath}
```

Cela donne un aperçu de Times avec des mathématiques correspondantes, comme détaillé dans [Piles de type Times, Arial, Helvetica] (/learn/times-arial-helvetica/). Si vous souhaitez l'apparence par défaut plutôt que Times, `\usepackage{lmodern}` remplace Computer Modern par son successeur, Latin Modern. La compilation avec XeLaTeX ou LuaLaTeX et `fontspec` évite complètement le problème, puisque ces moteurs utilisent des polices système OpenType qui sont décrites par construction. Un moteur moderne tel que Tectonic basé sur XeTeX qu'Oleafly regroupe ne génère pas de texte de type 3 à lui seul ; lorsqu'elle y apparaît, la police bitmap arrive via un graphique inclus.

## La version chiffrée du même problème

Le texte flou dans un PDF n'est pas toujours une police de document. Si les paragraphes sont nets mais que les étiquettes à l'intérieur d'un tracé sont floues, la figure elle-même est une image raster, généralement une capture d'écran PNG d'un tracé ou d'un diagramme exporté à la résolution d'écran. Le remède est la même idée au niveau supérieur : exporter les figures au format PDF vectoriel à partir de l'outil de traçage, afin que leur texte soit également un contour. Les instructions de format se trouvent dans [insérer une figure] (/learn/insert-images/).

Après toute correction, vérifiez à nouveau le panneau des polices plutôt que de vous fier à vos yeux avec le zoom par défaut. Une seule entrée de type 3 laissée par un personnage ou un paquet suffit à faire rejeter une soumission.