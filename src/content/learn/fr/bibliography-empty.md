---

title: "Bibliographie vide"
description: "Chemin, backend, citation manquante, printbibliography vs bibliography."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Bibliographie vide

## Le symptôme

Votre document est compilé sans erreur fatale, mais la section Références est entièrement manquante ou le titre apparaît sans rien en dessous. Souvent, chaque `\cite` dans le texte s'affiche en même temps sous la forme d'un point d'interrogation en gras. Rien ne s'est écrasé, il n'y a donc pas d'erreur évidente à rechercher, ce qui rend celle-ci frustrante.

## Pourquoi ça arrive

La bibliographie n'est pas produite uniquement par LaTeX. LaTeX écrit d'abord la liste des clés citées dans un fichier auxiliaire. Un programme backend distinct (`bibtex` ou `biber`) lit votre base de données `.bib` et formate les entrées correspondantes. Enfin, LaTeX lit ce résultat formaté lors du prochain passage. Une bibliographie vide signifie que ce pipeline s'est cassé quelque part : le backend n'a jamais été exécuté, il a été exécuté mais n'a pas pu trouver la base de données, il a trouvé la base de données mais aucune clé n'a été demandée, ou le document demande le résultat avec la mauvaise commande.

## Examinez les causes dans l'ordre

Tout d’abord, confirmez que le fichier de base de données existe là où le document l’indique. `\bibliography{refs}` et `\addbibresource{refs.bib}` recherchent tous deux `refs.bib` par rapport au fichier principal, donc un fichier qui vit dans un sous-dossier `bib/` doit être référencé comme `bib/refs` ou `bib/refs.bib`. Un mauvais chemin échoue tranquillement.

Deuxièmement, assurez-vous que le backend fonctionne réellement. Une seule compilation n’est jamais suffisante ; le cycle complet est LaTeX, puis « bibtex » ou « biber », puis LaTeX deux fois de plus. Oleafly exécute ce cycle automatiquement, mais une construction manuelle ou une chaîne d'outils d'éditeur mal configurée peut sauter l'étape intermédiaire, et le résultat est précisément une liste de références vide.

Troisièmement, vérifiez qu'au moins une commande `\cite` est présente. Le backend ne formate que les entrées demandées par le document, de sorte qu'un brouillon sans citation obtient encore une liste vide de par sa conception. Au début de la rédaction, vous pouvez tout forcer avec `\nocite{*}`, qui demande chaque entrée de la base de données sans rien imprimer dans le texte.

Quatrièmement, faites correspondre la commande au système. Les documents BibTeX classiques se terminent par `\bibliographystyle{...}` et `\bibliography{refs}`. Les documents biblatex chargent la base de données dans le préambule avec `\addbibresource{refs.bib}` et l'impriment avec `\printbibliography`. Mélanger les deux, par exemple charger biblatex mais toujours appeler `\bibliography`, produit exactement cet échec. Il en va de même pour l'exécution du mauvais backend : biblatex a besoin de "biber", et l'alimenter en "bibtex" classique ne donne rien.

## Lire le propre journal du backend

Le backend écrit ses plaintes dans un fichier « .blg » à côté de votre document, et c'est là que les entrées mal formées, les clés en double et les messages « Je n'ai pas pu ouvrir le fichier de base de données » apparaissent. Si les étapes ci-dessus semblent correctes mais que la liste est toujours vide, le journal `.blg` nomme presque toujours le véritable coupable. Pour les points d'interrogation qui persistent après l'apparition de la bibliographie elle-même, voir [Suppression des marques de citation mystère](/learn/citation-question-mark/).