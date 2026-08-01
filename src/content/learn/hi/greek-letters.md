---

title: "ग्रीक और रोजमर्रा के प्रतीक"
description: "ओमेगा के माध्यम से अल्फा, साथ ही आपके द्वारा प्रतिदिन टाइप किए जाने वाले ऑपरेटर और संबंध।"
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

# ग्रीक और रोजमर्रा के प्रतीक

आपके द्वारा प्रतिदिन टाइप किए जाने वाले अधिकांश प्रतीक ग्रीक अक्षर और कुछ मुट्ठी भर ऑपरेटर और संबंध हैं। वे सभी एक ही तरह से काम करते हैं: एक बैकस्लैश प्लस प्रतीक का नाम, केवल गणित मोड में। यह पेज दैनिक सेट है. [गणित प्रतीकों की चीटशीट](/सीखें/गणित-प्रतीकों-चीटशीट/) पूर्ण संदर्भ है।

## ग्रीक (गणित मोड)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

एक लोअरकेस कमांड लोअरकेस अक्षर देता है: `\alpha`, `\beta`, `\गामा`। बड़े अक्षरों के लिए कमांड के पहले अक्षर को बड़े अक्षरों में लिखें: `\Gamma`, `\Delta`, `\Omega`. प्रत्येक कैपिटल एक कमांड के रूप में मौजूद नहीं है, क्योंकि कुछ ग्रीक कैपिटल लैटिन अक्षरों के समान हैं। कैपिटल अल्फा सिर्फ ए है, इसलिए कोई `\अल्फा` नहीं है। यही बात बीटा, एप्सिलॉन और कई अन्य के लिए भी लागू होती है। इसके बजाय लैटिन अक्षर टाइप करें.

कुछ अक्षरों में `var` उपसर्ग के साथ भिन्न रूप होते हैं। `\epsilon` पागल रूप है और `\varepsilon` घुंघराले रूप है। `\theta` और `\vartheta`, `\phi` और `\varphi`, `\rho` और `\varrho` एक ही तरह से भिन्न हैं। कोई भी रूप अधिक सही नहीं है. जिसे आपका क्षेत्र पसंद करता है उसे चुनें और दस्तावेज़ के माध्यम से उसका लगातार उपयोग करें।

ये सभी गणित-मोड कमांड हैं, इसलिए रनिंग टेक्स्ट में एक ग्रीक अक्षर `$\alpha$` लिखा जाता है। पाठ में एक खाली `\alpha` [मिसिंग डॉलर डाला गया](/learn/missing-dollar/) में शामिल त्रुटि के साथ संकलन को रोक देता है।

## दैनिक संचालक और संबंध

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

पहली पंक्ति अंकगणित और तुलना है: प्लस-माइनस के लिए `\pm`, गुणन बिंदु के लिए `\cdot`, क्रॉस के लिए `\times`, विभाजन के लिए `\div`, फिर तुलना के लिए `\leq`, `\geq`, और `\neq`, अनुमानित समानता के लिए `\approx`, और पहचान या सर्वांगसमता के लिए `\equiv`। दूसरी पंक्ति सेट भाषा है: `\in` सदस्यता के लिए, `\subset` और `\subseteq` नियंत्रण के लिए, `\cup` और `\cap` संघ और चौराहे के लिए, और `\emptyset` खाली सेट के लिए। तीसरा तीर और विश्लेषण को कवर करता है: सीमा और फ़ंक्शन प्रकारों में एक सादे तीर के लिए `\to`, जहां एक तत्व जाता है उसके लिए `\mapsto`, निहितार्थ के लिए `\Rightarrow`, अनंत के लिए `\infty`, और आंशिक डेरिवेटिव और ग्रेडिएंट्स के लिए `\partial` और `\nabla`, जो [डेरिवेटिव और इंटीग्रल] (/ सीखें / डेरिवेटिव-इंटीग्रल /) में पूर्ण उपचार प्राप्त करते हैं।

इन सभी के चारों ओर रिक्ति स्वचालित है। LaTeX जानता है कि `\leq` एक संबंध है और `\cup` एक बाइनरी ऑपरेशन है, और यह प्रत्येक को तदनुसार स्थान देता है, जो यूनिकोड प्रतीकों को चिपकाने के बजाय कमांड का उपयोग करने का एक अच्छा कारण है। [लाइव प्लेग्राउंड](/लाइव/) में कुछ फॉर्मूले टाइप करने और उन्हें रेंडर होते देखने से नाम सबसे तेजी से सामने आते हैं।