---

title: "Les chiffres, les tableaux et les comparaisons portent le papier"
description: "Légendes à retenir, tableaux de comparaison, tracés par rapport aux tableaux et cohérence visuelle."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Les chiffres, tableaux et comparaisons portent le papier

Voici comment un critique occupé lit réellement votre article : le résumé, puis un feuilletage de chaque figure et tableau, puis peut-être du texte. Si vos visuels racontent l'histoire à eux seuls, vous avez remporté la moitié de l'évaluation avant qu'un seul paragraphe ne soit lu. Concevez-les comme s’il s’agissait du papier. Pour de nombreux lecteurs, ils le sont.

## Chaque chiffre a besoin d'une légende à retenir

Une légende qui dit « Résultats sur l'ensemble de données A » gaspille l'immobilier le plus précieux du journal. Une légende qui dit "Notre méthode (en bleu) correspond à la ligne de base à moitié prix ; l'écart se creuse avec la taille du modèle" indique au réviseur inversé exactement quoi conclure. Écrivez des légendes sous forme d'affirmations, puis laissez la figure les prouver. Un lecteur devrait être capable de lire uniquement vos légendes et de reconstituer l'argument. La mécanique des légendes et de la numérotation réside dans [légendes et étiquettes](/learn/captions-labels/).

## Tableaux comparatifs : les préférés du reviewer

Deux modèles de tableaux dominent les articles empiriques :

**Le tableau des lignes de base.** Votre méthode par rapport aux travaux antérieurs, une ligne chacune, les meilleurs chiffres en gras. Incluez les lignes de base évidentes même lorsqu'ils perdent beaucoup. Omettre une ligne de base bien connue revient à cacher quelque chose.

**La matrice de coches.** Capacités en bas, méthodes en haut, coches où une méthode possède la propriété. Il positionne votre travail en un seul coup d'œil :

| Capacité | Avant A | Avant B | Le nôtre |
|---|---|---|---|
| Aucune reconversion nécessaire | oui | non | oui |
| Fonctionne à grande échelle | non | oui | oui |
| Source ouverte | non | non | oui |

Restez honnête. Les évaluateurs connaissent l'astuce consistant à choisir les lignes que votre méthode gagne.

## Terrain ou tableau ?

Utilisez un tracé lorsque la forme est le message : une tendance, un croisement, une courbe d'échelle. Utilisez un tableau lorsque les chiffres exacts constituent le message : des scores de référence auxquels tout le monde se comparera. En cas de doute, demandez ce que le lecteur va en faire. S'ils veulent bien citer le numéro, tableau. S'ils veulent décrire la tendance, complotez.

## La cohérence est la crédibilité

De petites incohérences visuelles signalent discrètement une négligence :

- Même famille de polices et même taille sur toutes les figures, proches de la taille du corps du texte après mise à l'échelle.
- Même couleur pour la même méthode dans chaque parcelle. Si votre méthode est bleue sur la figure 2, elle est bleue partout.
- Mêmes conventions et unités d'étiquette d'axe partout.
- Lisible au format imprimé. Si vous devez zoomer pour lire une étiquette de coche, elle est trop petite.

Exportez des formats vectoriels (PDF, SVG) plutôt que des captures d'écran dans la mesure du possible. Les tracés bitmap avec du texte flou sont le moyen le plus rapide de paraître brut.

## Les construire en LaTeX

Le placement, le dimensionnement et la gestion du système flottant sont traités dans [insertion d'images] (/learn/insert-images/) et le nettoyage des tables dans [création de tables] (/learn/create-table/). Pour les diagrammes, les croquis d'architecture et les organigrammes, TikZ produit des graphiques vectoriels qui correspondent exactement aux polices de votre document. Commencez par [l'intro de TikZ](/learn/tikz-intro/). Si l'écriture manuscrite de TikZ semble lente, Diagram Composer d'Oleafly peut vous aider à rédiger visuellement des figures TikZ que vous affinez ensuite dans le code.

## L'audit de cinq minutes

Avant de soumettre, faites en sorte que le critique vous retourne : lisez uniquement les légendes, dans l'ordre. Racontent-ils toute l’histoire ? Y a-t-il quelque chose en gras, coloré ou étoilé sans explication ? Un étranger saurait-il quelle est votre méthode dans chaque figure ? Corrigez ce qui échoue, puis soumettez.