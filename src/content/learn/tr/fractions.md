---

title: "Okunabilir durumda kalan yığılmış oranlar"
description: "frac, dfrac, tfrac ve amsmath ile devam eden kesirler."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# Okunabilir durumda kalan yığılmış oranlar

Kesirler, LaTeX çıktısının bir kelime işlemciden gözle görülür şekilde üstün olduğu ilk yerdir: aralarında bir kural bulunan, çevredeki matematiğe uyacak şekilde boyutlandırılmış gerçek bir yığılmış pay ve payda. Temel komut "\frac"tır. Önemli olan, boyutunun bağlama göre nasıl değiştiği ve otomatik seçim okunabilirliğe zarar verdiğinde bunun nasıl geçersiz kılınacağıdır.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}`, önce pay, sonra payda olmak üzere iki parantezli argüman alır ve bunları yatay bir kural üzerinde istifleyerek dizer. Boyutu bağlama duyarlıdır. Matematik gösteriminde ('\[ ... \]' veya bir 'denklem' ortamı içinde) kesir tam boyuta ayarlanır. Satır içi matematikte ('$ ... $' içinde) daha küçük ve daha kompakt ayarlanır, böylece paragrafın satırlarını birbirinden ayırmaya zorlamaz.

Bazen bunu geçersiz kılmak istersiniz. 'amsmath'tan gelen '\dfrac', görüntüleme stilini zorlar: bir cümlenin ortasında bile tam boyutlu yığılmış kesir. Bunu dikkatli kullanın, çünkü satır içi uzun bir kesir etrafındaki satır aralığını uzatır. '\tfrac' bunun tam tersidir: tam boyutlu bir yığının çok fazla dikkat çekeceği büyük bir ifadenin önündeki yarım gibi basit katsayılar için kullanışlı olan ekran matematiğinde bile küçük metin stilini zorlar.

Her iki bağımsız değişken de diğer kesirler de dahil olmak üzere rastgele matematik tutabilir: `\frac{1}{1 + \frac{1}{x}}` yuvalanır ve LaTeX iç kesri otomatik olarak küçültür. Ancak yuvalama derinleştiğinde daha iyi bir araç vardır.

## Devamlı kesirler

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

İç içe geçmiş fraklar her düzeyde küçülür, dolayısıyla devam eden bir kesirin üçüncü katındaki rakamlar zar zor okunabilir hale gelir. Yine 'amsmath'tan gelen '\cfrac', her düzeyi tam ekran boyutunda tutar ve payları hizalar; bu, sürekli kesirleri dizmenin kabul edilen yoludur. Payı ortalamak yerine sola itmek için isteğe bağlı bir konum olan `\cfrac[l]{1}{...}''i geçebilirsiniz.

## Pratik muhakeme

`\dfrac`, `\tfrac` ve `\cfrac` öğelerinin tümü girişte `\usepackage{amsmath}` gerektirir; düz `\frac` onsuz çalışır. `\dfrac`ta "Tanımlanmamış kontrol sırası" alırsanız paket satırı eksiktir.

Satır içi metin için bazen eğik çizgi, yığılmış kesirden daha okunaklı olabilir: "(a/b)" veya "a/b" yazmak satır yüksekliğini eşit tutar ve basit oranlar için iyi okunur. Kesirleri dikey alanın olduğu ekran matematiğinde istiflemek ve kesir cümlenin noktası olmadığı sürece satır içi eğik çizgiyi tercih etmek iyi bir temel kuraldır. [Canlı oyun alanına](/live/) her iki yönde de bir paragraf yazın ve karşılaştırın; satır aralıklarındaki fark hemen görülüyor. "$" ve "\[" gibi matematik sınırlayıcıları hâlâ size tanıdık gelmiyorsa [matematik modu temelleri](/learn/math-mode/) ile başlayın.