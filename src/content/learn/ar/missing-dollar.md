---

title: "تم إدراج الدولار المفقود"
description: "الاشتراكات وأوامر الرياضيات التي تسربت إلى وضع النص."
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

# إدراج الدولار المفقود

"تم إدراج $ مفقود" هو خطأ LaTeX الأكثر شيوعًا، واسمه مضلل: لا يطلب منك LaTeX إنفاق أموال ولكنه يخبرك أن بناء الجملة الرياضي فقط ظهر في وضع النص. فهو يُدرج `$` نفسه للاسترداد، ويستمر في التجميع، وغالبًا ما يترك مخرجات مائلة غريبة في اتجاه مجرى النهر، لذا فإن الرسالة تستحق إصلاحًا حقيقيًا بدلاً من الاستهزاء.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## ما الذي يثيره

ينتمي حرفان وفئة من الأوامر إلى وضع الرياضيات حصريًا. تُنشئ الشرطة السفلية `_` وعلامة الإقحام `^` رموزًا منخفضة ومرتفعة، كما تنتج أوامر مثل `\alpha` و`\frac` و`\leq` رموزًا رياضية. أي واحد منهم في نص عادي يثير الخطأ. الحالة الكلاسيكية هي معرف يحتوي على شرطة سفلية، مثل اسم ملف أو اسم جين: `DNA_seq` في جملة تنتقل إلى `_`.

الإصلاح يعتمد على ما قصدته. إذا كانت الشرطة السفلية حرفًا حرفيًا، فتخلص منها: يطبع `DNA\_seq` الاسم بشرطة سفلية حقيقية. إذا كنت تقصد حرفًا منخفضًا، فأنت تقصد الرياضيات، لذا قم بتغليف التعبير: `$x_i$` يعين x مع الحرف i المنخفض، بخط رياضي مائل مع تباعد صحيح. تحتوي القائمة الكاملة للأحرف التي تحتاج إلى الهروب في النص على [درس خاص بها](/learn/special-characters/)، ويتم تغطية محددات الرياضيات نفسها في [أساسيات وضع الرياضيات](/learn/math-mode/).

## عندما يشير السجل إلى مكان غريب

رقم السطر الذي تم الإبلاغ عنه هو المكان الذي لاحظت فيه LaTeX المشكلة، وليس بالضرورة المكان الذي تسببت فيه. السبب المعتاد هو `$` غير المغلق سابقًا: لقد فتحت وضع الرياضيات ولم تغلقه أبدًا، لذلك تم تشغيل LaTeX في وضع الرياضيات حتى أدى شيء ما إلى حدوث المشكلة، وغالبًا ما كان ذلك في نهاية الفقرة. يؤدي وجود سطر فارغ داخل عرض الرياضيات إلى ظهور نفس الخطأ، لأن فواصل الفقرات غير قانونية في وضع الرياضيات. لذلك عندما يبدو الخط الذي تم وضع علامة عليه بريئًا، قم بالمسح لأعلى بحثًا عن عدد فردي من علامات الدولار وتأكد من أن كل `\[` له `\]` مطابق.

يعد تمييز بناء الجملة الطريقة السريعة لاكتشاف الهارب: يقوم أي محرر LaTeX بتلوين مناطق الرياضيات بشكل مختلف، لذا فإن الفقرة التي يتم عرضها فجأة باللون الرياضي تحدد الدولار غير المغلق في لمحة.

تحذير أخير: نظرًا لأن LaTeX يتعافى عن طريق إدراج `$` المفقود، غالبًا ما يتم إنشاء ملف PDF. لا تأخذ ملف PDF كدليل على أن الخطأ غير ضار. عادةً ما تحتوي المخرجات المستردة على أحرف مائلة أو مسافات مشوهة حيث يجب أن يكون النص، لذا قم بإصلاح المصدر حتى يصبح السجل نظيفًا.