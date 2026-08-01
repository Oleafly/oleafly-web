---

title: "Assistant au sein d'Oleafly"
description: "Votre clé API, le contexte du projet, les différences, les modifications tenant compte de la compilation."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Assistant au sein d'Oleafly

Oleafly comprend un assistant IA qui fonctionne au sein de votre projet plutôt que dans une fenêtre de discussion séparée. Contrairement au collage de LaTeX dans un chatbot général, il s'exécute sur votre propre clé API, peut lire le projet qu'il est en train de modifier et affiche chaque modification proposée pour approbation avant de toucher vos fichiers.

## Votre clé, votre fournisseur

L'assistant n'effectue aucun appel de modèle via les serveurs d'Oleafly. Vous fournissez une clé API pour l'un des neuf fournisseurs hébergés pris en charge, ou pointez l'application vers une installation Ollama locale et utilisez un modèle exécuté sur votre propre matériel. Les demandes vont de votre machine au fournisseur que vous avez configuré, selon les conditions de ce fournisseur, et vous payez le fournisseur directement à ses tarifs. Le modèle à choisir et la manière de configurer une clé ou un Ollama sont abordés dans [Configuration AI](/docs/ai-setup/).

## Ce que l'assistant peut voir

Lorsque vous posez une question ou demandez une modification, l'assistant travaille à partir d'une carte de votre projet et lit les fichiers pertinents à la demande, tels que le chapitre que vous modifiez, le préambule qui définit vos macros ou le fichier « .bib » derrière une question de citation. Ce contexte est la raison pour laquelle il peut répondre « pourquoi la figure 3 flotte-t-elle vers la page suivante » à propos de votre figure 3 réelle, et pourquoi ses modifications ont tendance à correspondre à la notation et aux commandes que votre document utilise déjà.

## Les modifications que vous examinez, pas les modifications qui se produisent simplement

L'assistant n'écrit jamais directement dans vos fichiers. Il propose des modifications sous forme de différence, avec des lignes supprimées en rouge et des lignes ajoutées en vert, et vous acceptez ou rejetez chacune d'elles. Avant qu'une modification acceptée ne soit appliquée, Oleafly enregistre un point de contrôle Git, de sorte que l'état avant la modification est toujours à une étape dans [Historique Git] (/docs/git-history/). La suppression d'un fichier est traitée séparément et nécessite toujours votre confirmation explicite, quoi que fasse l'assistant.

## Boucler la boucle avec le compilateur

Comme l'assistant habite à côté de la construction, il peut vérifier son propre travail. Après une modification, il peut déclencher une compilation, lire le journal et si la modification visait à corriger une erreur, vérifier si cette erreur a disparu. Il peut également lire le texte du PDF compilé, afin de confirmer qu'une modification demandée apparaît réellement dans la sortie. Les modèles produisent toujours du mauvais LaTeX, alors lisez ce que vous acceptez. L’avantage est que les suggestions non fondées ont tendance à être détectées et corrigées dans la boucle plutôt que par vous plus tard.

Les mécanismes quotidiens se trouvent dans les documents pour [chat](/docs/ai-chat/) et [inline edit](/docs/ai-inline-edit/), et [Une semaine d'écriture dans Oleafly](/learn/oleafly-workflow/) montre où l'assistant se situe dans une boucle d'écriture complète.