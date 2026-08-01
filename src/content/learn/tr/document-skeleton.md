---

title: "Yeniden kullanabileceğiniz bir iskelet"
description: "Sınıf, önsöz, başlık, bölümler, kaynakça: hemen hemen her makalenin şekli."
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

# Yeniden kullanabileceğiniz bir iskelet

İçeriği çıkardığınızda neredeyse her LaTeX belgesi aynı iskelete sahip olur: bir sınıf bildirimi, kurulumun bir girişi ve "\begin{document}" ile "\end{document}" arasında bir gövde. Bu şekli öğrendikten sonra iskeleti yapıştırıp başlığı değiştirerek ve yazarak yeni bir projeye başlayın.

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

Yukarıdan aşağıya okuma: `\documentclass[11pt]{article}` belge türünü seçer ve temel yazı tipi boyutunu bir seçenek olarak ayarlar. Tasarımdaki diğer her şey bu seçimden kaynaklanmaktadır. Sınıf satırı ile `\begin{document}` arasındaki bölge, paketlerin yüklendiği ve `\title` ve `\author` gibi meta verilerin depolandığı [preamble](/learn/preamble-explained/) bölgesidir. `\begin{document}` görünür içeriğin başladığı yeri işaretler, `\maketitle` saklanan başlık bloğunu dizer ve gövde bölümler, şekiller ve son olarak bir kaynakça olarak takip eder. `\end{document}` belgeyi kapatır. Bundan sonraki her şey sessizce göz ardı edilir ve bu da bazen birisinin yanlış yere yapıştırdığı metin yığınını gizler.

## Sınıf seçenekleri

| Sınıf | Kullan |
| --- | --- |
| 'makale' | Makaleler, ödevler, notlar |
| 'rapor' | Bölümlü daha uzun raporlar |
| 'kitap' | Kitaplar ve birçok tez |
| 'ışınlayıcı' | Slaytlar |

Sınıf kozmetik değildir; hangi komutların mevcut olduğunu değiştirir. "makale"de "\bölüm" yoktur, bu nedenle tez bölümlerinin buraya yapıştırılması hemen başarısız olur. 'rapor' bölümler ekler ve başlığa kendi sayfasını verir. 'kitap' iki taraflı yazdırmayı varsayar ve bölümleri sağdaki sayfalarda açar. 'beamer' slayt çerçevelerinin etrafındaki her şeyi yeniden yapılandırır. Dergiler ve konferanslar kendi sınıflarını gönderir ve bir mekan için yazdığınızda, o mekanın sınıfı bu kararın tamamen yerine geçer.

Çoğu kırık iskeletin nedeni iki hatadır. `\begin{document}` öncesine yerleştirilen metin "Eksik \begin{document}" hatasını tetikler, çünkü giriş yalnızca yapılandırılabilir, asla yazdırılamaz. Ve eksik bir `\end{document}`, derleyicinin dosyanın sonunda girdinin sonuyla ilgili faydasız bir mesajla beklemesine neden olur. Her ikisi de göründüğünde içerikten şüphelenmeden önce belgenin çerçevesini kontrol edin.

İskelet terazisi. Dört sayfalık bir not gövdeyi aynı hizada tutar; Bir tez, her bölümü kendi dosyasına taşır ve [bölünmüş bölüm dosyalarında](/learn/split-chapter-files/) gösterildiği gibi bunları kökten alır. Çevrelerindeki çerçeve değişmez.