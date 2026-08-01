---

title: "Ce package n'est pas installé"
description: "tlmgr, MiKTeX et récupération à la demande avec Tectonic ou Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Ce paquet n'est pas installé

Tôt ou tard, une compilation s'arrête avec une ligne comme `! Erreur LaTeX : fichier « siunitx.sty » introuvable. Le message signifie exactement ce qu'il dit : votre document a demandé un package, via `\usepackage{siunitx}`, et le compilateur n'a pas pu trouver le fichier `.sty` du package sur votre machine. Il n'y a rien de mal avec votre document. Les distributions LaTeX ne livrent pas tous les packages par défaut et le correctif dépend de la distribution que vous exécutez.

## TeX en direct

TeX Live, la distribution standard sur Linux et macOS (comme MacTeX), comprend un gestionnaire de packages appelé « tlmgr ». Installez le package manquant depuis un terminal :

```
tlmgr install siunitx
```

Si le TeX Live complet a été installé, ce qui représente plusieurs gigaoctets, tout est déjà présent et cette erreur ne devrait pas se produire. Il apparaît généralement avec les petits schémas d'installation « de base » ou « petits ». Notez que l'argument de `tlmgr` est le nom du package, pas le nom du fichier, donc pas d'extension `.sty`.

##MiKTeX

MiKTeX, courant sous Windows, dispose de deux mécanismes. Sa fonction d'installation à la volée détecte le fichier manquant lors de la compilation et propose de le récupérer, soit en vous y invitant, soit en procédant automatiquement en fonction des paramètres. Vous pouvez également ouvrir la console MiKTeX, accéder à l'onglet Packages, rechercher le package et l'installer ici. Si l'installation à la volée semble bloquer une compilation, elle attend généralement une boîte de dialogue de confirmation cachée derrière une autre fenêtre.

## Tectonique

Le moteur Tectonic, fourni par Oleafly, saute l'étape manuelle : les packages sont téléchargés à la demande lors de la compilation et atterrissent dans le cache local du moteur. La première compilation qui utilise « siunitx » le récupère ; les compilations ultérieures réutilisent le cache. Cette première exécution peut prendre plus de temps pendant le téléchargement des dépendances et nécessite une connexion réseau.

## Lors de l'installation, cela ne résout pas le problème

Si le gestionnaire de packages signale qu'aucun package de ce type n'existe, vérifiez l'orthographe par rapport à la page du package sur CTAN, l'archive centrale des packages LaTeX sur ctan.org. Deux disparités expliquent la plupart des cas tenaces. Premièrement, le fichier et le package peuvent avoir des noms différents, car un package de distribution peut contenir plusieurs fichiers « .sty ». La recherche dans CTAN du nom de fichier « .sty » exact à partir du message d'erreur résout ce problème. Deuxièmement, l'erreur nomme parfois un fichier de votre propre projet, tel qu'un fichier de classe qu'un modèle a oublié d'inclure, et aucun gestionnaire de packages ne peut le fournir. Le fichier doit provenir de l'endroit où se trouve le modèle.

Une dernière note sur les anciens conseils : le téléchargement d'un seul fichier `.sty` depuis Internet dans votre dossier de projet fonctionne, car LaTeX recherche d'abord le répertoire actuel, mais il gèle ce paquet dans une version aléatoire et le cache des mises à jour. Préférez le gestionnaire de paquets et conservez l’astuce de copie manuelle en cas d’urgence proche des délais.