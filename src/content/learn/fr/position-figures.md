---

title: "Où les flotteurs atterrissent réellement"
description: "htbp, pourquoi forcé ici échoue souvent, rapprochant l'environnement du texte."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Où les flotteurs atterrissent réellement

Les figures et les tableaux dans LaTeX sont des flottants, ce qui signifie que la position du code dans votre source est une suggestion et non une instruction. LaTeX déplace les flotteurs pour garder les pages uniformément remplies, pour éviter les pages à moitié vides et pour respecter les limites typographiques telles que la proportion d'images sur une page. Il s’agit du plus grand choc culturel provoqué par un traitement de texte, et comprendre le système de placement permet d’économiser des heures à le combattre.

## Que signifie htbp

Chaque environnement float prend une liste d'arguments facultatifs où LaTeX est autorisé à le mettre :

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Chaque lettre est une autorisation. `h` autorise le flottant "ici", à l'endroit du texte où le code apparaît. `t` autorise le haut d'une page, `b` autorise le bas d'une page et `p` autorise une page flottante dédiée contenant uniquement des figures et des tableaux. LaTeX les évalue grossièrement dans cet ordre pour chaque page qu'il crée, en prenant le premier emplacement qui satisfait à ses règles internes concernant l'espacement et l'équilibre des pages. Les lettres accordent des options plutôt que d'exprimer des souhaits classés, donc la liste des quatre donne à LaTeX le plus de place pour placer le flotteur dans un endroit proche et raisonnable. Si vous omettez complètement l'argument, la valeur par défaut est `[tbp]`, sans `h`, c'est pourquoi un chiffre simple saute si souvent en haut de la page suivante.

## Pourquoi forcer "ici" se retourne contre vous

Écrire « [h] » seul semble être la solution évidente, mais cela aggrave généralement les choses. Si le flottant ne rentre pas dans l'espace restant de la page actuelle et que « h » est la seule autorisation que vous avez accordée, LaTeX ne peut pas le placer sur cette page ni légalement le placer sur une autre. Il fait donc avancer le flottant, page après page, en attendant un endroit qui satisfasse « h ». Les flotteurs doivent également rester en ordre, de sorte que chaque personnage ultérieur fasse la queue derrière celui bloqué, et la pile entière se vide fréquemment à la fin du chapitre. L'ajout d'un point d'exclamation, comme dans `[h!]`, indique à LaTeX d'assouplir certaines de ses règles d'espacement, mais il ne peut pas créer d'espace qui n'existe pas.

## Les habitudes qui fonctionnent réellement

Tout d'abord, conservez « [htbp] » par défaut et abandonnez le placement parfait au pixel près lors de la rédaction, car chaque paragraphe que vous ajoutez ou supprimez remanie les pages de toute façon. Deuxièmement, placez l'environnement de la figure dans la source à côté du paragraphe qui y fait référence en premier, puisque LaTeX commence à chercher une maison à partir de ce point et qu'un flottant peut se déplacer plus tard mais jamais avant son code. Troisièmement, écrivez votre prose en référence aux figures par numéro, comme dans « La figure 3 montre le pipeline », jamais « la figure ci-dessous », afin que le texte reste correct partout où le flotteur atterrit.

Si un flotteur finit toujours dans un endroit inacceptable, il existe des outils plus puissants, notamment des barrières flottantes et le placement « [H] », abordés dans [la figure qui fuit la section] (/learn/figure-wrong-position/). Récupérez-les en fin de rédaction, une fois le texte stable, et non lors de la rédaction.