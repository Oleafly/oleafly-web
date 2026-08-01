---

title: "Git pour les articles de recherche : ce qui fonctionne réellement avec les coauteurs"
description: "Ignorez les règles, la propriété des chapitres, les messages de validation, les télécommandes privées et la manière dont un espace de travail de recherche avec de vrais Git, des forks et des points de contrôle IA permet de récupérer les documents sans faire de Git un deuxième travail."
date: 2026-07-10
tags: [git, collaboration, workflow, local-first]
---

Les chercheurs utilisent déjà Git pour le code. Les articles ressemblent beaucoup à du code : texte brut,
inclut, construisez des fichiers indésirables. Mettre un manuscrit dans un repo est moins étrange que ça
sonne une fois que vous l'avez essayé une fois.

## Ignorez les déchets

Un `.gitignore` judicieux pour LaTeX :

```text
*.aux
*.log
*.out
*.toc
*.synctex.gz
*.bbl
*.blg
*.fdb_latexmk
*.fls
```

Validez `.tex`, `.bib`, les chiffres que vous ne pouvez pas régénérer, et le fichier de classe si
l'université l'exige. Évitez de valider chaque PDF à moins que la revue ne le souhaite
un binaire dans l'archive.

Si votre éditeur démarre Git pour vous, vérifiez que les caches de construction et le PDF
les intermédiaires sont ignorés. Un flux de "bruit" vide est validé à partir de fichiers AUX
rend le journal sans valeur. Vous arrêtez de le lire, et alors l'histoire ne peut pas vous aider
toi quand quelque chose se brise.

## Propres fichiers, pas lignes

Deux personnes dans le même paragraphe fusionnent la douleur. Préférer le chapitre ou la section
propriété. Utilisez des demandes d'extraction lorsque le groupe est suffisamment grand pour pouvoir être examiné
aide réellement.

La saisie multi-utilisateurs en direct dans un tampon est un outil différent (navigateur LaTeX
éditeurs). La collaboration Git est plus lente et plus explicite : brancher, pousser, réviser.
Cela fonctionne bien lorsque vous avez besoin d’une trace écrite. Lorsque trois personnes doivent taper le
résumé ensemble cet après-midi, choisissez autre chose.

## Messages de validation futurs que vous pourrez lire

"Réparer des trucs" ne sert à rien en trois mois. "Réécrire les travaux liés aux transformateurs"
c'est suffisant. Deux couches aident :

1. Jalons que vous nommez : brouillons de section, soumission, prêt à photographier.
2. Points de contrôle de sécurité : des instantanés fréquents pour qu'un mauvais après-midi soit réversible.

Si votre éditeur vérifie après une compilation réussie ou après avoir arrêté de taper,
traitez-les comme un plancher, et non comme la seule histoire. Écrivez un vrai message lorsqu'un
la section atterrit ou un brouillon va aux coauteurs.

## Télécommandes privées

Les travaux non publiés appartiennent aux projets privés GitHub ou GitLab. L'obtention du diplôme et
les déplacements de laboratoire se produisent lorsque les gens perdent l'accès à des comptes d'éditeur cloud aléatoires. Une télécommande
vous contrôlez est la sauvegarde.

Appuyez lorsque vous avez un réseau. N'attendez pas la veille d'une échéance pour
découvrez que la télécommande n'a jamais été connectée.

## Compilation locale, sauvegarde à distance

La plupart du temps, la boucle ressemble à ceci : éditez et compilez hors ligne, appuyez lorsque vous
avoir du réseau. Vous n'avez pas besoin d'une session de navigateur en direct juste pour taper.

Ce que vous attendez de l'outillage :

- chaque projet est déjà un vrai dépôt Git (pas de `git init` oublié)
- points de contrôle automatiques après des compilations réussies et des modifications inactives
- étape, comparaison côte à côte, suppression et restauration en un clic dans la même application que
  l'éditeur et le PDF
- GitHub en option pour les télécommandes ; l'historique fonctionne déjà sur le disque
- forker un projet entier avec un historique complet pour une expérience parallèle (risqué
  méthodes de réécriture, CV alternatif) tandis que la copie de soumission reste en place
- Modifications de l'IA, si vous les activez, vérifiez d'abord le point et atterrissez uniquement via
  différences d'approbation

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) est construit pour
manière : des dossiers simples, de vrais `.git`, des points de contrôle automatiques qui nomment les fichiers qui
déplacé, panneau de contrôle de source avec différences d'arbre de travail modifiables, restauration après
confirmer, publication/poussée/pull GitHub facultative avec avance/derrière, fork de projet avec
lignée dans la bibliothèque. Le terminal `git log` correspond à l'application car c'est le
même référentiel. Le point de contrôle de l'IA, lorsque vous en utilisez un, atterrit dans ce même
l'historique à partir duquel vous restaurez.

Vous pouvez en approximer des morceaux avec une habitude prudente et un Git séparé
cliente. La différence est de savoir si l'histoire est quelque chose que vous configurez et dont vous vous souvenez,
ou quelque chose que l'espace de travail de recherche suppose dès le premier jour à côté de SyncTeX et
compiler.

## Ce que Git ne répare pas

Git ne remplacera pas les commentaires d'un PI qui ouvre uniquement des PDF, et il ne le fera pas.
décidez quel résumé est correct. Les chiffres binaires fusionnent toujours mal, alors gardez
les petits, préférez les parcelles que vous pouvez régénérer et convenez rapidement de la propriété.

Pour les coauteurs qui refusent Git, exportez un PDF ou un DOCX pour révision et conservez « .tex » comme
source de vérité. Voir
[coauteurs qui ne parlent que Word](/learn/collaborator-uses-word/).

## Une pratique minimale

1. Un dépôt par article ou thèse, pas un méga-repo pour toute votre carrière.
2. `.gitignore` pour les fichiers indésirables de construction dès le premier jour.
3. Propriété du chapitre lorsque plusieurs personnes le modifient.
4. Milestone s'engage avec des messages lisibles.
5. Télécommande privée connectée avant le travail.
6. Restauration testée une fois exprès, donc la première urgence n'est pas la première
   restaurer.

Si vous vous en tenez à cette liste, Git pour les articles disparaît en grande partie dans le
arrière-plan. Vous voulez une fiabilité ennuyeuse avant une date limite, pas un deuxième passe-temps.