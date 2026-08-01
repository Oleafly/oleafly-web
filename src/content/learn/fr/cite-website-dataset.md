---

title: "Pages Web, vidéos, ensembles de données"
description: "entrées diverses/en ligne et dates d'accès pour les URL fragiles."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Pages Web, vidéos, ensembles de données

BibTeX a été conçu dans les années 1980 pour les revues, les livres et les actes de conférences. Il n'a donc aucune idée native d'une page Web, d'une vidéo YouTube ou d'un ensemble de données sur Zenodo. Vous devez toujours citer ces éléments en permanence, et la solution de contournement standard est le type d'entrée `@misc`, qui accepte presque toutes les combinaisons de champs et permet au style de les imprimer de manière judicieuse.

## Le modèle @misc

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Trois détails comptent ici. Les doubles accolades autour de `{{Oleafly Contributors}}` indiquent à BibTeX de traiter la chaîne entière comme un seul nom littéral ; sans eux, il analyserait « Contributeurs » comme un nom de famille et abrégerait le reste en « O. Contributeurs ». Le champ `howpublished` est l'emplacement habituel pour une URL dans BibTeX classique, et envelopper l'adresse dans `\url{...}` la compose dans une police à espacement fixe et la laisse se diviser proprement entre les lignes (chargez le package `url` ou `hyperref` pour cela). Le champ « note » contient la date d'accès, ce qui est important car le contenu Web change et disparaît. Cette date indique aux lecteurs quelle version de la page vous avez réellement vue.

## L'alternative biblatex : @online

Si votre document utilise biblatex, il existe un type dédié. Une entrée `@online` prend les champs `url` et `urldate` appropriés, donc la même source devient `url = {https://oleafly.com}` et `urldate = {2026-07-24}`, et le style formate la date d'accès pour vous. Préférez `@online` lorsque le style de bibliographie le supporte, et revenez à `@misc` lorsque vous devez rester compatible avec un fichier `.bst` classique. Les différences entre les deux systèmes sont présentées dans [Classic BibTeX ou biblatex](/learn/bibtex-vs-biblatex/).

## Ensembles de données et logiciels

Les ensembles de données et les versions de code méritent plus qu'une simple URL lorsqu'un DOI existe. Des référentiels comme Zenodo et Figshare mint DOI afin que la citation puisse survivre à n'importe quelle configuration d'hébergement. Mettez le DOI dans un champ `doi`, ou dans `howpublished` comme `\url{https://doi.org/10.5281/...}` pour les styles classiques. Incluez une note de « version » lorsque l'artefact est versionné, car « l'ensemble de données » qu'un lecteur télécharge dans cinq ans n'est peut-être pas celui que vous avez analysé. De nombreux projets publient également une citation préférée, souvent dans un fichier « CITATION.cff » dans le référentiel. Utiliser cela est à la fois poli et plus précis que de deviner les champs vous-même.

## Vidéos et autres sources étranges

Pour une vidéo, mettez la chaîne ou le créateur dans « auteur », le titre de la vidéo dans « titre », la plateforme et l'URL dans « comment publié » et l'année de mise en ligne dans « année », avec votre date d'accès dans « note ». La règle générale pour tout ce qui est inhabituel est la même : capturez qui l'a créé, comment il s'appelle, où un lecteur peut le trouver et quand vous l'avez regardé, et `@misc` transportera tout cela en toute sécurité dans n'importe quel style.