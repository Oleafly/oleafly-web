---

title: "الرقمية، سنة المؤلف، أنماط المجلة"
description: "مبادلة الأنماط دون إعادة كتابة قاعدة البيانات."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# أنماط رقمية، سنة المؤلف، المجلة

يتحكم نمط الاقتباس في شيئين: الشكل الذي تبدو عليه علامة النص، مثل `[12]` مقابل `(Knuth, 1984)`، وكيفية تنسيق كل إدخال في قائمة المراجع. والخبر السار هو أن النمط منفصل تمامًا عن قاعدة بيانات `.bib` الخاصة بك. يمكنك تبديل الورقة من سنة رقمية إلى سنة المؤلف، أو إعادة تنسيقها لمجلة مختلفة، عن طريق تغيير سطر واحد في المقدمة. تبقى إدخالاتك كما هي.

## تغيير النمط مع BibTeX الكلاسيكي

مع BibTeX، يوجد النمط في الأمر `\bibliographystyle{...}`، الذي يقوم بتسمية الملف `.bst`. قم بتبديل الوسيطة وإعادة الترجمة:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

عادةً ما تقوم المجلات والمؤتمرات بإرسال ملف `.bst` الخاص بها، على سبيل المثال `IEEEtran.bst` أو `ACM-Reference-Format.bst`. ضع هذا الملف بجوار ملف "main.tex" وقم بتسميته باسم "\bibliographystyle". لاحظ أن `.bst` يخبز في نظرة واحدة؛ إذا كان المكان يريد استشهادات سنة المؤلف، فأنت بحاجة أيضًا إلى حزمة `natbib` للحصول على أوامر مثل `\citep` و`\citet`.

## تغيير الأسلوب مع بيبلاتكس

مع biblatex، يعد النمط خيارًا على العبوة نفسها:

```latex
\usepackage[style=authoryear]{biblatex}
```

القيم الشائعة الأخرى هي `style=numeric` و`style=numeric-comp` للنطاقات المضغوطة مثل `[3-6]` و`style=alphabetic` و`style=apa` أو `style=ieee` من حزم الوظائف الإضافية. نظرًا لأن أنماط biblatex مكتوبة بلغة LaTeX بدلاً من لغة `.bst` القديمة، فمن الأسهل تعديلها، على سبيل المثال تغيير علامات الترقيم أو إسقاط عناوين URL.

## إعادة الترجمة بشكل صحيح بعد التبديل

بعد أي تغيير في النمط، تظل الملفات المساعدة القديمة تحتوي على بيانات منسقة بالنمط السابق، لذا قم بتشغيل دورة كاملة: قم بالتجميع مرة واحدة، وقم بتشغيل الواجهة الخلفية (`bibtex` لـ BibTeX الكلاسيكي، و`biber` لـ biblatex)، ثم قم بالتجميع مرتين أكثر حتى يتم تسوية المراجع الترافقية. يقوم Oleafly بتشغيل هذه الدورة نيابةً عنك، ولكن إذا بدت الاستشهادات قديمة بعد التبديل اليدوي، فإن حذف الملفات `.aux` و`.bbl` وإعادة البناء من الصفر يؤدي إلى مسحها.

## ما هي العائلة التي يجب أن تستخدمها؟

إذا كان المكان المستهدف يوفر ملف `.bst` أو فئة تتوقع BibTeX، فاستخدم BibTeX الكلاسيكي؛ ولا يزال هذا هو الوضع في معظم المجلات. إذا كنت تتحكم في التنسيق بنفسك، كما هو الحال في الأطروحة أو النسخة الأولية، فإن biblatex هو الخيار الأكثر قدرة. تمت تغطية المفاضلات في [Classic BibTeX أو biblatex](/learn/bibtex-vs-biblatex/)، والاختلافات في الأوامر في [عادات natbib مقابل أوامر biblatex](/learn/natbib-vs-biblatex/).