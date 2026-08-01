---

title: "La boîte à outils de rédaction de recherche, hier et aujourd’hui"
description: "Des machines à écrire et des allers-retours de courrier électronique aux espaces de travail Overleaf, Zotero, Typst et locaux."
category: "research-101"
order: 9
level: "beginner"
tags: ["research", "basics", "tools"]
featured: false
updated: 2026-07-25
---

# La boîte à outils de rédaction de recherche, hier et aujourd'hui

Chaque génération de chercheurs pense que ses outils sont permanents. Ils ne le sont jamais. Un aperçu rapide de la façon dont les articles ont été rédigés et de ce à quoi ressemble la boîte à outils aujourd'hui, afin que vous puissiez choisir le vôtre délibérément.

## Les temps d'avant

Dans les années 1980, les articles étaient **tapés sur des machines à écrire**, les équations écrites à la main et envoyées par courrier aux revues. Viennent ensuite les traitements de texte : des décennies de **modèles Word** avec une numérotation fragile, des équations collées sous forme d'images et des dispositions de figures qui explosent lorsqu'un paragraphe bouge. La collaboration signifiait **envoyer des fichiers par e-mail** : `paper_final_v3_REALLY_FINAL_jw_edits.docx` n'est pas une blague, c'est de l'histoire ancienne. LaTeX a existé à travers tout cela (voir [45 ans de TeX](/learn/history-of-tex-latex/)) mais vous l'avez compilé dans un terminal et l'avez également partagé par e-mail.

## La boîte à outils du jour

| Outil | Catégorie | Ce à quoi il est bon |
| --- | --- | --- |
| Au verso | Éditeur Cloud LaTeX | Co-édition en temps réel dans le navigateur, aucune configuration |
| TeXstudio / TeXmaker | IDE LaTeX local | Édition de bureau classique, gratuite |
| VS Code + Atelier LaTeX | EDI local | Puissant si vous vivez déjà dans VS Code |
| Olleaflie | Espace de travail local d'abord | LaTeX, Typst et Markdown avec compilateurs fournis |
| Zotéro | Gestionnaire de références | Collecte, organisation et exportation de citations |
| Google Scholar | Découverte | Recherche d'articles et suivi des citations |
| arXiv | Découverte + prépublications | En lisant gratuitement le dernier ouvrage, voir [le monde de la préimpression](/learn/what-is-arxiv/) |
| Typographie | Nouveau système de composition | Des documents rapides et modernes lorsqu'aucun lieu ne l'exige .tex |

Les outils **Découverte** trouvent des articles, les **gestionnaires de références** organisent ce que vous avez trouvé et les **éditeurs** transforment le tout en PDF. Vous vous retrouverez avec un de chaque.

## Cloud vs local, honnêtement

**Overleaf** a généralisé LaTeX en supprimant complètement l'installation, et son édition collaborative en temps réel est véritablement sa fonctionnalité phare. Si vos coauteurs souhaitent saisir le même document au même moment, les outils cloud comme Overleaf sont tout simplement meilleurs aujourd'hui.

Les outils **local-first** renversent la donne : vos fichiers vivent sur votre machine sous forme de fichiers simples, vous pouvez travailler dans un train ou derrière un pare-feu d'hôpital, rien ne dépend d'un abonnement ou d'un serveur qui reste en vie, et l'historique des versions est réel [Git](/learn/oleafly-workflow/), et non une chronologie propriétaire. La difficulté classique du LaTeX local consistait à installer une distribution TeX de plusieurs gigaoctets. C'est la partie qui a changé.

## Où s'adapte Oleafly

Oleafly est un espace de travail de bureau gratuit, open source et axé sur le local. Les compilateurs pour LaTeX et Typst sont fournis, il n'y a donc aucune distribution à installer. Les citations peuvent être récupérées par [DOI ou arXiv ID](/learn/open-access-doi-explained/), les projets sont des référentiels Git avec un historique honnête, des modèles de lieu sont intégrés et un assistant IA en option vous aide lorsque vous le souhaitez. L’objectif est de rendre le chemin local aussi peu contraignant que celui du cloud. Pour être honnête à propos du commerce : pour la co-édition simultanée en direct, Overleaf reste le meilleur choix. Pour la propriété de vos fichiers et du travail hors ligne, le local d'abord l'emporte. De nombreuses personnes utilisent les deux, en rédigeant localement et en synchronisant via Git.

## Choisir sans angoisser

Commencez par ce qui vous élimine le plus de frictions ce mois-ci. Les fichiers .tex sont portables sur tous les outils présents sur la table. Cette portabilité est le véritable avantage de l'écriture en texte brut, abordé dans [LaTeX vs Word](/learn/latex-vs-word/). Ensuite, rédigez votre [premier document](/learn/first-document/) et laissez la boîte à outils grandir avec le travail.