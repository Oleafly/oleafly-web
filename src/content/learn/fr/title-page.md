---

title: "Cartouches et pages de titre"
description: "maketitle pour les articles, page de titre pour les thèses et les rapports."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Blocs de titre et pages de titre

Un article s'ouvre sur un cartouche : titre, auteurs, date, placé en haut de la première page. Une thèse s'ouvre sur une page de titre complète présentée selon les spécifications d'une université. LaTeX traite ces deux problèmes différents. Le premier est automatisé par `\maketitle`, et le second est un canevas vierge appelé environnement `titlepage`.

## Le cartouche

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

Les trois premières commandes stockent uniquement les métadonnées. Rien n'apparaît dans le PDF lors de leur exécution, c'est pourquoi ils peuvent figurer dans le préambule. `\maketitle`, placé après `\begin{document}`, est le moment où le bloc stocké est composé. À l'intérieur de `\author`, le `\\` coupe une ligne (la manière habituelle de mettre une affiliation sous un nom), et `\and` sépare plusieurs auteurs afin qu'ils soient placés côte à côte. `\date{\today}` imprime la date du jour où vous compilez. Écrivez `\date{}` avec des accolades vides pour omettre complètement la ligne de date. Laisser complètement `\date` imprime toujours la date d'aujourd'hui.

Dans la classe `article`, le bloc se trouve en haut de la première page avec le texte suivant en dessous. Dans « rapport » et « livre », il obtient sa propre page. Les cours de journaux et de conférences remplacent cette machinerie par leurs propres commandes pour les affiliations, les e-mails et les ORCID. Par conséquent, dans un modèle de lieu, vous devez suivre son exemple de fichier plutôt que les commandes standard.

## Une page de titre construite à la main

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

L'environnement « page de titre » vous offre une page non numérotée et un contrôle manuel complet, ce qui est généralement exigé par les règlements des thèses. Chaque élément de l'exemple mérite sa place. `\centering` centre tout ce qui suit dans l'environnement. `\vspace*{2cm}` pousse le titre vers le bas à partir du bord supérieur. Le formulaire suivi est important car un « \vspace » non suivi en haut d'une page est supprimé. Les accolades autour de `{\Large ...}` modifient la taille de la police afin qu'elle se termine là où le groupe se termine, et `\\[1em]` coupe la ligne avec un espace supplémentaire en dessous. `\vfill` insère un espace extensible qui absorbe toute la hauteur restante, de sorte que l'instruction de degré et la date atterrissent au bas de la page, quelle que soit la longueur du titre.

Utilisez un mécanisme ou l’autre. La combinaison de `\maketitle` avec un environnement `titlepage` produit deux pages de titre, et l'erreur classique du débutant est la plus discrète : définir `\title` et `\author` mais oublier `\maketitle`, de sorte que le document se compile proprement sans aucun titre. La [leçon sur le squelette du document](/learn/document-skeleton/) montre où se situe le bloc dans le fichier dans son ensemble.