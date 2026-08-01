---

title: "Daha büyük ve daha küçük tip"
description: "11 punto gibi sınıf seçenekleri ve satır aralığını bozmayan yerel boyut anahtarları."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Daha büyük ve daha küçük tip

LaTeX'teki yazı boyutu iki düzeyde ayarlanır: sınıf seçeneklerinde bir kez seçilen belge çapındaki temel boyut ve farklı olması gereken aralıklar için yerel anahtarlar. Temel boyut diğer her şeyi yönlendirir. Başlıklar, dipnotlar ve yerel boyutlar buna göre tanımlanır.

## Belge çapında

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

Sınıf seçeneği gövde metninin boyutunu ayarlar. '10pt' varsayılandır ve '11pt' ve '12pt' ortak alternatiflerdir; standart sınıflar yalnızca bu üçünü destekler. Başlık boyutları, dipnot boyutları ve satır aralığının tümü tabandan türetildiğinden, seçeneğin değiştirilmesi belgenin tamamını orantılı olarak yeniden ölçeklendirir. 12pt'nin üzerinde bir taban boyutuna ihtiyacınız varsa, 'extarticle' veya KOMA-Script sınıfları gibi sınıflar daha geniş bir seçenek yelpazesini kabul eder.

## Yerel anahtarlar

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Bunlar, argüman içeren komutlar yerine bildirimlerdir: `\large', o noktadan geçerli grup bitene kadar boyutu değiştirir ve `{\large big}` etrafındaki parantezler, erişimini sınırlandırır. En küçükten en büyüğe tam merdiven şöyledir: `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Her adım, sınıf seçeneğine bağlı olarak somut bir boyuta eşlenir; dolayısıyla, "12pt" altındaki "\large", "10pt" altındaki "\large"den daha büyüktür. Anahtarları sabit boyutlar olarak değil, gövde metninden birkaç adım uzakta düşünün.

Satır aralığının bir inceliği vardır. Boyut anahtarı, taban çizgisi mesafesini yalnızca etkinken sona eren paragraflar için ayarlar. Daha büyük boyutta çok paragraflı bir aralık için, "{\large ... \par}" örneğinde olduğu gibi, kapanış parantezinden önce "\par" ile bitirerek paragraf sonunu grup içinde tutun. Aksi takdirde, son paragrafta büyük boyutlu harflerin altındaki normal boyutlu satır aralıkları korunur ve satırlar çarpışır.

## Boyutlara karşı yapı

Sahte başlıklar için boyut değiştirmeleri kullanmaya direnin. `\bölüm' ve akrabaları sizin için boyutu ayarlar, ayrıca başlığı numaralandırır, içindekiler listesine ekler ve PDF yer imleri oluşturur. Elle oluşturulmuş bir `{\Large \textbf{...}}` satırı bunların hiçbirini vermez. Aynı fikir, [yazı tipiyle mücadele etmeden vurgu](/learn/bold-italic/) kapsamında ele alınan vurgu için de geçerlidir. Bir tablonun altına dipnot boyutunda bir açıklama veya başlık sayfasındaki bir satır gibi gerçekten yerel ihtiyaçlar için manuel boyut anahtarlarını ayırın. Bir belgedeki her başlığın yeniden biçimlendirilmesi gerekiyorsa, her başlığı elle boyutlandırmak yerine sınıfı değiştirin veya 'titlesec' gibi bir paket kullanın.