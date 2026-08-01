---

title: "Un papier, de haut en bas"
description: "Une visite guidée de chaque partie d'un document de recherche et du travail effectué par chaque partie."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Un papier, de haut en bas

Les documents de recherche semblent intimidants jusqu’à ce que vous réalisiez qu’ils sont assemblés à chaque fois à partir de la même douzaine de pièces, à peu près dans le même ordre. Une fois que vous connaissez le travail de chaque partie, vous pouvez lire les articles plus rapidement et les rédiger sans regarder une page blanche. Voici la tournée.

## Le premier sujet

| Partie | C'est un travail |
|---|---|
| Titre | Faites en sorte que le bon lecteur arrête de défiler. |
| Auteurs | Dites qui a fait le travail et à qui envoyer un e-mail. |
| Résumé | Vendez l'intégralité du document en 150 à 250 mots. |
| Mots-clés | Aidez les moteurs de recherche et les indexeurs à vous classer correctement. |

Le titre et le résumé font l'essentiel du recrutement. Quatre-vingt-dix pour cent de vos lecteurs potentiels ne verront rien d'autre, c'est pourquoi [le résumé reçoit sa propre leçon](/learn/write-an-abstract/) et la [page de titre a ses propres mécanismes LaTeX](/learn/title-page/).

## Le corps

| Partie | C'est un travail |
|---|---|
| Présentation | Expliquez pourquoi le problème est important et quelle est votre contribution. |
| Travaux connexes | Positionnez votre travail parmi tout ce qui a précédé. |
| Méthode | Décrivez ce que vous avez fait de manière suffisamment précise pour pouvoir le reproduire. |
| Expériences / résultats | Montrez la preuve que la méthode fonctionne. |
| Discussions | Interprétez les preuves honnêtement, y compris là où elles sont faibles. |
| Conclusion | Reformulez les points à retenir et indiquez ce qui va suivre. |

Le corps est un argument exposé par étapes : voici un problème, voici notre idée, voici la preuve que cela fonctionne, voici ce que cela signifie. Si une section ne fait pas avancer cet argument, c'est du remplissage. Voir [introduction et travaux connexes](/learn/introduction-and- Related-work/) et les [sections de la salle des machines](/learn/methods-results-discussion/) pour en savoir plus sur chacun.

## L'arrière-plan

| Partie | C'est un travail |
|---|---|
| Remerciements | Remerciez les bailleurs de fonds, les aides et les réviseurs des ébauches. |
| Références | Répertoriez toutes les sources que vous avez citées, formatées selon les règles du lieu. |
| Annexe | Conservez des épreuves, des tableaux supplémentaires et des détails qui pourraient interrompre le flux. |
| Matériel supplémentaire | Transportez du code, des données et des vidéos qui ne tiennent pas dans un PDF. |

Les références ne sont pas une décoration, elles constituent la preuve sur laquelle reposent vos affirmations. Voir [notes de bas de page, références et annexes](/learn/footnotes-references-appendix/) pour qui lit quoi, et [citations](/learn/add-citations/) pour les mécanismes LaTeX.

## Le squelette dans LaTeX

La plupart de ces éléments correspondent directement aux commandes que vous connaissez déjà :

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

Les commandes de sectionnement gèrent la numérotation et la table des matières pour vous, comme indiqué dans [sections et structure](/learn/sections/).

## Où aller ensuite

Si vous êtes nouveau dans le genre des articles, commencez par [ce qu'est réellement un article de recherche](/learn/what-is-a-research-paper/). Si vous êtes sur le point d'en écrire un, le reste de cette piste parcourt chaque partie dans l'ordre, de [résumés] (/learn/write-an-abstract/) jusqu'à [de combien de mathématiques vous avez réellement besoin] (/learn/how-much-math/). Lisez la partie sur laquelle vous êtes bloqué, écrivez-la, répétez.