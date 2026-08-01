---

title: "الرموز اليونانية واليومية"
description: "ألفا عبر أوميغا، بالإضافة إلى المشغلين والعلاقات التي تكتبها يوميا."
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Greek letters check'
  questions:
    - prompt: 'How do you get a Greek letter like alpha in math?'
      choices:
        - 'Only Unicode works; backslash names never do.'
        - 'Write a command like $\alpha$ inside math mode.'
        - 'Use \textbf{alpha}.'
        - 'Paste HTML &alpha;.'
      answer: 'B'
      level: beginner
    - prompt: 'How do lowercase and uppercase Greek usually differ in LaTeX?'
      choices:
        - 'There is no capital Greek in math.'
        - 'They are different commands (for example \alpha vs \Gamma).'
        - 'Capitals only work in beamer.'
        - 'Uppercase always needs $$.'
      answer: 'B'
      explanation: 'Plenty of capitals have their own names (\Gamma, \Delta, \Omega). A few just look like Latin letters.'
      level: beginner
    - prompt: 'Where do Greek-letter commands belong?'
      choices:
        - 'Only in the preamble'
        - 'In math mode (inline or display)'
        - 'Only inside \caption'
        - 'Only in the .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'Why load amssymb or amsfonts when you''re writing Greek and relations?'
      choices:
        - 'For color photos'
        - 'Extra symbol fonts and common math symbols that go with the Greek set'
        - 'To replace \section'
        - 'So you only compile once'
      answer: 'B'
      level: beginner
---

# الرموز اليونانية واليومية

معظم الرموز التي تكتبها يوميًا هي أحرف يونانية بالإضافة إلى عدد قليل من العوامل والعلاقات. تعمل جميعها بنفس الطريقة: شرطة مائلة عكسية بالإضافة إلى اسم الرمز، فقط في وضع الرياضيات. هذه الصفحة هي المجموعة اليومية. [ورقة رموز الرياضيات](/learn/math-symbols-cheatsheet/) هي المرجع الكامل.

## اليونانية (وضع الرياضيات)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

يعطي الأمر الصغير الحرف الصغير: `\alpha`، `\beta`، `\gamma`. قم بكتابة الحرف الأول من الأمر بالأحرف الكبيرة: `\Gamma`، `\Delta`، `\Omega`. لا يوجد كل رأس مال كأمر، لأن بعض العواصم اليونانية مطابقة للأحرف اللاتينية. ألفا الكبيرة هي A فقط، لذا لا يوجد `\Alpha`. الشيء نفسه ينطبق على بيتا، إبسيلون، والعديد من الآخرين. اكتب الحرف اللاتيني بدلاً من ذلك.

تحتوي بعض الأحرف على أشكال مختلفة ببادئة `var`. `\epsilon` هو الشكل الهلالي و`\varepsilon` هو الشكل المجعد. تختلف `\theta` و`\vartheta`، و`\phi` و`\varphi`، و`\rho` و`\varrho` بنفس الطريقة. ولا يوجد أي من النموذجين أكثر صحة. اختر ما يفضله مجالك واستخدمه باستمرار من خلال المستند.

كل هذه أوامر في الوضع الرياضي، لذا تتم كتابة الحرف اليوناني في النص الجاري `$\alpha$`. يؤدي وجود `\alpha` في النص إلى إيقاف الترجمة مع الخطأ المغطى في [تم إدراج دولار مفقود](/learn/missing-dollar/).

## المشغلين والعلاقات اليومية

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

السطر الأول هو الحساب والمقارنة: `\pm` لعلامة الجمع، و`\cdot` لنقطة الضرب، و`\times` للتقاطع، و`\div` للقسمة، ثم `\leq`، و`\geq`، و`\neq` للمقارنات، و`\approx` للمساواة التقريبية، و`\equiv` للهوية أو التطابق. السطر الثاني هو لغة التعيين: `\in` للعضوية، و`\subset` و`\subseteq` للاحتواء، و`\cup` و`\cap` للاتحاد والتقاطع، و`\emptyset` للمجموعة الفارغة. ويغطي الجزء الثالث الأسهم والتحليل: `\to` للسهم العادي في الحدود وأنواع الوظائف، و`\mapsto` للمكان الذي يذهب إليه العنصر، و`\Rightarrow` للتضمين، و`\infty` لللانهاية، و`\partial` و `\nabla` للمشتقات الجزئية والتدرجات، والتي تحصل على معالجة كاملة في [المشتقات والتكاملات](/learn/derivatives-integrals/).

التباعد حول كل هذه الأمور تلقائي. يعرف LaTeX أن `\leq` عبارة عن علاقة و`\cup` هي عملية ثنائية، ويقوم بمسافات كل منها وفقًا لذلك، وهذا سبب وجيه لاستخدام الأوامر بدلاً من لصق رموز Unicode. يتم استيعاب الأسماء بشكل أسرع من خلال كتابة بعض الصيغ في [الملعب المباشر](/live/) ومشاهدتها وهي تظهر.