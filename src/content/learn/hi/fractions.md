---

title: "स्टैक्ड अनुपात जो पठनीय रहते हैं"
description: "फ़्रेक, फ़्रैक, tफ़्रैक, और एम्समैथ के साथ निरंतर भिन्न।"
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

# स्टैक्ड अनुपात जो पठनीय रहते हैं

भिन्न वह पहला स्थान है जहां LaTeX आउटपुट स्पष्ट रूप से एक वर्ड प्रोसेसर को मात देता है: एक वास्तविक स्टैक्ड अंश और हर, जिनके बीच एक नियम होता है, जो आसपास के गणित में फिट होने के लिए आकार का होता है। मुख्य कमांड `\frac` है। महत्वपूर्ण बात यह है कि इसका आकार संदर्भ के साथ कैसे बदलता है, और जब स्वचालित चयन पठनीयता को नुकसान पहुँचाता है तो उसे कैसे ओवरराइड किया जाए।

## फ़्रेक, फ़्रेक, फ़्रैक

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` दो ब्रेस्ड तर्क लेता है, अंश पहले, हर दूसरा, और उन्हें एक क्षैतिज नियम पर टाइप करता है। इसका आकार संदर्भ-संवेदनशील है. प्रदर्शन गणित में (`\[ ... \]` या `समीकरण` वातावरण के अंदर) अंश को पूर्ण आकार में सेट किया जाता है। इनलाइन गणित में (`$ ... $` के अंदर) इसे छोटा और अधिक कॉम्पैक्ट सेट किया जाता है, इसलिए यह पैराग्राफ की पंक्तियों को अलग नहीं करता है।

कभी-कभी आप उससे आगे निकलना चाहते हैं। `\dfrac`, `amsmath` से, बल प्रदर्शन शैली: एक वाक्य के बीच में भी एक पूर्ण आकार का स्टैक्ड अंश। इसे संयम से उपयोग करें, क्योंकि एक लंबा अंश इनलाइन इसके चारों ओर लाइन स्पेस को फैलाता है। `\tfrac` इसके विपरीत है: यह प्रदर्शन गणित में भी छोटी पाठ शैली को बाध्य करता है, जो एक बड़ी अभिव्यक्ति के सामने एक आधे जैसे सरल गुणांक के लिए उपयोगी है, जहां एक पूर्ण आकार का स्टैक बहुत अधिक ध्यान आकर्षित करेगा।

दोनों तर्क मनमाने ढंग से गणित कर सकते हैं, जिसमें अन्य अंश भी शामिल हैं: `\frac{1}{1 + \frac{1}{x}}` नेस्ट, और LaTeX स्वचालित रूप से आंतरिक अंश को सिकोड़ता है। हालाँकि, जब घोंसला गहरा हो जाता है, तो एक बेहतर उपकरण होता है।

## निरंतर भिन्न

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

प्रत्येक स्तर पर नेस्टेड `\frac` सिकुड़ता है, इसलिए निरंतर अंश की तीसरी मंजिल तक अंक मुश्किल से सुपाठ्य होते हैं। `\cfrac`, `amsmath` से भी, हर स्तर को पूर्ण प्रदर्शन आकार पर रखता है और अंशों को संरेखित करता है, जो निरंतर भिन्नों को टाइप करने का स्वीकृत तरीका है। आप एक अंश को केन्द्रित करने के बजाय बाईं ओर धकेलने के लिए एक वैकल्पिक स्थिति, `\cfrac[l]{1}{...}` पास कर सकते हैं।

## व्यावहारिक निर्णय

सभी `\dfrac`, `\tfrac`, और `\cfrac` को प्रस्तावना में `\usepackage{amsmath}` की आवश्यकता होती है; सादा `\frac` इसके बिना काम करता है। यदि आपको `\dfrac` पर "अपरिभाषित नियंत्रण अनुक्रम" मिलता है, तो पैकेज लाइन गायब है।

इनलाइन टेक्स्ट के लिए, कभी-कभी एक कटा हुआ फॉर्म स्टैक्ड अंश की तुलना में अधिक पठनीय होता है: `(ए/बी)` या `ए/बी` लिखने से लाइन की ऊंचाई समान रहती है और सरल अनुपात के लिए ठीक पढ़ा जाता है। अंगूठे का एक अच्छा नियम प्रदर्शन गणित में भिन्नों को ढेर करना है, जहां ऊर्ध्वाधर कमरा है, और स्लैश इनलाइन को प्राथमिकता दें जब तक कि अंश वाक्य का बिंदु न हो। [लाइव खेल का मैदान](/लाइव/) में दोनों तरह से एक पैराग्राफ टाइप करें और तुलना करें; लाइन स्पेसिंग में अंतर तुरंत दिखाई देता है। यदि `$` और `\[` जैसे गणित सीमांकक अभी भी अपरिचित हैं, तो [गणित मोड मूल बातें] (/ सीखें/गणित-मोड/) से शुरू करें।