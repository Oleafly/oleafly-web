---

title: "Théorème et blocs de preuve"
description: "styles amsthm, compteurs partagés, marques de fin d'épreuve."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Théorème et blocs de preuve

L'écriture mathématique repose sur des énoncés numérotés : théorèmes, lemmes et définitions, chacun partant du texte et numéroté afin que les preuves ultérieures puissent les citer. Le package « amsthm » fournit les machines. Vous déclarez les types de blocs dont votre document a besoin une fois dans le préambule, puis vous les utilisez comme environnements ordinaires.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Déclarer les environnements

`\newtheorem{theorem}{Theorem}[section]` crée un environnement `theorem`. Le premier argument est le nom de l'environnement que vous allez saisir, le second est le texte du titre qui s'imprime et le dernier « [section] » lie la numérotation aux sections, donc le troisième théorème de la section 2 est le théorème 2.3 et le compteur se réinitialise à chaque nouvelle section.

`\newtheorem{lemma}[theorem]{Lemma}` place l'argument facultatif dans l'autre position, où il signifie quelque chose de différent : `[theorem]` dit que les lemmes partagent le compteur du théorème au lieu de garder le leur. Un compteur partagé produit une seule séquence, Théorème 2.1 suivi du Lemme 2.2. C’est plus facile à suivre que les séquences parallèles où le lemme 2.1 et le théorème 2.1 existent tous deux.

`\theoremstyle` définit l'apparence de chaque déclaration qui le suit. Le style « plain » imprime le corps en italique, le traitement traditionnel des théorèmes, des lemmes et des propositions. Le style « définition » maintient le corps droit, ce qui convient aux définitions et aux exemples. Un troisième style, « remarque », est encore plus léger et convient aux notes et aux observations. Regroupez vos déclarations sous le style que chacune doit utiliser.

## Utiliser les blocs

L'argument facultatif de l'environnement imprime un nom après le titre, donc `\begin{theorem}[Optional name]` donne quelque chose comme le théorème 2.4 (Fubini). L'environnement « preuve » imprime un en-tête de preuve en italique et se ferme avec la marque de fin de preuve, le petit carré aligné à droite.

`\qedhere` repositionne ce carré lorsque la preuve ne se termine pas par un texte ordinaire. Si la dernière ligne d'une preuve est une équation affichée, la marque automatique tomberait sur une ligne vide en dessous. Écrire « \qedhere » à l'intérieur de l'écran place le carré sur la propre ligne de l'équation. Lorsqu'une preuve se termine en texte brut, comme dans l'exemple, la commande est inoffensive mais inutile.

Les blocs de théorème sont des objets numérotés comme les autres, donc `\label{thm:main}` à l'intérieur de l'environnement et `Theorem~\ref{thm:main}` dans le texte fonctionnent avec les règles habituelles en deux passes décrites dans [nombres et pointeurs pour les équations](/learn/number-equations/). L'erreur de déclaration courante consiste à placer chaque environnement sous `\theoremstyle{plain}`, qui définit les définitions de plusieurs paragraphes en italique. Conservez les définitions et les exemples sous le style « définition ».