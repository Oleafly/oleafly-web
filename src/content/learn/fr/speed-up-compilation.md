---

title: "Attente plus courte pour le PDF"
description: "Chiffres préliminaires, uniquement, externalisation TikZ, CPU local."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Attente plus courte pour le PDF

Une thèse dont la compilation prend quatre-vingt-dix secondes change la façon dont vous écrivez. Vous arrêtez de recompiler après de petites modifications, les erreurs s'accumulent sans que vous soyez visibles et la boucle de rétroaction qui rend LaTeX agréable disparaît. Avant d’optimiser, sachez où passe le temps. Dans la plupart des documents longs, ce n'est pas le nombre de paquets mais une poignée d'actifs lourds, surtout de grandes images et des images TikZ complexes, qui dominent la construction. Les techniques ci-dessous les attaquent directement.

## Ignorer les chiffres lors de la rédaction

L'option `draft` permet à LaTeX de remplacer chaque image par une case vide de la même taille, ce qui préserve la mise en page et les sauts de page tout en ignorant le traitement de l'image :

```latex
\documentclass[draft]{article}
```

Le « brouillon » au niveau de la classe marque également les lignes trop pleines avec des barres noires, que certaines personnes trouvent utiles et d'autres trouvent bruyantes. Pour limiter l'effet aux images, transmettez plutôt l'option au package, comme `\usepackage[draft]{graphicx}`, ou à un seul coupable avec `\includegraphics[draft]{...}`. N'oubliez pas de le supprimer avant de partager un PDF, car un brouillon de version semble défectueux pour quiconque ne connaît pas cette option. Indépendamment du mode brouillon, réduisez une fois les énormes photographies, comme décrit dans [drop in a figure](/learn/insert-images/), car une image de 40 Mo vous coûte éternellement à chaque compilation.

## Compiler uniquement le chapitre en cours

Si vos chapitres se trouvent dans des fichiers séparés extraits avec `\include`, la commande `\includeonly` restreint une construction aux fichiers que vous nommez :

```latex
\includeonly{chapters/04-results}
```

Mettez-le dans le préambule et LaTeX compile uniquement ce chapitre tout en lisant les fichiers `.aux` des autres, de sorte que les numéros de page et les références croisées du reste du document restent à peu près corrects. Il s’agit de l’économie la plus importante pour une thèse, transformant régulièrement une construction d’une minute en secondes. Cela ne fonctionne qu'avec `\include`, pas `\input`, ce qui est l'une des raisons pour lesquelles il faut structurer des documents longs comme décrit dans [diviser un document en fichiers](/learn/split-chapter-files/).

## Cacher les images coûteuses

Les images TikZ sont redessinées à partir de zéro à chaque compilation. La bibliothèque `external`, chargée de `\usetikzlibrary{external}` plus `\tikzexternalize`, compile chaque image dans son propre PDF une fois et la réutilise jusqu'à ce que le code change. La configuration présente des bords nets et l'alternative manuelle consistant à déplacer de grandes images dans des fichiers autonomes fonctionne tout aussi bien ; les deux sont couverts dans [TikZ autonome vers PDF ou PNG](/learn/tikz-export/).

## Moins de passes, un fer plus rapide

La bibliographie et la résolution des références croisées nécessitent plusieurs passes, mais lors de la rédaction de prose, vous en avez rarement besoin, donc une seule passe rapide suffit et la séquence complète peut attendre que vous vérifiiez les références. Le matériel et la localité comptent également : un moteur local compile sur votre propre processeur sans téléchargement ni file d'attente, c'est ainsi qu'Oleafly exécute les builds.

Appliquez `\includeonly` et rédigez des figures ensemble et même une thèse volumineuse revient généralement en quelques secondes, c'est-à-dire le moment où vous recommencez la recompilation après chaque paragraphe.