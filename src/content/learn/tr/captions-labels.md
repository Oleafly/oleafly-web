---

title: "Numarayla eşleşen başlıklar"
description: "Numaranın sabit kalması için başlığın üstüne etiket koyun."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Numarayla eşleşen başlıklar

Çapraz referanslar, LaTeX'in bir kelime işlemciden daha iyi yaptığı şeylerden biridir. "Şekil 3"ü asla elle yazmazsınız. Bunun yerine şekle bir etiket iliştirirsiniz ve LaTeX'in numarayı belirtilen her yere doldurmasına izin verirsiniz, böylece sayılar ne kadar yeniden sıralarsanız, eklerseniz veya silseniz de doğru kalır. Mekanizmanın neredeyse herkesi en az bir kez şaşırtan bir kuralı var: "\caption" ve "\label" sırası önemlidir.

## Sıra neden önemlidir?

'\caption' komutu iki iş yapar. Şekil veya tablonuzun altındaki başlık metnini yazdırır ve sayacı çalıştırarak bu kayan noktayı Şekil 3'e dönüştürür. '\label' komutu insanların beklediğinden daha aptalca bir şey yapar: en son atanan sayı ne olursa olsun, ne olursa olsun kaydeder. "Bir figürün içinde" olduğuna dair hiçbir fikri yok. Bu nedenle etiket, başlıktan sonra gelmelidir:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Eğer `\caption'dan önce `\label`i koyarsanız, başlık henüz şekil sayacına geçmemiştir, dolayısıyla etiket tamamen başka bir yerden, genellikle geçerli bölümden en son sayıyı yakalar. Şekil aslında Şekil 7 iken metniniz "bkz. Şekil 2.4" der. Bu klasik semptomdur: şekil numaraları yerine bölüm numaralarını gösteren referanslar neredeyse her zaman etiketin çok erken yerleştirildiği anlamına gelir. En güvenli alışkanlık hem şekil hem de tablolarda her seferinde ``\caption``dan hemen sonra gelen satıra ``\label`` yazmaktır.

## Etikete referans verme

Metninizde referansı şu şekilde yazın:

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` çıplak sayıya kadar genişler ve "Şekil" kelimesini kendiniz sağlarsınız. Aralarındaki `~`, LaTeX'in "Figür"den sonra bir satırı bitirip bir sonraki satıra "3" ile başlamasını engelleyen, bölünemez bir boşluktur. "fig:", "tab:", "sec:" ve "eq:" gibi önekler tamamen gelenekseldir, LaTeX bunları yorumlamaz ancak etiketlerinizi okunabilir tutar ve bir şeklin ve tablonun yanlışlıkla bir adı paylaşmasını engeller.

`\pageref{fig:neat}` ifadesinin rakamın geldiği sayfa numarasını verdiğini unutmayın; bu, kayan noktanın bahsedildiği yerden uzaklaşabileceği uzun belgelerde kullanışlıdır. Referans komutlarına ilişkin tam bir tur için bkz. [açıklanan her komut](/learn/every-command-explained/).

## İki kez derleme ve diğer tuzaklar

Referanslar derleyici çalıştırmaları arasında çözümlenir: ilk geçiş etiket konumlarını `.aux' dosyasına yazar ve ikinci geçiş bunları geri okur. İkinci geçişe kadar, referanslar kalın soru işaretleri olarak yazdırılır, dolayısıyla PDF'nizdeki `??` genellikle yalnızca "tekrar derle" anlamına gelir, hiçbir şeyin bozuk olduğu anlamına gelmez. Oleafly dahil çoğu editör, geçişleri sizin için otomatik olarak yeniden çalıştırır. Eğer `??` tekrarlanan derlemelerde hayatta kalırsa, etiket mevcut değildir. Olası nedenler, etiket adındaki bir yazım hatası veya "\etiket"i geride bırakırken sildiğiniz bir "\başlık"tır.