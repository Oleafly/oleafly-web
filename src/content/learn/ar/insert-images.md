---

title: "إسقاط في الشكل"
description: "Graphicx، العرض، المسارات، PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# إسقاط في الشكل

لا يحتوي LaTeX على دعم مدمج للصور. كل ذلك يأتي من الحزمة `graphicx`، التي توفر الأمر ``includegraphics`، وبموجب التقليد يتم تغليف الصورة في بيئة `figure` بحيث يمكن أن تحمل تسمية توضيحية ورقمًا. هذا هو النمط الذي ستستخدمه مئات المرات:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## ماذا يفعل كل سطر

يظهر السطر `\usepackage{graphicx}` في المقدمة، قبل `\begin{document}`، ويجب أن يظهر مرة واحدة فقط بغض النظر عن عدد الصور التي تقوم بتضمينها.

بيئة "الشكل" تجعل الصورة عائمة، مما يعني أن LaTeX تختار مكان هبوطها بدلاً من تثبيتها في هذا المكان المحدد في النص. الحروف `[htbp]` هي تفضيلات المواضع الخاصة بك: `h` يعني هنا حيث يظهر الرمز، `t` يعني أعلى الصفحة، `b` يعني أسفل الصفحة، و`p` يعني صفحة منفصلة من العوامات. يقوم LaTeX بتجربتها بهذا الترتيب ويأخذ أول صفحة تنتج صفحة لائقة. إذا انجرف الشكل الخاص بك إلى مكان ما بشكل مفاجئ، فهذا هو سلوك الطفو الطبيعي، و[أين تهبط العوامات فعليًا](/learn/position-figures/) يشرح كيفية التعامل معها.

يقوم `\centering` بتوسيط الصورة أفقيًا داخل كتلة النص. يقوم `width=0.8\textwidth` بقياس الصورة إلى 80 بالمائة من عرض النص مع الحفاظ على نسبة العرض إلى الارتفاع، والتي تكون دائمًا أفضل من تحديد الحجم المطلق بالسنتيمتر، لأنها تتكيف إذا تغيرت هوامش المستند. يرتبط مسار الملف بجذر المشروع، لذا فإن "Figs/pipeline.pdf" يعني مجلد "Figs" بجوار ملف ".tex" الرئيسي. أخيرًا، يطبع `\caption` التسمية التوضيحية المرقمة ويسجل `\label` الرقم حتى يتمكن `\ref{fig:pipeline}` من الاستشهاد به من النص. يجب أن يأتي التصنيف بعد التسمية التوضيحية، وذلك للأسباب الموضحة في [captions and labels](/learn/captions-labels/).

## ما هو تنسيق الملف الذي يجب استخدامه

تفضل ملف PDF لأي شيء متجه، أي المخططات والرسوم البيانية والمخططات الانسيابية، لأن الرسومات المتجهة تظل واضحة عند أي تكبير/تصغير وأي حجم طباعة. استخدم PNG لالتقاط لقطات الشاشة والصور الأخرى المستندة إلى البكسل. يعد JPG مقبولًا للصور الفوتوغرافية، حيث تكون عناصر الضغط غير مرئية. تجنب تضمين محتوى كثيف النص كلقطات شاشة على الإطلاق، نظرًا لأنه غير واضح في الطباعة ولا يمكن البحث فيه.

قم أيضًا بتغيير حجم الصور الكبيرة قبل تضمينها. تعمل الصورة بدقة 12 ميجابكسل المعروضة بعرض 8 سم على تضخيم ملف PDF وإبطاء كل عملية تجميع، في حين أن النسخة التي تم تصغير حجمها إلى ما يقرب من 300 نقطة في البوصة بحجمها المطبوع تبدو متطابقة.

## الخطأ الذي يجب تجنبه

لا تحارب الطفو في اليوم الأول بالمطالبة بـ `[h]` وحده. غالبًا ما يرفض LaTeX، ثم يحمل الشكل وكل شيء خلفه حتى نهاية الفصل. اكتب `[htbp]`، ثم ضع رمز الشكل بالقرب من الفقرة التي تشير إليه أولاً، واترك الأرقام والمراجع تقوم بالتتبع نيابةً عنك.