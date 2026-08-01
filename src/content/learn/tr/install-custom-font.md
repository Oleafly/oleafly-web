---

title: "Projenin yanında bir yazı tipi dosyası"
description: "yerel otf veya ttf aileleri için fontspec Yolu."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Projenin yanında bir yazı tipi dosyası

Tezinizin, onu derleyecek her makinede yüklü olmayan bir yazı tipi kullandığını varsayalım: ortak yazarın dizüstü bilgisayarı, üniversitenin yapı sunucusu veya yeniden yükleme sonrasında kendi bilgisayarınız. Yazı tipinin sistem genelinde her birine yüklenmesi hassastır ve bazen buna izin verilmez. Yazı tipi dosyalarını proje klasörüne koyun ve bunun yerine 'fontspec'i onlara doğrultun, böylece belge kendi tipografisini taşır. 'fontspec' pdfLaTeX altında çalışmadığından, bunun için XeLaTeX veya LuaLaTeX gerekir. Bunun nedenleri [insanların neden XeLaTeX'e geçiş yaptığı](/learn/when-use-xelatex/) bölümünde ele alınmaktadır.

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## Her bir tuş ne işe yarar?

`\setmainfont{MyFont}` ana metin ailesini bildirir ve ona dosya adlarını oluşturmak için kullanılan temel adı verir. 'Path = ./fonts/', 'fontspec'e, işletim sistemine sormak yerine, ana '.tex' dosyasına göre proje içindeki 'fonts' klasöründeki dosyaları aramasını söyler. 'Uzantı = .otf' dosya türünü bir kez belirtir, böylece dosya başına tekrarlanması gerekmez. Eğer sahip olduğunuz şey buysa `.ttf`yi kullanın.

Kalan tuşlar yazı tipi şekillerini dosyalara eşler. Her birinde, "*" temel isme genişler, böylece "UprightFont = *-Regular", "MyFont-Regular.otf" ve aynı şekilde "MyFont-Bold.otf" ve "MyFont-Italic.otf" olarak çözümlenir. Bu adların, büyük harf kullanımı da dahil olmak üzere gerçek dosya adlarıyla tam olarak eşleşmesi gerekir, çünkü yerel sisteminiz bunu affedse bile Linux sunucularında büyük/küçük harf önemlidir. Ailede kalın italik varsa, 'BoldItalicFont = *-BoldItalic' ekleyin. Eşlemediğiniz bir şekil, belgenin kullanamayacağı bir şekildir: 'BoldFont' satırı olmadığında, '\textbf'nin geçiş yapabileceği hiçbir şey yoktur ve derleyici, kalın şeklin tanımsız olduğu konusunda uyarır.

Aynı sözdizimi diğer aileler için de çalışır, dolayısıyla '\setsansfont' ve '\setmonofont' yerel bir sans-serif veya kod yazı tipi için aynı seçenek bloklarını kabul eder.

## Lisanslama ve taşınabilirlik

Yazı tipi dosyalarını yalnızca lisansın yeniden dağıtıma izin vermesi durumunda projeyle birlikte gönderin. SIL Açık Yazı Tipi Lisansı gibi açık lisanslar buna izin verir ve Google Fonts'un yazı tipleri genellikle uygundur, ancak ticari yazı tipleri genellikle kopyaların ortak çalışanlara aktarılmasını yasaklar; bu durumda her makinenin kendi lisanslı kopyasına ihtiyacı vardır ve bu gereksinimi proje benioku dosyasında belgelemeniz gerekir.

Yaygın hata, genellikle klasörü yeniden adlandırdıktan veya farklı adlandırılmış bir ağırlık indirdikten sonra bildirilen adlar ile dosyalar arasında sessiz bir uyumsuzluktur. Derleme daha sonra "'MyFont-Regular' yazı tipi bulunamadı" mesajıyla durur. Böyle bir durumda, hatanın beklenen dosya adı karakterini klasör içeriğiyle karakter karakter karşılaştırın ve 'Yol'un hala dosyaların bulunduğu yerleri doğrulayın. Oleafly'nin paket halindeki Tectonic motoru XeTeX tabanlı olduğundan, bu yerel proje modeli, sistem yazı tipi kurulumu olmadan orada çalışır.