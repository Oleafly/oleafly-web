---

title: "आदेश या वातावरण?"
description: "मैक्रोज़ तर्क लेते हैं; वातावरण क्षेत्रों को लपेटता है।"
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# कमान या वातावरण?

सादे पाठ के अलावा आप LaTeX में जो कुछ भी टाइप करते हैं वह दो आकारों में से एक लेता है: एक कमांड या एक वातावरण। जब तक आप अपना पहला त्रुटि संदेश नहीं मारते, तब तक यह अंतर अकादमिक लगता है। LaTeX की आधी शिकायतें इस बारे में हैं कि एक का उपयोग वहीं किया जा रहा है जहां दूसरा है। यह देखना सीखना कि आप किस आकार को देख रहे हैं, दस्तावेज़ीकरण और त्रुटियों दोनों को पढ़ने योग्य बनाता है।

## आदेश

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

एक कमांड एक बैकस्लैश है जिसके बाद एक नाम आता है, और यह उस बिंदु पर एक प्रतिस्थापन करता है जहां यह दिखाई देता है। `\textbf{argument}` एक तर्क को ब्रेसिज़ में लेता है और उसे बोल्ड में टाइप करता है; प्रभाव ब्रेसिज़ के साथ शुरू और समाप्त होता है। कमांड कई ब्रेस तर्क ले सकते हैं, और कई उनके सामने वर्गाकार कोष्ठक में एक वैकल्पिक तर्क भी स्वीकार करते हैं, जैसे `\documentclass[11pt]{article}` में।

पहली दो पंक्तियाँ दर्शाती हैं कि आदेश ऐसी चीज़ हैं जिन्हें आप बना सकते हैं। `\newcommand{\foo}{bar}` `\foo` नामक एक नए कमांड को परिभाषित करता है जिसका विस्तार टेक्स्ट `bar` है, और तब से `\foo` को कहीं भी टाइप करने पर `bar` उत्पन्न होता है। यह [कस्टम मैक्रोज़] (/ सीखें/कस्टम-कमांड/) के पीछे का तंत्र है, और यह भी है कि पैकेज कैसे काम करते हैं: एक पैकेज काफी हद तक कमांड परिभाषाओं की एक फ़ाइल है।

एक विचित्र बात जो पहले जानने लायक है: `\LaTeX` जैसा कमांड इसके बाद के स्थान को निगल जाता है, इसलिए `\LaTeX मजेदार है` शब्दों को एक साथ प्रिंट करता है। जगह बनाए रखने के लिए `\LaTeX{} is fun` या `\LaTeX\ is` लिखें।

## वातावरण

```latex
\begin{center}
 Centered block
\end{center}
```

एक वातावरण दस्तावेज़ के एक क्षेत्र को मेल खाने वाले `\begin{...}` और `\end{...}` जोड़ी के बीच लपेटता है, और इसके व्यवहार को अंदर की हर चीज़ पर लागू करता है। यहां `केंद्र` वातावरण ब्लॉक की प्रत्येक पंक्ति को केंद्र में रखता है। परिवेश को नेस्ट किया जा सकता है, बशर्ते वे खोले गए विपरीत क्रम में बंद हों, और वे तर्क भी ले सकते हैं: `\begin{tabular}{ll}` एक तालिका खोलता है और इसे एक कॉलम विनिर्देश पास करता है।

क्योंकि पर्यावरण को संतुलित होना चाहिए, वे एक विशिष्ट तरीके से विफल होते हैं। `\begin{itemize} Ended by \end{document}` जैसी त्रुटि का मतलब है कि एक वातावरण खोला गया था और कभी बंद नहीं हुआ। लुप्त `\end` ढूंढें; त्रुटि नामों वाली पंक्ति को न देखें।

## अंगूठे का नियम

यदि यह किसी क्षेत्र को स्पष्ट आरंभ और अंत के साथ कवर करता है, तो यह संभवतः एक पर्यावरण है। यदि यह एक छोटा प्रतिस्थापन या स्विच है, तो यह एक कमांड है। दोनों आकृतियाँ ओवरलैप भी होती हैं: प्रत्येक वातावरण `foo` को हुड के नीचे कमांड जोड़ी `\foo` और `\endfoo` के रूप में कार्यान्वित किया जाता है। जिन आदेशों और परिवेशों से आप सबसे अधिक मिलेंगे, उनके भ्रमण के लिए, [प्रत्येक आदेश की व्याख्या](/learn/every-command-explained/) देखें, या [लाइव खेल के मैदान](/लाइव/) में दोनों आकृतियों को आज़माएँ।