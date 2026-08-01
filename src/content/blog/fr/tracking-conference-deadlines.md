---

title: "Ne manquez plus les dates limites de la conférence : AoE, résumés et comptes à rebours"
description: "Pourquoi les dates limites des conférences déroutent tout le monde (AoE, inscription des résumés, dates de déménagement), comment l'ensemble de données ouvert ccf-deadlines est utile et comment conserver un compte à rebours à côté du manuscrit."
date: 2026-07-21
tags: [conferences, deadlines]
---

Chaque chercheur a une histoire sur un délai qui était en réalité de douze heures
plus tôt qu'ils ne le pensaient. Le papier était prêt. Le portail ne l’était pas. L'habituel
les coupables sont les fuseaux horaires, l'enregistrement des résumés et les dates qui ont bougé alors que personne
mis à jour le wiki du laboratoire.

Il s'agit d'un guide pratique pour lire les appels à communications, suivre les lieux et
garder le compte à rebours là où vous écrivez réellement.

## AoE n'est pas votre fuseau horaire

"Anywhere on Earth" (AoE) signifie UTC-12 : le délai passe lorsqu'il est passé
minuit du côté ouest de la ligne de date internationale. C'est généreux
par rapport à un midi dur à New York, mais seulement si vous convertissez correctement.

Ne vous fiez pas à une capture d'écran de l'application de calendrier de quelqu'un d'autre. Convertir à partir du
appel officiel. Si le site indique "23h59 AoE, 14 mars", traitez le matin du 15 mars à
La Californie est déjà en retard jusqu'à ce que vous ayez effectué la conversion vous-même.

## La date limite des résumés est réelle

De nombreux CS et lieux adjacents nécessitent un titre enregistré et un résumé environ une semaine
avant la date limite de remise des documents. Manquer la date limite des résumés et l'article
le délai n’a pas d’importance ; le portail ne vous permettra pas de soumettre.

Inscrivez les deux dates sur la même série d'événements du calendrier : résumé, article, réfutation,
prêt pour l'appareil photo. Les délais de réfutation sont courts. Prêt à photographier atterrit souvent lors d'un autre
la précipitation de la conférence.

## Déplacement des délais

Les extensions et les dates du deuxième tour sont réparties sur les listes de diffusion et les flux sociaux.
L'appel officiel (ou la bannière du portail de soumission) est la seule source valable
en confiance. Lorsqu'une date change, mettez à jour votre tracker le même jour ; périmé
les feuilles de calcul provoquent un faux calme.

## L'ensemble de données ouvert qui corrige la découverte

La communauté entretenue
Le projet [ccf-deadlines](https://github.com/ccfddl/ccf-deadlines) suit des centaines
des sites en YAML consultable : dates limites, fuseaux horaires, classements et liens officiels,
Sous licence MIT. Parce qu'il s'agit de données plutôt que d'un seul site Web, n'importe qui peut créer
filtres, comptes à rebours et recherche par-dessus.

Il n'inclura pas tous les ateliers de votre niche. Pour ceux-là, ajoutez toujours le
page officielle. Utilisez l'ensemble de données pour les grandes salles récurrentes où le
la communauté a déjà fait le travail de grattage.

## Compte à rebours à côté du manuscrit

Un site Web distinct sur les délais n’est utile que si vous n’oubliez pas de l’ouvrir. L'utile
l'endroit pour un compte à rebours est à côté du papier que vous courez pour terminer.

Nous publions un [tableau des délais en direct](/deadlines/) gratuit sur l'ensemble de données ouvert :
comptes à rebours, classements CCF et CORE, filtres de champ, recherche, pas d'inscription. Le
[Application de bureau Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) met
le même tableau en un clic depuis vos projets, fonctionne hors ligne à partir d'un package
instantané et s'actualise à la demande. Lorsque vous êtes dans l'éditeur à 1h du matin, vous devriez
pas besoin d'un deuxième profil de navigateur pour savoir si AoE c'est ce soir ou demain.

Nouveau dans le processus ? [Le cycle de vie des délais](/learn/deadline-lifecycle/) couvre
enregistrement du résumé, réfutations et prêt à photographier à partir de zéro.

## Un rituel de laboratoire qui fonctionne

Lorsque quelqu'un propose un lieu, collez le lien officiel du CFP dans le tracker.
le même jour. Enregistrez les temps de résumé et de papier dans AoE et dans la zone locale du laboratoire.
Désignez une personne pour revérifier le portail la semaine précédente (les dates changent). Geler
des expériences majeures ou des énoncés de théorèmes suffisamment tôt pour que l'écriture ne soit pas la solution.
seul chemin vers le PDF. Gardez le document sous contrôle de version afin que "la soumission
PDF" correspond à un commit, pas à un nom de fichier de bureau.

## Écrire sous un arrêt brutal

Les délais ne se soucient pas de la perfection du travail connexe. Portée réduite : une revendication claire,
tableaux qui compilent, figures avec légendes, bibliographie qui ne montre pas
`[?]`. Validez le `.bib` tôt
([validateur BibTeX](/tools/bibtex-validator/)). Compilez la classe prête à photographier
déposer des jours avant l’ouverture du portail, pas des heures.

Si vous utilisez un éditeur de recherche local avec des points de contrôle de compilation automatique et Git, utilisez
eux. Un flotteur cassé à 23h00 AoE est récupérable si l'historique existe.

## Après avoir soumis

Archivez le PDF exact, le zip source et le hachage de validation. Notez l’ID de soumission. Quand
les avis arrivent, vous voudrez le texte que vous avez réellement soumis, pas la branche
vous avez continué à éditer "juste au cas où".

## Suivi personnel ou en laboratoire

Les individus peuvent vivre sur un calendrier plus un tableau. Les laboratoires ont besoin d'une feuille partagée ou
canal avec les noms des propriétaires : qui soumet quoi, résumé terminé (oui/non), PDF
congelé (oui/non). La personne qui « pensait que quelqu'un d'autre se soumettait » est un
bug de processus, pas un bug de fuseau horaire.

## Les outils ne sont pas la date limite

Un widget de compte à rebours n'écrit pas le travail associé. Utilisez le tableau pour retirer
incertitude, puis protégez les blocs d'écriture sur le calendrier de la même manière que vous
protéger les expériences. Si le document n'est pas compilable 48 heures avant le
délai, réduisez la portée plutôt que d’inventer un nouveau modèle.

La plupart des délais manqués sont des échecs de processus. Convertissez vous-même l'AoE, traitez le résumé
inscription comme contraignante et mettez à jour votre tracker lorsque la page officielle change.
Gardez le compte à rebours à côté du manuscrit. Les ensembles de données et les tableaux font la découverte
bon marché; le rituel est toujours le vôtre.