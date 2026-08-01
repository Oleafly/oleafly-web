---

title: "Beyond LaTeX Workshop : un éditeur de recherche sur votre machine"
description: "Un éditeur de recherche spécialement conçu avec des informations sur l'ensemble du projet, SyncTeX, une relecture hors ligne, des compilateurs fournis, un vrai Git et des citations. VS Code + LaTeX Workshop possède toujours des recettes, une télécommande et le marché des extensions."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

[Atelier LaTeX](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) dans VS Code est excellent. Gratuit, MIT, soigneusement entretenu. Si votre semaine se déroule sur des recettes de compilation de forme libre, texdoc, Docker/WSL/remote, Live Share ou le marché d'extension complète, conservez cette pile. Il est construit pour cette vie.

Cet article est destiné lorsque vous souhaitez une application axée sur les documents : articles multi-fichiers, compilateurs, PDF, Git, citations, figures et relectures déjà connectés ensemble. Gratuit et open source (AGPL). LaTeX, Typst, Markdown. Dossiers simples. Aucun compte.

Carte des fonctionnalités et raccourcis : [Provenant de LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## L'éditeur

CodeMirror 6 avec un index à l'échelle du projet sur LaTeX, Typst, Markdown et BibTeX.

Ce que vous obtenez réellement au quotidien :

- Aller à la définition, rechercher des références, renommer les étiquettes et les macros (avertissements de conflit)
- Vérifications en direct des références cassées, des citations incorrectes, des inclusions manquantes (`\cref`, `\eqref`, range refs, …)
- Vues locales + structure du projet ; filtrer et sauter
- Complétions pour les clés, chemins et macros définis par votre projet (`\newcommand`, formes d'argument xparse)
- Prise en charge de `.tex`, `.ltx`, `.sty`, `.cls` ; des extraits d'arguments ; contrôles environnementaux
- TexLab pour LaTeX (configuration opt-in) ; Tinymist est livré pour Typst
- Diagnostics unifiés : syntaxe, compilation, service de langage, références, citations, orthographe, grammaire
- Aperçus mathématiques KaTeX en direct ; la source reste modifiable
- Harper + Hunspell hors ligne uniquement en prose (commandes et mathématiques masquées)
- Mode visuel pour les structures communes ; Vim ; commandes barre oblique ; onglets multi-fichiers
- L'achèvement des commandes prenant en compte les packages à partir d'un grand corpus arrive ensuite (données MIT de LaTeX Workshop, vendues avec attribution)

Espace de travail PDF : défilement continu, planches, recherche, plan, fenêtre détachable. SyncTeX bidirectionnel entre les fichiers de chapitre. Le mappage fonctionne toujours pendant qu'une reconstruction est en attente. Le dernier bon PDF reste actif. Annulez l'ensemble des sources compilées et l'aperçu peut devenir actuel sans recompilation complète.

CI à l'échelle du livre : manuscrit d'environ 6 200 lignes, mathématiques multi-familles, chapitres, citations, relecture, budgets de performances sur le défilement/saisie/coller/annuler/compléter/recompiler/SyncTeX.

LaTeX Workshop est une extension puissante dans un IDE général. Oleafly expédie cette boucle de documents déjà assemblée, vous ne câblez donc pas la même pile à partir des paramètres et des choix du marché chaque semestre.

## Compilateurs dans l'application

Tectonic (LaTeX) et Typst sont livrés avec l'application. Markdown via Pandoc géré lorsque vous en avez besoin. Compilez d’abord les packages de cache ; après cela, les builds mis en cache fonctionnent hors ligne. Le mode hors ligne peut verrouiller le compilateur sur le cache.

Compilation automatique (anti-rebond, annulable, dernières victoires). Recompilation `Cmd/Ctrl-Entrée`. Bouton d'arrêt. Cartes d'erreur humanisées en ligne. Dernier bon PDF pendant l'exécution d'une version plus récente.

Les recettes, les chaînes latexmk, l'évasion de shell et les `.latexmkrc` personnalisés restent dans la timonerie de LaTeX Workshop. La plupart des articles et thèses n’ont besoin que d’un moteur supervisé fiable.

Modèles : 23 démarreurs groupés (IEEE, ACM, Elsevier, Beamer, thèse, CV, formulaires Typst, …) plus 99 dans des packs téléchargeables. Enregistrez n'importe quel projet en tant que modèle. Génération de modèle IA facultative lorsqu'un modèle est configuré.

## Bibliothèque, Git, outils de recherche

Projets sous forme de livres : couleur de couverture, badge moteur, lignée du fork, aperçu au survol de la dernière page PDF, signets, recherche `/docs` dans chaque document. Fork conserve l'historique complet de Git pour une réécriture risquée à côté de la copie de soumission.

Un vrai connard dès le premier jour. Mise en scène, différences côte à côte (arbre de travail modifiable), suppression, restauration. Points de contrôle automatiques après des compilations réussies et des modifications inactives ; L'IA exécute un point de contrôle avant la première écriture. GitHub facultatif (PAT ou OAuth de flux de périphériques). Le terminal `git log` correspond à l'application.

Collez DOI / arXiv / title → déduplication → `.bib` → `\cite`. Importation par lots BibTeX, RIS, EndNote, Zotero RDF. Recherche de citations sur arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex. Diagram Composer sur TikZ modifiable. Validateur, tableaux, équations, recherche en laboratoire, délais, PDF vers LaTeX, image vers LaTeX avec un modèle de vision.

## IA en option

Désactivé jusqu'à ce que vous le configuriez. OpenAI, Anthropic, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Clés chiffrées sur disque. Les demandes sont adressées au fournisseur que vous avez choisi.

L'assistant édite, compile, lit les journaux, extrait le texte PDF, recherche la littérature, tient des plans. Les écritures sont des différences d'approbation. Les suppressions nécessitent une confirmation séparée. Inline Ask-AI sur une sélection. Loopback MCP pour Claude Code, Cursor et ses amis. Avec l'IA désactivée, l'éditeur, la compilation, Git et les citations fonctionnent toujours.

## Contrôle en amont, exportation, confidentialité

Contrôle en amont : structure, références non définies, étiquettes en double, aperçu d'extraction de style analyseur, résultats orientés lecteur d'écran. Chaque indicateur de risque est accompagné de suffisamment de contexte pour que vous puissiez le vérifier vous-même au lieu de vous fier à un score de boîte noire.

Exporter : PDF toujours ; DOCX/HTML/Markdown lorsque Pandoc est disponible ; PowerPoint pour les présentations ; EPUB pour les livres ; ZIP source pour le transfert.

Pas de compte Oleafly. Pas de télémétrie du produit. Les rapports d'erreur ouvrent un problème GitHub pré-rempli que vous examinez. Réseau pour packages, modèles, IA hébergée, citations, mises à jour, GitHub. L'édition, la compilation en cache, la grammaire, la vérification orthographique et Git local fonctionnent hors ligne.

## Quand LaTeX Workshop convient toujours

- Recettes de forme libre, latexmk, shell-escape, `.latexmkrc`
- texdoc dans l'éditeur
- Docker, WSL, développement à distance
- Partage en direct et édition multi-utilisateurs en direct
- Vivre sur le marché VS Code pour le travail non documentaire

Oleafly est une version bêta publique. Les fichiers de classe éditeur lourds peuvent toujours déclencher Tectonic ; signalez-les.

## Essayez-le

1. Téléchargez depuis le
   [page des versions](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS signé/notarié ; Windows peut SmartScreen une fois).
2. Importez vos `.tex`, `.bib` et vos figures (ou démarrez à partir d'un modèle).
3. Compilez une fois, puis écrivez sur un vrai papier pendant une journée.

Gardez VS Code installé. Les mêmes fichiers fonctionnent dans les deux applications. Si une journée sur un vrai journal se passe mieux dans Oleafly, déplacez plus de projets ; Si les recettes et la télécommande gagnent toujours pour un arbre donné, laissez cet arbre dans l'atelier.