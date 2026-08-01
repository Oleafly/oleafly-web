---

title: "Nombres et pointeurs pour les équations"
description: "label, ref, eqref et numéroter uniquement les lignes que vous voulez dire."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Nombres et pointeurs pour les équations

Numéroter une équation est une promesse que vous y ferez référence plus tard. LaTeX gère les deux moitiés de cette promesse : l'environnement "équation" attribue le numéro et le système d'étiquettes vous permet de le pointer depuis n'importe où dans le document sans jamais saisir le numéro vous-même.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Étiquettes et références

`\begin{equation}` numérote la ligne affichée. `\label{eq:bayes}` attache le nom `eq:bayes` à ce numéro. Vous pouvez choisir le nom, et un préfixe « eq : » permet de distinguer les étiquettes d'équation des figures et des tableaux. Pour le citer, `\ref{eq:bayes}` imprime le nombre nu, tandis que `\eqref{eq:bayes}`, de `amsmath`, le met entre parenthèses pour correspondre à la façon dont le nombre apparaît à côté de l'équation. Préférez `\eqref` pour les équations afin que les deux styles concordent.

Étant donné que les nombres sont enregistrés lors d'un passage et lus lors du suivant, une nouvelle compilation affiche `??` jusqu'à l'exécution suivante. [Des points d'interrogation au lieu de chiffres](/learn/equations-show-qq/) couvre ce cycle.

Si une équation affichée n’est jamais référencée, ne la numérotez pas. Utilisez plutôt `\[ ... \]` ou l'`équation*` étoilée, afin que les nombres marquent uniquement les lignes qu'un lecteur pourrait avoir besoin de retrouver.

## Numérotation de certaines lignes alignées

Les dérivations multilignes dans le numéro « aligner » chaque ligne par défaut, ce qui est rarement ce que vous souhaitez. Deux commandes ajustent cela par ligne :

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` supprime le numéro sur sa ligne, donc ici l'étape intermédiaire reste non numérotée tandis que la première et la dernière ligne conservent leurs numéros et étiquettes. Mettez chaque `\label` sur la ligne qu'il nomme, avant le `\\`, afin qu'il soit lié au bon numéro. Le raccourci tout ou rien est « align* », qui ne numérote rien. La famille complète des environnements multilignes est couverte dans [équations multilignes qui s'alignent](/learn/align-equations/).

L'erreur courante consiste à écrire le nombre littéral, comme dans "voir l'équation 3", qui se brise dès que vous insérez une équation au-dessus. Parcourez toujours une étiquette et laissez LaTeX renuméroter à chaque compilation. Vous pouvez regarder la mise à jour de la numérotation en direct pendant que vous ajoutez et supprimez `\notag` dans le [aire de jeu](/live/).