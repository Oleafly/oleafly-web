---

title: "PDF içindeki bağlantılar"
description: "hyperref, url, href, renkler ve PDF meta verileri."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# PDF'nin içindeki bağlantılar

PDF yalnızca ekrandaki kağıttan ibaret değildir. Canlı bağlantılar taşıyabilir: tıklanabilir URL'ler, doğru şekle atlayan çapraz referanslar, kaynakçaya atlayan alıntılar ve bölüm başlıklarınızdan oluşturulan bir kenar çubuğu taslağı. LaTeX'te tek bir paket tüm bunları sağlar: "hyperref". Yükleyin ve belgenizdeki her `\ref`, `\cite` ve içindekiler tablosu girdisi, kaynağınızın geri kalanında hiçbir değişiklik yapılmadan sessizce tıklanabilir hale gelir.

## Hyperref'i yükleme ve yapılandırma

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Köşeli parantez içindeki seçenekler bağlantıların nasıl görüneceğini kontrol eder. Hyperref varsayılan olarak her bağlantının etrafına çoğu insanın çirkin bulduğu renkli bir dikdörtgen çizer. 'colorlinks=true' ayarı, kutuları renkli metinle değiştirir ve üç renk seçeneği bunu bağlantı türüne göre böler: 'linkcolor' bölüm ve şekil referansları gibi dahili atlamaları kapsar, 'citecolor' alıntıları kapsar ve 'urlcolor' web adreslerini kapsar. Bunları bölmek önemlidir çünkü alıntılarla dolu bir kağıt aksi halde mavi bir duvara dönüşebilir.

## url'ye karşı href

İki bağlantı komutu farklı işler yapar. `\url{...}', adresin kendisini bir daktilo yazı tipinde yazdırır ve tıklanabilir hale getirir; bu, okuyucunun bağlantının nereye gittiğini görmesi gereken bir kaynakça veya dipnotta olmasını istediğiniz şeydir. `\href{address}{text}`, web sayfasındaki bir bağlantı gibi sağladığınız metnin arkasına adresi gizler. "\href" etiketi kağıt okuyucuya adresi yazma olanağı vermediğinden, yazdırılabilecek belgelerde "\url"yi tercih edin.

Pratik bir bonus: `\url', adresi bozacak bir kısa çizgi eklemeden uzun adresleri satırlara nasıl böleceğini bilir; bu, düz daktilo yazı tipi URL'sinin yapamayacağı bir şeydir.

## PDF meta verileri

`\hypersetup`, yüklemeden sonra herhangi bir hiperref seçeneğini değiştirmenizi sağlar ve burası aynı zamanda belge meta verilerini de ayarladığınız yerdir. 'pdftitle' ve 'pdfauthor' alanları, PDF okuyucunuzun pencere çubuğunda ve dosya özelliklerinde gösterdiği başlığı ve yazarı doldurur. Bunlar olmadan, okuyucular genellikle gönderdiğiniz veya paylaştığınız bir belgede tamamlanmamış görünen dosya adını veya ilk başlığı görüntüler. Giriş bölümünde `\usepackage{hyperref}`den sonra istediğiniz zaman `\hypersetup`ı çağırabilirsiniz.

## Yazdırmaya uygun belgeler

Yazdırmaya uygun dokümanlar için "bağlantıları gizle"yi kullanın. Bunu bir seçenek olarak iletmek, `\usepackage[hidelinks]{hyperref}`, her bağlantının ekranda tıklanabilir olmasını sağlar ancak hem renkli kutuları hem de renkli metni kaldırır, böylece yazdırılan sayfa tamamen normal görünür. Birçok günlük dersi tam olarak bunu gerektirir.

Kaçınılması gereken yaygın bir hata: hyperref birçok dahili komutu yeniden tanımlar, bu nedenle girişinizdeki son paketlerden biri olarak yüklenmelidir. Bağlantılarınız yanlış sayfalara işaret ediyorsa veya başka bir pakette garip hatalar alıyorsanız, kontrol edilecek ilk şey yükleme sırasıdır. Hyperref'in tıklanabilir hale getirdiği "\label" ve "\ref" mekanizmaları için [çapraz referanslara](/learn/cross-references/) bakın.