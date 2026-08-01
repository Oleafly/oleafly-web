---

title: "طاولة تشبه الطاولة الورقية"
description: "جدولي، قواعد علامات التبويب، التسمية التوضيحية، التسمية."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# طاولة تشبه الطاولة الورقية

تستخدم الجداول في LaTeX بيئتين متداخلتين بوظائف مختلفة. يبني "الجدول" الداخلي شبكة من الخلايا. "الجدول" الخارجي يجعل هذه الشبكة عائمة، بحيث يمكنها حمل رقم، وتعليق، وتسمية، وبالتالي يمكن لـ LaTeX وضعها في مكان به مساحة للصفحة. أضف حزمة "booktabs" للقواعد الأفقية وستبدو النتيجة كجدول من ورقة منشورة، وليست لقطة شاشة لجدول بيانات.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## البيئة الخارجية

تسرد الوسيطة `[htbp]` المكان الذي يمكن لـ LaTeX وضع العوامات فيه: هنا في النص، أو في أعلى الصفحة، أو في الأسفل، أو على صفحة منفصلة من العوامات. إنه يحاولهم بهذا الترتيب، والموافقة على الأربعة تمنع الطاولة من الانجراف بعيدًا؛ تم شرح الآليات في [حيث تهبط العوامات فعليًا](/learn/position-figures/). يقوم `\centering` بتوسيط الشبكة أفقيًا. يقوم `\caption` بطباعة التسمية التوضيحية المرقمة، ومن خلال التسميات التوضيحية للجدول التقليدي تظهر أعلى الجدول، على عكس التسميات التوضيحية للأشكال، التي تظهر أدناه. يجب أن يأتي `\label` بعد `\caption`، لأن التصنيف يسجل أحدث رقم تم إصداره، كما هو مذكور في [captions and labels](/learn/captions-labels/). مع وضع التسمية في مكانها الصحيح، فإن `Table~\ref{tab:results}` في النص الخاص بك يطبع دائمًا الرقم الصحيح.

## الشبكة الداخلية

يعلن `{lcc}` بعد `\begin{tabular}` عن عمود واحد لكل حرف: `l` محاذاة إلى اليسار، و`c` في المنتصف، و`r` سيكون محاذاة إلى اليمين. ثلاثة أحرف تعني ثلاثة أعمدة، ويجب أن يحتوي كل صف على هذا العدد من الخلايا بالضبط. ضمن الصف، يفصل `&` الخلايا وينهي `\\` الصف. عادةً ما تتم قراءة الأعمدة النصية بشكل أفضل عندما تكون محاذية لليسار، بينما يتم عادةً توسيط الأعمدة الرقمية القصيرة.

القواعد الثلاثة تأتي من "علامات تبويب الكتب". يفتح `\toprule` الجدول، ويفصل `\midrule` صف الرأس عن البيانات، ويغلقه `\bottomrule`. تحل هذه محل الأمر `\hline` العادي وتأتي مع تباعد مضبوط بشكل صحيح أعلى وأسفل، وهو السبب الرئيسي وراء ظهور الجدول بشكل احترافي. لا توجد خطوط رأسية، ولا توجد قاعدة بين صفوف البيانات: نمط "علامات تبويب الكتب" يتجاهل كليهما عن قصد. تم توضيح السبب في [جداول ثلاثية القواعد](/learn/booktabs-beautiful/).

## ملاحظات عملية

أخطاء المبتدئين الأكثر شيوعًا هي عدم التطابق بين عدد الفواصل `&` والأعمدة المعلنة، ونسيان `\\` في نهاية الصف، وكلاهما ينتج رسائل خطأ مربكة تشير إلى السطر التالي. إذا كنت لا تفضل عد الخلايا يدويًا، فقم ببناء الشبكة بشكل مرئي باستخدام [مولد الجدول](/tools/table-generator/) والصق النتيجة في مستندك.