---

title: "Notes de bas de page, références et annexes : qui fait quoi"
description: "Où les apartés, les preuves et les documents de débordement appartiennent-ils chacun, et qui les lit réellement."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Notes de bas de page, références et annexes : qui fait quoi

Un journal dispose de trois emplacements pour stocker du matériel qui n'appartient pas au flux principal, et chacun a une tâche distincte. Mettez le bon contenu au bon endroit et les lecteurs restent orientés. Mélangez-les et votre papier se lit comme un tiroir à déchets.

## Notes de bas de page : le côté poli

Une note de bas de page sert à quelque chose qui mérite d'être dit mais qui ne vaut pas la peine d'interrompre la phrase pour : une URL, une clarification, une mise en garde, un "nous remercions un évaluateur pour cette observation".

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Utilisez-les avec parcimonie. Un article avec une note de bas de page par paragraphe est un article qui argumente avec lui-même. Si le contenu est essentiel, valorisez-le dans le texte. S'il s'agit d'un travail antérieur citable, il appartient plutôt aux références. Et certains sites interdisent les notes de bas de page pour les URL en faveur de citations appropriées, alors vérifiez le modèle.

## Références : la piste des preuves

Lorsque vous citez un ouvrage, vous pointez du doigt les preuves qui se cachent derrière une affirmation : ce fait a été établi là, cette méthode a été introduite par eux, cet ensemble de données vient d'ici. La liste de références est la carte complète des personnes sur lesquelles vous bâtissez, et les évaluateurs la vérifient soigneusement, à la fois pour les entrées manquantes et pour les affirmations épinglées dans des citations qui ne les soutiennent pas réellement.

Dans LaTeX, la mécanique est automatique : `\cite{key}` dans le texte, une entrée dans votre fichier `.bib` et la liste s'affiche d'elle-même.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

Le flux de travail complet se trouve dans [ajout de citations](/learn/add-citations/) et [création d'une bibliographie](/learn/create-bibliography/). Oleafly peut remplir une entrée « .bib » à partir d'une recherche DOI, ce qui surpasse les listes d'auteurs saisies à la main.

## Annexe : la salle de débordement

L'annexe contient du matériel qui prend en charge l'article mais qui en interromprait le flux : preuves complètes, tableaux de résultats supplémentaires, grilles d'hyperparamètres, modèles d'invite, documentation des ensembles de données. La règle est que le journal principal doit être autonome. Un lecteur qui n’ouvre jamais l’annexe devrait quand même être convaincu ; un lecteur qui l'ouvre devrait trouver tous les détails qui lui ont été promis.

```latex
\appendix
\section{Full proofs}
```

Après `\appendix`, les sections s'écrivent automatiquement A, B, C.

## Matériel supplémentaire : en dehors du PDF

Le matériel supplémentaire désigne tout ce qui ne peut pas du tout vivre dans un PDF : code, données, vidéos, démos interactives. De nombreux sites les collectent sous forme de téléchargement séparé avec leurs propres limites de taille. Traitez-le comme faisant partie de votre histoire de reproductibilité et faites-y référence explicitement dans la section méthode afin que les lecteurs sachent qu'il existe.

## Qui lit réellement quoi

| Partie | Comportement des évaluateurs |
|---|---|
| Notes de bas de page | Lu au passage, vite oublié |
| Références | Scanné à la recherche de travaux manquants, en particulier le leur |
| Annexe | Ouvert lorsqu'une réclamation dans le journal doit être vérifiée |
| Supplémentaire | Ouvert par le seul réviseur qui exécute votre code |

Ce que cela signifie en pratique : ne cachez jamais rien d’essentiel dans une note de bas de page ou une annexe. Les évaluateurs jugent le texte principal, et « la réponse était dans l'Annexe F » n'a jamais adouci une seule critique. Placez votre meilleur matériel là où le skim le trouvera et laissez le dos faire ce qu'il fait de mieux : tenir tranquillement les reçus.