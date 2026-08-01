---

title: "HotCRP, EasyChair, OpenReview, CMT"
description: "Un guide de terrain des quatre systèmes de soumission que vous rencontrerez réellement."
category: "ship-your-paper"
order: 2
level: "beginner"
tags: ["submission", "tools"]
featured: false
updated: 2026-07-25
---

#HotCRP, EasyChair, OpenReview, CMT

Votre article ne va pas à la conférence. Il est dirigé vers un système de soumission : un site Web sur lequel vous téléchargez le PDF, remplissez les métadonnées et lisez plus tard vos critiques. Il y en a quatre que vous rencontrerez encore et encore, et chacun a une personnalité.

## Les quatre grands

| Système | Personnalité | Vous le rencontrerez à |
|---|---|---|
| ChaudCRP | Rapide, minimal, apprécié des utilisateurs de systèmes | Conférences sur les systèmes et la sécurité (SOSP, USENIX) |
| Fauteuil | Le vétéran. Utilitaire, partout | Ateliers, nombreuses conférences CS dans le monde |
| Revue Ouverte | Avis publics, avis souvent visibles | Lieux ML (ICLR, NeurIPS) |
| CMT | Le cheval de bataille de Microsoft, lourd en forme | Conférences Vision et ML (CVPR) |

Ils font tous le même travail de base. Les différences résident dans les détails. OpenReview peut montrer vos avis au monde entier. HotCRP vous enverra un e-mail pour chaque commentaire. CMT dispose d'une grille de sélection de sujets qui prend dix minutes pour cliquer.

## Créez votre compte plus tôt

Faites-le la semaine où vous décidez de soumettre votre candidature, et non le soir de la date limite :

- [ ] Créez le compte avec l'e-mail que vous consultez quotidiennement
- [ ] Confirmez que l'e-mail de vérification arrive effectivement
- [ ] Vérifiez que les co-auteurs ont également des comptes (les profils OpenReview peuvent prendre des jours pour être approuvés pour les nouveaux utilisateurs)
- [ ] Démarrez un brouillon de soumission pour savoir quels champs existent

Ce dernier compte. Certains lieux posent des questions surprenantes : déclarations éthiques, listes de contrôle de reproductibilité, domaines de conflit. Mieux vaut les découvrir une semaine à l'avance.

## PDF uniquement ou téléchargement source

La plupart des sites souhaitent un PDF au moment de la soumission. Certains éditeurs, et presque tous, au moment de la prise de vue, veulent également votre source LaTeX. Gardez votre projet suffisamment rangé pour pouvoir le fermer à la demande. Oleafly exporte directement un ZIP source, ce qui correspond exactement à ce qu'attendent les systèmes de soumission de formes.

## Les champs de métadonnées

Au-delà du PDF, attendez-vous à remplir :

- **Titre et résumé**, sous forme de texte brut. Réécrivez n'importe quel calcul LaTeX en mots ou en Unicode.
- **Sujets**, cases à cocher qui acheminent votre article vers les réviseurs. Choisissez honnêtement.
- **Conflits**, personnes et institutions qui ne devraient pas vous évaluer : conseillers, co-auteurs récents, collègues. Une erreur peut annuler un avis, alors soyez minutieux.
- **Confirmation d'anonymat**, dans des lieux en double aveugle. Voir [anonymisation pour examen en double aveugle](/learn/anonymization-double-blind/).

## La réalité AoE de 11:59

Chaque soir, des milliers de personnes soumettent leurs demandes dans la dernière heure et les systèmes ralentissent. Les téléchargements qui prenaient quelques secondes pendant le déjeuner prennent quelques minutes à 23h50. Le correctif est simple et personne ne le suit : soumettez une version fonctionnelle le plus tôt possible.

## Vous pouvez mettre à jour jusqu'à la date limite

Voici la partie libératrice : la soumission ne se fait pas d’un seul coup. Sur tous les principaux systèmes, vous pouvez remplacer votre PDF autant de fois que vous le souhaitez avant la date limite. Alors soumettez une version complète mais imparfaite la veille et continuez à peaufiner. Si le réseau s'arrête à 11h58, vous aurez une véritable soumission au système au lieu d'une tragédie.

Prochaine étape après la soumission : comprendre ce qui se passe de l'autre côté, dans [l'examen par les pairs, expliqué](/learn/peer-review-explained/).