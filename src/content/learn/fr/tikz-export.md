---

title: "TikZ autonome en PDF ou PNG"
description: "classe autonome et externaliser les caches."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# TikZ autonome en PDF ou PNG

Une image TikZ se trouve normalement dans un document, mais vous avez souvent besoin du diagramme comme fichier à part entière : pour le réutiliser dans un diaporama, pour le remettre à un co-auteur qui travaille dans Word, pour le télécharger là où un PNG est requis, ou simplement pour éviter de recompiler un dessin coûteux à chaque création de document. La classe de document « autonome » existe exactement pour cela. Il compose une image sur une page recadrée à la taille de l'image :

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## Que font les options de classe

L'option `tikz` charge le package TikZ pour vous et indique à `standalone` de recadrer la page de sortie étroitement autour de `tikzpicture`, de sorte que le PDF résultant soit exactement aussi grand que le dessin, sans marges de page. L'option `border=2pt` ajoute un coussin à deux points sur tous les côtés, ce qui empêche les traits qui se trouvent exactement sur le cadre de délimitation d'être rasés par les visualiseurs ou les imprimantes. Compilez ce fichier comme n'importe quel document et le résultat est un petit PDF bien recadré contenant uniquement le diagramme.

Préférez ce PDF, car il est vectoriel : il s'adapte à n'importe quelle taille sans flou. Le déposer dans un autre document avec `\includegraphics` fonctionne comme décrit dans [une page PDF sous forme de graphique](/learn/include-pdf-as-figure/). Lorsqu'une copie raster est réellement nécessaire, convertissez le PDF compilé plutôt que de recréer le dessin. Les outils de ligne de commande tels que `pdftoppm -png -r 300 figure.pdf figure` produisent un PNG à 300 dpi, et `pdf2svg` ou Inkscape produisent du SVG. Exportez à 300 dpi ou plus si le PNG doit être imprimé.

## Mise en cache des images avec externalisation

Dans un document volumineux, les images TikZ sont redessinées à chaque compilation, et une poignée de tracés complexes peuvent dominer le temps de construction. La bibliothèque « externe » corrige ce problème en compilant chaque image dans son propre PDF une fois, puis en réutilisant le fichier mis en cache jusqu'à ce que le code de l'image change :

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

L'option `prefix` conserve les fichiers générés dans leur propre dossier. L'externalisation exécute le compilateur dans un mode qui génère des sous-compilations, elle nécessite donc l'activation de l'échappement du shell et interagit mal avec certaines configurations. S'il vous combat, déplacez chaque grande image dans son propre fichier « autonome » et incluez les PDF compilés. Cela vous donne la même mise en cache manuelle, avec moins de machines. Les temps de compilation en général sont couverts dans [attente plus courte pour le PDF](/learn/speed-up-compilation/).

Une erreur courante mérite un avertissement : ne capturez pas un diagramme rendu pour obtenir un PNG. Les captures d'écran capturent la résolution de l'écran, qui semble acceptable dans un aperçu de diapositive et floue partout ailleurs. Convertissez à partir du PDF, où vous pouvez choisir la résolution.