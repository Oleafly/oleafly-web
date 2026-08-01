---

title: "Articles de chimie en LaTeX : formules, schémas et unités SI"
description: "Réactions avec mhchem, structures, tables expérimentales, unités SI, bibliographies et brouillons privés pour les étudiants en chimie et génie chimique."
date: 2026-06-22
tags: [chemistry, research]
---

Les chimistes apparaissent généralement dans LaTeX pour l'une des deux raisons suivantes : le journal insiste :
ou un collaborateur travaille déjà de cette façon. Quoi qu'il en soit, les points douloureux semblent
familier : schémas de réaction, étiquettes isotopiques, tableaux de conditions et un
bibliographie remplie de revues et de brevets.

Ce guide couvre les rapports de premier cycle jusqu'aux premières soumissions de revues. Ce sera
ne remplace pas ChemDraw pour les produits naturels complexes. Il conservera le manuscrit
et la section expérimentale de la lutte contre le compilateur.

## Réactions avec mhchem

`mhchem` est la réponse habituelle pour les formules et les réactions :

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Épinglez la version 4 pour que la syntaxe ne dérive pas entre les coauteurs ou entre Overleaf
et une installation TeX locale. Procédure pas à pas plus longue :
[formules chimiques](/learn/chemistry-notation/).

Les schémas en plusieurs étapes avec des réactifs au-dessus et en dessous de la flèche nécessitent plus de
en ligne `\ce`. mhchem gère les formules ; la mise en page veut souvent un schéma de journal
environnement ou une figure extérieure. Ne faites pas une synthèse totale en vingt étapes
dans une série de lignes de chimie en ligne.

## Structures : chemfig ou dessins externes

`chemfig` dessine des structures simples en TeX pur et conserve tout
vecteur-local. Les produits naturels complexes sont presque toujours meilleurs comme ChemDraw,
Marvin, ou similaire, exporté au format PDF, puis `\includegraphics`. Préférer le PDF vectoriel
sur une capture d'écran PNG afin que les lignes de liaison restent nettes en version imprimée et sur deux colonnes
mise en page.

Nommez les fichiers par ID composé (`cmpd-12.pdf`). Conserver la source ChemDraw modifiable
dans les archives du laboratoire même si git ne contient que le PDF qui va dans le papier.

## Sections expérimentales et longs tableaux

Les tableaux de conditions (température, solvant, rendement, charge du catalyseur) fonctionnent bien
avec `booktabs` et souvent `siunitx` pour les colonnes numériques :

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Si un tableau est plus long qu'une page, passez à « longtable » avant la date limite
semaine, pas après que le journal se soit plaint des polices 7 points. La légende devrait dire
ce que signifie « rendement » (isolé, RMN, GC) pour que les lecteurs ne devinent pas.

## Unités et extraits de spectroscopie

Choisissez un style d'unité et respectez-le : `siunitx`, ou manuel `\mathrm` si le groupe
déjà d'accord là-dessus. Les extraits RMN et HRMS dans les sections expérimentales sont
souvent du texte brut avec un espacement soigné. N'inventez pas un langage macro fragile
au milieu du document, sauf si le laboratoire en partage déjà un.

Rapportez les chiffres significatifs comme le fait le cahier. LaTeX imprimera avec plaisir
fausse précision si vous le tapez.

## Schémas vs chiffres

De nombreuses revues de chimie distinguent les schémas (réactions) des figures (tracés,
ORTEP, spectres). Utilisez les environnements fournis par la classe journal (« scheme »,
`figure`) donc la numérotation correspond à la production. Référence croisée avec `\ref` et stable
étiquettes (`sch:reduction`, `fig:ortep-1`).

## Sécurité du projet

Des itinéraires inédits et des partenaires industriels transforment les éditeurs uniquement cloud en un
une question de politique, pas seulement une question de commodité. Conserver `.tex` et les chiffres
car les fichiers ordinaires sur disque avec Git sont ennuyeux d'une manière utile.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) est un local
éditeur de recherche : compilateurs groupés, vérifications de références et de citations à l'échelle du projet, hors ligne
l'orthographe et la grammaire en prose uniquement (donc les clés `\ce` et citer ne sont pas marquées comme
"fautes de frappe"), de vrais points de contrôle Git, une IA facultative qui ne modifie que par approbation
différences. Aucun compte. Le brouillon n’a pas besoin d’un éditeur tiers pour exister.
Le réseau est destiné aux packages, à la recherche de citations ou à l'IA si vous les activez.

## Citer la bonne littérature primaire

Les bibliographies de chimie s'appuient fortement sur les revues et les brevets. Exporter depuis Zotero
ou EndNote dans un `.bib` avec des clés stables, puis validez les champs manquants avant
soumission : [validateur BibTeX](/tools/bibtex-validator/). Bibliographies vides
sont presque toujours une erreur de chemin ou de back-end, et non des citations manquantes.

Les styles de journaux diffèrent (ACS, RSC, Springer). Utilisez le style de bibliographie le
le modèle est livré avec. Ne collez pas le chiffre et l'année-auteur ensemble en un seul.
préambule.

##Collaboration

Possédez des sections par personne lorsque vous le pouvez. Une personne possède le « .bib ». D'accord sur
Version mhchem et format d'exportation de structure à l'avance. Lorsque plusieurs expérimentaux
les sections grandissent en parallèle, compilez le PDF complet chaque semaine pour assurer l'intégration
les surprises arrivent tôt.

## Liste de contrôle préalable à la soumission

Vaut le détour :

- version mhchem épinglée ; les formules se compilent sans avertissements
  ignorant.
- Les structures sont vectorielles lorsque cela est possible ; les identifiants composés correspondent à travers le texte, les schémas,
  et SI.
- Les tableaux utilisent un style à trois règles ; unités cohérentes ; rendements définis dans la légende
  ou des notes.
- La numérotation des schémas/figures correspond à la classe du journal.
- `.bib` validé ; le style correspond au modèle.
- Les itinéraires sensibles restent dans un dossier local avec un contrôle d'accès qui correspond au laboratoire
  politique.

## Listes de contrôle SI et journaux

De nombreuses revues de chimie publient des listes de contrôle des auteurs (résolution graphique, table des matières).
taille graphique, caractérisation du composé). Parcourez ce PDF avant de dessiner
schémas. Un mauvais rapport hauteur/largeur graphique de la table des matières est une raison stupide pour un administrateur
rejet.

## Informations complémentaires

SI a souvent son propre modèle ou ses propres règles de titre. Conservez les sources SI dans le même
repo comme document principal avec des noms de fichiers clairs. Lorsque le journal exige un
caractérisation, vérifiez que chaque nombre composé dans le texte principal est réellement
apparaît dans le SI.

Le formatage de la chimie est difficile car les objets sont denses. Obtenez les réactions
et les tableaux sont corrects et la section expérimentale se lit comme un travail minutieux, pas un
coller à partir d'un PDF de bloc-notes.