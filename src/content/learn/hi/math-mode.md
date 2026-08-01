---

title: "गणित जो एक वाक्य में बैठता है (या अकेले)"
description: "इनलाइन गणित, प्रदर्शन गणित, समीकरण वातावरण, और जब नंबरिंग इसके लायक है।"
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# गणित जो एक वाक्य में बैठता है (या अकेले)

LaTeX गणित को अपने स्वयं के फ़ॉन्ट और रिक्ति नियमों के साथ एक अलग मोड के रूप में मानता है। प्रत्येक चर, सूत्र और प्रतीक को गणित मोड के अंदर रहना होगा, चाहे वह एक वाक्य में एक अकेला n हो या पूर्ण समीकरण हो। दो प्रकार के होते हैं: इनलाइन गणित एक पैराग्राफ के भीतर प्रवाहित होता है, और डिस्प्ले गणित किसी संख्या के साथ या उसके बिना, अपनी ही लाइन पर केंद्रित होता है।

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## इनलाइन गणित

डॉलर चिह्नों की एक जोड़ी, जैसे `$E=mc^2$`, पंक्ति के अंदर पाठ के आकार पर सूत्र निर्धारित करती है। अक्षर गणित के इटैलिक में आते हैं और बराबर चिह्न के चारों ओर का अंतर आपके लिए नियंत्रित किया जाता है। `\(E=mc^2\)` समतुल्य LaTeX-मूल रूप है। यह समान आउटपुट उत्पन्न करता है, और क्योंकि इसके खुलने और बंद होने वाले सीमांकक अलग-अलग होते हैं, एक बंद सीमांकक एक स्पष्ट त्रुटि संदेश देता है। एकल चर नाम के लिए भी इनलाइन गणित का उपयोग करें, ताकि आपके गद्य में n आपके समीकरणों में n से मेल खाए।

## गणित प्रदर्शित करें

`\[ ... \]` एक सूत्र को बिना किसी संख्या के अपनी केन्द्रित रेखा पर रखता है। यह उन एकमुश्त समीकरणों के लिए सही विकल्प है जिनका आप कभी भी उल्लेख नहीं करते हैं। पुराने `$$...$$` फॉर्म से बचें। यह LaTeX के बजाय सादा TeX है और कुछ स्थितियों में थोड़ा गलत ऊर्ध्वाधर अंतर पैदा करता है।

## क्रमांकित समीकरण

`समीकरण` परिवेश मार्जिन पर एक संख्या के साथ सूत्र प्रदर्शित करता है। `\label{eq:energy}` उस संख्या के साथ एक नाम जोड़ता है, और अन्यत्र आप `Equation~\ref{eq:energy}` लिखते हैं या, `amsmath` लोड होने पर, `\eqref{eq:energy}` लिखते हैं, जो स्वयं कोष्ठक जोड़ता है। `~` एक नॉन-ब्रेकिंग स्पेस है, इसलिए शब्द और संख्या एक पंक्ति पर रहते हैं। सन्दर्भ दूसरे संकलन पर हल हो जाते हैं। यदि आप आउटपुट में `??` देखते हैं, तो [संख्याओं के बजाय प्रश्न चिह्न] (/ सीखें/समीकरण-शो-qq/) देखें।

## लोड करने के लिए पैकेज

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

लगभग हर गणितीय दस्तावेज़ इन तीनों को लोड करता है। `amsmath` वातावरण और आदेश प्रदान करता है जो इनमें से अधिकांश पाठ मानते हैं, जिनमें `संरेखण` और `\eqref` शामिल हैं। `amssymb` और `amsfonts` प्रतीक फ़ॉन्ट और `\mathbb` जैसे अतिरिक्त अक्षर जोड़ते हैं। प्रस्तावना में एक बार लाइन लगाओ और भूल जाओ.

क्लासिक शुरुआती त्रुटि गणित मोड के बाहर गणित वाक्यविन्यास है: सादे पाठ में एक अंडरस्कोर "मिसिंग $ इंसर्टेड" के साथ संकलन को रोकता है, जिसमें [इसका अपना पाठ] (/ सीखें/लापता-डॉलर/) होता है। दो मोड को समझने के लिए, [लाइव प्लेग्राउंड](/लाइव/) में `$x_i$` इनलाइन और `\[ ... \]` के अंदर एक ही फॉर्मूले वाला एक वाक्य टाइप करें और तुलना करें कि प्रत्येक पेज पर कैसे बैठता है।