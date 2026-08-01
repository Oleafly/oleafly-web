---

title: "العناوين التي ترقيم نفسها"
description: "قسم من خلال الفقرة، النماذج المميزة بنجمة، عمق secnum."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# العناوين التي ترقيم نفسها

في معالج النصوص، يمكنك ترقيم العناوين يدويًا وإعادة ترقيمها يدويًا في كل مرة تقوم فيها بنقل عنوان. يرفض LaTeX السماح لك بفعل ذلك. أنت تعلن ما هو كل عنوان، قسم أو قسم فرعي أو فصل، والترقيم يعتني بنفسه. قم بإدراج قسم جديد في منتصف المستند الخاص بك وكل شيء بعد إعادة ترقيمه في الترجمة التالية، بالإضافة إلى كل إسناد ترافقي وكل إدخال في جدول المحتويات يشير إليه.

## التسلسل الهرمي

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

تشكل هذه الأوامر سلمًا ثابتًا. `\section` هو العمود الفقري اليومي في فئة `article`، حيث يتداخل `\subsection` و`\subsection` تحته. يوجد `\chapter` فقط في فئتي `التقرير` و`الكتاب`، ولهذا السبب يفشل لصق فصول الأطروحة في قالب المقالة مع تسلسل تحكم غير محدد. يقع `\part` فوق الفصول وهو نادر خارج الكتب الطويلة. "\paragraph" هو الشيء الغريب: فهو ينتج عنوانًا جريئًا على نفس السطر مثل النص التالي بدلاً من عنوان في السطر الخاص به، وهو ما يفاجئ الجميع تقريبًا في المرة الأولى.

يأخذ كل أمر نص العنوان بين قوسين، ويطبعه بالخط والحجم الذي اختاره الفصل، ويرقمه، ويسجله حتى يتمكن `\tableofcontents` من العثور عليه لاحقًا. لا تقم مطلقًا بوضع العناوين في السطر. إذا كنت تريد خطوط عناوين مختلفة، فهذا قرار يتم اتخاذه على مستوى المستند في الديباجة.

## قمع الأرقام

تمنع النماذج المميزة بنجمة الأرقام: `\section*{Acknowledgements}`. تحافظ النجمة أيضًا على العنوان خارج جدول المحتويات وخارج تسلسل الترقيم تمامًا، لذا يستمر القسم الذي يليه كما لو أن القسم المميز بنجمة لم يكن موجودًا. هذا هو بالضبط ما تريده من شكر وتقدير، أو مقدمة، أو خاتمة مستقلة في ورقة قصيرة. إذا استمر ظهور القسم المميز بنجمة في جدول المحتويات، فهناك إصلاح من سطر واحد مذكور في [درس جدول المحتويات](/learn/table-of-contents/).

## التحكم في عمق الترقيم

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumعمق` يقرر مدى عمق الترقيم. في "المقالة"، تكون الأقسام في المستوى 1، والأقسام الفرعية في المستوى 2، والأقسام الفرعية في المستوى 3، لذا قم بتعيين العداد على رقمين للأقسام والأقسام الفرعية مع ترك عناوين الأقسام الفرعية بدون ترقيم مع الحفاظ على تنسيقها. `tocعمق` هي نفس فكرة جدول المحتويات: فهي تتحكم في مدى عمق قائمة جدول المحتويات، بشكل مستقل عما يتم ترقيمه في الصفحة. كلا السطرين ينتميان إلى الديباجة.

من الأخطاء الشائعة تخطي المستويات، على سبيل المثال القفز من `\section` مباشرة إلى `\subsection` لأنك تحب العنوان الأصغر. لا يزال الترقيم يعمل ولكنه ينتج نتائج غريبة مثل "1.0.1"، ويفقد القراء مسار البنية. اختر مستويات العناوين للمعنى ودع الفصل يتعامل مع المظهر. إذا لم تكن متأكدًا من كيفية تناسب هيكل المستند معًا، فإن [الدرس الهيكلي للمستند](/learn/document-skeleton/) يمر عبره.