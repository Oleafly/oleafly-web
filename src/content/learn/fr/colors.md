---

title: "Une couleur qui survit à l'impression"
description: "xcolor, les spécifications HTML et l'utilisation de la couleur pour signaler lorsque les journaux passent en niveaux de gris."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Couleur qui survit à l'impression

La couleur dans LaTeX provient d'un seul package, « xcolor ». Il vous donne des couleurs nommées, des spécifications de couleurs exactes, des zones d'arrière-plan et un moyen de définir votre propre palette. Le corps du texte dans les journaux est presque toujours noir, vous en avez donc besoin moins souvent que vous ne le pensez. Cela reste toujours payant dans les diapositives, les brouillons avec des annotations visibles et tout ce qui doit correspondre à la palette d'une organisation.

## Les commandes

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` colore uniquement le texte de son deuxième argument, en utilisant l'un des noms prédéfinis de xcolor ; « rouge », « bleu », « gris », « sarcelle » et quelques dizaines d'autres fonctionnent immédiatement. Lorsqu'un nom n'est pas assez précis, le modèle facultatif « [HTML] » accepte un code hexadécimal à six chiffres, le même formulaire qu'un concepteur Web ou un guide de style vous remet, donc « 2563EB » reproduit exactement un bleu spécifique. Notez que xcolor veut que les chiffres hexadécimaux soient en majuscules et sans le « # ».

`\colorbox{gray!15}{highlighted}` peint un arrière-plan derrière son texte au lieu de colorer le texte lui-même. L'argument `gray!15` montre la syntaxe de mélange de xcolor : 15 parties de gris mélangées à 85 parties de blanc, ce qui donne la teinte pâle qui se lit comme un surlignage. La même syntaxe fonctionne partout où une couleur est attendue, et vous pouvez la chaîner, comme dans « blue!50!black » pour un bleu foncé.

## Définir une fois, utiliser partout

`\definecolor{brand}{HTML}{2563EB}` enregistre votre propre nom. Après cette ligne, `\textcolor{brand}{...}` fonctionne comme n'importe quelle couleur intégrée, et la valeur hexadécimale se trouve exactement au même endroit. Lorsque la palette change, vous modifiez une ligne de préambule au lieu de rechercher des codes hexadécimaux bruts dans le document. Même idée que les [macros personnalisées](/learn/custom-commands/) : définir une fois, réutiliser partout.

## Les niveaux de gris sont toujours réels

Utilisez la couleur pour le signal, pas pour la décoration, et supposez que certains lecteurs ne la verront pas. De nombreuses revues impriment encore en niveaux de gris, où le rouge et le bleu se transforment en gris similaires, et une fraction significative des lecteurs ont une forme de déficience de vision des couleurs. Règle générale : la couleur peut renforcer une distinction, mais ne devrait jamais être la seule chose qui la porte. Associez du texte coloré avec du gras ou un symbole, et associez des lignes de tracé colorées avec des marqueurs ou des motifs de tirets distincts.

Encore une chose à propos de la portée. La coloration manuelle des titres ou du corps du texte donne rapidement à un document un aspect fait maison, et dans le modèle d'un lieu, il sera de toute façon annulé. Conservez la couleur manuelle pour les endroits où cela signifie quelque chose, comme le marquage des modifications demandées par le réviseur dans une révision, et supprimez-la avant la version finale.