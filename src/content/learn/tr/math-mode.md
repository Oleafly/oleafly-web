---

title: "Bir cümlede (veya tek başına) yer alan matematik"
description: "Satır içi matematik, ekran matematiği, denklem ortamları ve numaralandırmanın ne zaman gerekli olduğu."
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

# Bir cümlede (veya tek başına) yer alan matematik

LaTeX, matematiği kendi yazı tipleri ve boşluk kurallarıyla ayrı bir mod olarak ele alır. İster bir cümledeki tek bir n isterse tam bir denklem olsun, her değişken, formül ve sembolün matematik modunda yaşaması gerekir. İki tür vardır: bir paragraf içindeki satır içi matematik akışları ve ekran matematiği, sayıyla veya sayı olmadan kendi satırında ortalanmış olarak durur.

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

## Satır içi matematik

"$E=mc^2$" örneğinde olduğu gibi bir çift dolar işareti, formülü satırın içindeki metin boyutunda ayarlar. Harfler matematik italik olarak çıkar ve eşittir işaretinin etrafındaki boşluklar sizin için işlenir. `\(E=mc^2\)` eşdeğer LaTeX-yerel biçimidir. Aynı çıktıyı üretir ve açılma ve kapanma sınırlayıcıları farklı olduğundan kapatılmamış olan daha net bir hata mesajı verir. Tek bir değişken adı için bile satır içi matematik kullanın, böylece düzyazınızdaki n, denklemlerinizdeki n ile eşleşir.

## Matematiği göster

`\[ ... \]` bir formülü numarasız olarak kendi orta çizgisine yerleştirir. Bir daha asla başvurmayacağınız tek seferlik denklemler için doğru seçimdir. Eski `$$ ... $$` biçiminden kaçının. LaTeX yerine düz TeX'tir ve bazı durumlarda biraz yanlış dikey aralık üretir.

## Numaralandırılmış denklemler

'Denklem' ortamı, formülü kenar boşluğunda bir sayıyla görüntüler. `\label{eq:energy}` bu sayıya bir ad ekler ve başka bir yere 'Equation~\ref{eq:energy}' veya 'amsmath' yüklüyken parantezlerin kendisini ekleyen `\eqref{eq:energy}' yazarsınız. '~' bölünemez bir boşluktur, dolayısıyla kelime ve sayı tek satırda kalır. Referanslar ikinci derlemede çözümlenir. Çıktıda `??` görürseniz, bkz. [sayılar yerine soru işaretleri](/learn/equations-show-qq/).

## Yüklenecek paketler

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Neredeyse her matematik belgesi bu üçünü yükler. 'amsmath', 'align' ve '\eqref' dahil olmak üzere bu derslerin çoğunun varsaydığı ortamları ve komutları sağlar. 'amssymb' ve 'amsfonts' sembol yazı tipleri ve '\mathbb' gibi ekstra alfabeler ekler. Satırı bir kez giriş kısmına koyun ve unutun.

Başlangıç ​​seviyesindeki klasik hata, matematik modunun dışındaki matematik sözdizimidir: Düz metindeki bir alt çizgi, [kendi dersi](/learn/missing-dollar/) içeren "Eksik $ eklenmiş" ile derlemeyi durdurur. İki mod hakkında fikir sahibi olmak için, [canlı oyun alanında](/live/) "$x_i$" satır içi ve "\[ ... \]" içine aynı formülü içeren bir cümle yazın ve her birinin sayfada nasıl durduğunu karşılaştırın.