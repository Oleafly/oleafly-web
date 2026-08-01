---

title: "Tek, yarım, çift"
description: "belgenin tamamı veya yerel bir blok için alan ayarlayın."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Tek, yarım, çift

Varsayılan olarak LaTeX, metni tek aralıklı olarak ayarlar ve satırlar arasındaki mesafe yazı tipine uyacak şekilde seçilir. Bitmiş bir kitap böyle görünür, ancak daha gevşek olması için çok sayıda belge gerekir: Tez düzenlemeleri genellikle bir buçuk veya iki satır aralığı gerektirir ve dergiler, hakemlere karalama alanı sağlamak için taslakların çift aralıklı olmasını ister. Satır aralığını 'setspace' paketiyle değiştirin. Belgenin tek aralıklı kalması gereken kısımlarını bozmadan gövde metnini ayarlar.

## Belge genelinde aralık

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Paketi giriş kısmına yükleyin, ardından üç beyandan birini yayınlayın. `\onehalfspacing` belgenin tamamını bir buçuk satır aralığına ayarlar, `\doublespace` bunu iki katına çıkarır ve `\singlespacing` normale döner; bu, yarı yolda geri dönmeniz gerektiğinde kullanışlıdır. Beyannameler göründükleri yerden yürürlüğe girer, dolayısıyla giriş kısmına bir beyan koymak her şeyi kapsar.

'\baselinestretch' veya '\linespread' ile elle oynamak yerine setspace kullanmanın nedeni, kasıtlı olarak kendi başına bıraktığı şeydir: dipnotlar, şekil ve tablo başlıkları ve kayan noktalar tek aralıklı kalır, bu da tam olarak tez yönergelerinin ve tipografik geleneğin beklediği şeydir. Saf bir küresel genişleme, dipnotlarınızı da iki katına çıkarır ve bu da kötü okunur.

Kısayolların kapsamadığı bir faktöre ihtiyacınız varsa, `\setstretch{1.25}` herhangi bir çarpanı kabul eder. Kelime işlemci anlamında "çift boşluk bırakmanın" LaTeX terimlerinde yaklaşık 1,66'lık bir uzatmaya karşılık geldiğini ve "\çift boşluk bırakmanın" zaten bunu açıkladığını unutmayın; bu nedenle, bir düzenleme tam anlamıyla gerektirmediği sürece "\setstretch{2}" yazma dürtüsüne direnin.

## Yalnızca bir blok için aralık

Bazen belgenin yalnızca bir kısmı farklı aralıklara ihtiyaç duyar: uzun bir alıntı, bir beyan sayfası veya geri kalanı çift aralıklı olması gereken bir özet.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

'Boşluk' ortamı, verilen uzatma faktörünü (burada 1.2) yalnızca '\begin' ve '\end' arasındaki metne uygular ve daha önce yürürlükte olanı geri yükler. Paket ayrıca yaygın durumlar için hazır 'tek alanlı' ve 'çift alanlı' ortamlar da sağlar. Değişikliğin kapsamı çevre tarafından belirlendiğinden, belgenin ortasında çıplak bildirimler yayınlamanın olağan başarısızlık modu olan geri dönmeyi unutamazsınız.

## Bir uyarı

Sayfa sayısına ulaşmak için satır aralığını kullanmayın. Bir kağıdın daha uzun görünmesini sağlamak için 1.1'e kadar uzanmak kitaptaki en eski numaradır ve katı biçimlendirmeye sahip mekanlar bunu yakalayan otomatik kontroller gerçekleştirir. [Sayfa sınırı kılavuzu](/learn/page-limits-without-crimes/) meşru alternatifleri kapsar. Ayar alanından ne anlama geldiğine göre tasarruf edin: açık bir aralık gereksinimini karşılamak, ardından kameraya hazır sürüm için tek aralıklamaya geri dönmek.