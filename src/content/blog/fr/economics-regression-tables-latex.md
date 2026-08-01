---

title: "Économie et sciences sociales : tableaux de régression acceptés par les revues"
description: "booktabs, threeparttable, siunitx stars, notes sous estimations, habitudes biblatex et versioning de documents de travail pour l'économie, la science politique et la sociologie."
date: 2026-06-26
tags: [economics, social-science, tables]
---

Les sciences sociales empiriques vivent et meurent par les tables. Une décimale mal alignée ou un
l'étoile de signification manquante peut brûler un cycle de révision et de soumission qui n'avait rien
à voir avec votre stratégie d’identification. Les revues se soucient presque de la lisibilité
autant que les coefficients.

Ce qui suit s'adresse aux étudiants et aux RA qui exportent depuis Stata ou R puis nettoient
LaTeX à la main.

## booktabs n'est pas facultatif

Les règles verticales et les doubles lignes horizontales ressemblent à Word des années 1990. Utilisez les trois
règles horizontales de `booktabs` :

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Voir [tableaux à trois règles](/learn/booktabs-beautiful/). Exporter depuis R
(`modelsummary`, outils de style `estout`, ancien `stargazer`) ou Stata vers LaTeX
fragments, puis nettoyez vous-même la ligne d’en-tête. Les en-têtes générés automatiquement sont
généralement trop large ou trop énigmatique pour le PDF final.

## Notes sous le tableau, pas de notes de bas de page aléatoires

`twoparttable` conserve la légende, sous forme de tableau, et note la même largeur :

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Mettez la taille de l'échantillon, les effets fixes, les notes SE groupées et l'étoile de signification
légende ici. N'accrochez pas une note de bas de page sur une seule cellule que seuls certains lecteurs
remarquerai. Les étiquettes des panneaux (A/B) appartiennent à la légende ou aux règles médianes avec des
texte, pas dans une légende de style figure qui n'apparaît jamais dans le PDF.

## Colonnes numériques et étoiles de signification

Les types de colonnes `siunitx` (`S`) s'alignent sur la virgule décimale. Cela seul fait un
le tableau des résultats semble intentionnel. Les étoiles cassent les colonnes numériques pures, donc vous
ont généralement besoin d'un format personnalisé ou d'une colonne de type texte. Modèles courants :

Signalez les coefficients et les SE sur des lignes séparées (standard en économie) ou enveloppez les étoiles
donc l'alignement fonctionne toujours (`0.012^{***}` avec un type de colonne dédié).

Soyez cohérent d’un tableau à l’autre : mêmes seuils d’étoiles, même style SE, même nombre
de décimales pour la même métrique. Les évaluateurs comparent le tableau 2 au tableau 3 sur
but.

Une première ébauche visuelle est très bien. Le navigateur
[générateur de table](/tools/table-generator/) peut esquisser la structure ; la finale
le tableau doit toujours passer par « booktabs » et vos notes SE.

## Du logiciel de régression au prêt à photographier

Une boucle typique ressemble à ceci. Gelez le script d'estimation et la graine. Exporter un
Fragment LaTeX ou CSV d'estimations. Déposez-le dans une coque de table avec stable
étiquettes (`tab:main`, `tab:robust`). Écrivez la légende pour qu'un écumeur connaisse le
variable dépendante, échantillon et estimateur sans lire les notes deux fois.
Compilez, puis réparez les boîtes trop pleines en coupant les colonnes ; tourner seulement en dernier
station balnéaire.

Si un tableau est plus long qu'une page, passez à « longtable » (ou panneaux divisés)
avant la semaine limite, pas après que le journal se soit plaint des polices 7 points.

## Citations : l'auteur-année est le dialecte

La plupart des sites d'économie et de science politique attendent une année d'auteur. `biblatex` avec
`style=authoryear` (ou le style de la revue) est plus facile à long terme que de se battre
Fichiers `.bst`. Si le laboratoire utilise toujours « natbib », ce n'est pas un problème ; il suffit de ne pas mélanger
les deux piles dans un seul préambule. Aperçu :
[BibTeX ou biblatex](/learn/bibtex-vs-biblatex/).

Les clés doivent être stables (`author:year:keyword`). Réexportation depuis Zotero sous
de nouvelles clés à mi-projet sont la façon dont `\cite` interrompt la semaine de soumission. Valider
le `.bib` pour les années et revues manquantes :
[Validateur BibTeX](/tools/bibtex-validator/).

## Documents de travail et SSRN

Les versions des documents de travail changent mensuellement. Conservez la date de la page de titre dans une macro :

```latex
\newcommand{\paperdate}{June 2026}
```

Cognez-le lorsque vous réexportez le PDF. L’histoire locale de Git est plus honnête que
`final_final_v7.pdf` sur un lecteur partagé. Valider lorsque la table principale est définie
compile ; marquez ou envoyez un message explicite à la version soumise.

Un éditeur de recherche qui traite le projet comme un véritable dépôt Git (points de contrôle
après compilation, restauration, GitHub privé facultatif) correspond au fonctionnement empirique
déjà les versions du code. Le papier et les scripts d'estimation ne devraient pas vivre
sous différentes habitudes de sauvegarde.

## Identification et éthique des tables (version courte)

LaTeX ne peut pas corriger une conception faible, mais il peut rendre lisible une conception forte.
Indiquez l’estimateur et l’échantillon dans la légende. Ne cachez pas le fait que
la colonne (3) laisse tomber la moitié de l'échantillon dans une note de bas de page que personne ne lit. Si tu montres
tables de robustesse, conservez le même ordre des variables dépendantes que la table principale afin
les lecteurs peuvent numériser.

## Liste de contrôle préalable à la soumission

Les choses qui mordent les gens tardivement :

- Tables à trois règles ; pas de règles verticales.
- Alignement décimal ; étoiles cohérentes et notes SE.
- La légende indique le résultat, l'échantillon, l'estimateur.
- Etiquettes stables ; le texte cite `\ref{tab:...}`.
- Le style de la bibliographie correspond au lieu ; `.bib` validé.
- La date du document de travail et le commit Git correspondent à ce que vous avez téléchargé.

## Packages de réplication

De plus en plus de revues veulent du code et des données. Conservez les scripts d'exportation de tableaux à côté du papier
repo (ou lié avec un hachage de validation). Lorsqu'un coefficient change parce que le
le script de nettoyage a été modifié, régénérez le fragment LaTeX et validez à nouveau les deux. Un
un tableau qui ne peut pas être reproduit est un handicap même s'il semble propre.

## Beamer pour séminaires

Réutilisez les mêmes fragments « booktabs » dans les diapositives lorsque vous le pouvez, ou exportez au format PDF
récoltes des tables. Reconstruire les nombres à la main dans un diaporama, c'est comment
les diapositives du séminaire ne sont pas d’accord avec le document.

Préparez les tableaux correctement et la stratégie d’identification sera entendue équitablement. Obtenir
ils se trompent et vous passez un tour à discuter du formatage.