---

title: "Chaque \\\\commande de l'univers LaTeX, expliquée"
description: "La référence mondiale : des centaines de commandes et d'environnements LaTeX, du noyau à amsmath, hyperref, TikZ, biblatex et Beamer, chacun expliqué en une seule ligne."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Chaque \commande de l'univers LaTeX, expliquée

Cette page définit chaque commande et environnement LaTeX qui apparaissent dans n'importe quelle leçon sur Oleafly Learn, ainsi que le vocabulaire standard plus large que vous rencontrerez dans de vrais articles. Kernel, Amsmath, Hyperref, Graphicx, Booktabs, Biblatex, TikZ, Beamer et les packages que les chercheurs chargent réellement. Parcourez-le par catégorie ou recherchez dans la page avec Ctrl/Cmd-F la commande que vous venez de rencontrer. Chaque entrée est une ligne : ce qu'elle fait et, là où cela est important, de quel package elle provient.

## Documenter les classes et la configuration

| Commande | Ce qu'il fait |
| --- | --- |
| `\documentclass{article}` | Première ligne de chaque document : sélectionne la mise en page globale ; l'article est le choix par défaut pour les articles. |
| `\documentclass{rapport}` | Classe pour les rapports plus longs : ajoute `\chapter` et démarre le résumé sur sa propre page. |
| `\documentclass{livre}` | Cours de livres : chapitres, mise en page recto-verso, recto/principal/dos. |
| `\documentclass{lettre}` | Classe de correspondance, avec les commandes `\opening`, `\closing` et address. |
| `\documentclass{beamer}` | Classe pour les présentations de diapositives construites à partir d'environnements « frame ». |
| `\documentclass[11pt,a4paper]{article}` | Options de classe courantes : taille de police (10 pt, 11 pt, 12 pt), papier (a4paper, letterpaper), `twocolumn`, `twoside`, `landscape`, `draft`, `titlepage`. |
| `\usepackage{amsmath}` | Charge un package dans le préambule pour ajouter des fonctionnalités. |
| `\usepackage[margin=1in]{géométrie}` | Définit les marges de la page et le format du papier (géométrie). |
| `\titre{...}` | Stocke le titre du document, imprimé ultérieurement par `\maketitle`. |
| `\auteur{...}` | Stocke la liste des auteurs pour `\maketitle` ; séparez plusieurs auteurs avec `\and`. |
| `\et` | Séparateur entre les noms d'auteurs à l'intérieur de `\author{...}`. |
| `\date{...}` | Stocke la date affichée par `\maketitle` ; `\date{}` le cache, `\date{\today}` l'affiche aujourd'hui. |
| `\aujourd'hui` | Imprime la date actuelle au moment de la compilation. |
| `\maketitre` | Imprime le cartouche à partir de `\title`, `\author` et `\date`. |
| `\merci{...}` | Attache une note de bas de page à un titre ou au nom d'un auteur, par ex. pour obtenir du financement ou des coordonnées. |
| `\institut{...}` | Commande d'affiliation d'auteur utilisée par Beamer et la classe Springer LNCS. |
| `\inst{1}` | Marqueur d'affiliation en exposant dans les listes d'auteurs LNCS et Beamer : `Ada Lovelace\inst{1}`. |
| `\mots-clés{...}` | Imprime la liste de mots clés du journal dans l'éditeurdes classes comme acmart et llncs. |
| `\adresse{...}` | classe de lettre : stocke l'adresse de l'expéditeur pour le papier à en-tête. |
| `\signature{...}` | classe de lettres : stocke le nom imprimé sous la fermeture. |
| `\ouverture{Cher ...}` | classe de lettres : imprime la formule de salutation et commence le corps de la lettre. |
| `\closing{Cordialement,}` | classe de lettres : imprime le bloc de signature et de signature. |
| `\LaTeX` | Imprime le logo LaTeX avec ses lettres en relief et abaissées. |
| `\TeX` | Imprime le logo TeX avec son E abaissé. |
| `\input{fichier}` | Colle un autre fichier .tex à la place, comme si vous l'aviez tapé ici. |
| `\include{chapitre1}` | Saisit un fichier de chapitre commençant sur une nouvelle page ; permet les compilations partielles via `\includeonly`. |
| `\includeonly{chapitre1, chapitre3}` | Liste de préambule limitant les fichiers `\include` réellement compilés. |
| `\hypersetup{...}` | Configure les options d'hyperréférence telles que les couleurs des liens et les métadonnées PDF. |
| `\AtBeginDocument{...}` | Exécute le code juste après `\begin{document}`, utile pour une configuration tardive. |
| `\AtEndDocument{...}` | Exécute le code juste avant la fin du document. |
| `\makeatletter` | Transforme temporairement `@` en lettre afin que vous puissiez utiliser ou corriger les commandes internes. |
| `\makeatother` | Restaure `@` à la normale après `\makeatletter`. |
| `\typeout{...}` | Imprime un message dans le journal de compilation et le terminal, pratique pour le débogage. |
| `\protéger` | Protège une commande fragile à l'intérieur d'un argument mobile comme `\caption` ou `\section`. |
| `\listfiles` | Commande de préambule qui enregistre chaque fichier chargé et sa version, pour les rapports de bogues. |

## Structure et sectionnement

