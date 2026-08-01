---

title: "Recherchez des diagrammes dans TikZ lorsque PowerPoint ne suffit pas"
description: "Quand dessiner des pipelines, des automates et des diagrammes commutatifs dans TeX afin qu'ils soient recolorés pour le journal, restent nets à l'impression et soient actifs en tant que source dans le dépôt."
date: 2026-07-08
tags: [tikz, figures, research]
---

Les diagrammes PowerPoint deviennent des rectangles flous dans le PDF. Les diagrammes TikZ restent
vecteur, faites correspondre les polices du document et recolorez lorsqu'un journal demande des niveaux de gris
ou un accent différent. Le commerce est une première heure plus raide. Après ça, petit
les modifications sont des différences de texte, pas une archéologie de capture d'écran.

Vous n'avez pas besoin de TikZ pour chaque chiffre. Photographies, cadres de microscope bruts et
les tracés denses de matplotlib restent généralement tels que PDF/PNG inclus. Utilisez TikZ lorsque le
la figure est la structure : pipelines, automates, boîtes d'architecture, diagrammes de catégories,
des arbres simples.

## Commencez petit

Un pipeline à trois nœuds enseigne le modèle :

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Nommez les nœuds. Connectez-vous avec `--` ou des ancres explicites (`(a.east)`). Préférer un parent
placement (`right=of a`) sur des coordonnées magiques dont vous ne vous souviendrez jamais.
Leçons : [première photo TikZ](/learn/tikz-intro/),
[nœuds et flèches](/learn/tikz-nodes-arrows/).

## Les styles battent les options uniques

Définissez les styles une fois pour que chaque case corresponde :

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Lorsque le journal demande des lignes plus épaisses ou monochromes, changez le style, pas
vingt nœuds. Colorez avec des couleurs nommées ou une petite macro de palette pour pouvoir échanger
accents sans rechercher les codes hexadécimaux.

## CS et ingénierie : des organigrammes qui s'alignent

Utilisez la bibliothèque `positioning` (`below=of`, `right=of`) pour que les boîtes partagent une grille.
Les coordonnées absolues manuelles sont la façon dont les diagrammes pourrissent lorsque vous insérez un nœud. Garder
texte court ; mettez les détails dans la légende. Guide :
[organigrammes alignés](/learn/tikz-flowchart/).

Pour les esquisses de réseaux neuronaux ou de systèmes, séparez les « blocs » des « annotations ».
Les annotations peuvent être des nœuds de police plus petits sans bordures afin que le chemin principal reste
lisible sur deux colonnes.

## Mathématiques et théorie : diagrammes commutatifs

`tikz-cd` est le chemin habituel pour les diagrammes de style catégorie sans placer chaque
nœud à la main :

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Guide : [diagrammes commutatifs](/learn/commutative-diagrams/). Pour les arbres et
des diagrammes de preuve théorique, des bibliothèques spécialisées existent ; commencez simplement avant de
importer la moitié du CTAN.

## Externaliser et compiler le temps

Un article contenant vingt chiffres TikZ ralentira les compilations complètes. Possibilités :

- Mettez chaque figure dans son propre fichier et `\input`.
- Utilisez la bibliothèque « externe » pour que les images deviennent des PDF mis en cache.
- Brouillon avec `\tikzexternaldisable` lorsque vous ne vous souciez que de la prose.

Exporter pour les diapositives : compiler un document TikZ « autonome » au format PDF, convertir en PNG
seulement si l'outil de présentation ne peut pas prendre de PDF. Gardez le `.tex` comme source de vérité.

## Outils Canvas vs TikZ écrit à la main

Certains éditeurs de recherche incluent un canevas de diagramme qui émet des TikZ modifiables (pour
exemple Diagram Composer d'Oleafly : dessiner, modifier le code, compiler la figure,
insérer). C'est utile pour la géométrie que vous pouvez faire glisser. TikZ écrit à la main gagne toujours
pour les diagrammes commutatifs serrés et les grilles très régulières. Quoi qu'il en soit, engagez le
Source TikZ, pas seulement un PNG.

## Conserver les diagrammes dans le dépôt

Conservez les sources des figures à côté du papier :

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Lorsque le journal souhaite des lignes plus épaisses, vous modifiez la source et recompilez. Quand un
co-auteur "améliore" une capture d'écran dans un outil de diapositive, vous avez perdu le seul
version modifiable.

## Modes de défaillance courants

Le débordement en deux colonnes est courant. Mettez à l'échelle avec `\resizebox` en dernier recours ;
refonte pour la largeur en premier. L'inadéquation des polices en est une autre : préférez le document par défaut
polices sur les familles de polices codées en dur dans TikZ, sauf si le journal l'exige.
Vérifiez le contraste pour les discussions, car le gris invisible sur les projecteurs est un classique
piège. Et les flèches sans étiquette forcent la légende à expliquer chaque bord, ce qui signifie
le schéma est incomplet.

## Calques et superpositions

Pour les exposés et les articles partageant une figure, construisez le diagramme en couches : base
les cases d'abord, puis les flèches, puis les étiquettes. Commenter les calques lors du débogage
placement. Les superpositions de vidéoprojecteurs (`\pause`, `\onslide`) peuvent révéler un pipeline étape par étape
étape à partir de la même source TikZ si vous gardez les noms de nœuds stables.

## Accessibilité et impression

Ne codez pas le sens uniquement en rouge ou en vert. Utilisez également une forme ou un style de ligne.
Vérifiez la figure en niveaux de gris. Les légendes devraient toujours avoir un sens si le lecteur est
daltonien ou impression sur une imprimante de laboratoire noir et blanc.

## Un workflow qui fonctionne

Dessinez sur papier pendant trente secondes, puis construisez le plus petit TikZ qui montre le
réclamation. Définissez les styles une fois et réutilisez-les. Compilez la figure seule jusqu'à ce qu'elle
semble correct, déposez-le dans le papier et laissez la légende porter l'affirmation. S'engager
le `.tex`.

PowerPoint convient parfaitement à une réunion de laboratoire ponctuelle. Pour le PDF, un journal s'imprimera,
la source vectorielle que vous pouvez recolorer bat une autre série de "pouvez-vous envoyer le fichier modifiable
dossier ?"