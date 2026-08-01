---

title: "الرياضيات التي تقع في جملة (أو وحدها)"
description: "الرياضيات المضمنة، وعرض الرياضيات، وبيئات المعادلات، ومتى يستحق الترقيم ذلك."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# الرياضيات الموجودة في جملة (أو بمفردها)

يتعامل LaTeX مع الرياضيات كوضع منفصل له خطوطه وقواعد التباعد الخاصة به. يجب أن يعيش كل متغير وصيغة ورمز داخل الوضع الرياضي، سواء كان حرف n وحيدًا في جملة أو معادلة كاملة. هناك نوعان: الرياضيات المضمنة تتدفق داخل الفقرة، وعرض الرياضيات يتم وضعها في وسط السطر الخاص بها، مع أو بدون رقم.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## الرياضيات المضمنة

يقوم زوج من علامات الدولار، كما في `$E=mc^2$`، بتعيين الصيغة بحجم النص داخل السطر. تظهر الحروف بخط رياضي مائل ويتم التعامل مع التباعد حول علامة التساوي نيابةً عنك. `\(E=mc^2\)` هو النموذج الأصلي المكافئ لـ LaTeX. إنه ينتج مخرجات متطابقة، ونظرًا لاختلاف محددات الفتح والإغلاق، فإن المحدد غير المغلق يعطي رسالة خطأ أكثر وضوحًا. استخدم الرياضيات المضمنة حتى لاسم متغير واحد، بحيث يتطابق n في نثرك مع n في معادلاتك.

## عرض الرياضيات

`\[ ... \]` يضع الصيغة على خط المنتصف الخاص بها بدون رقم. إنه الاختيار الصحيح للمعادلات الفردية التي لا يمكنك الرجوع إليها أبدًا. تجنب النموذج `$$ ... $$` القديم. إنه TeX عادي بدلاً من LaTeX وينتج تباعدًا رأسيًا خاطئًا بعض الشيء في بعض المواقف.

## المعادلات المرقمة

تعرض بيئة "المعادلة" الصيغة مع رقم في الهامش. يُرفق `\label{eq:energy}` اسمًا بهذا الرقم، وفي مكان آخر تكتب `Equation~\ref{eq:energy}` أو، مع تحميل `amsmath`، `\eqref{eq:energy}`، الذي يضيف الأقواس نفسها. إن `~` عبارة عن مسافة غير منقسمة، لذا تظل الكلمة والرقم على سطر واحد. حل المراجع على الترجمة الثانية. إذا رأيت `؟؟` في المخرجات، فراجع [علامات الاستفهام بدلاً من الأرقام](/learn/equations-show-qq/).

## الحزم المراد تحميلها

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

تقريبًا كل مستند رياضي يقوم بتحميل هذه الثلاثة. يوفر `amsmath` البيئات والأوامر التي تفترضها معظم هذه الدروس، بما في ذلك `align` و`\eqref`. يضيف `amssymb` و`amsfonts` خطوط رموز وحروف أبجدية إضافية مثل `\mathbb`. ضع السطر في الديباجة مرة واحدة وانس الأمر.

الخطأ الكلاسيكي للمبتدئين هو بناء جملة الرياضيات خارج وضع الرياضيات: الشرطة السفلية في النص العادي توقف الترجمة مع "إدراج $ مفقود"، والذي يحتوي على [درس خاص به](/learn/missing-dollar/). للتعرف على الوضعين، اكتب جملة تحتوي على `$x_i$` مضمنة ونفس الصيغة داخل `\[ ... \]` في [الملعب المباشر](/live/) وقارن كيفية ظهور كل منهما على الصفحة.