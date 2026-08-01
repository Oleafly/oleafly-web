---

title: "Eksik dolar eklendi"
description: "Metin moduna sızan abonelikler ve matematik komutları."
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

# Eksik dolar eklendi

"Eksik $ eklendi" en yaygın LaTeX hatasıdır ve adı yanıltıcıdır: LaTeX sizden para harcamanızı istemez, yalnızca matematik sözdiziminin metin modunda göründüğünü söyler. Kurtarmak için "$" karakterini kendisi ekler, derlemeye devam eder ve genellikle garip italik çıktıyı aşağı yönde bırakır, bu nedenle mesaj omuz silkmek yerine gerçek bir düzeltmeyi hak eder.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## Onu ne tetikler?

İki karakter ve bir komut sınıfı yalnızca matematik moduna aittir. Alt çizgi `_` ve düzeltme işareti `^` alt simgeler ve üst simgeler oluşturur ve `\alpha`, `\frac` ve `\leq` gibi komutlar matematiksel semboller üretir. Düz metindeki herhangi biri hatayı yükseltir. Klasik durum, bir dosya adı veya gen adı gibi bir alt çizgi içeren bir tanımlayıcıdır: Bir cümledeki 'DNA_seq', '_' ile tetiklenir.

Düzeltme ne demek istediğine bağlı. Alt çizgi gerçek bir karakterse, bundan kaçının: 'DNA\_seq' adı gerçek bir alt çizgiyle yazdırır. Bir alt simge demek istediyseniz, o zaman matematik demek istediniz, bu nedenle şu ifadeyi sarın: `$x_i$`, i alt simgesiyle birlikte matematik italik ve doğru aralıklarla bir x ayarlar. Metinde kaçması gereken karakterlerin tam listesi [kendi dersine](/learn/special-characters/) sahiptir ve matematik sınırlayıcıların kendileri de [matematik modu temelleri](/learn/math-mode/) kapsamında ele alınmaktadır.

## Günlük garip bir yeri işaret ettiğinde

Bildirilen satır numarası, soruna neden olduğunuz yer değil, LaTeX'in sorunu fark ettiği yerdir. Her zamanki suçlu, daha önce kapatılmamış bir '$'dır: matematik modunu açtınız ve asla kapatmadınız, bu nedenle LaTeX, bir şey sorunu zorlayana kadar, genellikle paragrafın sonuna kadar matematik modunda çalışmaya devam etti. Matematik modunda paragraf sonları yasa dışı olduğundan, matematik ekranının içindeki boş bir satır aynı hatayı doğurur. İşaretli çizgi masum göründüğünde, tek sayıda dolar işareti için yukarıya doğru tarayın ve her `\[``nin eşleşen bir `\]` olup olmadığını kontrol edin.

Sözdizimi vurgulama, kaçağı tespit etmenin hızlı yoludur: herhangi bir LaTeX düzenleyicisi matematik bölgelerini farklı şekilde renklendirir; böylece aniden matematik renginde oluşturulan bir paragraf, kapatılmamış doların yerini bir bakışta belirler.

Son bir uyarı: LaTeX, eksik "$" eklenerek kurtarıldığından, PDF sıklıkla oluşturulmaya devam eder. PDF'yi hatanın zararsız olduğunun kanıtı olarak almayın. Kurtarılan çıktıda genellikle metninizin olması gereken yerde başıboş italikler veya karışık boşluklar bulunur; bu nedenle, günlük temizlenene kadar kaynağı düzeltin.