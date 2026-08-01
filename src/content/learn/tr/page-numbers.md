---

title: "Sayfa numaraları açık veya kapalı"
description: "sade, boş, roma vs arapça, başlık sayfasındaki rakamlar gizlenmiş."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Sayfa numaraları açık veya kapalı

Sayfa numaraları varsayılan olarak "makale"de görünür: standart sınıflar, sayıyı her sayfanın altında ortalayan "düz" sayfa stilini kullanır. Genellikle bu iyidir ve bunu asla düşünmezsiniz. Bunu düşündüğünüz üç durum, sayıyı başlık sayfasında gizlemek, numaralandırmayı tamamen kapatmak ve daha uzun bir belgede romen ve arap rakamları arasında geçiş yapmaktır.

## Başlık sayfasındaki numarayı gizleme

Alt kısmında yalnız bir "1" bulunan bir başlık sayfası tamamlanmamış görünüyor. Düzeltme, başlık belirlendikten hemen sonra yerleştirilen bir satırdır:

```latex
\maketitle
\thispagestyle{empty}
```

"\thispagestyle{boş}" yalnızca geçerli sayfanın sayfa stilini değiştirir ve "boş", üstbilgi veya altbilgiye hiçbir şey yazdırmayan yerleşik stildir. Sıra önemlidir: aynı sayfada `\maketitle`dan sonra gelmelidir, çünkü `\maketitle` sayfa stilini sıfırlar. Sayfanın hâlâ önemli olduğunu unutmayın; sonraki sayfa 2 olarak numaralandırılacaktır. `\maketitle` yerine `\begin{titlepage}...\end{titlepage}` kullanırsanız bu sayı sizin için gizlenir ve bir sonraki sayfa 1'den başlar.

## Stiller ve numaralandırma sistemleri

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Bu iki komut çifti farklı şeyleri kontrol eder ve bunları karıştırmak klasik tökezlemedir. "\pagestyle{...}" sayının nerede görüneceğini ve onu çevreleyen şeyleri kontrol eder: "düz" ortalanmış altbilgi numarasını verir, "boş" ise o noktadan itibaren her sayfadaki üstbilgileri ve altbilgileri kaldırır. Sayının neye benzediği hakkında hiçbir şey söylemiyor.

`\pagenumbering{...}' sayının nasıl yazıldığını kontrol eder: `roman' i, ii, iii'yi üretirken `arapça' 1, 2, 3'ü üretir. Ayrıca I, II, III için 'Roman' ve a, b, c için 'alph' de vardır, ancak bunlara nadiren ihtiyacınız olur. `\sayfa numaralandırma' aynı zamanda sayfa sayacını da 1'e sıfırlar. Bu sıfırlama bir hata değil, bir özelliktir: bir tezin önsözünden i'ye ve vi'ye kadar numaralandırılmasını ve ardından 1. sayfadan birinci bölüme başlamasını sağlayan şeydir.

Bir köşedeki sayı veya devam eden bir başlıkla eşleştirilmesi gibi yerleştirme üzerinde tam kontrol istiyorsanız, bu, bu yerleşiklerden ziyade, fantezihdr paketinin işidir. Bkz. [koşan kafalar ve ayaklar](/learn/headers-footers/).

## Yaygın hata

"\pagestyle{boş}" derken "\thispagestyle{boş}" yazarsanız, tüm belgedeki sayılar sessizce kaldırılır ve bir incelemeci sayfalarınızın neden numarasız olduğunu sorana kadar bunu fark etmeyebilirsiniz. Kuralı unutmayın: `\thispagestyle` tek sayfalık bir istisnadır, `\pagestyle` belge çapında bir anahtardır.

Tezin ön konusu: [Roma/Arapça rehber](/learn/front-matter-page-numbers/).