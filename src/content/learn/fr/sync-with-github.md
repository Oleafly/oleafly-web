---

title: "Mettez le document sur GitHub"
description: "Init, ignorez les fichiers AUX, les dépôts privés, les habitudes qui maintiennent les fusions de co-auteurs saines."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Mettez le papier sur GitHub

Un manuscrit LaTeX est constitué de texte brut, ce qui en fait une solution idéale pour Git. Chaque brouillon devient un commit auquel vous pouvez revenir, chaque modification est visible sous forme de différence au niveau de la ligne, et GitHub vous donne une copie hors site ainsi qu'un moyen pour les coauteurs d'extraire l'état actuel. Rien de tout cela ne nécessite un Git avancé. Un article nécessite peut-être cinq commandes, utilisées de manière cohérente.

## La configuration initiale

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Exécutez-le une fois dans le dossier du projet. L'étape `.gitignore` compte plus qu'elle n'en a l'air. Chaque compilation régénère les fichiers `.aux`, `.log`, `.out`, `.toc` et `.synctex.gz`, et leur validation enterre vos véritables modifications sous le bruit de la machine et crée des conflits de fusion inutiles entre coauteurs. Suivez uniquement ce que vous écrivez : les sources « .tex », la base de données « .bib », les figures et tous les fichiers de classe ou de style que le lieu vous a fournis. Le PDF est également un produit de construction. La plupart des équipes le laissent de côté et le reconstruisent localement, bien qu'en attacher un à une version balisée soit un moyen raisonnable de geler une version soumise. Gardez le référentiel privé jusqu'à ce que le travail soit public. Un manuscrit inédit n’est pas quelque chose à indexer.

## Des habitudes qui maintiennent les coauteurs sains d'esprit

Faites en sorte que chaque commit effectue un changement logique, tel que « réviser l'introduction de la section 3 » ou « ajouter une table d'ablation ». L'historique se lit alors comme l'histoire du journal, et une mauvaise édition peut être annulée sans dommage collatéral. Tirez avant de commencer une session d'écriture et poussez lorsque vous arrêtez. Les conflits de fusion augmentent avec le temps passé par les branches séparées. Ne forcez jamais une branche partagée une fois que les coauteurs l’ont tirée : cela réécrit l’histoire sous leurs pieds. Conservez les gros artefacts binaires (ensembles de données, vidéos) hors du référentiel papier. Créez un lien vers une archive ou utilisez un référentiel de données distinct. Git stocke pour toujours chaque version de chaque binaire.

Une habitude spécifique à LaTeX : écrire une phrase par ligne source rend les différences considérablement plus lisibles, car une modification d'un mot apparaît comme un changement d'une ligne au lieu d'un paragraphe redistribué.

## Comment Oleafly s'intègre

Chaque projet Oleafly est un dossier ordinaire sur le disque, donc ces commandes fonctionnent sans changement. L'application peut également créer automatiquement un commit Git après chaque compilation réussie, ce qui vous offre un filet de sécurité précis entre vos commits délibérés. Voir [Historique Git](/docs/git-history/). Pour les modèles de collaboration construits sur cette base, y compris l'échange de correctifs et la propriété de chapitres, voir [Coauteur sans curseur actif](/learn/offline-collaboration/).