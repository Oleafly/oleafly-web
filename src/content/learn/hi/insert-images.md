---

title: "एक आकृति में गिराओ"
description: "ग्राफ़िक्स, चौड़ाई, पथ, पीडीएफ बनाम पीएनजी।"
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

# एक आंकड़ा गिराएं

LaTeX में कोई अंतर्निहित छवि समर्थन नहीं है। यह सब `graphicx` पैकेज से आता है, जो `\ includegraphics` कमांड प्रदान करता है, और परंपरा के अनुसार छवि को `फिगर` वातावरण में लपेटा जाता है ताकि यह एक कैप्शन और एक नंबर ले जा सके। यह वह पैटर्न है जिसका आप सैकड़ों बार उपयोग करेंगे:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## प्रत्येक पंक्ति क्या करती है

`\usepackage{graphicx}` पंक्ति आपकी प्रस्तावना में, `\begin{document}` से पहले जाती है, और इसे केवल एक बार प्रदर्शित होने की आवश्यकता होती है, चाहे आप कितनी भी छवियां शामिल करें।

`फिगर' वातावरण छवि को एक फ्लोट बनाता है, जिसका अर्थ है कि LaTeX यह चुनता है कि वह पाठ में इस सटीक स्थान पर पहुंचने के बजाय कहां गिरती है। `[htbp]` अक्षर आपकी प्लेसमेंट प्राथमिकताएं हैं: `h` का अर्थ यहां है जहां कोड दिखाई देता है, `t` का अर्थ पृष्ठ के शीर्ष पर है, `b` का अर्थ पृष्ठ के नीचे है, और `p` का अर्थ फ़्लोट का एक अलग पृष्ठ है। LaTeX उन्हें उसी क्रम में आज़माता है और पहला लेता है जो एक अच्छा पृष्ठ बनाता है। यदि आपका आंकड़ा आश्चर्यजनक रूप से कहीं चला जाता है, तो यह सामान्य फ्लोट व्यवहार है, और [जहां फ्लोट वास्तव में उतरते हैं] (/ सीखें / स्थिति-आंकड़े /) बताते हैं कि इसके साथ कैसे बातचीत करनी है।

`\सेंटरिंग` छवि को टेक्स्ट ब्लॉक के भीतर क्षैतिज रूप से केन्द्रित करता है। `width=0.8\textwidth` इसके पहलू अनुपात को संरक्षित करते हुए छवि को पाठ की चौड़ाई के 80 प्रतिशत तक मापता है, जो सेंटीमीटर में पूर्ण आकार निर्दिष्ट करने से लगभग हमेशा बेहतर होता है, क्योंकि यदि दस्तावेज़ का मार्जिन बदलता है तो यह अनुकूलित हो जाता है। फ़ाइल पथ प्रोजेक्ट रूट से संबंधित है, इसलिए `figures/pipeline.pdf` का अर्थ है आपकी मुख्य .tex फ़ाइल के बगल में एक `figures` फ़ोल्डर। अंत में, `\caption` क्रमांकित कैप्शन को प्रिंट करता है और `\label` संख्या को रिकॉर्ड करता है ताकि `\ref{fig:pipeline}` इसे टेक्स्ट से उद्धृत कर सके। [कैप्शन और लेबल](/सीखें/कैप्शन-लेबल/) में शामिल कारणों के लिए, लेबल को कैप्शन के बाद आना चाहिए।

## किस फ़ाइल स्वरूप का उपयोग करना है

किसी भी वेक्टर, यानी प्लॉट, डायग्राम और फ़्लोचार्ट के लिए पीडीएफ को प्राथमिकता दें, क्योंकि वेक्टर ग्राफ़िक्स किसी भी ज़ूम और किसी भी प्रिंट आकार पर तेज़ रहते हैं। स्क्रीनशॉट और अन्य पिक्सेल-आधारित छवियों के लिए पीएनजी का उपयोग करें। JPG तस्वीरों के लिए स्वीकार्य है, जहाँ इसकी संपीड़न कलाकृतियाँ अदृश्य हैं। टेक्स्ट-भारी सामग्री को स्क्रीनशॉट के रूप में बिल्कुल भी एम्बेड करने से बचें, क्योंकि यह प्रिंट में धुंधली हो जाती है और खोजी नहीं जा सकती।

बड़ी तस्वीरों को शामिल करने से पहले उनका आकार भी बदलें। 8 सेंटीमीटर चौड़े पर प्रदर्शित 12-मेगापिक्सेल फोटो पीडीएफ को फुला देता है और हर संकलन को धीमा कर देता है, जबकि मुद्रित आकार में लगभग 300 डीपीआई तक घटा हुआ संस्करण समान दिखता है।

## भूल से बचना

अकेले `[h]` की मांग करके पहले दिन फ्लोट से न लड़ें। LaTeX अक्सर मना कर देगा, फिर आंकड़े और उसके पीछे की हर चीज़ को अध्याय के अंत तक ले जाएगा। `[htbp]` लिखें, चित्र कोड को उस पैराग्राफ के पास रखें जो पहले इसका संदर्भ देता है, और संख्याओं और संदर्भों को आपके लिए ट्रैकिंग करने दें।