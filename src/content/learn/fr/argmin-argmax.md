---

title: "Des opérateurs que vous inventez une fois"
description: "DeclareMathOperator pour argmin, argmax et noms similaires."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Opérateurs que vous inventez une fois

LaTeX est livré avec des opérateurs nommés comme `\sin`, `\log` et `\max` qui s'impriment en caractères droits avec un espacement correct autour d'eux. Il n'est pas livré avec `\argmin` ou `\argmax`, même si les articles d'optimisation les utilisent constamment. Si vous tapez « argmin » sous forme de lettres simples en mode mathématique, LaTeX le traite comme le produit de six variables : les lettres apparaissent en italique, serrées les unes contre les autres, sans espacement des opérateurs. Déclarez vous-même l'opérateur, une fois, dans le préambule.

## Déclarer l'opérateur

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Voici ce que fait chaque pièce. `\DeclareMathOperator` vient de `amsmath` et crée une nouvelle commande dont l'argument est composé comme texte d'opérateur : des lettres romaines verticales, avec les règles d'espacement que LaTeX s'applique déjà à `\max` et `\lim`. Le premier argument est le nom de la commande que vous allez saisir, le second est le texte qui s'imprime réellement. Le `\,` à l'intérieur de `arg\,min` insère un mince espace entre les deux mots, ce qui se lit mieux que de les exécuter ensemble.

L'étoile après « \DeclareMathOperator » compte. Une déclaration étoilée fait que l'opérateur se comporte comme `\lim` : en mathématiques d'affichage, tout ce que vous attachez avec `_` se trouve directement sous l'opérateur au lieu de se trouver en bas à droite. C'est exactement ce que vous voulez pour `\argmin_\theta`, où la variable optimisée devrait apparaître ci-dessous. Sans l'étoile, l'indice reste sur le côté, ce qui est la convention pour les opérateurs comme `\log_2`. En mathématiques en ligne, l'indice reste sur le côté dans les deux cas, pour éviter d'étirer la hauteur de la ligne.

## Réutiliser le modèle

La même technique couvre tout opérateur utilisé par votre domaine et que LaTeX ne connaît pas. Quelques exemples courants :

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Notez que `\tr`, `\rank` et `\diag` ne sont pas suivis car leurs indices, lorsqu'ils en ont, appartiennent à côté. Seuls les opérateurs de style limite tels que `\esssup` obtiennent l'étoile.

Déclarer les opérateurs dans le préambule au lieu d'écrire `\mathrm{argmin}` en ligne est doublement rentable. La notation reste cohérente dans l'ensemble du document, et si un journal demande un rendu différent, vous modifiez une ligne au lieu de parcourir chaque équation. Essayez la déclaration et la ligne d'affichage ensemble dans le [terrain de jeu en direct](/live/) pour voir comment se comporte l'emplacement de l'indice étoilé.

Une erreur courante : déclarer un opérateur dont le nom entre en collision avec une commande existante, comme `\max` ou `\deg`. LaTeX s'arrêtera avec une erreur "déjà définie". Choisissez un nouveau nom ou utilisez « \renewcommand » uniquement si vous avez réellement l'intention de remplacer l'original.