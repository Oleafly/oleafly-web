---

title: "Cellules qui s'étendent sur des lignes ou des colonnes"
description: "multicolonne, multiligne, cmidrule sous en-têtes groupés."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Cellules qui s'étendent sur des lignes ou des colonnes

Les vrais tableaux nécessitent souvent des cellules fusionnées. Un en-tête tel que « Scores » qui se trouve au-dessus de deux colonnes de mesures s'étend sur des colonnes, et un nom de modèle qui s'applique à deux lignes de résultats s'étend sur des lignes. LaTeX gère les deux directions avec des outils différents : `\multicolumn` est intégré, tandis que `\multirow` vient du package du même nom. Voici un tableau compact qui utilise les deux, plus une règle partielle de « booktabs » :

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Colonnes étendues

`\multicolumn{2}{c}{Scores}` remplace deux cellules ordinaires par une. Le premier argument est le nombre de colonnes à absorber, le deuxième est une spécification de colonne pour cette cellule uniquement, ici « c » pour centré, et le troisième est le contenu. Notez le seul `&` avant : la première colonne de cette ligne est délibérément vide, donc « Scores » commence dans la colonne 2 et couvre les colonnes 2 et 3. Parce que le deuxième argument remplace localement le type de colonne, `\multicolumn{1}{c}{...}` est également l'astuce standard pour centrer une seule cellule d'en-tête au-dessus d'une colonne alignée à gauche.

## La règle partielle

`\cmidrule(lr){2-3}` dessine une règle horizontale sous les colonnes 2 à 3 uniquement, qui lie visuellement l'en-tête groupé à ses colonnes. L'option `(lr)` coupe légèrement la règle à ses extrémités gauche et droite, de sorte que les `\cmidrule` adjacents ne se touchent pas et ne se lisent pas comme des marqueurs de groupe séparés. Il s'agit d'une commande `booktabs`, et le découpage est l'un des détails qui donne à ces tableaux un aspect composé plutôt que dessiné. Le style complet à trois règles est couvert dans [tableaux à trois règles](/learn/booktabs-beautiful/).

## S'étendant sur des lignes

`\multirow{2}{*}{Ours}` imprime "Ours" centré verticalement sur 2 lignes. Le premier argument est le nombre de lignes, le deuxième est la largeur de la cellule, où « * » signifie la largeur naturelle du contenu, et le troisième est le contenu lui-même. La commande ne réserve que l'espace visuel, donc la deuxième ligne doit toujours fournir une première cellule vide, c'est pourquoi la ligne suivante commence par un simple « & ». En oubliant que la cellule vide décale chaque valeur de la ligne d'une colonne vers la gauche et que le message d'erreur de désalignement pointe sur la mauvaise ligne, vérifiez donc d'abord la ligne après un `\multirow`.

## Une limite pratique

Il est préférable de conserver les cellules fusionnées dans les en-têtes et les groupes de rangées courtes. Un tableau dans lequel les cellules de données s'étendent dans les deux sens est difficile à lire et à maintenir, car chaque ligne ajoutée vous oblige à recompter les étendues. Si vous vous retrouvez à imbriquer `\multirow` dans `\multicolumn`, envisagez plutôt de restructurer la table.