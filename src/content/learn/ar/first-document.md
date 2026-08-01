---

title: "قم بتجميع ملف PDF الأول الخاص بك"
description: "مقالة صغيرة، وتجميع واحد، والأفكار الثلاثة التي ستمنحك أقصى استفادة من LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# قم بتجميع ملف PDF الأول الخاص بك

إذا كنت قد كتبت فقط في Word أو Google Docs، فإن LaTeX يطلب منك تغيير عادة واحدة. بدلاً من تنسيق النص أثناء الكتابة، يمكنك وصف المستند الخاص بك بنص عادي والسماح لبرنامج ما بكتابته نيابةً عنك. يوجد هذا النص العادي في ملف `.tex`: وهو ملف نصي عادي يمكنك فتحه في أي محرر، مع كلماتك بالإضافة إلى أوامر مثل `\section{...}` التي توضح ماهية كل قطعة ***. يؤدي التجميع إلى تحويل هذا المصدر إلى ملف PDF نهائي. يقرأ محرك LaTeX ملفك من الأعلى إلى الأسفل، ويفسر كل أمر، ويحدد الصفحات، ويكتب ملف PDF. لا تقم أبدًا بتنسيق الإخراج مباشرة. يمكنك تحرير المصدر وتجميعه مرة أخرى.

## أصغر وثيقة حقيقية

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

اقرأها من الأعلى إلى الأسفل. `\documentclass{article}` يخبر المحرك بنوع هذا المستند، مما يحدد الإعدادات الافتراضية المعقولة للخطوط والهوامش وأنماط العناوين. تقوم أسطر `\title` و`\author` و`\date` بتخزين البيانات الوصفية فقط؛ لم تتم طباعة أي شيء بعد، و"\اليوم" يعني ببساطة تاريخ أي يوم تقوم بتجميعه. `\begin{document}` يشير إلى المكان الذي يبدأ فيه المحتوى الفعلي. `\maketitle` هي اللحظة التي تظهر فيها كتلة العنوان المخزنة على الصفحة. `\section{Introduction}` يطبع عنوانًا مرقّمًا ويسجله بهدوء حتى يتمكن جدول المحتويات من العثور عليه لاحقًا. يُظهر السطر الأخير وجهين للرياضيات: `$...$` يطبع صيغة داخل جملة، بينما يمنحها `\[ ... \]` خط عرض مركزي خاص به.

##ثلاثة أفكار تحمل اللغة

1. تبدأ الأوامر بشرطة مائلة عكسية وعادةً ما تأخذ وسيطة بين قوسين، لذا فإن `\textbf{hello}` تعني "مجموعة الكتابة بالخط العريض".
2. تغطي البيئات منطقة بين `\begin{...}` و`\end{...}`، ويكون نص ملفك في حد ذاته بيئة ``مستند`` كبيرة واحدة.
3. الديباجة هي كل ما قبل `\begin{document}`; يقوم بتكوين المستند ولكنه لا ينتج نصًا مرئيًا أبدًا.

كل شيء آخر تقريبًا في LaTeX هو اختلاف عن هؤلاء الثلاثة.

## تجميعها

في [Oleafly](/docs/getting-started/)، قم بإنشاء مشروع، ثم الصق المصدر أعلاه، ثم قم بالتجميع. يظهر ملف PDF بجوار المصدر الخاص بك، ويقوم SyncTeX بربط الجانبين: انقر فوق نقطة في ملف PDF للانتقال إلى سطر المصدر المطابق، أو العكس. يمكن أن يستغرق التجميع الأول للمشروع وقتًا أطول قليلاً بينما يقوم المحرك بجلب ما يحتاج إليه؛ عمليات التشغيل اللاحقة تكون أسرع.

شيء واحد يمكن توقعه: عاجلاً أم آجلاً سوف تفشل عملية الترجمة مع ظهور رسالة خطأ ورقم السطر. وهذا أمر طبيعي تمامًا، ويعني عادةً خطأ مطبعي في اسم الأمر أو قوس إغلاق مفقود. قم بإصلاح الخط الذي يشير إليه وقم بتجميعه مرة أخرى.

## التالي

تابع مع [الديباجة، الموضحة](/learn/preamble-explained/) لترى ما تفعله سطور الإعداد فعليًا، ثم [وضع الرياضيات](/learn/math-mode/) للصيغ. أبقِ [ورقة الغش](/learn/cheatsheet/) مفتوحة أثناء كتابة صفحتك الحقيقية الأولى.