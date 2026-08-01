---

title: "كل شيء أعلاه يبدأ {document}"
description: "الحزم والبيانات الوصفية وترتيب التحميل: ما ينتمي إلى الديباجة وما لا ينتمي إليه."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# كل شيء أعلاه يبدأ {document}

كل شيء بين `\documentclass{...}` و `\begin{document}` هو **الديباجة**. لا ينتج أي نص مرئي. يقوم بتكوين التشغيل. الخطوط، والهوامش، والحزم، والأوامر المخصصة، وبيانات تعريف الوثيقة كلها موجودة هنا، وهذا هو السبب في أن مقدمة الورقة الناضجة غالبًا ما تكون أطول من المقدمة. بمجرد أن تعرف ما يفعله كل سطر، يتوقف القالب المنسوخ عن كونه سحريًا ويصبح قائمة مرجعية.

## التشريح

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

تقوم الخيارات الموجودة في `\documentclass` بتعيين الإعدادات الافتراضية العامة: `11pt` هو حجم الخط الأساسي الذي يتم قياس كل شيء آخر منه، ويعلن `a4paper` عن حجم الورق. يعد سطرا التشفير رفيقين تاريخيين: يخبر `inputenc` المحرك بأن ملفك المصدر هو UTF-8، ويختار `fontenc` ترميز الخط بحيث تكون الأحرف المميزة عبارة عن حروف رسومية حقيقية وليست مركبات. يفترض LaTeX الحالي إدخال UTF-8 بالفعل، لذلك سترى هذه السطور محذوفة في المستندات الجديدة، لكنها غير ضارة وتحتفظ بها القوالب من أجل التوافق.

تقوم الكتلة الوسطى بتحميل حزم القدرات. [geometry](/learn/margins-geometry/) يعين الهوامش في خيار واحد، ويوفر `amsmath` و`amssymb` البيئات الرياضية والرموز التي يحتاجها كل مستند تقني تقريبًا، ويتيح `graphicx` `\includegraphics` للأشكال، ويوفر `booktabs` القواعد التي تجعل الجداول تبدو احترافية. وأخيرًا، يجعل [hyperref](/learn/hyperlinks/) المراجع والاستشهادات قابلة للنقر عليها ويتم تحميلها عمدًا أخيرًا، لأنها تعيد تعريف العناصر الداخلية للعديد من الحزم الأخرى.

تقوم الأسطر `\title` و`\author` و`\date` بتخزين البيانات التعريفية فقط. لا تتم طباعة أي شيء حتى يتم تشغيل `\maketitle` في النص، ولهذا السبب يمكن أن تبقى هذه في المقدمة على الإطلاق.

## القواعد الأساسية

بعض العادات تحافظ على صحة الديباجات. قم بتحميل حزمة واحدة لكل مهمة وقاوم تكديس الحزم التي تتقاتل على نفس المنطقة، مثل طريقتين لتحديد الهوامش. احتفظ بالمرجع الفائق في النهاية، مع مجموعة من الاستثناءات الموثقة مثل Cleveref التي يجب أن تأتي بعده. ضع اختيارات على مستوى المستند في خيارات الفصل بدلاً من تشتيتها، بحيث يتم الإعلان عن "11pt" أو "twocolumn" مرة واحدة حيث يمكن لأي شخص رؤيتها. وبمجرد أن تتجاوز [وحدات الماكرو المخصصة](/learn/custom-commands/) بضعة أسطر، انقلها إلى ملف `.sty` حتى تتمكن مستندات متعددة من مشاركة مجموعة واحدة من التعريفات.

النظام الأكثر فائدة هو السلبي: إذا كنت لا تعرف سبب وجود سطر تمهيدي، فاكتشف ذلك قبل أن تعتمد وثيقتك عليه. تتراكم الديباجة المنسوخة في السطور النهائية، والخطوط النهائية هي المكان الذي تختبئ فيه تعارضات الحزم. راجع أيضًا [هيكل الوثيقة](/learn/document-skeleton/) و[مقارنة المحركات](/learn/engines-compared/).