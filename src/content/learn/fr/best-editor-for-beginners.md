---

title: "Choisissez un éditeur que vous ouvrirez réellement"
description: "Ce dont les débutants ont besoin : un compilateur, un aperçu, SyncTeX et des fichiers qui restent sur le disque."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Choisissez un éditeur que vous allez réellement ouvrir

Le meilleur éditeur LaTeX pour un débutant n’est pas le plus puissant. C'est celui qui vous permet de passer d'un fichier vide à un PDF compilé avec le moins de frictions. Compiler tôt et compte souvent plus que n'importe quelle fonctionnalité unique. Quatre fonctionnalités couvrent ce dont vous avez besoin dès le premier jour.

Premièrement, la compilation devrait fonctionner sans installer manuellement une distribution TeX de plusieurs gigaoctets. Deuxièmement, vous souhaitez un aperçu PDF côte à côte avec SyncTeX, donc un clic dans le PDF passe à la ligne source correspondante et inversement. Troisièmement, vos fichiers doivent être au format « .tex » sur le disque, afin que vous puissiez les compresser, les envoyer par courrier électronique ou les placer dans Git sans étape d'exportation. Quatrièmement, les erreurs doivent arriver sous forme de messages lisibles, et pas seulement sous forme de journal TeX brut.

## Les options réalistes

| Editeur | Configuration | Fonctionne hors ligne | Remarques |
| --- | --- | --- | --- |
| Olleaflie | Téléchargez l'application | Édition toujours ; les compilations utilisent des packages mis en cache | Moteur fourni, historique Git, IA avec votre propre clé en option |
| TeXShop/TeXworks | Installez d'abord une distribution TeX | Oui | Minimal et fiable |
| VS Code + Atelier LaTeX | Installez d'abord une distribution TeX | Oui | Un bon choix si vous travaillez déjà dans VS Code |
| Au verso | Créer un compte dans le navigateur | Limité | Zéro installation ; projets en direct sur leurs serveurs |

Les deux lignes du milieu partagent un coût caché : avant que l'éditeur ne soit utile, vous installez et maintenez TeX Live ou MiKTeX vous-même. C’est là que de nombreux débutants s’arrêtent. L'option du navigateur supprime la configuration mais déplace vos fichiers vers un compte. Les compromis sont traités plus en détail dans [projet de navigateur par rapport au dossier sur le disque](/learn/overleaf-vs-local/).

## Un défaut raisonnable

Si vous souhaitez des fichiers locaux sans administration TeX, commencez par [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) : le compilateur est livré dans l'application et télécharge les packages la première fois qu'un document en a besoin. Quel que soit l'éditeur que vous choisissez, associez-le au [tutoriel du premier document](/learn/first-document/) et conservez la [aide-mémoire](/learn/cheatsheet/) à proximité. L’éditeur compte moins que la compilation de votre première page aujourd’hui.