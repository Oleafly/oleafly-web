---

title: "Obtenez un TeX fonctionnel sur n'importe quel système d'exploitation"
description: "Oleafly avec un moteur fourni ou une installation complète de TeX Live / MiKTeX."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Obtenez un TeX fonctionnel sur n'importe quel système d'exploitation

Écrire LaTeX localement nécessite un système TeX : le moteur qui compile votre source ainsi que les milliers de packages dont dépendent les documents. Il existe deux façons sensées d’en obtenir un. La première est une application avec le moteur intégré, qui vous permet de compiler en quelques minutes. L'autre est une distribution TeX complète, qui installe la chaîne complète d'outils de ligne de commande que tout éditeur peut utiliser. Les deux chemins se terminent au même endroit : un fichier `.tex` se transformant en PDF sur votre machine.

## Chemin A : une application avec le moteur inclus

Téléchargez [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) pour Mac, Windows ou Linux. Il regroupe le moteur Tectonic, il n'y a donc pas d'installation TeX distincte à gérer : vous ouvrez l'application, créez un projet et compilez. Lorsqu'un document utilise un package qui n'est pas présent, Tectonic le récupère à la demande, ce qui nécessite une connexion réseau la première fois qu'un package donné est utilisé et rien par la suite. Ce chemin convient à tous ceux qui souhaitent rédiger des articles plutôt que d'administrer une installation TeX, et il laisse les fichiers ordinaires « .tex » et « .bib » sur le disque que tout autre outil peut lire.

## Chemin B : une distribution TeX complète

L'installation d'une distribution vous donne `pdflatex`, `xelatex`, `lualatex` et le gestionnaire de paquets comme commandes système. Sur un Mac, installez MacTeX, qui est un package TeX Live pour macOS ; si le téléchargement de plusieurs gigaoctets n'est pas le bienvenu, BasicTeX est un petit noyau que vous étendez via TeX Live Utility selon les besoins. Sous Windows, MiKTeX est le choix courant et peut installer les packages manquants à la volée lors de la compilation, tandis que TeX Live fonctionne tout aussi bien. Sous Linux, installez « texlive-full » depuis votre gestionnaire de paquets pour tout en même temps, ou un schéma plus petit tel que « texlive-latex-extra » plus l'outil « tlmgr » pour ajouter des paquets ultérieurement. Attendez-vous à ce qu'une installation complète prenne un certain temps et plusieurs gigaoctets de disque.

## Vérifiez l'installation

Ouvrez un terminal et demandez à un moteur sa version :

```bash
pdflatex --version
# or
xelatex --version
```

Une bannière de version signifie que la chaîne d'outils est sur votre chemin et prête. Une erreur indiquant que la commande n'est pas trouvée signifie généralement que les modifications apportées par le programme d'installation à votre PATH n'ont pas encore pris effet ; le redémarrage du terminal ou la déconnexion et la reconnexion sous Windows résolvent le problème.

## Quel chemin prendre

Choisissez l'application si vous débutez ou si vous souhaitez simplement trouver le chemin le plus court vers un PDF compilé. Choisissez une distribution complète si vous avez besoin de moteurs spécifiques, de versions en ligne de commande ou d'une intégration avec un éditeur existant. Les deux coexistent sans conflit, donc commencer par le chemin A et ajouter le chemin B plus tard ne coûte rien. Quoi qu'il en soit, l'étape suivante est la même : compilez [votre premier document](/learn/first-document/).