---

title: "Başları ve ayakları çalıştırmak"
description: "başlık ve sayfa numarası için fantezi hdr desenleri."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Başları ve ayakları çalıştırmak

Koşan kafa, her sayfanın üst kısmındaki metin şerididir ve koşan ayak, alttaki karşılığıdır. Bir kitapta veya tezde genellikle bölüm başlığını ve sayfa numarasını taşırlar. Gönderilen bir makalede başlığın, yazarların kısa bir versiyonunu taşıyabilir veya hiçbir şey taşımayabilirler. LaTeX'in yerleşik sayfa stilleri ("düz", "boş", "başlıklar") temel bilgileri kapsar, ancak soldaki başlığınız ve sağdaki sayfa numarası gibi belirli bir kombinasyon istediğiniz anda "fancyhdr" paketine ulaşırsınız.

## Standart tarif

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Buradaki her satır bir iş yapar. `\usepackage{fancyhdr}` paketi girişinize yükler. `\pagestyle{fancy}` belgenin tamamını fantezihdr'nin yapılandırılabilir stiline geçirir. `\fancyhf{}` her üstbilgi ve altbilgi alanını temizler; bu önemlidir, çünkü fantezihdr neredeyse hiçbir zaman kendinizinkiyle karıştırılmasını istemediğiniz varsayılanlarla (sayfa numarası ve bölüm işaretleri) birlikte gelir. Temiz bir sayfadan başlamak sürprizleri dışarıda tutar.

Sonraki iki satır, alanları tekrar doldurur. `\fancyhead[L]{Kısa başlık}`, gerçek metni başlığın sol yuvasına yerleştirir ve `\fancyhead[R]{\thepage}` geçerli sayfa numarasını sağ yuvaya yerleştirir. `\sayfa` sayfa numarasına kadar genişleyen bir komuttur, dolayısıyla her sayfada otomatik olarak güncellenir. Eğer bir şeyleri en alta koymayı tercih ederseniz, eşleşen bir `\fancyfoot[L/C/R]{...}` var.

Son olarak, `\headrulewidth` başlığın altındaki ince yatay çizgiyi kontrol eder. Bunu "0,4pt" olarak ayarlamak ince bir çizgi çizer; kuralı tamamen kaldırmak için bunu '0pt' olarak ayarlayın. Bir `\footrulewidth` de mevcuttur ve varsayılan olarak sıfırdır.

## İki taraflı belgeler

Belge sınıfınız "iki taraflı" ("kitap" için varsayılan) kullanıyorsa, sayfalar çift ve tek arasında değişir ve başlıklar genellikle birbirini yansıtır. fantezihdr bunu çift/tek seçicilerle ele alır: `\fancyhead[LE,RO]{\thepage}` sayfa numarasını çift sayfaların soluna ve tek sayfaların sağına yerleştirir; bu, okuyucunun başparmağının onu bulduğu yerdir. Klasik kitap düzenini yeniden oluşturmak için bunu geçerli bölüm ve bölüm başlıklarını içeren '\leftmark' ve '\rightmark' ile birleştirebilirsiniz.

## Bölüm sayfaları ve boş görünüm

Bölüm açılış sayfaları sizin süslü tarzınızı göz ardı ediyor çünkü `\chapter` perde arkasında `\thispagestyle{plain}` ifadesini kullanıyor. Bu kasıtlıdır ve çoğu tasarım bunu korur. Bu sayfaların çıplak olmasını istiyorsanız, 'düz'ün ne anlama geldiğini yeniden tanımlamak için '\fancypagestyle{plain}{\fancyhf{}}' ekleyin.

Beklenecek yaygın bir uyarı: fantezihdr "\headheight"ın çok küçük olduğundan şikayet edebilir. Düzeltme tam olarak mesajın önerdiği şeydir; örneğin giriş bölümünde "\setlength{\headheight}{14pt}" veya zaten kullanıyorsanız [geometri paketine](/learn/margins-geometry/) "headheight=14pt" ifadesini iletmek. Bu bir düzen rezervasyonudur, bir hata değildir, ancak susturulması günlüğünüzü temiz ve temel ızgaranızın dürüst olmasını sağlar.