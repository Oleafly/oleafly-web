---

title: "Pointez sur d’autres parties du PDF"
description: "label et ref, plus intelligent pour les noms automatiques."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Pointez sur d'autres parties du PDF

Taper « voir Figure 3 » à la main est une promesse que vous ne pouvez pas tenir. Ajoutez un chiffre plus tôt dans le document et chaque chiffre tapé à la main après est faux. LaTeX résout ce problème avec un mécanisme en deux parties : `\label` attache le nom de votre choix à un objet numéroté, et `\ref` imprime le numéro avec lequel cet objet s'est retrouvé. Vous faites référence à des noms et le compilateur garde les chiffres honnêtes.

## Etiquette et réf

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` enregistre le numéro attribué le plus récemment, ici celui de la section, sous la clé `sec:methods`. Plus tard, `\ref{sec:methods}` imprime ce nombre, et `\eqref` est la variante amsmath qui ajoute la convention des parenthèses pour les équations, en imprimant "(1)" plutôt que "1".

Deux détails dans cet exemple comptent beaucoup. Premièrement, à l'intérieur d'une figure, l'étiquette doit venir après `\caption`, car la légende est ce qui fait avancer le compteur de la figure ; une étiquette placée devant elle reprend silencieusement le numéro de la section actuelle à la place. Deuxièmement, le `~` dans `Figure~\ref{...}` est un espace insécable, qui maintient le mot et son numéro sur la même ligne plutôt que de laisser "Figure" terminer une ligne et "3" commencer la suivante.

Les préfixes `sec:`, `fig:` et `eq:` sont de pures conventions. LaTeX n'en a pas besoin, mais ils rendent les clés lisibles et permettent à l'éditeur de regrouper automatiquement vos étiquettes par type.

## Pourquoi tu vois ??

Lors de la première compilation après l'ajout d'une étiquette, `\ref` imprime `??`. Les nombres sont résolus via le fichier `.aux` écrit lors de l'exécution précédente, donc une nouvelle étiquette nécessite une compilation supplémentaire pour apparaître ; [pourquoi vous compilez plus d'une fois](/learn/compile-to-pdf/) explique le mécanisme. Un `??` qui survit à deux compilations consécutives signifie presque toujours que la clé dans `\ref` ne correspond pas à la clé dans `\label`.

## smartef écrit le mot pour vous

Avec smartef (chargement après hyperref) :

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` imprime "Figure 3", le nom du type inclus, et s'adapte si l'étiquette s'avère être un tableau ou une équation à la place. `\Cref` met en majuscule les débuts de phrases et `\cref{eq:a,eq:b,eq:c}` compresse une liste en une plage. Notez l'ordre de chargement : intelligentef est l'un des rares packages qui doit venir après [hyperref](/learn/hyperlinks/), l'inverse de la règle habituelle. Adoptez-le tôt. La conversion de `\cref` dans un papier rempli de phrases "Figure~\ref" écrites à la main est fastidieuse.