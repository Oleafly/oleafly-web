---

title: "Matrisler ve diziler"
description: "pmatrix, bmatrix, vmatrix ve özel dizi sütunları."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Matrisler ve diziler

LaTeX'teki bir matris, hücrelerden oluşan bir ızgaradır: `&` sütunları ayırır, `\\` satırları ayırır ve bir ortam, ızgarayı doğru sınırlayıcı çiftiyle sarar. Matris ortamları 'amsmath'tan gelir, dolayısıyla bu derlemelerden herhangi biri öncesinde paketin girişinizde olması gerekir.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## Matris ortamları

Üçü de aynı vücudu paylaşıyor. Yalnızca çevredeki sınırlayıcılar değişir. 'pmatrix', matrisler ve vektörler için en yaygın stil olan ızgarayı parantez içine alır. "bmatrix" köşeli parantezleri kullanır ve "vmatrix", bir determinantın standart gösterimi olan tek dikey çubukları kullanır. Ayrıca sınırlayıcı içermeyen düz "matrix", parantezli "Bmatrix" ve normlar için çift çubuklu "Vmatrix" de mevcuttur. İçeride, 'a & b' bir satırın iki sütununu doldurur, '\\' sonraki satırı başlatır ve her satır aynı sayıda '&' ayırıcısını taşımalıdır.

Bu ortamlar matematik modunda görünmelidir. Bunları `\[ ... \]' içine sarın veya bir denklem içinde kullanın. Bir cümlenin ortasındaki küçük bir matris için, yine "amsmath"tan gelen "smalmatrix", çizgiyi uzatmayan kompakt bir versiyon ayarlar: "$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$".

## Özel dizi

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Sütun başına kontrole ihtiyaç duyduğunuzda, 'dizi' genel araçtır. Zorunlu argümanı bir sütun belirtimidir: burada 'r|cc' sağa hizalanmış bir sütunu, bir dikey kuralı ve ardından iki ortalanmış sütunu bildirir. Hizalama harfleri 'l', 'c' ve 'r'dir ve '|' sütunlar arasına bir kural çizer. Satırlar arasındaki '\hline' tüm genişlik boyunca yatay bir kural çizer. `dizi' kendine ait hiçbir dış sınırlayıcı çizmez. İsterseniz `\left(` ve `\right)` ile eşleştirin. Metindeki tablolar için kullanılan 'tabular' ortamın matematik modu kardeşidir.

## Yaygın hatalar

"Ekstra hizalama sekmesi \cr olarak değiştirildi" hatası, bir satırın sütun sayısının izin verdiğinden daha fazla "&" ayırıcıya sahip olduğu anlamına gelir; bu genellikle önceki satırın sonundaki eksik bir "\\"ye kadar uzanır. "Ortam pmatrix tanımsız", `\usepackage{amsmath}`'ın eksik olduğu anlamına gelir. Matematik modunun dışına yapıştırılan bir matris "Eksik $ eklenmiş" olarak başarısız oluyor. Sınırlayıcılar yeniyse [matematik modu temelleri](/learn/math-mode/) konusuna bakın. Her sınırlayıcı stilinde ikiye ikiyi karşılaştırmak [canlı oyun alanında](/live/) birkaç saniye sürer.