---

title: "अपना पहला पीडीएफ संकलित करें"
description: "एक छोटा लेख, एक संकलन, और तीन विचार जो आपको सबसे अधिक LaTeX प्रदान करते हैं।"
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

# अपना पहला पीडीएफ संकलित करें

यदि आपने कभी केवल वर्ड या Google डॉक्स में ही लिखा है, तो LaTeX आपसे एक आदत बदलने के लिए कहता है। टाइप करते समय टेक्स्ट को फ़ॉर्मेट करने के बजाय, आप अपने दस्तावेज़ को सादे टेक्स्ट में वर्णित करते हैं और एक प्रोग्राम को इसे आपके लिए टाइप करने देते हैं। वह सादा पाठ एक `.tex` फ़ाइल में रहता है: एक साधारण पाठ फ़ाइल जिसे आप किसी भी संपादक में खोल सकते हैं, आपके शब्दों के साथ-साथ `\section{...}` जैसे आदेश जो बताते हैं कि प्रत्येक टुकड़ा *क्या है*। संकलन इस स्रोत को एक तैयार पीडीएफ में बदल देता है। एक LaTeX इंजन आपकी फ़ाइल को ऊपर से नीचे तक पढ़ता है, प्रत्येक कमांड की व्याख्या करता है, पेज तैयार करता है, और पीडीएफ लिखता है। आप कभी भी आउटपुट को सीधे फ़ॉर्मेट नहीं करते हैं. आप स्रोत को संपादित करें और फिर से संकलित करें।

## सबसे छोटा वास्तविक दस्तावेज़

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

इसे ऊपर से नीचे तक पढ़ें. `\documentclass{article}` इंजन को बताता है कि यह किस प्रकार का दस्तावेज़ है, जो फ़ॉन्ट, मार्जिन और शीर्षक शैलियों के लिए समझदार डिफ़ॉल्ट सेट करता है। `\शीर्षक`, `\लेखक`, और `\दिनांक' पंक्तियाँ केवल मेटाडेटा संग्रहीत करती हैं; अभी तक कुछ भी मुद्रित नहीं हुआ है, और `\आज` का सीधा सा मतलब है कि आप जिस भी दिन का संकलन कर रहे हैं उसकी तारीख। `\begin{document}` वह स्थान चिह्नित करता है जहां वास्तविक सामग्री शुरू होती है। `\maketitle` वह क्षण है जब संग्रहीत शीर्षक ब्लॉक पृष्ठ पर दिखाई देता है। `\अनुभाग{परिचय}` एक क्रमांकित शीर्षक प्रिंट करता है और चुपचाप इसे रिकॉर्ड करता है ताकि सामग्री की तालिका इसे बाद में ढूंढ सके। अंतिम पंक्तियाँ गणित के दो पहलू दिखाती हैं: `$...$` एक वाक्य के अंदर एक सूत्र को टाइप करता है, जबकि `\[ ... \]` इसे अपनी स्वयं की एक केंद्रित डिस्प्ले लाइन देता है।

## तीन विचार जो भाषा को आगे बढ़ाते हैं

1. कमांड बैकस्लैश से शुरू होते हैं और आमतौर पर ब्रेसिज़ में एक तर्क लेते हैं, इसलिए `\textbf{hello}` का अर्थ है "बोल्ड में टाइपसेट हैलो"।
2. वातावरण `\begin{...}` और `\end{...}` के बीच एक क्षेत्र को लपेटता है, और आपकी फ़ाइल का मुख्य भाग स्वयं एक बड़ा `दस्तावेज़` वातावरण है।
3. प्रस्तावना `\begin{document}` से पहले सबकुछ है; यह दस्तावेज़ को कॉन्फ़िगर करता है लेकिन कभी भी दृश्यमान पाठ उत्पन्न नहीं करता है।

LaTeX में लगभग बाकी सब कुछ इन तीनों पर भिन्नता है।

## इसे संकलित करें

[Oleafly](/docs/getting-started/) में, एक प्रोजेक्ट बनाएं, ऊपर दिए गए स्रोत को पेस्ट करें और संकलित करें। पीडीएफ आपके स्रोत के बगल में दिखाई देता है, और SyncTeX दोनों पक्षों को जोड़ता है: मिलान स्रोत लाइन पर जाने के लिए पीडीएफ में एक स्थान पर क्लिक करें, या इसके विपरीत। किसी प्रोजेक्ट के पहले संकलन में थोड़ा अधिक समय लग सकता है जबकि इंजन को वह मिल जाता है जिसकी उसे आवश्यकता होती है; बाद में रन तेज़ होते हैं।

उम्मीद करने लायक एक बात: देर-सबेर एक त्रुटि संदेश और एक पंक्ति संख्या के साथ संकलन विफल हो जाएगा। यह पूरी तरह से सामान्य है, और आमतौर पर इसका मतलब कमांड नाम में टाइपो त्रुटि या गुम समापन ब्रेस है। जिस रेखा पर यह इंगित करता है उसे ठीक करें और फिर से संकलित करें।

## अगला

यह देखने के लिए कि सेटअप लाइनें वास्तव में क्या करती हैं, [प्रस्तावना, समझाया गया] (/ सीखें/प्रस्तावना-समझाया/) जारी रखें, फिर सूत्रों के लिए [गणित मोड] (/ सीखें/गणित-मोड/) जारी रखें। अपना पहला वास्तविक पृष्ठ लिखते समय [चीटशीट](/सीखें/चीटशीट/) को खुला रखें।