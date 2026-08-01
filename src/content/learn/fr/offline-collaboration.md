---

title: "Co-auteur sans curseur actif"
description: "Correctifs, dossiers partagés plus Git et possession de fichiers de chapitres séparés."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Co-auteur sans curseur actif

L'édition collaborative en temps réel, où vous regardez le curseur d'un coauteur se déplacer, est le modèle vendu par les éditeurs de cloud. Beaucoup de bons articles sont rédigés sans cela. Lorsque les auteurs travaillent localement, la collaboration asynchrone basée sur Git constitue le modèle fiable : chaque personne édite sur sa propre machine et les modifications sont fusionnées délibérément plutôt que caractère par caractère. Cela nécessite un peu plus de coordination et le récompense avec un travail hors ligne, un historique complet et aucune dépendance vis-à-vis du serveur de qui que ce soit.

## Git comme colonne vertébrale

La configuration standard est un référentiel partagé, généralement sur GitHub, à partir duquel tout le monde extrait et vers lequel il pousse. Chaque auteur travaille en sessions : extraire le dernier état, écrire, valider, pousser. Étant donné que LaTeX est du texte brut, Git fusionne automatiquement les modifications parallèles apportées à différentes parties du document et la configuration prend quelques minutes. [Mettez le document sur GitHub](/learn/sync-with-github/) le couvre. Lorsqu'un collaborateur ne peut ou ne veut pas utiliser un hôte Git, les correctifs comblent le vide : `git format-patch` transforme les commits en petits fichiers que vous pouvez envoyer par courrier électronique, et le destinataire les applique avec `git am`, en gardant la paternité et l'historique intacts. Il s’agit d’un ancien flux de travail, et il fonctionne toujours partout où le courrier électronique le fait.

Un hybride fonctionne également lorsqu'un co-auteur insiste pour avoir un dossier synchronisé : conservez la copie partagée dans Dropbox ou Syncthing pour plus de commodité, mais laissez une seule personne gérer l'historique Git et effectuer les fusions. Ne dirigez pas les extractions Git en direct de deux personnes vers le même dossier synchronisé, car les conflits de synchronisation à l'intérieur des référentiels corrompus du répertoire `.git`.

## Divisez le document par fichier

Les fusions deviennent rares lorsque les utilisateurs touchent rarement au même fichier. Divisez le manuscrit pour que chaque chapitre ou section réside dans son propre fichier, extrait d'un mince « main.tex » avec `\input{chapters/methods}`. Les mécanismes sont dans [Diviser un document en fichiers](/learn/split-chapter-files/). Attribuez ensuite la propriété : chaque co-auteur rédige dans ses propres fichiers et un intégrateur gère le préambule, la fusion et la lecture finale pour assurer la cohérence de la notation et du ton. Cela reflète la façon dont les équipes logicielles évitent de se marcher dessus, et cela fonctionne pour les mêmes raisons.

## Qu'est-ce qui ne va pas réellement

Le mode d’échec à éviter est que deux personnes éditent le même paragraphe dans la même fenêtre de temps. Git le signalera comme un conflit, et les conflits LaTeX sont lisibles mais fastidieux à résoudre, donc la solution la moins chère est sociale : un message rapide disant "Je suis dans l'introduction aujourd'hui" les empêche presque tous. Deux habitudes d'écriture réduisent le reste. Conservez une phrase par ligne source, afin que les modifications parallèles aux phrases voisines n'entrent pas en collision du tout, et tirez-la immédiatement avant chaque session d'écriture afin de toujours modifier le texte le plus récent.