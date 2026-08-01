---

title: "Quand LaTeX bat Word (et quand ce n'est pas le cas)"
description: "Choisissez l'outil pour le document : équations, articles longs, citations ou courts brouillons collaboratifs."
category: "open-the-loop"
order: 2
level: "beginner"
tags: ["basics"]
featured: true
updated: 2026-07-25
---

# Quand LaTeX bat Word (et quand ce n'est pas le cas)

Aucun des deux outils n’est universellement meilleur. Les traitements de texte sont optimisés pour la manipulation directe : ce que vous voyez, c'est le document. LaTeX optimise la structure : vous décrivez le document en texte brut et un compilateur le compose. Le modèle qui gagnera dépend du document devant vous et non de la loyauté tribale.

## Où LaTeX gagne sa courbe d'apprentissage

Les équations sont le cas le plus clair. L'éditeur d'équations de Word fonctionne pour un problème de devoirs. Cela devient pénible à travers une centaine d’équations numérotées avec des références croisées. Dans LaTeX, `\label` et `\ref` gardent chaque nombre correct, peu importe à quel point vous réorganisez, ce que la leçon sur les [références croisées](/learn/cross-references/) couvre en détail.

Les documents longs et structurés se comportent de la même manière. Une thèse avec des chapitres dans des fichiers séparés, des tables des matières automatiques et des styles de titres cohérents est courante dans LaTeX et fragile dans un traitement de texte. Les citations suivent le même modèle : une base de données BibTeX contenant quelques centaines d'entrées se reformate pour n'importe quel style de revue, où les listes de références entretenues manuellement se dégradent rapidement. Voir [ajouter des citations](/learn/add-citations/) pour les mécanismes.

Deux avantages plus silencieux s’accumulent au fil du temps. La source LaTeX est du texte brut, donc Git peut le comparer et le versionner proprement, et la même source produit le même PDF des années plus tard, sur n'importe quelle machine, sans dérive de mise en page.

## Où Word ou Google Docs sont la bonne solution

Les éditeurs à manipulation directe gagnent lorsque la collaboration est le document. Si vos co-auteurs ne sont pas des experts techniques, travaillent uniquement sur des modifications suivies et ont besoin de commenter cet après-midi, un document partagé est la réponse pratique. Ils gagnent également pour les lettres courtes et ponctuelles, pour lesquelles l'installation de LaTeX coûte plus cher que les retours de composition, et pour les éditeurs ou les services RH qui n'acceptent que les fichiers « .docx ».

## Un hybride qui fonctionne en pratique

Conservez la source de vérité dans LaTeX et exportez les brouillons pour les personnes qui en ont besoin. Un PDF collecte des commentaires ; un DOCX généré par Pandoc satisfait à une exigence « .docx ». Les décisions de ces tours sont fusionnées dans les fichiers « .tex », qui restent la version canonique. La leçon sur [le travail avec des collaborateurs basés sur Word](/learn/collaborator-uses-word/) parcourt cette boucle.

## La réponse courte

Utilisez LaTeX pour tout ce que vous citerez, numéroterez, croiserez ou réviserez au fil des mois. Utilisez un traitement de texte lorsque le coût social de LaTeX dépasse son avantage en matière de composition. Les deux jugements sont légitimes et la plupart des chercheurs utilisent les deux outils au cours d’une année donnée.