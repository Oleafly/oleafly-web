---

title: "Tableaux de plus d'une page"
description: "en-têtes et pieds de page de table longue qui se répètent."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Tableaux de plus d'une page

Un environnement de « table » ordinaire est un flottant, et un flottant doit tenir sur une seule page. Donnez-lui soixante lignes et LaTeX soit le place sur une page flottante et la laisse déborder, soit le reporte pour toujours. Le correctif est le package « longtable », qui compose un tableau réparti sur plusieurs pages et répète son en-tête sur chacune d'entre elles, comme le fait une impression de feuille de calcul.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## Comment fonctionnent les blocs d'en-tête

Une « longtable » commence par jusqu'à quatre blocs de déclaration avant les lignes de données réelles. Tout ce qui se trouve au-dessus de `\endfirsthead` est l'en-tête imprimé une seule fois, au tout début du tableau. Tout entre `\endfirsthead` et `\endhead` est l'en-tête répété en haut de chaque page suivante, c'est pourquoi la même ligne "Clé et valeur" apparaît deux fois dans l'exemple. Le bloc se terminant par `\endfoot` s'imprime au bas de chaque page touchée par le tableau, ici juste un `\bottomrule` de fermeture. Il existe également `\endlastfoot` pour les éléments qui doivent apparaître uniquement sous les dernières lignes, comme une ligne de totaux. Si vous voulez un indice de continuation, un modèle courant est `\midrule \multicolumn{2}{r}{suite à la page suivante} \\` dans le bloc de pied et le vrai `\bottomrule` dans le dernier pied.

Après les déclarations viennent les lignes de données, écrites exactement comme dans un « tableau » normal avec « & » entre les cellules et « \\ » à la fin de chaque ligne. Les règles `booktabs` fonctionnent inchangées. Voir [tables à trois règles](/learn/booktabs-beautiful/) pour ce qu'elles remplacent.

## Pas un float, et ce que cela implique

La différence de comportement la plus importante est énoncée en une phrase : « longtable » n'est pas un flottant. Il commence exactement là où vous le placez dans la source, s'arrête là où les pages se terminent et ne prend aucun argument `[htbp]`. Cela change également le fonctionnement des sous-titres. Vous n'encapsulez pas une « longtable » dans un environnement « table ». Au lieu de cela, placez `\caption{...}\\` à l'intérieur du tableau lui-même, comme première ligne du bloc de premier en-tête, et il sera numéroté dans le même ordre que vos autres tableaux.

## Deux choses à savoir avant de vous y fier

Premièrement, les largeurs de colonnes sont décidées globalement, donc LaTeX peut avoir besoin de plusieurs passes de compilation avant que les colonnes cessent de se décaler. Continuez à compiler jusqu'à ce que la mise en page se stabilise. Deuxièmement, « longtable » ne peut pas être utilisé dans une disposition à deux colonnes, ce qui l'exclut pour la plupart des modèles de conférence. Dans ces documents, les options réalistes consistent à réduire le tableau, à le diviser en plusieurs parties ou à le déplacer vers une annexe à une seule colonne.