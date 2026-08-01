---

title: "एक कंकाल जिसे आप पुन: उपयोग कर सकते हैं"
description: "कक्षा, प्रस्तावना, मेकटाइटल, अनुभाग, ग्रंथ सूची: लगभग हर पेपर का आकार।"
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# एक कंकाल जिसे आप पुन: उपयोग कर सकते हैं

सामग्री को हटा दें और लगभग हर LaTeX दस्तावेज़ में एक ही ढांचा होता है: एक वर्ग घोषणा, सेटअप की एक प्रस्तावना, और `\begin{document}` और `\end{document}` के बीच एक निकाय। एक बार जब आप इस आकृति को जान लें, तो कंकाल को चिपकाकर, शीर्षक बदलकर और लिखकर एक नया प्रोजेक्ट शुरू करें।

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

ऊपर से नीचे तक पढ़ना: `\documentclass[11pt]{article}` दस्तावेज़ प्रकार चुनता है और आधार फ़ॉन्ट आकार को एक विकल्प के रूप में सेट करता है। डिज़ाइन में बाकी सब कुछ इस पसंद से आता है। क्लास लाइन और `\begin{document}` के बीच का क्षेत्र [प्रस्तावना](/learn/preamble-explained/) है, जहां पैकेज लोड किए जाते हैं और `\title` और `\author` जैसे मेटाडेटा संग्रहीत होते हैं। `\begin{document}` वहां चिह्नित करता है जहां दृश्य सामग्री शुरू होती है, `\maketitle` संग्रहीत शीर्षक ब्लॉक को टाइप करता है, और मुख्य भाग अनुभागों, आंकड़ों और अंततः एक ग्रंथ सूची के रूप में अनुसरण करता है। `\end{document}` दस्तावेज़ को बंद कर देता है। इसके बाद की किसी भी चीज़ को चुपचाप अनदेखा कर दिया जाता है, जिससे कभी-कभी किसी द्वारा गलत स्थान पर चिपकाए गए पाठ का एक हिस्सा छिप जाता है।

## कक्षा विकल्प

| क्लास | उपयोग करें |
| --- | --- |
| `लेख` | कागजात, होमवर्क, नोट्स |
| 'रिपोर्ट' | अध्यायों के साथ लंबी रिपोर्ट |
| 'पुस्तक' | किताबें और कई थीसिस |
| 'बीमर' | स्लाइड्स |

वर्ग दिखावटी नहीं है; यह बदलता है कि कौन से आदेश मौजूद हैं। `लेख` में कोई `\अध्याय` नहीं है, इसलिए इसमें थीसिस अध्याय चिपकाना तुरंत विफल हो जाता है। `रिपोर्ट' अध्याय जोड़ता है और शीर्षक को अपना पृष्ठ देता है। `पुस्तक` में दो तरफा मुद्रण शामिल है और दाहिनी ओर के पन्नों पर अध्याय खुलता है। `बीमर` स्लाइड के लिए फ़्रेम के चारों ओर सब कुछ पुनर्गठित करता है। पत्रिकाएँ और सम्मेलन अपनी कक्षाएँ भेजते हैं, और जब आप किसी स्थान के लिए लिखते हैं, तो उसकी कक्षा इस निर्णय को पूरी तरह से बदल देती है।

अधिकांश टूटे हुए कंकालों के लिए दो गलतियाँ जिम्मेदार हैं। `\begin{document}` से पहले रखा गया टेक्स्ट "मिसिंग \begin{document}" त्रुटि को ट्रिगर करता है, क्योंकि प्रस्तावना केवल कॉन्फ़िगर हो सकती है, कभी प्रिंट नहीं हो सकती। और एक गुम `\end{document}` कंपाइलर को फ़ाइल के अंत में इनपुट के अंत के बारे में एक अनुपयोगी संदेश के साथ प्रतीक्षा करते हुए छोड़ देता है। जब कोई भी दिखाई दे, तो सामग्री पर संदेह करने से पहले दस्तावेज़ के फ़्रेम की जांच करें।

कंकाल तराजू. चार पेज का नोट मुख्य भाग को इनलाइन रखता है; एक थीसिस प्रत्येक अध्याय को अपनी फ़ाइल में ले जाती है और उन्हें रूट से खींचती है, जैसा कि [विभाजित अध्याय फ़ाइलें] (/ सीखें/विभाजित-अध्याय-फ़ाइलें/) में दिखाया गया है। उनके चारों ओर का ढाँचा नहीं बदलता।