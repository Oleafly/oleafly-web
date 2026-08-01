---

title: "Le double aveugle est bien fait"
description: "Que rendre anonyme, comment se citer et les métadonnées qui vous trahissent."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Le double aveugle est bien fait

L'évaluation en double aveugle signifie que les évaluateurs ne savent pas qui a rédigé l'article. Se tromper est l'une des rares erreurs de formatage qui peuvent entraîner le rejet d'un article sans être lu, alors considérez l'anonymisation comme une liste de contrôle et non comme une ambiance.

## Ce qui doit disparaître

| Article | Que faire |
|---|---|
| Noms des auteurs et affiliations | Supprimer ou remplacer par « Auteur(s) anonyme(s) » |
| Remerciements | Supprimer pour soumission (les bailleurs de fonds et les collègues vous identifient) |
| Liens vers les dépôts et les projets | Remplacer par un lien anonymisé, voir ci-dessous |
| Détails spécifiques à l'établissement | "le cluster de notre université" bat "le cluster GPU de Stanford" |
| Formulation « Nos travaux antérieurs » | Réécrire à la troisième personne, voir ci-dessous |
| Logos, filigranes, en-têtes | Supprimez tout ce qui porte un nom de groupe ou de laboratoire |

De nombreuses classes automatisent la première ligne. Avec la classe ACM, c'est une option :

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

D'autres sites proposent une variante de soumission de leur modèle. Les sites [IEEEtran](/learn/ieee-format-in-practice/) vous demandent souvent simplement d'omettre le bloc auteur.

## Citer votre propre travail

La règle est simple : citez-vous exactement comme vous citeriez un inconnu.

Faux : "Dans nos travaux précédents [7], nous avons montré..."
À droite : "Lovelace et al. [7] ont montré..."

N'omettez pas vos propres documents pertinents. Les évaluateurs s'attendent à ce que le travail apparenté évident soit cité, et une lacune suspecte peut vous désanonymiser aussi efficacement qu'un nom. La seule exception concerne les travaux véritablement inédits, que vous pouvez télécharger en tant que matériel supplémentaire anonyme.

## Artefacts anonymes

Les évaluateurs attendent de plus en plus du code et des données. Les liens GitHub sont radioactifs : le nom d’utilisateur est juste là. Options qui fonctionnent :

- Services construits pour cela (anonymous.4open.science est le standard du domaine)
- Un nouveau référentiel sous un compte jetable avec un historique de validation épuré
- Zip supplémentaire téléchargé avec la soumission, avec les noms d'auteur supprimés des en-têtes de fichiers et des cahiers

Vérifiez le zip avant de télécharger : les fichiers de licence, les « AUTEURS », les métadonnées du bloc-notes et les chemins du répertoire personnel codés en dur (`/home/ada/...`), tous les noms de fuite.

## Les accidents qui vous trahissent

Le texte papier est anonyme, mais le PDF ne peut pas l'être :

- **Métadonnées PDF.** Le champ Auteur se remplit souvent automatiquement à partir de votre système. Vérifiez auprès de `pdfinfo` ou des propriétés du document de votre visionneuse, et effacez-le via `\hypersetup{pdfauthor={}}`.
- **Noms de fichiers.** `lovelace-sigconf-final.pdf` annule tout. Nommez-le « paper.pdf » ou le numéro de soumission.
- **Sources de figures.** Les tracés exportés à partir d'outils peuvent intégrer des noms d'utilisateur dans des métadonnées ou dans un chemin visible dans une capture d'écran.
- **Prépublications.** La publication sur arXiv avant la soumission est autorisée dans de nombreux sites et interdite dans d'autres. La PCP dit laquelle. Lisez-le. Cela fait [une partie du choix du lieu](/learn/choose-your-venue/).

## Prêt pour l'appareil photo, il le retourne

Après acceptation, tout revient : les noms, les affiliations, les remerciements, le véritable lien du repo et la formulation à la première personne si vous l'aimez. Prévoyez une heure pour le pass de désanonymisation. Il touche plus d'endroits que vous ne vous en souvenez, et la [liste de contrôle prête pour l'appareil photo](/learn/first-paper-roadmap/) est le moment d'attraper les retardataires.