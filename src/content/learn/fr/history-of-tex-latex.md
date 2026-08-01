---

title: "TeX, LaTeX et 45 ans de beaux documents"
description: "Comment un informaticien agacé a construit en 1978 le système de composition, les recherches sont toujours en cours."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX et 45 ans de beaux documents

Chaque outil que vous utiliserez pour rédiger des articles descend de la frustration d'un homme face à des épreuves laides. L’histoire est courte et explique en grande partie pourquoi la rédaction de recherches fonctionne ainsi.

## 1978 : Knuth s'énerve

Donald Knuth, un informaticien de Stanford, écrivait sa série de livres épiques *L'art de la programmation informatique*. Lorsque l'éditeur est passé de la composition métallique traditionnelle aux premiers systèmes numériques, les nouvelles épreuves semblaient terribles, en particulier les mathématiques. La réponse de Knuth fut glorieusement disproportionnée : il arrêta les livres et passa des années à construire son propre système de composition, **TeX** (prononcé "tech", le X est un chi grec), le publiant en 1978.

TeX était un programme qui prenait du texte brut avec des commandes de balisage et produisait des pages typographiquement excellentes : espacement mathématique parfait, sauts de ligne de paragraphe élégants, le tout fonctionne. Knuth a finalement gelé son noyau et propose un chèque de prime pour chaque bug trouvé. Très peu ont été réclamés.

## 1984 : Lamport le rend utilisable

Raw TeX est puissant mais de bas niveau, comme le langage assembleur pour les pages. En 1984, Leslie Lamport (plus tard lauréat du Turing Award pour les systèmes distribués) a publié **LaTeX**, une couche conviviale sur le dessus : au lieu de positionner manuellement les éléments, vous écrivez `\section{Introduction}` et `\cite{knuth78}` et laissez le système gérer la numérotation, les références et la mise en page. LaTeX est ce que presque tout le monde entend aujourd'hui lorsqu'il dit « écrire en TeX ». Votre [premier document](/learn/first-document/) est un document LaTeX.

## Pourquoi il a survécu quatre décennies

Les traitements de texte allaient et venaient ; LaTeX est resté, pour d’excellentes raisons ennuyeuses :

- **Math.** Rien ne compose également les équations, encore. Voir [mode mathématique](/learn/math-mode/).
- **Texte brut.** Un fichier .tex de 1985 s'ouvre aujourd'hui et fonctionne correctement avec le contrôle de version.
- **Automation.** La numérotation, les références croisées et les bibliographies ne fonctionnent qu'à 300 pages.
- **Modèles.** Les éditeurs encodent leur style maison exact sous forme de fichier de classe, de sorte que chaque soumission soit identique. C'est pourquoi [ACM, IEEE et amis](/learn/acm-ieee-and-friends/) vous remettent tous des modèles .tex, et pourquoi les revues veulent toujours des sources .tex qu'elles peuvent compiler dans leur propre mise en page.

## La famille des moteurs, en un seul souffle

Le moteur TeX d'origine a engendré des successeurs modernes : **pdfTeX** a ajouté une sortie PDF directe, **XeTeX** a ajouté des polices Unicode et système, et **LuaTeX** a ajouté un langage de script à l'intérieur du moteur. La plupart du temps, vous choisissez simplement ce que votre modèle attend. Les différences pratiques résident dans [quel moteur pour ce projet](/learn/engines-compared/).

## 2023 : saisissez Typst

**Typst** est le premier challenger moderne sérieux : un nouveau langage de composition créé à partir de zéro avec une syntaxe plus propre, une compilation instantanée et des messages d'erreur plus conviviaux. C'est vraiment agréable et cela grandit vite. Ses limites sont le revers des atouts de LaTeX : quarante ans de packages et, surtout, d'acceptation par les éditeurs. Les sites veulent aujourd'hui .tex, donc LaTeX reste le langage de soumission tandis que Typst est idéal pour les notes, les rapports et tout ce dont vous contrôlez la sortie. Oleafly compile LaTeX, Typst et Markdown côte à côte, afin que vous puissiez les utiliser là où ils brillent sans changer d'application.

## Les plats à emporter

TeX est le moteur, LaTeX le langage que tout le monde écrit, Typst le jeune rival et consigne la raison pour laquelle la vieille garde persiste. Leur place entre Overleaf, les éditeurs et les gestionnaires de références fait l'objet de [la boîte à outils de rédaction de recherche, hier et aujourd'hui] (/learn/research-tools-landscape/).