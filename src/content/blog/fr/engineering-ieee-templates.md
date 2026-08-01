---

title: "Étudiants en ingénierie : modèles IEEE et ACM sans le week-end de douleur"
description: "Commencez à partir du fichier de classe réel, survivez aux flottants et aux équations à deux colonnes, obtenez les bonnes références et versionnez le document avant qu'il ne soit prêt à être photographié."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

Les modèles IEEE et ACM ne constituent pas une décoration facultative. Ils sont la soumission
formater. À partir d'un zip aléatoire que quelqu'un a ré-uploadé il y a trois ans, voilà comment
vous passez la nuit avant la date limite à renommer les polices et à courir après
« séquence de contrôle non définie » dans une classe que vous n'avez jamais eu l'intention de modifier.

Ceci est destiné aux projets de cours, aux articles de conception senior et à la première conférence.
soumissions.

## Commencer par la classe officielle

Téléchargez le cours et l'exemple de la société ou du site de la conférence pour
*cette année*. Mettez le `.cls`, n'importe quel `.bst` et l'exemple `.tex` dans votre projet
racine. Compilez une fois avant d'écrire une seule phrase originale afin de connaître le
l'environnement fonctionne.

La [galerie de modèles](/templates/) d'Oleafly et les packs d'installation d'applications gratuits qui
suivez les sites courants (IEEE, ACM et amis), puis compilez avec le package
moteur et détectez les références et les citations cassées dans l'éditeur de projet avant
prêt pour l'appareil photo. Vérifiez toujours par rapport à l'appel à communications de cette année : colonne
nombre, limite de pages et changement de style de bibliographie.

Si la conférence propose une classe modifiée, utilisez la leur, pas un IEEEtran générique
de mémoire.

## Règles flottantes à deux colonnes

En mode deux colonnes, les chiffres larges utilisent `figure*` et n'apparaissent souvent qu'au début.
haut d'une page. Placez le flotteur près de la première référence et définissez les largeurs sur
`\columnwidth` ou `\textwidth` volontairement. Les sous-figures côte à côte doivent être prudentes
largeurs ou ils débordent dans la marge.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Si un flotteur s'enfuit à trois pages, réduisez-le ou divisez les panneaux avant de vous battre.
`[H]` pendant une heure : [placement flottant](/learn/figure-wrong-position/).

## Équations dans des colonnes étroites

Les dérivations longues s'interrompent dans `\columnwidth`. Utilisez `multline` ou `split`, ou déplacez
la dérivation vers une annexe. Ne réduisez pas la police de l'équation jusqu'à ce que la ligne
est illisible ; les critiques le remarquent. Numérotez uniquement les équations que vous citez réellement.

Les algorithmes appartiennent à des environnements « algorithmiques » / « algorithmiques » dimensionnés pour le
colonne, pas des captures d'écran d'un IDE.

## Références

Les styles numériques IEEE et les styles ACM sont en désaccord sur les détails. Utiliser la bibliographie
style avec lequel le modèle est livré. N'inventez pas un hybride auteur-année et
numéros de parenthèse.

Validez le « .bib » pour les champs manquants avant que l'appareil photo soit prêt :
[Validateur BibTeX](/tools/bibtex-validator/). Les exportations universitaires sont compliquées ; nettoyer
clés (`author:year:keyword`) et corrige les titres arrivés en MAJUSCULES.

Citer les ensembles de données et les logiciels lorsque le lieu s'y attend. Un DOI manquant est plus facile
à corriger maintenant que dans la fenêtre "mettre à jour pour la caméra" du portail.

## Limites de pages sans crimes

Les limites de pages sont réelles. N'écrasez pas les marges en dessous du modèle, définissez
`\scriptsize` pour toute la section des résultats, ou masquez le texte à l'intérieur de chiffres énormes.
Couper le contenu. Déplacer les preuves et les tracés supplémentaires vers un supplément ou un arXiv étendu
version si l'appel le permet. Gardez la soumission lisible. Liste de contrôle plus longue :
[limites de pages sans crimes](/learn/page-limits-without-crimes/).

## Le contrôle de version fait désormais partie du rapport de laboratoire

Les articles de conception et de conférence senior bénéficient tous deux d'engagements après chaque
compilation réussie. Un éditeur de recherche comme
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) conserve le vrai Git
à côté du PDF, de SyncTeX et des diagnostics en direct afin que vous n'envoyiez pas de zip
fichiers nommés `submission_really_final.zip`. Les télécommandes privées restent inédites
travailler hors du GitHub public jusqu'à ce que la politique le permette.

Marquez ou envoyez un message au commit exact que vous avez téléchargé sur le portail.

## Flux de travail d'équipe

Propres sections par étudiant. Une personne possède le « .bib » et le fichier de classe. Fusionner
via des pull request si le groupe est suffisamment grand. Compilez le PDF complet sur un
horaire pour que l’intégration ne se fasse pas seulement la veille.

Si un coéquipier édite uniquement Word, exportez-le et conservez TeX comme source :
[coauteurs qui ne parlent que Word](/learn/collaborator-uses-word/).

## Semaine prête à photographier

Les instructions prêtes à photographier diffèrent souvent du format de révision, alors téléchargez à nouveau
eux. Mettez à jour les formulaires de blocage d'auteur, de financement et de droits d'auteur IEEE/ACM au fur et à mesure.
requis. Recompiler avec les options de classe finales (souvent différentes de
revue). Vérifiez chaque chiffre pour le dpi et les polices ; intégrer des polices dans le PDF si le
le portail l'exige. Téléchargez le PDF et toute source compressée demandée par le portail, puis
archiver les deux.

## Blocage des auteurs et affiliations

Les blocs auteurs IEEE/ACM sont capricieux : notes de contribution égales, multiples
affiliations, grâce aux organismes de financement. Copiez l'auteur du fichier d'exemple
balisez et remplacez le texte avec soin. Inventer votre propre pile `\thanks` est un
source courante de cases sous-remplies et de virgules manquantes dans le PDF.

## Examen aveugle

Si l'appel est en double aveugle, supprimez les noms, le financement qui identifie le laboratoire et
des auto-citations qui disent « dans nos travaux précédents ». Réactivez-les pour être prêts pour la caméra.
Conservez une option de classe « aveugle » ou un petit fichier à bascule afin de ne pas modifier manuellement
identité en six lieux.

## Conclusion

Partez de la classe officielle, respectez la disposition sur deux colonnes et faites correspondre les
style de bibliographie avec lequel le modèle est livré. Version tout. Le
le contenu technique est déjà assez difficile sans un modèle contrefait de 2019.