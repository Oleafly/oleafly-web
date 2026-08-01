---

title: "Limites de pages sans délits typographiques"
description: "Les moyens légitimes de respecter la limite, les hacks qui font signaler les papiers et les raisons pour lesquelles les sites vérifient."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Limites de pages sans crimes typographiques

Votre article fait 10,4 pages. La limite est de 10. Ce qui se passe dans l'heure suivante détermine si vous corrigez le papier ou si vous commettez une violation de formatage qui le fera rejeter par le bureau.

## Pressez le contenu, pas le format

Travaillez cette liste dans l’ordre. Chaque étape est invisible pour les vérificateurs de format car elle modifie le papier et non le modèle.

1. **Resserrez d'abord la prose.** Une demi-page de débordement est généralement une section verbeuse liée au travail et trois phrases de transition redondantes. Couper les mots améliore le papier. Ce n’est pas le cas de couper les espaces.
2. **Chassez les veuves.** Un paragraphe dont la dernière ligne contient un ou deux mots gaspille une ligne complète. Réécrire une phrase dans ce paragraphe la récupère.
3. **Redimensionnez honnêtement les chiffres.** De nombreux chiffres ont d'énormes marges internes. Coupez les espaces dans la figure elle-même ou déposez une figure à deux colonnes sur une seule colonne si elle reste lisible.
4. **Tableaux minces.** Les tableaux `booktabs` sans règles verticales sont plus compacts et plus beaux, voir [belles tables](/learn/booktabs-beautiful/), et les en-têtes de colonnes abrégés achètent la largeur réelle.
5. **Utilisez des figures vectorielles.** Les tracés PDF sont réduits proprement, vous pouvez donc les réduire davantage que les PNG pixellisés avant que la lisibilité ne meure. Les figures raster floues ont leurs propres problèmes, voir [polices floues dans les PDF](/learn/fuzzy-font-pdf/).
6. **Déplacez le matériel vers une annexe ou un supplément**, si le lieu le permet. Les preuves, les ablations supplémentaires et les tableaux d'hyperparamètres sont des candidats classiques au débordement. Vérifiez si l'annexe est prise en compte dans la limite, de nombreux sites l'excluent, d'autres non.

## Les délits

Ceux-ci modifient le modèle au lieu du papier. Les comités de programme utilisent des vérificateurs de format automatisés précisément parce que les gens les essaient :

| Criminalité | Comment il est attrapé |
|---|---|
| `\vspace{-8pt}` éparpillé partout | Espacement visiblement restreint, différences par rapport aux valeurs par défaut de la classe |
| `\usepackage[margin=...]{géométrie}` | Mesure automatisée de la marge |
| Réduire `\baselinestretch` ou la taille de la police | Nombre de lignes par colonne, sondes de taille de police |
| `\small` ou `\footnotesize` sur le corps du texte ou les légendes | Sondes de taille de police, globes oculaires des réviseurs |
| `\itemsep` négatif, listes écrasées | Aspect exigu, heuristique de contrôle |
| Renommer le fichier de classe avec les modifications à l'intérieur | Somme de contrôle par rapport à la classe officielle |

## Pourquoi les sites vérifient réellement

Une limite de pages est un contrat d'équité : chaque auteur dispose du même espace et chaque critique s'engage à lire un nombre limité de pages. Un article qui triche jusqu'à 10 pages est en réalité un article de 11 pages en concurrence avec des articles honnêtes de 10 pages. C’est pourquoi les violations sont traitées comme une question d’intégrité et non comme une question de style. De nombreux sites rejettent sans examen, et il n'y a aucun appel disant "mais le contenu était bon".

## Le dernier recours honnête

Si vous avez resserré la prose, affiné les flotteurs, déplacé les épreuves en annexe, et que vous avez encore fini : coupez un résultat. Douloureux, mais un article ciblé de 10 pages fait de toute façon de meilleures critiques qu'un article surchargé. Les évaluateurs peuvent ressentir de la densité, et [choisir un lieu](/learn/choose-your-venue/) avec un format plus long est toujours une option pour la prochaine soumission.