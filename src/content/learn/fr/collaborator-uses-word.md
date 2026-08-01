---

title: "Des coauteurs qui ne parlent que Word"
description: "Gardez .tex comme source de vérité lors de l'échange de PDF ou de DOCX contre des commentaires."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Coauteurs qui ne parlent que Word

Les collaborations à outils mixtes sont courantes : vous rédigez l'article dans LaTeX et un co-auteur, un conseiller ou un collaborateur clinique travaille uniquement dans Microsoft Word. Rien ne se convertit parfaitement entre les deux formats. Convenez dès le début quel fichier est le vrai papier, puis établissez une routine pour déplacer les commentaires d'un côté à l'autre sans perdre de travail.

## Une source de vérité

Décidez tôt que les fichiers « .tex » sont canoniques et que tout le reste est une copie dérivée pour révision. Dès l'instant où deux "versions actuelles" existent dans deux formats, les modifications de quelqu'un sont perdues, et rapprocher visuellement un fichier Word avec un fichier LaTeX est un travail misérable. En vertu de cet accord, votre travail consiste à composer et à intégrer. Le travail de votre co-auteur consiste en du contenu et des commentaires, livrés dans l'outil qu'il préfère.

## Choisissez l'export selon le type de feedback

Pour la lecture et les commentaires de haut niveau, envoyez le PDF compilé. Chaque utilisateur de Word peut ouvrir un PDF, et les outils d'annotation de n'importe quel lecteur PDF couvrent les notes de marge et les surlignages. L’application manuelle de ces commentaires vous permet de garder le contrôle total de la source.

Lorsque le co-auteur doit proposer des réécritures au niveau de la phrase avec suivi des modifications, exportez un DOCX. Pandoc convertit assez bien LaTeX en Word à des fins de révision, et Oleafly intègre l'exportation DOCX. Attendez-vous à ce que la conversion soit approximative : les équations, les références croisées et le placement des figures se dégradent, et vous devriez le dire dès le départ afin que personne ne signale des problèmes de mise en page dans une copie jetable.

## La session de fusion

Les commentaires dans un `.docx` doivent revenir manuellement dans le `.tex`. Traitez cela comme une tâche planifiée plutôt que comme un flux continu : collectez les modifications suivies par le co-auteur, ouvrez le fichier Word et la source LaTeX côte à côte, et appliquez les modifications acceptées une par une, en vous engageant dans Git au fur et à mesure afin que chaque série de commentaires soit une validation. Une règle permet à cela de fonctionner : chaque cycle de révision commence à partir d'une nouvelle exportation de la source actuelle. Ne laissez jamais le même fichier Word vivre sur plusieurs tours, car il divise silencieusement le papier.

## Quand le brouillon démarre dans Word

Parfois, le flux s'inverse : le co-auteur rédige le premier brouillon dans Word et vous prenez en charge la composition. Convertissez-le une fois, tôt. Oleafly importe « .docx » dans un projet LaTeX, et pandoc fait de même sur la ligne de commande. À partir de là, le « .tex » est canonique et la routine ci-dessus s'applique. Pour connaître l'épine dorsale du contrôle de version qui rend tout cela récupérable, voir [Put the paper on GitHub](/learn/sync-with-github/).