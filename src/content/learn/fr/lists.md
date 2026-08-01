---

title: "Puces, nombres et listes de définitions"
description: "les étiquettes d'éléments détaillés, énumérées, de description, d'imbrication et personnalisées."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Puces, nombres et listes de définitions

Les listes dans LaTeX sont des environnements : vous en ouvrez une avec `\begin{...}`, vous la fermez avec `\end{...}` et vous marquez chaque entrée avec `\item`. LaTeX gère ensuite la numérotation, les puces, l'indentation et l'espacement pour vous. Cette dernière partie est le point important. Vous ne renumérotez jamais quoi que ce soit à la main, et si vous supprimez la troisième entrée d'une liste numérotée, les entrées quatre à dix deviennent silencieusement trois à neuf.

## Les trois environnements de liste

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

`itemize` produit une liste à puces non ordonnée et constitue le bon choix lorsque les entrées n'ont pas de séquence, comme une liste d'hypothèses. « énumérer » numérote automatiquement chaque entrée, ce qui correspond à ce que vous souhaitez pour les étapes qui se déroulent dans l'ordre ou pour les éléments auxquels vous prévoyez de vous référer. Vous pouvez même mettre un `\label` après un `\item` dans une énumération et référencer son numéro plus tard avec `\ref`, tout comme vous le feriez pour une section.

« description » est le moins connu des trois mais très utile. Chaque `\item` prend un argument facultatif entre crochets, et cet argument est imprimé en gras sous forme d'étiquette avec le texte de définition qui le suit. C'est l'environnement naturel des glossaires, des listes de notations ou de toute structure « terme : explication ».

## Nidification

Environnements Nest pour les listes à plusieurs niveaux. Placez un bloc `\begin{itemize} ... \end{itemize}` complet à l'intérieur d'un `\item` d'une liste externe et LaTeX le met en retrait et change automatiquement le symbole de puce. La même chose fonctionne pour « énumérer », où l'imbrication change le style de numérotation à chaque niveau : les chiffres arabes d'abord, puis les lettres, puis les chiffres romains. LaTeX prend en charge quatre niveaux d'imbrication, ce qui est plus que ce dont un document lisible a besoin. Si vous vous trouvez à trois niveaux de profondeur, le matériel voudra probablement plutôt être de la prose ou un tableau.

## Étiquettes personnalisées

N'importe quel élément peut remplacer son propre marqueur avec l'argument facultatif : `\item[(a)]` imprime "(a)" au lieu de la puce ou du numéro. C'est pratique pour les cas ponctuels, mais si vous souhaitez relooker toute une liste, modifier chaque élément à la main va à l'encontre de l'automatisation. Pour cela, chargez le package `enumitem`, qui vous permet d'écrire des choses comme `\begin{enumerate}[label=(\alph*)]` pour réétiqueter la liste entière en un seul endroit, et vous donne également des options pour resserrer l'espacement vertical.

Une erreur courante du débutant consiste à laisser une ligne vide entre les entrées `\item` dans l'espoir de les espacer. La ligne vide est inoffensive dans une liste, mais elle ne fait rien visuellement. L'espacement est contrôlé par l'environnement de liste lui-même ou par les options `enumitem`. Un autre : chaque environnement de liste doit contenir au moins un `\item` avant tout texte, sinon vous obtenez l'erreur déroutante "Quelque chose ne va pas - peut-être un \item manquant". Vous pouvez expérimenter les trois environnements dans le [terrain de jeu en direct](/live/).