---

title: "Le format IEEE en pratique"
description: "Modes de conférence et de journal IEEEtran, blocs d'auteur et pièges à deux colonnes."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# Le format IEEE en pratique

Les sites IEEE, des petits ateliers aux revues phares, partagent un seul fichier de classe : « IEEEtran ». Apprenez-le une fois et des centaines de salles s'ouvriront.

## Mode conférence ou mode journal

La même classe produit différentes mises en page selon les options :

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

Le mode Conférence vous offre l'apparence classique : 10 pts de temps, deux colonnes, pas de numéro de page par défaut. Le mode Journal modifie la disposition du titre, ajoute les biographies des auteurs à la fin et modifie l'espacement. Utilisez toujours le mode demandé par votre salle, ils ne sont pas interchangeables. Pour une comparaison plus large entre IEEE et ACM, voir [ACM, IEEE et amis](/learn/acm-ieee-and-friends/).

## Auteurs à la manière de l'IEEE

Le mode Conférence a son propre balisage d’auteur. Ne le combattez pas avec `\\` et le centrage manuel :

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` contient les noms, `\IEEEauthorblockA` contient les affiliations et `\and` sépare les auteurs en colonnes.

## Vivre avec deux colonnes

La mise en page à deux colonnes est l'endroit où les débutants se retrouvent bloqués. Les règles :

| Problème | Corriger |
|---|---|
| Figure ou tableau large | Utilisez `figure*` / `table*`, flotte en haut d'une page |
| L'équation longue déborde | Brisez-le, voyez les tactiques à deux colonnes dans [une colonne ou deux](/learn/one-column-or-two/) |
| Colonnes de la dernière page inégales | Équilibrez-les manuellement avec `\IEEEtriggeratref` ou le package `balance` |
| L'URL se trouve dans la marge | `\usepackage{url}` ou `xurl` pour une meilleure rupture |

Les environnements flottants étoilés ne sont pas négociables pour un contenu large :

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Notez que `figure*` refuse le placement `[h]`, il flotte toujours en haut de la page. Planifiez-le au lieu de le combattre.

## Bibliographie

L'IEEE utilise des citations numériques avec son propre style BibTeX :

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

Le « IEEEtran.bst » correspondant est livré avec la classe. Ne remplacez pas « plain » ou « ieeetr », remarquent les évaluateurs, et la liste de contrôle prête à photographier le détectera de toute façon.

## Où trouver le vrai modèle

Commencez toujours par la source officielle : le sélecteur de modèles IEEE sur ieee.org ou la page du kit d'auteur de la conférence. Les organisateurs de la conférence corrigent parfois le modèle (avis de droit d'auteur, pieds de page supplémentaires), de sorte que la version du lieu l'emporte sur une copie générique. La [galerie de modèles](/templates/) d'Oleafly comprend un démarreur de conférence de style IEEE qui se compile immédiatement sur le moteur Tectonic fourni, pratique pour rédiger avant de déposer le kit officiel.

## Liste de contrôle des pièges courants

- Compilé avec du code compatible pdfLaTeX, IEEEtran est antérieur à fontspec et attend les moteurs classiques
- N'ajoutez pas de « géométrie » et ne modifiez pas les marges, la classe les définit exactement
- `\IEEEpeerreviewmaketitle` est nécessaire après `\maketitle` dans certaines soumissions de revues
- Si le modèle contient des erreurs sur votre machine, triez-le comme n'importe quel [modèle cassé](/learn/fix-broken-template/)