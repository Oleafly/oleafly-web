---

title: "Déposez un chiffre"
description: "Graphicx, largeur, chemins, PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Déposez une figure

LaTeX n'a ​​pas de support d'image intégré. Tout cela vient du package `graphicx`, qui fournit la commande `\includegraphics`, et par convention l'image est enveloppée dans un environnement `figure` afin qu'elle puisse porter une légende et un numéro. Voici le modèle que vous utiliserez des centaines de fois :

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Ce que fait chaque ligne

La ligne `\usepackage{graphicx}` se trouve dans votre préambule, avant `\begin{document}`, et ne doit apparaître qu'une seule fois, quel que soit le nombre d'images que vous incluez.

L'environnement « figure » ​​rend l'image flottante, ce qui signifie que LaTeX choisit l'endroit où elle atterrit plutôt que de la clouer à cet endroit précis du texte. Les lettres `[htbp]` sont vos préférences de placement : `h` signifie ici où le code apparaît, `t` signifie le haut d'une page, `b` signifie le bas d'une page et `p` signifie une page séparée de flottants. LaTeX les essaie dans cet ordre et prend le premier qui produit une page décente. Si votre silhouette dérive dans un endroit surprenant, c'est un comportement normal du flotteur, et [où les flotteurs atterrissent réellement](/learn/position-figures/) explique comment négocier avec elle.

`\centering` centre l'image horizontalement dans le bloc de texte. `width=0.8\textwidth` redimensionne l'image à 80 % de la largeur du texte tout en préservant son rapport hauteur/largeur, ce qui est presque toujours mieux que de spécifier une taille absolue en centimètres, car elle s'adapte si les marges du document changent. Le chemin du fichier est relatif à la racine du projet, donc « figures/pipeline.pdf » signifie un dossier « figures » à côté de votre fichier principal « .tex ». Enfin, `\caption` imprime la légende numérotée et `\label` enregistre le numéro afin que `\ref{fig:pipeline}` puisse le citer à partir du texte. L'étiquette doit venir après la légende, pour les raisons couvertes dans [légendes et étiquettes](/learn/captions-labels/).

## Quel format de fichier utiliser

Préférez le PDF pour tout ce qui est vectoriel, c'est-à-dire les tracés, les diagrammes et les organigrammes, car les graphiques vectoriels restent nets quel que soit le zoom et la taille d'impression. Utilisez PNG pour les captures d’écran et autres images basées sur les pixels. JPG est acceptable pour les photographies, où ses artefacts de compression sont invisibles. Évitez d'intégrer du contenu contenant beaucoup de texte sous forme de captures d'écran, car il est flou à l'impression et ne peut pas être recherché.

Redimensionnez également les grandes photographies avant de les inclure. Une photo de 12 mégapixels affichée sur 8 centimètres de large gonfle le PDF et ralentit chaque compilation, tandis qu'une version réduite à environ 300 dpi à sa taille imprimée semble identique.

## L'erreur à éviter

Ne combattez pas le flotteur dès le premier jour en exigeant « [h] » seul. LaTeX refusera souvent, puis portera la figure et tout ce qui se cache derrière jusqu'à la fin du chapitre. Écrivez « [htbp] », placez le code de la figure près du paragraphe qui y fait référence en premier et laissez les numéros et les références faire le suivi pour vous.