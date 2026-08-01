---

title: "Le format ACM en pratique"
description: "La classe acmart : sigconf, métadonnées, révision anonyme et surprises lors de la première compilation."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# Le format ACM en pratique

ACM a regroupé tous ses modèles dans une seule classe, « acmart », en 2017. Une classe, plusieurs visages : l'option de format décide si vous obtenez un article de conférence sur deux colonnes ou un article de revue sur une seule colonne.

## Choisissez votre option de format

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` est ce que vous voulez pour presque toutes les conférences ACM. Le CFP du lieu nomme l'option exacte ; faites-lui confiance plutôt que l'habitude. Si vous êtes encore en train de choisir entre les familles de lieux, [ACM, IEEE et amis](/learn/acm-ieee-and-friends/) les compare.

## Les métadonnées sont obligatoires

Contrairement à IEEEtran, acmart refuse de paraître correct (et l'éditeur refuse de l'accepter) sans ses blocs de métadonnées :

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

Les concepts CCS proviennent d'un sélecteur sur le site Web d'ACM qui génère à la fois les lignes XML et `\ccsdesc`. Collez-les textuellement. Les mots-clés vont dans « \keywords », pas dans l'abstrait. Le bloc de format de référence ACM (cette zone de citation grise sur la première page) est généré automatiquement à partir de `\acmConference`, `\acmYear` et de vos amis, que l'éditeur remplit ou vérifie au moment où la caméra est prête.

## Soumission en double aveugle

La plupart des conférences ACM sont révisées de manière anonyme. Une option le gère :

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

« anonyme » masque les auteurs et les affiliations, « review » ajoute des numéros de ligne pour les réviseurs. Éteignez les deux pour être prêt à photographier. La classe gère les mécanismes, mais l’anonymisation est plus grande qu’un drapeau. Voir [double aveugle bien fait](/learn/anonymization-double-blind/).

## Citations : numérotées ou auteur-année

acmart utilise natbib en dessous et prend en charge les deux styles :

| Options | Résultat |
|---|---|
| par défaut | Numéroté : [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Année-auteur : (Lovelace, 1843) |

Certains SIG imposent une année-auteur (CHI historiquement), d'autres sont numérotés. Encore une fois : la CFP décide.

## Surprises de la première compilation

acmart est gourmand en paquets. Attendez-vous à ceux-ci sur une nouvelle configuration :

- **Polices Libertine.** La classe charge Linux Libertine et Biolinum plus `newtxmath`. Sur une installation TeX minimale, ceux-ci arrivent sous forme de téléchargements lors de la première compilation. Le moteur Tectonic fourni par Oleafly les récupère automatiquement lors de la première utilisation, de sorte que la compilation initiale prend plus de temps que la seconde. C'est normal, ce n'est pas un problème.
- **Règles flottantes strictes.** acmart bloque carrément certains packages (comme `titlesec`) et générera une erreur si vous les chargez.
- **`\authorsaddresses{}`** fait taire le pied de page "adresses des auteurs" dans les brouillons.

Si un package ne parvient réellement pas à être résolu, le correctif est le correctif habituel : [installer le package manquant](/learn/install-missing-package/).

## Où l'obtenir

Téléchargez le modèle officiel depuis les pages d'auteur d'acm.org ou sur le site de votre conférence, et tenez « acmart.cls » à jour. ACM le révise plusieurs fois par an et des vérifications prêtes à photographier sont effectuées par rapport à la dernière version.