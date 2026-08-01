---

title: "Photo du tableau blanc à la source"
description: "Recadrez, OCR ou multimodal, compilez, corrigez les index à l'oeil nu."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Photo du tableau blanc à la source

Une dérivation sur un tableau blanc, une page numérisée de notes de cours, une équation dans un PDF que vous ne pouvez pas copier : retaper manuellement des mathématiques dans LaTeX est lent et sujet aux erreurs. Les outils modernes peuvent faire l’essentiel de cela à partir d’une photo. La conversion est vraiment bonne maintenant, mais considérez le résultat comme un brouillon et non comme une transcription terminée. Le flux de travail ci-dessous est construit autour de cela.

## Commencez avec une meilleure photo

La qualité de l’image détermine le résultat plus que le choix de l’outil. Photographiez directement plutôt qu'en biais, car les lignes de base asymétriques rendent les indices et les exposants ambigus. Obtenez un éclairage uniforme sans éblouissement sur le tableau et recadrez étroitement selon l'équation unique que vous souhaitez, car les diagrammes environnants et les marques parasites deviennent des symboles hallucinés. Si une photo comporte trois équations, recadrez-la en trois images et convertissez-les une par une ; les résultats par équation sont systématiquement meilleurs que les résultats page par page.

## Convertissez avec l'outil dont vous disposez

Trois types d'outils font ce travail. Les services OCR d’équations dédiés sont précis sur une saisie propre. Les modèles multimodaux généraux acceptent une image dans le chat et renvoient LaTeX lorsque cela vous est demandé, et vous pouvez répondre « le deuxième indice doit être j, pas i » pour obtenir une version corrigée. Oleafly intègre une image vers LaTeX, fonctionnant via votre propre clé API avec le fournisseur que vous avez configuré, de sorte qu'un extrait de code peut passer de la capture d'écran à la source sans quitter l'éditeur. Voir [AI setup](/docs/ai-setup/) pour la configuration. Sur une saisie claire, les trois approches convergent, c'est pourquoi les conseils photo ci-dessus sont plus importants que le choix de l'outil.

## Compiler immédiatement

Collez le résultat dans votre document dans un environnement « équation » et compilez-le avant de faire autre chose. Les erreurs de conversion sont divisées en deux types, et le compilateur détecte le premier type pour vous : les accolades déséquilibrées, les délimiteurs `\left` et `\right` incompatibles, et les commandes inconnues échouent toutes bruyamment, et les correctifs sont mécaniques. [Signe dollar manquant](/learn/missing-dollar/) couvre les échecs les plus courants.

## Puis relisez les mathématiques

Le deuxième type d’erreur se compile parfaitement et est erroné. Lisez l'équation rendue par rapport au symbole d'origine par symbole, avec une attention particulière aux endroits où la conversion glisse de manière fiable : les indices et les exposants, où les petits glyphes se brouillent et « x_i » devient « x_j » ; les primes et les chapeaux, qui disparaissent ou migrent ; les paires sosies telles que `1`, `l` et `I` ou `\rho` et `p` ; et des limites sur les sommes et les intégrales. Ce sont exactement ces détails qui changent le sens d’une formule tout en la laissant typographiquement plausible. Deux minutes de comparaison par équation représentent le coût total, et c'est bien moins cher qu'un examinateur trouvant le mauvais index imprimé.