---

title: "Listes d'auteurs, ordre et et al."
description: "Quoi et al. moyens, les conventions d'ordre des auteurs par domaine et les mécanismes de crédit."
category: "paper-anatomy"
order: 8
level: "beginner"
tags: ["writing", "publishing"]
featured: false
updated: 2026-07-25
---

# Listes d'auteurs, commande et et al.

La liste des auteurs ressemble à la partie la plus simple d’un article. Il s’agit en fait d’un petit registre de crédit dense avec des règles spécifiques à chaque domaine. Une mauvaise lecture est une erreur classique du nouveau venu.

## Qu'est-ce que "et al." moyens

"Et autres." est le latin, abréviation de *et alii*, "et autres". Lorsqu'une citation dit « Vaswani et al. 2017 », cela signifie Vaswani et les autres auteurs, anonymes par souci de concision. Il s’agit d’une convention de citation, pas d’un jugement : les autres auteurs comptent tout autant, il n’y a tout simplement pas de place pour citer huit noms à chaque fois.

Les styles de citation sont tronqués mécaniquement. De nombreux styles nomment jusqu'à deux ou trois auteurs, puis passent à « First et al. » au-delà de ça. Votre style de bibliographie gère cela automatiquement, ce qui est une raison de plus pour [laisser BibTeX gérer les citations](/learn/add-citations/) plutôt que de les saisir à la main.

## L'ordre des auteurs est un code, et le code varie selon le champ

| Congrès | Où | Comment le lire |
|---|---|---|
| Le premier auteur a fait le plus | La plupart des CS, biologie, médecine | La première position est le prix |
| Le dernier auteur est le PI | Sciences en laboratoire, une grande partie du ML | Auteur principal qui dirige le groupe et le financement |
| Alphabétique | Théorie CS, mathématiques, économie | La commande ne contient aucune information |

Cela est important lors de la lecture de CV dans plusieurs domaines : une position médiane dans un champ par ordre alphabétique ne dit rien, tandis que dans un domaine de premier auteur, elle signale un rôle de soutien. En cas de doute sur un article spécifique, n’en déduisez pas trop. Lorsque vous rédigez le vôtre, convenez de la commande dès le début, idéalement avant le début de l'écriture. Les conflits d’ordre d’auteur au moment de la soumission sont un genre de drame académique véritablement misérable.

## Le casting de symboles de soutien

Les blocs d'auteur modernes comportent des annotations supplémentaires :

- **Auteur correspondant**, souvent marqué d'un symbole d'enveloppe ou d'un astérisque : la personne qui gère la soumission et répond aux e-mails du lecteur.
- **Contribution égale**, généralement un poignard ou un astérisque avec une note de bas de page du type "Ces auteurs ont contribué à parts égales". Fréquent lorsque deux personnes codirigent véritablement le travail.
- **Affiliations**, correspondant à des numéros en exposant lorsque les auteurs couvrent plusieurs institutions.

```latex
\author{Ada Lovelace\thanks{Equal contribution.} \and
        Charles Babbage\thanks{Equal contribution.} \and
        Mary Somerville\thanks{Corresponding author.}}
```

Les classes de lieu ont chacune leur propre balisage d'auteur, copiez donc le modèle du modèle. Les mécanismes généraux de présentation se trouvent dans [la leçon de la page de titre] (/learn/title-page/).

## ORCID : votre identifiant permanent

Les noms se heurtent et changent. Un ORCID iD est un identifiant persistant (un numéro à 16 chiffres sur orcid.org) qui vous suit à travers les changements de nom, d'institutions et chaque J. Smith dans votre domaine. De nombreuses revues en exigent désormais un de la part de l'auteur correspondant. Inscrivez-vous une fois, joignez-le aux soumissions et votre dossier de publication reste sans ambiguïté à vie.

## La seule règle qui ne varie jamais

Quelle que soit la convention de classement, la paternité elle-même a une norme partagée : toutes les personnes répertoriées ont contribué de manière significative à l'œuvre, et toutes les personnes ayant contribué de manière significative sont répertoriées. La paternité offerte et la paternité fantôme constituent toutes deux des fautes dans la plupart des codes d'éthique. L'ordre est politique ; la liste est intègre.