---

title: "Pourquoi les gens passent à XeLaTeX"
description: "Polices système, scripts complexes, modèles fontspec."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Pourquoi les gens passent à XeLaTeX

LaTeX est un langage, mais plusieurs moteurs le compilent et diffèrent par ce qu'ils peuvent faire. Le moteur traditionnel est pdfLaTeX, et les deux moteurs modernes sont XeLaTeX et LuaLaTeX. La principale raison pour laquelle les gens migrent vers XeLaTeX sont les polices : pdfLaTeX utilise uniquement des polices spécialement conçues pour TeX, tandis que XeLaTeX charge toute police OpenType ou TrueType installée sur votre système, désignée par son nom ordinaire.

## Les trois raisons de changer

Le premier est l’accès direct aux polices système. Avec le package `fontspec`, un choix de police est une ligne lisible, et aucun package de police spécifique à TeX n'a ​​besoin d'exister pour la police souhaitée. Que l'objectif soit `\setmainfont{Inter}` pour un look moderne ou Times New Roman pour une exigence de journal, le mécanisme est le même :

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` nécessite XeLaTeX ou LuaLaTeX ; sous pdfLaTeX, c'est simplement des erreurs. Les polices peuvent également voyager dans le dossier du projet au lieu du système, comme indiqué dans [un fichier de polices à côté du projet](/learn/install-custom-font/).

Le second concerne l’Unicode natif et les scripts complexes. XeLaTeX lit directement l'entrée UTF-8 et gère les systèmes d'écriture que pdfLaTeX ne peut pas, notamment l'arabe, le devanagari, le chinois, le japonais et le coréen, avec une mise en forme appropriée et, grâce au package « polyglossia », une césure et une direction correctes par langue. Si votre document mélange des scripts ou même cite simplement un nom avec des signes diacritiques inhabituels, cela seul décide du moteur.

Le troisième concerne les modèles qui décident pour vous. De nombreux modèles modernes de CV, de thèses et de présentation chargent « fontspec » ou « polyglossia » dans leurs premières lignes, et un tel modèle se compile uniquement sur XeLaTeX ou LuaLaTeX. Si un modèle téléchargé échoue immédiatement avec une erreur mentionnant « fontspec », le changement de moteur est la solution, pas la modification du modèle.

## Ce à quoi tu abandonnes

Les compromis sont modestes mais réels. Quelques packages spécifiques à pdfLaTeX ne s'appliquent pas, notamment l'extension de police de « microtype », que XeLaTeX ne prend en charge que partiellement. Les compilations s'exécutent également un peu plus lentement. Certains pipelines de revues plus anciens utilisent toujours pdfLaTeX, alors vérifiez les instructions du site avant de soumettre un manuscrit construit avec XeLaTeX. LuaLaTeX partage les fonctionnalités de police et Unicode et ajoute les scripts Lua. Entre les deux, choisissez quel que soit votre modèle ou le nom de votre lieu. Les documents construits sur `fontspec` sont généralement compilés sur les deux.

## Choisir en pratique

Une règle raisonnable consiste à utiliser pdfLaTeX lorsque le modèle d'un lieu le cible, et XeLaTeX pour tout ce dont vous choisissez les polices : thèses, CV, diapositives et documents multilingues. Le moteur fourni d'Oleafly est basé sur XeTeX (Tectonic), donc les documents `fontspec` y sont compilés sans aucune configuration du moteur. L'erreur courante consiste à mélanger les époques, par exemple en chargeant « fontspec » avec des packages de polices uniquement pdfLaTeX comme « newtxtext ». Choisissez un système de polices par document et la question du moteur répondra en grande partie d'elle-même.