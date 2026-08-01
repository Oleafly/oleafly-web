---

title: "Arrêt d'urgence et dispute d'emballement"
description: "Avortement fatal dû à des extrémités manquantes, des accolades ou des inclusions incorrectes."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Arrêt d'urgence et argument d'emballement

## Le symptôme

La compilation meurt carrément. Le journal se termine par `! Arrêt d'urgence.` ou affiche `Runaway argument?` suivi d'une longue partie de votre propre texte, souvent avec une ligne d'accompagnement telle que `Fichier terminé lors de l'analyse de l'utilisation de \textbf` ou `Le paragraphe s'est terminé avant que \foo ne soit terminé`. Contrairement à la plupart des erreurs LaTeX, il n'y a pas de PDF du tout et le numéro de ligne signalé pointe souvent vers la fin du fichier plutôt que vers la véritable erreur.

## Pourquoi ça arrive

Les deux messages proviennent du même problème : TeX a commencé à lire quelque chose qui doit être fermé et a atteint la fin de l'entrée avant l'arrivée du jeton de fermeture. Lorsque vous écrivez `\textbf{`, TeX collecte tout jusqu'au `}` correspondant comme argument. Si cette accolade n'arrive jamais, TeX continue d'avaler le texte, à travers les paragraphes et les sections, jusqu'à ce que le fichier soit épuisé. "Runaway argument" est TeX qui vous montre ce qu'il a avalé. "Arrêt d'urgence", c'est TeX qui abandonne car il ne peut pas continuer sans la pièce manquante. Un `\end{document}` manquant, un environnement non fermé ou un `\input` d'un fichier qui n'existe pas produit le même état terminal.

## Comment trouver l'emplacement réel

Ne vous fiez pas au numéro de ligne ; cela marque l'endroit où TeX a manqué d'entrée, et non l'endroit où le déséquilibre a commencé. Au lieu de cela, lisez le bloc « Runaway argument ? » dans le journal. Les premiers mots du texte avalé vous indiquent où dans le document l'emballement a commencé, et la ligne « Le fichier s'est terminé lors de l'analyse de l'utilisation de… » nomme la commande dont l'argument n'a jamais été fermé. Recherchez cette commande à côté du texte cité et comptez ses accolades.

Si le journal ne vous aide pas, effectuez une recherche binaire dans le document. Commentez la seconde moitié du corps (ou enveloppez-la dans `\iffalse ... \fi`) et recompilez-la. Si l'erreur disparaît, le problème réside dans la moitié que vous avez supprimée ; continuez à réduire de moitié jusqu'à ce que le paragraphe défectueux soit isolé. Cela semble grossier, mais sur un document volumineux, il trouve une seule accolade manquante dans une poignée de compilations.

## Les suspects habituels

Recherchez un `{` sans son `}` à proximité des caractères gras, italiques, notes de bas de page et légendes, car ces commandes prennent des accolades d'arguments que vous tapez à la main. Vérifiez que chaque `\begin{...}` a un `\end{...}` correspondant avec le même nom d'environnement. Confirmez que le fichier se termine par `\end{document}` et que chaque `\input` et `\include` nomme un fichier qui existe à ce chemin. Les éditeurs aident ici : Oleafly met en évidence les accolades et les paires d'environnements correspondantes au fur et à mesure que vous tapez, ce qui en capture la plupart avant que le compilateur ne les voie.