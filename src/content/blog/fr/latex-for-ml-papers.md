---

title: "LaTeX pour les articles d'apprentissage automatique sans le gâchis de notation"
description: "Feuilles de notation, tableaux d'ablation, algorithmes, chiffres issus des cycles de formation et Git à côté du document, du premier brouillon arXiv au prêt à photographier."
date: 2026-06-18
tags: [machine-learning, research, math]
---

La plupart des articles de ML échouent de la même manière dans LaTeX : les calculs sont bons à la page trois et
incohérent à la page douze. Une perte est `L` dans une section, `\mathcal{L}` dans
un autre, et les vecteurs gras n'apparaissent que lorsque l'auteur s'en souvient. Réviseurs
remarquez même s’ils ne font aucun commentaire à ce sujet.

Il s'agit d'un guide pratique destiné aux étudiants qui rédigent des documents d'atelier, de conférence
les soumissions et les chapitres de thèse qui partagent l’ADN avec le code de formation.

## Choisissez une feuille de notation le premier jour

Avant d'écrire un travail connexe, écrivez vingt lignes de macros :

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Collez ce bloc dans chaque branche co-auteur. Lorsqu'un modèle invente un nouveau symbole,
ajoutez-le d’abord à la feuille, puis utilisez-le. Le
[Leçon de notation de suivi AI](/learn/ai-follow-notation/) est la même idée avec un
modèle de langage dans la boucle : le modèle doit obéir à la feuille, pas inventer des polices.

L'aperçu mathématique en direct dans un éditeur de recherche vous aide à détecter ce `\mathcal{L}` et
`L` n'est pas le même objet pendant que vous tapez.

## Tableaux qui survivent et sont prêts à être photographiés

Les tableaux d'ablation s'agrandissent jusqu'à tomber de la page. Préférez les « booktabs » sans
règles verticales, « siunitx » pour les décimales alignées et une légende indiquant le
métrique et la division (ImageNet, CIFAR, dans le domaine vs OOD). Si la table s'étend
pages, utilisez `longtable` au début au lieu de réduire la police à 7 pt.

Un constructeur visuel aide pour la première ébauche : le
[générateur de table](/tools/table-generator/) s'exécute dans le navigateur. Le tableau final
doit toujours nommer la métrique dans la légende et définir ± comme std ou se.

Signalez les graines et les plages d'hyperparamètres dans les tableaux en annexe lorsque le lieu le permet.
Les tableaux principaux restent numérisables.

## Algorithmes et listes

Le pseudocode appartient à `algorithm2e` ou `algorithmicx`, pas à un monospace
paragraphe. Les vrais extraits de formation appartiennent à des « listes » ou à « créés » avec un
langue définie pour que les réviseurs puissent parcourir. Gardez le document principal court ; mettre les configurations complètes
en annexe ou un lien repo avec un hachage de validation.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Algorithmes numériques que vous citez. Ne jetez pas cinq pages de PyTorch dans le PDF.

## Chiffres de TensorBoard et matplotlib

Exportez au format PDF ou SVG lorsque vous le pouvez. Les PNG raster à 300 dpi conviennent parfaitement à l'interface utilisateur
captures d'écran, pas pour les tracés linéaires. Recadrez les espaces avant `\includegraphics`. Si un
float s'enfuit vers la section suivante, corrigez la taille et le placement avant de combattre `[H]`
pendant une heure : [placement flottant](/learn/figure-wrong-position/).

Ablations multi-panneaux : créez dans TeX avec « sous-légende », ou composez en externe et
inclure un PDF. Gardez une couleur cohérente pour « le nôtre » sur toutes les figures afin d'éviter les écumeurs.
apprenez la légende une fois.

## Cours de conférence à deux colonnes

Les classes de style NeurIPS, ICML, ICLR et CVPR modifient les marges et les règles flottantes.
Compilez-vous tôt avec la classe officielle. Les limites de pages sont réelles ; ne pas écraser
polices. Déplacez les épreuves et les ablations supplémentaires vers l'annexe ou le PDF supplémentaire lorsque
l'appel le permet.

## Travaux et citations connexes

Utilisez des clés de citation stables et des exportations Scholar propres. Validez le `.bib` :
[Validateur BibTeX](/tools/bibtex-validator/). Citez le code et les ensembles de données que vous
dépendre de. L'année de l'auteur ou le chiffre dépend du lieu ; utilisez le modèle
style, pas un hybride.

## Git à côté du papier

Chaque changement d'architecture doit être un commit que vous pouvez nommer. Traitez le papier et
le code comme le même projet, pas deux habitudes de sauvegarde distinctes.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) conserve le papier
dans un vrai dépôt Git à côté d'un éditeur prenant en charge les projets avec un aperçu mathématique en direct,
références croisées de fichiers, complétion de citations et SyncTeX PDF. Cela correspond à la façon dont le code ML
vit déjà. Associez-le au [aide-mémoire](/learn/cheatsheet/) lorsque vous oubliez
syntaxe sous un délai.

Marquez le commit qui correspond au téléchargement OpenReview ou CMT. Tu le voudras
lors de la réfutation.

## Réfutation et prêt à photographier

Les délais de réfutation sont courts. Conservez une branche ou un dossier pour les « expériences de réfutation »
afin de ne pas polluer la source PDF soumise. Prêt à photographier permet souvent un
page supplémentaire ; utilisez-le pour plus de clarté, pas pour vider chaque exécution échouée.

## Impact et limites plus larges

Même lorsque le lieu nécessite un court paragraphe sur l'impact social ou les limitations,
écrivez-le dans un langage simple. LaTeX ne sauvera pas un vague paragraphe. Mettre du négatif
des résultats que vous pouvez soutenir en annexe si la limite de la page principale est serrée,
et dites que vous l'avez fait dans le texte principal afin que les réviseurs ne supposent pas que vous les avez cachés.

## Avant de télécharger

Vérifiez que la feuille de notation est cohérente dans toutes les sections, les tableaux principaux sont
lisible avec des métriques nommées et ± définies, et des algorithmes et des chiffres sont cités
dans l'ordre. Confirmez que la classe officielle compile dans la limite de pages sans police
crimes, le « .bib » est propre avec le code et les données citées, et un hachage de validation est
enregistré pour le PDF téléchargé.

Les expériences ML sont déjà assez bruyantes. Gardez la notation et les tableaux silencieux.