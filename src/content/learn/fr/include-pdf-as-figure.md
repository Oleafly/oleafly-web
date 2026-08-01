---

title: "Une page PDF sous forme de graphique"
description: "inclure des graphiques avec sélection de pages et des pages PDF pour les annexes."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Une page PDF sous forme de graphique

Le PDF est le meilleur format de figure que LaTeX puisse consommer. Contrairement au PNG ou au JPG, un PDF stocke des données vectorielles, de sorte que les lignes et les étiquettes restent nettes quel que soit le niveau de zoom et que les polices qu'il contient voyagent avec le fichier. Des outils tels que Matplotlib, Inkscape et draw.io exportent tous au format PDF, ce qui signifie que le diagramme que vous avez dessiné ailleurs peut être déposé directement dans votre document. Mais les PDF apportent un problème que les images n'apportent pas : un PDF peut contenir de nombreuses pages, et vous devez indiquer à LaTeX laquelle vous voulez.

## Extraire une page d'un PDF de plusieurs pages

Le package `graphicx` `\includegraphics` accepte une option `page` en plus des clés de dimensionnement habituelles :

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Ici, `page=1` sélectionne la première page de `diagram.pdf` et `width=\textwidth` redimensionne cette page sur toute la largeur du bloc de texte. Si vous omettez « page », LaTeX utilise silencieusement la première page, ce qui est généralement ce que vous souhaitez mais peut vous surprendre lorsqu'un script de traçage écrit plusieurs figures dans un seul fichier. Vous pouvez inclure le même PDF plusieurs fois avec des valeurs de « page » différentes, une fois par environnement de figure, chacune avec sa propre légende et sa propre étiquette.

Enveloppez la commande dans un environnement `figure` normal afin qu'elle obtienne une légende et un numéro, exactement comme vous le feriez pour [n'importe quelle autre image](/learn/insert-images/). La page incluse est recadrée selon son propre cadre de délimitation, donc si votre PDF source a des marges généreuses, la figure semblera rembourrée. Réexportez-le avec un cadre de délimitation serré, ou recadrez-le une fois avec un outil comme « pdfcrop », plutôt que de lutter contre les espaces avec un espacement négatif.

## Insertion de documents entiers avec des pages pdf

Parfois, vous ne voulez pas du tout de chiffre. Vous souhaitez que des pages entières, textuellement, soient insérées dans votre document : un PDF supplémentaire, un formulaire signé, un questionnaire publié en annexe de thèse. C'est le travail du package `pdfpages` :

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

La valeur `pages=-` signifie chaque page. Vous pouvez également écrire « pages=2-5 » pour une plage ou « pages={1,3,7} » pour une liste spécifique. Chaque page insérée remplit sa propre page de sortie, conserve sa mise en page d'origine et participe à la numérotation des pages de votre document, de sorte que l'annexe soit lue en continu. Ajoutez l'option `pagecommand={}` si les en-têtes ou les pieds de page de votre classe de document s'impriment au-dessus des pages insérées et que vous souhaitez qu'ils soient supprimés ou personnalisés.

## Quel outil pour quel travail

Utilisez `\includegraphics[page=...]` lorsque le contenu PDF doit se comporter comme une figure, ce qui signifie qu'il flotte, porte une légende et est référencé à partir du texte. Utilisez `\includepdf` lorsque les pages doivent être autonomes en taille réelle. L'erreur courante est d'utiliser « pdfpages » pour un diagramme, ce qui vous donne une page complète sans légende et sans référence que vous ne pouvez pas citer avec « \ref ». Si les lecteurs voient un jour « voir la figure 3 », cela appartient à un environnement de figures.