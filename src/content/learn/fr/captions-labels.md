---

title: "Légendes qui correspondent au numéro"
description: "Mettez l'étiquette après la légende pour que le numéro colle."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Légendes correspondant au numéro

Les références croisées sont l'une des choses que LaTeX fait mieux qu'un traitement de texte. Vous ne tapez jamais « Figure 3 » à la main. Au lieu de cela, vous attachez une étiquette à la figure et laissez LaTeX remplir le numéro partout où il est mentionné, de sorte que les numéros restent corrects, peu importe combien vous réorganisez, insérez ou supprimez. Le mécanisme a une règle qui fait trébucher presque tout le monde au moins une fois : l'ordre de `\caption` et `\label` compte.

## Pourquoi la commande est importante

La commande `\caption` effectue deux tâches. Il imprime le texte de la légende sous votre figure ou votre tableau, et fait avancer le compteur, transformant ce flottant en figure 3. La commande `\label` fait quelque chose de plus stupide que ce à quoi les gens s'attendent : elle enregistre le numéro qui a été attribué le plus récemment, quoi qu'il arrive. Il n'a aucune idée qu'il se trouve "à l'intérieur d'une figure". L'étiquette doit donc venir après la légende :

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Si vous mettez `\label` avant `\caption`, la légende n'a pas encore augmenté le compteur de chiffres, donc l'étiquette capture entièrement le numéro le plus récent provenant d'un autre endroit, généralement la section actuelle. Votre texte dit alors « voir la figure 2.4 » alors qu'il s'agit en réalité de la figure 7. C'est le symptôme classique : les références qui pointent vers des numéros de section au lieu de numéros de figure signifient presque toujours une étiquette placée trop tôt. L'habitude la plus sûre est d'écrire `\label` sur la ligne qui suit immédiatement `\caption`, à chaque fois, dans les figures et les tableaux.

## Référencer l'étiquette

Dans votre texte, écrivez la référence comme ceci :

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` se développe jusqu'au nombre nu et vous fournissez vous-même le mot « Figure ». Le « ~ » entre eux est un espace insécable, qui empêche LaTeX de terminer une ligne après « Figure » et de commencer la suivante par « 3 ». Les préfixes comme `fig:`, `tab:`, `sec:` et `eq:` sont de pures conventions, LaTeX ne les interprète pas, mais ils gardent vos étiquettes lisibles et empêchent une figure et un tableau de partager accidentellement un nom.

Notez que `\pageref{fig:neat}` donne le numéro de page sur lequel la figure a atterri, utile dans les longs documents où un flottant peut s'éloigner de sa mention. Pour une visite complète des commandes de référencement, voir [chaque commande expliquée](/learn/every-command-explained/).

## Compiler deux fois et autres pièges

Les références sont résolues au fil des exécutions du compilateur : la première passe écrit les positions des étiquettes dans le fichier `.aux` et la deuxième passe les relit. Jusqu'à ce deuxième passage, les références s'impriment sous forme de points d'interrogation en gras, donc `??` dans votre PDF signifie généralement simplement « compiler à nouveau », et non que quelque chose soit cassé. La plupart des éditeurs, y compris Oleafly, réexécutent automatiquement les passes pour vous. Si `??` survit aux compilations répétées, l'étiquette n'existe pas. Les causes probables sont une faute de frappe dans le nom de l'étiquette ou un `\caption` que vous avez supprimé en laissant le `\label` derrière.