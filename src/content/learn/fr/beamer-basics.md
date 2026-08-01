---

title: "Une première platine Beamer"
description: "Thème, cadre de titre, plan, une diapositive de résultats."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# Un premier deck Beamer

Beamer est la classe de documents LaTeX standard pour les présentations. Au lieu de pages, le document produit des diapositives, et tout ce que vous savez déjà est conservé : les mêmes mathématiques, les mêmes chiffres, les mêmes commandes de bibliographie. L’avantage pratique pour les auteurs d’articles est la réutilisation. Les équations et les diagrammes TikZ du manuscrit sont insérés dans l'exposé inchangés. Voici un deck minimal mais complet :

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Des cadres, pas des pages

L'unité centrale est le cadre, et chaque environnement « cadre » devient une diapositive. L'argument facultatif entre accolades, comme dans `\begin{frame}{Results}`, définit le titre de la diapositive. La première diapositive utilise le raccourci `\frame{\titlepage}`, où `\titlepage` restitue les métadonnées déclarées dans le préambule par `\title` et `\author`. Vous pouvez également ajouter `\institute` et `\date` et ils apparaîtront dans la même mise en page. Un cadre contient sensiblement moins qu'une page, soit environ 128 mm sur 96 mm de toile, donc le contenu qui déborde est un signe qu'il faut diviser le matériau sur deux cadres plutôt que de réduire la police.

## Thèmes et aperçu

`\usetheme{Madrid}` sélectionne une conception visuelle complète : couleurs, barres d'en-tête et de pied de page, et comment les titres des cadres sont dessinés. Beamer propose des dizaines de thèmes. "Madrid", "Berlin" et "par défaut" délibérément simple sont des choix courants, et l'échange de thème est un changement d'une seule ligne qui redéfinit l'ensemble du jeu. De nombreuses conférences et laboratoires diffusent leur propre thème. Dans ce cas, déposez leur fichier de style dans le projet et nommez-le ici.

Le cadre de plan appelle `\tableofcontents`, qui répertorie la structure en sections de l'exposé. Un problème : il répertorie les commandes `\section`, et cet exemple minimal n'en a pas, donc le contour s'affiche vide jusqu'à ce que vous ajoutiez des lignes comme `\section{Method}` entre les images. Les sections dans Beamer n’impriment pas les titres des diapositives ; ils existent pour structurer le plan et les éléments de navigation affichés par certains thèmes.

## Contenu sur les diapositives

À l'intérieur d'un cadre, `itemize` fonctionne comme dans n'importe quel document, et chaque `\item` devient une puce. Les diapositives tolèrent beaucoup moins de texte que le papier, alors limitez les éléments sur des lignes simples lorsque cela est possible et déplacez les détails dans ce que vous dites. Les figures, les tableaux et les mathématiques fonctionnent également à l'intérieur des cadres, bien que la sortie Beamer ne s'affiche pas dans ces aperçus sur la page, alors compilez le jeu pour le voir.

L'erreur précoce la plus courante est le contenu textuel : `\verb` et les listes de codes se brisent à l'intérieur des cadres ordinaires en raison de la façon dont les cadres traitent leur contenu. Le correctif est l'option fragile, écrite `\begin{frame}[fragile]`, sur n'importe quelle frame contenant du code. Lorsque le deck est rédigé, les révélations étape par étape sont le prochain outil à apprendre, couvert dans [révéler les lignes en cliquant] (/learn/beamer-overlays/).