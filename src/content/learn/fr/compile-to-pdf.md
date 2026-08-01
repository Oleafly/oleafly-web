---

title: "Pourquoi compilez-vous plus d'une fois"
description: "Fichiers auxiliaires, passes bibliographiques, et pourquoi les références s'impriment ?? au premier passage."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Pourquoi compilez-vous plus d'une fois

Tôt ou tard, vous compilerez un document, ouvrirez le PDF et trouverez « ?? » à l'endroit où devrait se trouver un numéro de figure ou une citation. Rien n'est cassé. Une seule compilation est une seule passe sur votre fichier, et certaines informations ne peuvent véritablement pas être connues en une seule passe.

Voici le problème en miniature. Sur la page 2, vous écrivez "voir Figure \ref{fig:results}", mais cette figure arrive à la page 7. Lorsque le moteur compose la page 2, il n'a pas encore atteint la page 7, il n'a donc aucune idée du numéro que la figure obtiendra. Il en va de même pour la table des matières, qui nécessite le numéro de page de chaque section avant même que la première page ne soit terminée.

## Comment le moteur le résout

Un moteur LaTeX lit votre fichier « .tex », résout chaque macro et écrit un PDF. Parallèlement au PDF, il écrit également de petits fichiers d'aide : `.aux` pour les étiquettes et les citations, `.toc` pour la table des matières, `.bbl` pour la bibliographie formatée. Ces fichiers sont des notes que le moteur laisse à son futur moi.

1. Lors du premier passage, le moteur compose votre texte et écrit chaque `\label` et `\cite` qu'il rencontre dans le fichier `.aux`, en imprimant `??` partout où il a besoin d'un numéro qu'il ne connaît pas encore.
2. Si vous citez quelque chose, un outil de bibliographie (bibtex ou biber) lit ensuite le fichier « .aux », recherche chaque citation dans votre base de données « .bib » et écrit la liste de références formatée dans un fichier « .bbl ».
3. Lors du deuxième et parfois du troisième passage, le moteur relit ces fichiers d'aide, de sorte que les références croisées, les entrées de table des matières et les étiquettes de citation se résolvent finalement en nombres réels.

Les configurations modernes exécutent automatiquement ces passes pour vous, donc en pratique, vous tapez rarement les commandes vous-même. Mais connaître le cycle explique le symptôme : un nouveau « ?? » après l'ajout d'une étiquette ou d'une citation signifie simplement que les fichiers d'assistance n'ont pas encore rattrapé leur retard, et une compilation supplémentaire le corrige.

## Moteurs sur une ligne chacun

Plusieurs programmes peuvent jouer le rôle de « moteur ». pdfLaTeX est le choix classique avec le support de revues le plus large. XeLaTeX ajoute l'Unicode complet et vous permet d'utiliser les polices installées sur votre système. LuaLaTeX parle également Unicode et intègre un langage de script pour les packages avancés. Tectonic est un moteur moderne qui télécharge des packages à la demande dès la première fois que vous en avez besoin. Oleafly le regroupe afin qu'un nouveau projet soit compilé sans installer au préalable une distribution TeX.

Pour la plupart des documents, les différences importent peu ; choisissez ce que votre modèle ou votre lieu attend et passez à autre chose. Voir [moteurs comparés](/learn/engines-compared/) lorsque vous devez choisir délibérément.

## Quand quelque chose échoue réellement

Un échec de compilation génère un long journal et l’instinct naturel est de le lire de bas en haut. Résistez à cela. Lisez la première erreur dans le journal et corrigez-la uniquement ; les erreurs ultérieures sont très souvent un bruit en cascade provoqué par la première. Si les références affichent toujours `??` après deux compilations réussies consécutives, le coupable habituel est une faute de frappe dans le nom `\label` ou `\ref` plutôt qu'une passe manquante.