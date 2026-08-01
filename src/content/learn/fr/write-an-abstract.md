---

title: "Des résumés qui méritent le clic"
description: "Une formule de quatre phrases pour les résumés, plus le LaTeX et les erreurs à éviter."
category: "paper-anatomy"
order: 2
level: "beginner"
tags: ["writing", "abstract"]
featured: false
updated: 2026-07-25
---

# Des résumés qui méritent le clic

Votre résumé est la seule partie de l’article que la plupart des gens liront un jour. Les évaluateurs l'utilisent pour décider à quel point vous êtes grincheux, les moteurs de recherche l'utilisent pour vous classer et les chercheurs occupés l'utilisent pour décider si le PDF vaut la peine d'être ouvert. Son travail est simple et brutal : vendre le journal entier en 150 à 250 mots.

## La formule en quatre phrases

Vous pouvez rédiger un résumé solide en répondant à quatre questions dans l’ordre. Chaque réponse est une ou deux phrases.

| Phrase | Question à laquelle il répond |
|---|---|
| Contexte | De quel domaine problématique s’agit-il et pourquoi est-ce important ? |
| Écart | Qu’est-ce qui manque ou ne fonctionne pas dans les approches actuelles ? |
| Cotisation | Qu’avez-vous construit, prouvé ou découvert ? |
| Résultat | Quel est le numéro du titre ou la conclusion ? |

Par exemple : "La formation de grands modèles coûte cher. Les méthodes de compression existantes échangent trop de précision contre de la vitesse. Nous introduisons une technique d'élagage qui préserve la précision en ciblant les têtes d'attention redondantes. Sur trois tests, elle réduit le coût d'inférence de 40 % avec une perte de précision inférieure à 0,5 %. " Quatre phrases, papier entier.

Développez chaque battement selon vos besoins, mais conservez l'ordre. Les lecteurs attendent l’entonnoir : large, étroit, le nôtre, la preuve.

## Résumé vs introduction

Les gens les confondent constamment. Le résumé est la bande annonce du film : il gâche volontairement la fin, car les chercheurs veulent connaître le résultat avant d'investir une heure. L'introduction est le premier acte : elle construit lentement l'argumentation, cite la littérature et justifie chaque affirmation. N'écrivez jamais un résumé qui taquine ("nous explorons si...") alors que vous pourriez énoncer le résultat. Voir [introductions et travaux connexes](/learn/introduction-and- Related-work/) pour le premier acte.

## Le LaTeX

L'environnement `abstract` va après `\maketitle` dans la plupart des classes d'articles :

```latex
\maketitle
\begin{abstract}
Training large models is expensive. Existing compression
methods trade too much accuracy for speed. We introduce...
\end{abstract}
```

Certaines classes de journaux veulent le résumé avant `\maketitle` ou utilisent leur propre commande, alors vérifiez le modèle. Plus d'informations sur le sujet environnant dans [la leçon sur la page de titre] (/learn/title-page/).

## Erreurs courantes

- **Citations dans le résumé.** Les résumés sont affichés seuls, dans les bases de données et les services d'indexation, où `[12]` ne pointe vers rien. Nommez le travail antérieur avec des mots si vous le devez et enregistrez « \cite » pour le corps.
- **Aclamations vagues.** "Améliore considérablement les performances" ne dit rien au lecteur. "Réduit le coût d'inférence de 40 %" rapporte le clic. Mettez votre meilleur chiffre concret.
- **Je l'écris en premier.** Le résumé résume un article qui existe. Rédigez-le tôt si cela vous aide à réfléchir, mais réécrivez-le en dernier lieu, lorsque vous savez ce que vous avez réellement montré.
- **Budget explosant.** Les sites imposent des limites, souvent de 150 à 250 mots. Chaque phrase qui n'est pas un contexte, une lacune, une contribution ou un résultat est susceptible d'être supprimée.

## Un auto-test rapide

Couvrez tout sauf votre résumé et remettez-le à un collègue. S’ils peuvent vous dire ce que vous avez fait et pourquoi c’est important, cela fonctionne. S'ils disent "ça a l'air intéressant, qu'avez-vous trouvé ?", votre phrase de résultat est manquante ou vague. Corrigez cette phrase et le résumé se met généralement en place.