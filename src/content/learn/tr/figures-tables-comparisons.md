---

title: "Şekiller, tablolar ve karşılaştırmalar makaleyi taşır"
description: "Paket altyazılar, karşılaştırma tabloları, grafikler ve tablolar ve görsel tutarlılık."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Makaleyi taşıyan şekiller, tablolar ve karşılaştırmalar

Meşgul bir incelemecinin makalenizi gerçekte nasıl okuduğunu burada bulabilirsiniz: özet, sonra her şekil ve tabloyu gözden geçirin, sonra belki metin. Eğer görselleriniz hikayeyi tek başına anlatıyorsa, tek bir paragraf okunmadan incelemenin yarısını kazanmış olursunuz. Onları kağıtmış gibi tasarlayın. Pek çok okuyucu için öyle.

## Her figürün bir paket açıklamasına ihtiyacı vardır

"Veri Kümesi A'daki Sonuçlar" yazan bir başlık, gazetedeki en değerli gayrimenkulü boşa harcıyor. "Bizim yöntemimiz (mavi) maliyetin yarısı kadar bir maliyetle temel çizgiyle eşleşiyor; model boyutu arttıkça aradaki fark genişliyor" yazan bir başlık, konuyu gözden kaçıran incelemeciye tam olarak ne sonuca varması gerektiğini söyler. Başlıkları iddia olarak yazın, ardından şeklin bunları kanıtlamasına izin verin. Bir okuyucu yalnızca altyazılarınızı okuyabilmeli ve argümanı yeniden oluşturabilmelidir. Altyazıların ve numaralandırmanın mekaniği [altyazılar ve etiketler](/learn/captions-labels/) adresinde mevcuttur.

## Karşılaştırma tabloları: inceleyenlerin favorisi

Deneysel makalelerde iki tablo modeli hakimdir:

**Temel tablo.** Önceki çalışmanıza göre yönteminiz, her biri bir satır, en iyi sayılar kalın harflerle yazılmıştır. Kötü bir şekilde kaybettiklerinde bile bariz temelleri ekleyin. İyi bilinen bir temel çizgiyi atlamak, bir şeyi saklamak anlamına gelir.

**Onay işareti matrisi.** Alt tarafta yetenekler, üst tarafta yöntemler, bir yöntemin özelliğe sahip olduğu onay işaretleri. Çalışmanızı tek bakışta konumlandırır:

| Yetenek | Önceki A | Önceki B | Bizimki |
|---|---|---|---|
| Yeniden eğitime gerek yok | evet | hayır | evet |
| uygun ölçekte çalışır | hayır | evet | evet |
| Açık kaynak | hayır | hayır | evet |

Dürüst ol. Gözden geçirenler, yönteminizin kazanacağı satırları seçmenin püf noktasını biliyorlar.

## Arsa mı yoksa tablo mu?

Şekil mesaj olduğunda bir çizim kullanın: bir trend, bir geçiş, bir ölçeklendirme eğrisi. Tam sayılar mesaj olduğunda bir tablo kullanın: Herkesin karşılaştıracağı kıyaslama puanları. Şüpheye düştüğünüzde okuyucunun bununla ne yapacağını sorun. Numarayı vereceklerse tablo. Trendi tanımlayacaklarsa, plan yapın.

## Tutarlılık güvenilirliktir

Küçük görsel tutarsızlıklar sessizce dikkatsizliğin sinyalini verir:

- Tüm şekillerde aynı yazı tipi ailesi ve boyutu, ölçeklendirmeden sonra gövde metni boyutuna yakın.
- Her parselde aynı yöntem için aynı renk. Şekil 2'de yönteminiz mavi ise her yer mavidir.
- Baştan sona aynı eksen etiketi kuralları ve birimleri.
- Basılı boyutta okunabilir. Bir onay etiketini okumak için yakınlaştırmanız gerekiyorsa, bu çok küçüktür.

Mümkün olan her yerde ekran görüntüleri yerine vektör formatlarını (PDF, SVG) dışa aktarın. Bulanık metinli bitmap grafikleri sade görünmenin en hızlı yoludur.

## Bunları LaTeX'te oluşturmak

Float sisteminin yerleştirilmesi, boyutlandırılması ve düzenlenmesi [resim ekleme](/learn/insert-images/) bölümünde ele alınır ve tabloları temizleme [tablo oluşturma](/learn/create-table/) bölümünde ele alınır. Diyagramlar, mimari çizimler ve akış şemaları için TikZ, belge yazı tiplerinizle tam olarak eşleşen vektör grafikleri üretir. [TikZ tanıtımı](/learn/tikz-intro/) ile başlayın. TikZ'nin elle yazılması yavaş geliyorsa Oleafly'nin Diyagram Oluşturucusu, TikZ rakamlarını görsel olarak hazırlamanıza ve daha sonra kodda iyileştirmenize yardımcı olabilir.

## Beş dakikalık denetim

Göndermeden önce, inceleyen kişi kendinizi ters çevirin: sırayla yalnızca altyazıları okuyun. Hikayenin tamamını anlatıyorlar mı? Açıklama olmadan kalın, renkli veya yıldızlı bir şey var mı? Bir yabancı her şekilde hangi yöntemin sizin olduğunu bilir mi? Başarısız olanı düzeltin ve ardından gönderin.