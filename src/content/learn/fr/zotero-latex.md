---

title: "Zotero dans un fichier .bib"
description: "Meilleur BibTeX, auto-exportation, clés qui survivent aux machines."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero dans un fichier .bib

Zotero est très doué pour collecter des références : il récupère les métadonnées et les PDF à partir d'un bouton de navigateur et permet de tout rechercher. LaTeX, en revanche, ne lit que les fichiers « .bib ». Le pont entre les deux est le plugin Better BibTeX. Il transforme une collection Zotero en un fichier « .bib » qui reste à jour et, tout aussi important, maintient les clés de citation stables afin que vos commandes « \cite » ne soient jamais interrompues.

## Pourquoi l'export intégré ne suffit pas

Zotero peut exporter BibTeX seul, mais il régénère les clés de citation à chaque fois, et une clé qui passe de `knuth_literate_1984` à `knuth_literate_1984-1` brise silencieusement chaque `\cite` qui utilisait l'ancien nom. L'exportation est également un instantané unique, de sorte que le fichier devient obsolète dès que vous ajoutez un papier. Better BibTeX résout ces deux problèmes : les clés sont générées à partir d'une formule que vous choisissez, peuvent être épinglées pour ne jamais changer et l'exportation peut s'actualiser automatiquement.

## Mise en place du pipeline

Tout d'abord, installez Better BibTeX à partir de son site Web via la boîte de dialogue Outils, Plugins de Zotero, puis redémarrez Zotero. Deuxièmement, décidez d'une formule de clé de citation dans les préférences Better BibTeX. Un modèle qui produit des clés comme « knuth1984 » ou « knuth1984literate » est facile à saisir et à reconnaître dans la source. Troisièmement, cliquez avec le bouton droit sur la collection qui appartient à votre article, choisissez Exporter la collection, sélectionnez le format Better BibTeX et cochez « Garder à jour » avant d'enregistrer le fichier dans votre dossier de projet sous, par exemple, « refs.bib ». Dès lors, l'ajout ou la modification d'un élément dans Zotero réécrit le fichier en quelques secondes.

Enfin, pointez votre document vers le fichier exporté avec `\bibliography{refs}` ou `\addbibresource{refs.bib}`, exactement comme avec une base de données manuscrite. Le câblage est couvert dans [De la clé .bib à la citation dans le texte](/learn/add-citations/).

## Division du travail

Traitez Zotero comme la base de données principale et le fichier « .bib » comme un artefact généré qui vit dans le référentiel du document. En validant le « .bib » à côté du « .tex » signifie qu'un co-auteur, ou vous sur une autre machine, pouvez compiler l'article sans que Zotero soit installé du tout. Ne modifiez pas manuellement le fichier exporté. La prochaine exportation automatique écrasera vos modifications. Corrigez plutôt les métadonnées dans Zotero et la correction sera appliquée. Si une entrée semble toujours erronée après l'exportation, exécutez-la via le [validateur BibTeX](/tools/bibtex-validator/) pour voir de quel champ le style n'est pas satisfait.

Une habitude évite la plupart des problèmes futurs : une fois qu'une clé apparaît dans un manuscrit, épinglez-la dans Better BibTeX (cliquez avec le bouton droit sur l'élément, Better BibTeX, Épinglez la clé BibTeX). Les clés épinglées survivent aux changements de formule, aux déplacements de machines et aux réorganisations de bibliothèques, ce qui est exactement ce que doit faire une clé de citation.