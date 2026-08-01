---

title: "Donnez au modèle votre table de symboles"
description: "Macros et une courte liste de notations pour que les variables restent stables."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Donnez au modèle votre table de symboles

Demandez à un modèle de rédiger ou de réviser un texte mathématique et la prose revient généralement bien tandis que la notation dérive. Votre vecteur `\vect{x}` renvoie sous la forme `\mathbf{x}` dans un paragraphe et `\vec{x}` dans un autre. L'attente que vous écrivez sous la forme `\E[X]` revient sous la forme `\mathbb{E}(X)`. Chaque variante est compilée, donc rien d'erreur. L'incohérence n'apparaît que lorsqu'un lecteur remarque le même objet écrit de trois manières différentes. Le modèle a vu toutes les conventions de notation existantes et, sans instructions, des échantillons de chacune d'entre elles. Remettez-le vôtre explicitement.

## Les macros rendent la notation exécutoire

Le travail de base est indépendant de l'IA et vaut la peine d'être fait de toute façon : acheminez chaque symbole récurrent via une macro, de sorte que la source indique `\vect{x}` plutôt que `\boldsymbol{x}` brut. Cela donne à chaque concept un nom, vous permet de remodeler l'ensemble du document en modifiant une définition et donne au modèle un petit vocabulaire auquel s'en tenir au lieu d'inventer des variantes. La définition des macros est traitée dans [Commandes personnalisées](/learn/custom-commands/).

## Que coller dans l'invite

À côté de votre demande réelle, incluez un bloc de notation compact : les définitions des macros plus un commentaire par ligne indiquant à quoi sert chacune.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Énoncez ensuite directement la contrainte : "Utilisez uniquement ces macros pour ces concepts. N'introduisez pas de nouvelle notation pour tout ce qui est répertorié, et si vous avez besoin d'un symbole qui n'est pas répertorié, dites-le au lieu d'en inventer un." Les modèles suivent bien mieux des instructions concrètes et vérifiables qu’un vague « correspond à mon style ». Pour un article complet, conservez le bloc sous forme de court commentaire de notation près du préambule afin qu'il reste à jour et prêt à être collé.

## Vérifier mécaniquement

La couche macro rend la vérification bon marché. Si chaque vecteur doit être `\vect{...}`, tout `\mathbf{` ou `\vec{` brut dans la sortie du modèle est une violation que vous pouvez trouver avec une recherche de texte au lieu de relire les mathématiques. Exécutez cette recherche sur tout ce que vous collez, corrigez les retardataires et la notation reste uniforme, quel que soit le nombre de modifications assistées par modèle dans le document.

## À l'intérieur d'Oleafly

L'[assistant d'Oleafly](/learn/oleafly-ai/) lit les fichiers du projet, y compris le préambule où se trouvent vos macros, il récupère donc généralement les commandes définies sans qu'on le lui demande. L’instruction explicite est toujours utile : voir une macro existe est plus faible que se faire dire qu’elle est obligatoire. Ajoutez une ligne à votre demande ("utilisez les macros de notation du préambule") et examinez la différence rouge/vert avant que les modifications n'arrivent. Cela maintient la dérive hors de la source.