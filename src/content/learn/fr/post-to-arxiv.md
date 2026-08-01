---

title: "Publication de votre première prépublication arXiv"
description: "Approbation, catégories, nettoyage des sources, licences et cycle d'annonce."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Publier votre première prépublication arXiv

La publication sur arXiv rend votre travail public, citable et horodaté. Le processus présente quelques bizarreries qui surprennent tout le monde du premier coup. Si vous n'avez pas lu [ce qu'est arXiv](/learn/what-is-arxiv/), commencez par là, puis revenez.

## Avenant : le videur à la porte

Les nouveaux soumissionnaires dans la plupart des catégories ont besoin de l'approbation d'un auteur arXiv établi. Si votre compte utilise une adresse e-mail académique et que vous avez des co-auteurs avec un historique arXiv, cela est souvent automatique ou rapide. Sinon, demandez à votre conseiller ou à un co-auteur ; le système vous donne un code d'approbation pour les envoyer. Triez cela quelques jours avant de publier, pas le soir même.

## Choisissez vos catégories

arXiv est organisé en catégories modérées comme « cs.LG » (apprentissage automatique), « cs.CL » (calcul et langage), « math.OC » (optimisation), « stat.ML ». Vous choisissez une catégorie principale et éventuellement quelques catégories secondaires. Recherchez où se trouvent les articles que vous citez et suivez-les. La catégorie principale détermine quelle liste de diffusion annonce votre article, elle décide donc qui le voit en premier.

## arXiv veut votre source, pas votre PDF

C'est le plus gros. Si votre article a été produit avec LaTeX, arXiv nécessite la source LaTeX, pas seulement un PDF. Leur système AutoTeX le compile sur leurs serveurs, et cette version est ce que les lecteurs téléchargent. Conséquences:

- Tous les fichiers dont votre article a besoin doivent être dans le téléchargement : figures, fichier `.bbl` (arXiv n'exécute pas BibTeX pour vous, incluez donc le `.bbl` généré), fichiers de style qui ne sont pas standard.
- S'il ne compile pas sur leur système, vous le corrigez jusqu'à ce que ce soit le cas.

## Nettoyez d'abord votre source

Vos commentaires sont livrés avec votre source et tout le monde peut les télécharger. Ce projet de note disant « % TODO : cette affirmation est-elle même vraie ? » sera publique. Avant de télécharger :

- [ ] Supprimer les commentaires. L'outil `arxiv-latex-cleaner` automatise cela et supprime également les fichiers inutilisés.
- [ ] Supprimer les figures inutilisées et les anciennes sections
- [ ] Vérifiez les noms de fichiers embarrassants (`final_v7_ACTUALLY_final.tex`)
- [ ] Compilez la copie nettoyée à partir de zéro une fois

Travailler à partir d'un projet soutenu par Git est utile ici : dans Oleafly, vous pouvez créer un point de contrôle, nettoyer la source et comparer avec l'original pour confirmer que rien de substantiel n'a changé avant d'exporter le ZIP.

## Licences

arXiv vous demande de choisir une licence. La licence minimale arXiv uniquement est la licence par défaut courante et maintient vos options ouvertes avec les journaux. CC BY est plus permissif. Si le journal est destiné à un éditeur spécifique, vérifiez sa politique de préimpression avant de choisir quelque chose d'irrévocable.

## Le cycle des annonces et son folklore

arXiv annonce de nouveaux articles par lots, selon un horaire fixe en semaine avec une date limite de soumission. Les articles soumis juste après la date limite apparaissent en haut de la liste suivante, et une petite industrie artisanale du folklore prétend que les articles en tête de liste reçoivent plus d'attention. Peut être. Ne perdez pas le sommeil à cause de cela ; un bon résumé compte bien plus que la position dans la liste.

## Versions : v1, v2 et après acceptation

Votre premier message est la v1, et il est permanent : vous pouvez ajouter des versions mais ne les supprimez jamais. Publiez la v2 lorsque vous avez de réelles améliorations, généralement la version acceptée après [examen par les pairs](/learn/peer-review-explained/). Après acceptation, mettez à jour la copie arXiv avec le contenu prêt à photographier (en respectant la politique de l'éditeur) et ajoutez le DOI ou le lieu dans le champ de référence de la revue. Les lecteurs vous en remercieront.