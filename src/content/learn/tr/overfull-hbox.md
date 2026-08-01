---

title: "Aşırı dolu yatay kutu"
description: "Kenar boşluğuna giren çizgiler ve ne zaman bakım yapılması gerektiği."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Aşırı dolu yatay kutu

## Belirti

Günlük, paragrafta 87-92. satırlarda 'Aşırı \hkutu (14,2 punto çok geniş)' gibi bir şey rapor ediyor ve PDF'de bu paragrafın bir satırı sağ kenar boşluğuna çıkıyor. Belge hâlâ derleniyor, çünkü bu bir hatadan ziyade bir uyarıdır, ancak çıkıntılı çizgi baskıda görülebilmektedir ve inceleyenler bunu fark etmektedir. Taslak modunda (`\documentclass[taslak]{...}`) LaTeX her suçluyu siyah bir dikdörtgenle işaretler, bu da onların fark edilmesini kolaylaştırır.

## Neden oluyor?

TeX, olası her kırılma noktasını tartarak ve toplamda en az "kötülük" içeren düzenlemeyi seçerek paragrafları satırlara böler; burada kötülük, bir satırdaki boşlukların ne kadar esnemesi veya daralması gerektiğini ölçer. Bazen kabul edilebilir bir düzenleme mevcut olmayabilir: uzun bir URL hiçbir kesme noktası içermez, satır içi matematik neredeyse kırılmaz olarak kabul edilir veya uzun bir kelimenin tireleme girişi yoktur. TeX, boşlukları toleransının ötesine uzatmak ve gözle görülür şekilde boşluklu bir çizgi oluşturmak yerine, çizginin uzamasına izin verir ve size bunu anlatır. Aşırı dolu kutu, TeX'in paragrafı farklı bir şekilde çirkinleştirmeyi reddetmesidir.

## En iyiden en basite doğru düzeltmeler

En iyi düzeltme editoryaldir. Cümleyi yeniden ifade etmek, uzun kelimeyi satır sonundan uzaklaştırmak veya bir cümleyi ikiye bölmek genellikle herhangi bir kod olmadan sorunu ortadan kaldırır ve çoğu zaman düzyazıyı geliştirir.

URL'ler için, adresi "url" veya "hyperref" paketinden "\url{...}" içine sarın, böylece eğik çizgiler ve noktalarda bölünebilir ve hemen hemen her karakterde ara vermeniz gerektiğinde "xurl" paketini yükleyin. Geniş satır içi formül için ya onu görüntüleyin ya da denklemin kendisi satır için çok uzun olduğunda "amsmath"tan "çoklu satır" gibi kırılabilir bir ortam kullanın.

Giriş seviyesindeki iki iyileştirme küresel olarak yardımcı oluyor. 'Mikrotip'in yüklenmesi, karakterlerin kesirli olarak çıkıntı yapmasına ve yazı tiplerinin hafifçe genişlemesine olanak tanır; bu, siz fark etmeden birçok marjinal durumu çözer. Belge dilinin 'babel' veya 'polyglossia' yoluyla doğru şekilde ayarlanması TeX'e doğru tireleme modellerini verir, çünkü tireleyemediği bir sözcük, bölemeyeceği bir sözcüktür.

## Ne zaman bakım yapılmalı

Uyarıdaki sayı aşımdır. Kabaca 2 puntodan küçük olan her şey okuyucular tarafından görülemez ve taslakta göz ardı edilmesi güvenlidir. Başkaları PDF'yi görmeden onlarca noktanın düzeltilmesi gerekiyor. Mantıklı iş akışı, yazarken aşırı dolu kutuları göz ardı etmek, ardından günlüğü göndermeden önce bir kez süpürmek ve kalan bir avuç dolusu kutuyu önce en büyüğü olmak üzere düzeltmektir. Özensizliğe ve diğer küresel tolerans hilelerine karşı koyun: Tüm belge boyunca birkaç çıkıntılı çizgiyi gevşek, eşit olmayan boşluklarla değiştirirler.