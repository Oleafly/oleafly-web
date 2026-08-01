---

title: "Tipografik suçlar olmadan sayfa sınırlamaları"
description: "Sınıra uymanın meşru yolları, evrakların işaretlenmesine neden olan hileler ve mekanların neden kontrol ettiği."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Tipografik suçlar olmadan sayfa sınırlaması

Makaleniz 10,4 sayfadır. Sınır 10'dur. Bir sonraki saatte ne olacağı, makaleyi düzeltip düzeltmeyeceğinizi veya makalenin masa tarafından reddedilmesine neden olacak bir biçimlendirme ihlali yapıp yapmayacağınızı belirler.

## Formatı değil içeriği sıkıştırın

Bu listeyi sırayla çalışın. Her adım, şablonu değil kağıdı değiştirdiği için damayı biçimlendirmek için görünmez.

1. **Önce düzyazıyı sıkılaştırın.** Yarım sayfalık taşma, genellikle ilgili işle ilgili uzun bir bölüm ve üç gereksiz geçiş cümlesinden oluşur. Kelimeleri kesmek kağıdı geliştirir. Boşlukları kesmek işe yaramaz.
2. **Dulları avlayın.** Son satırı bir veya iki kelimeden oluşan bir paragraf, bir satırın tamamını boşa harcar. Bu paragraftaki bir cümleyi yeniden yazmak onu geri alır.
3. **Rakamları dürüstçe yeniden boyutlandırın.** Pek çok rakamın büyük iç marjları var. Şeklin içindeki boşlukları kesin veya iki sütunlu şekli okunaklı kalıyorsa bir sütuna bırakın.
4. **İnce tablolar.** Dikey kuralları olmayan "booktabs" tabloları daha kompakttır ve daha iyi görünür; bkz. [güzel tablolar](/learn/booktabs-beautiful/) ve kısaltılmış sütun başlıkları gerçek genişlik satın alır.
5. **Vektör şekilleri kullanın.** PDF grafiklerinin ölçeği temiz bir şekilde küçültülür, böylece okunabilirlik kaybolmadan bunları pikselli PNG'lere göre daha fazla küçültebilirsiniz. Bulanık raster şekillerin kendi sorunları vardır, bkz. [PDF'lerdeki bulanık yazı tipleri](/learn/fuzzy-font-pdf/).
6. **Mekan izin veriyorsa, materyali bir eke veya eke taşıyın**. Kanıtlar, ekstra ablasyonlar ve hiperparametre tabloları klasik taşma adaylarıdır. Ekin limite dahil olup olmadığını kontrol edin; çoğu mekan bunu hariç tutar, bazıları ise hariç tutar.

## Suçlar

Bunlar kağıt yerine şablonu değiştirir. Program komiteleri otomatik format denetleyicilerini tam olarak insanlar denediği için çalıştırır:

| Suç | Nasıl yakalanır |
|---|---|
| `\vspace{-8pt}` her yere serpildi | Gözle görülür şekilde sıkışık aralık, sınıf varsayılanlarına göre farklılık gösterir |
| `\usepackage[margin=...]{geometri}` | Otomatik marj ölçümü |
| '\baselinestretch' veya yazı tipi boyutunun küçültülmesi | Sütun başına satır sayısı, yazı tipi boyutu araştırmaları |
| gövde metninde veya başlıklarda `\small` veya `\footnotesize` | Yazı tipi boyutu probları, gözden geçirenin gözleri |
| Negatif `\itemsep`, ezilmiş listeler | Sıkışık görünüm, kontrol buluşsal yöntemi |
| Sınıf dosyasını içindeki düzenlemelerle yeniden adlandırma | Resmi sınıfa karşı sağlama toplamı |

## Mekanlar aslında neden kontrol ediyor?

Sayfa sınırı bir adalet sözleşmesidir: her yazar aynı alana sahiptir ve her hakem sınırlı sayıda okumayı taahhüt eder. 10 sayfaya kadar hile yapan bir makale aslında 10 sayfalık dürüst makalelerle rekabet eden 11 sayfalık bir makaledir. Bu nedenle ihlaller bir tarz meselesi olarak değil, bir bütünlük sorunu olarak ele alınır. Pek çok mekan, inceleme yapmadan masa başında reddediyor ve "ama içerik iyiydi" diyen bir itiraz da yok.

## Dürüst son çare

Düzyazıyı sıkılaştırdıysanız, kayan noktaları incelttiyseniz, kanıtları eklere taşıdıysanız ve hala bittiyse: bir sonucu kesin. Acı verici ama yine de odaklanmış 10 sayfalık bir makale, tıka basa dolu bir makaleden daha iyidir. Hakemler yoğunluğu hissedebilirler ve daha uzun bir formatla [bir mekan seçmek](/learn/choose-your-venue/) her zaman bir sonraki gönderim için bir seçenektir.