---

title: "النسب المكدسة التي تظل قابلة للقراءة"
description: "فارك، dfrac، tfrac، والكسور المستمرة مع أمسماث."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# نسب مكدسة تبقى قابلة للقراءة

الكسور هي المكان الأول الذي تتفوق فيه مخرجات LaTeX بشكل واضح على معالج النصوص: بسط ومقام مكدس حقيقي مع قاعدة بينهما، بحجم يناسب الرياضيات المحيطة. الأمر الأساسي هو `\frac`. ما يهم هو كيف يتغير حجمه مع السياق، وكيفية تجاوز ذلك عندما يضر الاختيار التلقائي بسهولة القراءة.

## فارك، دفراك، تفراك

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` يأخذ وسيطتين بين قوسين، البسط أولًا، والمقام ثانيًا، ويصنفهما مكدسين فوق قاعدة أفقية. حجمها حساس للسياق. في عرض الرياضيات (داخل `\[ ... \]` أو بيئة `المعادلة`) يتم تعيين الكسر بالحجم الكامل. في الرياضيات المضمنة (داخل `$ ... $`) يتم تعيينها بشكل أصغر وأكثر إحكاما، لذلك لا تفصل بين أسطر الفقرة.

في بعض الأحيان تريد تجاوز ذلك. يفرض `\dfrac`، من `amsmath`، أسلوب العرض: وهو كسر مكدس بالحجم الكامل حتى في منتصف الجملة. استخدمه بشكل مقتصد، لأن الكسر الطويل في السطر يؤدي إلى تمديد تباعد الأسطر حوله. `\tfrac` هو العكس: فهو يفرض نمط النص الصغير حتى في رياضيات العرض، وهو مفيد للمعاملات البسيطة مثل النصف أمام تعبير كبير، حيث قد يجذب المكدس بالحجم الكامل الكثير من الاهتمام.

يمكن أن تحتوي كلتا الوسيطتين على عمليات حسابية عشوائية، بما في ذلك الكسور الأخرى: `\frac{1}{1 + \frac{1}{x}}`، ويقوم LaTeX بتقليص الكسر الداخلي تلقائيًا. عندما يصبح التعشيش عميقًا، هناك أداة أفضل.

## الكسور المستمرة

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

تتقلص وحدات frac المتداخلة عند كل مستوى، لذلك بحلول الطابق الثالث من الكسر المستمر، تكون الأرقام بالكاد مقروءة. يحافظ `\cfrac`، وهو أيضًا من `amsmath`، على كل مستوى بحجم العرض الكامل ويحاذي البسط، وهي الطريقة المقبولة لتنضيد الكسور المستمرة. يمكنك تمرير موضع اختياري، `\cfrac[l]{1}{...}`، لدفع البسط إلى اليسار بدلاً من توسيطه.

##حكم عملي

تتطلب كل من `\dfrac`، و`\tfrac`، و`\cfrac` وجود `\usepackage{amsmath}` في المقدمة؛ عادي `\frac` يعمل بدونه. إذا حصلت على "تسلسل تحكم غير محدد" على `\dfrac`، فإن سطر الحزمة مفقود.

بالنسبة للنص المضمن، في بعض الأحيان يكون النموذج المائل أكثر قابلية للقراءة من الكسر المكدس: الكتابة `(a/b)` أو `a/b` تحافظ على ارتفاع السطر متساويًا وتقرأ بشكل جيد بالنسبة للنسب البسيطة. القاعدة الأساسية الجيدة هي تكديس الكسور في عرض الرياضيات، حيث توجد مساحة رأسية، وتفضيل الشرطة المائلة في السطر ما لم يكن الكسر هو نقطة الجملة. اكتب فقرة في كلا الاتجاهين في [الملعب المباشر](/live/) وقارن بينها؛ الفرق في تباعد الأسطر مرئي على الفور. إذا كانت المحددات الرياضية مثل `$` و`\[` لا تزال غير مألوفة، فابدأ بـ [أساسيات وضع الرياضيات](/learn/math-mode/).