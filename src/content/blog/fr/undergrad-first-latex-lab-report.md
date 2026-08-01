---

title: "Votre premier rapport de laboratoire sur LaTeX en tant qu'étudiant de premier cycle"
description: "De zéro à un rapport de compilation : modèle, équations, figures, références et un chemin de compilation qui ne nécessite pas d'administration manuelle de TeX Live."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

Vous n'avez pas besoin de maîtriser LaTeX pour terminer un rapport de laboratoire. Vous avez besoin d'un modèle, d'un
quelques commandes et un bouton de compilation qui fonctionne dès le premier jour. Tout le reste peut
attendez qu'un cours ultérieur demande un document de cours de thèse.

Il s'agit d'un chemin court qui donne la priorité à un PDF propre plutôt qu'à une composition parfaite.

## Ignorez l'installation de plusieurs gigaoctets si vous le pouvez

Un éditeur de recherche de bureau avec un moteur fourni (par exemple
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) vous amène à un PDF
sans administrer TeX Live. Vous obtenez des modèles, des cartes d'erreur sur la ligne qui
cassé, PDF à côté de la source avec clic pour sauter et historique des fichiers sans
cours Git séparé. Si votre instructeur nécessite une distribution spécifique ou
Au verso, suivez les notes de cours. Sinon optimisez pour démarrer.

Les éditeurs cloud conviennent également lorsque le cours les utilise déjà. Le but est un PDF
à temps, pas une identité de chaîne d'outils.

## Volez un squelette, puis supprimez-en la moitié

Commencez à partir d'un simple modèle d'article :

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Plus de détails : [compilez votre premier PDF](/learn/first-document/) et le
[référence rapide](/learn/cheatsheet/).

Supprimez les sections que votre rubrique ne demande pas. Ne copiez pas une thèse de 40 paquets
préambule "juste au cas où". Les packages supplémentaires permettent aux débutants d'obtenir des erreurs qu'ils ne peuvent pas
lire.

## Des équations pour le laboratoire, pas pour un manuel

En ligne : `$F = ma$`. Afficher:

```latex
\[
  v = v_0 + at
\]
```

Numérotez uniquement ce que vous citez plus tard avec `\eqref`. Si le TA demandait de l'incertitude,
mettez-le dans une phrase ou dans un petit tableau, pas dans un « alignement » de dix lignes que vous ne faites pas
comprendre encore. Fractions : `\frac{a}{b}`. Racines carrées : `\sqrt{x}`.

Lorsque le journal de compilation indique quelque chose d'effrayant, corrigez uniquement la première erreur, puis
recompiler. Les erreurs ultérieures sont souvent du bruit provenant de la première.

## Un chiffre, bien fait

Exportez un tracé au format PDF ou PNG depuis votre outil d'analyse. Incluez-le avec :

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

Dans le texte : `Figure~\ref{fig:vr} montre...`. Légende sous la figure. Étiquette
après la légende. Si la figure flotte sur la mauvaise page, réduisez légèrement la largeur.
avant de vous battre contre les options de placement pendant une heure :
[placement flottant](/learn/figure-wrong-position/).

## Tables sans souffrance

Pour quelques lignes, un simple « tableau » suffit. Mettez une légende ci-dessus avec `table`
+ `\légende`. Alignez les numéros pour que le TA puisse les scanner. Vous n'avez pas besoin
des « booktabs » de qualité publication sur le laboratoire 1, mais évitez la soupe aux lignes verticales si vous le pouvez.

## Références sans workflow de bibliographie doctorale

Pour trois citations, une liste manuelle fonctionne :

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Pour en savoir plus, exportez un `.bib` depuis Google Scholar ou Zotero et nettoyez les clés afin
ils sont courts et lisibles. Les citations brisées s'impriment sous la forme `[?]` :
[effacer les guillemets mystères](/learn/citation-question-mark/).

Citer le manuel de laboratoire et le manuel comme le demande le cours (IEEE, APA-ish ou
une simple liste numérotée). Faire correspondre la rubrique vaut mieux faire correspondre un journal.

## Erreurs courantes des débutants

- Oublier `\usepackage{graphicx}` avant `\includegraphics`
- Caractères spéciaux comme `%` et `_` dans le texte sans s'échapper
- Délimiteurs mathématiques `$` incompatibles
- Noms de fichiers avec des espaces (`my plot.pdf`) que le break inclut
- Modification d'un dossier différent de celui que vous compilez

Ralentissez, corrigez la première ligne de journal, recompilez.

## Remettez le PDF, conservez la source

Soumettez ce que le LMS demande (généralement au format PDF). Conservez le `.tex` et les chiffres dans un
dossier qu'il vous reste après la fin du cours. A l'avenir tu réutiliseras le squelette
pour le prochain rapport. Si votre éditeur conserve automatiquement l'historique Git, même
mieux : vous pouvez récupérer une version avant de supprimer la bonne équation.

## Une première séance de 90 minutes

Si vous commencez ce soir :

1. Ouvrez un modèle ou collez le squelette ci-dessus.
2. Remplissez le titre, le nom et les en-têtes de section de la rubrique.
3. Ajoutez une équation dont vous savez déjà qu’elle est correcte.
4. Exportez une parcelle ; incluez-le ; légendez-le ; citez-le dans les résultats.
5. Ajoutez deux références comme le demande le cours.
6. Compilez jusqu'à ce que le PDF ressemble à un rapport et non à un article vierge.

Arrêtez-vous lorsque la rubrique est couverte. Ne passez pas la nuit sur les options de forfaits.

## Quand quelque chose se brise

Lisez uniquement la première erreur. Correctifs courants : `$` manquant, package manquant pour
graphiques, mauvais nom de fichier, `}` supplémentaire. Enregistrez une copie d'une version de compilation avant
de grosses modifications pour que vous puissiez revenir en arrière. Si le préambule d'un camarade de classe fonctionne pour le cours,
empruntez les packages minimum qu'ils ont utilisés, pas la totalité de la pile de thèse.

## À quoi ressemble le succès

Le PDF s'ouvre, les marges semblent raisonnables, les figures ont des légendes, les équations sont
lisible et les éléments de la rubrique sont clairement intitulés. C'est suffisant pour une première
Rapport de laboratoire LaTeX. La perfection de la typographie peut attendre un article qui a réellement besoin
ça.