---

title: "Méthode, résultats, discussion : la salle des machines"
description: "Reproductibilité, résultats qui répondent aux questions, ablations et limites honnêtes."
category: "paper-anatomy"
order: 4
level: "intermediate"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Méthode, résultats, discussion : la salle des machines

Le milieu d’un article est l’endroit où se trouve la science réelle. C’est également là que l’écriture vague fait le plus de dégâts, car ces sections sont notées en fonction de leur précision. Voici ce que chacun doit au lecteur.

## Méthode : la reproductibilité est la barre

Le test pour une section de méthode est simple : un pair compétent pourrait-il reproduire votre travail à partir du texte et de votre matériel supplémentaire ? Cela signifie des détails concrets, pas des vibrations. Signalez les paramètres exacts, les répartitions de données, les étapes de prétraitement et les hyperparamètres, ou indiquez précisément où ils se trouvent (« paramètres complets dans l'annexe B »).

Une discipline utile : pendant que vous écrivez, gardez une liste courante de chaque décision que vous avez prise. Chacun va soit dans la section méthode, soit dans l'annexe, soit dans le code publié. S'il ne mène nulle part, un critique le trouvera.

## Résultats : répondez aux questions que vous avez posées

De fortes sections d'expérimentation s'ouvrent en énonçant les questions auxquelles les expériences répondent, souvent littéralement : "Nous demandons : (1) L'élagage préserve-t-il la précision ? (2) D'où vient l'accélération ?" Ensuite, chaque sous-section répond à une question. Les résultats qui ne répondent pas à une question posée sont triviaux, et les évaluateurs remarquent plus rapidement que toute autre chose l’inadéquation entre les affirmations et les preuves.

## Tableaux vs tracés

| Utilisez un tableau lorsque | Utilisez un tracé lorsque |
|---|---|
| Les valeurs exactes comptent | La tendance compte |
| Comparaison de méthodes sur des benchmarks fixes | Afficher le comportement sur une variable balayée |
| Peu de chiffres, haute précision | Plusieurs nombres, une seule forme |

La règle classique : des tableaux pour la recherche, des graphiques pour comparer les formes. En savoir plus sur la manière de rendre les deux lisibles dans [figures, tableaux et comparaisons](/learn/figures-tables-comparisons/), avec la mécanique LaTeX dans [tables](/learn/create-table/) et [captions et étiquettes](/learn/captions-labels/).

## Ablations, en un paragraphe

Une ablation supprime un composant de votre méthode à la fois pour montrer qu'elle mérite sa place. Si votre méthode comporte trois parties et que le système complet bat toutes les variantes en deux parties, chaque partie est justifiée. Les évaluateurs dans les domaines empiriques traitent les ablations comme des enjeux de table : une section de méthode qui introduit cinq composants et ne les teste jamais individuellement se lit comme non prise en charge. Une table compacte fait généralement l’affaire.

## Discussion vs conclusion

Ceux-ci fusionnent si souvent que les gens oublient qu’ils sont différents. La discussion interprète : que signifient les résultats, en quoi ont-ils été surprenants, qu'est-ce qu'ils ne montrent pas ? La conclusion résume : de quoi le lecteur doit-il se souvenir et que se passe-t-il ensuite ? Une discussion ajoute une nouvelle réflexion. Une conclusion n’ajoute rien de nouveau, volontairement. Si votre conclusion contient une affirmation qui n’apparaît nulle part ailleurs, déplacez-la.

## Limitations : désormais standard, réellement utile

Les sections sur les limitations explicites sont passées de facultatives à attendues dans de nombreux sites, et certaines les exigent. Considérez le vôtre comme un outil de crédibilité et non comme un aveu. Énoncez les véritables limites : les ensembles de données que vous n'avez pas testés, les hypothèses dont vous avez besoin en matière de preuve, les coûts de calcul, les cas d'échec que vous avez observés. Les critiques allaient les trouver de toute façon. Les nommer d'abord convertit les faiblesses en preuve que vous comprenez votre propre travail, et c'est bien mieux qu'un critique écrivant « les auteurs ne reconnaissent pas cela... » dans une revue publique.

## Un conseil structurel

Écrivez d'abord la section des résultats, à partir de vos chiffres réels. Ensuite, rédigez la section méthode pour expliquer exactement ce qui a produit ces chiffres, ainsi que la discussion pour les interpréter. Écrire dans l'ordre de lecture vous tente de décrire la méthode que vous vouliez exécuter plutôt que celle que vous avez exécutée.