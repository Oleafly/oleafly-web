---

title: "Bir rakam bırakın"
description: "graphx, genişlik, yollar, PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Bir rakam girin

LaTeX'in yerleşik görüntü desteği yoktur. Bunların tümü, '\includegraphics' komutunu sağlayan 'graphicx' paketinden gelir ve geleneksel olarak görüntü, bir başlık ve sayı taşıyabilmesi için bir 'figür' ortamına sarılır. Yüzlerce kez kullanacağınız kalıp budur:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Her satır ne işe yarar?

`\usepackage{graphicx}` satırı girişinizde, `\begin{document}`dan önce gelir ve ne kadar resim eklerseniz ekleyin yalnızca bir kez görünmesi gerekir.

'Şekil' ortamı, görüntüyü kayan bir hale getirir; bu, LaTeX'in görüntüyü metindeki tam bu noktaya çivilemek yerine ineceği yeri seçtiği anlamına gelir. "[htbp]" harfleri yerleştirme tercihlerinizdir: "h", kodun göründüğü yer anlamına gelir, "t" bir sayfanın üst kısmı, "b" bir sayfanın alt kısmı ve "p" ayrı bir kayan sayfa anlamına gelir. LaTeX bunları bu sırayla dener ve düzgün bir sayfa üreten ilk sayfayı alır. Figürünüz şaşırtıcı bir yere sürükleniyorsa bu normal bir havada süzülme davranışıdır ve [yüzenlerin gerçekte nereye indiği](/learn/position-figures/) bununla nasıl pazarlık yapacağınızı açıklar.

`\ortalama' görüntüyü metin bloğu içinde yatay olarak ortalar. "width=0,8\textwidth", en boy oranını korurken görüntüyü metin genişliğinin yüzde 80'ine ölçeklendirir; bu, belgenin kenar boşlukları değiştiğinde uyum sağladığı için neredeyse her zaman mutlak boyutu santimetre cinsinden belirtmekten daha iyidir. Dosya yolu proje köküne bağlıdır, dolayısıyla "figures/pipeline.pdf", ana ".tex" dosyanızın yanındaki "figures" klasörü anlamına gelir. Son olarak, `\caption` numaralı başlığı yazdırır ve `\label` numarayı kaydeder, böylece `\ref{fig:pipeline}` metinden alıntı yapabilir. [Altyazılar ve etiketler](/learn/captions-labels/) kapsamında ele alınan nedenlerden dolayı etiket, başlıktan sonra gelmelidir.

## Hangi dosya formatının kullanılacağı

Vektör grafikleri her türlü yakınlaştırmada ve her baskı boyutunda keskin kaldığından, grafikler, diyagramlar ve akış şemaları gibi herhangi bir vektör için PDF'yi tercih edin. Ekran görüntüleri ve diğer piksel tabanlı görseller için PNG kullanın. JPG, sıkıştırma kusurlarının görünmez olduğu fotoğraflar için kabul edilebilir. Baskı sırasında bulanıklaşacağı ve aranamayacağı için, metin ağırlıklı içeriği ekran görüntüsü olarak yerleştirmekten kesinlikle kaçının.

Ayrıca büyük fotoğrafları eklemeden önce yeniden boyutlandırın. 8 santimetre genişlikte görüntülenen 12 megapiksellik bir fotoğraf, PDF'yi şişirir ve her derlemeyi yavaşlatır; basılı boyutunda ise yaklaşık 300 dpi'ye küçültülmüş bir sürüm aynı görünür.

## Kaçınılması gereken hata

Birinci günde şamandırayla tek başına '[h]' talep ederek mücadele etmeyin. LaTeX çoğu zaman reddedecek ve ardından figürü ve arkasındaki her şeyi bölümün sonuna taşıyacaktır. '[htbp]' yazın, şekil kodunu ona ilk gönderme yapan paragrafın yakınına yerleştirin ve bırakın sayılar ve referanslar sizin için izlemeyi yapsın.