---

title: "Construire un .bib qui dure"
description: "Types d'entrée, champs obligatoires, clés stables."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Construire un .bib qui dure

Un fichier `.bib` est une petite base de données en texte brut contenant tout ce que vous pourriez citer. Chaque entrée a un type, une clé et un ensemble de champs, et le même fichier peut servir à chaque article que vous rédigez pendant des années. Un peu de discipline maintenant, dans la façon dont vous choisissez les types, remplissez les champs et nommez les clés, vous évitera de réels problèmes plus tard lorsqu'un style de journal voudra soudainement un champ que vous n'avez jamais enregistré.

## Anatomie d'une entrée

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

Le mot après `@` est le type d'entrée, qui indique au style de quel type de travail il s'agit et donc à quels champs s'attendre. `knuth84` est la clé de citation, le descripteur que vous tapez dans `\cite{...}`. Tout le reste est un champ. Le champ « auteur » utilise la forme « Dernier, Premier » afin que le style puisse abréger et trier les noms de manière fiable, et « pages » utilise un double trait d'union, que LaTeX compose comme un tiret de plage de pages.

## Les types d'entrées dont vous avez réellement besoin

Six types couvrent presque tous les écrits académiques. Utilisez `@article` pour les articles de revues, `@inproceedings` pour les articles de conférences et d'ateliers, `@book` pour les livres, `@phdthesis` pour les thèses, `@techreport` pour les rapports institutionnels et de nombreuses prépublications, et `@misc` pour tout le reste, y compris les logiciels et les sites Web. Choisir le bon type est important car les styles se formatent chacun différemment : une entrée `@inproceedings` veut un `booktitle` (le nom de la conférence), tandis qu'un `@article` veut un `journal`.

## Champs obligatoires et pourquoi les validateurs se plaignent

Chaque type comporte des champs obligatoires, et un champ manquant est la raison la plus courante pour laquelle une entrée de bibliographie apparaît mutilée ou déclenche un avertissement backend. Pour « @article », les éléments essentiels sont « auteur », « titre », « journal » et « année » ; pour `@inproceedings`, `author`, `title`, `booktitle` et `year`. L'absence d'« année » ou d'« auteur » est l'échec classique, car les styles auteur-année ne peuvent littéralement pas construire une étiquette de citation sans eux. Les champs facultatifs tels que « volume », « pages », « doi » et « éditeur » rendent les entrées plus utiles, alors enregistrez-les pendant que la source est devant vous. Vous pouvez vérifier un fichier entier à la fois avec le [validateur BibTeX](/tools/bibtex-validator/).

## Des clés qui survivent une décennie

Les clés de citation sont éternelles. Chaque `\cite{knuth84}` dans chaque brouillon, note et diaporama fait référence à cette chaîne exacte, donc renommer une clé signifie traquer chaque utilisation. Choisissez une convention telle que « authorYEAR » ou « authorYEARkeyword », appliquez-la dès le premier jour et ne « nettoyez » jamais les clés dans une base de données établie. Si vous gérez des références dans Zotero, le plugin Better BibTeX peut générer et épingler des clés stables pour vous ; voir [Zotero dans un fichier .bib](/learn/zotero-latex/). Pour câbler le fichier dans un document, commencez par [De la clé .bib à la citation dans le texte](/learn/add-citations/).