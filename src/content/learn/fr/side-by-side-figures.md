---

title: "Deux panneaux sur une rangée"
description: "minipages côte à côte sans guerre de paquets."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Deux panneaux sur une rangée

Parfois, vous voulez deux images côte à côte, chacune avec sa propre légende et son propre numéro de figure. Vous n’avez pas besoin d’un forfait spécial pour cela. De simples boîtes « minipage » à l'intérieur d'un seul environnement « figure » ​​font le travail, et comme les deux images vivent dans un seul flotteur, LaTeX ne peut jamais les séparer sur des pages différentes.

## Le modèle

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

Une « minipage » est une boîte qui se comporte comme une page miniature : elle a une largeur fixe que vous choisissez, et son contenu s'enroule et s'empile à l'intérieur de cette largeur. Ici, chaque minipage prend « 0,48\textwidth », ce qui signifie 48 % de la largeur du texte. Cela laisse délibérément 4 pour cent non réclamés, et le « \hfill » entre les deux cases est un espace extensible qui s'étend pour le remplir, poussant un panneau vers la marge gauche et l'autre vers la droite. Si vous définissez les deux largeurs sur « 0,5\textwidth », elles totaliseraient exactement la largeur de la ligne sans place pour aucune séparation, et la deuxième case tomberait sur la ligne suivante, ce qui est la raison la plus courante pour laquelle les mises en page côte à côte s'empilent mystérieusement verticalement.

À l'intérieur de chaque minipage, `width=\linewidth` redimensionne l'image à la largeur de la boîte environnante, et non à la page entière. En utilisant `\textwidth`, il y a à la place une erreur fréquente qui rend chaque image aussi large que le bloc de texte complet, garantissant un débordement.

Notez où se trouvent les légendes : à l’intérieur de chaque minipage. Cela donne à chaque panneau une légende complète avec son propre numéro, de sorte que cette figure produit, disons, la figure 3 et la figure 4 placées sur une seule rangée. Les options de placement externes `[htbp]` indiquent à LaTeX qu'il peut placer le flottant ici, en haut d'une page, en bas ou sur une page flottante, dans cet ordre de préférence.

## Aligner les sommets et mélanger le contenu

Si les deux images ont des hauteurs différentes, leur alignement vertical peut paraître erroné, car les minipages s'alignent par défaut en leur centre. Écrivez plutôt `\begin{minipage}[t]{0.48\textwidth}` pour les aligner en haut. Les minipages ne se soucient pas non plus de ce qu'elles contiennent, donc cette même mise en page place une figure à côté d'un tableau, ou une image à côté d'un paragraphe de texte explicatif, pour lesquels les packages de style sous-figure ne sont pas conçus.

## Quand utiliser des sous-figures à la place

La seule chose que ce modèle ne peut pas vous offrir, ce sont des panneaux étiquetés (a) et (b) sous une seule légende partagée et un seul numéro de chiffre. Au moment où vous voulez "Figure 5(a)" plutôt que deux figures indépendantes, passez à [sous-figures](/learn/subfigures-abc/). Règle générale : les minipages sont destinées aux figures qui se trouvent être voisines, tandis que les sous-figures sont destinées à une figure qui comporte des pièces.