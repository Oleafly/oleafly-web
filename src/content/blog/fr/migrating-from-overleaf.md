---

title: "Des années sur Overleaf, puis un espace de travail de recherche local"
description: "Overleaf a rendu le LaTeX collaboratif grand public et les comptes gratuits mesurent toujours les collaborations, l'historique, l'IA et le temps de compilation. Là où le navigateur reste mince (reprises, forks, exportation, travail multimoteur) et ce qu'un espace de travail local libre sur votre disque remplit."
date: 2026-07-31
tags: [overleaf, migration, local-first, research-workspace, free, open-source]
---

Pendant des années, [Overleaf](https://www.overleaf.com/) était la réponse par défaut à la question « comment démarrer LaTeX ? » Partagez un lien. Regardez le curseur d'un co-auteur. Compilez dans le cloud. Cette rampe d'accès est authentique. Pour les sprints papier multijoueurs, c’est toujours le cas.

Une fois que vous y vivez pour une thèse, un stage sur le marché du travail ou une longue réécriture en solo, le produit gratuit commence à sembler petit. Un collaborateur. Historique mesuré en heures. AI compté par jour. Compilez les délais d’attente. Git et son historique complet se cachent derrière des forfaits payants ou une licence de campus que vous perdez lorsque vous partez. Le navigateur est excellent en tant que navigateur avec un tampon partagé. Il n'a jamais été conçu comme un espace de travail de recherche complet : CV avec vérifications ATS, bifurcation de projet, exportation multiformat, Typst à côté de LaTeX, semaines hors ligne, historique local illimité.

C'est ici qu'Overleaf gagne toujours l'onglet ouvert, où le niveau gratuit et la portée du produit s'épuisent, et ce qui change lorsque ces fichiers simples se trouvent dans une application de bureau gratuite ([Oleafly](https://github.com/Oleafly/Oleafly)) que vous téléchargez une fois.

## Quelles années sur Overleaf vous ont réellement acheté

**Des avantages qui tiennent toujours**

- Édition, commentaires et chat multi-utilisateurs en temps réel : toujours la meilleure option pour "trois personnes, un résumé, ce soir"
- Zéro installation pour un co-auteur qui n'ouvrira qu'un lien
- Immense galerie de modèles et éditeur / mémoire musculaire institutionnelle
- Campus SSO et licences de site qui permettent aux fonctionnalités payantes d'être gratuites lorsque vous êtes sur le campus
- Changement visuel/code et peaufinage qui a enseigné au domaine ce que signifie "LaTeX en ligne"

**Où il reste mince (surtout gratuit)**

Plans individuels publiés (vérifiez à nouveau [Tarifs Overleaf](https://www.overleaf.com/user/subscription/plans) ; les chiffres bougent) :

| Gratuit | Payant / organisation |
| --- | --- |
| **1 collaborateur** par projet | 10 (Étudiant/Standard) ou illimité (Pro) |
| **5 utilisations de l'IA/jour** | Mètres plus élevés ; Assistant complet rémunéré ; Pro = IA maximale |
| **Délai d'expiration de compilation de base** | **24×** délai d'attente de base |
| **Historique : dernières 24 heures** | Historique complet |
| Intégrations (Git/GitHub, Dropbox, Zotero/Mendeley, …) | Premium sur de nombreux forfaits |
| Étudiant ~ 8 à 10 $/mois · Standard ~ 17 à 21 $/mois · Pro ~ 33 à 42 $/mois · universités : contacter le service commercial | |

Le niveau gratuit est donc un véritable éditeur pour le travail cloud principalement en solo. Il se transforme en démo dès que vous avez besoin d'un deuxième co-auteur, de la version du mois dernier, de compilations plus longues ou de plus de cinq coups de pouce de l'IA.

Il existe une deuxième minceur qui ne concerne pas le paywall : à quoi sert le produit. Overleaf optimise les documents LaTeX collaboratifs dans un navigateur. Il est plus faible pour :

- Posséder un portefeuille d'articles, de thèses, d'affiches et de CV avec fork et lignée
- Exportez le même projet vers Word, HTML, Markdown, PowerPoint (Beamer), EPUB sans utiliser d'autres outils
- Exécutez un contrôle en amont ATS / accessibilité avant qu'une candidature à un emploi ne vous quitte
- Conservez Typst et Markdown à côté de LaTeX sous une seule bibliothèque et un modèle Git
- Travaillez hors ligne dans un avion ou sur un réseau hospitalier verrouillé
- Utilisez l'IA avec votre propre clé ou modèle local, chaque modification étant une différence d'approbation
- Traitez l'historique comme du vrai Git que vous pouvez ouvrir dans un terminal pour toujours

Ce sont des problèmes de recherche. Au verso, optimisé pour le multijoueur en premier ; le reste du bureau n’a jamais eu le même poids.

## Écriture papier : recto verso

**Au verso.** Le partage d'un brouillon papier au milieu d'un paragraphe se fait sans friction. Commentaires en direct sur la doc. Pour les groupes qui ne toucheront jamais à Git, c'est tout le produit. L'éditeur est compétent. L'aperçu convient à la plupart des articles. Vous n’êtes jamais celui qui doit installer TeX Live pour les étudiants de premier cycle.

**Là où l'écriture papier fait encore mal.** L'intelligence à l'échelle du projet est limitée à côté d'un éditeur de recherche de bureau construit autour d'un index complet : renommer une macro à travers les chapitres, vérifier en direct `\cref` et les citations multi-clés, vues de structure sur une arborescence de 200 pages, aperçus KaTeX pendant que vous tapez, grammaire qui ignore `\commands`. Les délais d'attente de compilation gratuits mordent les thèses complexes. L'histoire gratuite s'évapore après une journée. Vous ne pouvez pas réellement transférer une version de soumission dans une branche d'expérimentation de la même manière que vous créez un dépôt : vous dupliquez un projet dans le cloud en espérant vous rappeler lequel est lequel.

**Côté Oleafly.** Le document est un projet multi-fichiers sur disque. Définition à l'échelle du projet, références, renommage, diagnostics de référence/cite en direct (y compris la famille désordonnée `\eqref` / `\cref`), vues de structure, complétions pour les macros que vous avez définies avec de vraies formes d'arguments, TexLab/Tinymist lorsqu'il est disponible, aperçus mathématiques en direct, Harper + Hunspell hors ligne sur la prose uniquement. Espace de travail PDF avec SyncTeX tolérant les périmés, planches à tartiner et fenêtre détachable. Compilation automatique sur votre CPU avec des erreurs humanisées. Le CI à l'échelle du livre (~ 6 200 lignes) est la manière dont l'éditeur est testé.

**Comment les gens le divisent habituellement.** La co-création en direct reste sur Overleaf. Création multi-fichiers approfondie, semaines hors ligne, compilation locale illimitée et déplacement de l'historique local. Beaucoup de gens font les deux sur les mêmes fichiers simples.

## CV et documents lus par les machines

Overleaf compilera un CV de classe. Ce qu'il ne fera pas bien, c'est de traiter le PDF du marché du travail comme un produit : des modèles orientés ATS, un texte sélectionnable déterministe et un panneau de contrôle en amont qui montre ce qu'un extrait de style analyseur voit réellement (nom, sections, risques) - avec des scores sur lesquels vous pouvez agir. Les créateurs de CV Web vendent cette histoire moyennant des frais mensuels et piègent la mise en page dans leur SaaS.

Oleafly propose des modèles orientés CV, Preflight et Git gratuit, de sorte que « CV industriel », « CV universitaire » et « bourse » sont des projets bifurqués avec un historique complet, et non trois copies cloud nommées « cv_final_v4 ».

Si votre seul résultat est un document partagé, ignorez cette section. Si vous envoyez également des candidatures depuis le même bureau, vous remarquerez rapidement l’écart.

## Forking, clonage, lignée

Le "projet de copie" cloud existe. Ce que veulent les bureaux de recherche est plus proche d'un git fork : historique complet, lignée visible, expérimentation sans toucher à l'arbre prêt à photographier. La bibliothèque d'Oleafly traite les projets comme des livres sur une étagère ; fork copie le projet et son historique Git ; la lignée apparaît sur la carte. Les flux de travail de type clonage via GitHub push/pull sont gratuits.

L'historique gratuit au verso est de 24 heures. L’histoire payante est meilleure ; il s'agit toujours d'un calendrier de service, pas d'un dépôt que vous conservez si le compte meurt.

## Exportation et transfert

Les portails de revues veulent un PDF et souvent un zip source. Les IP veulent Word. Les sites de cours veulent du PDF. Les discussions veulent des diapositives. Les livres veulent EPUB. Le monde d'Overleaf est principalement constitué de PDF à partir du cloud LaTeX et d'une source de téléchargement. Cela couvre une grande partie du monde universitaire.

Le menu d'exportation d'Oleafly est contextuel : PDF et source zip toujours ; Word, HTML, Markdown, texte brut via Pandoc géré ; PowerPoint de Beamer ; EPUB pour les projets de type livre ; figurez les chemins PNG pour les projets d’image. La fidélité varie (soyez honnête à propos des complexes LaTeX → DOCX), mais le chemin est intégré à l'application et gratuit.

## IA, avec le compteur en plein jour

Au verso gratuit : cinq utilisations de l'IA par jour. Les forfaits payants augmentent le plafond et débloquent l'Assistant. Les organisations peuvent désactiver l’IA pour tout le monde.

Oleafly : IA désactivée par défaut. Votre clé ou Ollama. Neuf fournisseurs lorsque vous souhaitez être hébergé. L'agent peut éditer, compiler, lire des journaux, vérifier le texte PDF et rechercher de la littérature. Chaque écriture est une différence d'approbation ; les suppressions nécessitent une confirmation distincte ; Git checkpoint en premier. Ask-AI en ligne. MCP pour les clients externes. Nous ne vous vendons pas de jetons.

Commodité hébergée avec un plafond quotidien et une échelle d'abonnement, ou apportez votre propre modèle et modifications inspectables. Choisissez le modèle de confiance que vous pouvez expliquer à un laboratoire ou à un IRB.

## Réalité multimoteur

Overleaf est un cloud LaTeX (et amis). Typst a sa propre histoire Web ailleurs. Les notes Markdown vivent dans un autre outil.

Oleafly exécute LaTeX (Tectonic), Typst et Markdown dans une seule bibliothèque, avec des compilateurs gérés, un modèle Git, une surface PDF. Les modèles sont filtrés par moteur. Il s'agit d'une forme de produit différente : un bureau de recherche, pas un autre onglet LaTeX.

## Hors ligne, confidentialité, propriété

Navigateur : pas de réseau, pas d'éditeur. Les brouillons sont en direct sur leurs serveurs selon leurs conditions. L'exportation est votre porte de secours jusqu'à ce qu'elle ne le soit plus (accès au compte, modifications de plan, obtention du diplôme).

Espace de travail local : dossiers simples, vrai Git, édition hors ligne et compilations en cache, mode hors ligne strict en option. Pas de compte Oleafly. Pas de télémétrie du produit. Réseau pour les packages, les citations, l'IA hébergée, GitHub, les mises à jour, lorsque vous le demandez.

## Où Overleaf gagne toujours

- Saisie et commentaires multi-utilisateurs en direct cette heure
- Coauteurs sans installation
- SSO institutionnel et "tout le monde a déjà Overleaf"
- Habitudes des éditeurs qui ouvrent un projet cloud par défaut

Le multijoueur en direct pour Oleafly est sur la feuille de route. En attendant, Git est le chemin de collaboration, ou vous conservez Overleaf pour le sprint en direct et l'application locale pour la semaine approfondie. Parce que tout est constitué de simples fichiers, les allers-retours sont une infrastructure ennuyeuse plutôt qu'un projet de migration.

## Là où un espace de travail local gratuit prend de l'avance

- Profondeur complète de l'éditeur (index du projet, macros, structure, aperçu mathématique, correction en prose, serveurs de langue)
- Espace de travail PDF avec SyncTeX tolérant les péripéties
- Real Git + synchronisation GitHub gratuite + fork de projet avec historique
- Typst + Markdown à côté de LaTeX
- Recherche/coller/importation de citations, composition de diagrammes, contrôle en amont, exportation multiformat
- IA sous vos clés avec différences d'approbation ou entièrement locale
- 0 $ pour toujours, AGPL, télécharger une fois

## Tableau d'instantanés

| | Au verso gratuit | Au verso payé / campus | Olleaflie |
| --- | --- | --- | --- |
| Coût | Entonnoir à 0 $ | 8 $ à 42 $ +/mois ou licence de site | **0 $ pour toujours** (AGPL) |
| Compte | Obligatoire | Obligatoire | Aucun |
| Multijoueur en temps réel | Oui (1 collaboration gratuite) | Plus de collaborations | Feuille de route ; aujourd'hui = Git |
| Histoire | 24 heures | Complet (plan) | Git complet sur disque |
| Git/GitHub | Prime | Prime | Intégré, gratuit |
| Compiler | Serveur, délai d'attente de base | 24× délai d'attente | Local, votre matériel |
| Hors ligne | Non | Non | Oui (packages mis en cache) |
| Moteurs | LaTeX-first cloud | LaTeX-first cloud | LaTeX + Typst + Markdown |
| Intelligence de projet | De qualité navigateur | De qualité navigateur | Profondeur IDE multi-fichiers complète |
| PDF/SyncTeX | Aperçu du navigateur | Aperçu du navigateur | Espace de travail complet + carte obsolète |
| IA | 5 utilisations/jour | Mesuré / max | Votre clé ou Ollama ; différences d'approbation |
| CV / Contrôle en amont ATS | BRICOLAGE | BRICOLAGE | Intégré |
| Fourche avec histoire | Copier le projet | Copier le projet | Fork de bibliothèque + Git complet |
| Exporter | PDF + source | PDF + source | PDF, sources, DOCX, HTML, MD, PPTX, EPUB… |
| Modèles | Grand ensemble de nuages ​​| Grand ensemble de nuages ​​| 23 groupés + 99 packs + personnalisés |
| Accueil des données | Leurs serveurs | Leurs serveurs | Votre disque |

## Essayer les deux sans drame

1. Compressez la source Overleaf.
2. Installez Oleafly à partir du
   [page des versions](https://github.com/Oleafly/Oleafly/releases/latest).
3. Importer ; compiler une fois ; écrivez pendant une journée sur un vrai papier ou un vrai CV.
4. Conservez le projet Overleaf pour tout mode multijoueur en direct dont vous avez encore besoin.

Tectonic peut encore tomber sur des classes d'éditeurs lourdes : signalez-les ; ils façonnent la feuille de route. La plupart des articles et thèses de style ACM/IEEE/Elsevier conviennent.

## Clôture

Overleaf a mérité sa décennie. Le multijoueur gratuit semble toujours magique lorsque trois personnes ont besoin du même paragraphe ce soir. Pour la propriété, l'édition approfondie, les forks, les exportations, le travail multimoteur, l'historique illimité et l'IA que vous contrôlez, un bureau local gratuit est la solution la plus honnête. Téléchargez Oleafly une fois, conservez Overleaf pour les sprints en direct si vous en avez encore besoin et décidez à partir de vrais articles plutôt que d'une matrice de fonctionnalités.