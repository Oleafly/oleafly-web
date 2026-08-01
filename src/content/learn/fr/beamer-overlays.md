---

title: "Révéler les lignes au clic"
description: "Superposez les spécifications, faites une pause uniquement, sans en faire trop."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Révéler les lignes au clic

Un cadre Beamer peut être constitué de plusieurs diapositives physiques. Lorsque vous révélez des puces une par une, Beamer génère plusieurs pages PDF à partir du même cadre, chacune en affichant un peu plus. Avancer dans la visionneuse PDF les parcourt. Ces pages générées sont appelées superpositions. Apprendre à les contrôler est ce qui transforme un jeu statique en une conversation rythmée.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Spécifications de superposition

La notation entre crochets après `\item` est une spécification de superposition. Il indique sur quelles superpositions du cadre l'élément est visible. Le nombre est l'index de superposition dans ce cadre, et le trait d'union en fait une plage : `<2->` signifie à partir de la superposition 2, donc l'élément apparaît à la deuxième étape et reste. Un simple « <2> » signifierait la superposition 2 uniquement, de sorte que l'élément apparaîtrait puis disparaîtrait. Vous pouvez également donner des listes comme `<1,3>`. Beamer crée autant de superpositions que le nombre le plus élevé mentionné, de sorte que le cadre ci-dessus produit trois pages PDF.

Les spécifications de superposition fonctionnent sur plus que des éléments. `\textbf<2->{key term}` met le texte en gras à partir de la superposition 2, et `\only<2>{...}` inclut son contenu uniquement sur la superposition 2. Parce que `\only` supprime entièrement le contenu des autres superpositions, la mise en page environnante est redistribuée, ce qui en fait l'outil pour remplacer une figure par une autre au même endroit : donnez à deux blocs `\only` la même position et les mêmes spécifications consécutives. Son cousin `\uncover` réserve l'espace tout en cachant le contenu, donc rien ne bouge.

## L'outil le plus simple

`\pause` divise le cadre à ce stade. Tout ce qui précède s'affiche immédiatement, tout ce qui suit attend l'étape suivante et les commandes `\pause` répétées créent des étapes successives. Il ne nécessite aucun chiffre ni aucune planification, c'est donc la bonne valeur par défaut pour une révélation simple de haut en bas. Recherchez des spécifications explicites uniquement lorsque l'ordre de révélation diffère de l'ordre source, ou lorsque des éléments doivent apparaître et disparaître.

Un raccourci utile lorsque chaque élément d'une liste doit être classé dans l'ordre est `\begin{itemize}[<+->]`, qui attribue automatiquement des numéros de superposition croissants.

## Retenue

Les superpositions sont faciles à abuser. Un deck dans lequel chaque puce de chaque diapositive clique une à la fois épuise le présentateur (clic constant) et le public (pas de lecture à l'avance). Réservez des révélations échelonnées pour les quelques endroits où le rythme porte un argument, comme la construction d'une dérivation ou le contraste avant et après. Chaque superposition est une véritable page PDF, donc le document copie des ballons à moins que vous ne compiliez avec `\documentclass[handout]{beamer}`, qui réduit chaque image à sa superposition finale. Les bases du Frame sont couvertes dans [un premier deck Beamer](/learn/beamer-basics/).