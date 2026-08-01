---

title: "Dollar manquant inséré"
description: "Indices et commandes mathématiques qui ont fuité en mode texte."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# Dollar manquant inséré

"Missing $ insert" est l'erreur LaTeX la plus courante, et son nom est trompeur : LaTeX ne vous demande pas de dépenser de l'argent mais vous dit que la syntaxe uniquement mathématique est apparue en mode texte. Il insère le « $ » lui-même pour le récupérer, continue la compilation et laisse souvent d'étranges sorties en italique en aval, le message mérite donc une véritable correction plutôt qu'un haussement d'épaules.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## Qu'est-ce qui le déclenche

Deux caractères et une classe de commandes appartiennent exclusivement au mode mathématique. Le trait de soulignement `_` et le caret `^` créent des indices et des exposants, et des commandes comme `\alpha`, `\frac` et `\leq` produisent des symboles mathématiques. N'importe lequel d'entre eux en texte brut génère l'erreur. Le cas classique est un identifiant contenant un trait de soulignement, comme un nom de fichier ou un nom de gène : `DNA_seq` dans une phrase voyage sur le `_`.

Le correctif dépend de ce que vous vouliez dire. Si le trait de soulignement est un caractère littéral, échappez-le : `DNA\_seq` imprime le nom avec un véritable trait de soulignement. Si vous parliez d'un indice, alors vous parliez de mathématiques, alors enveloppez l'expression : `$x_i$` définit un x avec l'indice i, en italique mathématique avec un espacement correct. La liste complète des caractères qui doivent s'échapper dans le texte a [sa propre leçon] (/learn/special-characters/), et les délimiteurs mathématiques eux-mêmes sont traités dans [les bases du mode mathématique] (/learn/math-mode/).

## Quand le journal pointe vers un endroit étrange

Le numéro de ligne signalé correspond à l'endroit où LaTeX a remarqué le problème, pas nécessairement à l'endroit où vous l'avez provoqué. Le coupable habituel est un « $ » non fermé plus tôt : vous avez ouvert le mode mathématique et ne l'avez jamais fermé, donc LaTeX a continué en mode mathématique jusqu'à ce que quelque chose force le problème, souvent à la fin du paragraphe. Une ligne vide à l’intérieur de l’affichage mathématique génère la même erreur, car les sauts de paragraphe sont illégaux en mode mathématique. Ainsi, lorsque la ligne signalée semble innocente, recherchez vers le haut un nombre impair de signes dollar et vérifiez que chaque `\[` a un `\]` correspondant.

La mise en évidence de la syntaxe est le moyen rapide de repérer l'emballement : n'importe quel éditeur LaTeX colore les régions mathématiques différemment, de sorte qu'un paragraphe qui s'affiche soudainement en couleur mathématique identifie d'un seul coup d'œil le dollar non fermé.

Une dernière mise en garde : comme LaTeX récupère en insérant le « $ » manquant, un PDF reste souvent construit. Ne prenez pas le PDF comme preuve que l’erreur était inoffensive. La sortie récupérée comporte généralement des italiques parasites ou un espacement mutilé là où votre texte devrait être, alors corrigez la source jusqu'à ce que le journal soit propre.