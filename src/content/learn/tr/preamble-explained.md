---

title: "Yukarıdaki her şey başlıyor{belge}"
description: "Paketler, meta veriler ve yükleme sırası: Girişte neyin ait olduğu ve neyin olmadığı."
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

# Yukarıdaki her şey başlıyor{belge}

`\documentclass{...}` ve `\begin{document}` arasındaki her şey **giriş**'tir. Görünür bir metin üretmez. Çalıştırmayı yapılandırır. Yazı tipleri, kenar boşlukları, paketler, özel komutlar ve belge meta verilerinin tümü burada bulunur; bu nedenle olgun bir makalenin giriş kısmı genellikle giriş kısmından daha uzun olur. Her satırın ne işe yaradığını öğrendikten sonra kopyalanan şablon sihirli olmayı bırakır ve bir kontrol listesi haline gelir.

## Anatomi

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

"\documentclass" üzerindeki seçenekler genel varsayılanları belirler: "11pt" diğer her şeyin ölçeklendiği temel yazı tipi boyutudur ve "a4paper" kağıt boyutunu bildirir. İki kodlama satırı tarihsel yoldaşlardır: 'inputenc' motora kaynak dosyanızın UTF-8 olduğunu söyler ve 'fontenc' yazı tipi kodlamasını seçerek vurgulu karakterlerin bileşik yerine gerçek glifler olmasını sağlar. Mevcut LaTeX, UTF-8 girişini zaten varsaymaktadır, dolayısıyla bu satırların yeni belgelerde atlandığını göreceksiniz, ancak bunlar zararsızdır ve şablonlar uyumluluk amacıyla bunları saklar.

Orta blok yetenek paketlerini yükler. [geometri](/learn/margins-geometry/) kenar boşluklarını tek bir seçenekte ayarlar, "amsmath" ve "amssymb" hemen hemen her teknik belgenin ihtiyaç duyduğu matematik ortamlarını ve sembolleri sağlar, "graphicx" şekiller için "\includegraphics"i etkinleştirir ve "booktabs" tabloların profesyonel görünmesini sağlayan kuralları sağlar. Son olarak, [hyperref](/learn/hyperlinks/) referansları ve alıntıları tıklanabilir hale getirir ve diğer birçok paketin içindekileri yeniden tanımladığı için kasıtlı olarak en son yüklenir.

`\title`, `\author` ve `\date` satırları yalnızca meta verileri depolar. Gövdede `\maketitle' çalıştırılana kadar hiçbir şey yazdırılmaz, bu yüzden bunlar giriş kısmında yer alabilir.

## Temel kurallar

Birkaç alışkanlık başlangıçları sağlıklı tutar. İş başına bir paket yükleyin ve marjları belirlemenin iki yolu gibi aynı bölge üzerinde kavga eden paketlerin istiflenmesine direnin. Hyperref'i, ondan sonra gelmesi gereken akıllıef gibi belgelenmiş bir avuç istisna dışında, sonda tutun. Belge genelindeki seçimleri dağıtmak yerine sınıf seçeneklerine koyun, böylece '11pt' veya 'iki sütun' herkesin görebileceği bir yerde bildirilir. Ve [özel makrolarınız](/learn/custom-commands/) birkaç satırı aştığında, bunları bir ".sty" dosyasına taşıyın, böylece birden fazla belge bir tanım kümesini paylaşabilir.

En yararlı disiplin negatiftir: Eğer bir giriş satırının neden orada olduğunu bilmiyorsanız, belgeniz buna bağlı olmadan önce öğrenin. Kopyalanan başlangıçlar son satırları biriktirir ve son satırlar paket çatışmalarının saklandığı yerdir. Ayrıca [belge iskeletine](/learn/document-skeleton/) ve [karşılaştırılan motorlara](/learn/engines-compared/) bakın.