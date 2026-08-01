---

title: ".bib कुंजी से लेकर इन-टेक्स्ट उद्धरण तक"
description: "उद्धरण और ग्रंथ सूची आदेशों के साथ सामान्य BibTeX लूप।"
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# .bib कुंजी से इन-टेक्स्ट उद्धरण तक

LaTeX में एक स्रोत का हवाला देते हुए दो भाग शामिल होते हैं: एक सादा-पाठ डेटाबेस जो प्रत्येक कार्य का एक बार वर्णन करता है, और आपके दस्तावेज़ में एक `\cite` कमांड जो इसकी कुंजी द्वारा एक प्रविष्टि पर इंगित करता है। LaTeX उद्धरण को क्रमांकित करता है, संदर्भ सूची को प्रारूपित करता है, और जब आप अनुभागों को पुन: व्यवस्थित करते हैं या स्रोत जोड़ते हैं तो सब कुछ सुसंगत रखता है। आप कभी भी हाथ से "[12]" टाइप नहीं करते हैं, और आप स्वयं कभी भी किसी चीज़ का पुन: क्रमांकन नहीं करते हैं।

## दस्तावेज़ में आदेश

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` जहां भी उद्धरण है, वहां इन-टेक्स्ट मार्कर सम्मिलित करता है। नीचे दिए गए दो आदेश बाकी काम करते हैं: `\bibliographystyle{plain}` चुनता है कि उद्धरण और संदर्भ कैसे स्वरूपित किए जाते हैं, और `\bibliography{refs}` डेटाबेस फ़ाइल को नाम देता है (इसके `.bib` एक्सटेंशन के बिना) और चिह्नित करता है कि संदर्भ सूची कहाँ मुद्रित की जानी चाहिए, आमतौर पर `\end{document}` से ठीक पहले। केवल वे स्रोत जिन्हें आप वास्तव में उद्धृत करते हैं, सूची में दिखाई देते हैं।

## डेटाबेस में प्रविष्टि

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

यह `refs.bib` में रहता है, जो आपके `main.tex` के बगल में एक अलग फ़ाइल है। `@` के बाद का शब्द प्रविष्टि प्रकार है, `knuth84` उद्धरण कुंजी है, और बाकी वे फ़ील्ड हैं जिनका उपयोग शैली स्वरूपित संदर्भ बनाने के लिए करती है। कुंजी दो फ़ाइलों के बीच एकमात्र लिंक है, इसलिए इसे बड़े अक्षरों सहित, `\cite` के तर्क से सटीक रूप से मेल खाना चाहिए। आप [BibTeX सत्यापनकर्ता](/tools/bibtex-validator/) के साथ लापता फ़ील्ड और विकृत प्रविष्टियों के लिए संपूर्ण डेटाबेस की जांच कर सकते हैं।

## एक संकलन पर्याप्त क्यों नहीं है

ग्रंथ सूची एक अलग कार्यक्रम द्वारा बनाई गई है। पहले LaTeX पास पर, दस्तावेज़ उद्धृत कुंजियों की सूची को एक सहायक फ़ाइल में लिखता है। `बिबटेक्स` प्रोग्राम तब उस सूची को पढ़ता है, `refs.bib` से मेल खाने वाली प्रविष्टियों को निकालता है, और उन्हें प्रारूपित करता है। दो और LaTeX पास परिणाम को वापस मोड़ते हैं और इन-टेक्स्ट मार्करों को हल करते हैं। Oleafly प्रत्येक संकलन पर आपके लिए यह पूरा चक्र चलाता है। यदि आप हाथ से निर्माण करते हैं और मध्य चरण को छोड़ देते हैं, तो उद्धरण बोल्ड प्रश्न चिह्न के रूप में दिखाई देते हैं; ऐसा होने पर [रहस्य उद्धरण चिह्नों को साफ़ करना](/learn/उद्धरण-प्रश्न-चिह्न/) देखें।

## यहाँ से कहाँ जाएं

एक `.bib` फ़ाइल आपके द्वारा लिखे गए प्रत्येक पेपर को सेवा प्रदान कर सकती है, इसलिए इसे सावधानीपूर्वक बनाने में लाभ होता है। [एक .bib बनाएं जो लंबे समय तक चले](/learn/create-bibliography/) में प्रविष्टि प्रकार, आवश्यक फ़ील्ड और एक दशक तक चलने वाली कुंजियाँ शामिल हैं। जब कोई स्थल एक अलग रूप चाहता है, तो आप किसी भी प्रविष्टि के बजाय एक पंक्ति बदलते हैं, जैसा कि [संख्यात्मक, लेखक-वर्ष, जर्नल शैली] (/ सीखें/परिवर्तन-उद्धरण-शैली/) में बताया गया है।