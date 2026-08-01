---

title: "Des forfaits qui s'affrontent"
description: "hyperref en dernier, intelligentef après, paires obsolètes, exemples minimes."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Des packages qui s'affrontent

Les packages LaTeX sont libres de redéfinir les commandes des autres, et beaucoup le font délibérément. C'est ainsi que « hyperref » transforme chaque référence croisée en lien. Cela signifie également que deux packages peuvent chacun corriger la même commande avec des hypothèses incompatibles, et le résultat va d'une erreur pure et simple comme « Commande \footnote déjà définie » ou « Clash d'options pour le package xcolor » à une sortie silencieusement fausse. Les conflits font presque toujours surface juste après que vous ayez ajouté un paquet à un préambule qui fonctionnait auparavant, ce qui constitue également l'indice le plus important.

## L'ordre de chargement représente la moitié de la bataille

De nombreux conflits sont résolus uniquement par ordre, car le package chargé ultérieurement a le dernier mot. La règle la plus importante : chargez "hyperref" vers la fin du préambule. Il réécrit une grande partie de la machinerie de référencement croisé de LaTeX, et les packages chargés après lui peuvent annuler ces correctifs. Une courte liste d'exceptions doit arriver encore plus tard, et celle que vous rencontrerez réellement est « cleveref », qui est conçu pour se placer au-dessus de « hyperref » et doit être chargé après celui-ci :

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Lorsque la documentation d'un package spécifie une position par rapport à un autre package, croyez-le. Ces notes existent parce que quelqu'un a déjà touché le conflit que vous êtes sur le point d'avoir.

## Packages obsolètes et leurs remplacements

Certains conflits proviennent du chargement d'un paquet mort à côté de son successeur. Ne combinez pas `epsfig` avec `graphicx`, `subfigure` avec `subcaption`, ou les anciens cales `times` et `mathptmx` avec des packages de polices modernes comme `newtxtext`. Les anciens modèles sont la source habituelle : ils chargent tout ce qui était actuel lorsque le modèle a été écrit, et vous ajoutez l'équivalent moderne par-dessus. Retirez celui qui est obsolète et conservez celui de remplacement. Le package `nag` peut signaler pour vous une utilisation obsolète au moment de la compilation.

## Conflits d'options

« Conflit d'options pour le package X » signifie que le package a été chargé deux fois avec des options différentes, souvent une fois par votre classe de document dans votre dos. Vous ne pouvez pas le charger à nouveau avec de nouvelles options, mais vous pouvez injecter des options avant que quiconque ne le charge : placez `\PassOptionsToPackage{table}{xcolor}` avant `\documentclass`, et les options sont fusionnées selon le chargement qui survient en premier.

## Isoler avec un exemple minimal

Lorsque la cause n'est pas évidente, créez un exemple de travail minimal : un document contenant uniquement `\documentclass`, les deux packages suspects et un `\begin{document}...\end{document}` avec une ligne de texte. Si l'erreur se reproduit, modifiez l'ordre de chargement et les options jusqu'à ce que ce ne soit pas le cas. S'il ne se reproduit pas, ajoutez vos autres packages en deux jusqu'à ce qu'il revienne. Cette recherche binaire converge en quelques compilations et vous donne une paire claire à rechercher. La même technique sauve les préambules hérités, comme décrit dans [Fichiers de classe universitaire qui ne seront pas compilés](/learn/fix-broken-template/).