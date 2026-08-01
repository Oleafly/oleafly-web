---

title: "Modèles d'invite pour la compilation de TeX"
description: "Envoyez le préambule, exigez une différence, compilez toujours la réponse."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Modèles d'invite pour compiler TeX

Demandez un modèle de discussion pour LaTeX et vous obtiendrez généralement un code qui semble correct et qui ne parvient pas à être compilé dans votre document. Le modèle ne sait pas quelle classe vous utilisez, quels packages vous chargez ou quelles macros vous avez définies, il répond donc à un document générique qui n'est pas le vôtre. La sortie meurt ensuite avec des packages manquants ou des définitions conflictuelles au moment où vous la collez. La plupart de ces problèmes sont évitables grâce à trois habitudes d'invite, plus une règle stricte : compilez avant de faire confiance.

## Envoyer le préambule

Votre préambule est le contexte qui manque au modèle. Collez-le, ou au moins la ligne `\documentclass` et la liste `\usepackage`, et demandez "un fragment qui se compile sous ce préambule". Cette habitude bloque l'échec le plus courant : la réponse dépend silencieusement de `tikz`, `siunitx` ou d'un autre package que vous n'avez jamais chargé. Il oriente également le modèle vers les commandes réellement fournies par votre configuration. Si votre projet définit des macros, incluez-les également, pour les raisons évoquées dans [Donnez au modèle votre table de symboles](/learn/ai-follow-notation/).

## Demandez de quoi dépend la réponse

Ajoutez une demande permanente : "Si votre code nécessite un package que je n'ai pas chargé, indiquez-le explicitement en haut de votre réponse." Cela transforme les dépendances cachées en une liste de contrôle visible. Lorsque la réponse nomme un package, vous décidez de l'ajouter ou non, plutôt que de découvrir la dépendance sous la forme d'une erreur de « séquence de contrôle non définie » trois compilations plus tard. Cette erreur et son diagnostic sont traités dans [Séquence de contrôle non définie](/learn/undefined-control-sequence/).

## Demandez une différence, pas une réécriture

Lorsque vous souhaitez modifier un texte existant, collez le plus petit extrait pertinent et demandez au modèle de modifier uniquement ce qui est requis par la demande, en indiquant ce qu'il a modifié. Étant donné un fichier entier, les modèles réécrivent librement : ils reformatent les paragraphes intacts, réorganisent les lignes du préambule et laissent parfois tomber quelque chose par terre. Le vrai changement disparaît à l’intérieur du désabonnement. Une modification minimale et décrite est une modification que vous pouvez réellement examiner. Dans Oleafly, l'assistant applique cette forme pour vous en proposant chaque modification sous la forme d'une différence rouge/vert que vous approuvez ligne par ligne, comme décrit dans [Assistant dans Oleafly](/learn/oleafly-ai/).

## Compilez avant de faire confiance

N'expédiez jamais du LaTeX que vous n'avez pas compilé, aussi plausible soit-il. Collez la suggestion dans votre document, compilez et lisez la première erreur s'il y en a une. Le renvoi de ce message d'erreur au modèle, accompagné de l'extrait incriminé, produit généralement une deuxième tentative fonctionnelle. Conservez le projet sous Git afin que toute modification assistée par modèle puisse être annulée en une seule commande, une configuration décrite dans [Put the paper on GitHub](/learn/sync-with-github/). Le modèle propose : le compilateur dispose.