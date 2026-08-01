---

title: "Quel moteur pour ce projet"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic : Unicode, polices, ajustement du journal."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Quel moteur pour ce projet

Un moteur est le programme qui transforme réellement votre source « .tex » en PDF. LaTeX lui-même est une couche de macros qui s'exécute sur une seule, et vous en avez plusieurs parmi lesquelles choisir. Ils acceptent presque les mêmes documents, mais ils diffèrent dans la façon dont ils gèrent le texte et les polices Unicode, et un modèle écrit pour un moteur peut carrément échouer sous un autre. Choisissez une fois par projet et respectez-le.

| Moteur | Unicode | Polices système | Remarques |
| --- | --- | --- | --- |
| pdfLaTeX | Partielle | Non | Compatibilité maximale des journaux |
| XeLaTeX | Oui | Oui (`fontspec`) | Idéal pour les documents polyglottes |
| LuaLaTeX | Oui | Oui | Moderne, scriptable |
| Tectonique | De type Xe | Oui | Récupération automatique des packages ; Oleafly par défaut |

## À quoi sert chaque moteur

pdfLaTeX est le descendant direct du TeX original et reste l'hypothèse par défaut de la plupart des revues, conférences et systèmes de soumission. Il est antérieur à Unicode, donc la saisie accentuée nécessite les conventions « inputenc » et les polices sont limitées aux polices TeX spécialement emballées. En échange, il est rapide et universellement pris en charge, et des décennies de modèles le ciblent.

XeLaTeX lit UTF-8 de manière native et, via le package `fontspec`, utilise n'importe quelle police installée sur votre système par son nom, telle que `\setmainfont{Georgia}`. Cela en fait le choix pratique pour les documents mélangeant des scripts, pour les langues autres que celles de l'Europe occidentale et pour toute personne ayant des exigences spécifiques en matière de polices. [Quand utiliser XeLaTeX](/learn/when-use-xelatex/) va plus loin.

LuaLaTeX offre le même support Unicode et polices et intègre le langage de script Lua, afin que les packages puissent calculer des choses au moment de la compilation qui étaient auparavant impossibles. C'est le successeur à long terme parmi les moteurs traditionnels, au prix de compilations un peu plus lentes.

Tectonic est une version moderne et autonome du moteur XeTeX. Sa particularité est la gestion automatique des dépendances : lorsqu'un document nécessite un package que vous n'avez pas, Tectonic le télécharge à la demande au lieu d'échouer. Oleafly intègre Tectonic comme moteur par défaut exactement pour cette raison, donc une nouvelle installation compile les documents du monde réel sans aucune administration TeX.

## Comment décider

Suivez le modèle. Si un cours de revue ou un modèle de thèse documente un moteur, utilisez-le. Les modèles codent les hypothèses du moteur d'une manière qui apparaît comme des erreurs déroutantes ailleurs, comme décrit dans [Fichiers de classe universitaire qui ne seront pas compilés] (/learn/fix-broken-template/). Si le document vous appartient à partir de zéro, la règle générale est simple : pdfLaTeX lorsqu'un site conservateur compilera vos sources, et XeLaTeX, LuaLaTeX ou Tectonic lorsque vous avez besoin d'un véritable Unicode ou de vraies polices. Quoi que vous choisissiez, restez-y pendant toute la durée de vie du document. Des espacements subtils et des différences de police font que le changement en cours de projet est une mauvaise utilisation du temps.