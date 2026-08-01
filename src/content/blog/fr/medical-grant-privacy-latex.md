---

title: "Rédaction de demandes cliniques et de subventions : confidentialité, brouillons traçables et LaTeX hors ligne"
description: "Pourquoi les rédacteurs médicaux, de santé publique et de subventions se soucient de l'endroit où le brouillon est stocké, et comment un éditeur de recherche local avec un vrai Git, une compilation hors ligne et aucun compte s'adapte aux cycles de révision."
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

Les manuscrits cliniques et les récits de subventions incluent souvent des détails sensibles, même
avant que la désidentification ne soit définitive. Mettre chaque frappe sur un tiers
L'éditeur est une décision politique autant qu'une préférence en matière d'outillage. IRB, utilisation des données
accords, et l'informatique de l'hôpital ne se soucie pas qu'un éditeur cloud soit pratique à
23h.

Cet article concerne la rédaction et la composition d'une manière que vous pouvez expliquer à
conformité. Traitez-le comme un conseil sur le flux de travail et non comme un examen juridique.

## Les fichiers simples sont plus faciles à raisonner

Un dossier de « .tex » et de chiffres peut se trouver dans un disque crypté, un hôpital
image d'un ordinateur portable ou d'une machine à air isolé. Vous pouvez indiquer la conformité sur un chemin.
Les projets de navigateur nécessitent de faire confiance au modèle d'accès, au chemin d'exportation et à
liste des sous-traitants.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) est construit pour
manière volontaire : pas de compte, pas de télémétrie du produit, des projets comme des dossiers ordinaires
avec un vrai dépôt Git. La [page de confidentialité](/privacy/) est courte car la
Le document n'a pas besoin d'un serveur Oleafly pour exister. Le réseau est pour les actions que vous
prendre (packages, recherche de citation facultative, IA hébergée si vous l'activez, GitHub),
pas pour chaque frappe du brouillon.

Si la politique interdit l'IA cloud, laissez l'assistant désactivé ou dirigez-le vers un point de vente local.
modèle. L'éditeur, la boucle de compilation et Git fonctionnent toujours.

## Suivez les modifications sans vivre dans Word

Les IP Grant demandent toujours de « suivre les modifications ». Au pays LaTeX, cela signifie généralement
Historique Git plus commentaires PDF des coauteurs, ou une courte exportation Word pour le
personne qui refuse d'installer quoi que ce soit. Gardez « .tex » comme source de vérité ;
voir [coauteurs qui ne parlent que Word](/learn/collaborator-uses-word/).

Dans Oleafly, chaque projet est un dépôt Git dès le premier jour : points de contrôle automatiques
après des compilations réussies et des modifications inactives, des comparaisons côte à côte, en un seul clic
restauration, GitHub facultatif lorsque vous souhaitez une télécommande privée. Vous pouvez en débourser un tout
dossier de candidature dans un deuxième projet (historique complet) pour tenter une coupe risquée
sans toucher à la copie de soumission. Si vous utilisez l'assistant AI en option, il
points de contrôle avant la première modification et n'effectue les modifications que via l'approbation
différences.

Nommez les commits après les objectifs ou les sections (`aim2-methods-cut`) afin qu'un chercheur principal puisse parcourir
historique sans lire les différences comme un ingénieur logiciel.

## Le mode hors ligne est utile dans les hôpitaux

Les réseaux cliniques bloquent les domaines SaaS aléatoires. Un compilateur local continue d'écrire
possible entre les séances de DSE. Oleafly expédie Tectonic (et Typst) dans l'application ;
Les packages sont mis en cache après la première utilisation et le mode hors ligne peut refuser le réseau pour le
compilateur. La vérification orthographique et la grammaire s'exécutent localement sur la prose (elles sautent les commandes et
mathématiques). Ce sont les contraintes dont l'informatique hospitalière se soucie généralement, donc locale
les éditeurs de recherche reviennent souvent.

SyncTeX et un PDF à côté du sujet source lorsque vous fixez une limite de pages
sur un ordinateur d’un poste de soins infirmiers avec une connexion Wi-Fi peu fiable.

## Modèles, limites de pages et contrôle en amont

Les modèles de style NIH et de base concernent les marges, les polices et les majuscules de page.
La géométrie et les packages de polices comptent plus que les macros intelligentes. Compiler en PDF et
vérifiez le nombre de pages après chaque coupure majeure, pas la veille du portail
ferme. Commencez à partir d'un modèle connu dans la galerie lorsque celui-ci vous convient ; correspond toujours
la FOA actuelle pour les polices, les marges et la structure (objectifs spécifiques sur une seule page)
signifie une page).

Quand le PDF doit survivre à un lecteur automatique (CV, certains institutionnels
portails), Preflight montre la structure et les résultats d'extraction de style analyseur
avant de vous soumettre. Ce sont des signaux de risque heuristiques que vous pouvez lire et sur lesquels vous pouvez agir.

## Collaboration multi-PI

Posséder des fichiers par section ou par objectif. Une personne possède le maître `.bib` ou partagé
Exportation du groupe Zotero. Convenez si les coauteurs modifient TeX ou renvoient des commentaires PDF.
Télécommandes privées uniquement sur les hôtes Git institutionnels approuvés lorsque la politique l'exige
ça; tous les projets de subventions n’appartiennent pas au GitHub public.

## Gestionnaires de bibliographie

Les groupes Zotero partagés exportent un « .bib » que plusieurs PI peuvent actualiser. Importer dans
le projet, collez les DOI lorsque vous ajoutez de nouvelles citations et validez les champs manquants
avant la soumission afin que les années n'apparaissent pas sous la forme « [?] » dans le PDF assemblé :
[Validateur BibTeX](/tools/bibtex-validator/). Oleafly complète et vérifie
clés de citation par rapport à la bibliographie du projet pendant que vous écrivez, donc cassées
Les clés `\cite` apparaissent avant le journal.

## Chiffres et PHI

Ne mettez jamais de données identifiables sur un patient dans des chiffres ou des légendes destinés à un
repo, d'autres peuvent cloner. Utilisez des schémas anonymisés. Stockez encore n'importe quoi
sensible sous les mêmes contrôles que l’ensemble de données cliniques, et non à côté du
diagramme de méthodes publiques.

## Qu'est-ce que ce n'est pas

Local-first fait toujours l'objet d'un examen par l'IRB, d'accords d'utilisation des données et
désidentification. Activez l'IA hébergée ou appuyez sur une télécommande et certains octets quittent le
machine selon les politiques de ces services. Quels sont les changements locaux d'abord par défaut
chemin pour rédiger un récit sensible : un dossier que vous contrôlez, un éditeur qui
fonctionne hors ligne et l'historique que vous pouvez restaurer sans demander un avis à un fournisseur
exporter.

## Configuration de départ pratique

1. Créer un projet local ; activer la compilation hors ligne une fois les packages mis en cache.
2. Laissez l’IA désactivée à moins que la politique et l’équipe ne se mettent d’accord sur un fournisseur.
3. Télécommande privée uniquement sur un hôte approuvé.
4. Propriété de la section et propriétaire unique de la bibliographie.
5. Vérification du nombre de pages après chaque coupure majeure des objectifs et de la stratégie de recherche.

Écrivez comme si un responsable de la conformité vous demanderait où se trouvait le brouillon. Si la réponse
est "un dossier sur l'ordinateur portable chiffré, historique Git local, privé facultatif"
à distance", vous êtes en meilleure forme qu'"un compte sur un service que nous n'avons jamais
révisé."