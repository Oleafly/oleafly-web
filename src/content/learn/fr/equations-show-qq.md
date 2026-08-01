---

title: "Des points d'interrogation au lieu de chiffres"
description: "Les étiquettes ont besoin d’un autre passage ; placement des étiquettes après les légendes."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Des points d'interrogation au lieu de chiffres

Vous compilez, et là où doit se trouver une figure ou un numéro d'équation, le PDF affiche « ?? ». Ce n'est pas une erreur dans votre source. C'est ainsi que LaTeX restitue une référence qu'il ne peut pas encore résoudre, et le correctif consiste généralement simplement à recompiler.

## Pourquoi un seul passage ne suffit pas

LaTeX lit votre document de haut en bas en un seul passage. Lorsqu'il rencontre un `\label`, il écrit le numéro actuel dans le fichier `.aux` ; lorsqu'il rencontre un `\ref`, il recherche le numéro dans le fichier `.aux` écrit lors de l'exécution précédente. Sur une nouvelle compilation, il n'y a pas d'exécution précédente, donc chaque référence s'imprime sous la forme `??`. La deuxième passe lit le fichier `.aux` complété et remplit les nombres. Le compilateur fourni par Oleafly réexécute automatiquement les passes jusqu'à ce que les nombres se stabilisent, mais si vous pilotez `pdflatex` à la main, la deuxième compilation est votre travail.

## Quand ?? survit à un deuxième passage

Si les points d’interrogation persistent, effectuez trois vérifications. Tout d'abord, comparez l'orthographe de `\ref` avec celle de `\label` caractère par caractère ; les étiquettes sont sensibles à la casse et un espace parasite compte. Deuxièmement, vérifiez où se trouve l’étiquette. `\label` enregistre la valeur du compteur incrémenté le plus récemment, et dans un flottant, c'est `\caption` qui incrémente le compteur, donc l'étiquette doit venir après la légende :

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Une étiquette placée avant la légende se compile sans problème mais récupère le mauvais compteur, généralement la section actuelle, donc la référence imprime un numéro plausible mais erroné plutôt que « ?? ». Cette variante est pire car elle est facile à rater. Troisièmement, si le fichier « .aux » a été supprimé en cours d'exécution ou si une compilation a été interrompue, les étiquettes enregistrées peuvent être incomplètes ; recompiler à partir d'un état propre.

## Lecture des avertissements

Le journal vous indique dans quel cas vous vous trouvez. « Il y avait des références non définies » signifie qu'au moins un `\ref` n'a rien trouvé. "Les étiquettes peuvent avoir changé. Réexécutez pour obtenir les bonnes références croisées" signifie qu'une autre passe corrigera le problème. « Étiquette multipliée définie » signifie que deux commandes `\label` partagent un nom, et LaTeX utilise l'une d'entre elles en silence, alors renommez-la jusqu'à ce que chaque étiquette soit unique. Une convention de dénomination avec les préfixes `eq:`, `fig:` et `tab:` rend les collisions rares et la source plus facile à rechercher ; le flux de travail d'étiquette lui-même est couvert dans [nombres et pointeurs pour les équations](/learn/number-equations/).