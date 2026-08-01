---

title: "هيكل عظمي يمكنك إعادة استخدامه"
description: "الطبقة، الديباجة، العنوان، الأقسام، الببليوغرافيا: شكل كل ورقة تقريبًا."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# هيكل عظمي يمكنك إعادة استخدامه

قم بإزالة المحتوى وستجد أن كل مستند LaTeX تقريبًا يحتوي على نفس الهيكل: إعلان فئة، وديباجة الإعداد، ونص بين `\begin{document}` و`\end{document}`. بمجرد معرفة هذا الشكل، ابدأ مشروعًا جديدًا عن طريق لصق الهيكل العظمي وتغيير العنوان والكتابة.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

القراءة من الأعلى إلى الأسفل: `\documentclass[11pt]{article}` يختار نوع المستند ويعين حجم الخط الأساسي كخيار. كل شيء آخر في التصميم يتدفق من هذا الاختيار. المنطقة الواقعة بين سطر الفئة و`\begin{document}` هي [preamble](/learn/preamble-explained/)، حيث يتم تحميل الحزم ويتم تخزين البيانات الوصفية مثل `\title` و`\author`. يشير `\begin{document}` إلى المكان الذي يبدأ فيه المحتوى المرئي، ويقوم `\maketitle` بضبط قالب العنوان المخزن، ويتبعه النص كأقسام وأشكال وفي النهاية قائمة مراجع. `\end{document}` يغلق المستند. يتم تجاهل أي شيء بعده بصمت، مما يؤدي أحيانًا إلى إخفاء جزء من النص الذي قام شخص ما بلصقه في المكان الخطأ.

## اختيارات الصف

| فئة | استخدم |
| --- | --- |
| `مقال` | أوراق، واجبات منزلية، مذكرات |
| `تقرير` | تقارير أطول مع فصول |
| `كتاب` | كتب ورسائل عديدة |
| `متعاطي المخدرات` | الشرائح |

الطبقة ليست تجميلية. فهو يغير الأوامر الموجودة. لا تحتوي "المقالة" على "\فصل"، لذا يفشل لصق فصول الأطروحة فيها على الفور. يضيف "التقرير" الفصول ويعطي العنوان صفحته الخاصة. يفترض "الكتاب" الطباعة على الوجهين ويفتح الفصول على الصفحات اليمنى. يقوم `beamer` بإعادة هيكلة كل شيء حول إطارات الشرائح. تقوم المجلات والمؤتمرات بشحن فصولها الخاصة، وعندما تكتب لمكان ما، فإن فصله يحل محل هذا القرار بالكامل.

هناك خطأان يتسببان في معظم الهياكل العظمية المكسورة. يؤدي النص الذي تم وضعه قبل `\begin{document}` إلى ظهور الخطأ "Missing \begin{document}"، لأن المقدمة قد يتم تكوينها فقط، ولا تتم طباعتها أبدًا. والملف المفقود `\end{document}` يترك المترجم ينتظر في نهاية الملف مع رسالة غير مفيدة حول نهاية الإدخال. عند ظهور أي منهما، تحقق من إطار المستند قبل الشك في المحتوى.

موازين الهيكل العظمي. ملاحظة من أربع صفحات تبقي النص مضمنًا؛ تنقل الأطروحة كل فصل إلى ملفه الخاص وتسحبه من الجذر، كما هو موضح في [split Chapter files](/learn/split-chapter-files/). الإطار من حولهم لا يتغير.