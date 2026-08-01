---

title: "Un fichier de police à côté du projet"
description: "fontspec Chemin pour les familles otf ou ttf locales."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Un fichier de police à côté du projet

Supposons que votre thèse utilise une police qui n'est pas installée sur toutes les machines qui la compileront : l'ordinateur portable d'un co-auteur, un serveur de build universitaire ou votre propre ordinateur après une réinstallation. L'installation de la police à l'échelle du système sur chacun d'eux est fragile et parfois interdite. Placez les fichiers de polices dans le dossier du projet et pointez `fontspec` vers eux à la place, afin que le document porte sa propre typographie. Cela nécessite XeLaTeX ou LuaLaTeX, puisque `fontspec` ne fonctionne pas sous pdfLaTeX. Les raisons sont expliquées dans [pourquoi les gens passent à XeLaTeX](/learn/when-use-xelatex/).

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## Ce que fait chaque clé

`\setmainfont{MyFont}` déclare la famille de texte principale et lui donne le nom de base utilisé pour construire les noms de fichiers. `Path = ./fonts/` indique à `fontspec` de rechercher les fichiers dans un dossier `fonts` à l'intérieur du projet, par rapport au fichier `.tex` principal, au lieu de demander au système d'exploitation. `Extension = .otf` indique le type de fichier une fois afin qu'il n'ait pas besoin d'être répété pour chaque fichier. Utilisez `.ttf` si c'est ce que vous avez.

Les touches restantes mappent les formes de police aux fichiers. Dans chacun, le `*` se développe jusqu'au nom de base, donc `UprightFont = *-Regular` se résout en `MyFont-Regular.otf`, et de même `MyFont-Bold.otf` et `MyFont-Italic.otf`. Ces noms doivent correspondre exactement aux noms de fichiers réels, y compris les majuscules, car la casse est importante sur les serveurs Linux, même si votre système local le pardonne. Si la famille a un italique gras, ajoutez « BoldItalicFont = *-BoldItalic ». Une forme que vous ne mappez pas est une forme que le document ne peut pas utiliser : sans ligne `BoldFont`, `\textbf` n'a rien vers lequel basculer et le compilateur avertit que la forme en gras n'est pas définie.

La même syntaxe fonctionne pour les autres familles, donc `\setsansfont` et `\setmonofont` acceptent des blocs d'options identiques pour une police locale sans-serif ou code.

## Licences et portabilité

Expédiez les fichiers de polices avec le projet uniquement si la licence autorise la redistribution. Les licences ouvertes telles que la licence SIL Open Font le permettent, et les polices de Google Fonts sont généralement admissibles, mais les polices commerciales interdisent généralement de transmettre des copies aux collaborateurs, auquel cas chaque machine a besoin de sa propre copie sous licence et vous devez documenter cette exigence dans le fichier Lisez-moi du projet.

L'erreur courante est une inadéquation silencieuse entre les noms déclarés et les fichiers, souvent après avoir renommé le dossier ou téléchargé un poids nommé différemment. La compilation s'arrête alors avec "La police 'MyFont-Regular' est introuvable". Lorsque cela se produit, comparez le nom de fichier attendu de l'erreur caractère par caractère avec le contenu du dossier et confirmez que le « Chemin » indique toujours l'endroit où se trouvent les fichiers. Étant donné que le moteur Tectonic fourni par Oleafly est basé sur XeTeX, ce modèle local de projet y fonctionne sans installation de police système.