---

title: "Une colonne ou deux"
description: "Pourquoi les dispositions diffèrent selon le lieu, quel est l'effet de deux colonnes sur les figures et les équations, et qui décide."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Une colonne ou deux

Ouvrez dix journaux et vous verrez deux tribus : des pages denses à deux colonnes qui ressemblent à du papier journal et des pages aérées à une colonne qui ressemblent à un livre. Ni l’un ni l’autre n’est meilleur. Chacun a évolué pour une raison, et le choix ne vous appartient presque jamais.

## Pourquoi les lieux diffèrent

Les mises en page sur deux colonnes sont une tradition de conférence, née lorsque les actes étaient imprimés et que les budgets de pages étaient serrés. Les colonnes étroites contiennent plus de mots par page et les lignes courtes sont plus faciles à numériser. La plupart des conférences CS (ACM, IEEE et amis) les utilisent encore.

Les mises en page sur une seule colonne dominent les revues, les prépublications et les thèses. Ils permettent aux équations, aux figures et aux tableaux de respirer et sont plus conviviaux pour la lecture de longs formulaires. Les serveurs de pré-impression et de nombreux sites de ML ont dérivé vers une seule colonne en partie précisément pour cette raison.

| Mise en page | Maison typique | Personnalité |
|---|---|---|
| Deux colonnes | Actes de la conférence | Dense, numérisable, limité en pages |
| Une colonne | Revues, prépublications, thèses | Spacieux, lisible, convivial pour les équations |

## Quel est l'effet de deux colonnes sur vos chiffres

Dans un document à deux colonnes, une « figure » normale flotte dans une colonne, ce qui est souvent trop étroit pour un tracé détaillé. La variante étoilée s'étend sur les deux colonnes :

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

Même astuce pour les tables larges avec `table*`. Un problème : les flotteurs étoilés atterrissent généralement en haut d'une page et ne peuvent pas être placés en bas ou ici, alors planifiez vos figures larges à l'avance. Les bases du dimensionnement se trouvent dans [insertion d'images](/learn/insert-images/).

## Les équations deviennent à l'étroit

Une colonne d’environ 3,3 pouces de large est un endroit hostile pour les longues équations. Dans les articles à deux colonnes, vous briserez les équations plus souvent, abrégerez de manière plus agressive et vous appuyerez sur des environnements multilignes. Si votre article contient beaucoup d'équations et que vous avez le choix du lieu, une seule colonne vous fera gagner un temps réel de formatage. Voir [math mode](/learn/math-mode/) pour les outils.

## Les écrans et les lecteurs d'écran préfèrent une seule colonne

Pour tout ce qui n'est pas une soumission papier formelle (rapports, documentation, curriculum vitae, prépublications que les gens liront sur des ordinateurs portables et des téléphones), une seule colonne l'emporte. Les PDF ne sont pas redistribués, donc les pages à deux colonnes obligent les lecteurs d'écran et les extracteurs de texte à deviner l'ordre de lecture, et elles obligent les humains à faire défiler chaque page de haut en bas. Les systèmes d’analyse de CV sont connus pour brouiller les mises en page multi-colonnes. Réservez deux colonnes pour les lieux qui les demandent.

## La classe de document décide pour vous

Voici la partie relaxante : vous ne configurez presque jamais cela à la main. Le lieu vous remet un cours ou un modèle, et la mise en page l'accompagne.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Écrivez votre contenu une seule fois et le changement de modèle redistribue tout. C'est à cela que sert LaTeX : la même source est compilée en une version de conférence sur deux colonnes et une préimpression sur une colonne avec un changement d'une ligne. Conservez vos figures au format vectoriel et vos équations dans des environnements standard, et le changement de mise en page est presque indolore.