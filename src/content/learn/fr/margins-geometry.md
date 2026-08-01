---

title: "Marges dans un seul paquet"
description: "géométrie pour la taille de la page, les marges, le décalage de reliure."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Marges dans un seul paquet

Les marges par défaut de LaTeX semblent énormes, surtout sur le papier A4. C'est intentionnel : les valeurs par défaut visent une longueur de ligne confortable d'environ 66 caractères, ce qui est idéal pour la lecture, mais rarement ce qu'exige un modèle universitaire, un journal ou vos propres goûts. Plutôt que d'ajuster manuellement une demi-douzaine de longueurs de bas niveau, vous configurez la page avec le package `geometry` et décrivez la mise en page souhaitée en termes simples.

## Les deux façons dont vous l'utiliserez réellement

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

La première forme est la plus rapide : `margin=1in` définit les quatre marges à un pouce en une seule option, et la géométrie recalcule la largeur et la hauteur du texte pour qu'elles correspondent. Il s'agit de l'apparence standard de la « thèse américaine » et d'une valeur par défaut raisonnable pour les brouillons.

La deuxième forme explique tout. « a4paper » déclare le format physique du papier (utilisez « letterpaper » pour US Letter). Sans cela, la géométrie hérite de la classe de document supposée, ce qui peut ne pas correspondre à ce qu'attend votre visionneuse ou imprimante PDF. Les options « top », « bottom », « left » et « right » définissent ensuite chaque marge indépendamment, de sorte que les mises en page asymétriques sont tout aussi simples que les mises en page symétriques. Vous pouvez mélanger les unités librement : `in`, `cm`, `mm` et `pt` fonctionnent tous.

Tout se passe dans le préambule, avant `\begin{document}`. La géométrie lit ses options une fois et en dérive toute la mise en page, c'est pourquoi elle est moins sujette aux erreurs que le réglage manuel.

## Décalage de reliure pour les copies imprimées

Si le document doit être imprimé et relié, la marge intérieure a besoin de plus d'espace pour que le texte ne disparaisse pas dans le dos. Ajoutez `bindingoffset=0.5cm` aux options et la géométrie décale le bloc de texte vers l'extérieur sur chaque page. Dans un document « recto verso », il alterne correctement le décalage entre les pages gauche et droite, ce qui est fastidieux à obtenir à la main.

## Ce qu'il ne faut pas faire

Évitez de mélanger la géométrie avec le `\setlength{\textwidth}{...}` manuel, sauf si vous savez pourquoi. La mise en page de LaTeX est un réseau de longueurs interdépendantes (`\textwidth`, `\oddsidemargin`, `\headheight` et amis), et la géométrie les gère toutes comme un système cohérent. Changer une longueur directement après le chargement de la géométrie met généralement les autres en désaccord et vous vous retrouvez avec un texte qui déborde de la page ou des marges qui diffèrent de ce que vous avez demandé. Si vous avez besoin d'une modification au milieu du document, la géométrie fournit `\newgeometry{...}` et `\restoregeometry` pour exactement cela.

Une mise en garde avant de régler quoi que ce soit : si vous écrivez pour un journal ou une conférence, le fichier de classe encode déjà les marges requises, et l'ajout d'une géométrie par-dessus violera probablement le format de soumission. Enregistrez les ajustements de marge pour les documents dont vous contrôlez la mise en page, comme une thèse, des notes ou un CV, et vérifiez ce que votre [classe de document](/learn/document-skeleton/) vous donne déjà en premier.