---

title: "Algorithmes et listes de sources"
description: "algorithm2e croquis et listes pour le vrai code."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algorithmes et listes de sources

Les articles présentent le code sous deux formes distinctes, et LaTeX dispose d'un outil distinct pour chacune. Le pseudocode est une esquisse idéalisée d'un algorithme, composé de mots-clés et de mathématiques, et le package `algorithm2e` le gère. Les listes de sources sont du code réel reproduit textuellement dans une police à espacement fixe, et le package `listings` les gère. Choisir le mauvais outil est la source habituelle de friction, il est donc utile de voir les deux.

## Pseudocode avec algorithm2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

Les options du package définissent le style visuel : « ruled » dessine des règles horizontales au-dessus et au-dessous de l'algorithme et place la légende en haut, la convention attendue par la plupart des sites, tandis que « vlined » dessine une petite ligne verticale marquant l'étendue de chaque bloc, de sorte que l'imbrication reste lisible sans indentation importante. L'environnement `algorithm` est un flottant, comme une figure, il porte donc le `\caption` qui lui donne un numéro que `\ref` peut citer.

À l'intérieur, `\While{condition}{body}` compose la boucle avec un mot-clé en gras, la condition et le corps sous forme de bloc en retrait. `\For`, `\If` et `\Return` suivent le même modèle. Les instructions se terminent par `\;`, qui imprime le terminateur de la ligne et commence une nouvelle ligne. L’oublier est l’erreur classique du débutant : les lignes se rejoignent. Parce qu'il s'agit de LaTeX ordinaire, les mathématiques comme `$\theta$` fonctionnent en ligne, ce à quoi sert le pseudocode : décrire la règle de mise à jour en notation plutôt que dans un langage particulier.

## Code réel avec listes

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

L'environnement `lstlisting` reproduit exactement son contenu, en préservant les espaces et en traitant les caractères spéciaux littéralement, afin que vous puissiez coller du code sans rien échapper. L'option « langue=Python » active la mise en évidence des mots-clés pour cette langue, et « listings » en connaît des dizaines d'autres. Par défaut, la sortie est simple. La plupart des gens ajoutent un `\lstset{basicstyle=\ttfamily\small,numbers=left}` unique dans le préambule pour obtenir une police à espacement fixe d'une taille raisonnable avec des numéros de ligne. Pour inclure un fichier directement au lieu de le coller, `\lstinputlisting[langue=Python]{train.py}` le lit à partir du disque, ce qui maintient le papier synchronisé avec la source réelle. Si vous souhaitez un surlignage coloré et haute fidélité, le package « minted » est l'alternative la plus puissante, au prix de nécessiter un outil externe et une évasion de coque.

## Choisir entre eux

Utilisez un pseudocode dans le corps du document pour communiquer l'idée et réservez des listes textuelles pour les artefacts pour lesquels le code exact est important, comme les annexes ou les descriptions d'outils. Une erreur courante consiste à placer un « lstlisting » à l'intérieur d'un cadre Beamer sans l'option « [fragile] », ce qui échoue avec une erreur opaque ; la même mise en garde apparaît dans [un premier deck Beamer] (/learn/beamer-basics/).