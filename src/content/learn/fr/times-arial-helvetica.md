---

title: "Piles de type Times, Arial, Helvetica"
description: "Les journaux de mappages newtx, helvet ou fontspec demandent toujours."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Piles de type Times, Arial, Helvetica

Les directives des journaux et des conférences exigent toujours systématiquement Times pour le corps du texte ou Arial pour les chiffres, des décennies après que ces polices ont cessé d'être le premier choix esthétique de chacun. Dans LaTeX, il existe deux manières de satisfaire à une telle exigence, et celle qui s'applique dépend de votre moteur. pdfLaTeX classique ne peut pas charger les fichiers Times New Roman ou Arial réels, il utilise donc des clones compatibles métriques livrés sous forme de packages. XeLaTeX et LuaLaTeX chargent les vraies polices système via `fontspec`.

## L'itinéraire du colis

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` fait passer la police du texte à un clone Times et `newtxmath` fournit des mathématiques correspondantes. L'association est importante : modifiez uniquement la police du texte et les équations restent par défaut sur Computer Modern. Un paragraphe du Times à côté de Computer Modern math est immédiatement visible. `newtx` est le successeur maintenu des anciens packages `times` et `txfonts`, que vous devriez éviter dans les nouveaux documents. Les anciennes piles n'ont pas été converties, et certaines produisent les polices bitmap décrites dans [texte flou dans la visionneuse PDF](/learn/fuzzy-font-pdf/).

`helvet` fournit un clone d'Helvetica en tant que famille sans empattement, qui remplace également Arial, puisqu'Arial a été conçu pour correspondre aux métriques d'Helvetica. Le charger ne modifie pas la police du document, car le corps du texte utilise la famille serif. La ligne `\renewcommand{\familydefault}{\sfdefault}` effectue ce changement : `\familydefault` est la famille que LaTeX utilise pour le texte ordinaire, et en la définissant sur `\sfdefault` rend l'ensemble du document semblable à Helvetica. Omettez cette ligne si vous n'avez besoin que de titres sans empattement ou d'étiquettes de figures. Si Helvetica est légèrement grand à côté de votre police de texte, `\usepackage[scaled=0.92]{helvet}` l'aligne.

## La route fontspec

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

Sous XeLaTeX ou LuaLaTeX, « fontspec » adresse les polices par leur nom et les charge à partir du système d'exploitation, ce qui définit le véritable Times New Roman comme famille principale (serif) et le véritable Arial comme famille sans. Les polices doivent effectivement être installées sur la machine. Cela mord lorsqu'un document se déplace entre des ordinateurs ou dans CI. Une police qui voyage avec le projet évite le problème, comme indiqué dans [un fichier de police à côté du projet](/learn/install-custom-font/). Les mathématiques sont encore une fois une préoccupation distincte, gérée par « unicode-math » ou en gardant « newtxmath » à côté. Les compromis du moteur sont abordés dans [pourquoi les gens passent à XeLaTeX](/learn/when-use-xelatex/).

## La règle générale

Avant de choisir l'un ou l'autre itinéraire, vérifiez si le fichier de classe du lieu définit déjà les polices. La plupart le font. Empiler vos propres packages de polices au-dessus d'une classe qui a parlé produit au mieux des avertissements. Ajoutez des packages de polices uniquement aux documents dont la classe vous laisse le choix.