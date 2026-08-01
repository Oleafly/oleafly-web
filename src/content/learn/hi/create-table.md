---

title: "एक टेबल जो कागज़ की टेबल की तरह दिखती है"
description: "सारणीबद्ध, बुकटैब नियम, कैप्शन, लेबल।"
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# एक टेबल जो कागज़ की टेबल की तरह दिखती है

LaTeX में तालिकाएँ विभिन्न कार्यों के साथ दो नेस्टेड वातावरणों का उपयोग करती हैं। आंतरिक `सारणीबद्ध` कोशिकाओं का ग्रिड बनाता है। बाहरी `तालिका` उस ग्रिड को एक फ्लोट बनाती है, इसलिए इसमें एक संख्या, एक कैप्शन और एक लेबल हो सकता है, और इसलिए LaTeX इसे वहां रख सकता है जहां पृष्ठ में जगह है। क्षैतिज नियमों के लिए `बुकटैब्स` पैकेज जोड़ें और परिणाम एक प्रकाशित पेपर की तालिका जैसा दिखता है, स्प्रेडशीट स्क्रीनशॉट जैसा नहीं।

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## बाहरी वातावरण

`[htbp]` तर्क सूचीबद्ध करता है कि LaTeX फ़्लोट को कहां रख सकता है: यहां पाठ में, पृष्ठ के शीर्ष पर, नीचे, या फ़्लोट के एक अलग पृष्ठ पर। यह उन्हें उसी क्रम में आज़माता है, और चारों को प्रदान करने से तालिका दूर जाने से बचती है; यांत्रिकी को [जहां तैरती हुई वस्तुएं वास्तव में उतरती हैं] (/ सीखें/स्थिति-आंकड़े/) में समझाया गया है। `\केंद्रण` ग्रिड को क्षैतिज रूप से केन्द्रित करता है। `\caption` क्रमांकित कैप्शन को प्रिंट करता है, और परंपरा के अनुसार तालिका कैप्शन तालिका के ऊपर जाते हैं, चित्र कैप्शन के विपरीत, जो नीचे जाते हैं। `\label` को `\caption` के बाद आना चाहिए, क्योंकि एक लेबल सबसे हाल ही में जारी संख्या को रिकॉर्ड करता है, जैसा कि [कैप्शन और लेबल] (/ सीखें/कैप्शन-लेबल/) में कवर किया गया है। लेबल के स्थान पर, आपके टेक्स्ट में `Table~\ref{tab:results}` हमेशा सही संख्या प्रिंट करता है।

## आंतरिक ग्रिड

`\begin{tabular}` के बाद `{lcc}` प्रति अक्षर एक कॉलम घोषित करता है: `l` बाएँ-संरेखित है, `c` केन्द्रित है, और `r` दाएँ-संरेखित होगा। तीन अक्षरों का अर्थ है तीन स्तंभ, और प्रत्येक पंक्ति में बिल्कुल उतनी ही कोशिकाएँ होनी चाहिए। एक पंक्ति के भीतर, `&` कोशिकाओं को अलग करता है और `\\` पंक्ति को समाप्त करता है। टेक्स्ट कॉलम आमतौर पर बाईं ओर संरेखित सबसे अच्छा पढ़ा जाता है, जबकि छोटे संख्यात्मक कॉलम आमतौर पर केंद्र में होते हैं।

तीन नियम `बुकटैब` से आते हैं। `\toprule` तालिका खोलता है, `\midrule` हेडर पंक्ति को डेटा से अलग करता है, और `\bottomrule` इसे बंद कर देता है। ये सादे `\hline` कमांड को प्रतिस्थापित करते हैं और ऊपर और नीचे सही ढंग से ट्यून की गई रिक्ति के साथ आते हैं, यही कारण है कि तालिका पेशेवर रूप से सेट दिखती है। कोई लंबवत रेखाएं नहीं, और डेटा पंक्तियों के बीच कोई नियम नहीं: `बुकटैब` शैली जानबूझकर दोनों को छोड़ देती है। तर्क [तीन-नियम तालिकाओं](/learn/booktabs-beautiful/) में दिया गया है।

## व्यावहारिक नोट्स

सबसे आम शुरुआती त्रुटियां `&` विभाजक और घोषित कॉलम की संख्या के बीच बेमेल हैं, और एक पंक्ति के अंत में एक भूला हुआ `\\` है, जो दोनों अगली पंक्ति की ओर इशारा करते हुए भ्रमित करने वाले त्रुटि संदेश उत्पन्न करते हैं। यदि आप कोशिकाओं को हाथ से गिनना नहीं चाहते हैं, तो [टेबल जेनरेटर](/टूल्स/टेबल-जनरेटर/) के साथ विजुअली ग्रिड बनाएं और परिणाम को अपने दस्तावेज़ में पेस्ट करें।