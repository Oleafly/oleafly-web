---

title: "Kendilerini numaralandıran başlıklar"
description: "paragraftan bölüme, yıldızlı formlardan, secnum derinliğine."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Kendilerini numaralandıran başlıklar

Bir kelime işlemcide, başlıkları elle numaralandırırsınız ve her hareket ettirdiğinizde bunları elle yeniden numaralandırırsınız. LaTeX bunu yapmanıza izin vermiyor. Her başlığın, bir bölümün, alt bölümün veya bölümün ne olduğunu beyan edersiniz ve numaralandırma kendi kendine halledilir. Belgenizin ortasına yeni bir bölüm ekleyin ve bir sonraki derlemede yeniden numaralandırılan her şeyi, her çapraz referansı ve ona işaret eden her içindekiler girişiyle birlikte ekleyin.

## Hiyerarşi

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Bu komutlar sabit bir merdiven oluşturur. `\section', 'article' sınıfındaki günlük iş gücüdür ve onun altında '\subsection' ve '\subsubsection' yuvalanmıştır. "\chapter" yalnızca "rapor" ve "kitap" sınıflarında mevcuttur, bu nedenle tez bölümlerinin bir makale şablonuna yapıştırılması tanımsız bir kontrol sırası ile başarısız olur. '\part' bölümlerin üzerinde yer alır ve uzun kitaplar dışında nadirdir. '\paragraf' tuhaf olanıdır: kendi satırında bir başlık yerine, sonraki metinle aynı satırda kalın bir giriş başlığı üretir; bu, hemen hemen herkesi ilk seferde şaşırtır.

Her komut, başlık metnini parantez içine alır, sınıfın seçilen yazı tipinde ve boyutunda yazdırır, numaralandırır ve '\tableofcontents'ın daha sonra bulabilmesi için kaydeder. Başlıkları hiçbir zaman satır içi olarak biçimlendirmezsiniz. Farklı başlık yazı tipleri istiyorsanız, bu, giriş bölümünde verilen belge çapında bir karardır.

## Sayıları bastırmak

Yıldızlı formlar sayıları gizler: `\section*{Acknowledgements}`. Yıldız ayrıca başlığı içindekiler tablosunun ve numaralandırma sırasının tamamen dışında tutar, böylece ondan sonraki bölüm sanki yıldızlı bölüm orada yokmuş gibi devam eder. Kısa bir makaledeki teşekkür, önsöz veya bağımsız sonuç için tam olarak istediğiniz şey budur. İçindekiler Tablosunda hâlâ yıldızlı bir bölümün görünmesi gerekiyorsa [İçindekiler dersinde](/learn/table-of-contents/) ele alınan tek satırlık bir düzeltme vardır.

## Numaralandırma derinliğini kontrol etme

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

'secnumlength' numaralandırmanın ne kadar derin olacağına karar verir. "Makale"de bölümler düzey 1, alt bölümler düzey 2 ve alt alt bölümler düzey 3'tür; bu nedenle sayaç, bölümlere ve alt bölümlere 2 rakamla ayarlanır, ancak biçimlendirmeleri korunurken alt alt bölüm başlıkları numarasız bırakılır. 'toclength' içindekiler tablosu için de aynı fikirdir: sayfada nelerin numaralandırıldığından bağımsız olarak içindekiler listesinin ne kadar derine ineceğini kontrol eder. Her iki satır da giriş kısmına aittir.

Yaygın bir hata, seviyeleri atlamaktır; örneğin, daha küçük başlığı beğendiğiniz için "\bölüm"den doğrudan "\altbölüm"e atlamak. Numaralandırma hala çalışıyor ancak "1.0.1" gibi tuhaf sonuçlar üretiyor ve okuyucular yapının izini kaybediyor. Anlam için başlık düzeylerini seçin ve görünümü sınıfın halletmesine izin verin. Belgenizin iskeletinin birbirine nasıl uyduğundan emin değilseniz, [belge iskeleti dersi](/learn/document-skeleton/) bunun üzerinden geçecektir.