---

title: "Éditeurs LaTeX locaux ou cloud : ce que vous échangez réellement"
description: "Les éditeurs Cloud LaTeX échangent la propriété pour plus de commodité. Local-first signifie des fichiers sur le disque, un véritable éditeur de recherche, un vrai Git, un travail hors ligne et un réseau uniquement pour les actions que vous effectuez, ainsi que ce qui appartient toujours au navigateur."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Les éditeurs Cloud LaTeX ont gagné pour une raison simple : aucune configuration. Ouvrez un onglet, compilez.
Pendant des années, c'était le moyen le plus simple de lutter contre une distribution TeX sur un
ordinateur portable, et beaucoup de gens le préfèrent encore.

Cependant, la configuration n'est plus la partie la plus difficile pour la plupart des documents. Des moteurs comme
Tectonic peut être expédié dans une application de bureau et extraire des packages à la demande, donc
l'installation et la compilation correspondent à peu près au temps nécessaire pour créer un compte cloud. Le
La question qui mérite d'être posée est de savoir ce que l'abonnement vous achète encore et ce que vous
remettre pour cela.

## Ce que vous abandonnez dans le cloud

Votre manuscrit se trouve dans la base de données de quelqu'un d'autre. L'exportation fonctionne généralement, jusqu'à ce que
les plans changent, une entreprise est acquise ou une fonctionnalité disparaît, tandis que votre
la date limite reste fixée.

Le chiffrement au repos empêche les étrangers d’entrer. Le service lui-même peut toujours voir
les projets, les subventions et les résultats inédits qui transitent par son infrastructure.

La latence est un autre coût discret. Une frappe gérée sur votre machine est presque
toujours plus vif. Les files d'attente de compilation et les délais d'expiration du niveau gratuit n'apparaissent que lorsque le
la construction n’est pas la vôtre.

Hors ligne est l'autre lacune. Dans un avion, dans le sous-sol d'un hôpital ou dans un lieu sécurisé
laboratoire sans réseau ouvert, un éditeur de navigateur n'est qu'un onglet vide.

Certains éditeurs hébergés mettent également l'historique complet, le suivi des modifications ou la synchronisation Git/GitHub.
derrière les niveaux payants. Local Git ne se soucie pas du plan que vous avez acheté.

## Quels changements axés sur le local

Les projets sont de simples fichiers dans un dossier que vous pouvez ouvrir. L'histoire peut être réelle, connard
inspecter depuis n’importe quel terminal. La compilation s'exécute sur votre CPU sans file d'attente. Vos fichiers
et l'historique Git ne dépendent pas du maintien d'un compte fournisseur en bonne santé.

La saisie multi-utilisateurs en direct reste l’endroit où les outils de navigation gagnent. Beaucoup de recherches
les semaines sont différentes : rédaction en solo, voyages, réseaux restreints, vouloir
propriété, ou avoir besoin d'un éditeur de document complet qui indexe l'ensemble du projet.
Les laboratoires se divisent déjà et ouvrent des demandes d'extraction de code. Les articles peuvent utiliser la même chose
modèle asynchrone pour les coauteurs qui n’ont pas besoin de partager un curseur.

## Le réseau existe toujours (exprès)

Les outils locaux recherchent toujours des packages de première utilisation, des packs de modèles et des citations.
métadonnées, IA hébergée si vous l'activez, télécommandes Git et mises à jour. Le point est
la valeur par défaut : les versions préliminaires et les compilations mises en cache restent sur le disque.

Les projets, les métadonnées, les builds et l'historique Git vivent localement. Le réseau fonctionne lorsque
vous prenez une action qui en a besoin. L'édition et la compilation en cache devraient fonctionner
hors ligne. Collez un DOI ou activez un modèle cloud et ces requêtes vont là où vous le souhaitez.
les visait. Dites-le clairement dans tout article sur la confidentialité au lieu de faire semblant
le réseau n'arrive jamais.

## La pile autour d'un papier

Une semaine de recherche n'est presque jamais « juste un éditeur ». Il s'agit généralement d'un mélange de :

- environnement d'écriture avec une réelle intelligence projet
- Distribution TeX et maintenance des packages
- Visionneuse PDF avec SyncTeX
- Client Git et hôte distant
- recherche de citations et hygiène bibliographique
- outils de grammaire et d'orthographe
- diagramme ou figure pipeline
- délais et autres outils secondaires

Un espace de travail de recherche local est utile lorsque ces éléments se trouvent au même endroit.
projet plain-folder : un éditeur sensible au projet (références, citations, macros, structure,
aperçu mathématique, vérification hors ligne), compilation supervisée, espace de travail PDF avec
SyncTeX obsolète, points de contrôle Git automatiques, importation et exportation, contrôle en amont
avant de soumettre, agent facultatif qui doit afficher les différences.

## Où s'adapte Oleafly

[Oleafly](https://github.com/Oleafly/Oleafly) est conçu pour cette catégorie : gratuit,
espace de travail de bureau open source pour LaTeX, Typst et Markdown. Regroupé
compilateurs. Bibliothèque de projets avec fork et recherche. Éditeur à l'échelle du projet
intelligence (définition, références, renommage, vérifications de référence/cite en direct, structure
vues, vos macros avec des formes d'arguments, TexLab/Tinymist si disponible). En direct
aperçus mathématiques. Hors ligne Harper et Hunspell sur la prose uniquement. PDF intégré avec
SyncTeX bidirectionnel qui mappe toujours pendant qu'une reconstruction est en attente. Un vrai con avec
points de contrôle automatiques et GitHub en option. Recherche et collage de citations. Diagramme
Compositeur sur TikZ modifiable. Contrôle en amont. IA facultative avec approbation avec votre clé
ou Ollama local.

La [page de confidentialité](/privacy/) reste volontairement courte : pas de compte Oleafly, non
télémétrie du produit. Les brouillons sont en direct sur votre ordinateur. IA hébergée, recherche de citations et
GitHub parle à ces services selon leurs politiques, avec vos clés et votre
actions.

Si vous voulez un petit avant-goût sans installer, le [navigateur gratuit
tools](/tools/) s'exécute côté client. L'application de bureau est le lieu où l'intelligence,
la compilation, l'historique et l'arborescence du projet se rencontrent réellement.

## Quand le cloud gagne encore

Restez dans le navigateur lorsque la co-création en temps réel est le produit, lorsqu'un
collaborateur n'installera rien, ou lorsque votre institution est déjà
standardisé sur un éditeur hébergé pour la soumission.

Faites correspondre l'outil à la semaine dont vous disposez réellement. Si vous avez besoin d'un mode multi-utilisateur en direct
en tapant, restez dans le navigateur (ou utilisez Git lorsque les coauteurs peuvent travailler de manière asynchrone). Si vous
se soucient davantage de la propriété, de la profondeur hors ligne et d'un éditeur de recherche local complet,
conservez le manuscrit sous forme de fichiers sur le disque, créez le PDF sur votre machine et conservez-le.
historique dans un dépôt que n’importe quel outil Git peut ouvrir.