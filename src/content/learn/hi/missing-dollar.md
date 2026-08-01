---

title: "गायब डॉलर डाला गया"
description: "सबस्क्रिप्ट और गणित कमांड जो टेक्स्ट मोड में लीक हो गए।"
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# गायब डॉलर डाला गया

"लापता $ डाला गया" सबसे आम LaTeX त्रुटि है, और इसका नाम गुमराह करता है: LaTeX आपको पैसे खर्च करने के लिए नहीं कह रहा है बल्कि आपको बता रहा है कि केवल गणित सिंटैक्स टेक्स्ट मोड में दिखाई दिया है। यह पुनर्प्राप्त करने के लिए `$` को ही सम्मिलित करता है, संकलन करता रहता है, और अक्सर अजीब इटैलिक आउटपुट को डाउनस्ट्रीम में छोड़ देता है, इसलिए संदेश कंधे उचकाने की बजाय वास्तविक समाधान का हकदार है।

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## इसे क्या ट्रिगर करता है

दो अक्षर और आदेशों का एक वर्ग विशेष रूप से गणित मोड से संबंधित है। अंडरस्कोर `_` और कैरेट `^` सबस्क्रिप्ट और सुपरस्क्रिप्ट बनाते हैं, और `\alpha`, `\frac`, और `\leq` जैसे कमांड गणितीय प्रतीक उत्पन्न करते हैं। सादे पाठ में उनमें से कोई भी त्रुटि उत्पन्न करता है। क्लासिक केस एक पहचानकर्ता है जिसमें अंडरस्कोर होता है, जैसे फ़ाइल नाम या जीन नाम: `DNA_seq` एक वाक्य में `_` पर यात्रा करता है।

समाधान इस पर निर्भर करता है कि आपका क्या मतलब है। यदि अंडरस्कोर एक शाब्दिक वर्ण है, तो इससे बचें: `DNA\_seq` वास्तविक अंडरस्कोर के साथ नाम प्रिंट करता है। यदि आपका मतलब एक सबस्क्रिप्ट था, तो आपका मतलब गणित था, इसलिए अभिव्यक्ति को लपेटें: `$x_i$` सही रिक्ति के साथ गणित इटैलिक में सबस्क्रिप्ट i के साथ एक x सेट करता है। पाठ में जिन वर्णों को भागने की आवश्यकता है, उनके पूरे रोस्टर में [अपना स्वयं का पाठ] (/सीखना/विशेष-वर्ण/) है, और गणित सीमांकक स्वयं [गणित मोड मूल बातें](/सीखें/गणित-मोड/) में शामिल हैं।

## जब लॉग किसी अजीब जगह पर इंगित करता है

रिपोर्ट की गई लाइन संख्या वह है जहां LaTeX ने समस्या देखी, जरूरी नहीं कि आपने इसे कहां उत्पन्न किया हो। सामान्य अपराधी एक अज्ञात `$` है: आपने गणित मोड खोला और इसे कभी बंद नहीं किया, इसलिए LaTeX गणित मोड में तब तक चलता रहा जब तक कि कुछ समस्या उत्पन्न नहीं हुई, अक्सर पैराग्राफ का अंत। प्रदर्शन गणित के अंदर एक रिक्त रेखा समान त्रुटि उत्पन्न करती है, क्योंकि गणित मोड में पैराग्राफ ब्रेक अवैध हैं। इसलिए जब ध्वजांकित रेखा निर्दोष दिखती है, तो विषम संख्या में डॉलर चिह्नों के लिए ऊपर की ओर स्कैन करें और जांचें कि प्रत्येक `\[` का मिलान `\]` है।

सिंटैक्स हाइलाइटिंग भगोड़े को पहचानने का तेज़ तरीका है: कोई भी LaTeX संपादक गणित क्षेत्रों को अलग-अलग रंग देता है, इसलिए एक पैराग्राफ जो अचानक गणित के रंग में प्रस्तुत होता है वह एक नज़र में अज्ञात डॉलर को इंगित करता है।

एक आखिरी सावधानी: क्योंकि LaTeX लापता `$` डालने से ठीक हो जाता है, एक पीडीएफ अक्सर अभी भी बनता है। पीडीएफ को प्रमाण के रूप में न लें, त्रुटि हानिरहित थी। पुनर्प्राप्त आउटपुट में आमतौर पर भटके हुए इटैलिक या उलझी हुई रिक्तियां होती हैं जहां आपका टेक्स्ट होना चाहिए, इसलिए लॉग साफ़ होने तक स्रोत को ठीक करें।