---

title: "Temiz bir şekilde yeniden numaralandırılan ekler"
description: "ek, A/B bölümleri, tutarlı kalan sayaçlar."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Temiz bir şekilde yeniden numaralandırılan ekler

Bir ek, ana metni destekleyen ancak onu kesintiye uğratacak materyali içerir: uzun provalar, araştırma araçları, ekstra tablolar, uygulama ayrıntıları. Okuyucular, bölüm numaralarının devamı yerine eklerin A, B, C olarak yazılmasını bekler ve içindeki malzemenin de buna uygun olmasını bekler; dolayısıyla Ek A'daki şekil Şekil 47 değil, Şekil A.1'dir. LaTeX'te bu tek bir anahtardır, yeniden yapılandırma işi değildir.

## Anahtar

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

'\ek' bir ortam değil, bir bildirimdir: kapatılacak hiçbir şey yoktur. Göründüğü noktadan itibaren bölümleme sayaçları sıfırlanır ve harflere geçer. 'Rapor' ve 'kitap' sınıflarında, kendisinden sonraki her '\bölüm' Ek A, Ek B vb. olur ve içindeki bir '\bölüm' A.1 olur. Hala yalnızca kendi başlık metninizi yazıyorsunuz; "Ek A" etiketi ve harfler, tıpkı geçişten önceki bölüm numaralarının yaptığı gibi, sınıftan gelmektedir.

Hiçbir bölümü olmayan "makale"de, "\ek" bunun yerine "\bölüm"ü yeniden etiketler: ondan sonraki ilk bölüm Ek A olur. Aşağı yöndeki her şey otomatik olarak tutarlı kalır. İçindekiler bölümünde harfli başlıklar listelenir ve eke yerleştirilen bir '\etiket', herhangi bir özel işleme gerek kalmadan '\ref' aracılığıyla 'A' veya 'A.2'ye çözümlenir.

## Neler yeniden numaralandırılır ve neler yapılmaz

'Rapor' ve 'kitap'ta şekiller, tablolar ve denklemler bölümler içinde numaralandırılmıştır, dolayısıyla mektubu ücretsiz olarak alırlar: Ek B'nin ilk şekli Şekil B.1'dir. 'Makale'de bu sayaçlar tüm belge boyunca sürekli olarak çalışır ve '\ek' onlara dokunmaz, dolayısıyla denklem numaralandırma basitçe devam eder. Kısa bir makale için bu normaldir; Bununla yalnızca bir mekanın açıkça A önekli numaralar istemesi durumunda mücadele edin.

## Daha fazlasını istediğinizde

'Ek' paketi, düz anahtarda bulunmayan iyileştirmeler ekler. 'Ekler' ortamı, her başlıkta ve içindekiler tablosunda ('\usepackage[toc,titletoc,title]{appendix}`) "Ek" kelimesini yazdırabilir ve ekleri duyuran bir ayırıcı sayfa ekleyebilir. Şablonu zaten bunu yapmayan bir tez için bu seçenekler manuel olarak uğraşmaktan kurtarır.

Yaygın hatalardan biri, `\bölüm{Ek A: Ekstra deliller}'de olduğu gibi etiketi başlığa kendiniz yazmaktır. Sınıf kendi etiketini ekler, böylece çıktıda "Ek A Ek A: Ekstra provalar" yazar. Başlığa yalnızca başlık verin ve numaralandırma makinesinin tek işini yapmasına izin verin. Tek bir ekiniz varsa, tek "Ek A" bir stil sorusudur; çoğu mekan bunu kabul ediyor ve bazıları harfsiz bir `\chapter*{Ek}` tercih ediyor.