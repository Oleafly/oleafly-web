---

title: "Yöntem, sonuçlar, tartışma: makine dairesi"
description: "Tekrarlanabilirlik, soruları yanıtlayan sonuçlar, ablasyonlar ve dürüst sınırlamalar."
category: "paper-anatomy"
order: 4
level: "intermediate"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Yöntem, sonuçlar, tartışma: makine dairesi

Bir makalenin ortası gerçek bilimin yaşadığı yerdir. Aynı zamanda belirsiz yazıların en çok zarar verdiği yerdir çünkü bu bölümler hassasiyete göre derecelendirilir. İşte her birinin okuyucuya borcu var.

## Yöntem: tekrarlanabilirlik çubuktur

Yöntem bölümü için yapılan test açık ve nettir: Yetkili bir meslektaş çalışmanızı metinden ve ek materyalden çoğaltabilir mi? Bu, titreşimler değil, somut ayrıntılar anlamına gelir. Tam ayarları, veri bölümlerini, ön işleme adımlarını ve hiperparametreleri bildirin veya tam olarak nerede yaşadıklarını söyleyin ("tüm ayarlar Ek B'de").

Yararlı bir disiplin: Yazarken aldığınız her kararın sürekli bir listesini tutun. Her biri yöntem bölümüne, eke veya yayınlanan koda girer. Hiçbir yere gitmiyorsa, bir incelemeci onu bulacaktır.

## Sonuçlar: sorduğunuz soruları yanıtlayın

Güçlü deney bölümleri, deneylerin yanıtladığı soruları çoğunlukla kelimenin tam anlamıyla belirterek açılır: "Şunu soruyoruz: (1) Budama doğruluğu koruyor mu? (2) Hızlanma nereden geliyor?" Daha sonra her alt bölüm bir soruyu yanıtlar. Belirtilen bir soruyu yanıtlamayan sonuçlar önemsizdir ve incelemeciler iddialar ile kanıtlar arasındaki uyumsuzluğu her şeyden daha hızlı fark ederler.

## Tablolar ve grafikler

| Şu durumlarda bir tablo kullanın | Şu durumlarda bir çizim kullanın |
|---|---|
| Kesin değerler önemlidir | Trend önemlidir |
| Sabit kriterlere göre yöntemlerin karşılaştırılması | Taranan bir değişken genelinde davranış gösteriliyor |
| Az sayı, yüksek hassasiyet | Birçok sayı, tek şekil |

Klasik kural: arama için tablolar, şeklin karşılaştırılması için grafikler. Her ikisinin de okunabilir hale getirilmesi hakkında daha fazla bilgi için [şekiller, tablolar ve karşılaştırmalar](/learn/figures-tables-comparisons/), [tablolar](/learn/create-table/) ve [başlıklar ve etiketler](/learn/captions-labels/) içindeki LaTeX mekanikleri ile.

## Ablasyonlar, tek paragrafta

Ablasyon, yerini aldığını göstermek için yönteminizin bir bileşenini teker teker kaldırır. Eğer yönteminiz üç parçadan oluşuyorsa ve sistemin tamamı her iki parçalı varyantı geçiyorsa, her parça gerekçelendirilmiştir. Ampirik alanlardaki incelemeciler ablasyonları masa üstü riskler olarak ele alıyorlar: beş bileşeni tanıtan ve bunları hiçbir zaman tek tek test etmeyen bir yöntem bölümü desteklenmiyor olarak okunuyor. Tek bir kompakt masa genellikle işi yapar.

## Tartışma ve sonuç

Bunlar o kadar sık ​​birleşiyor ki insanlar farklı olduklarını unutuyor. Tartışma şu yorumu yapıyor: Sonuçlar ne anlama geliyor, nerede şaşırtıcıydı, neyi göstermiyor? Sonuç şu şekilde özetleniyor: Okuyucu neyi hatırlamalı ve bundan sonra ne olacak? Tartışma yeni düşünceyi ekler. Sonuç, bilerek yeni bir şey eklemez. Eğer sonucunuz başka hiçbir yerde bulunmayan bir iddia içeriyorsa, onu taşıyın.

## Sınırlamalar: artık standart, gerçekten kullanışlı

Açık sınırlamalar bölümleri birçok yerde isteğe bağlı olmaktan beklenene geçmiştir ve bazıları bunları gerektirir. Sizinkine bir itiraf olarak değil, bir güvenilirlik aracı olarak davranın. Gerçek sınırları belirtin: test etmediğiniz veri kümeleri, kanıt ihtiyaçlarınız için varsayımlar, hesaplama maliyetleri, gözlemlediğiniz arıza durumları. Eleştirmenler bunları zaten bulacaklardı. Öncelikle bunları adlandırmak, zayıflıkları kendi çalışmanızı anladığınızı gösteren kanıtlara dönüştürür ve bu, bir eleştirmenin halka açık bir incelemede "yazarlar bunu kabul etmiyor..." yazmasından çok daha iyidir.

## Bir yapısal ipucu

Önce gerçek sayılarınızdan sonuçlar bölümünü yazın. Daha sonra bu sayıları tam olarak neyin ürettiğini açıklamak için yöntem bölümünü ve bunları yorumlamak için tartışmayı yazın. Okuma sırasına göre yazmak sizi çalıştırdığınız yöntem yerine çalıştırmayı düşündüğünüz yöntemi tanımlamaya teşvik eder.