---

title: "İlk PDF'nizi derleyin"
description: "Küçük bir makale, bir derleme ve size LaTeX'ten en iyi şekilde yararlanmanızı sağlayacak üç fikir."
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

# İlk PDF'nizi derleyin

Yalnızca Word veya Google Dokümanlar'da yazdıysanız LaTeX sizden bir alışkanlığı bırakmanızı ister. Metni yazarken biçimlendirmek yerine, belgenizi düz metin olarak açıklarsınız ve bir programın sizin için dizgisini yapmasına izin verirsiniz. Bu düz metin bir ".tex" dosyasında bulunur: herhangi bir düzenleyicide açabileceğiniz, sözcüklerinizin yanı sıra her parçanın * ne olduğunu söyleyen "\bölüm{...}" gibi komutlarla açabileceğiniz sıradan bir metin dosyası. Derleme bu kaynağı bitmiş bir PDF'ye dönüştürür. LaTeX motoru dosyanızı yukarıdan aşağıya okur, her komutu yorumlar, sayfaları düzenler ve PDF'yi yazar. Çıktıyı hiçbir zaman doğrudan biçimlendirmezsiniz. Kaynağı düzenleyip tekrar derlersiniz.

## En küçük gerçek belge

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

Yukarıdan aşağıya okuyun. `\documentclass{article}` motora bunun ne tür bir belge olduğunu söyler ve bu da yazı tipleri, kenar boşlukları ve başlık stilleri için makul varsayılanlar belirler. `\title`, `\author` ve `\date` satırları yalnızca meta verileri depolar; henüz hiçbir şey yazdırılmadı ve "\bugün" yalnızca derlediğiniz günün tarihi anlamına gelir. `\begin{document}` gerçek içeriğin başladığı yeri işaretler. `\maketitle`, saklanan başlık bloğunun sayfada göründüğü andır. `\section{Giriş}` numaralandırılmış bir başlık yazdırır ve içindekiler tablosunun daha sonra bulabilmesi için bunu sessizce kaydeder. Son satırlar matematiğin iki yüzünü gösterir: '$...$' bir cümlenin içine bir formül dizer, '\[ ... \]' ise kendisine ait ortalanmış bir görüntü satırı verir.

## Dili taşıyan üç fikir

1. Komutlar ters eğik çizgiyle başlar ve genellikle parantez içindeki bir bağımsız değişkeni alır, dolayısıyla `\textbf{hello}` "kalın harflerle yazılmış merhaba" anlamına gelir.
2. Ortamlar "\begin{...}" ile "\end{...}" arasında bir bölgeyi sarar ve dosyanızın gövdesi başlı başına büyük bir "belge" ortamıdır.
3. Giriş bölümü `\begin{belge}'den önceki her şeydir; belgeyi yapılandırır ancak hiçbir zaman görünür metin üretmez.

LaTeX'teki hemen hemen her şey bu üçünün bir çeşididir.

## Derle

[Oleafly](/docs/getting-started/) içinde bir proje oluşturun, kaynağı yukarıya yapıştırın ve derleyin. PDF, kaynağınızın yanında görünür ve SyncTeX iki tarafı birbirine bağlar: eşleşen kaynak satırına atlamak için PDF'deki bir noktayı tıklayın veya tam tersini yapın. Bir projenin ilk derlemesi, motor ihtiyaç duyduğu şeyi alırken biraz daha uzun sürebilir; sonraki çalıştırmalar daha hızlıdır.

Beklenecek bir şey var: er ya da geç bir derleme bir hata mesajı ve satır numarasıyla başarısız olacaktır. Bu tamamen normaldir ve genellikle komut adında bir yazım hatası veya eksik bir kapatma parantezi anlamına gelir. İşaret ettiği çizgiyi düzeltin ve tekrar derleyin.

## Sonraki

Kurulum satırlarının gerçekte ne yaptığını görmek için [giriş, açıklama](/learn/preamble-explained/) ile devam edin, ardından formüller için [matematik modu](/learn/math-mode/) ile devam edin. İlk gerçek sayfanızı yazarken [alıntı sayfasını](/learn/cheatsheet/) açık tutun.