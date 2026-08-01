---

title: "Вставлено відсутній долар"
description: "Індекси та математичні команди, які просочилися в текстовий режим."
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

# Вставлено відсутній долар

«Відсутній вставлений $» — це найпоширеніша помилка LaTeX, і її назва вводить в оману: LaTeX не просить вас витрачати гроші, а повідомляє, що в текстовому режимі з’явився лише математичний синтаксис. Він вставляє сам `$` для відновлення, продовжує компіляцію та часто залишає дивний курсивний висновок, тому повідомлення заслуговує справжнього виправлення, а не знизування плечима.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## Що це викликає

Два символи і клас команд належать виключно математичному режиму. Знак підкреслення `_` і вставка `^` створюють нижні та верхні індекси, а такі команди, як `\alpha`, `\frac` і `\leq`, створюють математичні символи. Будь-який із них у відкритому тексті викликає помилку. Класичний випадок — це ідентифікатор, який містить символ підкреслення, як-от ім’я файлу чи ім’я гена: «DNA_seq» у реченні спрацьовує на «_».

Виправлення залежить від того, що ви мали на увазі. Якщо підкреслення є буквальним символом, екрануйте його: `DNA\_seq` друкує ім’я зі справжнім підкресленням. Якщо ви мали на увазі нижній індекс, то ви мали на увазі математику, тому оберніть вираз: `$x_i$` встановлює x з нижнім індексом i математичним курсивом із правильним інтервалом. Повний перелік символів, які потрібно екранувати в тексті, має [власний урок](/learn/special-characters/), а самі математичні роздільники розглядаються в [основах математичних режимів](/learn/math-mode/).

## Коли журнал вказує на щось дивне

Повідомлений номер рядка – це місце, де LaTeX помітив проблему, не обов’язково те, де ви її спричинили. Звичайним винуватцем є незакритий `$` раніше: ви відкривали математичний режим і ніколи його не закривали, тому LaTeX працював у математичному режимі, доки щось не викликало проблему, часто кінець абзацу. Порожній рядок у математичному обчисленні дисплея викликає ту саму помилку, оскільки розриви абзаців у математичному режимі неприпустимі. Отже, коли позначений рядок виглядає невинним, проскануйте вгору на непарну кількість знаків долара та переконайтеся, що кожен `\[` має відповідний `\]`.

Підсвічування синтаксису — це швидкий спосіб виявити втечу: будь-який редактор LaTeX забарвлює математичні області по-різному, тому абзац, який раптово відображається математичним кольором, з першого погляду вказує на незакритий долар.

Останнє застереження: оскільки LaTeX відновлюється шляхом вставки відсутнього `$`, PDF-файл часто все одно будується. Не сприймайте PDF як доказ того, що помилка нешкідлива. Відновлений вихід зазвичай має випадковий курсив або спотворені інтервали там, де має бути ваш текст, тому виправте джерело, доки журнал не буде чистим.