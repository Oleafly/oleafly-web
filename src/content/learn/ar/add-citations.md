---

title: "من مفتاح .bib إلى الاستشهاد في النص"
description: "حلقة BibTeX المعتادة مع أوامر الاستشهاد والمراجع."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# من مفتاح .bib إلى الاستشهاد في النص

يتضمن الاستشهاد بمصدر في LaTeX جزأين: قاعدة بيانات نصية بسيطة تصف كل عمل مرة واحدة، والأمر `\cite` في مستندك الذي يشير إلى الإدخال بواسطة مفتاحه. يقوم LaTeX بترقيم الاقتباسات، وتنسيق قائمة المراجع، والحفاظ على اتساق كل شيء عند إعادة ترتيب الأقسام أو إضافة مصادر. لا تكتب أبدًا "[12]" يدويًا، ولا تقوم أبدًا بإعادة ترقيم أي شيء بنفسك.

## الأوامر الموجودة في المستند

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

يقوم `\cite{knuth84}` بإدراج العلامة في النص أينما ينتمي الاقتباس. يقوم الأمران الموجودان في الأسفل بالباقي: `\bibliographystyle{plain}` يختار كيفية تنسيق الاستشهادات والمراجع، ويقوم `\bibliography{refs}` بتسمية ملف قاعدة البيانات (بدون امتداده `.bib`) ويحدد المكان الذي يجب أن تتم طباعة قائمة المراجع فيه، عادة قبل `\end{document}` مباشرة. تظهر فقط المصادر التي تستشهد بها بالفعل في القائمة.

## الإدخال في قاعدة البيانات

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

يوجد هذا في "refs.bib"، وهو ملف منفصل بجوار "main.tex". الكلمة بعد `@` هي نوع الإدخال، و`knuth84` هي مفتاح الاقتباس، والباقي عبارة عن حقول يستخدمها النمط لإنشاء المرجع المنسق. المفتاح هو الرابط الوحيد بين الملفين، لذلك يجب أن يتطابق تمامًا مع وسيطة `\cite`، بما في ذلك الكتابة بالأحرف الكبيرة. يمكنك التحقق من قاعدة بيانات كاملة بحثًا عن الحقول المفقودة والإدخالات المشوهة باستخدام [BibTeX validator](/tools/bibtex-validator/).

## لماذا لا يكفي تجميع واحد

يتم إنشاء قائمة المراجع بواسطة برنامج منفصل. في أول تمريرة LaTeX، يكتب المستند قائمة المفاتيح المذكورة في ملف مساعد. يقوم برنامج bibtex بعد ذلك بقراءة تلك القائمة، ويسحب الإدخالات المطابقة من refs.bib، ويقوم بتنسيقها. تقوم تمريرتان LaTeX أخريان بطي النتيجة مرة أخرى وحل العلامات الموجودة في النص. يقوم Oleafly بتشغيل هذه الدورة الكاملة لك في كل عملية ترجمة. إذا قمت بالبناء يدويًا وتخطيت الخطوة الوسطى، فستظهر الاستشهادات كعلامات استفهام عريضة؛ راجع [إزالة علامات الاقتباس الغامضة](/learn/citization-question-mark/) عند حدوث ذلك.

## إلى أين أذهب من هنا

يمكن لملف `.bib` واحد أن يخدم كل ورقة تكتبها، لذلك من المفيد بنائه بعناية. يغطي [إنشاء ملف .bib يدوم](/learn/create-bibliography/) أنواع الإدخالات والحقول المطلوبة والمفاتيح التي تبقى على قيد الحياة لمدة عقد من الزمن. عندما يريد مكان ما مظهرًا مختلفًا، يمكنك تغيير سطر واحد بدلاً من أي إدخالات، كما هو موضح في [رقمي، سنة المؤلف، أنماط المجلة](/تعلم/تغيير-الاقتباس-نمط/).