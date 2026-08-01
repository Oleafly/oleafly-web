---

title: "Simple, demi, double"
description: "setspace pour l'ensemble du document ou un bloc local."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Simple, demi, double

Par défaut, LaTeX définit le texte à interligne simple, avec la distance entre les lignes choisie en fonction de la police. Voilà à quoi ressemble un livre fini, mais de nombreux documents doivent être plus souples : les règlements des thèses exigent souvent un interligne et demi ou un double, et les revues demandent des manuscrits à double interligne afin que les évaluateurs aient de la place pour gribouiller. Modifiez l'espacement des lignes avec le package `setspace`. Il ajuste le corps du texte sans casser les parties du document qui doivent rester à interligne simple.

## Espacement à l'échelle du document

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Chargez le package dans le préambule, puis émettez l'une des trois déclarations. `\onehalfspacing` définit l'ensemble du document à un interligne d'un et demi, `\doublespacing` le double et `\singlespacing` revient à la normale, ce qui est utile si vous devez revenir en arrière à mi-chemin. Les déclarations prennent effet là où elles apparaissent, donc en mettre une dans le préambule couvre tout.

La raison d'utiliser setspace plutôt que de manipuler `\baselinestretch` ou `\linespread` à la main est ce qu'il laisse délibérément tranquille : les notes de bas de page, les légendes des figures et des tableaux, et les flottants restent à interligne simple, ce qui est exactement ce qu'attendent les directives de la thèse et les conventions typographiques. Un étirement global naïf doublerait également vos notes de bas de page, et cela se lit mal.

Si vous avez besoin d'un facteur que les raccourcis ne couvrent pas, `\setstretch{1.25}` accepte n'importe quel multiplicateur. Notez que le « double espacement » au sens du traitement de texte correspond à un étirement d'environ 1,66 en termes LaTeX, et `\doublespacing` en tient déjà compte, alors résistez à l'envie d'écrire `\setstretch{2}` à moins qu'une réglementation ne l'exige littéralement.

## Espacement pour un seul bloc

Parfois, seule une partie du document nécessite un espacement différent : une longue citation, une page de déclaration ou un résumé qui doit être à double interligne alors que le reste ne l'est pas.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

L'environnement `spacing` applique le facteur d'étirement donné, ici 1,2, uniquement au texte entre `\begin` et `\end`, puis restaure tout ce qui était en vigueur auparavant. Le package fournit également des environnements « singlespace » et « doublespace » prêts à l'emploi pour les cas courants. Étant donné que le changement est limité à l'environnement, vous ne pouvez pas oublier de revenir en arrière, ce qui est le mode d'échec habituel lors de l'émission de simples déclarations au milieu d'un document.

## Un mot d'avertissement

N'utilisez pas l'espacement des lignes pour atteindre un nombre de pages. Passer à la version 1.1 pour allonger un document est la plus ancienne astuce du livre, et les sites dotés d'un formatage strict exécutent des contrôles automatisés pour le détecter. Le [page-limit guide](/learn/page-limits-without-crimes/) couvre les alternatives légitimes. Enregistrez l'espace défini pour ce à quoi il est destiné : répondre à une exigence d'espacement explicite, puis revenir à un espacement simple pour la version prête pour la caméra.