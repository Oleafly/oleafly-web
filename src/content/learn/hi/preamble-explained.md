---

title: "उपरोक्त सभी चीज़ें प्रारंभ{दस्तावेज़}"
description: "पैकेज, मेटाडेटा और लोड ऑर्डर: प्रस्तावना में क्या शामिल है और क्या नहीं।"
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# उपरोक्त सभी चीजें शुरू होती हैं{दस्तावेज़}

`\documentclass{...}` और `\begin{document}` के बीच सब कुछ **प्रस्तावना** है। यह कोई दृश्यमान पाठ उत्पन्न नहीं करता है. यह रन को कॉन्फ़िगर करता है। फ़ॉन्ट, मार्जिन, पैकेज, कस्टम कमांड और दस्तावेज़ मेटाडेटा सभी यहां रहते हैं, यही कारण है कि एक परिपक्व पेपर की प्रस्तावना अक्सर उसके परिचय से अधिक लंबी होती है। एक बार जब आप जान जाते हैं कि प्रत्येक पंक्ति क्या करती है, तो कॉपी किया गया टेम्पलेट जादुई होना बंद हो जाता है और एक चेकलिस्ट बन जाता है।

## शरीर रचना

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

`\documentclass` पर विकल्प वैश्विक डिफ़ॉल्ट सेट करते हैं: `11pt` आधार फ़ॉन्ट आकार है जिसे बाकी सभी चीज़ों से मापा जाता है, और `a4paper` पेपर आकार घोषित करता है। दो एन्कोडिंग लाइनें ऐतिहासिक साथी हैं: `inputenc` इंजन को बताता है कि आपकी स्रोत फ़ाइल UTF-8 है, और `fontenc` फ़ॉन्ट एन्कोडिंग का चयन करता है ताकि उच्चारण किए गए वर्ण कंपोजिट के बजाय वास्तविक ग्लिफ़ हों। वर्तमान LaTeX पहले से ही UTF-8 इनपुट मानता है, इसलिए आप नए दस्तावेज़ों में इन पंक्तियों को हटा हुआ देखेंगे, लेकिन वे हानिरहित हैं और टेम्पलेट उन्हें संगतता के लिए रखते हैं।

मध्य ब्लॉक क्षमता पैकेज लोड करता है। [ज्यामिति](/learn/margins-geometry/) एक विकल्प में मार्जिन सेट करता है, `amsmath` और `amssymb` लगभग हर तकनीकी दस्तावेज़ की आवश्यकता के लिए गणित वातावरण और प्रतीक प्रदान करता है, `graphicx` आंकड़ों के लिए `\includegraphics` को सक्षम करता है, और `booktabs` नियम प्रदान करता है जो तालिकाओं को पेशेवर बनाते हैं। अंत में, [hyperref](/learn/hyperlinks/) संदर्भों और उद्धरणों को क्लिक करने योग्य बनाता है और जानबूझकर अंतिम रूप से लोड किया जाता है, क्योंकि यह कई अन्य पैकेजों के आंतरिक को फिर से परिभाषित करता है।

`\शीर्षक`, `\लेखक`, और `\दिनांक' पंक्तियाँ केवल मेटाडेटा संग्रहीत करती हैं। जब तक `\maketitle` मुख्य भाग में नहीं चलता तब तक कुछ भी प्रिंट नहीं होता है, यही कारण है कि ये प्रस्तावना में बिल्कुल भी बैठ सकते हैं।

## अंगूठे के नियम

कुछ आदतें प्रस्तावना को स्वस्थ रखती हैं। प्रति कार्य एक पैकेज लोड करें और एक ही क्षेत्र में लड़ने वाले स्टैकिंग पैकेजों का विरोध करें, जैसे मार्जिन सेट करने के दो तरीके। हाइपररेफ़ को अंत में रखें, क्लेवेरेफ़ जैसे कुछ प्रलेखित अपवादों के साथ जो इसके बाद आने चाहिए। क्लास विकल्पों में दस्तावेज़-व्यापी विकल्पों को बिखेरने के बजाय रखें, ताकि `11pt` या `twocolumn` एक बार घोषित हो जाए जहाँ कोई भी इसे देख सके। और एक बार जब आपके [कस्टम मैक्रोज़](/learn/custom-commands/) में कुछ पंक्तियाँ बढ़ जाती हैं, तो उन्हें `.sty` फ़ाइल में ले जाएँ ताकि कई दस्तावेज़ परिभाषाओं के एक सेट को साझा कर सकें।

सबसे उपयोगी अनुशासन नकारात्मक है: यदि आप नहीं जानते कि प्रस्तावना पंक्ति क्यों है, तो इससे पहले कि आपका दस्तावेज़ इस पर निर्भर हो, पता कर लें। कॉपी की गई प्रस्तावनाएँ मृत रेखाएँ जमा करती हैं, और मृत रेखाएँ वह जगह हैं जहाँ पैकेज संघर्ष छिपते हैं। [दस्तावेज़ कंकाल](/सीखें/दस्तावेज़-कंकाल/) और [इंजन की तुलना](/सीखें/इंजन-तुलना/) को भी देखें।