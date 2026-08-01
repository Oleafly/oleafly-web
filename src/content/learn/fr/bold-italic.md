---

title: "Mettre l'accent sans combattre la police"
description: "textbf, textit, emph, mono et pourquoi emph s'emboîte mieux que les italiques codés en dur."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Mettre l'accent sans combattre la police

L'accent mis dans LaTeX provient d'un petit ensemble de commandes qui prennent chacune le texte affecté comme argument entre accolades. LaTeX sépare deux idées que la plupart des traitements de texte fusionnent : appliquer une police spécifique et marquer une étendue comme soulignée. Savoir quelle commande fait ce qui maintient les documents cohérents lorsque les styles changent.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## Les commandes

`\textbf` définit le gras, le traitement standard pour les accents forts et les mots-clés dans les définitions. `\textit` définit directement le type italique. `\texttt` passe à la police de machine à écrire à espacement fixe, la convention pour les noms de fichiers, les commandes et les identifiants de code dans le texte en cours d'exécution. `\textsc` définit les petites majuscules, courantes pour les noms d'auteurs dans les bibliographies et pour les acronymes qui autrement domineraient une ligne de texte.

`\underline` existe mais mérite son commentaire dans l'exemple. Le soulignement est un substitut de l'italique à l'ère des machines à écrire, et dans LaTeX, il a également un problème mécanique : le texte souligné est placé dans une boîte, il ne peut donc pas traverser les lignes, et une longue phrase soulignée débordera de la marge. En typographie imprimée, l’italique fait le travail que faisait le soulignement.

Les commandes s'imbriquent, donc `\textbf{\textit{bold italic}}` combine les deux lorsque la police fournit le visage.

## Pourquoi \emph

`\emph` marque le sens plutôt que l'apparence : il dit « souligner ceci » et laisse le contexte décider comment. Dans le texte vertical, il imprime les italiques. À l'intérieur d'un texte déjà en italique, il revient à la position verticale, de sorte que l'accentuation reste visible. Le « \textit » codé en dur à l'intérieur du texte en italique reste simplement en italique et l'accent interne disparaît. L’intention de marquage est également payante plus tard. Une classe ou un package peut redéfinir à quoi ressemble l'accentuation en un seul endroit sans modification dans l'ensemble du document.

Règle générale : utilisez `\emph` pour mettre l'accent sur la prose courante et réservez `\textit` pour les éléments qui sont conventionnellement en italique quel que soit le contexte, tels que les titres de livres, les phrases étrangères et les noms d'espèces.

## Limites et habitudes

Ce sont toutes des commandes en mode texte et elles se comportent mal dans les formules. Les symboles mathématiques en gras ont besoin de `\mathbf` ou `\boldsymbol`, traités dans [gras math](/learn/bold-math/). Résistez à l’accentuation de l’empilement, car lorsque tout est audacieux, rien ne ressort. Créez des titres à partir de commandes structurelles telles que « \section » plutôt que du gras manuel, car la structure alimente également la table des matières et les signets PDF. [Types plus grands et plus petits](/learn/font-size/) fait le même argument pour les tailles de police.