---

title: "Prêt à photographier sans panique"
description: "Désanonymisez, ajoutez du financement, intégrez des polices et atteignez la limite de pages : la liste de contrôle de la version finale."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Prêt pour l'appareil photo sans panique

Accepté! Après la célébration vient une dernière date limite : être prêt à photographier. Le nom est une relique de l’époque où les éditeurs photographiaient vos pages pour les imprimer. Aujourd’hui, cela signifie la version finale qui entre dans les débats, exactement telle que les lecteurs la verront pour toujours. Aucun éditeur ne corrige vos fautes de frappe après cela. Cette partie vous incombe.

## Qu'est-ce qui change entre la soumission et la préparation à la caméra

La version que vous avez soumise a été optimisée pour les réviseurs. Le prêt à photographier est destiné à l'enregistrement permanent, et plusieurs choses changent :

| Article | Version soumise | Prêt pour l'appareil photo |
|---|---|---|
| Noms des auteurs | Caché (en double aveugle) | Vrais noms, affiliations, emails |
| Remerciements | Omis | Financement, subventions, remerciements |
| Limite de pages | Limite de révision | Souvent +1 page, mais exacte |
| Blocage des droits d'auteur | Espace réservé ou aucun | Bloc éditeur, DOI, ISBN |
| Auto-citations | Troisième personne ("Smith et al.") | Peut dire "notre travail antérieur" |
| Promesses de réfutation | Promis | Effectivement livré |

La désanonymisation ne se résume pas à rajouter des noms. Recherchez la source de chaque endroit où vous avez écrit autour de votre identité ; voir [anonymisation pour examen en double aveugle](/learn/anonymization-double-blind/) pour les cachettes habituelles, puis inversez-les toutes.

## La limite exacte de pages, encore une fois

Les limites de prise en photo sont appliquées par les éditeurs, pas seulement par les présidents, et le contenu supplémentaire (blocage de l'auteur, remerciements) consomme de l'espace. Si vous avez soudainement dépassé six lignes, faites-le honnêtement : resserrez la prose et les figures plutôt que d'abuser des commandes d'espacement. Les techniques décrites dans [limites de pages sans crimes](/learn/page-limits-without-crimes/) s'appliquent doublement ici, car les éditeurs vérifient le formatage.

## Les polices doivent être intégrées

C'est celui qui mord les gens. Les éditeurs effectuent des contrôles automatisés et la principale raison de rejet concerne les polices non intégrées, généralement introduites clandestinement par un PDF de figure exporté à partir d'un outil de traçage. Vérifiez avec « pdffonts yourpaper.pdf » : chaque police doit dire « emb : yes ». Si ce n’est pas le cas, le coupable est presque toujours un personnage ; réexportez-le avec les polices intégrées ou sous forme de PDF correctement généré.

## La relecture finale : les références en premier

Les références sont l'endroit où l'entropie se concentre. Avant de télécharger :

- [ ] Non "??" citations ou références non définies dans le journal
- [ ] Chaque entrée de bibliographie a le lieu, l'année et le titre correctement casse
- [ ] Noms des auteurs correctement orthographiés (les gens remarquent leur propre nom)
- [ ] Citations arXiv uniquement mises à jour vers les versions publiées là où elles existent
- [ ] Les URL dans les références sont toujours résolues

Lisez ensuite l’intégralité du document à haute voix une fois. C'est lent et ça marche.

## bizarreries de téléchargement de source

La plupart des éditeurs veulent votre source LaTeX, pas seulement le PDF, et leurs systèmes de construction sont pointilleux : incluez le `.bbl`, évitez les packages non standard, suivez la disposition de leurs fichiers. Exportez un ZIP source propre (Oleafly le fait en une seule étape) et testez-le, compilez-le à partir de zéro dans un dossier vide avant de le télécharger. S'il se construit uniquement à cause d'un fichier parasite sur votre ordinateur, le système de l'éditeur le découvrira.

## La liste de contrôle en une seule séance

- [ ] Noms, affiliations, emails restaurés et corrects
- [ ] Remerciements et numéros de financement ajoutés
- [ ] Blocage des droits d'auteur / informations DOI collées depuis l'e-mail de l'éditeur
- [ ] Limite de pages atteinte exactement
- [ ] `pdffonts` affiche toutes les polices intégrées
- [ ] Références relues
- [ ] Le ZIP source propre compile à partir de zéro
- [ ] Mis en ligne avec un jour à perdre

Ensuite, c’est fait, définitivement. Il est temps de réfléchir à [le présenter](/learn/present-your-paper/).