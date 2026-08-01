---

title: "Başlık blokları ve başlık sayfaları"
description: "makaleler için maketitle, tezler ve raporlar için başlık sayfası."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Başlık blokları ve başlık sayfaları

Bir başlık bloğuyla bir makale açılır: başlık, yazarlar, tarih, ilk sayfanın en üstünde yer alır. Bir tez, üniversitenin spesifikasyonuna göre hazırlanmış tam bir başlık sayfasıyla açılır. LaTeX bunları iki farklı sorun olarak ele alır. Birincisi '\maketitle' tarafından otomatikleştirilir, ikincisi ise 'başlık sayfası' ortamı adı verilen boş bir tuvaldir.

## Başlık bloğu

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

İlk üç komut yalnızca meta verileri depolar. Çalıştırıldığında PDF'de hiçbir şey görünmüyor, bu yüzden giriş bölümünde oturabilirler. `\begin{document}`den sonra yerleştirilen `\maketitle`, saklanan bloğun dizildiği andır. `\yazar`ın içinde, `\\` bir satırı keser (bir adın altına bağlantı koymanın olağan yolu) ve `\ve` birden fazla yazarı yan yana yerleştirilecek şekilde ayırır. `\date{\today}` derlediğiniz günün tarihini yazdırır. Tarih satırını tamamen atlamak için `\date{}` yazın ve boş parantezlerle birlikte yazın. `\date`i tamamen dışarıda bırakmak yine de bugünün tarihini yazdırır.

'Article' sınıfında blok, aşağıdaki metinle birlikte birinci sayfanın en üstünde yer alır. 'Rapor' ve 'kitap'ta kendine ait bir sayfa bulunur. Günlük ve konferans sınıfları bu mekanizmayı kendi bağlantıları, e-postaları ve ORCID komutlarıyla değiştirir; dolayısıyla bir mekan şablonunda standart komutlar yerine örnek dosyasını izlemelisiniz.

## Elle oluşturulmuş bir başlık sayfası

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

'Başlık sayfası' ortamı size numarasız bir sayfa ve tam manuel kontrol sağlar; bu da genellikle tez düzenlemelerinin gerektirdiği şeydir. Örneğin her bir parçası kendi yerini kazanır. "merkezleme" çevrede takip eden her şeyi merkeze alır. `\vspace*{2cm}` başlığı üst kenardan aşağı doğru iter. Yıldızlı form önemlidir çünkü sayfanın üst kısmındaki yıldızsız `\vspace` atılır. `{\Large ...}` etrafındaki parantezler, yazı tipi boyutunun kapsamını değiştirerek grubun bittiği yerde biter ve `\\[1em]`, altında ekstra bir em boşlukla satırı keser. `\vfill`, kalan yüksekliği emen gerilebilir alan ekler, böylece başlık ne kadar uzun olursa olsun derece ifadesi ve tarih sayfanın alt kısmında yer alır.

Bir mekanizmayı veya diğerini kullanın. `\maketitle`ı bir `başlık sayfası` ortamıyla birleştirmek iki başlık sayfası oluşturur ve başlangıç ​​seviyesindeki klasik gözden kaçırılan şey sessiz olanıdır: `\title` ve `\author`u tanımlamak ancak `\maketitle`ı unutmak, böylece belge hiçbir başlık olmadan temiz bir şekilde derlenir. [belge iskeleti dersi](/learn/document-skeleton/) bloğun bir bütün olarak dosyada nereye uyduğunu gösterir.