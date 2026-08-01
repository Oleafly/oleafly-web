---

title: "Une semaine d'écriture à Oleafly"
description: "Bibliothèque, modèles, compilation, SyncTeX, citations, historique Git, IA en option."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# Une semaine d'écriture dans Oleafly

Voici à quoi ressemble réellement un article au quotidien dans Oleafly, du projet vide à un brouillon que vous pourriez envoyer à un co-auteur. L'application n'a besoin d'aucun compte ni d'aucun serveur : un projet est un dossier de fichiers « .tex », « .bib » et figures sur votre disque, et tout ce qui suit fonctionne sur ce dossier.

## Premier jour : partir d'un modèle

Créez un projet dans la bibliothèque, soit vierge, soit à partir d'un [modèle](/templates/) pour les formats courants tels que les articles IEEE et ACM ou un squelette de thèse. Un modèle vous donne immédiatement un document de compilation, avec les options de classe et le préambule déjà raisonnables, ce qui surpasse l'assemblage d'un préambule ligne par ligne dès le premier jour. Appuyez une fois sur compiler pour confirmer que vous obtenez un PDF avant d'écrire quoi que ce soit.

## Midweek : la boucle d'écriture-compilation

La majeure partie de la semaine est une boucle entre l'éditeur et le volet PDF. L'éditeur complète automatiquement les commandes, les environnements, ainsi que les étiquettes et les clés de citation qui existent dans votre projet, et les commandes slash insèrent des structures plus grandes telles que des figures et des tableaux sans que vous mémorisiez leur passe-partout. Compilez souvent, car une nouvelle erreur dans un texte que vous avez écrit il y a deux minutes est facile à repérer, alors qu'une erreur apparaissant après un après-midi de modifications ne l'est pas. SyncTeX relie les deux volets ensemble : cliquez sur un paragraphe du PDF pour accéder à sa ligne source, ou passez de la source au PDF, ce qui est le plus important lors de la révision de pages spécifiques d'un long document.

## Citations au fur et à mesure

Conservez un fichier `.bib` dans le projet et citez avec `\cite{...}` pendant que vous écrivez, laissant la saisie semi-automatique fournir les clés. Ajouter des références au moment de la rédaction est bon marché. La reconstruction de trois semaines d'espaces réservés « citation nécessaire » ne l'est pas. Si les entrées proviennent de Zotero ou d'une exportation d'un éditeur, le [validateur BibTeX](/tools/bibtex-validator/) détecte les champs manquants avant qu'ils n'apparaissent sous forme de références étranges. Le pipeline complet est décrit dans [De la clé .bib à la citation dans le texte](/learn/add-citations/).

## Histoire sans cérémonie

Oleafly peut enregistrer automatiquement un commit Git après chaque compilation réussie, de sorte que la semaine laisse derrière elle une chronologie des états de fonctionnement que vous pouvez inspecter ou revenir. Lorsque le brouillon mérite d'être partagé, transférez le dossier vers un référentiel GitHub privé ; [Mettre le document sur GitHub](/learn/sync-with-github/) montre la configuration.

## Facultatif : l'assistant

Si vous ajoutez une clé API pour un fournisseur hébergé ou si vous pointez l'application vers Ollama local, un assistant peut répondre aux questions sur votre projet, proposer des modifications derrière les différences d'approbation et compiler pour vérifier son propre travail. Facultatif : chaque étape ci-dessus fonctionne sans cela. Les détails se trouvent dans [Assistant à l'intérieur d'Oleafly](/learn/oleafly-ai/), et l'intention de conception plus large derrière l'application se trouve dans [Mise en route](/docs/getting-started/) et [Philosophie](/docs/philosophy/).