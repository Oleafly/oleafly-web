---

title: "Thèses de physique : équations, unités et santé mentale multi-fichiers"
description: "Notation, siunitx, projets multi-chapitres, pièges de journal à deux colonnes et habitudes de compilation hors ligne pour les étudiants en physique et en astronomie."
date: 2026-06-20
tags: [physics, thesis, math]
---

Les manuscrits de physique contiennent plus de mathématiques par page que la plupart des domaines. C'est bien
jusqu'à ce qu'un chapitre à moitié terminé interrompe toute la compilation car une étiquette a bougé,
ou jusqu'à ce que chaque coauteur invente une convention différente pour les vecteurs gras.

Il s'agit d'une configuration pratique pour les chapitres MSc/PhD, les notes de collaboration et les journaux.
les soumissions qui veulent toujours deux colonnes.

## Multi-fichiers depuis le début

Même une courte thèse bénéficie d'un fichier racine et d'un chapitre comprend :

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Utilisez `\includeonly{chapters/methods}` pendant que vous rédigez afin de ne pas reconstruire
trois chapitres pour résoudre une équation. Détails :
[un fichier racine, plusieurs chapitres](/learn/split-chapter-files/).

Conservez les chiffres sous « figures/ch2/ » et nommez les équations avec des étiquettes adaptées aux chapitres
(`eq:ch2-hamiltonian`) donc les fusions n'entrent pas en collision.

## Les unités ne sont pas du texte

Écrivez `$v = 3.0\,\mathrm{m\,s^{-1}}$` à la main si vous le devez, ou chargez `siunitx`
et utilisez `\qty{3.0}{m.s^{-1}}`. Les journaux diffèrent par l'espacement et les espaces fins ; choisir
un chemin de paquet et respectez-le. Les styles mixtes ressemblent à deux auteurs qui n'ont jamais
rencontré.

Pour les tableaux de valeurs, les types de colonnes `siunitx` alignent les décimales et conservent l'unité
en-têtes cohérents. Ne mélangez pas `m/s` et `ms^{-1}` dans le même papier sans un
raison indiquée dans les méthodes.

## Dirac, vecteurs et conventions grasses

Les groupes quantiques et de matière condensée nécessitent souvent la notation Dirac. Des forfaits comme
`physique` ou macros dédiées pour `\ket`, `\bra`, `\braket` battent ad hoc
combinaisons d'angles. Les groupes de mécanique classique discutent entre gras et flèche
vecteurs. Documenter la convention dans le préambule et refuser les exceptions ponctuelles
milieu de chapitre.

Voir [Notation Dirac](/learn/physics-braket/) et [bold math](/learn/bold-math/).

Définissez les opérateurs une fois (`\DeclareMathOperator`) afin que les opérateurs différentiels et
les fonctions nommées ne dérivent pas dans la police.

## Numérotation et références croisées

Les équations numériques que vous citerez ; laissez le reste sans numéro. Une page de
`(1)(2)(3)...` est plus difficile à lire qu'un court récit avec deux lignes balisées.
Utilisez `\eqref` pour les équations et les étiquettes stables. Vérification des références à l’échelle du projet
récupère une étiquette supprimée avant le conseiller.

Les théorèmes et les lemmes (si vous les utilisez) doivent partager un schéma de numérotation clair avec
le reste du modèle du département. Voir aussi
[théorèmes et preuves](/learn/theorems-proofs/).

## Pièges de journal à deux colonnes

APS, IOP et les classes similaires modifient le comportement du flotteur. Un chiffre qui avait l'air bien
dans « article » peut refuser de s'asseoir à côté du paragraphe qui le cite. Compiler
contre la vraie classe tôt, pas le week-end précédant la soumission.

Valeurs par défaut utiles :

- largeur de la figure d'environ `0,45\textwidth` ou `\columnwidth` en deux colonnes
- chiffres larges comme `figure*` (souvent en haut de page uniquement)
- dérivations longues en `multline` / `split`, ou déplacées vers une annexe

Ne réduisez pas la police de l’équation jusqu’à ce qu’elle devienne illisible. Les évaluateurs le remarquent.

## Chiffres : tracés et schémas

Exportez les tracés au format PDF depuis matplotlib/gnuplot/Root lorsque vous le pouvez. Les PNG raster sont
pour les photographies et les images du détecteur, à suffisamment de dpi. Les schémas peuvent être TikZ ou
art vectoriel externe; conserver la source dans le dépôt. Recadrer les espaces avant
`\includegraphics`.

## Hors ligne lorsque le réseau du laboratoire s'éteint

Les lignes de lumière et les salles blanches ne sont pas connues pour leur Wi-Fi stable.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) expédie le
compilateurs et conserve SyncTeX, l'espace de travail PDF et l'aperçu mathématique local. Chaque
le projet est un vrai Git avec des points de contrôle automatiques, donc une mauvaise modification d'équation en est une
restaurer. Le PDF se construit toujours lorsqu'un éditeur de navigateur ne se charge pas.

Vous pouvez assembler une pile hors ligne similaire avec TeX Live, une visionneuse PDF et Git en
main. Quoi qu’il en soit, la thèse ne doit pas dépendre d’un portail captif pour recompiler
chapitre trois.

##Collaboration

Posséder les chapitres par auteur lorsque cela est possible. Partagez une feuille de notation. Exécuter le document complet
se compile chaque semaine, donc les références entre chapitres échouent tôt. Télécommande Git privée pour
résultats non publiés; public uniquement lorsque la politique de collaboration le permet.

## Annexes et matériel supplémentaire

Les dérivations longues et les parcelles supplémentaires appartiennent à une annexe ou à un supplément séparé
PDF lorsque le journal est à deux colonnes et limité en pages. Référence croisée explicite
("voir Annexe B") avec de vraies étiquettes. Ne présumez pas que l’arbitre ouvrira un zip
de figures libres sans légendes.

## Quand le conseiller édite sur papier

Appliquez un balisage à la source TeX le même jour si vous le pouvez. Les piles de papier deviennent périmées.
Si deux conseillers notent des notations contradictoires, mettez à jour la feuille de préambule et envoyez un
PDF de notation d'une page afin que l'argument ne soit pas relancé à chaque brouillon.

## Pré-soumission

Feuille de notation complète, vecteurs et bras/kets cohérents, unités via un seul système
(« siunitx » ou un style manuel convenu). Les chapitres doivent inclure proprement avec
Résolution de `\ref`/`\eqref`. Compilez le vrai journal ou le cours de thèse sans police
des surprises. Les chiffres répondent aux règles de DPI et de couleur ; les légendes sont autonomes. Archiver
source et PDF avec un hachage de validation pour la version soumise.

L'écriture de physique est déjà assez difficile. La chaîne d'outils devrait rester ennuyeuse.