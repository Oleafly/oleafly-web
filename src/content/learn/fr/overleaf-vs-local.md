---

title: "Projet de navigateur vs dossier sur le disque"
description: "La commodité du cloud par rapport à la propriété locale, au travail hors ligne et au vrai Git."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Projet de navigateur vs dossier sur le disque

Lorsque vous commencez à écrire LaTeX, vous êtes confronté à une décision précoce : votre projet se trouve-t-il dans un onglet de navigateur sur le serveur de quelqu'un d'autre, ou dans un dossier sur votre propre disque ? Les deux modèles produisent le même PDF. Ils diffèrent selon qui détient la source, ce qui se passe lorsque le réseau tombe en panne et quelle part de la chaîne d'outils environnante vous contrôlez.

## Ce que chaque modèle vous apporte

| | Cloud (par exemple au verso) | Local (Oleafly, TeX Live) |
| --- | --- | --- |
| Configuration | Instantané, rien à installer | Une installation |
| Hors ligne | Limité | L'édition fonctionne toujours ; les compilations s'exécutent avec des packages mis en cache |
| Confidentialité | Le prestataire stocke vos projets | Les fichiers restent sur votre disque |
| Git | Via un pont de synchronisation | Native, un véritable référentiel dans le dossier |
| Collaboration | Curseurs en temps réel | Git, correctifs, dossiers partagés |
| Coût | Niveau gratuit plus abonnements | Gratuit |

Un projet cloud est une ligne dans une base de données que le service affiche pour vous. Un projet local est un répertoire que vous pouvez ouvrir dans un gestionnaire de fichiers, copier sur une clé USB, rechercher avec n'importe quel outil et versionner avec Git ordinaire. Cette différence semble abstraite jusqu'à ce qu'une date limite coïncide avec une panne, un changement de paywall ou un vol.

## Quand le cloud est le bon choix

La co-édition en temps réel constitue le véritable avantage du cloud. Si trois co-auteurs doivent taper dans le même paragraphe au cours de la dernière heure avant une date limite et qu'aucun d'entre eux n'installe de logiciel, un éditeur de navigateur est la réponse pratique. Rien de local ne remplace actuellement les curseurs simultanés.

## Quand le local est le bon choix

Le local gagne lorsque le brouillon est sensible ou inédit, lorsque vous travaillez sur des avions ou des réseaux restreints, lorsque vos chiffres et données sont volumineux ou lorsque vous souhaitez un historique des versions qui ne dépend pas d'un niveau d'abonnement. Un référentiel Git local enregistre vos modifications, qu'un service existe ou non demain, et le même dossier fonctionne avec un terminal, un éditeur de code ou le clone d'un collaborateur.

Oleafly est conçu pour le côté local de cette table : le compilateur est livré dans l'application, les projets sont de simples dossiers avec un véritable historique Git et l'IA facultative s'exécute avec votre propre clé. Une comparaison plus longue se trouve sur le [blog](/blog/local-first-vs-cloud-latex-editors/), et la documentation couvre [comment les deux modèles peuvent fonctionner ensemble](/docs/why-oleafly/) via GitHub.