| Commande | Ce qu'il fait |
| --- | --- |
| `\partie{...}` | Division de plus haut niveau, au-dessus des chapitres, en classes de livres et de rapports. |
| `\chapitre{...}` | Titre de chapitre numéroté dans les classes de livres et de rapports (pas dans l'article). |
| `\section{...}` | Titre numéroté de premier niveau dans un article. |
| `\subsection{...}` | Titre numéroté un niveau en dessous de `\section`. |
| `\subsubsection{...}` | Titre numéroté un niveau en dessous de « \subsection ». |
| `\paragraphe{...}` | Titre de niveau le plus bas : un titre en gras au début d'un paragraphe. |
| `\sous-paragraphe{...}` | Un niveau en dessous de `\paragraphe`, rarement nécessaire. |
| `\section*{...}` | La section étoilée imprime le titre sans numéro ni entrée de table des matières. |
| `\annexe` | Change la numérotation pour que les chapitres ou sections suivants deviennent les annexes A, B, C. |
| `\annexepage` | Imprime une page de séparation distincte « Annexes » (package d'annexes). |
| `\table des matières` | Imprime la table des matières, construite à partir de vos commandes de sectionnement. |
| `\listoffigures` | Imprime une liste de toutes les légendes des figures avec les numéros de page. |
| `\listoftables` | Imprime une liste de toutes les légendes de tableau avec les numéros de page. |
| `\frontmatter` | Changement de classe de livre pour les pages de pré-contenu : numéros de page romains, chapitres non numérotés. |
| `\mainmatter` | Le cours de livre revient au contenu principal : numéros de pages en arabe, chapitres numérotés. |
| `\backmatter` | Changement de classe de livre pour les pages de fin : les chapitres ne sont plus numérotés. |
| `\addcontentsline{toc}{chapitre}{...}` | Ajoute manuellement une entrée à la table des matières (ou à une liste de figures/tableaux). |
| `\addtocontents{toc}{...}` | Écrit du matériel arbitraire (comme l'espacement) dans un fichier de contenu. |
| `\setcounter{secnumprofondeur}{3}` | Contrôle la profondeur des numéros de section. |
| `\setcounter{tocprofondeur}{2}` | Contrôle la profondeur de la table des matières. |

## Définition des commandes et des environnements

| Commande | Ce qu'il fait |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` | Définit votre propre commande ; erreurs si le nom existe déjà. |
| `\renewcommand{...}{...}` | Redéfinit une commande existante ; erreurs s’il n’existe pas. |
| `\providecommand{...}{...}` | Définit une commande uniquement si elle n'est pas déjà définie ; sinon, il ne fait rien en silence. |
| `\NewDocumentCommand` | Définition de commande moderne avec des arguments facultatifs flexibles (LaTeX3/xparse). |
| `\newenvironment{nom}{code de début}{code de fin}` | Définit votre propre environnement avec du code exécuté à `\begin` et `\end`. |
| `\renewenvironment{name}{...}{...}` | Redéfinit un environnement existant. |
| `\ensuremath{...}` | Fait fonctionner le contenu mathématique d'une macro à la fois à l'intérieur et à l'extérieur du mode mathématique. |
| `\DeclareMathOperator{\E}{E}` | Définit un nom d'opérateur vertical ; la forme étoilée met des limites en dessous (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Forme étoilée : l'opérateur prend des limites ci-dessous en affichage mathématique (amsmath). |
| `\newtheorem{lemme}{Lemme}` | Déclare un environnement de type théorème (amsthm). |
| `\foo` | Exemple de nom pour une macro définie par l'utilisateur dans la leçon `\newcommand`, pas une vraie commande LaTeX. |
| `\abs{x}` | Exemple de macro définie par l'utilisateur tirée de la leçon sur les commandes personnalisées qui compose des barres de valeur absolue. |
| `\mat{A}` | Exemple de macro définie par l'utilisateur tirée de la leçon sur les commandes personnalisées pour un symbole matriciel en gras. |
| `\vect{v}` | Exemple de macro définie par l'utilisateur tirée de la leçon sur les commandes personnalisées pour un symbole vectoriel en gras. |
| `\set{...}` | Exemple de macro définie par l'utilisateur tirée de la leçon sur les commandes personnalisées qui compose des accolades de taille. |
| `\citepair` | Exemple de macro d'aide à la citation définie par l'utilisateur issue de la leçon sur les commandes personnalisées, et non une commande standard. |
| `\E` | Exemple d'opérateur défini par l'utilisateur pour l'attente, généralement défini avec`\DeclareMathOperator` ou `\newcommand`. |
| `\R` | Exemple de macro définie par l'utilisateur pour les réels : `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | Noms d'opérateur pour arg max / arg min, définis dans ce cours avec `\DeclareMathOperator*` afin que les indices se trouvent en dessous. |

## Compteurs et longueurs

| Commande | Ce qu'il fait |
| --- | --- |
| `\newcounter{exemples}` | Crée un nouveau compteur, éventuellement réinitialisé par un parent : `\newcounter{examples}[section]`. |
| `\setcounter{page}{1}` | Définit la valeur d'un compteur, ici en redémarrant les numéros de page. |
| `\addtocounter{exemples}{2}` | Ajoute une valeur à un compteur sans rien imprimer. |
| `\stepcounter{exemples}` | Incrémente un compteur de un. |
| `\refstepcounter{exemples}` | Incrémente un compteur et en fait la cible du prochain `\label`. |
| `\value{exemples}` | Lit la valeur d'un compteur pour l'utiliser en arithmétique ou en comparaisons. |
| `\arabe{exemples}` | Imprime un compteur sous forme de chiffres arabes : 1, 2, 3. |
| `\roman{exemples}`, `\Roman{exemples}` | Imprime un compteur sous forme de chiffres romains minuscules ou majuscules. |
| `\alph{exemples}`, `\Alph{exemples}` | Imprime un compteur sous forme de lettres minuscules ou majuscules. |
| `\fnsymbol{note de bas de page}` | Imprime un compteur sous forme de symboles de note de bas de page : astérisque, poignard, etc. |
| `\newlength{\mygap}` | Crée un nouveau registre de longueur. |
| `\setlength{\parskip}{6pt}` | Attribue une valeur à un registre de longueur. |
| `\addtolength{\textheight}{1cm}` | S'ajoute à une longueur existante. |
| `\settowidth{\mygap}{text}` | Définit une longueur sur la largeur naturelle d'un texte. |
| `\parindent` | Longueur du retrait du paragraphe de première ligne ; défini avec `\setlength{\parindent}{0pt}`. |
| `\parskip` | Longueur de l'espace vertical entre les paragraphes ; défini avec `\setlength`. |
| `\largeur de ligne` | Longueur de la ligne actuelle, pratique pour le dimensionnement : `width=\linewidth`. |
| `\textwidth` | Longueur de la largeur du bloc de texte intégral sur la page. |
| `\textheight` | Longueur de la hauteur du bloc de texte intégral sur la page. |
| `\largeur de colonne` | Largeur d'une colonne dans une disposition à plusieurs colonnes. |
| `\baselineskip` | Distance verticale entre les lignes de base de lignes consécutives. |
|`\linespread{1.3}` | Met à l'échelle l'interlignage (espacement des lignes) pour l'ensemble du document ; a besoin de `\selectfont` ou d'une commande de taille pour prendre effet en place. |

## Paragraphes, sauts de ligne et césure

| Commande | Ce qu'il fait |
| --- | --- |
| `\\` | Termine la ligne actuelle à l'intérieur des paragraphes, des tableaux et des tableaux. |
| `\\[6pt]` | Saut de ligne avec un espace vertical supplémentaire après. |
| `\nouvelle ligne` | Coupe la ligne sans la justifier et sans autoriser un saut de page. |
| `\saut de ligne` | Demande ici un saut de ligne justifié ; facultatif `[0-4]` définit l'insistance. |
| `\nolinebreak` | Décourage un saut de ligne à ce stade. |
| `\par` | Termine le paragraphe, comme une ligne vide dans la source. |
| `\noindent` | Supprime le retrait de la première ligne du paragraphe qui suit. |
| `\retrait` | Force le retrait de première ligne là où il serait autrement supprimé. |
| `\-` | Marque un point de césure autorisé à l’intérieur d’un mot. |
| `\hyphenation{ensemble de données}` | Liste de préambule enseignant à LaTeX comment couper des mots spécifiques. |
| `\bâclé` | Assouplit les règles d'espacement afin que les lignes se cassent plus facilement, évitant ainsi les boîtes trop pleines. |
| `\difficile` | Restaure les règles d'espacement strictes après `\sloppy`. |
| `\raggedright` | Aligne à gauche le texte suivant au lieu de le justifier. |
| `\raggedleft` | Aligne à droite le texte suivant. |
| `\centrage` | Centre tout ce qui suit à l'intérieur du groupe actuel, par ex. l'image d'un personnage. |
| `\mêmepage` | Décourage les sauts de page au sein du groupe actuel. |
| `\enlargethispage{\baselineskip}` | Rend uniquement la page actuelle un peu plus grande, pour insérer une ligne supplémentaire. |
| `~` | Espace insécable : `Figure~1` maintient le numéro sur la même ligne. |

## Espacement

| Commande | Ce qu'il fait |
| --- | --- |
| `\quad` | Insère un espace horizontal d'environ la largeur d'un M majuscule. |
| `\qquad` | Insère deux fois l'espace de `\quad`. |
| `\enspace` | Insère un demi `\quad` d'espace horizontal. |
| `\hspace{1cm}` | Insère un espace horizontal ; disparaît à un saut de ligne. |
| `\hspace*{1cm}` | Espace horizontal qui survit même en cas de saut de ligne. |
| `\vespace{1cm}` | Insère un espace vertical d'une longueur donnée. |
| `\vspace*{1cm}` | Espace vertical qui survit même lors d'un saut de page. |
| `\smallskip` | Insère un petit espace vertical entre les paragraphes. |
| `\medskip` | Insère un espace vertical moyen entre les paragraphes. |
| `\bigskip` | Insère un grand espace vertical entre les paragraphes. |
| `\hfill` | Espace horizontal extensible qui écarte le contenu pour remplir la ligne. |
| `\vfill` | Espace vertical extensible qui écarte le contenu pour remplir la page. |
| `\dotfill` | Remplit la ligne restante avec des points, comme dans une ligne de menu ou de contenu. |
| `\hrulefill` | Remplit la ligne restante avec une règle horizontale. |
| `\étirement{2}` | Colle extensible avec un poids, pour un espacement proportionnel : `\hspace{\stretch{2}}`. |
| `\fill` | La longueur extensible unitaire ; `\hspace{\fill}` est ce vers quoi `\hfill` se développe. |
| `\fantôme{texte}` | Prend exactement l'espace de son argument mais n'imprime rien. |
| `\hphantom{texte}` | Prend uniquement la largeur de son argument, avec une hauteur nulle. |
| `\vfantôme{texte}` | Prend uniquement la hauteur de son argument, avec une largeur nulle. |
| `\smash{...}` | Imprime son argument mais prétend qu'il n'a aucune hauteur ni profondeur. |
| `\strut` | Support invisible à la hauteur d'une ligne normale, pour égaliser la hauteur des rangées. |
| `\mathstrut` | Le mode mathématique a la taille d'une parenthèse pour aligner les radicaux et les fractions. |

## Boîtes et règles

| Commande | Ce qu'il fait |
| --- | --- |
| `\mbox{...}` | Boîte horizontale incassable ; conserve également son contenu sur une seule ligne. |
| `\makebox[3cm][r]{...}` | Boîte d'une largeur définie avec un alignement choisi (l, c, r, s). |
| `\fbox{...}` | Dessine un cadre autour de son contenu. |
| `\framebox[3cm][c]{...}` | Boîte encadrée d'une largeur définie avec alignement choisi. |
| `\parbox{5cm}{...}` | Une boîte de paragraphe : une mini colonne de texte de la largeur donnée. |
| `\raisebox{2pt}{...}` | Déplace son contenu vers le haut (ou vers le bas avec une longueur négative). |
| `\rule{2cm}{0.4pt}` | Dessine un rectangle rempli ; le cheval de bataille pour les lignes personnalisées. |
| `\colorbox{jaune}{...}` | Place le texte sur une zone de fond colorée (xcolor). |
| `\fcolorbox{rouge}{jaune}{...}` | Boîte colorée avec un cadre coloré (xcolor). |

## Pages, numérotation et en-têtes

| Commande | Ce qu'il fait |
| --- | --- |
| `\nouvellepage` | Termine la page actuelle et en démarre une nouvelle. |
| `\clearpage` | Commence une nouvelle page après avoir d'abord vidé toutes les figures et tableaux en attente. |
| `\cleardoublepage` | Comme `\clearpage` mais garantit également que la page suivante est une page de droite (impaire). |
| `\saut de page` | Demande un saut de page à ce stade, étirant la page sur toute la hauteur. |
| `\nopagebreak` | Décourage un saut de page à ce stade. |
| `\pagenumbering{roman}` | Définit le style du numéro de page (arabe, romain, romain, alpha, Alph), en réinitialisant le compteur à 1. |
| `\pagestyle{fantaisie}` | Définit le style d'en-tête/pied de page (simple, vide, titres, mestitres, fantaisie) pour toutes les pages suivantes. |
| `\thispagestyle{vide}` | Remplace le style d'en-tête/pied de page pour la page actuelle uniquement. |
| `\lapage` | Imprime le numéro de la page actuelle ; utilisé dans les en-têtes et les pieds de page. |
| `\marginpar{...}` | Place une note dans la marge de la page à côté de la ligne actuelle. |
| `\fancyhf{}` | Efface tous les champs d’en-tête et de pied de page FancyHDR avant de définir les vôtres. |
| `\fancyhead[R]{...}` | Définit un champ d'en-tête fantaisiehdr, ici celui de droite. |
| `\fancyfoot[C]{\thepage}` | Définit un champ de pied de page fantaisie hdr, ici un numéro de page centré. |
| `\headrulewidth` | Macro Fancyhdr pour l'épaisseur de la règle d'en-tête ; renouveler à 0pt pour supprimer la ligne. |
| `\footrulewidth` | Macro fancyhdr pour l'épaisseur de la règle de pied de page, 0 pt par défaut. |
| `\newgeometry{margin=2cm}` | Modifie la géométrie de la page au milieu du document (géométrie). |
| `\restaurer la géométrie` | Retourne à la géométrie du préambule après `\newgeometry` (géométrie). |

## Caractères spéciaux

Les dix caractères réservés et comment les imprimer, ainsi que les symboles textuels courants.

| Commande | Ce qu'il fait |
| --- | --- |
| `\%` | Imprime un signe de pourcentage (le simple « % » commence un commentaire). |
| `\&` | Imprime une esperluette (le « & » nu est le séparateur de colonne du tableau). |
| `\#` | Imprime un hachage (le « # » marque les arguments de la macro). |
| `\_` | Imprime un trait de soulignement (le « _ » nu est un indice mathématique). |
| `\{` et `\}` | Imprimez des accolades (groupe d'accolades nues). |
| `\$` | Imprime un signe dollar (le `$` nu active le mode mathématique). |
| `\textbackslash` | Imprime une barre oblique inverse dans le texte. |
| `\textasciitilde` | Imprime un tilde dans le texte (le « ~ » nu est un espace insécable). |
| `\textasciicircum` | Imprime un signe d'insertion dans le texte (le « ^ » nu est un exposant mathématique). |
| `\textbar` | Imprime une barre verticale dans le texte. |
| `\textless`, `\textgreater` | Imprimez < et > correctement en mode texte. |
| `\ldots`, `\dots` | Points de suspension avec un espacement correct ; `\dots` s'adapte en mode mathématique (amsmath). |
| `\textellipsis` | Les points de suspension en mode texte que `\dots` utilise en dehors des mathématiques. |
| `\textemdash`, `\textendash` | Commandes nommées pour les tirets em et en (même sortie que `---` et `--`). |
| `\textquotedblleft`, `\textquotedblright` | Guillemets doubles bouclés (généralement saisis sous forme de paires de guillemets et de paires d'apostrophes). |
| `\guillemetleft`, `\guillemetright` | Guillemets d'angle français (ancienne orthographe : `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Dague et double poignard dans le texte, communs aux affiliations d'auteurs. |
| `\S` | Signe de section, comme dans S 2.1 d'un document juridique. |
| `\P` | Signe de paragraphe (pilcrow). |
| `\livres` | Signe de la livre sterling. |
| `\euro` | Signe euro (paquet eurosym ; le noyau fournit également `\texteuro`). |
| `\droit d'auteur` | Signe de droit d'auteur. |
| `\textregistered` | Signe de marque déposée. |
| `\texttrademark` | Signe de marque. |
| `\textdegree` | Signe de degré : `25\textdegree C`. |
| `\textmu` | Micro verticalsignez pour un texte comme des microns. |
| `\textpermille` | Signe pour mille. |

## Accents et lettres spéciales

Pour les accents de texte de l'ère pdfLaTeX ; avec l'entrée XeLaTeX/LuaLaTeX et UTF-8, vous pouvez généralement simplement taper le caractère.

| Commande | Ce qu'il fait |
| --- | --- |
| `\'{e}` | Accent aigu : e-aigu comme au café avec un accent. |
| `` \`{e} `` | Accent grave. |
| `\^{o}` | Accent circonflexe. |
| `\"{u}` | Tréma/dieresis. |
| `\~{n}` | Accent tilde, comme en espagnol n-tilde. |
| `\c{c}` | Cedilla, comme en français c-cedilla. |
| `\v{s}` | Caron (hacek), commun dans les noms tchèques et croates. |
| `\H{o}` | Double accent aigu hongrois. |
| `\k{a}` | Ogonek, comme en polonais a-ogonek. |
| `\b{o}` | Accent de barre sous. |
| `\d{u}` | Accent point-sous, utilisé en translittération. |
| `\r{a}` | Accent de bague, comme dans le a-ring scandinave. |
| `\u{o}` | Bref accent. |
| `\.{o}` | Accent de points. |
| `\t{oo}` | Attachez l’accent joignant deux lettres. |
| `\je`, `\j` | I et j sans points, pour empiler les accents : `\'{\i}`. |
| `\ae`, `\AE` | La ligature ae, minuscule et majuscule. |
| `\oe`, `\OE` | La ligature oe, comme dans l'œuvre française. |
| `\ss` | S pointu allemand (eszett). |
| `\o`, `\O` | O barré, comme dans les noms danois et norvégiens. |
| `\l`, `\L` | Le polonais a coupé l. |
| `\aa`, `\AA` | Un anneau en forme de lettre autonome, comme au nom d'Angstrom. |

## Polices et tailles

| Commande | Ce qu'il fait |
| --- | --- |
| `\textbf{...}` | Texte en gras. |
| `\textit{...}` | Texte en italique. |
| `\emph{...}` | Insistance qui s'adapte au contexte : italique dans le texte droit, droit dans le texte italique. |
| `\textsc{...}` | Texte en petites majuscules. |
| `\texttt{...}` | Texte de machine à écrire (monospace), idéal pour le code et les noms de fichiers. |
| `\textrm{...}` | Texte familial romain (serif). |
| `\textsf{...}` | Texte familial sans empattement. |
| `\textmd{...}` | Poids moyen (normal), annulant le gras. |
| `\textup{...}` | Forme verticale, défaite italique ou inclinée. |
| `\textsl{...}` | Forme inclinée (oblique), distincte du vrai italique. |
| `\textnormal{...}` | Réinitialise la police par défaut du document en une seule étape. |
| `\souligner{...}` | Souligne le texte ; à utiliser avec parcimonie, l'accent est généralement mis sur `\emph`. |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Déclarations changeant de famille de polices (serif, sans, mono) jusqu'à la fin du groupe. |
| `\bfseries`, `\mdseries` | Les déclarations passent en gras ou reviennent au poids moyen. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Forme des déclarations : italique, inclinée, petites majuscules, verticales. |
| `\normalfont` | Déclaration réinitialisant la famille, la série et la forme aux valeurs par défaut. |
| `\em` | Forme de déclaration de `\emph` : `{\em like this}`. |
| `\minuscule` | La plus petite des dix commandes de taille. |
| `\taille du script` | Deuxième plus petite taille, à peu près de la taille d'un indice. |
| `\footnotessize` | La taille utilisée pour les notes de bas de page. |
| `\petit` | Légèrement plus petit que la normale. |
| `\taillenormale` | La taille de base du document. |
| `\large`, `\Large`, `\LARGE` | Un, deux et trois pas de plus que la normale. |
| `\énorme`, `\énorme` | Les deux plus grandes tailles standards. |
| `\fontsize{14}{17}\selectfont` | Définit une taille de police arbitraire et un saut de ligne de base, puis l'active. |
| `\selectfont` | Active l'attribut de police en attentechangements (NFSS). |
| `\textsuperscript{...}` | Petit texte en relief, comme dans les marqueurs de style 1er ou note de bas de page. |
| `\textsubscript{...}` | Petit texte abaissé en mode texte. |
| `\familydefault` | Macro contenant la famille de polices par défaut ; renouvelez-le pour changer la police de tout le document. |
| `\sfdefault` | Macro nommant la famille sans empattement ; `\renewcommand{\familydefault}{\sfdefault}` rend le document sans. |
| `\setmainfont{...}` | Définit la police du corps principal par son nom sous XeLaTeX ou LuaLaTeX (fontspec). |
| `\setsansfont{...}` | Définit la police sans empattement par son nom sous XeLaTeX ou LuaLaTeX (fontspec). |
| `\setmonofont{...}` | Définit la police monospace par son nom sous XeLaTeX ou LuaLaTeX (fontspec). |

## Couleur (xcolor)

| Commande | Ce qu'il fait |
| --- | --- |
| `\textcolor{rouge}{...}` | Colore un morceau de texte. |
| `\color{bleu}` | Formulaire de déclaration : colore le tout jusqu'à la fin du groupe. |
| `\definecolor{marque}{HTML}{2F6F4F}` | Définit une couleur nommée pour une utilisation ultérieure. |
| `\pagecolor{gris!10}` | Définit la couleur d'arrière-plan de toute la page. |
| `\rowcolor{gris!20}` | Colore une ligne du tableau (xcolor avec l'option `table`, via colortbl). |
| `\cellcolor{gris!20}` | Colore une cellule du tableau (colortbl). |
| `\rowcolors{2}{gris!10}{blanc}` | Alternance des couleurs des lignes à partir d'une ligne donnée (option xcolor `table`). |

## Graphiques (graphicx)

| Commande | Ce qu'il fait |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` | Insère un fichier image ; options clés : `largeur`, `hauteur`, `échelle`, `angle`, `trim`+`clip`, `page`. |
| `\graphicspath{{figures/}}` | Indique à LaTeX dans quels dossiers rechercher les fichiers image. |
| `\rotatebox[origin=c]{90}{...}` | Fait pivoter son contenu d'un angle. |
| `\scalebox{0.8}{...}` | Ajuste son contenu par un facteur. |
| `\resizebox{5cm}{!}{...}` | Redimensionne le contenu à une largeur et/ou une hauteur cible ; `!` conserve le rapport hauteur/largeur. |
| `\reflectbox{...}` | Met en miroir son contenu horizontalement. |
| `\includepdf[pages=-]{paper.pdf}` | Insère des pages entières d'un autre PDF (pdfpages). |

## Entrer en mode mathématique

| Commande | Ce qu'il fait |
| --- | --- |
| `$...$` | Mathématiques en ligne dans une phrase. |
| `\(...\)` | Les délimiteurs mathématiques en ligne officiels de LaTeX, équivalents à `$...$`. |
| `\[...\]` | Équation affichée non numérotée sur sa propre ligne. |
| `$$...$$` | Mathématiques d'affichage Plain TeX ; déconseillé dans LaTeX, utilisez plutôt `\[...\]`. |
| `x^2`, `x_i` | `^` crée des exposants et `_` crée des indices ; accolades pour les scripts multi-caractères : `x^{10}`. |

## Mathématiques : lettres grecques

Tout cela fonctionne uniquement en mode mathématique. Il existe des formes majuscules où la majuscule grecque diffère de la majuscule latine.

| Commande | Ce qu'il fait |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Lettres grecques alpha, bêta, gamma, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Lettres grecques epsilon, zeta, eta, theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Lettres grecques iota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Lettres grecques xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Lettres grecques upsilon, phi, chi, psi, oméga. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Lettres grecques majuscules Gamma à Pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Lettres grecques majuscules Sigma à Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Variantes de formes d'epsilon (le bouclé utilisé par la plupart des journaux), thêta et pi. |
| `\varrho` `\varsigma` `\varphi` | Formes variantes de rho, sigma (mot final) et phi (bouclé ouvert). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Variantes grecques italiques majuscules (amsmath). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | Les variantes grecques italiques majuscules restantes (amsmath). |

## Math : opérateurs binaires

| Commande | Ce qu'il fait |
| --- | --- |
| `\pm`, `\mp` | Signes plus-moins et moins-plus. |
| `\fois` | Croix de multiplication, également utilisée pour des dimensions comme 3 x 3. |
| `\div` | Signe de division (obélus). |
| `\cdot` | Point centré pour la multiplication. |
| `\ast`, `\star`, `\bullet`, `\circ` | Opérateurs astérisque, étoile, puce et petit cercle ; `\circ` est également une composition de fonctions. |
| `\oplus`, `\ominus` | Plus encerclé (somme directe, XOR) et moins encerclé. |
| `\otimes`, `\oslash`, `\odot` | Temps encerclés (produit tensoriel), barre oblique encerclée, point encerclé. |
| `\coin`, `\vee` | Wedge (ET logique, produit extérieur) et vé (OU logique, jointure). |
| `\land`, `\lor` | Alias ​​de `\wedge` et `\vee` nommés pour leur lecture logique. |
| `\cap`, `\cup` | Placez les panneaux d'intersection et d'union. |
| `\setminus` | Définir la barre oblique inverse de différence : `A \setminus B`. |
| `\uplus` | Union avec un plus, pour union multiensemble ou disjointe. |
| `\sqcap`, `\sqcup` | Capuchon carré et tasse, rencontrez-vous et participez à la théorie du treillis. |
| `\amalg` | Fusion (produit inversé), utilisé pour les coproduits. |
| `\dagger`, `\ddagger` | Dague et double poignard comme opérateurs mathématiques, par ex. transposition conjuguée `A^\dagger`. |
| `\bigtriangleup`, `\bigtriangledown` | Opérateurs triangulaires, par ex. différence symétrique. |
| `\triangleleft`, `\triangleright` | Triangles latéraux, par ex. relation normale de sous-groupe. |

## Mathématiques : relations

| Commande | Ce qu'il fait |
| --- | --- |
| `\leq`, `\le` | Signe inférieur ou égal (`\le` est l'alias court). |
| `\geq`, `\ge` | Signe supérieur ou égal (`\ge` est l'alias court). |
| `\neq`, `\ne` | Signe différent (`\ne` est l'alias court). |
| `\ll`, `\gg` | Signes bien inférieur et bien supérieur à. |
| `\environ` | Signe à peu près égal. |
| `\sim` | Relation tilde, lue comme « est distribué comme » ou « est similaire à ». |
| `\simeq` | Signe asymptotiquement égal (tilde sur égal). |
| `\cong` | Signe congruent à (tilde sur deux barres), utilisé pour l'isomorphisme. |
| `\équiv` | Signe identique à (triple barre), également utilisé pour la congruence. |
| `\propto` | Proportionnel-à signer. |
| `\asymp` | Relation asymptotiquement équivalente (courbes empilées). |
| `\doteq` | Signe égal avec un point, lu comme « s'approche » ou « est défini comme ». |
| `\prec`, `\succ` | Précède et succède aux relations, aux ordonnances courbes. |
| `\preceq`, `\succeq` | Précède ou est égal et réussit ou est égal. |
| `\subset`, `\subseteq` | Sous-ensemble approprié et signes de sous-ensemble ou égal. |
| `\supset`, `\supseteq` | Signes de surensemble et de surensemble ou égal appropriés. |
| `\sqsubseteq`, `\sqsupseteq` | Relations de sous-ensemble et de surensemble carrés, utilisées pour l'ordre des informations. |
| `\in`, `\notin` | Définir l'appartenance et sa négation : `x \in A`. |
| `\ni` | Appartenance inversée : l'ensemble contient l'élément. |
| `\vdash`, `\dashv` | Le tourniquet « prouve » et son revers. |
| `\modèles` | Double tourniquet, implication sémantique. |
| `\perp` | Relation perpendiculaire/indépendance. |
| `\parallèle` | Relation des barres parallèles. |
| `\mid` | Barre verticale avec espacement des relations, comme dans la notation set-builder ou « divise ». |
| `\pas` | Annule la relation suivante en surimprimant une barre oblique : `\not\subset`. |

## Mathématiques : flèches

| Commande | Ce qu'il fait |
| --- | --- |
| `\to`, `\rightarrow` | Flèche droite, comme dans les types de fonctions `f : A \to B` et limites `x \to 0`. |
| `\gets`, `\leftarrow` | Flèche gauche, également utilisée pour l'affectation en pseudocode. |
| `\flèchegauche` | Flèche unique à deux têtes. |
| `\Flèche Droite` | Double flèche vers la droite, lire comme « implique ». |
| `\Flèche gauche` | Double flèche gauche, lue comme « est sous-entendu par ». |
| `\Flèchegauche` | Double flèche à deux pointes, se lisant comme « si et seulement si ». |
| `\implies`, `\impliedby` | `\Rightarrow` et `\Leftarrow` espacés pour la logique (amsmath). |
| `\iff` | `\Leftrightarrow` espacé pour « si et seulement si ». |
| `\mapsto` | Flèche Maps-to avec une queue de barre : `x \mapsto x^2`. |
| `\longmapsto` | Version longue de `\mapsto`. |
| `\hookrightarrow` | Flèche droite avec une queue en crochet, pour les inclusions/plongements. |
| `\rightharpoonup` | Harpon droit (demi-flèche), utilisé pour une convergence faible. |
| `\rightleftharpons` | Harpons opposés appariés, comme en équilibre chimique. |
| `\leadsto` | Flèche ondulée vers la droite, « mène à » (amssymb). |
| `\uparrow`, `\downarrow` | Flèches vers le haut et vers le bas. |
| `\updownarrow` | Flèche verticale à deux têtes. |
| `\Uparrow`, `\Downarrow`, `\Updownarrow` | Flèches verticales à double ligne. |
| `\nearrow`, `\searrow` | Flèches diagonales nord-est et sud-est, par ex. augmenter/diminuer jusqu’à une limite. |
| `\swarrow`, `\nwarrow` | Flèches diagonales sud-ouest et nord-ouest. |
| `\longrightarrow`, `\longleftarrow` | Longues flèches simples. |
| `\Longrightarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Longues doubles flèches. |
| `\xrightarrow{f}` | Flèche droite extensible avec une étiquette sur le dessus, qui s'agrandit pour s'adapter (amsmath). |
| `\xleftarrow{f}` | Flèche gauche extensible avec une étiquette en haut (amsmath). |

## Math : grands opérateurs

| Commande | Ce qu'il fait |
| --- | --- |
| `\sum_{i=1}^{n}` | Signe de sommation avec limites. |
| `\prod_{i=1}^{n}` | Signe de produit avec limites. |
| `\coprod` | Signe de coproduit (produit à l'envers). |
| `\int_0^1` | Signe intégral avec limites. |
| `\iint` | Double signe intégral (amsmath). |
| `\iiint` | Signe intégral triple (amsmath). |
| `\point` | Signe intégral de contour (boucle fermée). |
| `\bigcap`, `\bigcup` | Grande intersection et union sur une famille d'ensembles. |
| `\bigsqcup` | Grande coupelle carrée (union disjointe). |
| `\bigvee`, `\bigwedge` | Grand OU et grand ET sur un ensemble d'index. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Grand plus encerclé, temps et point pour les sommes indexées et les produits de structures. |
| `\biguplus` | Grande union avec plus sur un ensemble d'index. |
| `\limites` | Force les sous/exposants de l'opérateur suivant au-dessus et en dessous : `\int\limits_0^1`. |
| `\nolimites` | Force les indices/exposants sur le côté plutôt qu'au-dessus et en dessous. |

## Math : délimiteurs et dimensionnement

| Commande | Ce qu'il fait |
| --- | --- |
| `\gauche( ... \droite)` | Paire de délimiteurs de taille automatique qui s'agrandissent pour s'adapter à son contenu. |
| `\left.` et `\right.` | Partenaire invisible lorsqu'un seul côté d'une paire dimensionnée est souhaité, comme dans les barres d'évaluation. |
| `\milieu|` | Délimiteur central dimensionné automatiquement entre `\left` et `\right` (comme dans la probabilité conditionnelle). |
| `\big( \Big( \bigg( \Bigg(` | Délimiteurs dimensionnés manuellement, de légèrement grands à très grands. |
| `\bigl(...\bigr)` | Délimiteurs dimensionnés avec un espacement d'ouverture/fermeture correct (également `\Bigl`, `\biggl`, `\Biggl`). |
| `\lfloor`, `\rfloor` | Supports de sol. |
| `\lceil`, `\rceil` | Supports de plafond. |
| `\langle`, `\rangle` | Délimiteurs de crochets d'angle gauche et droit. |
| `\|` | Délimiteur à double barre verticale (barres normatives). |
| `\lvert`, `\rvert` | Barres de valeur absolue avec espacement correct des délimiteurs (amsmath). |
| `\lVert`, `\rVert` | Barres doubles pour normes, avec espacement correct des délimiteurs (amsmath). |
| `\barre oblique inverse` | Barre oblique inverse comme symbole mathématique ou délimiteur. |

## Math : accents et décorations

| Commande | Ce qu'il fait |
| --- | --- |
| `\chapeau{x}` | Petit accent de chapeau sur un symbole. |
| `\check{x}` | Accent de Caron (chapeau inversé). |
| `\breve{x}` | Accent bref (arrondi). |
| `\acute{x}`, `\grave{x}` | Accents aigus et graves en mathématiques. |
| `\tilde{x}` | Accent tilde sur un symbole. |
| `\bar{x}` | Barre courte sur un symbole. |
| `\vec{v}` | Petite flèche sur un symbole. |
| `\dot{x}`, `\ddot{x}` | Un ou deux points sur un symbole, courant pour les dérivés temporels. |
| `\dddot{x}` | Trois points sur un symbole (amsmath). |
| `\mathring{x}` | Accent de sonnerie sur un symbole. |
| `\widehat{abc}` | Chapeau large qui s'étend sur plusieurs symboles. |
| `\widetilde{abc}` | Large tilde qui s'étend sur plusieurs symboles. |
| `\overrightarrow{AB}` | Étirement de la flèche droite sur une expression, comme dans les vecteurs de A à B. |
| `\overleftarrow{AB}` | Étirement de la flèche gauche sur une expression. |
| `\overline{x + y}` | Trait sur une expression entière. |
| `\underline{x + y}` | Ligne sous une expression entière (fonctionne également dans le texte). |
| `\overbrace{...}^{n}` | Accolade horizontale au-dessus d'une expression, avec une étiquette facultative au-dessus. |
| `\underbrace{...}_{n}` | Accolade horizontale sous une expression, avec une étiquette facultative en dessous. |
| `\overset{!}{=}` | Place un symbole au-dessus d'un autre, par ex. « doit être égal » (amsmath). |
| `\underset{i}{\max}` | Place un symbole sous un autre (amsmath). |
| `\stackrel{\text{def}}{=}` | Ancienne commande du noyau empilant un symbole sur une relation. |
| `\boldsymbol{\bêta}` | Mathématiques audacieuses qui mettent également en gras les lettres et symboles grecs (amsmath). |
| `\prime` | Symbole premier ; `x'` est le raccourci habituel pour `x^{\prime}`. |

## Math : opérateurs de type journal

Tous écrits à la verticale avec un espacement correct ; ceux qui prennent des limites placent les indices ci-dessous dans les mathématiques d'affichage.

| Commande | Ce qu'il fait |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | Les fonctions trigonométriques de base. |
| `\sec`, `\csc` | Sécante et cosécante. |
| `\arcsin`, `\arccos`, `\arctan` | Fonctions trigonométriques inverses. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Fonctions hyperboliques. |
| `\exp`, `\ln`, `\log`, `\lg` | Exponentiel et logarithmes (`\lg` est log base 2 ou 10 par convention). |
| `\det`, `\dim`, `\ker`, `\deg` | Déterminant, dimension, noyau, degré. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Plus grand diviseur commun, ensembles hom, argument complexe, probabilité. |
| `\lim_{x \to 0}` | Opérateur limite, droit avec l'indice ci-dessous dans les mathématiques d'affichage. |
| `\limsup`, `\liminf` | Limite supérieur et inférieur. |
| `\inf`, `\sup` | Opérateurs Infimum et Supremum, composés à la verticale. |
| `\min`, `\max` | Opérateurs minimum et maximum, composés verticalement avec des limites ci-dessous dans les mathématiques d'affichage. |
| `\bmod` | Opérateur mod binaire avec espacement des opérateurs : `a \bmod n`. |
| `\pmod{n}` | '(mod n)' entre parenthèses. |
| `\mod{n}` | Fin de « mod n » sans parenthèses (amsmath). |
| `\nom de l'opérateur{lcm}` | Nom d'opérateur vertical unique sans déclaration de préambule (amsmath). |
| `\operatorname*{ess\,sup}` | Opérateur unique qui prend des limites ci-dessous (amsmath). |

## Mathématiques : fractions, binômes et empilement

| Commande | Ce qu'il fait |
| --- | --- |
| `\frac{a}{b}` | Fraction empilée : numérateur sur dénominateur. |
| `\dfrac{a}{b}` | Fraction forcée à la taille d'affichage maximale, même en ligne (amsmath). |
| `\tfrac{a}{b}` | Fraction forcée à une petite taille en ligne, même en affichage mathématique (amsmath). |
| `\cfrac{a}{b}` | Fraction continue avec des niveaux imbriqués en taille réelle (amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Racine carrée; l'argument facultatif donne une nième racine. |
| `\binom{n}{k}` | Coefficient binomial entre parenthèses (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Binômes forcés de taille d'affichage et de taille de texte (amsmath). |
| `{n \choisissez k}` | Primitive binomiale TeX simple ; déconseillé dans LaTeX, utilisez `\binom`. |
| `{a \sur b}` | Primitive de fraction TeX simple ; déconseillé dans LaTeX, utilisez `\frac`. |
| `{a \au sommet b}` | Primitive d'empilement Plain TeX sans barre ; déconseillé, utilisez `\substack` ou `\genfrac`. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | Générateur de fractions général derrière `\frac`, `\binom` et amis (amsmath). |
| `\substack{i < n \\ j < m}` | Indice multiligne sous un gros opérateur (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Attache des indices aux quatre coins d'un gros opérateur (amsmath). |
| `\prescript{a}{b}{X}` | Super/indices de gauche, comme dans la notation isotopique (mathtools). |

## Math : espacement et styles

| Commande | Ce qu'il fait |
| --- | --- |
| `\,` | Espace mathématique mince, entre un nombre et son unité. |
| `\:` | Espace mathématique moyen. |
| `\;` | Espace mathématique épais. |
| `\!` | Espace mince négatif, rapprochant les symboles. |
| `\quad`, `\qquad` | Espaces à un et deux cadratins, en mathématiques ou en texte. |
| `\style d'affichage` | Force le dimensionnement mathématique d'affichage complet, par ex. de grandes limites dans les mathématiques en ligne. |
| `\textstyle` | Force le dimensionnement mathématique en ligne dans les mathématiques d'affichage. |
| `\scriptstyle`, `\scriptscriptstyle` | Forcer le dimensionnement des indices et des sous-indices. |

## Mathématiques : lettres, alphabets et symboles divers

| Commande | Ce qu'il fait |
| --- | --- |
| `\mathbb{R}` | Lettres en gras du tableau noir pour les ensembles de chiffres (amssymb). |
| `\mathbf{x}` | Lettres droites en gras en mathématiques, courantes pour les vecteurs et les matrices. |
| `\mathcal{L}` | Lettres majuscules calligraphiques, par ex. une perte ou un lagrangien. |
| `\mathfrak{g}` | Lettres Fraktur, utilisées en algèbre et en logique. |
| `\mathscr{F}` | Scriptez des lettres majuscules, plus bouclées que `\mathcal` (mathrsfs). |
| `\mathrm{d}x` | Lettres verticales (romaines) en mathématiques, pour les unités et les noms à plusieurs lettres. |
| `\mathit{diff}` | Identifiant italique multi-lettres avec espacement semblable à celui d'un mot. |
| `\mathsf{T}`, `\mathtt{x}` | Lettres sans empattement et à la machine à écrire en mathématiques. |
| `\bm{\bêta}` | Symboles mathématiques gras, une alternative à `\boldsymbol` (paquet bm). |
| `\text{if } x > 0` | Texte vertical normal à l’intérieur des mathématiques avec un espacement approprié (amsmath). |
| `\infty` | Signe infini. |
| `\partial` | Signe dérivé partiel (d bouclé). |
| `\nabla` | Opérateur Nabla (del) pour les gradients et la divergence. |
| `\hbar` | Constante de Planck réduite, h avec une barre. |
| `\ell` | Script l minuscule, utilisé pour éviter toute confusion avec le chiffre 1. |
| `\wp` | Weiersstrasse p. |
| `\Re`, `\Im` | Symboles de pièces réelles et imaginaires (Fraktur R et I). |
| `\aleph` | Aleph, pour les cardinaux infinis. |
| `\ensemble vide` | Signe de jeu vide. |
| `\varrien` | Variante d'ensemble vide plus ronde que de nombreux auteurs préfèrent (amssymb). |
| `\angle` | Symbole d'angle. |
| `\angle mesuré` | Symbole d'angle mesuré avec un arc (amssymb). |
| `\triangle` | Symbole triangulaire. |
| `\square`, `\blacksquare` | Carrés ouverts et remplis ; le rempli termine souvent les épreuves (amssymb). |
| `\diamant`, `\losange` | Petit opérateur de diamants ; symbole de pastille (amssymb pour cette dernière). |
| `\top`, `\bot` | Symboles du haut (vrai) et du bas (faux/indéfini). |
| `\forall`, `\exists` | Universel (« pour tous »)et des quantificateurs existentiels (« il existe »). |
| `\nexistes` | Quantificateur existentiel nié (amssymb). |
| `\nég` | Signe logique NON. |
| `\donc`, `\parce que` | Signes à trois points « donc » et « parce que » (amssymb). |
| `\flat`, `\natural`, `\sharp` | Altérations musicales, également utilisées en notation mathématique. |
| `\surd` | Symbole radical nu sans argument. |
| `\coche` | Coche (amsymb). |
| `\cdots` | Points centrés, entre opérateurs : `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Points verticaux et diagonaux, principalement dans des matrices. |
| `\dotsb`, `\dotsc` | Points sémantiques : entre opérateurs binaires et entre virgules (amsmath). |

## outils d'affichage amsmath et mathtools

| Commande | Ce qu'il fait |
| --- | --- |
| `\tag{...}` | Remplace le numéro d'équation automatique par votre propre étiquette (amsmath). |
| `\tag*{...}` | Comme `\tag` mais sans les parenthèses environnantes (amsmath). |
| `\notag` | Supprime le numéro d'équation sur une ligne d'un environnement numéroté (amsmath). |
| `\nonnuméro` | Ancien synonyme de `\notag`. |
| `\numberwithin{equation}{section}` | Équations numériques par section : (2.1), (2.2) (amsmath). |
| `\intertexte{...}` | Interrompt un bloc d'alignement avec une ligne de texte pleine largeur, en conservant l'alignement (amsmath). |
| `\shortintertext{...}` | Comme `\intertext` avec moins d'espace vertical (mathtools). |
| `\allowdisplaybreaks` | Permet aux affichages multilignes de s'étendre sur plusieurs pages (amsmath). |
| `\displaybreak` | Demande un saut de page à ce stade d'un affichage (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Permet aux larges limites des opérateurs de dépasser afin qu'ils ne séparent pas le contenu (mathtools). |
| `\mathclap{...}` | Contenu mathématique de largeur nulle, pour les sous/surscripts larges (mathtools). |
| `\coloneqq` | Signe de définition égal à deux points := avec un espacement correct (mathtools). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Définit une macro de délimiteur avec un formulaire de dimensionnement automatique étoilé (mathtools). |
| `\eqref{eq:perte}` | Imprime un numéro d'équation avec ses parenthèses (amsmath). |
| `\qedici` | Déplace le carré de fin de preuve sur la ligne actuelle, par ex. après une équation affichée (amsthm). |

## Environnements mathématiques

| Environnement | Ce qu'il fait |
| --- | --- |
| `équation` | Une équation affichée et numérotée. |
| `équation*` | Une équation affichée et non numérotée (amsmath). |
| `aligner` | Plusieurs équations affichées alignées sur les marques « & », chacune numérotée (amsmath). |
| `aligner*` | Équations alignées sans nombres (amsmath). |
| `rassembler` | Plusieurs équations centrées sans alignement, chacune numérotée (amsmath). |
| `aligner` | Équations alignées avec espacement contrôlé manuellement entre les colonnes (amsmath). |
| `flaligne` | Équations alignées poussées vers les marges gauche et droite (amsmath). |
| `diviser` | Divise une longue équation en lignes alignées sous un seul numéro, à l'intérieur de « équation » (amsmath). |
| `multiligne` | Une longue équation divisée en lignes : première ligne à gauche, dernière ligne à droite (amsmath). |
| `aligné`, `rassemblé` | Versions de base d'aligner/gather utilisables dans un autre affichage (amsmath). |
| `sous-équations` | Numérote les équations à l’intérieur comme 1a, 1b, 1c (amsmath). |
| `cas` | Distinctions de cas regroupées par accolades, comme dans les fonctions par morceaux (amsmath). |
| `dcases` | `cases` avec des entrées de style d'affichage pour que les fractions restent en taille réelle (mathtools). |
| `matrice` | Matrice nue sans délimiteurs (amsmath). |
| `pmatrice` | Matrice entourée de parenthèses (amsmath). |
| `bmatrice` | Matrice entourée de crochets (amsmath). |
| `Bmatrice` | Matrice entourée d’accolades (amsmath). |
| `vmatrice` | Matrice enveloppée de barres verticales, notation déterminante standard (amsmath). |
| `Vmatrice` | Matrice enveloppée dans des doubles barres (amsmath). |
| `petite matrice` | Matrice compacte dimensionnée pour une utilisation en ligne (amsmath). |
| `tableau` | Grille en mode mathématique avec alignement par colonne, le cousin mathématique du « tabulaire ». |
| `eqnarray` | Ancien environnement d'équation à trois colonnes ; découragé, son espacement est incorrect, utilisez « align ». |

## Références croisées et liens

| Commande | Ce qu'il fait |
| --- | --- |
| `\label{fig:setup}` | Nomme un endroit (équation, figure, section) pour que vous puissiez vous y référer. |
| `\ref{fig:setup}` | Imprime le numéro d'un élément étiqueté. |
| `\pageref{fig:setup}` | Imprime le numéro de page où se trouve l'étiquette. |
| `\cref{fig:setup}` | Imprime automatiquement le numéro ET son nom de type : 'fig. 1' (intelligent). |
| `\Cref{fig:setup}` | `\cref` en majuscule pour le début d'une phrase : 'Figure 1' (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Imprime une plage : 'eqs. 1 à 4' (intelligent). |
| `\labelcref{fig:setup}` | Imprime uniquement le numéro d'étiquette dans le style intelligent, sans le nom du type (cleveref). |
| `\vref{fig:setup}` | Référence plus une phrase automatique « sur la page suivante » si nécessaire (varioref). |
| `\autoref{fig:setup}` | Référence tapée de l'hyperref : « Figure 1 », avec la phrase entière liée. |
| `\nameref{sec:intro}` | Imprime le texte du titre de la section référencée (hyperref). |
| `\href{https://example.com}{texte du lien}` | Crée un lien cliquable avec un texte personnalisé (hyperref). |
| `\url{https://exemple.com}` | Compose une URL en type de machine à écrire et la rend cliquable. |
| `\hyperref[sec:intro]{cette section}` | Crée un lien texte arbitraire vers une étiquette (hyperref). |
| `\hypertarget{spot}{...}` | Crée une cible de lien nommée n'importe où dans le document (hyperref). |
| `\hyperlink{spot}{text}` | Liens vers un `\hypertarget` (hyperref). |
| `\section fantôme` | Crée une ancre pour que les liens vers des titres non numérotés atterrissent au bon endroit (hyperref). |
| `\texorpdfstring{$\alpha$}{alpha}` | Fournit une alternative en texte brut pour les mathématiques dans les titres afin que les signets PDF restent valides (hyperref). |
| `\pdfbookmark[1]{Titre}{nom}` | Ajoute une entrée de signet PDF manuelle (hyperref). |

## Citations et bibliographie

| Commande | Ce qu'il fait |
| --- | --- |
| `\cite{knuth1984}` | Cite une entrée de bibliographie par clé. |
| `\nocite{clé}` | Ajoute une entrée à la bibliographie sans la citer dans le texte ; `\nocite{*}` ajoute tout. |
| `\citep{knuth1984}` | Citation entre parenthèses « (Knuth, 1984) » dans le style auteur-année natbib. |
| `\citet{knuth1984}` | Citation textuelle « Knuth (1984) » dans le style auteur-année natbib. |
| `\citeauthor{knuth1984}` | Imprime uniquement les noms des auteurs (natbib et biblatex). |
| `\citeyear{knuth1984}` | Imprime uniquement l'année (natbib et biblatex). |
| `\citealp{knuth1984}` | Citation entre parenthèses natbib sans parenthèses, pour créer la vôtre. |
| `\citealt{knuth1984}` | citation textuelle natbib sans parenthèses tout au long de l'année. |
| `\parencite{knuth1984}` | citation entre parenthèses de biblatex, l'analogue de `\citep`. |
| `\textcite{knuth1984}` | citation textuelle de biblatex, l'analogue de `\citet`. |
| `\autocite{knuth1984}` | citation biblatex qui suit la forme préférée du style (parenthèse, note de bas de page, etc.). |
| `\footcite{knuth1984}` | citation biblatex placée dans une note de bas de page. |
| `\fullcite{knuth1984}` | Imprime le texte bibliographique complet de l'entrée en ligne (biblatex). |
| `\citetitle{knuth1984}` | Imprime le titre de l'œuvre (biblatex). |
| `\bibliographie{refs}` | BibTeX : imprime la liste de références à partir d'un fichier .bib. |
| `\bibliographystyle{plainnat}` | BibTeX : choisit le format de référence ; les styles classiques incluent plain, unsrt, alpha, abbrv, ieeetr, acm, apalike. |
| `\addbibresource{refs.bib}` | biblatex : enregistre un fichier .bib dans le préambule. |
| `\printbibliographie` | biblatex : imprime la liste de références là où vous la placez. |
| `\bibitem{clé}` | Une entrée manuscrite dans un environnement « thebibliography ». |
| `labibliographie` (environnement) | Manuscritliste de références utilisée lorsque vous ignorez complètement BibTeX. |

## Flotteurs, figures et tableaux

| Commandement ou environnement | Ce qu'il fait |
| --- | --- |
| `figure` (environnement) | Conteneur flottant pour une image et une légende ; LaTeX choisit la position finale. |
| `figure*` (environnement) | Figure couvrant les deux colonnes dans un document à deux colonnes. |
| `table` (environnement) | Conteneur flottant pour une légende tabulaire plus ; LaTeX choisit la position finale. |
| `table*` (environnement) | Tableau couvrant les deux colonnes dans un document à deux colonnes. |
| `\begin{figure}[htbp]` | Conseils de placement : ici, en haut, en bas, sur votre propre page ; `!` assouplit les règles, `[H]` (paquet flottant) signifie exactement ici. |
| `tabulaire` (environnement) | La grille réelle de lignes et de colonnes : cellules divisées par `&`, les lignes se terminent par `\\`. |
| `tabulaire*` (environnement) | Tabulaire étiré jusqu'à une largeur totale spécifiée. |
| `tabularx` (environnement) | Tableau à largeur fixe dont les colonnes « X » partagent l'espace restant (tabularx). |
| `tableau` (environnement) | Grille en mode mathématique avec alignement par colonne. |
| `table longue` (environnement) | Tableau pouvant s'étendre sur plusieurs pages, avec des en-têtes répétitifs (table longue). |
| `minipage` (environnement) | Mini page à largeur fixe à l'intérieur de la page, utilisée pour placer le contenu côte à côte. |
| `sous-figure` (environnement) | Un sous-panneau avec sa propre légende, comme (a) et (b), à l'intérieur d'une figure (sous-légende). |
| `wrapfigure` (environnement) | Figure avec le corps du texte enroulé autour (wrapfig). |
| `sidewaysfigure`, `sidewaystable` (environnements) | Les flotteurs ont pivoté de 90 degrés sur leur propre page (rotation). |
| `paysage` (environnement) | Fait pivoter des pages entières en mode paysage, avec la page PDF pivotée automatiquement (pdflscape). |
| `table en trois parties` (environnement) | Enveloppe un tableau afin que les notes de bas de page s'alignent sur la largeur du tableau (tableau en trois parties). |
| `tablenotes` (environnement) | Les notes sont répertoriées sous un tableau en trois parties, marqué par `\tnote{a}`. |
| `adjustbox` (environnementet `\adjustbox`) | Met à l'échelle, redimensionne ou recadre tout contenu avec des options clé-valeur (adjustbox). |
| `\caption{...}` | Ajoute une légende numérotée à une figure ou un tableau ; mettez `\label` après. |
| `\caption*{...}` | Légende sans numéro ni entrée de liste (package de légende). |
| `\captionsetup{...}` | Configure les polices de légende, les étiquettes et l'espacement (package de légende). |
| `\toprule` | Règle lourde en haut d'une table booktabs. |
| `\midrule` | Règle moyenne entre l'en-tête et le corps d'une table booktabs. |
| `\bottomrule` | Règle lourde au bas d'une table booktabs. |
| `\cmidrule(lr){2-3}` | Règle partielle couvrant les colonnes sélectionnées (booktabs). |
| `\espace addlin` | Petit espace vertical supplémentaire entre les rangées des onglets, au lieu d'une règle. |
| `\hline` | Ligne horizontale pleine largeur dans un tableau simple ; les règles des booktabs sont généralement meilleures. |
| `\cline{2-3}` | Ligne horizontale couvrant les colonnes sélectionnées dans un tableau simple. |
| `\vline` | Ligne verticale en ce point d'une ligne du tableau ; Les spécificateurs de colonne `|` sont la méthode habituelle. |
| `\multicolumn{2}{c}{En-tête}` | Fusionne les cellules des colonnes d’une seule ligne. |
| `\multirow{2}{*}{Étiquette}` | Fusionne les cellules verticalement sur plusieurs lignes (multilignes). |
| `\arraystretch` | Facteur pour la hauteur des lignes du tableau ; défini avec `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Longueur du remplissage de chaque côté d'une colonne tabulaire. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Définit un spécificateur de colonne réutilisable (package de tableau). |
| `\endfirsthead` | longtable : marque la fin de l'en-tête affiché sur la première page uniquement. |
| `\endhead` | longtable : marque la fin de l'en-tête répété sur chaque page suivante. |
| `\endfoot` | longtable : marque la fin du pied de page affiché à chaque saut de page. |
| `\endlastfoot` | longtable : marque la fin du pied de page affiché uniquement à la toute fin. |
|`\FloatBarrier` | Empêche les flotteurs de dériver au-delà de ce point (placeins). |

## Notes de bas de page

| Commande | Ce qu'il fait |
| --- | --- |
| `\footnote{...}` | Met une note en bas de page, marquée d'un numéro automatique. |
| `\footnotemark` | Imprime uniquement le marqueur de note de bas de page, pour les endroits où `\footnote` n'est pas autorisé. |
| `\footnotetext{...}` | Fournit le texte d'un `\footnotemark` antérieur. |

## Théorèmes et preuves

| Commandement ou environnement | Ce qu'il fait |
| --- | --- |
| `\newtheorem{lemme}{Lemme}` | Déclare un environnement de type théorème (amsthm). |
| `\newtheorem*{remarque}{Remarque}` | Déclare un environnement de type théorème non numéroté (amsthm). |
| `\theoremstyle{définition}` | Définit l'apparence (simple, définition, remarque) des déclarations `\newtheorem` suivantes (amsthm). |
| `théorème` (environnement) | Bloc de théorème numéroté, créé par `\newtheorem{theorem}{Theorem}`. |
| `preuve` (environnement) | Bloc d'épreuve qui imprime « Preuve ». et se termine par le carré QED (amsthm). |

## Verbatim, code et listes

| Commandement ou environnement | Ce qu'il fait |
| --- | --- |
| `\verb|code|` | Verbatim en ligne : imprime exactement ce que vous tapez, délimité par tout caractère répété. |
| `verbatim` (environnement) | Bloc de texte imprimé exactement tel que tapé, dans la police de la machine à écrire. |
| `\verbatiminput{file.txt}` | Imprime un fichier entier textuellement (package verbatim). |
| `lstlisting` (environnement) | Liste de code source avec coloration syntaxique facultative (listes). |
| `\lstinline|code|` | Extrait de code en ligne dans le style des listes (listes). |
| `\lstset{langue=Python}` | Configure les paramètres par défaut des listings : langue, numérotation, couleurs (listes). |
| `\lstinputlisting{script.py}` | Compose un fichier source entier sous forme de liste (listes). |
| `minted` (environnement) | Blocs de code en surbrillance alimentés par Pygments ; a besoin de `-shell-escape` au moment de la compilation (créé). |
| `\mintinline{python}|code|` | Code mis en surbrillance en ligne (créé). |

## Beamer (diapositives)

| Commandement ou environnement | Ce qu'il fait |
| --- | --- |
| `frame` (environnement) | Une diapositive Beamer : `\begin{frame}{Titre de la diapositive} ... \end{frame}`. |
| `\frame{...}` | Le formulaire de diapositive à une commande de Beamer ; l'environnement `frame` est la méthode habituelle. |
| `\frametitle{...}` | Définit le titre de la diapositive à l’intérieur d’un cadre. |
| `\framesubtitle{...}` | Définit un sous-titre plus petit sous le titre du cadre. |
| `\page de titre` | Beamer : à l'intérieur d'un cadre, imprime la diapositive de titre à partir de vos métadonnées de titre. |
| `\table des matières[section actuelle]` | Diapositive de présentation mettant en évidence la section dans laquelle vous vous trouvez. |
| `\pause` | Beamer : révèle le reste de l’image à l’étape suivante de la diapositive. |
| `\onslide<2->` | Le contenu apparaît à partir d’une étape de superposition donnée. |
| `\only<2>{...}` | Le contenu existe uniquement aux étapes indiquées et ne prend aucun espace ailleurs. |
| `\découvrir<2->{...}` | Le contenu est invisible avant son passage mais réserve toujours son espace. |
| `\visible<2->{...}`, `\invisible<2>{...}` | Affichez ou masquez le contenu à des étapes données sans modifier la mise en page. |
| `\alerte{...}` | Met en surbrillance le texte dans la couleur d'alerte du thème, généralement rouge. |
| `bloc` (environnement) | Boîte titrée dans la couleur standard du thème. |
| `alertblock` (environnement) | Encadré intitulé dans la couleur de l'alerte, pour les avertissements ou les points clés. |
| `exampleblock` (environnement) | Boîte intitulée dans la couleur de l'exemple, généralement verte. |
| `columns` (environnement) et `\column{0.5\textwidth}` | Zones de mise en page côte à côte sur une diapositive. |
| `\usetheme{Madrid}` | Beamer : choisit le thème de la présentation dans le préambule. |
| `\usecolortheme{hippocampe}` | Échange uniquement la palette de couleurs du thème. |
| `\usefonttheme{serif}` | Échange uniquement les choix de polices du thème. |
| `\setbeamertemplate{symboles de navigation}{}` | Remplace un élément de thème, supprimant ici les icônes de navigation. |
|`\setbeamercolor{titre}{fg=noir}` | Remplace une couleur de thème. |
| `\note{...}` | Notes du présentateur attachées à un cadre, affichées uniquement dans la sortie des notes. |

## TikZ et diagrammes

| Commandement ou environnement | Ce qu'il fait |
| --- | --- |
| `tikzpicture` (environnement) | Toile pour dessins TikZ ; toutes les commandes `\draw` et `\node` y vont. |
| `\tikz` | Image en ligne one-shot : `\tikz \draw (0,0) circle (2pt);`. |
| `\draw (0,0) -- (1,1);` | Commande de chemin TikZ qui dessine des lignes et des formes ; des options telles que « [épais, rouge, ->] » le stylisent. |
| `\fill` | Commande de chemin TikZ qui remplit une forme au lieu de la caresser. |
| `\filldraw` | Commande de chemin TikZ qui remplit et décrit une forme. |
| `\ombre` | Commande de chemin TikZ qui se remplit d'un dégradé. |
| `\clip` | Chemin TikZ qui restreint tous les dessins ultérieurs à son intérieur. |
| `\chemin` | Chemin TikZ qui calcule les coordonnées sans dessiner, par ex. pour placer des nœuds. |
| `\node at (0,0) {étiquette};` | Commande TikZ qui place du texte ou des formes aux coordonnées. |
| `\coordonner (a) à (1,2);` | Nomme un point à réutiliser dans des chemins ultérieurs. |
| `\foreach \i dans {1,...,5}` | Boucle qui répète le code de dessin sur une liste (TikZ/pgffor). |
| `\tikzset{mystyle/.style={...}}` | Définit les styles TikZ réutilisables de manière moderne. |
| `\tikzstyle` | Ancienne syntaxe de définition de style ; obsolète, utilisez `\tikzset`. |
| `\usetikzlibrary{positionnement}` | Charge des fonctionnalités TikZ supplémentaires dans le préambule. |
| `\matrice` (TikZ) | Disposition des nœuds alignés sur une grille à l'intérieur d'une image tikz. |
| `tikzcd` (environnement) | Grille pour diagrammes commutatifs ; cellules divisées par `&` (tikz-cd). |
| `\arrow[r, "f"]` | Dessine une flèche entre les cellules dans un diagramme commutatif tikz-cd. |

## Unités (siunitx)

| Commande | Ce qu'il fait |
| --- | --- |
| `\num{12345.678}` | Formate un nombre avec un regroupement de chiffres et des marqueurs décimaux appropriés. |
| `\qté{9,8}{\mètre\per\seconde\squared}` | Numéro avec unité, correctement espacé (nom siunitx v3). |
| `\unit{\kilo\gramme}` | Unité seule (nom siunitx v3). |
| `\SI{9,8}{\mètre\per\seconde\squared}` | v2 nom de `\qty` ; encore largement vu dans les journaux. |
| `\si{\kilo\gramme}` | v2 nom de `\unit`. |
| `\sisetup{...}` | Configuration globale de Siunitx. |
| `\DeclareSIUnit{\parsec}{pc}` | Définit une unité personnalisée (siunitx). |

## Glossaires et acronymes

| Commande | Ce qu'il fait |
| --- | --- |
| `\gls{svm}` | Imprime une entrée de glossaire ou d'acronyme, en la développant lors de la première utilisation (glossaires). |
| `\Gls{svm}` | Forme en majuscule pour les débuts de phrases (glossaires). |
| `\glspl{svm}` | Forme plurielle de l'entrée (glossaires). |
| `\newglossaryentry{tree}{name=tree, description={...}}` | Déclare un terme de glossaire (glossaires). |
| `\newacronym{svm}{SVM}{machine vectorielle de support}` | Déclare un acronyme avec des formes courtes et longues (glossaires). |
| `\acrshort{svm}`, `\acrlong{svm}` | Forcer la forme courte ou longue quelle que soit la première utilisation (glossaires). |
| `\makeglossaires` | Commande de préambule qui active le traitement des glossaires/acronymes (glossaires). |
| `\printglossaire` | Imprime une liste de glossaires là où vous la placez (glossaires). |
| `\printglossaires` | Imprime le glossaire et les listes d'acronymes là où vous le placez (glossaires). |

## Algorithmes et pseudocode

Les commandes par mots-clés proviennent d'algpseudocode (algorithmicx) ; le flotteur « algorithme » les enveloppe.

| Commandement ou environnement | Ce qu'il fait |
| --- | --- |
| `algorithme` (environnement) | Conteneur flottant pour pseudocode, avec une légende et un numéro (algorithme). |
| `algorithmique` (environnement) | Le corps du pseudocode lui-même, contenant les commandes-clés (algpseudocode). |
| `\État` | Une ligne de déclaration de pseudocode. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Mots-clés de bloc conditionnel. |
| `\Pour{...}`, `\PourTout{...}`, `\EndFor` | Bouclez des mots-clés sur une plage ou un ensemble. |
| `\While{...}`, `\EndWhile` | Mots-clés de la boucle while. |
| `\Function{Nom}{args}`, `\EndFunction` | Bloc de définition de fonction. |
| `\Procédure{Nom}{args}`, `\EndProcédure` | Bloc de définition de procédure. |
| `\Retour` | Le mot-clé de retour. |
| `\Commentaire{...}` | Commentaire aligné à droite sur une ligne de pseudocode. |
| `\Require`, `\Ensure` | Lignes de préconditions et de postconditions en haut d’un algorithme. |

## Packages linguistiques, citations et éditoriaux

| Commande | Ce qu'il fait |
| --- | --- |
| `\selectlangue{allemand}` | Change la langue active : césure, légendes, dates (babel). |
| `\langue étrangère{français}{...}` | Compose un court passage selon les règles d'une autre langue (babel). |
| `\enquote{...}` | Guillemets contextuels qui s'emboîtent et se localisent correctement (csquotes). |
| `\todo{Réparer ceci}` | Note en marge signalant le travail à faire (todonotes). |
| `\listoftodos` | Imprime une liste de toutes les notes de tâches (todonotes). |
| `\figure manquante{...}` | Boîte d'espace réservé pour une figure que vous n'avez pas encore réalisée (todonotes). |
| `\xespace` | À la fin d'une macro, ajoute un espace sauf si la ponctuation suit (xspace). |
| `\patchcmd{\cmd}{trouver}{remplacer}{ok}{échec}` | Corrige la définition d'une macro existante en place (etoolbox). |
| `\apptocmd`, `\pretocmd` | Ajoutez ou ajoutez du code à une macro existante (etoolbox). |
| `\newtoggle{draft}`, `\toggletrue{draft}`, `\iftoggle{draft}{...}{...}` | Drapeaux booléens légers (etoolbox). |

## Packages de mise en page et de typographie sur une seule ligne

| Package ou commande | Ce qu'il fait |
| --- | --- |
| `\setstretch{1.25}` | Définit un facteur d'espacement de ligne exact (setspace). |
| `\doubleespacement` | Passe à un interligne double (setspace). |
| `\onehalfspacing` | Passe à un interligne d’un an et demi (setspace). |
| `\singlespacing` | Revient à l'interligne simple (setspace). |
| `espacement` (environnement) | Définit un facteur d'espacement de ligne personnalisé pour son contenu (setspace). |
| `\titleformat{\section}{...}{...}{...}{...}` | Redessine l'apparence d'un titre de section (titlesec). |
| `\titlespacing{\section}{0pt}{12pt}{6pt}` | Ajuste l'espace autour d'un titre (titlesec). |
| `\setlist[itemize]{noitemsep}` | Configure l'espacement des listes et les étiquettes globalement ou par niveau (enumitem). |
| `parskip` (paquet) | Bascule le document pour bloquer les paragraphes : espace entre les deux, pas de retrait. |
| `microtype` (paquet) | Saillie et expansion subtiles qui améliorent la justification ; il suffit de le charger. |
| `multicols` (environnement) | Texte multicolonne équilibré sans l'option de classe à deux colonnes (multicol). |

## Chimie, physique et notation de domaine

| Commande | Ce qu'il fait |
| --- | --- |
| `\ce{H2O}` | Compose une formule ou une réaction chimique (mhchem). |
| `\chemfig{...}` | Dessine un diagramme de structure chimique (chemfig). |
| `\braket{\phi|\psi}` | Compose la notation Dirac bra-ket avec des barres de taille automatique (braket). |

## Commandes de classe Publisher

| Commandement ou environnement | Ce qu'il fait |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran : formate un bloc de nom d'auteur dans la zone de titre de la conférence IEEE. |
| `\IEEEauthorblockA{...}` | IEEEtran : formate un bloc d'affiliation d'auteur dans la zone de titre de la conférence IEEE. |
| `\ccsdesc[500]{...}` | acmart : déclare un concept ACM CCS pour la classification du papier. |
| `CCSXML` (environnement) | acmart : contient le XML des concepts ACM CCS lisible par machine à partir de l'outil de classification ACM. |
| `\Université{...}` | Commande de métadonnées spécifiques à la classe vue dans les modèles de thèse, et non dans LaTeX standard. |

## Environnements en général

Un environnement est une région ouverte avec `\begin{name}` et fermée avec `\end{name}` ; tout entre les deux correspond au comportement de cet environnement. L'histoire complète se trouve dans [commandes vs environnements](/learn/commands-environments/). Les polyvalents :

| Environnement | Ce qu'il fait |
| --- | --- |
| `document` | Le corps de chaque document se trouve entre `\begin{document}` et `\end{document}`. |
| `abstrait` | Imprime le résumé de l'article avec le titre et la mise en page standard de la classe. |
| `page de titre` | Enveloppe une page de titre complète faite à la main ; la page n'est pas numérotée. |
| `centre` | Centre son contenu horizontalement. |
| `flushleft` | Aligne son contenu à gauche, irrégulier à droite. |
| `à plat` | Aligne son contenu à droite, irrégulier à gauche. |
| `articleize` | Liste à puces ; chaque entrée commence par `\item`. |
| `énumérer` | Liste numérotée ; chaque entrée commence par `\item`. |
| `description` | Liste étiquetée ; les entrées commencent par `\item[Label]`. |
| `\élément` | Démarre une entrée dans les listes d’éléments, d’énumération ou de description. |
| `citation` | Bloc en retrait pour les citations courtes, pas de retrait de paragraphe. |
| `citation` | Bloc en retrait pour les citations plus longues, avec des retraits de paragraphe. |
| `verset` | Bloc en retrait pour la poésie, où `\\` termine chaque ligne de vers. |
| `sloppypar` | Paragraphes composés avec des sauts de ligne détendus, la forme d'environnement de `\sloppy`. |
| `liste` | Le générateur de liste générale à partir duquel les éléments et les amis sont définis. |
| `liste triviale` | Liste simple, sans étiquettes ni marges, utilisée dans les définitions de macros. |
| `contenu du fichier` | Écrit son corps dans un fichier au moment de la compilation, par ex. pour expédier un .bib à l'intérieur du .tex. |
| `annexes` | Encapsule les chapitres de l'annexe, activant `\appendixpage` et les outils par annexe (package d'annexe). |

## Où aller ensuite

Cette page est le dictionnaire. Les leçons sont la grammaire. Pour une page d'une page prête à être collée, gardez [la feuille de triche](/learn/cheatsheet/) ouverte. Pour la différence entre les blocs `\command{...}` et `\begin{...}`, lisez [commandes vs environnements](/learn/commands-environments/). Pour un symbole que vous pouvez imaginer mais que vous ne pouvez pas nommer, utilisez [symboles mathématiques] (/learn/math-symbols-cheatsheet/). Pour voir à quoi ressemble une commande en mode mathématique, collez-la dans [l'aperçu en direct](/live/) et regardez-la s'afficher.