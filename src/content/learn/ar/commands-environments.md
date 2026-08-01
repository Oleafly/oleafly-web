---

title: "القيادة أم البيئة؟"
description: "وحدات الماكرو تأخذ الحجج. بيئات التفاف المناطق."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# القيادة أم البيئة؟

كل ما تكتبه في LaTeX بخلاف النص العادي يأخذ أحد الشكلين: أمر أو بيئة. يبدو التمييز أكاديميًا حتى تصل إلى رسالة الخطأ الأولى. نصف شكاوى LaTeX تتعلق باستخدام أحدهما حيث ينتمي الآخر. إن التعرف على الشكل الذي تنظر إليه يجعل كلاً من الوثائق والأخطاء قابلة للقراءة.

##الأوامر

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

الأمر عبارة عن شرطة مائلة عكسية متبوعة باسم، ويقوم بإجراء استبدال عند النقطة التي يظهر فيها. `\textbf{argument}` يأخذ وسيطة واحدة بين قوسين ويطبعها بالخط العريض؛ يبدأ التأثير وينتهي بالتقويم. يمكن أن تأخذ الأوامر عدة وسيطات بين قوسين، ويقبل العديد منها أيضًا وسيطة اختيارية بين قوسين مربعين قبلها، كما في `\documentclass[11pt]{article}`.

يوضح السطران الأولان أن الأوامر هي شيء يمكنك إنشاؤه. يعرّف `\newcommand{\foo}{bar}` أمرًا جديدًا يسمى `\foo` والذي يكون امتداده عبارة عن النص `bar`، ومنذ ذلك الحين فصاعدًا، تؤدي كتابة `\foo` في أي مكان إلى ظهور `bar`. هذه هي الآلية وراء [وحدات الماكرو المخصصة](/learn/custom-commands/)، وهي أيضًا كيفية عمل الحزم: الحزمة هي إلى حد كبير ملف تعريفات الأوامر.

هناك أمر غريب يستحق المعرفة مبكرًا: أمر مثل `\LaTeX` يبتلع المسافة بعده، لذا فإن `\LaTeX is fun` يطبع الكلمات معًا. اكتب `\LaTeX{} ممتع` أو `\LaTeX\ is` للاحتفاظ بالمساحة.

## البيئات

```latex
\begin{center}
 Centered block
\end{center}
```

تقوم البيئة بتغليف منطقة من المستند بين زوج متطابق `\begin{...}` و`\end{...}`، وتطبق سلوكها على كل شيء بداخلها. هنا تقوم البيئة "المركزية" بتوسيط كل سطر من الكتلة. يمكن أن تكون البيئات متداخلة، بشرط أن يتم إغلاقها بالترتيب العكسي لفتحها، ويمكنها قبول الوسائط أيضًا: `\begin{tabular}{ll}` يفتح جدولًا ويمرر إليه مواصفات العمود.

ولأن البيئات يجب أن تكون متوازنة، فإنها تفشل بطريقة مميزة. خطأ مثل `\begin{itemize} منتهٍ بـ \end{document}` يعني أنه تم فتح بيئة ولم يتم إغلاقها مطلقًا. ابحث عن `\end`; لا تحدق في سطر أسماء الأخطاء.

## القاعدة العامة

فإذا غلف منطقة ما ببداية ونهاية واضحتين، فمن المحتمل أن تكون بيئة. إذا كان استبدالًا صغيرًا أو تبديلًا، فهو أمر. يتداخل الشكلان أيضًا: يتم تنفيذ كل بيئة `foo` كزوج أوامر `\foo` و`\endfoo` تحت الغطاء. للقيام بجولة حول الأوامر والبيئات التي ستقابلها كثيرًا، راجع [كل أمر موضح](/learn/every-command-explained/)، أو جرّب كلا الشكلين في [الملعب المباشر](/live/).